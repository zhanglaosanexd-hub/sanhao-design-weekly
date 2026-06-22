const FIELD_NAMES = {
  email: "邮箱",
  subscribedAt: "订阅时间",
  status: "订阅状态",
  unsubscribed: "是否退订",
  unsubscribedAt: "退订时间",
  unsubscribeToken: "退订令牌",
  source: "来源页面",
  issue: "来源期数",
  userAgent: "用户代理",
  updatedAt: "更新时间",
};

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
};

export async function onRequestPost({ request, env }) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: "请求格式不正确。" }, 400);
  }

  if (payload.website) {
    return jsonResponse({ ok: true, message: "订阅成功。" });
  }

  const email = normalizeEmail(payload.email);
  if (!isValidEmail(email)) {
    return jsonResponse({ ok: false, message: "请填写有效的邮箱地址。" }, 400);
  }

  const missing = getMissingEnv(env);
  if (missing.length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: "订阅服务正在配置中，请稍后再试。",
        missing,
      },
      503,
    );
  }

  const now = Date.now();
  const token = await createUnsubscribeToken(email);
  const fields = {
    [FIELD_NAMES.email]: email,
    [FIELD_NAMES.subscribedAt]: now,
    [FIELD_NAMES.status]: "已订阅",
    [FIELD_NAMES.unsubscribed]: false,
    [FIELD_NAMES.unsubscribeToken]: token,
    [FIELD_NAMES.source]: limitText(payload.source || request.headers.get("referer"), 500),
    [FIELD_NAMES.issue]: limitText(payload.issue, 40),
    [FIELD_NAMES.userAgent]: limitText(request.headers.get("user-agent"), 500),
    [FIELD_NAMES.updatedAt]: now,
  };

  try {
    const existing = await findRecordByField(env, FIELD_NAMES.email, email);
    const record = existing
      ? await updateRecord(env, existing.record_id, fields)
      : await createRecord(env, fields);

    return jsonResponse({
      ok: true,
      message: "订阅成功，下一期更新会发到这个邮箱。",
      recordId: record.record_id,
    });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        message: "订阅暂时没有成功，请稍后再试。",
        detail: error.message,
      },
      502,
    );
  }
}

export async function onRequestOptions() {
  return jsonResponse({ ok: true });
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function limitText(value, maxLength) {
  if (!value) return "";
  return String(value).slice(0, maxLength);
}

async function createUnsubscribeToken(email) {
  const source = `${email}:${crypto.randomUUID()}:${Date.now()}`;
  const data = new TextEncoder().encode(source);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getMissingEnv(env) {
  return [
    "FEISHU_APP_ID",
    "FEISHU_APP_SECRET",
    "FEISHU_BITABLE_APP_TOKEN",
    "FEISHU_BITABLE_TABLE_ID",
  ].filter((key) => !env[key]);
}

async function getTenantAccessToken(env) {
  const response = await fetch(
    "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
    {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({
        app_id: env.FEISHU_APP_ID,
        app_secret: env.FEISHU_APP_SECRET,
      }),
    },
  );
  const result = await response.json();

  if (!response.ok || result.code !== 0) {
    throw new Error(result.msg || "无法获取飞书 tenant_access_token。");
  }

  return result.tenant_access_token;
}

async function feishuRequest(env, path, options = {}) {
  const token = await getTenantAccessToken(env);
  const response = await fetch(`https://open.feishu.cn/open-apis${path}`, {
    ...options,
    headers: {
      ...JSON_HEADERS,
      authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
  const result = await response.json();

  if (!response.ok || result.code !== 0) {
    throw new Error(result.msg || `飞书接口请求失败：${path}`);
  }

  return result.data;
}

async function findRecordByField(env, fieldName, value) {
  const params = new URLSearchParams({
    page_size: "1",
    filter: `CurrentValue.[${fieldName}]="${escapeFilterValue(value)}"`,
  });
  const data = await feishuRequest(
    env,
    `/bitable/v1/apps/${encodeURIComponent(env.FEISHU_BITABLE_APP_TOKEN)}/tables/${encodeURIComponent(
      env.FEISHU_BITABLE_TABLE_ID,
    )}/records?${params}`,
  );

  return data.items?.[0] || null;
}

async function createRecord(env, fields) {
  const data = await feishuRequest(
    env,
    `/bitable/v1/apps/${encodeURIComponent(env.FEISHU_BITABLE_APP_TOKEN)}/tables/${encodeURIComponent(
      env.FEISHU_BITABLE_TABLE_ID,
    )}/records`,
    {
      method: "POST",
      body: JSON.stringify({ fields }),
    },
  );

  return data.record;
}

async function updateRecord(env, recordId, fields) {
  const data = await feishuRequest(
    env,
    `/bitable/v1/apps/${encodeURIComponent(env.FEISHU_BITABLE_APP_TOKEN)}/tables/${encodeURIComponent(
      env.FEISHU_BITABLE_TABLE_ID,
    )}/records/${encodeURIComponent(recordId)}`,
    {
      method: "PUT",
      body: JSON.stringify({ fields }),
    },
  );

  return data.record;
}

function escapeFilterValue(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...JSON_HEADERS,
      "cache-control": "no-store",
    },
  });
}
