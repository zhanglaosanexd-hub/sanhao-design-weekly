const VALUE_PATTERN = /^[A-Za-z0-9_-]{6,64}$/;

export function onRequestGet({ env }) {
  const id = normalizeValue(env.LA51_ID);
  const ck = normalizeValue(env.LA51_CK);

  if (!id || !ck) {
    return javascriptResponse(
      'console.info("51.LA analytics is disabled: missing configuration.");',
    );
  }

  const config = JSON.stringify({ id, ck });
  return javascriptResponse(`
!function(config) {
  "use strict";
  var root = window;
  var documentRef = document;
  var script = documentRef.createElement("script");
  var firstScript = documentRef.getElementsByTagName("script")[0];
  script.type = "text/javascript";
  script.charset = "UTF-8";
  script.async = true;
  script.src = "https://sdk.51.la/js-sdk-pro.min.js";
  script.id = "LA_COLLECT";
  config.d = script;
  var enqueue = function() {
    root.LA.ids.push(config);
  };
  if (root.LA) {
    if (root.LA.ids) enqueue();
  } else {
    root.LA = { ids: [] };
    enqueue();
  }
  firstScript.parentNode.insertBefore(script, firstScript);
}(${config});
`);
}

function normalizeValue(value) {
  const normalized = String(value || "").trim();
  return VALUE_PATTERN.test(normalized) ? normalized : "";
}

function javascriptResponse(source) {
  return new Response(source, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}
