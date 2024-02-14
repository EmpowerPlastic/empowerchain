import {
  __commonJS
} from "./chunk-I7XXR53E.js";

// node_modules/rollbar/dist/rollbar.umd.min.js
var require_rollbar_umd_min = __commonJS({
  "node_modules/rollbar/dist/rollbar.umd.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.rollbar = e() : t.rollbar = e();
    }(exports, function() {
      return function(t) {
        var e = {};
        function r(n) {
          if (e[n])
            return e[n].exports;
          var o = e[n] = { i: n, l: false, exports: {} };
          return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
        }
        return r.m = t, r.c = e, r.d = function(t2, e2, n) {
          r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
        }, r.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, r.t = function(t2, e2) {
          if (1 & e2 && (t2 = r(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var n = /* @__PURE__ */ Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var o in t2)
              r.d(n, o, (function(e3) {
                return t2[e3];
              }).bind(null, o));
          return n;
        }, r.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return r.d(e2, "a", e2), e2;
        }, r.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, r.p = "", r(r.s = 6);
      }([function(t, e, r) {
        "use strict";
        var n = r(12), o = {};
        function i(t2, e2) {
          return e2 === s(t2);
        }
        function s(t2) {
          var e2 = typeof t2;
          return "object" !== e2 ? e2 : t2 ? t2 instanceof Error ? "error" : {}.toString.call(t2).match(/\s([a-zA-Z]+)/)[1].toLowerCase() : "null";
        }
        function a(t2) {
          return i(t2, "function");
        }
        function u(t2) {
          var e2 = Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?"), r2 = RegExp("^" + e2 + "$");
          return c(t2) && r2.test(t2);
        }
        function c(t2) {
          var e2 = typeof t2;
          return null != t2 && ("object" == e2 || "function" == e2);
        }
        function l() {
          var t2 = y();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
            var r2 = (t2 + 16 * Math.random()) % 16 | 0;
            return t2 = Math.floor(t2 / 16), ("x" === e2 ? r2 : 7 & r2 | 8).toString(16);
          });
        }
        var p = { strictMode: false, key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g }, parser: { strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ } };
        function f(t2, e2) {
          var r2, n2;
          try {
            r2 = o.stringify(t2);
          } catch (o2) {
            if (e2 && a(e2))
              try {
                r2 = e2(t2);
              } catch (t3) {
                n2 = t3;
              }
            else
              n2 = o2;
          }
          return { error: n2, value: r2 };
        }
        function h(t2, e2) {
          return function(r2, n2) {
            try {
              e2(r2, n2);
            } catch (e3) {
              t2.error(e3);
            }
          };
        }
        function d(t2) {
          return function t3(e2, r2) {
            var n2, o2, a2, u2 = {};
            try {
              for (o2 in e2)
                (n2 = e2[o2]) && (i(n2, "object") || i(n2, "array")) ? r2.includes(n2) ? u2[o2] = "Removed circular reference: " + s(n2) : ((a2 = r2.slice()).push(n2), u2[o2] = t3(n2, a2)) : u2[o2] = n2;
            } catch (t4) {
              u2 = "Failed cloning custom data: " + t4.message;
            }
            return u2;
          }(t2, [t2]);
        }
        var m = ["log", "network", "dom", "navigation", "error", "manual"], g = ["critical", "error", "warning", "info", "debug"];
        function v(t2, e2) {
          for (var r2 = 0; r2 < t2.length; ++r2)
            if (t2[r2] === e2)
              return true;
          return false;
        }
        function y() {
          return Date.now ? +Date.now() : +/* @__PURE__ */ new Date();
        }
        t.exports = { addParamsAndAccessTokenToPath: function(t2, e2, r2) {
          (r2 = r2 || {}).access_token = t2;
          var n2, o2 = [];
          for (n2 in r2)
            Object.prototype.hasOwnProperty.call(r2, n2) && o2.push([n2, r2[n2]].join("="));
          var i2 = "?" + o2.sort().join("&");
          (e2 = e2 || {}).path = e2.path || "";
          var s2, a2 = e2.path.indexOf("?"), u2 = e2.path.indexOf("#");
          -1 !== a2 && (-1 === u2 || u2 > a2) ? (s2 = e2.path, e2.path = s2.substring(0, a2) + i2 + "&" + s2.substring(a2 + 1)) : -1 !== u2 ? (s2 = e2.path, e2.path = s2.substring(0, u2) + i2 + s2.substring(u2)) : e2.path = e2.path + i2;
        }, createItem: function(t2, e2, r2, n2, o2) {
          for (var i2, a2, u2, c2, p2, f2, m2 = [], g2 = [], v2 = 0, b = t2.length; v2 < b; ++v2) {
            var w = s(f2 = t2[v2]);
            switch (g2.push(w), w) {
              case "undefined":
                break;
              case "string":
                i2 ? m2.push(f2) : i2 = f2;
                break;
              case "function":
                c2 = h(e2, f2);
                break;
              case "date":
                m2.push(f2);
                break;
              case "error":
              case "domexception":
              case "exception":
                a2 ? m2.push(f2) : a2 = f2;
                break;
              case "object":
              case "array":
                if (f2 instanceof Error || "undefined" != typeof DOMException && f2 instanceof DOMException) {
                  a2 ? m2.push(f2) : a2 = f2;
                  break;
                }
                if (n2 && "object" === w && !p2) {
                  for (var _ = 0, x = n2.length; _ < x; ++_)
                    if (void 0 !== f2[n2[_]]) {
                      p2 = f2;
                      break;
                    }
                  if (p2)
                    break;
                }
                u2 ? m2.push(f2) : u2 = f2;
                break;
              default:
                if (f2 instanceof Error || "undefined" != typeof DOMException && f2 instanceof DOMException) {
                  a2 ? m2.push(f2) : a2 = f2;
                  break;
                }
                m2.push(f2);
            }
          }
          u2 && (u2 = d(u2)), m2.length > 0 && (u2 || (u2 = d({})), u2.extraArgs = d(m2));
          var k = { message: i2, err: a2, custom: u2, timestamp: y(), callback: c2, notifier: r2, diagnostic: {}, uuid: l() };
          return function(t3, e3) {
            e3 && void 0 !== e3.level && (t3.level = e3.level, delete e3.level);
            e3 && void 0 !== e3.skipFrames && (t3.skipFrames = e3.skipFrames, delete e3.skipFrames);
          }(k, u2), n2 && p2 && (k.request = p2), o2 && (k.lambdaContext = o2), k._originalArgs = t2, k.diagnostic.original_arg_types = g2, k;
        }, addErrorContext: function(t2, e2) {
          var r2 = t2.data.custom || {}, o2 = false;
          try {
            for (var i2 = 0; i2 < e2.length; ++i2)
              e2[i2].hasOwnProperty("rollbarContext") && (r2 = n(r2, d(e2[i2].rollbarContext)), o2 = true);
            o2 && (t2.data.custom = r2);
          } catch (e3) {
            t2.diagnostic.error_context = "Failed: " + e3.message;
          }
        }, createTelemetryEvent: function(t2) {
          for (var e2, r2, n2, o2, i2 = 0, a2 = t2.length; i2 < a2; ++i2) {
            switch (s(o2 = t2[i2])) {
              case "string":
                !e2 && v(m, o2) ? e2 = o2 : !n2 && v(g, o2) && (n2 = o2);
                break;
              case "object":
                r2 = o2;
            }
          }
          return { type: e2 || "manual", metadata: r2 || {}, level: n2 };
        }, filterIp: function(t2, e2) {
          if (t2 && t2.user_ip && true !== e2) {
            var r2 = t2.user_ip;
            if (e2)
              try {
                var n2;
                if (-1 !== r2.indexOf("."))
                  (n2 = r2.split(".")).pop(), n2.push("0"), r2 = n2.join(".");
                else if (-1 !== r2.indexOf(":")) {
                  if ((n2 = r2.split(":")).length > 2) {
                    var o2 = n2.slice(0, 3), i2 = o2[2].indexOf("/");
                    -1 !== i2 && (o2[2] = o2[2].substring(0, i2));
                    r2 = o2.concat("0000:0000:0000:0000:0000").join(":");
                  }
                } else
                  r2 = null;
              } catch (t3) {
                r2 = null;
              }
            else
              r2 = null;
            t2.user_ip = r2;
          }
        }, formatArgsAsString: function(t2) {
          var e2, r2, n2, o2 = [];
          for (e2 = 0, r2 = t2.length; e2 < r2; ++e2) {
            switch (s(n2 = t2[e2])) {
              case "object":
                (n2 = (n2 = f(n2)).error || n2.value).length > 500 && (n2 = n2.substr(0, 497) + "...");
                break;
              case "null":
                n2 = "null";
                break;
              case "undefined":
                n2 = "undefined";
                break;
              case "symbol":
                n2 = n2.toString();
            }
            o2.push(n2);
          }
          return o2.join(" ");
        }, formatUrl: function(t2, e2) {
          if (!(e2 = e2 || t2.protocol) && t2.port && (80 === t2.port ? e2 = "http:" : 443 === t2.port && (e2 = "https:")), e2 = e2 || "https:", !t2.hostname)
            return null;
          var r2 = e2 + "//" + t2.hostname;
          return t2.port && (r2 = r2 + ":" + t2.port), t2.path && (r2 += t2.path), r2;
        }, get: function(t2, e2) {
          if (t2) {
            var r2 = e2.split("."), n2 = t2;
            try {
              for (var o2 = 0, i2 = r2.length; o2 < i2; ++o2)
                n2 = n2[r2[o2]];
            } catch (t3) {
              n2 = void 0;
            }
            return n2;
          }
        }, handleOptions: function(t2, e2, r2, o2) {
          var i2 = n(t2, e2, r2);
          return i2 = function(t3, e3) {
            t3.hostWhiteList && !t3.hostSafeList && (t3.hostSafeList = t3.hostWhiteList, t3.hostWhiteList = void 0, e3 && e3.log("hostWhiteList is deprecated. Use hostSafeList."));
            t3.hostBlackList && !t3.hostBlockList && (t3.hostBlockList = t3.hostBlackList, t3.hostBlackList = void 0, e3 && e3.log("hostBlackList is deprecated. Use hostBlockList."));
            return t3;
          }(i2, o2), !e2 || e2.overwriteScrubFields || e2.scrubFields && (i2.scrubFields = (t2.scrubFields || []).concat(e2.scrubFields)), i2;
        }, isError: function(t2) {
          return i(t2, "error") || i(t2, "exception");
        }, isFiniteNumber: function(t2) {
          return Number.isFinite(t2);
        }, isFunction: a, isIterable: function(t2) {
          var e2 = s(t2);
          return "object" === e2 || "array" === e2;
        }, isNativeFunction: u, isObject: c, isString: function(t2) {
          return "string" == typeof t2 || t2 instanceof String;
        }, isType: i, isPromise: function(t2) {
          return c(t2) && i(t2.then, "function");
        }, jsonParse: function(t2) {
          var e2, r2;
          try {
            e2 = o.parse(t2);
          } catch (t3) {
            r2 = t3;
          }
          return { error: r2, value: e2 };
        }, LEVELS: { debug: 0, info: 1, warning: 2, error: 3, critical: 4 }, makeUnhandledStackInfo: function(t2, e2, r2, n2, o2, i2, s2, a2) {
          var u2 = { url: e2 || "", line: r2, column: n2 };
          u2.func = a2.guessFunctionName(u2.url, u2.line), u2.context = a2.gatherContext(u2.url, u2.line);
          var c2 = "undefined" != typeof document && document && document.location && document.location.href, l2 = "undefined" != typeof window && window && window.navigator && window.navigator.userAgent;
          return { mode: i2, message: o2 ? String(o2) : t2 || s2, url: c2, stack: [u2], useragent: l2 };
        }, merge: n, now: y, redact: function() {
          return "********";
        }, RollbarJSON: o, sanitizeUrl: function(t2) {
          var e2 = function(t3) {
            if (!i(t3, "string"))
              return;
            for (var e3 = p, r2 = e3.parser[e3.strictMode ? "strict" : "loose"].exec(t3), n2 = {}, o2 = 0, s2 = e3.key.length; o2 < s2; ++o2)
              n2[e3.key[o2]] = r2[o2] || "";
            return n2[e3.q.name] = {}, n2[e3.key[12]].replace(e3.q.parser, function(t4, r3, o3) {
              r3 && (n2[e3.q.name][r3] = o3);
            }), n2;
          }(t2);
          return e2 ? ("" === e2.anchor && (e2.source = e2.source.replace("#", "")), t2 = e2.source.replace("?" + e2.query, "")) : "(unknown)";
        }, set: function(t2, e2, r2) {
          if (t2) {
            var n2 = e2.split("."), o2 = n2.length;
            if (!(o2 < 1))
              if (1 !== o2)
                try {
                  for (var i2 = t2[n2[0]] || {}, s2 = i2, a2 = 1; a2 < o2 - 1; ++a2)
                    i2[n2[a2]] = i2[n2[a2]] || {}, i2 = i2[n2[a2]];
                  i2[n2[o2 - 1]] = r2, t2[n2[0]] = s2;
                } catch (t3) {
                  return;
                }
              else
                t2[n2[0]] = r2;
          }
        }, setupJSON: function(t2) {
          a(o.stringify) && a(o.parse) || (i(JSON, "undefined") || (t2 ? (u(JSON.stringify) && (o.stringify = JSON.stringify), u(JSON.parse) && (o.parse = JSON.parse)) : (a(JSON.stringify) && (o.stringify = JSON.stringify), a(JSON.parse) && (o.parse = JSON.parse))), a(o.stringify) && a(o.parse) || t2 && t2(o));
        }, stringify: f, maxByteSize: function(t2) {
          for (var e2 = 0, r2 = t2.length, n2 = 0; n2 < r2; n2++) {
            var o2 = t2.charCodeAt(n2);
            o2 < 128 ? e2 += 1 : o2 < 2048 ? e2 += 2 : o2 < 65536 && (e2 += 3);
          }
          return e2;
        }, typeName: s, uuid4: l };
      }, function(t, e, r) {
        "use strict";
        r(17);
        var n = r(18), o = r(0);
        t.exports = { error: function() {
          var t2 = Array.prototype.slice.call(arguments, 0);
          t2.unshift("Rollbar:"), n.ieVersion() <= 8 ? console.error(o.formatArgsAsString(t2)) : console.error.apply(console, t2);
        }, info: function() {
          var t2 = Array.prototype.slice.call(arguments, 0);
          t2.unshift("Rollbar:"), n.ieVersion() <= 8 ? console.info(o.formatArgsAsString(t2)) : console.info.apply(console, t2);
        }, log: function() {
          var t2 = Array.prototype.slice.call(arguments, 0);
          t2.unshift("Rollbar:"), n.ieVersion() <= 8 ? console.log(o.formatArgsAsString(t2)) : console.log.apply(console, t2);
        } };
      }, function(t, e, r) {
        "use strict";
        t.exports = { parse: function(t2) {
          var e2, r2, n = { protocol: null, auth: null, host: null, path: null, hash: null, href: t2, hostname: null, port: null, pathname: null, search: null, query: null };
          if (-1 !== (e2 = t2.indexOf("//")) ? (n.protocol = t2.substring(0, e2), r2 = e2 + 2) : r2 = 0, -1 !== (e2 = t2.indexOf("@", r2)) && (n.auth = t2.substring(r2, e2), r2 = e2 + 1), -1 === (e2 = t2.indexOf("/", r2))) {
            if (-1 === (e2 = t2.indexOf("?", r2)))
              return -1 === (e2 = t2.indexOf("#", r2)) ? n.host = t2.substring(r2) : (n.host = t2.substring(r2, e2), n.hash = t2.substring(e2)), n.hostname = n.host.split(":")[0], n.port = n.host.split(":")[1], n.port && (n.port = parseInt(n.port, 10)), n;
            n.host = t2.substring(r2, e2), n.hostname = n.host.split(":")[0], n.port = n.host.split(":")[1], n.port && (n.port = parseInt(n.port, 10)), r2 = e2;
          } else
            n.host = t2.substring(r2, e2), n.hostname = n.host.split(":")[0], n.port = n.host.split(":")[1], n.port && (n.port = parseInt(n.port, 10)), r2 = e2;
          if (-1 === (e2 = t2.indexOf("#", r2)) ? n.path = t2.substring(r2) : (n.path = t2.substring(r2, e2), n.hash = t2.substring(e2)), n.path) {
            var o = n.path.split("?");
            n.pathname = o[0], n.query = o[1], n.search = n.query ? "?" + n.query : null;
          }
          return n;
        } };
      }, function(t, e, r) {
        "use strict";
        var n = r(24), o = new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");
        function i() {
          return null;
        }
        function s(t2) {
          var e2 = {};
          return e2._stackFrame = t2, e2.url = t2.fileName, e2.line = t2.lineNumber, e2.func = t2.functionName, e2.column = t2.columnNumber, e2.args = t2.args, e2.context = null, e2;
        }
        function a(t2, e2) {
          return { stack: function() {
            var r2 = [];
            e2 = e2 || 0;
            try {
              r2 = n.parse(t2);
            } catch (t3) {
              r2 = [];
            }
            for (var o2 = [], i2 = e2; i2 < r2.length; i2++)
              o2.push(new s(r2[i2]));
            return o2;
          }(), message: t2.message, name: u(t2), rawStack: t2.stack, rawException: t2 };
        }
        function u(t2) {
          var e2 = t2.name && t2.name.length && t2.name, r2 = t2.constructor.name && t2.constructor.name.length && t2.constructor.name;
          return e2 && r2 ? "Error" === e2 ? r2 : e2 : e2 || r2;
        }
        t.exports = { guessFunctionName: function() {
          return "?";
        }, guessErrorClass: function(t2) {
          if (!t2 || !t2.match)
            return ["Unknown error. There was no error message to display.", ""];
          var e2 = t2.match(o), r2 = "(unknown)";
          return e2 && (r2 = e2[e2.length - 1], t2 = (t2 = t2.replace((e2[e2.length - 2] || "") + r2 + ":", "")).replace(/(^[\s]+|[\s]+$)/g, "")), [r2, t2];
        }, gatherContext: i, parse: function(t2, e2) {
          var r2 = t2;
          if (r2.nested || r2.cause) {
            for (var n2 = []; r2; )
              n2.push(new a(r2, e2)), r2 = r2.nested || r2.cause, e2 = 0;
            return n2[0].traceChain = n2, n2[0];
          }
          return new a(r2, e2);
        }, Stack: a, Frame: s };
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(5);
        function i(t2, e2) {
          var r2 = e2.split("."), o2 = r2.length - 1;
          try {
            for (var i2 = 0; i2 <= o2; ++i2)
              i2 < o2 ? t2 = t2[r2[i2]] : t2[r2[i2]] = n.redact();
          } catch (t3) {
          }
        }
        t.exports = function(t2, e2, r2) {
          if (e2 = e2 || [], r2)
            for (var s = 0; s < r2.length; ++s)
              i(t2, r2[s]);
          var a = function(t3) {
            for (var e3, r3 = [], n2 = 0; n2 < t3.length; ++n2)
              e3 = "^\\[?(%5[bB])?" + t3[n2] + "\\[?(%5[bB])?\\]?(%5[dD])?$", r3.push(new RegExp(e3, "i"));
            return r3;
          }(e2), u = function(t3) {
            for (var e3, r3 = [], n2 = 0; n2 < t3.length; ++n2)
              e3 = "\\[?(%5[bB])?" + t3[n2] + "\\[?(%5[bB])?\\]?(%5[dD])?", r3.push(new RegExp("(" + e3 + "=)([^&\\n]+)", "igm"));
            return r3;
          }(e2);
          function c(t3, e3) {
            return e3 + n.redact();
          }
          return o(t2, function t3(e3, r3, i2) {
            var s2 = function(t4, e4) {
              var r4;
              for (r4 = 0; r4 < a.length; ++r4)
                if (a[r4].test(t4)) {
                  e4 = n.redact();
                  break;
                }
              return e4;
            }(e3, r3);
            return s2 === r3 ? n.isType(r3, "object") || n.isType(r3, "array") ? o(r3, t3, i2) : function(t4) {
              var e4;
              if (n.isType(t4, "string"))
                for (e4 = 0; e4 < u.length; ++e4)
                  t4 = t4.replace(u[e4], c);
              return t4;
            }(s2) : s2;
          });
        };
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        t.exports = function(t2, e2, r2) {
          var o, i, s, a, u = n.isType(t2, "object"), c = n.isType(t2, "array"), l = [];
          if (r2 = r2 || { obj: [], mapped: [] }, u) {
            if (a = r2.obj.indexOf(t2), u && -1 !== a)
              return r2.mapped[a] || r2.obj[a];
            r2.obj.push(t2), a = r2.obj.length - 1;
          }
          if (u)
            for (o in t2)
              Object.prototype.hasOwnProperty.call(t2, o) && l.push(o);
          else if (c)
            for (s = 0; s < t2.length; ++s)
              l.push(s);
          var p = u ? {} : [], f = true;
          for (s = 0; s < l.length; ++s)
            i = t2[o = l[s]], p[o] = e2(o, i, r2), f = f && p[o] === t2[o];
          return u && !f && (r2.mapped[a] = p), f ? t2 : p;
        };
      }, function(t, e, r) {
        t.exports = r(7);
      }, function(t, e, r) {
        "use strict";
        var n = r(8), o = "undefined" != typeof window && window._rollbarConfig, i = o && o.globalAlias || "Rollbar", s = "undefined" != typeof window && window[i] && "function" == typeof window[i].shimId && void 0 !== window[i].shimId();
        if ("undefined" == typeof window || window._rollbarStartTime || (window._rollbarStartTime = (/* @__PURE__ */ new Date()).getTime()), !s && o) {
          var a = new n(o);
          window[i] = a;
        } else
          "undefined" != typeof window ? (window.rollbar = n, window._rollbarDidLoad = true) : "undefined" != typeof self && (self.rollbar = n, self._rollbarDidLoad = true);
        t.exports = n;
      }, function(t, e, r) {
        "use strict";
        var n = r(9), o = r(31), i = r(32), s = r(35), a = r(37), u = r(4), c = r(38);
        n.setComponents({ telemeter: o, instrumenter: i, polyfillJSON: s, wrapGlobals: a, scrub: u, truncation: c }), t.exports = n;
      }, function(t, e, r) {
        "use strict";
        var n = r(10), o = r(0), i = r(15), s = r(1), a = r(19), u = r(20), c = r(2), l = r(23), p = r(26), f = r(27), h = r(28), d = r(3);
        function m(t2, e2) {
          this.options = o.handleOptions(x, t2, null, s), this.options._configuredOptions = t2;
          var r2 = this.components.telemeter, a2 = this.components.instrumenter, d2 = this.components.polyfillJSON;
          this.wrapGlobals = this.components.wrapGlobals, this.scrub = this.components.scrub;
          var m2 = this.components.truncation, g2 = new u(m2), v2 = new i(this.options, g2, c, m2);
          r2 && (this.telemeter = new r2(this.options)), this.client = e2 || new n(this.options, v2, s, this.telemeter, "browser");
          var y2 = b(), w2 = "undefined" != typeof document && document;
          this.isChrome = y2.chrome && y2.chrome.runtime, this.anonymousErrorsPending = 0, function(t3, e3, r3) {
            t3.addTransform(l.handleDomException).addTransform(l.handleItemWithError).addTransform(l.ensureItemHasSomethingToSay).addTransform(l.addBaseInfo).addTransform(l.addRequestInfo(r3)).addTransform(l.addClientInfo(r3)).addTransform(l.addPluginInfo(r3)).addTransform(l.addBody).addTransform(p.addMessageWithError).addTransform(p.addTelemetryData).addTransform(p.addConfigToPayload).addTransform(l.addScrubber(e3.scrub)).addTransform(p.addPayloadOptions).addTransform(p.userTransform(s)).addTransform(p.addConfiguredOptions).addTransform(p.addDiagnosticKeys).addTransform(p.itemToPayload);
          }(this.client.notifier, this, y2), this.client.queue.addPredicate(h.checkLevel).addPredicate(f.checkIgnore).addPredicate(h.userCheckIgnore(s)).addPredicate(h.urlIsNotBlockListed(s)).addPredicate(h.urlIsSafeListed(s)).addPredicate(h.messageIsIgnored(s)), this.setupUnhandledCapture(), a2 && (this.instrumenter = new a2(this.options, this.client.telemeter, this, y2, w2), this.instrumenter.instrument()), o.setupJSON(d2), this.rollbar = this;
        }
        var g = null;
        function v(t2) {
          var e2 = "Rollbar is not initialized";
          s.error(e2), t2 && t2(new Error(e2));
        }
        function y(t2) {
          for (var e2 = 0, r2 = t2.length; e2 < r2; ++e2)
            if (o.isFunction(t2[e2]))
              return t2[e2];
        }
        function b() {
          return "undefined" != typeof window && window || "undefined" != typeof self && self;
        }
        m.init = function(t2, e2) {
          return g ? g.global(t2).configure(t2) : g = new m(t2, e2);
        }, m.prototype.components = {}, m.setComponents = function(t2) {
          m.prototype.components = t2;
        }, m.prototype.global = function(t2) {
          return this.client.global(t2), this;
        }, m.global = function(t2) {
          if (g)
            return g.global(t2);
          v();
        }, m.prototype.configure = function(t2, e2) {
          var r2 = this.options, n2 = {};
          return e2 && (n2 = { payload: e2 }), this.options = o.handleOptions(r2, t2, n2, s), this.options._configuredOptions = o.handleOptions(r2._configuredOptions, t2, n2), this.client.configure(this.options, e2), this.instrumenter && this.instrumenter.configure(this.options), this.setupUnhandledCapture(), this;
        }, m.configure = function(t2, e2) {
          if (g)
            return g.configure(t2, e2);
          v();
        }, m.prototype.lastError = function() {
          return this.client.lastError;
        }, m.lastError = function() {
          if (g)
            return g.lastError();
          v();
        }, m.prototype.log = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.log(t2), { uuid: e2 };
        }, m.log = function() {
          if (g)
            return g.log.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.debug = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.debug(t2), { uuid: e2 };
        }, m.debug = function() {
          if (g)
            return g.debug.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.info = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.info(t2), { uuid: e2 };
        }, m.info = function() {
          if (g)
            return g.info.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.warn = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.warn(t2), { uuid: e2 };
        }, m.warn = function() {
          if (g)
            return g.warn.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.warning = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.warning(t2), { uuid: e2 };
        }, m.warning = function() {
          if (g)
            return g.warning.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.error = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.error(t2), { uuid: e2 };
        }, m.error = function() {
          if (g)
            return g.error.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.critical = function() {
          var t2 = this._createItem(arguments), e2 = t2.uuid;
          return this.client.critical(t2), { uuid: e2 };
        }, m.critical = function() {
          if (g)
            return g.critical.apply(g, arguments);
          var t2 = y(arguments);
          v(t2);
        }, m.prototype.buildJsonPayload = function(t2) {
          return this.client.buildJsonPayload(t2);
        }, m.buildJsonPayload = function() {
          if (g)
            return g.buildJsonPayload.apply(g, arguments);
          v();
        }, m.prototype.sendJsonPayload = function(t2) {
          return this.client.sendJsonPayload(t2);
        }, m.sendJsonPayload = function() {
          if (g)
            return g.sendJsonPayload.apply(g, arguments);
          v();
        }, m.prototype.setupUnhandledCapture = function() {
          var t2 = b();
          this.unhandledExceptionsInitialized || (this.options.captureUncaught || this.options.handleUncaughtExceptions) && (a.captureUncaughtExceptions(t2, this), this.wrapGlobals && this.options.wrapGlobalEventHandlers && this.wrapGlobals(t2, this), this.unhandledExceptionsInitialized = true), this.unhandledRejectionsInitialized || (this.options.captureUnhandledRejections || this.options.handleUnhandledRejections) && (a.captureUnhandledRejections(t2, this), this.unhandledRejectionsInitialized = true);
        }, m.prototype.handleUncaughtException = function(t2, e2, r2, n2, i2, s2) {
          if (this.options.captureUncaught || this.options.handleUncaughtExceptions) {
            if (this.options.inspectAnonymousErrors && this.isChrome && null === i2 && "" === e2)
              return "anonymous";
            var a2, u2 = o.makeUnhandledStackInfo(t2, e2, r2, n2, i2, "onerror", "uncaught exception", d);
            o.isError(i2) ? (a2 = this._createItem([t2, i2, s2]))._unhandledStackInfo = u2 : o.isError(e2) ? (a2 = this._createItem([t2, e2, s2]))._unhandledStackInfo = u2 : (a2 = this._createItem([t2, s2])).stackInfo = u2, a2.level = this.options.uncaughtErrorLevel, a2._isUncaught = true, this.client.log(a2);
          }
        }, m.prototype.handleAnonymousErrors = function() {
          if (this.options.inspectAnonymousErrors && this.isChrome) {
            var t2 = this;
            try {
              Error.prepareStackTrace = function(e2, r2) {
                if (t2.options.inspectAnonymousErrors && t2.anonymousErrorsPending) {
                  if (t2.anonymousErrorsPending -= 1, !e2)
                    return;
                  e2._isAnonymous = true, t2.handleUncaughtException(e2.message, null, null, null, e2);
                }
                return e2.stack;
              };
            } catch (t3) {
              this.options.inspectAnonymousErrors = false, this.error("anonymous error handler failed", t3);
            }
          }
        }, m.prototype.handleUnhandledRejection = function(t2, e2) {
          if (this.options.captureUnhandledRejections || this.options.handleUnhandledRejections) {
            var r2 = "unhandled rejection was null or undefined!";
            if (t2)
              if (t2.message)
                r2 = t2.message;
              else {
                var n2 = o.stringify(t2);
                n2.value && (r2 = n2.value);
              }
            var i2, s2 = t2 && t2._rollbarContext || e2 && e2._rollbarContext;
            o.isError(t2) ? i2 = this._createItem([r2, t2, s2]) : (i2 = this._createItem([r2, t2, s2])).stackInfo = o.makeUnhandledStackInfo(r2, "", 0, 0, null, "unhandledrejection", "", d), i2.level = this.options.uncaughtErrorLevel, i2._isUncaught = true, i2._originalArgs = i2._originalArgs || [], i2._originalArgs.push(e2), this.client.log(i2);
          }
        }, m.prototype.wrap = function(t2, e2, r2) {
          try {
            var n2;
            if (n2 = o.isFunction(e2) ? e2 : function() {
              return e2 || {};
            }, !o.isFunction(t2))
              return t2;
            if (t2._isWrap)
              return t2;
            if (!t2._rollbar_wrapped && (t2._rollbar_wrapped = function() {
              r2 && o.isFunction(r2) && r2.apply(this, arguments);
              try {
                return t2.apply(this, arguments);
              } catch (r3) {
                var e3 = r3;
                throw e3 && window._rollbarWrappedError !== e3 && (o.isType(e3, "string") && (e3 = new String(e3)), e3._rollbarContext = n2() || {}, e3._rollbarContext._wrappedSource = t2.toString(), window._rollbarWrappedError = e3), e3;
              }
            }, t2._rollbar_wrapped._isWrap = true, t2.hasOwnProperty))
              for (var i2 in t2)
                t2.hasOwnProperty(i2) && "_rollbar_wrapped" !== i2 && (t2._rollbar_wrapped[i2] = t2[i2]);
            return t2._rollbar_wrapped;
          } catch (e3) {
            return t2;
          }
        }, m.wrap = function(t2, e2) {
          if (g)
            return g.wrap(t2, e2);
          v();
        }, m.prototype.captureEvent = function() {
          var t2 = o.createTelemetryEvent(arguments);
          return this.client.captureEvent(t2.type, t2.metadata, t2.level);
        }, m.captureEvent = function() {
          if (g)
            return g.captureEvent.apply(g, arguments);
          v();
        }, m.prototype.captureDomContentLoaded = function(t2, e2) {
          return e2 || (e2 = /* @__PURE__ */ new Date()), this.client.captureDomContentLoaded(e2);
        }, m.prototype.captureLoad = function(t2, e2) {
          return e2 || (e2 = /* @__PURE__ */ new Date()), this.client.captureLoad(e2);
        }, m.prototype.loadFull = function() {
          s.info("Unexpected Rollbar.loadFull() called on a Notifier instance. This can happen when Rollbar is loaded multiple times.");
        }, m.prototype._createItem = function(t2) {
          return o.createItem(t2, s, this);
        };
        var w = r(29), _ = r(30), x = { version: w.version, scrubFields: _.scrubFields, logLevel: w.logLevel, reportLevel: w.reportLevel, uncaughtErrorLevel: w.uncaughtErrorLevel, endpoint: w.endpoint, verbose: false, enabled: true, transmit: true, sendConfig: false, includeItemsInTelemetry: true, captureIp: true, inspectAnonymousErrors: true, ignoreDuplicateErrors: true, wrapGlobalEventHandlers: false };
        t.exports = m;
      }, function(t, e, r) {
        "use strict";
        var n = r(11), o = r(13), i = r(14), s = r(0);
        function a(t2, e2, r2, n2, l) {
          this.options = s.merge(t2), this.logger = r2, a.rateLimiter.configureGlobal(this.options), a.rateLimiter.setPlatformOptions(l, this.options), this.api = e2, this.queue = new o(a.rateLimiter, e2, r2, this.options);
          var p = this.options.tracer || null;
          c(p) ? (this.tracer = p, this.options.tracer = "opentracing-tracer-enabled", this.options._configuredOptions.tracer = "opentracing-tracer-enabled") : this.tracer = null, this.notifier = new i(this.queue, this.options), this.telemeter = n2, u(t2), this.lastError = null, this.lastErrorHash = "none";
        }
        function u(t2) {
          t2.stackTraceLimit && (Error.stackTraceLimit = t2.stackTraceLimit);
        }
        function c(t2) {
          if (!t2)
            return false;
          if (!t2.scope || "function" != typeof t2.scope)
            return false;
          var e2 = t2.scope();
          return !(!e2 || !e2.active || "function" != typeof e2.active);
        }
        a.rateLimiter = new n({ maxItems: 0, itemsPerMinute: 60 }), a.prototype.global = function(t2) {
          return a.rateLimiter.configureGlobal(t2), this;
        }, a.prototype.configure = function(t2, e2) {
          var r2 = this.options, n2 = {};
          e2 && (n2 = { payload: e2 }), this.options = s.merge(r2, t2, n2);
          var o2 = this.options.tracer || null;
          return c(o2) ? (this.tracer = o2, this.options.tracer = "opentracing-tracer-enabled", this.options._configuredOptions.tracer = "opentracing-tracer-enabled") : this.tracer = null, this.notifier && this.notifier.configure(this.options), this.telemeter && this.telemeter.configure(this.options), u(t2), this.global(this.options), c(t2.tracer) && (this.tracer = t2.tracer), this;
        }, a.prototype.log = function(t2) {
          var e2 = this._defaultLogLevel();
          return this._log(e2, t2);
        }, a.prototype.debug = function(t2) {
          this._log("debug", t2);
        }, a.prototype.info = function(t2) {
          this._log("info", t2);
        }, a.prototype.warn = function(t2) {
          this._log("warning", t2);
        }, a.prototype.warning = function(t2) {
          this._log("warning", t2);
        }, a.prototype.error = function(t2) {
          this._log("error", t2);
        }, a.prototype.critical = function(t2) {
          this._log("critical", t2);
        }, a.prototype.wait = function(t2) {
          this.queue.wait(t2);
        }, a.prototype.captureEvent = function(t2, e2, r2) {
          return this.telemeter && this.telemeter.captureEvent(t2, e2, r2);
        }, a.prototype.captureDomContentLoaded = function(t2) {
          return this.telemeter && this.telemeter.captureDomContentLoaded(t2);
        }, a.prototype.captureLoad = function(t2) {
          return this.telemeter && this.telemeter.captureLoad(t2);
        }, a.prototype.buildJsonPayload = function(t2) {
          return this.api.buildJsonPayload(t2);
        }, a.prototype.sendJsonPayload = function(t2) {
          this.api.postJsonPayload(t2);
        }, a.prototype._log = function(t2, e2) {
          var r2;
          if (e2.callback && (r2 = e2.callback, delete e2.callback), this.options.ignoreDuplicateErrors && this._sameAsLastError(e2)) {
            if (r2) {
              var n2 = new Error("ignored identical item");
              n2.item = e2, r2(n2);
            }
          } else
            try {
              this._addTracingInfo(e2), e2.level = e2.level || t2, this.telemeter && this.telemeter._captureRollbarItem(e2), e2.telemetryEvents = this.telemeter && this.telemeter.copyEvents() || [], this.notifier.log(e2, r2);
            } catch (t3) {
              r2 && r2(t3), this.logger.error(t3);
            }
        }, a.prototype._defaultLogLevel = function() {
          return this.options.logLevel || "debug";
        }, a.prototype._sameAsLastError = function(t2) {
          if (!t2._isUncaught)
            return false;
          var e2 = function(t3) {
            var e3 = t3.message || "", r2 = (t3.err || {}).stack || String(t3.err);
            return e3 + "::" + r2;
          }(t2);
          return this.lastErrorHash === e2 || (this.lastError = t2.err, this.lastErrorHash = e2, false);
        }, a.prototype._addTracingInfo = function(t2) {
          if (this.tracer) {
            var e2 = this.tracer.scope().active();
            if (function(t3) {
              if (!t3 || !t3.context || "function" != typeof t3.context)
                return false;
              var e3 = t3.context();
              if (!e3 || !e3.toSpanId || !e3.toTraceId || "function" != typeof e3.toSpanId || "function" != typeof e3.toTraceId)
                return false;
              return true;
            }(e2)) {
              e2.setTag("rollbar.error_uuid", t2.uuid), e2.setTag("rollbar.has_error", true), e2.setTag("error", true), e2.setTag("rollbar.item_url", "https://rollbar.com/item/uuid/?uuid=" + t2.uuid), e2.setTag("rollbar.occurrence_url", "https://rollbar.com/occurrence/uuid/?uuid=" + t2.uuid);
              var r2 = e2.context().toSpanId(), n2 = e2.context().toTraceId();
              t2.custom ? (t2.custom.opentracing_span_id = r2, t2.custom.opentracing_trace_id = n2) : t2.custom = { opentracing_span_id: r2, opentracing_trace_id: n2 };
            }
          }
        }, t.exports = a;
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2) {
          this.startTime = n.now(), this.counter = 0, this.perMinCounter = 0, this.platform = null, this.platformOptions = {}, this.configureGlobal(t2);
        }
        function i(t2, e2, r2) {
          return !t2.ignoreRateLimit && e2 >= 1 && r2 > e2;
        }
        function s(t2, e2, r2, n2, o2, i2, s2) {
          var a = null;
          return r2 && (r2 = new Error(r2)), r2 || n2 || (a = function(t3, e3, r3, n3, o3) {
            var i3, s3 = e3.environment || e3.payload && e3.payload.environment;
            i3 = o3 ? "item per minute limit reached, ignoring errors until timeout" : "maxItems has been hit, ignoring errors until reset.";
            var a2 = { body: { message: { body: i3, extra: { maxItems: r3, itemsPerMinute: n3 } } }, language: "javascript", environment: s3, notifier: { version: e3.notifier && e3.notifier.version || e3.version } };
            "browser" === t3 ? (a2.platform = "browser", a2.framework = "browser-js", a2.notifier.name = "rollbar-browser-js") : "server" === t3 ? (a2.framework = e3.framework || "node-js", a2.notifier.name = e3.notifier.name) : "react-native" === t3 && (a2.framework = e3.framework || "react-native", a2.notifier.name = e3.notifier.name);
            return a2;
          }(t2, e2, o2, i2, s2)), { error: r2, shouldSend: n2, payload: a };
        }
        o.globalSettings = { startTime: n.now(), maxItems: void 0, itemsPerMinute: void 0 }, o.prototype.configureGlobal = function(t2) {
          void 0 !== t2.startTime && (o.globalSettings.startTime = t2.startTime), void 0 !== t2.maxItems && (o.globalSettings.maxItems = t2.maxItems), void 0 !== t2.itemsPerMinute && (o.globalSettings.itemsPerMinute = t2.itemsPerMinute);
        }, o.prototype.shouldSend = function(t2, e2) {
          var r2 = (e2 = e2 || n.now()) - this.startTime;
          (r2 < 0 || r2 >= 6e4) && (this.startTime = e2, this.perMinCounter = 0);
          var a = o.globalSettings.maxItems, u = o.globalSettings.itemsPerMinute;
          if (i(t2, a, this.counter))
            return s(this.platform, this.platformOptions, a + " max items reached", false);
          if (i(t2, u, this.perMinCounter))
            return s(this.platform, this.platformOptions, u + " items per minute reached", false);
          this.counter++, this.perMinCounter++;
          var c = !i(t2, a, this.counter), l = c;
          return c = c && !i(t2, u, this.perMinCounter), s(this.platform, this.platformOptions, null, c, a, u, l);
        }, o.prototype.setPlatformOptions = function(t2, e2) {
          this.platform = t2, this.platformOptions = e2;
        }, t.exports = o;
      }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty, o = Object.prototype.toString, i = function(t2) {
          if (!t2 || "[object Object]" !== o.call(t2))
            return false;
          var e2, r2 = n.call(t2, "constructor"), i2 = t2.constructor && t2.constructor.prototype && n.call(t2.constructor.prototype, "isPrototypeOf");
          if (t2.constructor && !r2 && !i2)
            return false;
          for (e2 in t2)
            ;
          return void 0 === e2 || n.call(t2, e2);
        };
        t.exports = function t2() {
          var e2, r2, n2, o2, s, a = {}, u = null, c = arguments.length;
          for (e2 = 0; e2 < c; e2++)
            if (null != (u = arguments[e2]))
              for (s in u)
                r2 = a[s], a !== (n2 = u[s]) && (n2 && i(n2) ? (o2 = r2 && i(r2) ? r2 : {}, a[s] = t2(o2, n2)) : void 0 !== n2 && (a[s] = n2));
          return a;
        };
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2, e2, r2, n2) {
          this.rateLimiter = t2, this.api = e2, this.logger = r2, this.options = n2, this.predicates = [], this.pendingItems = [], this.pendingRequests = [], this.retryQueue = [], this.retryHandle = null, this.waitCallback = null, this.waitIntervalID = null;
        }
        o.prototype.configure = function(t2) {
          this.api && this.api.configure(t2);
          var e2 = this.options;
          return this.options = n.merge(e2, t2), this;
        }, o.prototype.addPredicate = function(t2) {
          return n.isFunction(t2) && this.predicates.push(t2), this;
        }, o.prototype.addPendingItem = function(t2) {
          this.pendingItems.push(t2);
        }, o.prototype.removePendingItem = function(t2) {
          var e2 = this.pendingItems.indexOf(t2);
          -1 !== e2 && this.pendingItems.splice(e2, 1);
        }, o.prototype.addItem = function(t2, e2, r2, o2) {
          e2 && n.isFunction(e2) || (e2 = function() {
          });
          var i2 = this._applyPredicates(t2);
          if (i2.stop)
            return this.removePendingItem(o2), void e2(i2.err);
          if (this._maybeLog(t2, r2), this.removePendingItem(o2), this.options.transmit) {
            this.pendingRequests.push(t2);
            try {
              this._makeApiRequest(t2, (function(r3, n2) {
                this._dequeuePendingRequest(t2), e2(r3, n2);
              }).bind(this));
            } catch (r3) {
              this._dequeuePendingRequest(t2), e2(r3);
            }
          } else
            e2(new Error("Transmit disabled"));
        }, o.prototype.wait = function(t2) {
          n.isFunction(t2) && (this.waitCallback = t2, this._maybeCallWait() || (this.waitIntervalID && (this.waitIntervalID = clearInterval(this.waitIntervalID)), this.waitIntervalID = setInterval((function() {
            this._maybeCallWait();
          }).bind(this), 500)));
        }, o.prototype._applyPredicates = function(t2) {
          for (var e2 = null, r2 = 0, n2 = this.predicates.length; r2 < n2; r2++)
            if (!(e2 = this.predicates[r2](t2, this.options)) || void 0 !== e2.err)
              return { stop: true, err: e2.err };
          return { stop: false, err: null };
        }, o.prototype._makeApiRequest = function(t2, e2) {
          var r2 = this.rateLimiter.shouldSend(t2);
          r2.shouldSend ? this.api.postItem(t2, (function(r3, n2) {
            r3 ? this._maybeRetry(r3, t2, e2) : e2(r3, n2);
          }).bind(this)) : r2.error ? e2(r2.error) : this.api.postItem(r2.payload, e2);
        };
        var i = ["ECONNRESET", "ENOTFOUND", "ESOCKETTIMEDOUT", "ETIMEDOUT", "ECONNREFUSED", "EHOSTUNREACH", "EPIPE", "EAI_AGAIN"];
        o.prototype._maybeRetry = function(t2, e2, r2) {
          var o2 = false;
          if (this.options.retryInterval) {
            for (var s = 0, a = i.length; s < a; s++)
              if (t2.code === i[s]) {
                o2 = true;
                break;
              }
            o2 && n.isFiniteNumber(this.options.maxRetries) && (e2.retries = e2.retries ? e2.retries + 1 : 1, e2.retries > this.options.maxRetries && (o2 = false));
          }
          o2 ? this._retryApiRequest(e2, r2) : r2(t2);
        }, o.prototype._retryApiRequest = function(t2, e2) {
          this.retryQueue.push({ item: t2, callback: e2 }), this.retryHandle || (this.retryHandle = setInterval((function() {
            for (; this.retryQueue.length; ) {
              var t3 = this.retryQueue.shift();
              this._makeApiRequest(t3.item, t3.callback);
            }
          }).bind(this), this.options.retryInterval));
        }, o.prototype._dequeuePendingRequest = function(t2) {
          var e2 = this.pendingRequests.indexOf(t2);
          -1 !== e2 && (this.pendingRequests.splice(e2, 1), this._maybeCallWait());
        }, o.prototype._maybeLog = function(t2, e2) {
          if (this.logger && this.options.verbose) {
            var r2 = e2;
            if (r2 = (r2 = r2 || n.get(t2, "body.trace.exception.message")) || n.get(t2, "body.trace_chain.0.exception.message"))
              return void this.logger.error(r2);
            (r2 = n.get(t2, "body.message.body")) && this.logger.log(r2);
          }
        }, o.prototype._maybeCallWait = function() {
          return !(!n.isFunction(this.waitCallback) || 0 !== this.pendingItems.length || 0 !== this.pendingRequests.length) && (this.waitIntervalID && (this.waitIntervalID = clearInterval(this.waitIntervalID)), this.waitCallback(), true);
        }, t.exports = o;
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2, e2) {
          this.queue = t2, this.options = e2, this.transforms = [], this.diagnostic = {};
        }
        o.prototype.configure = function(t2) {
          this.queue && this.queue.configure(t2);
          var e2 = this.options;
          return this.options = n.merge(e2, t2), this;
        }, o.prototype.addTransform = function(t2) {
          return n.isFunction(t2) && this.transforms.push(t2), this;
        }, o.prototype.log = function(t2, e2) {
          if (e2 && n.isFunction(e2) || (e2 = function() {
          }), !this.options.enabled)
            return e2(new Error("Rollbar is not enabled"));
          this.queue.addPendingItem(t2);
          var r2 = t2.err;
          this._applyTransforms(t2, (function(n2, o2) {
            if (n2)
              return this.queue.removePendingItem(t2), e2(n2, null);
            this.queue.addItem(o2, e2, r2, t2);
          }).bind(this));
        }, o.prototype._applyTransforms = function(t2, e2) {
          var r2 = -1, n2 = this.transforms.length, o2 = this.transforms, i = this.options, s = function(t3, a) {
            t3 ? e2(t3, null) : ++r2 !== n2 ? o2[r2](a, i, s) : e2(null, a);
          };
          s(null, t2);
        }, t.exports = o;
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(16), i = { hostname: "api.rollbar.com", path: "/api/1/item/", search: null, version: "1", protocol: "https:", port: 443 };
        function s(t2, e2, r2, n2, o2) {
          this.options = t2, this.transport = e2, this.url = r2, this.truncation = n2, this.jsonBackup = o2, this.accessToken = t2.accessToken, this.transportOptions = a(t2, r2);
        }
        function a(t2, e2) {
          return o.getTransportFromOptions(t2, i, e2);
        }
        s.prototype.postItem = function(t2, e2) {
          var r2 = o.transportOptions(this.transportOptions, "POST"), n2 = o.buildPayload(this.accessToken, t2, this.jsonBackup), i2 = this;
          setTimeout(function() {
            i2.transport.post(i2.accessToken, r2, n2, e2);
          }, 0);
        }, s.prototype.buildJsonPayload = function(t2, e2) {
          var r2, i2 = o.buildPayload(this.accessToken, t2, this.jsonBackup);
          return (r2 = this.truncation ? this.truncation.truncate(i2) : n.stringify(i2)).error ? (e2 && e2(r2.error), null) : r2.value;
        }, s.prototype.postJsonPayload = function(t2, e2) {
          var r2 = o.transportOptions(this.transportOptions, "POST");
          this.transport.postJsonPayload(this.accessToken, r2, t2, e2);
        }, s.prototype.configure = function(t2) {
          var e2 = this.oldOptions;
          return this.options = n.merge(e2, t2), this.transportOptions = a(this.options, this.url), void 0 !== this.options.accessToken && (this.accessToken = this.options.accessToken), this;
        }, t.exports = s;
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        t.exports = { buildPayload: function(t2, e2, r2) {
          if (!n.isType(e2.context, "string")) {
            var o = n.stringify(e2.context, r2);
            o.error ? e2.context = "Error: could not serialize 'context'" : e2.context = o.value || "", e2.context.length > 255 && (e2.context = e2.context.substr(0, 255));
          }
          return { access_token: t2, data: e2 };
        }, getTransportFromOptions: function(t2, e2, r2) {
          var n2 = e2.hostname, o = e2.protocol, i = e2.port, s = e2.path, a = e2.search, u = t2.timeout, c = function(t3) {
            var e3 = "undefined" != typeof window && window || "undefined" != typeof self && self, r3 = t3.defaultTransport || "xhr";
            void 0 === e3.fetch && (r3 = "xhr");
            void 0 === e3.XMLHttpRequest && (r3 = "fetch");
            return r3;
          }(t2), l = t2.proxy;
          if (t2.endpoint) {
            var p = r2.parse(t2.endpoint);
            n2 = p.hostname, o = p.protocol, i = p.port, s = p.pathname, a = p.search;
          }
          return { timeout: u, hostname: n2, protocol: o, port: i, path: s, search: a, proxy: l, transport: c };
        }, transportOptions: function(t2, e2) {
          var r2 = t2.protocol || "https:", n2 = t2.port || ("http:" === r2 ? 80 : "https:" === r2 ? 443 : void 0), o = t2.hostname, i = t2.path, s = t2.timeout, a = t2.transport;
          return t2.search && (i += t2.search), t2.proxy && (i = r2 + "//" + o + i, o = t2.proxy.host || t2.proxy.hostname, n2 = t2.proxy.port, r2 = t2.proxy.protocol || r2), { timeout: s, protocol: r2, hostname: o, path: i, port: n2, method: e2, transport: a };
        }, appendPathToPath: function(t2, e2) {
          var r2 = /\/$/.test(t2), n2 = /^\//.test(e2);
          return r2 && n2 ? e2 = e2.substring(1) : r2 || n2 || (e2 = "/" + e2), t2 + e2;
        } };
      }, function(t, e) {
        !function(t2) {
          "use strict";
          t2.console || (t2.console = {});
          for (var e2, r, n = t2.console, o = function() {
          }, i = ["memory"], s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e2 = i.pop(); )
            n[e2] || (n[e2] = {});
          for (; r = s.pop(); )
            n[r] || (n[r] = o);
        }("undefined" == typeof window ? this : window);
      }, function(t, e, r) {
        "use strict";
        var n = { ieVersion: function() {
          if ("undefined" != typeof document) {
            for (var t2 = 3, e2 = document.createElement("div"), r2 = e2.getElementsByTagName("i"); e2.innerHTML = "<!--[if gt IE " + ++t2 + "]><i></i><![endif]-->", r2[0]; )
              ;
            return t2 > 4 ? t2 : void 0;
          }
        } };
        t.exports = n;
      }, function(t, e, r) {
        "use strict";
        function n(t2, e2, r2, n2) {
          t2._rollbarWrappedError && (n2[4] || (n2[4] = t2._rollbarWrappedError), n2[5] || (n2[5] = t2._rollbarWrappedError._rollbarContext), t2._rollbarWrappedError = null);
          var o = e2.handleUncaughtException.apply(e2, n2);
          r2 && r2.apply(t2, n2), "anonymous" === o && (e2.anonymousErrorsPending += 1);
        }
        t.exports = { captureUncaughtExceptions: function(t2, e2, r2) {
          if (t2) {
            var o;
            if ("function" == typeof e2._rollbarOldOnError)
              o = e2._rollbarOldOnError;
            else if (t2.onerror) {
              for (o = t2.onerror; o._rollbarOldOnError; )
                o = o._rollbarOldOnError;
              e2._rollbarOldOnError = o;
            }
            e2.handleAnonymousErrors();
            var i = function() {
              var r3 = Array.prototype.slice.call(arguments, 0);
              n(t2, e2, o, r3);
            };
            r2 && (i._rollbarOldOnError = o), t2.onerror = i;
          }
        }, captureUnhandledRejections: function(t2, e2, r2) {
          if (t2) {
            "function" == typeof t2._rollbarURH && t2._rollbarURH.belongsToShim && t2.removeEventListener("unhandledrejection", t2._rollbarURH);
            var n2 = function(t3) {
              var r3, n3, o;
              try {
                r3 = t3.reason;
              } catch (t4) {
                r3 = void 0;
              }
              try {
                n3 = t3.promise;
              } catch (t4) {
                n3 = "[unhandledrejection] error getting `promise` from event";
              }
              try {
                o = t3.detail, !r3 && o && (r3 = o.reason, n3 = o.promise);
              } catch (t4) {
              }
              r3 || (r3 = "[unhandledrejection] error getting `reason` from event"), e2 && e2.handleUnhandledRejection && e2.handleUnhandledRejection(r3, n3);
            };
            n2.belongsToShim = r2, t2._rollbarURH = n2, t2.addEventListener("unhandledrejection", n2);
          }
        } };
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(21), i = r(22);
        function s(t2) {
          this.truncation = t2;
        }
        s.prototype.get = function(t2, e2, r2, o2, i2) {
          o2 && n.isFunction(o2) || (o2 = function() {
          }), n.addParamsAndAccessTokenToPath(t2, e2, r2);
          var s2 = n.formatUrl(e2);
          this._makeZoneRequest(t2, s2, "GET", null, o2, i2, e2.timeout, e2.transport);
        }, s.prototype.post = function(t2, e2, r2, o2, i2) {
          if (o2 && n.isFunction(o2) || (o2 = function() {
          }), !r2)
            return o2(new Error("Cannot send empty request"));
          var s2;
          if ((s2 = this.truncation ? this.truncation.truncate(r2) : n.stringify(r2)).error)
            return o2(s2.error);
          var a = s2.value, u = n.formatUrl(e2);
          this._makeZoneRequest(t2, u, "POST", a, o2, i2, e2.timeout, e2.transport);
        }, s.prototype.postJsonPayload = function(t2, e2, r2, o2, i2) {
          o2 && n.isFunction(o2) || (o2 = function() {
          });
          var s2 = n.formatUrl(e2);
          this._makeZoneRequest(t2, s2, "POST", r2, o2, i2, e2.timeout, e2.transport);
        }, s.prototype._makeZoneRequest = function() {
          var t2 = "undefined" != typeof window && window || void 0 !== o2 && o2, e2 = t2 && t2.Zone && t2.Zone.current, r2 = Array.prototype.slice.call(arguments);
          if (e2 && "angular" === e2._name) {
            var n2 = e2._parent, o2 = this;
            n2.run(function() {
              o2._makeRequest.apply(void 0, r2);
            });
          } else
            this._makeRequest.apply(void 0, r2);
        }, s.prototype._makeRequest = function(t2, e2, r2, n2, s2, a, u, c) {
          if ("undefined" != typeof RollbarProxy)
            return function(t3, e3) {
              new RollbarProxy().sendJsonPayload(t3, function(t4) {
              }, function(t4) {
                e3(new Error(t4));
              });
            }(n2, s2);
          "fetch" === c ? o(t2, e2, r2, n2, s2, u) : i(t2, e2, r2, n2, s2, a, u);
        }, t.exports = s;
      }, function(t, e, r) {
        "use strict";
        var n = r(1), o = r(0);
        t.exports = function(t2, e2, r2, i, s, a) {
          var u, c;
          o.isFiniteNumber(a) && (u = new AbortController(), c = setTimeout(function() {
            u.abort();
          }, a)), fetch(e2, { method: r2, headers: { "Content-Type": "application/json", "X-Rollbar-Access-Token": t2, signal: u && u.signal }, body: i }).then(function(t3) {
            return c && clearTimeout(c), t3.json();
          }).then(function(t3) {
            s(null, t3);
          }).catch(function(t3) {
            n.error(t3.message), s(t3);
          });
        };
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(1);
        function i(t2, e2) {
          var r2 = new Error(t2);
          return r2.code = e2 || "ENOTFOUND", r2;
        }
        t.exports = function(t2, e2, r2, s, a, u, c) {
          var l;
          if (!(l = u ? u() : function() {
            var t3, e3, r3 = [function() {
              return new XMLHttpRequest();
            }, function() {
              return new ActiveXObject("Msxml2.XMLHTTP");
            }, function() {
              return new ActiveXObject("Msxml3.XMLHTTP");
            }, function() {
              return new ActiveXObject("Microsoft.XMLHTTP");
            }], n2 = r3.length;
            for (e3 = 0; e3 < n2; e3++)
              try {
                t3 = r3[e3]();
                break;
              } catch (t4) {
              }
            return t3;
          }()))
            return a(new Error("No way to send a request"));
          try {
            try {
              var p = function() {
                try {
                  if (p && 4 === l.readyState) {
                    p = void 0;
                    var t3 = n.jsonParse(l.responseText);
                    if ((s2 = l) && s2.status && 200 === s2.status)
                      return void a(t3.error, t3.value);
                    if (function(t4) {
                      return t4 && n.isType(t4.status, "number") && t4.status >= 400 && t4.status < 600;
                    }(l)) {
                      if (403 === l.status) {
                        var e3 = t3.value && t3.value.message;
                        o.error(e3);
                      }
                      a(new Error(String(l.status)));
                    } else {
                      a(i("XHR response had no status code (likely connection failure)"));
                    }
                  }
                } catch (t4) {
                  var r3;
                  r3 = t4 && t4.stack ? t4 : new Error(t4), a(r3);
                }
                var s2;
              };
              l.open(r2, e2, true), l.setRequestHeader && (l.setRequestHeader("Content-Type", "application/json"), l.setRequestHeader("X-Rollbar-Access-Token", t2)), n.isFiniteNumber(c) && (l.timeout = c), l.onreadystatechange = p, l.send(s);
            } catch (t3) {
              if ("undefined" != typeof XDomainRequest) {
                if (!window || !window.location)
                  return a(new Error("No window available during request, unknown environment"));
                "http:" === window.location.href.substring(0, 5) && "https" === e2.substring(0, 5) && (e2 = "http" + e2.substring(5));
                var f = new XDomainRequest();
                f.onprogress = function() {
                }, f.ontimeout = function() {
                  a(i("Request timed out", "ETIMEDOUT"));
                }, f.onerror = function() {
                  a(new Error("Error during request"));
                }, f.onload = function() {
                  var t4 = n.jsonParse(f.responseText);
                  a(t4.error, t4.value);
                }, f.open(r2, e2, true), f.send(s);
              } else
                a(new Error("Cannot find a method to transport a request"));
            }
          } catch (t3) {
            a(t3);
          }
        };
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(3), i = r(1);
        function s(t2, e2, r2) {
          var o2 = t2.message, i2 = t2.custom;
          o2 || (o2 = "Item sent with null or missing arguments.");
          var s2 = { body: o2 };
          i2 && (s2.extra = n.merge(i2)), n.set(t2, "data.body", { message: s2 }), r2(null, t2);
        }
        function a(t2) {
          var e2 = t2.stackInfo.stack;
          return e2 && 0 === e2.length && t2._unhandledStackInfo && t2._unhandledStackInfo.stack && (e2 = t2._unhandledStackInfo.stack), e2;
        }
        function u(t2, e2, r2) {
          var i2 = t2 && t2.data.description, s2 = t2 && t2.custom, u2 = a(t2), l = o.guessErrorClass(e2.message), p = { exception: { class: c(e2, l[0], r2), message: l[1] } };
          if (i2 && (p.exception.description = i2), u2) {
            var f, h, d, m, g, v, y, b;
            for (0 === u2.length && (p.exception.stack = e2.rawStack, p.exception.raw = String(e2.rawException)), p.frames = [], y = 0; y < u2.length; ++y)
              h = { filename: (f = u2[y]).url ? n.sanitizeUrl(f.url) : "(unknown)", lineno: f.line || null, method: f.func && "?" !== f.func ? f.func : "[anonymous]", colno: f.column }, r2.sendFrameUrl && (h.url = f.url), h.method && h.method.endsWith && h.method.endsWith("_rollbar_wrapped") || (d = m = g = null, (v = f.context ? f.context.length : 0) && (b = Math.floor(v / 2), m = f.context.slice(0, b), d = f.context[b], g = f.context.slice(b)), d && (h.code = d), (m || g) && (h.context = {}, m && m.length && (h.context.pre = m), g && g.length && (h.context.post = g)), f.args && (h.args = f.args), p.frames.push(h));
            p.frames.reverse(), s2 && (p.extra = n.merge(s2));
          }
          return p;
        }
        function c(t2, e2, r2) {
          return t2.name ? t2.name : r2.guessErrorClass ? e2 : "(unknown)";
        }
        t.exports = { handleDomException: function(t2, e2, r2) {
          if (t2.err && "DOMException" === o.Stack(t2.err).name) {
            var n2 = new Error();
            n2.name = t2.err.name, n2.message = t2.err.message, n2.stack = t2.err.stack, n2.nested = t2.err, t2.err = n2;
          }
          r2(null, t2);
        }, handleItemWithError: function(t2, e2, r2) {
          if (t2.data = t2.data || {}, t2.err)
            try {
              t2.stackInfo = t2.err._savedStackTrace || o.parse(t2.err, t2.skipFrames), e2.addErrorContext && function(t3) {
                var e3 = [], r3 = t3.err;
                e3.push(r3);
                for (; r3.nested || r3.cause; )
                  r3 = r3.nested || r3.cause, e3.push(r3);
                n.addErrorContext(t3, e3);
              }(t2);
            } catch (e3) {
              i.error("Error while parsing the error object.", e3);
              try {
                t2.message = t2.err.message || t2.err.description || t2.message || String(t2.err);
              } catch (e4) {
                t2.message = String(t2.err) || String(e4);
              }
              delete t2.err;
            }
          r2(null, t2);
        }, ensureItemHasSomethingToSay: function(t2, e2, r2) {
          t2.message || t2.stackInfo || t2.custom || r2(new Error("No message, stack info, or custom data"), null), r2(null, t2);
        }, addBaseInfo: function(t2, e2, r2) {
          var o2 = e2.payload && e2.payload.environment || e2.environment;
          t2.data = n.merge(t2.data, { environment: o2, level: t2.level, endpoint: e2.endpoint, platform: "browser", framework: "browser-js", language: "javascript", server: {}, uuid: t2.uuid, notifier: { name: "rollbar-browser-js", version: e2.version }, custom: t2.custom }), r2(null, t2);
        }, addRequestInfo: function(t2) {
          return function(e2, r2, o2) {
            var i2 = {};
            t2 && t2.location && (i2.url = t2.location.href, i2.query_string = t2.location.search);
            var s2 = "$remote_ip";
            r2.captureIp ? true !== r2.captureIp && (s2 += "_anonymize") : s2 = null, s2 && (i2.user_ip = s2), Object.keys(i2).length > 0 && n.set(e2, "data.request", i2), o2(null, e2);
          };
        }, addClientInfo: function(t2) {
          return function(e2, r2, o2) {
            if (!t2)
              return o2(null, e2);
            var i2 = t2.navigator || {}, s2 = t2.screen || {};
            n.set(e2, "data.client", { runtime_ms: e2.timestamp - t2._rollbarStartTime, timestamp: Math.round(e2.timestamp / 1e3), javascript: { browser: i2.userAgent, language: i2.language, cookie_enabled: i2.cookieEnabled, screen: { width: s2.width, height: s2.height } } }), o2(null, e2);
          };
        }, addPluginInfo: function(t2) {
          return function(e2, r2, o2) {
            if (!t2 || !t2.navigator)
              return o2(null, e2);
            for (var i2, s2 = [], a2 = t2.navigator.plugins || [], u2 = 0, c2 = a2.length; u2 < c2; ++u2)
              i2 = a2[u2], s2.push({ name: i2.name, description: i2.description });
            n.set(e2, "data.client.javascript.plugins", s2), o2(null, e2);
          };
        }, addBody: function(t2, e2, r2) {
          t2.stackInfo ? t2.stackInfo.traceChain ? function(t3, e3, r3) {
            for (var o2 = t3.stackInfo.traceChain, i2 = [], s2 = o2.length, a2 = 0; a2 < s2; a2++) {
              var c2 = u(t3, o2[a2], e3);
              i2.push(c2);
            }
            n.set(t3, "data.body", { trace_chain: i2 }), r3(null, t3);
          }(t2, e2, r2) : function(t3, e3, r3) {
            if (a(t3)) {
              var i2 = u(t3, t3.stackInfo, e3);
              n.set(t3, "data.body", { trace: i2 }), r3(null, t3);
            } else {
              var l = t3.stackInfo, p = o.guessErrorClass(l.message), f = c(l, p[0], e3), h = p[1];
              t3.message = f + ": " + h, s(t3, e3, r3);
            }
          }(t2, e2, r2) : s(t2, e2, r2);
        }, addScrubber: function(t2) {
          return function(e2, r2, n2) {
            if (t2) {
              var o2 = r2.scrubFields || [], i2 = r2.scrubPaths || [];
              e2.data = t2(e2.data, o2, i2);
            }
            n2(null, e2);
          };
        } };
      }, function(t, e, r) {
        var n, o, i;
        !function(s, a) {
          "use strict";
          o = [r(25)], void 0 === (i = "function" == typeof (n = function(t2) {
            var e2 = /(^|@)\S+:\d+/, r2 = /^\s*at .*(\S+:\d+|\(native\))/m, n2 = /^(eval@)?(\[native code])?$/;
            return { parse: function(t3) {
              if (void 0 !== t3.stacktrace || void 0 !== t3["opera#sourceloc"])
                return this.parseOpera(t3);
              if (t3.stack && t3.stack.match(r2))
                return this.parseV8OrIE(t3);
              if (t3.stack)
                return this.parseFFOrSafari(t3);
              throw new Error("Cannot parse given Error object");
            }, extractLocation: function(t3) {
              if (-1 === t3.indexOf(":"))
                return [t3];
              var e3 = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t3.replace(/[()]/g, ""));
              return [e3[1], e3[2] || void 0, e3[3] || void 0];
            }, parseV8OrIE: function(e3) {
              return e3.stack.split("\n").filter(function(t3) {
                return !!t3.match(r2);
              }, this).map(function(e4) {
                e4.indexOf("(eval ") > -1 && (e4 = e4.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                var r3 = e4.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), n3 = r3.match(/ (\(.+\)$)/);
                r3 = n3 ? r3.replace(n3[0], "") : r3;
                var o2 = this.extractLocation(n3 ? n3[1] : r3), i2 = n3 && r3 || void 0, s2 = ["eval", "<anonymous>"].indexOf(o2[0]) > -1 ? void 0 : o2[0];
                return new t2({ functionName: i2, fileName: s2, lineNumber: o2[1], columnNumber: o2[2], source: e4 });
              }, this);
            }, parseFFOrSafari: function(e3) {
              return e3.stack.split("\n").filter(function(t3) {
                return !t3.match(n2);
              }, this).map(function(e4) {
                if (e4.indexOf(" > eval") > -1 && (e4 = e4.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e4.indexOf("@") && -1 === e4.indexOf(":"))
                  return new t2({ functionName: e4 });
                var r3 = /((.*".+"[^@]*)?[^@]*)(?:@)/, n3 = e4.match(r3), o2 = n3 && n3[1] ? n3[1] : void 0, i2 = this.extractLocation(e4.replace(r3, ""));
                return new t2({ functionName: o2, fileName: i2[0], lineNumber: i2[1], columnNumber: i2[2], source: e4 });
              }, this);
            }, parseOpera: function(t3) {
              return !t3.stacktrace || t3.message.indexOf("\n") > -1 && t3.message.split("\n").length > t3.stacktrace.split("\n").length ? this.parseOpera9(t3) : t3.stack ? this.parseOpera11(t3) : this.parseOpera10(t3);
            }, parseOpera9: function(e3) {
              for (var r3 = /Line (\d+).*script (?:in )?(\S+)/i, n3 = e3.message.split("\n"), o2 = [], i2 = 2, s2 = n3.length; i2 < s2; i2 += 2) {
                var a2 = r3.exec(n3[i2]);
                a2 && o2.push(new t2({ fileName: a2[2], lineNumber: a2[1], source: n3[i2] }));
              }
              return o2;
            }, parseOpera10: function(e3) {
              for (var r3 = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n3 = e3.stacktrace.split("\n"), o2 = [], i2 = 0, s2 = n3.length; i2 < s2; i2 += 2) {
                var a2 = r3.exec(n3[i2]);
                a2 && o2.push(new t2({ functionName: a2[3] || void 0, fileName: a2[2], lineNumber: a2[1], source: n3[i2] }));
              }
              return o2;
            }, parseOpera11: function(r3) {
              return r3.stack.split("\n").filter(function(t3) {
                return !!t3.match(e2) && !t3.match(/^Error created at/);
              }, this).map(function(e3) {
                var r4, n3 = e3.split("@"), o2 = this.extractLocation(n3.pop()), i2 = n3.shift() || "", s2 = i2.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                i2.match(/\(([^)]*)\)/) && (r4 = i2.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                var a2 = void 0 === r4 || "[arguments not available]" === r4 ? void 0 : r4.split(",");
                return new t2({ functionName: s2, args: a2, fileName: o2[0], lineNumber: o2[1], columnNumber: o2[2], source: e3 });
              }, this);
            } };
          }) ? n.apply(e, o) : n) || (t.exports = i);
        }();
      }, function(t, e, r) {
        var n, o, i;
        !function(r2, s) {
          "use strict";
          o = [], void 0 === (i = "function" == typeof (n = function() {
            function t2(t3) {
              return t3.charAt(0).toUpperCase() + t3.substring(1);
            }
            function e2(t3) {
              return function() {
                return this[t3];
              };
            }
            var r3 = ["isConstructor", "isEval", "isNative", "isToplevel"], n2 = ["columnNumber", "lineNumber"], o2 = ["fileName", "functionName", "source"], i2 = r3.concat(n2, o2, ["args"], ["evalOrigin"]);
            function s2(e3) {
              if (e3)
                for (var r4 = 0; r4 < i2.length; r4++)
                  void 0 !== e3[i2[r4]] && this["set" + t2(i2[r4])](e3[i2[r4]]);
            }
            s2.prototype = { getArgs: function() {
              return this.args;
            }, setArgs: function(t3) {
              if ("[object Array]" !== Object.prototype.toString.call(t3))
                throw new TypeError("Args must be an Array");
              this.args = t3;
            }, getEvalOrigin: function() {
              return this.evalOrigin;
            }, setEvalOrigin: function(t3) {
              if (t3 instanceof s2)
                this.evalOrigin = t3;
              else {
                if (!(t3 instanceof Object))
                  throw new TypeError("Eval Origin must be an Object or StackFrame");
                this.evalOrigin = new s2(t3);
              }
            }, toString: function() {
              var t3 = this.getFileName() || "", e3 = this.getLineNumber() || "", r4 = this.getColumnNumber() || "", n3 = this.getFunctionName() || "";
              return this.getIsEval() ? t3 ? "[eval] (" + t3 + ":" + e3 + ":" + r4 + ")" : "[eval]:" + e3 + ":" + r4 : n3 ? n3 + " (" + t3 + ":" + e3 + ":" + r4 + ")" : t3 + ":" + e3 + ":" + r4;
            } }, s2.fromString = function(t3) {
              var e3 = t3.indexOf("("), r4 = t3.lastIndexOf(")"), n3 = t3.substring(0, e3), o3 = t3.substring(e3 + 1, r4).split(","), i3 = t3.substring(r4 + 1);
              if (0 === i3.indexOf("@"))
                var a2 = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i3, ""), u2 = a2[1], c2 = a2[2], l = a2[3];
              return new s2({ functionName: n3, args: o3 || void 0, fileName: u2, lineNumber: c2 || void 0, columnNumber: l || void 0 });
            };
            for (var a = 0; a < r3.length; a++)
              s2.prototype["get" + t2(r3[a])] = e2(r3[a]), s2.prototype["set" + t2(r3[a])] = /* @__PURE__ */ function(t3) {
                return function(e3) {
                  this[t3] = Boolean(e3);
                };
              }(r3[a]);
            for (var u = 0; u < n2.length; u++)
              s2.prototype["get" + t2(n2[u])] = e2(n2[u]), s2.prototype["set" + t2(n2[u])] = /* @__PURE__ */ function(t3) {
                return function(e3) {
                  if (r4 = e3, isNaN(parseFloat(r4)) || !isFinite(r4))
                    throw new TypeError(t3 + " must be a Number");
                  var r4;
                  this[t3] = Number(e3);
                };
              }(n2[u]);
            for (var c = 0; c < o2.length; c++)
              s2.prototype["get" + t2(o2[c])] = e2(o2[c]), s2.prototype["set" + t2(o2[c])] = /* @__PURE__ */ function(t3) {
                return function(e3) {
                  this[t3] = String(e3);
                };
              }(o2[c]);
            return s2;
          }) ? n.apply(e, o) : n) || (t.exports = i);
        }();
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2, e2) {
          n.isFunction(t2[e2]) && (t2[e2] = t2[e2].toString());
        }
        t.exports = { itemToPayload: function(t2, e2, r2) {
          var n2 = t2.data;
          t2._isUncaught && (n2._isUncaught = true), t2._originalArgs && (n2._originalArgs = t2._originalArgs), r2(null, n2);
        }, addPayloadOptions: function(t2, e2, r2) {
          var o2 = e2.payload || {};
          o2.body && delete o2.body, t2.data = n.merge(t2.data, o2), r2(null, t2);
        }, addTelemetryData: function(t2, e2, r2) {
          t2.telemetryEvents && n.set(t2, "data.body.telemetry", t2.telemetryEvents), r2(null, t2);
        }, addMessageWithError: function(t2, e2, r2) {
          if (t2.message) {
            var o2 = "data.body.trace_chain.0", i = n.get(t2, o2);
            if (i || (o2 = "data.body.trace", i = n.get(t2, o2)), i) {
              if (!i.exception || !i.exception.description)
                return n.set(t2, o2 + ".exception.description", t2.message), void r2(null, t2);
              var s = n.get(t2, o2 + ".extra") || {}, a = n.merge(s, { message: t2.message });
              n.set(t2, o2 + ".extra", a);
            }
            r2(null, t2);
          } else
            r2(null, t2);
        }, userTransform: function(t2) {
          return function(e2, r2, o2) {
            var i = n.merge(e2), s = null;
            try {
              n.isFunction(r2.transform) && (s = r2.transform(i.data, e2));
            } catch (n2) {
              return r2.transform = null, t2.error("Error while calling custom transform() function. Removing custom transform().", n2), void o2(null, e2);
            }
            n.isPromise(s) ? s.then(function(t3) {
              t3 && (i.data = t3), o2(null, i);
            }, function(t3) {
              o2(t3, e2);
            }) : o2(null, i);
          };
        }, addConfigToPayload: function(t2, e2, r2) {
          if (!e2.sendConfig)
            return r2(null, t2);
          var o2 = n.get(t2, "data.custom") || {};
          o2._rollbarConfig = e2, t2.data.custom = o2, r2(null, t2);
        }, addConfiguredOptions: function(t2, e2, r2) {
          var n2 = e2._configuredOptions;
          o(n2, "transform"), o(n2, "checkIgnore"), o(n2, "onSendCallback"), delete n2.accessToken, t2.data.notifier.configured_options = n2, r2(null, t2);
        }, addDiagnosticKeys: function(t2, e2, r2) {
          var o2 = n.merge(t2.notifier.client.notifier.diagnostic, t2.diagnostic);
          if (n.get(t2, "err._isAnonymous") && (o2.is_anonymous = true), t2._isUncaught && (o2.is_uncaught = t2._isUncaught), t2.err)
            try {
              o2.raw_error = { message: t2.err.message, name: t2.err.name, constructor_name: t2.err.constructor && t2.err.constructor.name, filename: t2.err.fileName, line: t2.err.lineNumber, column: t2.err.columnNumber, stack: t2.err.stack };
            } catch (t3) {
              o2.raw_error = { failed: String(t3) };
            }
          t2.data.notifier.diagnostic = n.merge(t2.data.notifier.diagnostic, o2), r2(null, t2);
        } };
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        t.exports = { checkIgnore: function(t2, e2) {
          return !n.get(e2, "plugins.jquery.ignoreAjaxErrors") || !n.get(t2, "body.message.extra.isAjax");
        } };
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2, e2, r2) {
          if (!t2)
            return !r2;
          var o2, i2, s = t2.frames;
          if (!s || 0 === s.length)
            return !r2;
          for (var a = e2.length, u = s.length, c = 0; c < u; c++) {
            if (o2 = s[c].filename, !n.isType(o2, "string"))
              return !r2;
            for (var l = 0; l < a; l++)
              if (i2 = e2[l], new RegExp(i2).test(o2))
                return true;
          }
          return false;
        }
        function i(t2, e2, r2, i2) {
          var s, a, u = false;
          "blocklist" === r2 && (u = true);
          try {
            if (s = u ? e2.hostBlockList : e2.hostSafeList, a = n.get(t2, "body.trace_chain") || [n.get(t2, "body.trace")], !s || 0 === s.length)
              return !u;
            if (0 === a.length || !a[0])
              return !u;
            for (var c = a.length, l = 0; l < c; l++)
              if (o(a[l], s, u))
                return true;
          } catch (t3) {
            u ? e2.hostBlockList = null : e2.hostSafeList = null;
            var p = u ? "hostBlockList" : "hostSafeList";
            return i2.error("Error while reading your configuration's " + p + " option. Removing custom " + p + ".", t3), !u;
          }
          return false;
        }
        t.exports = { checkLevel: function(t2, e2) {
          var r2 = t2.level, o2 = n.LEVELS[r2] || 0, i2 = e2.reportLevel;
          return !(o2 < (n.LEVELS[i2] || 0));
        }, userCheckIgnore: function(t2) {
          return function(e2, r2) {
            var o2 = !!e2._isUncaught;
            delete e2._isUncaught;
            var i2 = e2._originalArgs;
            delete e2._originalArgs;
            try {
              n.isFunction(r2.onSendCallback) && r2.onSendCallback(o2, i2, e2);
            } catch (e3) {
              r2.onSendCallback = null, t2.error("Error while calling onSendCallback, removing", e3);
            }
            try {
              if (n.isFunction(r2.checkIgnore) && r2.checkIgnore(o2, i2, e2))
                return false;
            } catch (e3) {
              r2.checkIgnore = null, t2.error("Error while calling custom checkIgnore(), removing", e3);
            }
            return true;
          };
        }, urlIsNotBlockListed: function(t2) {
          return function(e2, r2) {
            return !i(e2, r2, "blocklist", t2);
          };
        }, urlIsSafeListed: function(t2) {
          return function(e2, r2) {
            return i(e2, r2, "safelist", t2);
          };
        }, messageIsIgnored: function(t2) {
          return function(e2, r2) {
            var o2, i2, s, a, u, c;
            try {
              if (false, !(s = r2.ignoredMessages) || 0 === s.length)
                return true;
              if (0 === (c = function(t3) {
                var e3 = t3.body, r3 = [];
                if (e3.trace_chain)
                  for (var o3 = e3.trace_chain, i3 = 0; i3 < o3.length; i3++) {
                    var s2 = o3[i3];
                    r3.push(n.get(s2, "exception.message"));
                  }
                e3.trace && r3.push(n.get(e3, "trace.exception.message"));
                e3.message && r3.push(n.get(e3, "message.body"));
                return r3;
              }(e2)).length)
                return true;
              for (a = s.length, o2 = 0; o2 < a; o2++)
                for (u = new RegExp(s[o2], "gi"), i2 = 0; i2 < c.length; i2++)
                  if (u.test(c[i2]))
                    return false;
            } catch (e3) {
              r2.ignoredMessages = null, t2.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.");
            }
            return true;
          };
        } };
      }, function(t, e, r) {
        "use strict";
        t.exports = { version: "2.26.2", endpoint: "api.rollbar.com/api/1/item/", logLevel: "debug", reportLevel: "debug", uncaughtErrorLevel: "error", maxItems: 0, itemsPerMin: 60 };
      }, function(t, e, r) {
        "use strict";
        t.exports = { scrubFields: ["pw", "pass", "passwd", "password", "secret", "confirm_password", "confirmPassword", "password_confirmation", "passwordConfirmation", "access_token", "accessToken", "X-Rollbar-Access-Token", "secret_key", "secretKey", "secretToken", "cc-number", "card number", "cardnumber", "cardnum", "ccnum", "ccnumber", "cc num", "creditcardnumber", "credit card number", "newcreditcardnumber", "new credit card", "creditcardno", "credit card no", "card#", "card #", "cc-csc", "cvc", "cvc2", "cvv2", "ccv2", "security code", "card verification", "name on credit card", "name on card", "nameoncard", "cardholder", "card holder", "name des karteninhabers", "ccname", "card type", "cardtype", "cc type", "cctype", "payment type", "expiration date", "expirationdate", "expdate", "cc-exp", "ccmonth", "ccyear"] };
      }, function(t, e, r) {
        "use strict";
        var n = r(0);
        function o(t2) {
          this.queue = [], this.options = n.merge(t2);
          var e2 = this.options.maxTelemetryEvents || 100;
          this.maxQueueSize = Math.max(0, Math.min(e2, 100));
        }
        function i(t2, e2) {
          if (e2)
            return e2;
          return { error: "error", manual: "info" }[t2] || "info";
        }
        o.prototype.configure = function(t2) {
          var e2 = this.options;
          this.options = n.merge(e2, t2);
          var r2 = this.options.maxTelemetryEvents || 100, o2 = Math.max(0, Math.min(r2, 100)), i2 = 0;
          this.queue.length > o2 && (i2 = this.queue.length - o2), this.maxQueueSize = o2, this.queue.splice(0, i2);
        }, o.prototype.copyEvents = function() {
          var t2 = Array.prototype.slice.call(this.queue, 0);
          if (n.isFunction(this.options.filterTelemetry))
            try {
              for (var e2 = t2.length; e2--; )
                this.options.filterTelemetry(t2[e2]) && t2.splice(e2, 1);
            } catch (t3) {
              this.options.filterTelemetry = null;
            }
          return t2;
        }, o.prototype.capture = function(t2, e2, r2, o2, s) {
          var a = { level: i(t2, r2), type: t2, timestamp_ms: s || n.now(), body: e2, source: "client" };
          o2 && (a.uuid = o2);
          try {
            if (n.isFunction(this.options.filterTelemetry) && this.options.filterTelemetry(a))
              return false;
          } catch (t3) {
            this.options.filterTelemetry = null;
          }
          return this.push(a), a;
        }, o.prototype.captureEvent = function(t2, e2, r2, n2) {
          return this.capture(t2, e2, r2, n2);
        }, o.prototype.captureError = function(t2, e2, r2, n2) {
          var o2 = { message: t2.message || String(t2) };
          return t2.stack && (o2.stack = t2.stack), this.capture("error", o2, e2, r2, n2);
        }, o.prototype.captureLog = function(t2, e2, r2, n2) {
          return this.capture("log", { message: t2 }, e2, r2, n2);
        }, o.prototype.captureNetwork = function(t2, e2, r2, n2) {
          e2 = e2 || "xhr", t2.subtype = t2.subtype || e2, n2 && (t2.request = n2);
          var o2 = this.levelFromStatus(t2.status_code);
          return this.capture("network", t2, o2, r2);
        }, o.prototype.levelFromStatus = function(t2) {
          return t2 >= 200 && t2 < 400 ? "info" : 0 === t2 || t2 >= 400 ? "error" : "info";
        }, o.prototype.captureDom = function(t2, e2, r2, n2, o2) {
          var i2 = { subtype: t2, element: e2 };
          return void 0 !== r2 && (i2.value = r2), void 0 !== n2 && (i2.checked = n2), this.capture("dom", i2, "info", o2);
        }, o.prototype.captureNavigation = function(t2, e2, r2) {
          return this.capture("navigation", { from: t2, to: e2 }, "info", r2);
        }, o.prototype.captureDomContentLoaded = function(t2) {
          return this.capture("navigation", { subtype: "DOMContentLoaded" }, "info", void 0, t2 && t2.getTime());
        }, o.prototype.captureLoad = function(t2) {
          return this.capture("navigation", { subtype: "load" }, "info", void 0, t2 && t2.getTime());
        }, o.prototype.captureConnectivityChange = function(t2, e2) {
          return this.captureNetwork({ change: t2 }, "connectivity", e2);
        }, o.prototype._captureRollbarItem = function(t2) {
          if (this.options.includeItemsInTelemetry)
            return t2.err ? this.captureError(t2.err, t2.level, t2.uuid, t2.timestamp) : t2.message ? this.captureLog(t2.message, t2.level, t2.uuid, t2.timestamp) : t2.custom ? this.capture("log", t2.custom, t2.level, t2.uuid, t2.timestamp) : void 0;
        }, o.prototype.push = function(t2) {
          this.queue.push(t2), this.queue.length > this.maxQueueSize && this.queue.shift();
        }, t.exports = o;
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(33), i = r(4), s = r(2), a = r(34), u = { network: true, networkResponseHeaders: false, networkResponseBody: false, networkRequestHeaders: false, networkRequestBody: false, networkErrorOnHttp5xx: false, networkErrorOnHttp4xx: false, networkErrorOnHttp0: false, log: true, dom: true, navigation: true, connectivity: true, contentSecurityPolicy: true, errorOnContentSecurityPolicy: false };
        function c(t2, e2, r2, n2, o2) {
          var i2 = t2[e2];
          t2[e2] = r2(i2), n2 && n2[o2].push([t2, e2, i2]);
        }
        function l(t2, e2) {
          for (var r2; t2[e2].length; )
            (r2 = t2[e2].shift())[0][r2[1]] = r2[2];
        }
        function p(t2, e2, r2, o2, i2) {
          this.options = t2;
          var s2 = t2.autoInstrument;
          false === t2.enabled || false === s2 ? this.autoInstrument = {} : (n.isType(s2, "object") || (s2 = u), this.autoInstrument = n.merge(u, s2)), this.scrubTelemetryInputs = !!t2.scrubTelemetryInputs, this.telemetryScrubber = t2.telemetryScrubber, this.defaultValueScrubber = function(t3) {
            for (var e3 = [], r3 = 0; r3 < t3.length; ++r3)
              e3.push(new RegExp(t3[r3], "i"));
            return function(t4) {
              var r4 = function(t5) {
                if (!t5 || !t5.attributes)
                  return null;
                for (var e4 = t5.attributes, r5 = 0; r5 < e4.length; ++r5)
                  if ("name" === e4[r5].key)
                    return e4[r5].value;
                return null;
              }(t4);
              if (!r4)
                return false;
              for (var n2 = 0; n2 < e3.length; ++n2)
                if (e3[n2].test(r4))
                  return true;
              return false;
            };
          }(t2.scrubFields), this.telemeter = e2, this.rollbar = r2, this.diagnostic = r2.client.notifier.diagnostic, this._window = o2 || {}, this._document = i2 || {}, this.replacements = { network: [], log: [], navigation: [], connectivity: [] }, this.eventRemovers = { dom: [], connectivity: [], contentsecuritypolicy: [] }, this._location = this._window.location, this._lastHref = this._location && this._location.href;
        }
        p.prototype.configure = function(t2) {
          this.options = n.merge(this.options, t2);
          var e2 = t2.autoInstrument, r2 = n.merge(this.autoInstrument);
          false === t2.enabled || false === e2 ? this.autoInstrument = {} : (n.isType(e2, "object") || (e2 = u), this.autoInstrument = n.merge(u, e2)), this.instrument(r2), void 0 !== t2.scrubTelemetryInputs && (this.scrubTelemetryInputs = !!t2.scrubTelemetryInputs), void 0 !== t2.telemetryScrubber && (this.telemetryScrubber = t2.telemetryScrubber);
        }, p.prototype.instrument = function(t2) {
          !this.autoInstrument.network || t2 && t2.network ? !this.autoInstrument.network && t2 && t2.network && this.deinstrumentNetwork() : this.instrumentNetwork(), !this.autoInstrument.log || t2 && t2.log ? !this.autoInstrument.log && t2 && t2.log && this.deinstrumentConsole() : this.instrumentConsole(), !this.autoInstrument.dom || t2 && t2.dom ? !this.autoInstrument.dom && t2 && t2.dom && this.deinstrumentDom() : this.instrumentDom(), !this.autoInstrument.navigation || t2 && t2.navigation ? !this.autoInstrument.navigation && t2 && t2.navigation && this.deinstrumentNavigation() : this.instrumentNavigation(), !this.autoInstrument.connectivity || t2 && t2.connectivity ? !this.autoInstrument.connectivity && t2 && t2.connectivity && this.deinstrumentConnectivity() : this.instrumentConnectivity(), !this.autoInstrument.contentSecurityPolicy || t2 && t2.contentSecurityPolicy ? !this.autoInstrument.contentSecurityPolicy && t2 && t2.contentSecurityPolicy && this.deinstrumentContentSecurityPolicy() : this.instrumentContentSecurityPolicy();
        }, p.prototype.deinstrumentNetwork = function() {
          l(this.replacements, "network");
        }, p.prototype.instrumentNetwork = function() {
          var t2 = this;
          function e2(e3, r3) {
            e3 in r3 && n.isFunction(r3[e3]) && c(r3, e3, function(e4) {
              return t2.rollbar.wrap(e4);
            });
          }
          if ("XMLHttpRequest" in this._window) {
            var r2 = this._window.XMLHttpRequest.prototype;
            c(r2, "open", function(t3) {
              return function(e3, r3) {
                return n.isType(r3, "string") && (this.__rollbar_xhr ? (this.__rollbar_xhr.method = e3, this.__rollbar_xhr.url = r3, this.__rollbar_xhr.status_code = null, this.__rollbar_xhr.start_time_ms = n.now(), this.__rollbar_xhr.end_time_ms = null) : this.__rollbar_xhr = { method: e3, url: r3, status_code: null, start_time_ms: n.now(), end_time_ms: null }), t3.apply(this, arguments);
              };
            }, this.replacements, "network"), c(r2, "setRequestHeader", function(e3) {
              return function(r3, o2) {
                return this.__rollbar_xhr || (this.__rollbar_xhr = {}), n.isType(r3, "string") && n.isType(o2, "string") && (t2.autoInstrument.networkRequestHeaders && (this.__rollbar_xhr.request_headers || (this.__rollbar_xhr.request_headers = {}), this.__rollbar_xhr.request_headers[r3] = o2), "content-type" === r3.toLowerCase() && (this.__rollbar_xhr.request_content_type = o2)), e3.apply(this, arguments);
              };
            }, this.replacements, "network"), c(r2, "send", function(r3) {
              return function(o2) {
                var i2 = this;
                function s2() {
                  if (i2.__rollbar_xhr && (null === i2.__rollbar_xhr.status_code && (i2.__rollbar_xhr.status_code = 0, t2.autoInstrument.networkRequestBody && (i2.__rollbar_xhr.request = o2), i2.__rollbar_event = t2.captureNetwork(i2.__rollbar_xhr, "xhr", void 0)), i2.readyState < 2 && (i2.__rollbar_xhr.start_time_ms = n.now()), i2.readyState > 3)) {
                    i2.__rollbar_xhr.end_time_ms = n.now();
                    var e3 = null;
                    if (i2.__rollbar_xhr.response_content_type = i2.getResponseHeader("Content-Type"), t2.autoInstrument.networkResponseHeaders) {
                      var r4 = t2.autoInstrument.networkResponseHeaders;
                      e3 = {};
                      try {
                        var s3, a2;
                        if (true === r4) {
                          var u2 = i2.getAllResponseHeaders();
                          if (u2) {
                            var c2, l2, p2 = u2.trim().split(/[\r\n]+/);
                            for (a2 = 0; a2 < p2.length; a2++)
                              s3 = (c2 = p2[a2].split(": ")).shift(), l2 = c2.join(": "), e3[s3] = l2;
                          }
                        } else
                          for (a2 = 0; a2 < r4.length; a2++)
                            e3[s3 = r4[a2]] = i2.getResponseHeader(s3);
                      } catch (t3) {
                      }
                    }
                    var f = null;
                    if (t2.autoInstrument.networkResponseBody)
                      try {
                        f = i2.responseText;
                      } catch (t3) {
                      }
                    var h = null;
                    (f || e3) && (h = {}, f && (t2.isJsonContentType(i2.__rollbar_xhr.response_content_type) ? h.body = t2.scrubJson(f) : h.body = f), e3 && (h.headers = e3)), h && (i2.__rollbar_xhr.response = h);
                    try {
                      var d = i2.status;
                      d = 1223 === d ? 204 : d, i2.__rollbar_xhr.status_code = d, i2.__rollbar_event.level = t2.telemeter.levelFromStatus(d), t2.errorOnHttpStatus(i2.__rollbar_xhr);
                    } catch (t3) {
                    }
                  }
                }
                return e2("onload", i2), e2("onerror", i2), e2("onprogress", i2), "onreadystatechange" in i2 && n.isFunction(i2.onreadystatechange) ? c(i2, "onreadystatechange", function(e3) {
                  return t2.rollbar.wrap(e3, void 0, s2);
                }) : i2.onreadystatechange = s2, i2.__rollbar_xhr && t2.trackHttpErrors() && (i2.__rollbar_xhr.stack = new Error().stack), r3.apply(this, arguments);
              };
            }, this.replacements, "network");
          }
          "fetch" in this._window && c(this._window, "fetch", function(e3) {
            return function(r3, i2) {
              for (var s2 = new Array(arguments.length), a2 = 0, u2 = s2.length; a2 < u2; a2++)
                s2[a2] = arguments[a2];
              var c2, l2 = s2[0], p2 = "GET";
              n.isType(l2, "string") ? c2 = l2 : l2 && (c2 = l2.url, l2.method && (p2 = l2.method)), s2[1] && s2[1].method && (p2 = s2[1].method);
              var f = { method: p2, url: c2, status_code: null, start_time_ms: n.now(), end_time_ms: null };
              if (s2[1] && s2[1].headers) {
                var h = o(s2[1].headers);
                f.request_content_type = h.get("Content-Type"), t2.autoInstrument.networkRequestHeaders && (f.request_headers = t2.fetchHeaders(h, t2.autoInstrument.networkRequestHeaders));
              }
              return t2.autoInstrument.networkRequestBody && (s2[1] && s2[1].body ? f.request = s2[1].body : s2[0] && !n.isType(s2[0], "string") && s2[0].body && (f.request = s2[0].body)), t2.captureNetwork(f, "fetch", void 0), t2.trackHttpErrors() && (f.stack = new Error().stack), e3.apply(this, s2).then(function(e4) {
                f.end_time_ms = n.now(), f.status_code = e4.status, f.response_content_type = e4.headers.get("Content-Type");
                var r4 = null;
                t2.autoInstrument.networkResponseHeaders && (r4 = t2.fetchHeaders(e4.headers, t2.autoInstrument.networkResponseHeaders));
                var o2 = null;
                return t2.autoInstrument.networkResponseBody && "function" == typeof e4.text && (o2 = e4.clone().text()), (r4 || o2) && (f.response = {}, o2 && ("function" == typeof o2.then ? o2.then(function(e5) {
                  e5 && t2.isJsonContentType(f.response_content_type) ? f.response.body = t2.scrubJson(e5) : f.response.body = e5;
                }) : f.response.body = o2), r4 && (f.response.headers = r4)), t2.errorOnHttpStatus(f), e4;
              });
            };
          }, this.replacements, "network");
        }, p.prototype.captureNetwork = function(t2, e2, r2) {
          return t2.request && this.isJsonContentType(t2.request_content_type) && (t2.request = this.scrubJson(t2.request)), this.telemeter.captureNetwork(t2, e2, r2);
        }, p.prototype.isJsonContentType = function(t2) {
          return !!(t2 && n.isType(t2, "string") && t2.toLowerCase().includes("json"));
        }, p.prototype.scrubJson = function(t2) {
          return JSON.stringify(i(JSON.parse(t2), this.options.scrubFields));
        }, p.prototype.fetchHeaders = function(t2, e2) {
          var r2 = {};
          try {
            var n2;
            if (true === e2) {
              if ("function" == typeof t2.entries)
                for (var o2 = t2.entries(), i2 = o2.next(); !i2.done; )
                  r2[i2.value[0]] = i2.value[1], i2 = o2.next();
            } else
              for (n2 = 0; n2 < e2.length; n2++) {
                var s2 = e2[n2];
                r2[s2] = t2.get(s2);
              }
          } catch (t3) {
          }
          return r2;
        }, p.prototype.trackHttpErrors = function() {
          return this.autoInstrument.networkErrorOnHttp5xx || this.autoInstrument.networkErrorOnHttp4xx || this.autoInstrument.networkErrorOnHttp0;
        }, p.prototype.errorOnHttpStatus = function(t2) {
          var e2 = t2.status_code;
          if (e2 >= 500 && this.autoInstrument.networkErrorOnHttp5xx || e2 >= 400 && this.autoInstrument.networkErrorOnHttp4xx || 0 === e2 && this.autoInstrument.networkErrorOnHttp0) {
            var r2 = new Error("HTTP request failed with Status " + e2);
            r2.stack = t2.stack, this.rollbar.error(r2, { skipFrames: 1 });
          }
        }, p.prototype.deinstrumentConsole = function() {
          if ("console" in this._window && this._window.console.log)
            for (var t2; this.replacements.log.length; )
              t2 = this.replacements.log.shift(), this._window.console[t2[0]] = t2[1];
        }, p.prototype.instrumentConsole = function() {
          if ("console" in this._window && this._window.console.log) {
            var t2 = this, e2 = this._window.console, r2 = ["debug", "info", "warn", "error", "log"];
            try {
              for (var o2 = 0, i2 = r2.length; o2 < i2; o2++)
                s2(r2[o2]);
            } catch (t3) {
              this.diagnostic.instrumentConsole = { error: t3.message };
            }
          }
          function s2(r3) {
            var o3 = e2[r3], i3 = e2, s3 = "warn" === r3 ? "warning" : r3;
            e2[r3] = function() {
              var e3 = Array.prototype.slice.call(arguments), r4 = n.formatArgsAsString(e3);
              t2.telemeter.captureLog(r4, s3), o3 && Function.prototype.apply.call(o3, i3, e3);
            }, t2.replacements.log.push([r3, o3]);
          }
        }, p.prototype.deinstrumentDom = function() {
          ("addEventListener" in this._window || "attachEvent" in this._window) && this.removeListeners("dom");
        }, p.prototype.instrumentDom = function() {
          if ("addEventListener" in this._window || "attachEvent" in this._window) {
            var t2 = this.handleClick.bind(this), e2 = this.handleBlur.bind(this);
            this.addListener("dom", this._window, "click", "onclick", t2, true), this.addListener("dom", this._window, "blur", "onfocusout", e2, true);
          }
        }, p.prototype.handleClick = function(t2) {
          try {
            var e2 = a.getElementFromEvent(t2, this._document), r2 = e2 && e2.tagName, n2 = a.isDescribedElement(e2, "a") || a.isDescribedElement(e2, "button");
            r2 && (n2 || a.isDescribedElement(e2, "input", ["button", "submit"])) ? this.captureDomEvent("click", e2) : a.isDescribedElement(e2, "input", ["checkbox", "radio"]) && this.captureDomEvent("input", e2, e2.value, e2.checked);
          } catch (t3) {
          }
        }, p.prototype.handleBlur = function(t2) {
          try {
            var e2 = a.getElementFromEvent(t2, this._document);
            e2 && e2.tagName && (a.isDescribedElement(e2, "textarea") ? this.captureDomEvent("input", e2, e2.value) : a.isDescribedElement(e2, "select") && e2.options && e2.options.length ? this.handleSelectInputChanged(e2) : a.isDescribedElement(e2, "input") && !a.isDescribedElement(e2, "input", ["button", "submit", "hidden", "checkbox", "radio"]) && this.captureDomEvent("input", e2, e2.value));
          } catch (t3) {
          }
        }, p.prototype.handleSelectInputChanged = function(t2) {
          if (t2.multiple)
            for (var e2 = 0; e2 < t2.options.length; e2++)
              t2.options[e2].selected && this.captureDomEvent("input", t2, t2.options[e2].value);
          else
            t2.selectedIndex >= 0 && t2.options[t2.selectedIndex] && this.captureDomEvent("input", t2, t2.options[t2.selectedIndex].value);
        }, p.prototype.captureDomEvent = function(t2, e2, r2, n2) {
          if (void 0 !== r2)
            if (this.scrubTelemetryInputs || "password" === a.getElementType(e2))
              r2 = "[scrubbed]";
            else {
              var o2 = a.describeElement(e2);
              this.telemetryScrubber ? this.telemetryScrubber(o2) && (r2 = "[scrubbed]") : this.defaultValueScrubber(o2) && (r2 = "[scrubbed]");
            }
          var i2 = a.elementArrayToString(a.treeToArray(e2));
          this.telemeter.captureDom(t2, i2, r2, n2);
        }, p.prototype.deinstrumentNavigation = function() {
          var t2 = this._window.chrome;
          !(t2 && t2.app && t2.app.runtime) && this._window.history && this._window.history.pushState && l(this.replacements, "navigation");
        }, p.prototype.instrumentNavigation = function() {
          var t2 = this._window.chrome;
          if (!(t2 && t2.app && t2.app.runtime) && this._window.history && this._window.history.pushState) {
            var e2 = this;
            c(this._window, "onpopstate", function(t3) {
              return function() {
                var r2 = e2._location.href;
                e2.handleUrlChange(e2._lastHref, r2), t3 && t3.apply(this, arguments);
              };
            }, this.replacements, "navigation"), c(this._window.history, "pushState", function(t3) {
              return function() {
                var r2 = arguments.length > 2 ? arguments[2] : void 0;
                return r2 && e2.handleUrlChange(e2._lastHref, r2 + ""), t3.apply(this, arguments);
              };
            }, this.replacements, "navigation");
          }
        }, p.prototype.handleUrlChange = function(t2, e2) {
          var r2 = s.parse(this._location.href), n2 = s.parse(e2), o2 = s.parse(t2);
          this._lastHref = e2, r2.protocol === n2.protocol && r2.host === n2.host && (e2 = n2.path + (n2.hash || "")), r2.protocol === o2.protocol && r2.host === o2.host && (t2 = o2.path + (o2.hash || "")), this.telemeter.captureNavigation(t2, e2);
        }, p.prototype.deinstrumentConnectivity = function() {
          ("addEventListener" in this._window || "body" in this._document) && (this._window.addEventListener ? this.removeListeners("connectivity") : l(this.replacements, "connectivity"));
        }, p.prototype.instrumentConnectivity = function() {
          if ("addEventListener" in this._window || "body" in this._document)
            if (this._window.addEventListener)
              this.addListener("connectivity", this._window, "online", void 0, (function() {
                this.telemeter.captureConnectivityChange("online");
              }).bind(this), true), this.addListener("connectivity", this._window, "offline", void 0, (function() {
                this.telemeter.captureConnectivityChange("offline");
              }).bind(this), true);
            else {
              var t2 = this;
              c(this._document.body, "ononline", function(e2) {
                return function() {
                  t2.telemeter.captureConnectivityChange("online"), e2 && e2.apply(this, arguments);
                };
              }, this.replacements, "connectivity"), c(this._document.body, "onoffline", function(e2) {
                return function() {
                  t2.telemeter.captureConnectivityChange("offline"), e2 && e2.apply(this, arguments);
                };
              }, this.replacements, "connectivity");
            }
        }, p.prototype.handleCspEvent = function(t2) {
          var e2 = "Security Policy Violation: blockedURI: " + t2.blockedURI + ", violatedDirective: " + t2.violatedDirective + ", effectiveDirective: " + t2.effectiveDirective + ", ";
          t2.sourceFile && (e2 += "location: " + t2.sourceFile + ", line: " + t2.lineNumber + ", col: " + t2.columnNumber + ", "), e2 += "originalPolicy: " + t2.originalPolicy, this.telemeter.captureLog(e2, "error"), this.handleCspError(e2);
        }, p.prototype.handleCspError = function(t2) {
          this.autoInstrument.errorOnContentSecurityPolicy && this.rollbar.error(t2);
        }, p.prototype.deinstrumentContentSecurityPolicy = function() {
          "addEventListener" in this._document && this.removeListeners("contentsecuritypolicy");
        }, p.prototype.instrumentContentSecurityPolicy = function() {
          if ("addEventListener" in this._document) {
            var t2 = this.handleCspEvent.bind(this);
            this.addListener("contentsecuritypolicy", this._document, "securitypolicyviolation", null, t2, false);
          }
        }, p.prototype.addListener = function(t2, e2, r2, n2, o2, i2) {
          e2.addEventListener ? (e2.addEventListener(r2, o2, i2), this.eventRemovers[t2].push(function() {
            e2.removeEventListener(r2, o2, i2);
          })) : n2 && (e2.attachEvent(n2, o2), this.eventRemovers[t2].push(function() {
            e2.detachEvent(n2, o2);
          }));
        }, p.prototype.removeListeners = function(t2) {
          for (; this.eventRemovers[t2].length; )
            this.eventRemovers[t2].shift()();
        }, t.exports = p;
      }, function(t, e, r) {
        "use strict";
        function n(t2) {
          return "string" != typeof t2 && (t2 = String(t2)), t2.toLowerCase();
        }
        function o(t2) {
          this.map = {}, t2 instanceof o ? t2.forEach(function(t3, e2) {
            this.append(e2, t3);
          }, this) : Array.isArray(t2) ? t2.forEach(function(t3) {
            this.append(t3[0], t3[1]);
          }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function(e2) {
            this.append(e2, t2[e2]);
          }, this);
        }
        o.prototype.append = function(t2, e2) {
          t2 = n(t2), e2 = function(t3) {
            return "string" != typeof t3 && (t3 = String(t3)), t3;
          }(e2);
          var r2 = this.map[t2];
          this.map[t2] = r2 ? r2 + ", " + e2 : e2;
        }, o.prototype.get = function(t2) {
          return t2 = n(t2), this.has(t2) ? this.map[t2] : null;
        }, o.prototype.has = function(t2) {
          return this.map.hasOwnProperty(n(t2));
        }, o.prototype.forEach = function(t2, e2) {
          for (var r2 in this.map)
            this.map.hasOwnProperty(r2) && t2.call(e2, this.map[r2], r2, this);
        }, o.prototype.entries = function() {
          var t2 = [];
          return this.forEach(function(e2, r2) {
            t2.push([r2, e2]);
          }), /* @__PURE__ */ function(t3) {
            return { next: function() {
              var e2 = t3.shift();
              return { done: void 0 === e2, value: e2 };
            } };
          }(t2);
        }, t.exports = function(t2) {
          return "undefined" == typeof Headers ? new o(t2) : new Headers(t2);
        };
      }, function(t, e, r) {
        "use strict";
        function n(t2) {
          return (t2.getAttribute("type") || "").toLowerCase();
        }
        function o(t2) {
          if (!t2 || !t2.tagName)
            return "";
          var e2 = [t2.tagName];
          t2.id && e2.push("#" + t2.id), t2.classes && e2.push("." + t2.classes.join("."));
          for (var r2 = 0; r2 < t2.attributes.length; r2++)
            e2.push("[" + t2.attributes[r2].key + '="' + t2.attributes[r2].value + '"]');
          return e2.join("");
        }
        function i(t2) {
          if (!t2 || !t2.tagName)
            return null;
          var e2, r2, n2, o2, i2 = {};
          i2.tagName = t2.tagName.toLowerCase(), t2.id && (i2.id = t2.id), (e2 = t2.className) && "string" == typeof e2 && (i2.classes = e2.split(/\s+/));
          var s = ["type", "name", "title", "alt"];
          for (i2.attributes = [], o2 = 0; o2 < s.length; o2++)
            r2 = s[o2], (n2 = t2.getAttribute(r2)) && i2.attributes.push({ key: r2, value: n2 });
          return i2;
        }
        t.exports = { describeElement: i, descriptionToString: o, elementArrayToString: function(t2) {
          for (var e2, r2, n2 = " > ".length, i2 = [], s = 0, a = t2.length - 1; a >= 0; a--) {
            if (e2 = o(t2[a]), r2 = s + i2.length * n2 + e2.length, a < t2.length - 1 && r2 >= 83) {
              i2.unshift("...");
              break;
            }
            i2.unshift(e2), s += e2.length;
          }
          return i2.join(" > ");
        }, treeToArray: function(t2) {
          for (var e2, r2 = [], n2 = 0; t2 && n2 < 5 && "html" !== (e2 = i(t2)).tagName; n2++)
            r2.unshift(e2), t2 = t2.parentNode;
          return r2;
        }, getElementFromEvent: function(t2, e2) {
          return t2.target ? t2.target : e2 && e2.elementFromPoint ? e2.elementFromPoint(t2.clientX, t2.clientY) : void 0;
        }, isDescribedElement: function(t2, e2, r2) {
          if (t2.tagName.toLowerCase() !== e2.toLowerCase())
            return false;
          if (!r2)
            return true;
          t2 = n(t2);
          for (var o2 = 0; o2 < r2.length; o2++)
            if (r2[o2] === t2)
              return true;
          return false;
        }, getElementType: n };
      }, function(t, e, r) {
        "use strict";
        var n = r(36);
        t.exports = n;
      }, function(t, e) {
        t.exports = function(t2) {
          var e2, r, n, o, i, s, a, u, c, l, p, f, h, d = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
          function m(t3) {
            return t3 < 10 ? "0" + t3 : t3;
          }
          function g() {
            return this.valueOf();
          }
          function v(t3) {
            return d.lastIndex = 0, d.test(t3) ? '"' + t3.replace(d, function(t4) {
              var e3 = n[t4];
              return "string" == typeof e3 ? e3 : "\\u" + ("0000" + t4.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + t3 + '"';
          }
          "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null;
          }, Boolean.prototype.toJSON = g, Number.prototype.toJSON = g, String.prototype.toJSON = g), "function" != typeof t2.stringify && (n = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, t2.stringify = function(t3, n2, i2) {
            var s2;
            if (e2 = "", r = "", "number" == typeof i2)
              for (s2 = 0; s2 < i2; s2 += 1)
                r += " ";
            else
              "string" == typeof i2 && (r = i2);
            if (o = n2, n2 && "function" != typeof n2 && ("object" != typeof n2 || "number" != typeof n2.length))
              throw new Error("JSON.stringify");
            return function t4(n3, i3) {
              var s3, a2, u2, c2, l2, p2 = e2, f2 = i3[n3];
              switch (f2 && "object" == typeof f2 && "function" == typeof f2.toJSON && (f2 = f2.toJSON(n3)), "function" == typeof o && (f2 = o.call(i3, n3, f2)), typeof f2) {
                case "string":
                  return v(f2);
                case "number":
                  return isFinite(f2) ? String(f2) : "null";
                case "boolean":
                case "null":
                  return String(f2);
                case "object":
                  if (!f2)
                    return "null";
                  if (e2 += r, l2 = [], "[object Array]" === Object.prototype.toString.apply(f2)) {
                    for (c2 = f2.length, s3 = 0; s3 < c2; s3 += 1)
                      l2[s3] = t4(s3, f2) || "null";
                    return u2 = 0 === l2.length ? "[]" : e2 ? "[\n" + e2 + l2.join(",\n" + e2) + "\n" + p2 + "]" : "[" + l2.join(",") + "]", e2 = p2, u2;
                  }
                  if (o && "object" == typeof o)
                    for (c2 = o.length, s3 = 0; s3 < c2; s3 += 1)
                      "string" == typeof o[s3] && (u2 = t4(a2 = o[s3], f2)) && l2.push(v(a2) + (e2 ? ": " : ":") + u2);
                  else
                    for (a2 in f2)
                      Object.prototype.hasOwnProperty.call(f2, a2) && (u2 = t4(a2, f2)) && l2.push(v(a2) + (e2 ? ": " : ":") + u2);
                  return u2 = 0 === l2.length ? "{}" : e2 ? "{\n" + e2 + l2.join(",\n" + e2) + "\n" + p2 + "}" : "{" + l2.join(",") + "}", e2 = p2, u2;
              }
            }("", { "": t3 });
          }), "function" != typeof t2.parse && (t2.parse = (l = { "\\": "\\", '"': '"', "/": "/", t: "	", n: "\n", r: "\r", f: "\f", b: "\b" }, p = { go: function() {
            i = "ok";
          }, firstokey: function() {
            u = c, i = "colon";
          }, okey: function() {
            u = c, i = "colon";
          }, ovalue: function() {
            i = "ocomma";
          }, firstavalue: function() {
            i = "acomma";
          }, avalue: function() {
            i = "acomma";
          } }, f = { go: function() {
            i = "ok";
          }, ovalue: function() {
            i = "ocomma";
          }, firstavalue: function() {
            i = "acomma";
          }, avalue: function() {
            i = "acomma";
          } }, h = { "{": { go: function() {
            s.push({ state: "ok" }), a = {}, i = "firstokey";
          }, ovalue: function() {
            s.push({ container: a, state: "ocomma", key: u }), a = {}, i = "firstokey";
          }, firstavalue: function() {
            s.push({ container: a, state: "acomma" }), a = {}, i = "firstokey";
          }, avalue: function() {
            s.push({ container: a, state: "acomma" }), a = {}, i = "firstokey";
          } }, "}": { firstokey: function() {
            var t3 = s.pop();
            c = a, a = t3.container, u = t3.key, i = t3.state;
          }, ocomma: function() {
            var t3 = s.pop();
            a[u] = c, c = a, a = t3.container, u = t3.key, i = t3.state;
          } }, "[": { go: function() {
            s.push({ state: "ok" }), a = [], i = "firstavalue";
          }, ovalue: function() {
            s.push({ container: a, state: "ocomma", key: u }), a = [], i = "firstavalue";
          }, firstavalue: function() {
            s.push({ container: a, state: "acomma" }), a = [], i = "firstavalue";
          }, avalue: function() {
            s.push({ container: a, state: "acomma" }), a = [], i = "firstavalue";
          } }, "]": { firstavalue: function() {
            var t3 = s.pop();
            c = a, a = t3.container, u = t3.key, i = t3.state;
          }, acomma: function() {
            var t3 = s.pop();
            a.push(c), c = a, a = t3.container, u = t3.key, i = t3.state;
          } }, ":": { colon: function() {
            if (Object.hasOwnProperty.call(a, u))
              throw new SyntaxError("Duplicate key '" + u + '"');
            i = "ovalue";
          } }, ",": { ocomma: function() {
            a[u] = c, i = "okey";
          }, acomma: function() {
            a.push(c), i = "avalue";
          } }, true: { go: function() {
            c = true, i = "ok";
          }, ovalue: function() {
            c = true, i = "ocomma";
          }, firstavalue: function() {
            c = true, i = "acomma";
          }, avalue: function() {
            c = true, i = "acomma";
          } }, false: { go: function() {
            c = false, i = "ok";
          }, ovalue: function() {
            c = false, i = "ocomma";
          }, firstavalue: function() {
            c = false, i = "acomma";
          }, avalue: function() {
            c = false, i = "acomma";
          } }, null: { go: function() {
            c = null, i = "ok";
          }, ovalue: function() {
            c = null, i = "ocomma";
          }, firstavalue: function() {
            c = null, i = "acomma";
          }, avalue: function() {
            c = null, i = "acomma";
          } } }, function(t3, e3) {
            var r2, n2, o2 = /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
            i = "go", s = [];
            try {
              for (; r2 = o2.exec(t3); )
                r2[1] ? h[r2[1]][i]() : r2[2] ? (c = +r2[2], f[i]()) : (n2 = r2[3], c = n2.replace(/\\(?:u(.{4})|([^u]))/g, function(t4, e4, r3) {
                  return e4 ? String.fromCharCode(parseInt(e4, 16)) : l[r3];
                }), p[i]()), t3 = t3.slice(r2[0].length);
            } catch (t4) {
              i = t4;
            }
            if ("ok" !== i || /[^\u0020\t\n\r]/.test(t3))
              throw i instanceof SyntaxError ? i : new SyntaxError("JSON");
            return "function" == typeof e3 ? function t4(r3, n3) {
              var o3, i2, s2 = r3[n3];
              if (s2 && "object" == typeof s2)
                for (o3 in c)
                  Object.prototype.hasOwnProperty.call(s2, o3) && (void 0 !== (i2 = t4(s2, o3)) ? s2[o3] = i2 : delete s2[o3]);
              return e3.call(r3, n3, s2);
            }({ "": c }, "") : c;
          }));
        };
      }, function(t, e, r) {
        "use strict";
        function n(t2, e2, r2) {
          if (e2.hasOwnProperty && e2.hasOwnProperty("addEventListener")) {
            for (var n2 = e2.addEventListener; n2._rollbarOldAdd && n2.belongsToShim; )
              n2 = n2._rollbarOldAdd;
            var o = function(e3, r3, o2) {
              n2.call(this, e3, t2.wrap(r3), o2);
            };
            o._rollbarOldAdd = n2, o.belongsToShim = r2, e2.addEventListener = o;
            for (var i = e2.removeEventListener; i._rollbarOldRemove && i.belongsToShim; )
              i = i._rollbarOldRemove;
            var s = function(t3, e3, r3) {
              i.call(this, t3, e3 && e3._rollbar_wrapped || e3, r3);
            };
            s._rollbarOldRemove = i, s.belongsToShim = r2, e2.removeEventListener = s;
          }
        }
        t.exports = function(t2, e2, r2) {
          if (t2) {
            var o, i, s = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
            for (o = 0; o < s.length; ++o)
              t2[i = s[o]] && t2[i].prototype && n(e2, t2[i].prototype, r2);
          }
        };
      }, function(t, e, r) {
        "use strict";
        var n = r(0), o = r(5);
        function i(t2, e2) {
          return [t2, n.stringify(t2, e2)];
        }
        function s(t2, e2) {
          var r2 = t2.length;
          return r2 > 2 * e2 ? t2.slice(0, e2).concat(t2.slice(r2 - e2)) : t2;
        }
        function a(t2, e2, r2) {
          r2 = void 0 === r2 ? 30 : r2;
          var o2, i2 = t2.data.body;
          if (i2.trace_chain)
            for (var a2 = i2.trace_chain, u2 = 0; u2 < a2.length; u2++)
              o2 = s(o2 = a2[u2].frames, r2), a2[u2].frames = o2;
          else
            i2.trace && (o2 = s(o2 = i2.trace.frames, r2), i2.trace.frames = o2);
          return [t2, n.stringify(t2, e2)];
        }
        function u(t2, e2) {
          return e2 && e2.length > t2 ? e2.slice(0, t2 - 3).concat("...") : e2;
        }
        function c(t2, e2, r2) {
          return [e2 = o(e2, function e3(r3, i2, s2) {
            switch (n.typeName(i2)) {
              case "string":
                return u(t2, i2);
              case "object":
              case "array":
                return o(i2, e3, s2);
              default:
                return i2;
            }
          }), n.stringify(e2, r2)];
        }
        function l(t2) {
          return t2.exception && (delete t2.exception.description, t2.exception.message = u(255, t2.exception.message)), t2.frames = s(t2.frames, 1), t2;
        }
        function p(t2, e2) {
          var r2 = t2.data.body;
          if (r2.trace_chain)
            for (var o2 = r2.trace_chain, i2 = 0; i2 < o2.length; i2++)
              o2[i2] = l(o2[i2]);
          else
            r2.trace && (r2.trace = l(r2.trace));
          return [t2, n.stringify(t2, e2)];
        }
        function f(t2, e2) {
          return n.maxByteSize(t2) > e2;
        }
        t.exports = { truncate: function(t2, e2, r2) {
          r2 = void 0 === r2 ? 524288 : r2;
          for (var n2, o2, s2, u2 = [i, a, c.bind(null, 1024), c.bind(null, 512), c.bind(null, 256), p]; n2 = u2.shift(); )
            if (t2 = (o2 = n2(t2, e2))[0], (s2 = o2[1]).error || !f(s2.value, r2))
              return s2;
          return s2;
        }, raw: i, truncateFrames: a, truncateStrings: c, maybeTruncateValue: u };
      }]);
    });
  }
});
export default require_rollbar_umd_min();
//# sourceMappingURL=rollbar.js.map
