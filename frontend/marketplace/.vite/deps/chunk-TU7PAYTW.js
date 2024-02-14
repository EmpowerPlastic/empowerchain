import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray
} from "./chunk-QZ2OSRME.js";

// node_modules/@segment/analytics-core/dist/esm/validation/helpers.js
function isString(obj) {
  return typeof obj === "string";
}
function isNumber(obj) {
  return typeof obj === "number";
}
function isFunction(obj) {
  return typeof obj === "function";
}
function exists(val) {
  return val !== void 0 && val !== null;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === "object";
}

// node_modules/@segment/analytics-core/dist/esm/callback/index.js
function pTimeout(promise, timeout) {
  return new Promise(function(resolve, reject) {
    var timeoutId = setTimeout(function() {
      reject(Error("Promise timed out"));
    }, timeout);
    promise.then(function(val) {
      clearTimeout(timeoutId);
      return resolve(val);
    }).catch(reject);
  });
}
function sleep(timeoutInMs) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, timeoutInMs);
  });
}
function invokeCallback(ctx, callback, delay) {
  var cb = function() {
    try {
      return Promise.resolve(callback(ctx));
    } catch (err) {
      return Promise.reject(err);
    }
  };
  return sleep(delay).then(function() {
    return pTimeout(cb(), 1e3);
  }).catch(function(err) {
    ctx === null || ctx === void 0 ? void 0 : ctx.log("warn", "Callback Error", { error: err });
    ctx === null || ctx === void 0 ? void 0 : ctx.stats.increment("callback_error");
  }).then(function() {
    return ctx;
  });
}

// node_modules/@segment/analytics-generic-utils/dist/esm/create-deferred/create-deferred.js
var createDeferred = function() {
  var resolve;
  var reject;
  var promise = new Promise(function(_resolve, _reject) {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    resolve,
    reject,
    promise
  };
};

// node_modules/@segment/analytics-generic-utils/dist/esm/emitter/emitter.js
var Emitter = (
  /** @class */
  function() {
    function Emitter2(options) {
      var _a;
      this.callbacks = {};
      this.warned = false;
      this.maxListeners = (_a = options === null || options === void 0 ? void 0 : options.maxListeners) !== null && _a !== void 0 ? _a : 10;
    }
    Emitter2.prototype.warnIfPossibleMemoryLeak = function(event) {
      if (this.warned) {
        return;
      }
      if (this.maxListeners && this.callbacks[event].length > this.maxListeners) {
        console.warn("Event Emitter: Possible memory leak detected; ".concat(String(event), " has exceeded ").concat(this.maxListeners, " listeners."));
        this.warned = true;
      }
    };
    Emitter2.prototype.on = function(event, callback) {
      if (!this.callbacks[event]) {
        this.callbacks[event] = [callback];
      } else {
        this.callbacks[event].push(callback);
        this.warnIfPossibleMemoryLeak(event);
      }
      return this;
    };
    Emitter2.prototype.once = function(event, callback) {
      var _this = this;
      var on = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        _this.off(event, on);
        callback.apply(_this, args);
      };
      this.on(event, on);
      return this;
    };
    Emitter2.prototype.off = function(event, callback) {
      var _a;
      var fns = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
      var without = fns.filter(function(fn) {
        return fn !== callback;
      });
      this.callbacks[event] = without;
      return this;
    };
    Emitter2.prototype.emit = function(event) {
      var _this = this;
      var _a;
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var callbacks = (_a = this.callbacks[event]) !== null && _a !== void 0 ? _a : [];
      callbacks.forEach(function(callback) {
        callback.apply(_this, args);
      });
      return this;
    };
    return Emitter2;
  }()
);

// node_modules/@segment/analytics-core/dist/esm/priority-queue/backoff.js
function backoff(params) {
  var random = Math.random() + 1;
  var _a = params.minTimeout, minTimeout = _a === void 0 ? 500 : _a, _b = params.factor, factor = _b === void 0 ? 2 : _b, attempt2 = params.attempt, _c = params.maxTimeout, maxTimeout = _c === void 0 ? Infinity : _c;
  return Math.min(random * minTimeout * Math.pow(factor, attempt2), maxTimeout);
}

// node_modules/@segment/analytics-core/dist/esm/priority-queue/index.js
var ON_REMOVE_FROM_FUTURE = "onRemoveFromFuture";
var PriorityQueue = (
  /** @class */
  function(_super) {
    __extends(PriorityQueue2, _super);
    function PriorityQueue2(maxAttempts, queue, seen) {
      var _this = _super.call(this) || this;
      _this.future = [];
      _this.maxAttempts = maxAttempts;
      _this.queue = queue;
      _this.seen = seen !== null && seen !== void 0 ? seen : {};
      return _this;
    }
    PriorityQueue2.prototype.push = function() {
      var _this = this;
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      var accepted = items.map(function(operation) {
        var attempts = _this.updateAttempts(operation);
        if (attempts > _this.maxAttempts || _this.includes(operation)) {
          return false;
        }
        _this.queue.push(operation);
        return true;
      });
      this.queue = this.queue.sort(function(a, b) {
        return _this.getAttempts(a) - _this.getAttempts(b);
      });
      return accepted;
    };
    PriorityQueue2.prototype.pushWithBackoff = function(item) {
      var _this = this;
      if (this.getAttempts(item) === 0) {
        return this.push(item)[0];
      }
      var attempt2 = this.updateAttempts(item);
      if (attempt2 > this.maxAttempts || this.includes(item)) {
        return false;
      }
      var timeout = backoff({ attempt: attempt2 - 1 });
      setTimeout(function() {
        _this.queue.push(item);
        _this.future = _this.future.filter(function(f) {
          return f.id !== item.id;
        });
        _this.emit(ON_REMOVE_FROM_FUTURE);
      }, timeout);
      this.future.push(item);
      return true;
    };
    PriorityQueue2.prototype.getAttempts = function(item) {
      var _a;
      return (_a = this.seen[item.id]) !== null && _a !== void 0 ? _a : 0;
    };
    PriorityQueue2.prototype.updateAttempts = function(item) {
      this.seen[item.id] = this.getAttempts(item) + 1;
      return this.getAttempts(item);
    };
    PriorityQueue2.prototype.includes = function(item) {
      return this.queue.includes(item) || this.future.includes(item) || Boolean(this.queue.find(function(i) {
        return i.id === item.id;
      })) || Boolean(this.future.find(function(i) {
        return i.id === item.id;
      }));
    };
    PriorityQueue2.prototype.pop = function() {
      return this.queue.shift();
    };
    Object.defineProperty(PriorityQueue2.prototype, "length", {
      get: function() {
        return this.queue.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PriorityQueue2.prototype, "todo", {
      get: function() {
        return this.queue.length + this.future.length;
      },
      enumerable: false,
      configurable: true
    });
    return PriorityQueue2;
  }(Emitter)
);

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// node_modules/dset/dist/index.mjs
function dset(obj, keys, val) {
  keys.split && (keys = keys.split("."));
  var i = 0, l = keys.length, t = obj, x, k;
  while (i < l) {
    k = keys[i++];
    if (k === "__proto__" || k === "constructor" || k === "prototype")
      break;
    t = t[k] = i === l ? val : typeof (x = t[k]) === typeof keys ? x : keys[i] * 0 !== 0 || !!~("" + keys[i]).indexOf(".") ? {} : [];
  }
}

// node_modules/@segment/analytics-core/dist/esm/logger/index.js
var CoreLogger = (
  /** @class */
  function() {
    function CoreLogger2() {
      this._logs = [];
    }
    CoreLogger2.prototype.log = function(level, message, extras) {
      var time = /* @__PURE__ */ new Date();
      this._logs.push({
        level,
        message,
        time,
        extras
      });
    };
    Object.defineProperty(CoreLogger2.prototype, "logs", {
      get: function() {
        return this._logs;
      },
      enumerable: false,
      configurable: true
    });
    CoreLogger2.prototype.flush = function() {
      if (this.logs.length > 1) {
        var formatted = this._logs.reduce(function(logs, log) {
          var _a;
          var _b, _c;
          var line = __assign(__assign({}, log), { json: JSON.stringify(log.extras, null, " "), extras: log.extras });
          delete line["time"];
          var key = (_c = (_b = log.time) === null || _b === void 0 ? void 0 : _b.toISOString()) !== null && _c !== void 0 ? _c : "";
          if (logs[key]) {
            key = "".concat(key, "-").concat(Math.random());
          }
          return __assign(__assign({}, logs), (_a = {}, _a[key] = line, _a));
        }, {});
        if (console.table) {
          console.table(formatted);
        } else {
          console.log(formatted);
        }
      } else {
        this.logs.forEach(function(logEntry) {
          var level = logEntry.level, message = logEntry.message, extras = logEntry.extras;
          if (level === "info" || level === "debug") {
            console.log(message, extras !== null && extras !== void 0 ? extras : "");
          } else {
            console[level](message, extras !== null && extras !== void 0 ? extras : "");
          }
        });
      }
      this._logs = [];
    };
    return CoreLogger2;
  }()
);

// node_modules/@segment/analytics-core/dist/esm/stats/index.js
var compactMetricType = function(type) {
  var enums = {
    gauge: "g",
    counter: "c"
  };
  return enums[type];
};
var CoreStats = (
  /** @class */
  function() {
    function CoreStats2() {
      this.metrics = [];
    }
    CoreStats2.prototype.increment = function(metric, by, tags) {
      if (by === void 0) {
        by = 1;
      }
      this.metrics.push({
        metric,
        value: by,
        tags: tags !== null && tags !== void 0 ? tags : [],
        type: "counter",
        timestamp: Date.now()
      });
    };
    CoreStats2.prototype.gauge = function(metric, value, tags) {
      this.metrics.push({
        metric,
        value,
        tags: tags !== null && tags !== void 0 ? tags : [],
        type: "gauge",
        timestamp: Date.now()
      });
    };
    CoreStats2.prototype.flush = function() {
      var formatted = this.metrics.map(function(m) {
        return __assign(__assign({}, m), { tags: m.tags.join(",") });
      });
      if (console.table) {
        console.table(formatted);
      } else {
        console.log(formatted);
      }
      this.metrics = [];
    };
    CoreStats2.prototype.serialize = function() {
      return this.metrics.map(function(m) {
        return {
          m: m.metric,
          v: m.value,
          t: m.tags,
          k: compactMetricType(m.type),
          e: m.timestamp
        };
      });
    };
    return CoreStats2;
  }()
);
var NullStats = (
  /** @class */
  function(_super) {
    __extends(NullStats2, _super);
    function NullStats2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NullStats2.prototype.gauge = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    NullStats2.prototype.increment = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    NullStats2.prototype.flush = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    NullStats2.prototype.serialize = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
      return [];
    };
    return NullStats2;
  }(CoreStats)
);

// node_modules/@segment/analytics-core/dist/esm/context/index.js
var ContextCancelation = (
  /** @class */
  /* @__PURE__ */ function() {
    function ContextCancelation2(options) {
      var _a, _b, _c;
      this.retry = (_a = options.retry) !== null && _a !== void 0 ? _a : true;
      this.type = (_b = options.type) !== null && _b !== void 0 ? _b : "plugin Error";
      this.reason = (_c = options.reason) !== null && _c !== void 0 ? _c : "";
    }
    return ContextCancelation2;
  }()
);
var CoreContext = (
  /** @class */
  function() {
    function CoreContext2(event, id, stats, logger) {
      if (id === void 0) {
        id = v4();
      }
      if (stats === void 0) {
        stats = new NullStats();
      }
      if (logger === void 0) {
        logger = new CoreLogger();
      }
      this.attempts = 0;
      this.event = event;
      this._id = id;
      this.logger = logger;
      this.stats = stats;
    }
    CoreContext2.system = function() {
    };
    CoreContext2.prototype.isSame = function(other) {
      return other.id === this.id;
    };
    CoreContext2.prototype.cancel = function(error) {
      if (error) {
        throw error;
      }
      throw new ContextCancelation({ reason: "Context Cancel" });
    };
    CoreContext2.prototype.log = function(level, message, extras) {
      this.logger.log(level, message, extras);
    };
    Object.defineProperty(CoreContext2.prototype, "id", {
      get: function() {
        return this._id;
      },
      enumerable: false,
      configurable: true
    });
    CoreContext2.prototype.updateEvent = function(path, val) {
      var _a;
      if (path.split(".")[0] === "integrations") {
        var integrationName = path.split(".")[1];
        if (((_a = this.event.integrations) === null || _a === void 0 ? void 0 : _a[integrationName]) === false) {
          return this.event;
        }
      }
      dset(this.event, path, val);
      return this.event;
    };
    CoreContext2.prototype.failedDelivery = function() {
      return this._failedDelivery;
    };
    CoreContext2.prototype.setFailedDelivery = function(options) {
      this._failedDelivery = options;
    };
    CoreContext2.prototype.logs = function() {
      return this.logger.logs;
    };
    CoreContext2.prototype.flush = function() {
      this.logger.flush();
      this.stats.flush();
    };
    CoreContext2.prototype.toJSON = function() {
      return {
        id: this._id,
        event: this.event,
        logs: this.logger.logs,
        metrics: this.stats.metrics
      };
    };
    return CoreContext2;
  }()
);

// node_modules/@segment/analytics-core/dist/esm/queue/delivery.js
function tryAsync(fn) {
  return __awaiter(this, void 0, void 0, function() {
    var err_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4, fn()];
        case 1:
          return [2, _a.sent()];
        case 2:
          err_1 = _a.sent();
          return [2, Promise.reject(err_1)];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function attempt(ctx, plugin) {
  ctx.log("debug", "plugin", { plugin: plugin.name });
  var start = (/* @__PURE__ */ new Date()).getTime();
  var hook = plugin[ctx.event.type];
  if (hook === void 0) {
    return Promise.resolve(ctx);
  }
  var newCtx = tryAsync(function() {
    return hook.apply(plugin, [ctx]);
  }).then(function(ctx2) {
    var done = (/* @__PURE__ */ new Date()).getTime() - start;
    ctx2.stats.gauge("plugin_time", done, ["plugin:".concat(plugin.name)]);
    return ctx2;
  }).catch(function(err) {
    if (err instanceof ContextCancelation && err.type === "middleware_cancellation") {
      throw err;
    }
    if (err instanceof ContextCancelation) {
      ctx.log("warn", err.type, {
        plugin: plugin.name,
        error: err
      });
      return err;
    }
    ctx.log("error", "plugin Error", {
      plugin: plugin.name,
      error: err
    });
    ctx.stats.increment("plugin_error", 1, ["plugin:".concat(plugin.name)]);
    return err;
  });
  return newCtx;
}
function ensure(ctx, plugin) {
  return attempt(ctx, plugin).then(function(newContext) {
    if (newContext instanceof CoreContext) {
      return newContext;
    }
    ctx.log("debug", "Context canceled");
    ctx.stats.increment("context_canceled");
    ctx.cancel(newContext);
  });
}

// node_modules/@segment/analytics-core/dist/esm/utils/pick.js
var pickBy = function(obj, fn) {
  return Object.keys(obj).filter(function(k) {
    return fn(k, obj[k]);
  }).reduce(function(acc, key) {
    return acc[key] = obj[key], acc;
  }, {});
};

// node_modules/@segment/analytics-core/dist/esm/validation/errors.js
var ValidationError = (
  /** @class */
  function(_super) {
    __extends(ValidationError2, _super);
    function ValidationError2(field, message) {
      var _this = _super.call(this, "".concat(field, " ").concat(message)) || this;
      _this.field = field;
      return _this;
    }
    return ValidationError2;
  }(Error)
);

// node_modules/@segment/analytics-core/dist/esm/validation/assertions.js
var stringError = "is not a string";
var objError = "is not an object";
var nilError = "is nil";
function assertUserIdentity(event) {
  var USER_FIELD_NAME = ".userId/anonymousId/previousId/groupId";
  var getAnyUserId = function(event2) {
    var _a, _b, _c;
    return (_c = (_b = (_a = event2.userId) !== null && _a !== void 0 ? _a : event2.anonymousId) !== null && _b !== void 0 ? _b : event2.groupId) !== null && _c !== void 0 ? _c : event2.previousId;
  };
  var id = getAnyUserId(event);
  if (!exists(id)) {
    throw new ValidationError(USER_FIELD_NAME, nilError);
  } else if (!isString(id)) {
    throw new ValidationError(USER_FIELD_NAME, stringError);
  }
}
function assertEventExists(event) {
  if (!exists(event)) {
    throw new ValidationError("Event", nilError);
  }
  if (typeof event !== "object") {
    throw new ValidationError("Event", objError);
  }
}
function assertEventType(event) {
  if (!isString(event.type)) {
    throw new ValidationError(".type", stringError);
  }
}
function assertTrackEventName(event) {
  if (!isString(event.event)) {
    throw new ValidationError(".event", stringError);
  }
}
function assertTrackEventProperties(event) {
  if (!isPlainObject(event.properties)) {
    throw new ValidationError(".properties", objError);
  }
}
function assertTraits(event) {
  if (!isPlainObject(event.traits)) {
    throw new ValidationError(".traits", objError);
  }
}
function validateEvent(event) {
  assertEventExists(event);
  assertEventType(event);
  if (event.type === "track") {
    assertTrackEventName(event);
    assertTrackEventProperties(event);
  }
  if (["group", "identify"].includes(event.type)) {
    assertTraits(event);
  }
  assertUserIdentity(event);
}

// node_modules/@segment/analytics-core/dist/esm/events/index.js
var EventFactory = (
  /** @class */
  function() {
    function EventFactory2(settings) {
      this.user = settings.user;
      this.createMessageId = settings.createMessageId;
    }
    EventFactory2.prototype.track = function(event, properties, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { event, type: "track", properties: properties !== null && properties !== void 0 ? properties : {}, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }));
    };
    EventFactory2.prototype.page = function(category, page, properties, options, globalIntegrations) {
      var _a;
      var event = {
        type: "page",
        properties: __assign({}, properties),
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (category !== null) {
        event.category = category;
        event.properties = (_a = event.properties) !== null && _a !== void 0 ? _a : {};
        event.properties.category = category;
      }
      if (page !== null) {
        event.name = page;
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory2.prototype.screen = function(category, screen, properties, options, globalIntegrations) {
      var event = {
        type: "screen",
        properties: __assign({}, properties),
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (category !== null) {
        event.category = category;
      }
      if (screen !== null) {
        event.name = screen;
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), event));
    };
    EventFactory2.prototype.identify = function(userId, traits, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { type: "identify", userId, traits: traits !== null && traits !== void 0 ? traits : {}, options: __assign({}, options), integrations: globalIntegrations }));
    };
    EventFactory2.prototype.group = function(groupId, traits, options, globalIntegrations) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), {
        type: "group",
        traits: traits !== null && traits !== void 0 ? traits : {},
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations),
        //
        groupId
      }));
    };
    EventFactory2.prototype.alias = function(to, from, options, globalIntegrations) {
      var base = {
        userId: to,
        type: "alias",
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (from !== null) {
        base.previousId = from;
      }
      if (to === void 0) {
        return this.normalize(__assign(__assign({}, base), this.baseEvent()));
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), base));
    };
    EventFactory2.prototype.baseEvent = function() {
      var base = {
        integrations: {},
        options: {}
      };
      if (!this.user)
        return base;
      var user = this.user;
      if (user.id()) {
        base.userId = user.id();
      }
      if (user.anonymousId()) {
        base.anonymousId = user.anonymousId();
      }
      return base;
    };
    EventFactory2.prototype.context = function(options) {
      var _a;
      var eventOverrideKeys = [
        "userId",
        "anonymousId",
        "timestamp"
      ];
      delete options["integrations"];
      var providedOptionsKeys = Object.keys(options);
      var context = (_a = options.context) !== null && _a !== void 0 ? _a : {};
      var eventOverrides = {};
      providedOptionsKeys.forEach(function(key) {
        if (key === "context") {
          return;
        }
        if (eventOverrideKeys.includes(key)) {
          dset(eventOverrides, key, options[key]);
        } else {
          dset(context, key, options[key]);
        }
      });
      return [context, eventOverrides];
    };
    EventFactory2.prototype.normalize = function(event) {
      var _a, _b;
      var integrationBooleans = Object.keys((_a = event.integrations) !== null && _a !== void 0 ? _a : {}).reduce(function(integrationNames, name) {
        var _a2;
        var _b2;
        return __assign(__assign({}, integrationNames), (_a2 = {}, _a2[name] = Boolean((_b2 = event.integrations) === null || _b2 === void 0 ? void 0 : _b2[name]), _a2));
      }, {});
      event.options = pickBy(event.options || {}, function(_, value) {
        return value !== void 0;
      });
      var allIntegrations = __assign(__assign({}, integrationBooleans), (_b = event.options) === null || _b === void 0 ? void 0 : _b.integrations);
      var _c = event.options ? this.context(event.options) : [], context = _c[0], overrides = _c[1];
      var options = event.options, rest = __rest(event, ["options"]);
      var body = __assign(__assign(__assign({ timestamp: /* @__PURE__ */ new Date() }, rest), { integrations: allIntegrations, context }), overrides);
      var evt = __assign(__assign({}, body), { messageId: this.createMessageId() });
      validateEvent(evt);
      return evt;
    };
    return EventFactory2;
  }()
);

// node_modules/@segment/analytics-core/dist/esm/utils/group-by.js
function groupBy(collection, grouper) {
  var results = {};
  collection.forEach(function(item) {
    var _a;
    var key = void 0;
    if (typeof grouper === "string") {
      var suggestedKey = item[grouper];
      key = typeof suggestedKey !== "string" ? JSON.stringify(suggestedKey) : suggestedKey;
    } else if (grouper instanceof Function) {
      key = grouper(item);
    }
    if (key === void 0) {
      return;
    }
    results[key] = __spreadArray(__spreadArray([], (_a = results[key]) !== null && _a !== void 0 ? _a : [], true), [item], false);
  });
  return results;
}

// node_modules/@segment/analytics-core/dist/esm/utils/is-thenable.js
var isThenable = function(value) {
  return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
};

// node_modules/@segment/analytics-core/dist/esm/task/task-group.js
var createTaskGroup = function() {
  var taskCompletionPromise;
  var resolvePromise;
  var count = 0;
  return {
    done: function() {
      return taskCompletionPromise;
    },
    run: function(op) {
      var returnValue = op();
      if (isThenable(returnValue)) {
        if (++count === 1) {
          taskCompletionPromise = new Promise(function(res) {
            return resolvePromise = res;
          });
        }
        returnValue.finally(function() {
          return --count === 0 && resolvePromise();
        });
      }
      return returnValue;
    }
  };
};

// node_modules/@segment/analytics-core/dist/esm/queue/event-queue.js
var CoreEventQueue = (
  /** @class */
  function(_super) {
    __extends(CoreEventQueue2, _super);
    function CoreEventQueue2(priorityQueue) {
      var _this = _super.call(this) || this;
      _this.criticalTasks = createTaskGroup();
      _this.plugins = [];
      _this.failedInitializations = [];
      _this.flushing = false;
      _this.queue = priorityQueue;
      _this.queue.on(ON_REMOVE_FROM_FUTURE, function() {
        _this.scheduleFlush(0);
      });
      return _this;
    }
    CoreEventQueue2.prototype.register = function(ctx, plugin, instance) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.resolve(plugin.load(ctx, instance)).then(function() {
                _this.plugins.push(plugin);
              }).catch(function(err) {
                if (plugin.type === "destination") {
                  _this.failedInitializations.push(plugin.name);
                  console.warn(plugin.name, err);
                  ctx.log("warn", "Failed to load destination", {
                    plugin: plugin.name,
                    error: err
                  });
                  return;
                }
                throw err;
              })];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CoreEventQueue2.prototype.deregister = function(ctx, plugin, instance) {
      return __awaiter(this, void 0, void 0, function() {
        var e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3, , 4]);
              if (!plugin.unload)
                return [3, 2];
              return [4, Promise.resolve(plugin.unload(ctx, instance))];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              this.plugins = this.plugins.filter(function(p) {
                return p.name !== plugin.name;
              });
              return [3, 4];
            case 3:
              e_1 = _a.sent();
              ctx.log("warn", "Failed to unload destination", {
                plugin: plugin.name,
                error: e_1
              });
              return [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CoreEventQueue2.prototype.dispatch = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var willDeliver;
        return __generator(this, function(_a) {
          ctx.log("debug", "Dispatching");
          ctx.stats.increment("message_dispatched");
          this.queue.push(ctx);
          willDeliver = this.subscribeToDelivery(ctx);
          this.scheduleFlush(0);
          return [2, willDeliver];
        });
      });
    };
    CoreEventQueue2.prototype.subscribeToDelivery = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve) {
            var onDeliver = function(flushed, delivered) {
              if (flushed.isSame(ctx)) {
                _this.off("flush", onDeliver);
                if (delivered) {
                  resolve(flushed);
                } else {
                  resolve(flushed);
                }
              }
            };
            _this.on("flush", onDeliver);
          })];
        });
      });
    };
    CoreEventQueue2.prototype.dispatchSingle = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          ctx.log("debug", "Dispatching");
          ctx.stats.increment("message_dispatched");
          this.queue.updateAttempts(ctx);
          ctx.attempts = 1;
          return [2, this.deliver(ctx).catch(function(err) {
            var accepted = _this.enqueuRetry(err, ctx);
            if (!accepted) {
              ctx.setFailedDelivery({ reason: err });
              return ctx;
            }
            return _this.subscribeToDelivery(ctx);
          })];
        });
      });
    };
    CoreEventQueue2.prototype.isEmpty = function() {
      return this.queue.length === 0;
    };
    CoreEventQueue2.prototype.scheduleFlush = function(timeout) {
      var _this = this;
      if (timeout === void 0) {
        timeout = 500;
      }
      if (this.flushing) {
        return;
      }
      this.flushing = true;
      setTimeout(function() {
        _this.flush().then(function() {
          setTimeout(function() {
            _this.flushing = false;
            if (_this.queue.length) {
              _this.scheduleFlush(0);
            }
          }, 0);
        });
      }, timeout);
    };
    CoreEventQueue2.prototype.deliver = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var start, done, err_1, error;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.criticalTasks.done()];
            case 1:
              _a.sent();
              start = Date.now();
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [4, this.flushOne(ctx)];
            case 3:
              ctx = _a.sent();
              done = Date.now() - start;
              this.emit("delivery_success", ctx);
              ctx.stats.gauge("delivered", done);
              ctx.log("debug", "Delivered", ctx.event);
              return [2, ctx];
            case 4:
              err_1 = _a.sent();
              error = err_1;
              ctx.log("error", "Failed to deliver", error);
              this.emit("delivery_failure", ctx, error);
              ctx.stats.increment("delivery_failed");
              throw err_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CoreEventQueue2.prototype.enqueuRetry = function(err, ctx) {
      var retriable = !(err instanceof ContextCancelation) || err.retry;
      if (!retriable) {
        return false;
      }
      return this.queue.pushWithBackoff(ctx);
    };
    CoreEventQueue2.prototype.flush = function() {
      return __awaiter(this, void 0, void 0, function() {
        var ctx, err_2, accepted;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.queue.length === 0) {
                return [2, []];
              }
              ctx = this.queue.pop();
              if (!ctx) {
                return [2, []];
              }
              ctx.attempts = this.queue.getAttempts(ctx);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.deliver(ctx)];
            case 2:
              ctx = _a.sent();
              this.emit("flush", ctx, true);
              return [3, 4];
            case 3:
              err_2 = _a.sent();
              accepted = this.enqueuRetry(err_2, ctx);
              if (!accepted) {
                ctx.setFailedDelivery({ reason: err_2 });
                this.emit("flush", ctx, false);
              }
              return [2, []];
            case 4:
              return [2, [ctx]];
          }
        });
      });
    };
    CoreEventQueue2.prototype.isReady = function() {
      return true;
    };
    CoreEventQueue2.prototype.availableExtensions = function(denyList) {
      var available = this.plugins.filter(function(p) {
        var _a2, _b2, _c2;
        if (p.type !== "destination" && p.name !== "Segment.io") {
          return true;
        }
        var alternativeNameMatch = void 0;
        (_a2 = p.alternativeNames) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(name) {
          if (denyList[name] !== void 0) {
            alternativeNameMatch = denyList[name];
          }
        });
        return (_c2 = (_b2 = denyList[p.name]) !== null && _b2 !== void 0 ? _b2 : alternativeNameMatch) !== null && _c2 !== void 0 ? _c2 : (p.name === "Segment.io" ? true : denyList.All) !== false;
      });
      var _a = groupBy(available, "type"), _b = _a.before, before = _b === void 0 ? [] : _b, _c = _a.enrichment, enrichment = _c === void 0 ? [] : _c, _d = _a.destination, destination = _d === void 0 ? [] : _d, _e = _a.after, after = _e === void 0 ? [] : _e;
      return {
        before,
        enrichment,
        destinations: destination,
        after
      };
    };
    CoreEventQueue2.prototype.flushOne = function(ctx) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var _c, before, enrichment, _i, before_1, beforeWare, temp, _d, enrichment_1, enrichmentWare, temp, _e, destinations, after, afterCalls;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              if (!this.isReady()) {
                throw new Error("Not ready");
              }
              if (ctx.attempts > 1) {
                this.emit("delivery_retry", ctx);
              }
              _c = this.availableExtensions((_a = ctx.event.integrations) !== null && _a !== void 0 ? _a : {}), before = _c.before, enrichment = _c.enrichment;
              _i = 0, before_1 = before;
              _f.label = 1;
            case 1:
              if (!(_i < before_1.length))
                return [3, 4];
              beforeWare = before_1[_i];
              return [4, ensure(ctx, beforeWare)];
            case 2:
              temp = _f.sent();
              if (temp instanceof CoreContext) {
                ctx = temp;
              }
              this.emit("message_enriched", ctx, beforeWare);
              _f.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              _d = 0, enrichment_1 = enrichment;
              _f.label = 5;
            case 5:
              if (!(_d < enrichment_1.length))
                return [3, 8];
              enrichmentWare = enrichment_1[_d];
              return [4, attempt(ctx, enrichmentWare)];
            case 6:
              temp = _f.sent();
              if (temp instanceof CoreContext) {
                ctx = temp;
              }
              this.emit("message_enriched", ctx, enrichmentWare);
              _f.label = 7;
            case 7:
              _d++;
              return [3, 5];
            case 8:
              _e = this.availableExtensions((_b = ctx.event.integrations) !== null && _b !== void 0 ? _b : {}), destinations = _e.destinations, after = _e.after;
              return [4, new Promise(function(resolve, reject) {
                setTimeout(function() {
                  var attempts = destinations.map(function(destination) {
                    return attempt(ctx, destination);
                  });
                  Promise.all(attempts).then(resolve).catch(reject);
                }, 0);
              })];
            case 9:
              _f.sent();
              ctx.stats.increment("message_delivered");
              this.emit("message_delivered", ctx);
              afterCalls = after.map(function(after2) {
                return attempt(ctx, after2);
              });
              return [4, Promise.all(afterCalls)];
            case 10:
              _f.sent();
              return [2, ctx];
          }
        });
      });
    };
    return CoreEventQueue2;
  }(Emitter)
);

// node_modules/@segment/analytics-core/dist/esm/analytics/dispatch.js
var getDelay = function(startTimeInEpochMS, timeoutInMS) {
  var elapsedTime = Date.now() - startTimeInEpochMS;
  return Math.max((timeoutInMS !== null && timeoutInMS !== void 0 ? timeoutInMS : 300) - elapsedTime, 0);
};
function dispatch(ctx, queue, emitter, options) {
  return __awaiter(this, void 0, void 0, function() {
    var startTime, dispatched;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          emitter.emit("dispatch_start", ctx);
          startTime = Date.now();
          if (!queue.isEmpty())
            return [3, 2];
          return [4, queue.dispatchSingle(ctx)];
        case 1:
          dispatched = _a.sent();
          return [3, 4];
        case 2:
          return [4, queue.dispatch(ctx)];
        case 3:
          dispatched = _a.sent();
          _a.label = 4;
        case 4:
          if (!(options === null || options === void 0 ? void 0 : options.callback))
            return [3, 6];
          return [4, invokeCallback(dispatched, options.callback, getDelay(startTime, options.timeout))];
        case 5:
          dispatched = _a.sent();
          _a.label = 6;
        case 6:
          if (options === null || options === void 0 ? void 0 : options.debug) {
            dispatched.flush();
          }
          return [2, dispatched];
      }
    });
  });
}

export {
  dset,
  ValidationError,
  isString,
  isNumber,
  isFunction,
  isPlainObject,
  assertUserIdentity,
  assertEventExists,
  assertEventType,
  assertTrackEventName,
  pTimeout,
  createDeferred,
  Emitter,
  PriorityQueue,
  v4,
  CoreStats,
  ContextCancelation,
  CoreContext,
  attempt,
  CoreEventQueue,
  dispatch
};
//# sourceMappingURL=chunk-TU7PAYTW.js.map
