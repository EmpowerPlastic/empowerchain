// node_modules/@segment/analytics-next/dist/pkg/core/environment/index.js
function isBrowser() {
  return typeof window !== "undefined";
}
function isServer() {
  return !isBrowser();
}

// node_modules/@segment/analytics-next/dist/pkg/lib/global-analytics-helper.js
var _globalAnalyticsKey = "analytics";
function getGlobalAnalytics() {
  return window[_globalAnalyticsKey];
}
function setGlobalAnalyticsKey(key) {
  _globalAnalyticsKey = key;
}
function setGlobalAnalytics(analytics) {
  ;
  window[_globalAnalyticsKey] = analytics;
}

// node_modules/@segment/analytics-next/dist/pkg/lib/embedded-write-key.js
try {
  window.analyticsWriteKey = "__WRITE_KEY__";
} catch (_) {
}

// node_modules/@segment/analytics-next/dist/pkg/lib/parse-cdn.js
var analyticsScriptRegex = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
var getCDNUrlFromScriptTag = function() {
  var cdn;
  var scripts = Array.prototype.slice.call(document.querySelectorAll("script"));
  scripts.forEach(function(s) {
    var _a;
    var src = (_a = s.getAttribute("src")) !== null && _a !== void 0 ? _a : "";
    var result = analyticsScriptRegex.exec(src);
    if (result && result[1]) {
      cdn = result[1];
    }
  });
  return cdn;
};
var _globalCDN;
var getGlobalCDNUrl = function() {
  var _a;
  var result = _globalCDN !== null && _globalCDN !== void 0 ? _globalCDN : (_a = getGlobalAnalytics()) === null || _a === void 0 ? void 0 : _a._cdn;
  return result;
};
var setGlobalCDNUrl = function(cdn) {
  var globalAnalytics = getGlobalAnalytics();
  if (globalAnalytics) {
    globalAnalytics._cdn = cdn;
  }
  _globalCDN = cdn;
};
var getCDN = function() {
  var globalCdnUrl = getGlobalCDNUrl();
  if (globalCdnUrl)
    return globalCdnUrl;
  var cdnFromScriptTag = getCDNUrlFromScriptTag();
  if (cdnFromScriptTag) {
    return cdnFromScriptTag;
  } else {
    return "https://cdn.segment.com";
  }
};
var getNextIntegrationsURL = function() {
  var cdn = getCDN();
  return "".concat(cdn, "/next-integrations");
};

// node_modules/@segment/analytics-next/dist/pkg/lib/load-script.js
function findScript(src) {
  var scripts = Array.prototype.slice.call(window.document.querySelectorAll("script"));
  return scripts.find(function(s) {
    return s.src === src;
  });
}
function loadScript(src, attributes) {
  var found = findScript(src);
  if (found !== void 0) {
    var status_1 = found === null || found === void 0 ? void 0 : found.getAttribute("status");
    if (status_1 === "loaded") {
      return Promise.resolve(found);
    }
    if (status_1 === "loading") {
      return new Promise(function(resolve, reject) {
        found.addEventListener("load", function() {
          return resolve(found);
        });
        found.addEventListener("error", function(err) {
          return reject(err);
        });
      });
    }
  }
  return new Promise(function(resolve, reject) {
    var _a;
    var script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = true;
    script.setAttribute("status", "loading");
    for (var _i = 0, _b = Object.entries(attributes !== null && attributes !== void 0 ? attributes : {}); _i < _b.length; _i++) {
      var _c = _b[_i], k = _c[0], v = _c[1];
      script.setAttribute(k, v);
    }
    script.onload = function() {
      script.onerror = script.onload = null;
      script.setAttribute("status", "loaded");
      resolve(script);
    };
    script.onerror = function() {
      script.onerror = script.onload = null;
      script.setAttribute("status", "error");
      reject(new Error("Failed to load ".concat(src)));
    };
    var tag = window.document.getElementsByTagName("script")[0];
    (_a = tag.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(script, tag);
  });
}
function unloadScript(src) {
  var found = findScript(src);
  if (found !== void 0) {
    found.remove();
  }
  return Promise.resolve();
}

export {
  isBrowser,
  isServer,
  getGlobalAnalytics,
  setGlobalAnalyticsKey,
  setGlobalAnalytics,
  setGlobalCDNUrl,
  getCDN,
  getNextIntegrationsURL,
  loadScript,
  unloadScript
};
//# sourceMappingURL=chunk-AC7VDIFQ.js.map
