const FIELD_NAMES = {
  status: "订阅状态",
  unsubscribed: "是否退订",
  unsubscribedAt: "退订时间",
  unsubscribeToken: "退订令牌",
  updatedAt: "更新时间",
};

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
};

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return htmlResponse("退订链接不完整", "缺少退订令牌，请检查链接是否复制完整。", 400);
  }

  const missing = getMissingEnv(env);
  if (missing.length > 0) {
    return htmlResponse("退订服务正在配置中", "请稍后再试，或直接联系三号设计周刊处理。", 503);
  }

  try {
    const existing = await findRecordByField(env, FIELD_NAMES.unsubscribeToken, token);
    if (!existing) {
      return htmlResponse("未找到订阅记录", "这个退订链接可能已经失效。", 404);
    }

    await updateRecord(env, existing.record_id, {
      [FIELD_NAMES.status]: "已退订",
      [FIELD_NAMES.unsubscribed]: true,
      [FIELD_NAMES.unsubscribedAt]: Date.now(),
      [FIELD_NAMES.updatedAt]: Date.now(),
    });

    return htmlResponse("已退订", "你已经退订三号设计周刊邮件通知。");
  } catch {
    return htmlResponse("退订暂时没有成功", "请稍后再试，或直接联系三号设计周刊处理。", 502);
  }
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

function htmlResponse(title, message, status = 200) {
  return new Response(
    `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} · 三号设计周刊</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #f2efe7;
        color: #171714;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
      }
      main {
        width: min(560px, calc(100vw - 48px));
        border-top: 4px solid currentColor;
        border-bottom: 1px solid currentColor;
        padding: 32px 0;
      }
      p {
        color: #6f6c65;
        line-height: 1.8;
      }
      a {
        color: #f04b22;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <a href="/">返回周刊首页</a>
    </main>
  </body>
</html>`,
    {
      status,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    },
  );
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
