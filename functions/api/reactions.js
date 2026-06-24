const BASE_LIKE_TOTAL = 89;
const VISITOR_COOKIE = "sanhao_like_visitor";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 * 2;

export async function onRequestGet({ request, env }) {
  if (!env.REACTIONS_DB) {
    return jsonResponse({ ok: false, message: "点赞服务尚未配置。" }, 503);
  }

  const issue = getIssue(new URL(request.url).searchParams.get("issue"));
  if (!issue) {
    return jsonResponse({ ok: false, message: "期数不正确。" }, 400);
  }

  await ensureSchema(env.REACTIONS_DB);
  const visitorId = getCookie(request, VISITOR_COOKIE);
  const [totalResult, likedResult] = await Promise.all([
    env.REACTIONS_DB.prepare("SELECT COUNT(*) AS count FROM reactions").first(),
    visitorId
      ? env.REACTIONS_DB.prepare(
          "SELECT 1 AS liked FROM reactions WHERE visitor_id = ? AND issue = ? LIMIT 1",
        )
          .bind(visitorId, issue)
          .first()
      : null,
  ]);

  return jsonResponse({
    ok: true,
    count: BASE_LIKE_TOTAL + Number(totalResult?.count || 0),
    liked: Boolean(likedResult),
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.REACTIONS_DB) {
    return jsonResponse({ ok: false, message: "点赞服务尚未配置。" }, 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: "请求格式不正确。" }, 400);
  }

  const issue = getIssue(payload.issue);
  if (!issue) {
    return jsonResponse({ ok: false, message: "期数不正确。" }, 400);
  }

  await ensureSchema(env.REACTIONS_DB);
  const existingVisitorId = getCookie(request, VISITOR_COOKIE);
  const visitorId = existingVisitorId || crypto.randomUUID();
  const insertResult = await env.REACTIONS_DB.prepare(
    "INSERT OR IGNORE INTO reactions (visitor_id, issue, created_at) VALUES (?, ?, ?)",
  )
    .bind(visitorId, issue, Date.now())
    .run();
  const totalResult = await env.REACTIONS_DB.prepare(
    "SELECT COUNT(*) AS count FROM reactions",
  ).first();
  const added = Number(insertResult.meta?.changes || 0) > 0;

  return jsonResponse(
    {
      ok: true,
      count: BASE_LIKE_TOTAL + Number(totalResult?.count || 0),
      liked: true,
      added,
      message: added ? "谢谢你的点赞！" : "本期已经点过赞啦。",
    },
    200,
    existingVisitorId ? {} : { "set-cookie": createVisitorCookie(visitorId) },
  );
}

export async function onRequestDelete({ request, env }) {
  if (!env.REACTIONS_DB) {
    return jsonResponse({ ok: false, message: "点赞服务尚未配置。" }, 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: "请求格式不正确。" }, 400);
  }

  const issue = getIssue(payload.issue);
  if (!issue) {
    return jsonResponse({ ok: false, message: "期数不正确。" }, 400);
  }

  await ensureSchema(env.REACTIONS_DB);
  const visitorId = getCookie(request, VISITOR_COOKIE);
  let removed = false;

  if (visitorId) {
    const deleteResult = await env.REACTIONS_DB.prepare(
      "DELETE FROM reactions WHERE visitor_id = ? AND issue = ?",
    )
      .bind(visitorId, issue)
      .run();
    removed = Number(deleteResult.meta?.changes || 0) > 0;
  }

  const totalResult = await env.REACTIONS_DB.prepare(
    "SELECT COUNT(*) AS count FROM reactions",
  ).first();

  return jsonResponse({
    ok: true,
    count: BASE_LIKE_TOTAL + Number(totalResult?.count || 0),
    liked: false,
    removed,
    message: removed ? "已取消本期点赞。" : "本期尚未点赞。",
  });
}

async function ensureSchema(database) {
  await database
    .prepare(
      `CREATE TABLE IF NOT EXISTS reactions (
        visitor_id TEXT NOT NULL,
        issue TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        PRIMARY KEY (visitor_id, issue)
      )`,
    )
    .run();
}

function getIssue(value) {
  const issue = String(value || "").trim();
  return /^\d{1,4}$/.test(issue) ? issue : "";
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get("cookie") || "";
  const prefix = `${name}=`;
  const item = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));
  return item ? decodeURIComponent(item.slice(prefix.length)) : "";
}

function createVisitorCookie(visitorId) {
  return [
    `${VISITOR_COOKIE}=${encodeURIComponent(visitorId)}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
  ].join("; ");
}

function jsonResponse(payload, status = 200, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...headers,
    },
  });
}
