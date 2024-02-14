import {
  gracefulDecodeURIComponent
} from "./chunk-75GJZ7JK.js";
import {
  isPlainObject
} from "./chunk-TU7PAYTW.js";
import "./chunk-QZ2OSRME.js";
import "./chunk-I7XXR53E.js";

// node_modules/@segment/analytics-next/dist/pkg/core/query-string/pickPrefix.js
function pickPrefix(prefix, object) {
  return Object.keys(object).reduce(function(acc, key) {
    if (key.startsWith(prefix)) {
      var field = key.substr(prefix.length);
      acc[field] = object[key];
    }
    return acc;
  }, {});
}

// node_modules/@segment/analytics-next/dist/pkg/core/query-string/index.js
function queryString(analytics, query) {
  var a = document.createElement("a");
  a.href = query;
  var parsed = a.search.slice(1);
  var params = parsed.split("&").reduce(function(acc, str) {
    var _a2 = str.split("="), k = _a2[0], v = _a2[1];
    acc[k] = gracefulDecodeURIComponent(v);
    return acc;
  }, {});
  var calls = [];
  var ajs_uid = params.ajs_uid, ajs_event = params.ajs_event, ajs_aid = params.ajs_aid;
  var _a = isPlainObject(analytics.options.useQueryString) ? analytics.options.useQueryString : {}, _b = _a.aid, aidPattern = _b === void 0 ? /.+/ : _b, _c = _a.uid, uidPattern = _c === void 0 ? /.+/ : _c;
  if (ajs_aid) {
    var anonId = Array.isArray(params.ajs_aid) ? params.ajs_aid[0] : params.ajs_aid;
    if (aidPattern.test(anonId)) {
      analytics.setAnonymousId(anonId);
    }
  }
  if (ajs_uid) {
    var uid = Array.isArray(params.ajs_uid) ? params.ajs_uid[0] : params.ajs_uid;
    if (uidPattern.test(uid)) {
      var traits = pickPrefix("ajs_trait_", params);
      calls.push(analytics.identify(uid, traits));
    }
  }
  if (ajs_event) {
    var event_1 = Array.isArray(params.ajs_event) ? params.ajs_event[0] : params.ajs_event;
    var props = pickPrefix("ajs_prop_", params);
    calls.push(analytics.track(event_1, props));
  }
  return Promise.all(calls);
}
export {
  queryString
};
//# sourceMappingURL=query-string-3LNWNXJY.js.map
