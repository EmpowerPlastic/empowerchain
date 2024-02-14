import {
  Context
} from "./chunk-KM53KPXY.js";
import {
  isBrowser
} from "./chunk-AC7VDIFQ.js";
import {
  PriorityQueue
} from "./chunk-TU7PAYTW.js";
import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __spreadArray
} from "./chunk-QZ2OSRME.js";

// node_modules/@segment/analytics-next/dist/pkg/core/connection/index.js
function isOnline() {
  if (isBrowser()) {
    return window.navigator.onLine;
  }
  return true;
}
function isOffline() {
  return !isOnline();
}

// node_modules/@segment/analytics-next/dist/pkg/lib/priority-queue/persisted.js
var loc = {
  getItem: function() {
  },
  setItem: function() {
  },
  removeItem: function() {
  }
};
try {
  loc = isBrowser() && window.localStorage ? window.localStorage : loc;
} catch (err) {
  console.warn("Unable to access localStorage", err);
}
function persisted(key) {
  var items = loc.getItem(key);
  return (items ? JSON.parse(items) : []).map(function(p) {
    return new Context(p.event, p.id);
  });
}
function persistItems(key, items) {
  var existing = persisted(key);
  var all = __spreadArray(__spreadArray([], items, true), existing, true);
  var merged = all.reduce(function(acc, item) {
    var _a;
    return __assign(__assign({}, acc), (_a = {}, _a[item.id] = item, _a));
  }, {});
  loc.setItem(key, JSON.stringify(Object.values(merged)));
}
function seen(key) {
  var stored = loc.getItem(key);
  return stored ? JSON.parse(stored) : {};
}
function persistSeen(key, memory) {
  var stored = seen(key);
  loc.setItem(key, JSON.stringify(__assign(__assign({}, stored), memory)));
}
function remove(key) {
  loc.removeItem(key);
}
var now = function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function mutex(key, onUnlock, attempt) {
  if (attempt === void 0) {
    attempt = 0;
  }
  var lockTimeout = 50;
  var lockKey = "persisted-queue:v1:".concat(key, ":lock");
  var expired = function(lock2) {
    return (/* @__PURE__ */ new Date()).getTime() > lock2;
  };
  var rawLock = loc.getItem(lockKey);
  var lock = rawLock ? JSON.parse(rawLock) : null;
  var allowed = lock === null || expired(lock);
  if (allowed) {
    loc.setItem(lockKey, JSON.stringify(now() + lockTimeout));
    onUnlock();
    loc.removeItem(lockKey);
    return;
  }
  if (!allowed && attempt < 3) {
    setTimeout(function() {
      mutex(key, onUnlock, attempt + 1);
    }, lockTimeout);
  } else {
    console.error("Unable to retrieve lock");
  }
}
var PersistedPriorityQueue = (
  /** @class */
  function(_super) {
    __extends(PersistedPriorityQueue2, _super);
    function PersistedPriorityQueue2(maxAttempts, key) {
      var _this = _super.call(this, maxAttempts, []) || this;
      var itemsKey = "persisted-queue:v1:".concat(key, ":items");
      var seenKey = "persisted-queue:v1:".concat(key, ":seen");
      var saved = [];
      var lastSeen = {};
      mutex(key, function() {
        try {
          saved = persisted(itemsKey);
          lastSeen = seen(seenKey);
          remove(itemsKey);
          remove(seenKey);
          _this.queue = __spreadArray(__spreadArray([], saved, true), _this.queue, true);
          _this.seen = __assign(__assign({}, lastSeen), _this.seen);
        } catch (err) {
          console.error(err);
        }
      });
      window.addEventListener("pagehide", function() {
        if (_this.todo > 0) {
          var items_1 = __spreadArray(__spreadArray([], _this.queue, true), _this.future, true);
          try {
            mutex(key, function() {
              persistItems(itemsKey, items_1);
              persistSeen(seenKey, _this.seen);
            });
          } catch (err) {
            console.error(err);
          }
        }
      });
      return _this;
    }
    return PersistedPriorityQueue2;
  }(PriorityQueue)
);

// node_modules/@segment/analytics-next/dist/pkg/lib/merged-options.js
function mergedOptions(settings, options) {
  var _a;
  var optionOverrides = Object.entries((_a = options.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function(overrides, _a2) {
    var _b, _c;
    var integration = _a2[0], options2 = _a2[1];
    if (typeof options2 === "object") {
      return __assign(__assign({}, overrides), (_b = {}, _b[integration] = options2, _b));
    }
    return __assign(__assign({}, overrides), (_c = {}, _c[integration] = {}, _c));
  }, {});
  return Object.entries(settings.integrations).reduce(function(integrationSettings, _a2) {
    var _b;
    var integration = _a2[0], settings2 = _a2[1];
    return __assign(__assign({}, integrationSettings), (_b = {}, _b[integration] = __assign(__assign({}, settings2), optionOverrides[integration]), _b));
  }, {});
}

// node_modules/@segment/analytics-next/dist/pkg/core/stats/metric-helpers.js
function recordIntegrationMetric(ctx, _a) {
  var methodName = _a.methodName, integrationName = _a.integrationName, type = _a.type, _b = _a.didError, didError = _b === void 0 ? false : _b;
  ctx.stats.increment("analytics_js.integration.invoke".concat(didError ? ".error" : ""), 1, [
    "method:".concat(methodName),
    "integration_name:".concat(integrationName),
    "type:".concat(type)
  ]);
}

// node_modules/@segment/analytics-next/dist/pkg/lib/p-while.js
var pWhile = function(condition, action) {
  return __awaiter(void 0, void 0, void 0, function() {
    var loop;
    return __generator(this, function(_a) {
      loop = function(actionResult) {
        return __awaiter(void 0, void 0, void 0, function() {
          var _a2;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!condition(actionResult))
                  return [3, 2];
                _a2 = loop;
                return [4, action()];
              case 1:
                return [2, _a2.apply(void 0, [_b.sent()])];
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      return [2, loop(void 0)];
    });
  });
};

export {
  isOnline,
  isOffline,
  PersistedPriorityQueue,
  mergedOptions,
  recordIntegrationMetric,
  pWhile
};
//# sourceMappingURL=chunk-YDCWOTRP.js.map
