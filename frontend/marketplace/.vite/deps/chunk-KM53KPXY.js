import {
  ContextCancelation,
  CoreContext,
  CoreStats
} from "./chunk-TU7PAYTW.js";
import {
  require_inherits_browser
} from "./chunk-5SHKMPQI.js";
import {
  __assign,
  __awaiter,
  __extends,
  __generator
} from "./chunk-QZ2OSRME.js";
import {
  __commonJS,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/obj-case/index.js
var require_obj_case = __commonJS({
  "node_modules/obj-case/index.js"(exports, module) {
    module.exports = multiple(find);
    module.exports.find = module.exports;
    module.exports.replace = function(obj, key, val, options) {
      multiple(replace).call(this, obj, key, val, options);
      return obj;
    };
    module.exports.del = function(obj, key, options) {
      multiple(del).call(this, obj, key, null, options);
      return obj;
    };
    function multiple(fn) {
      return function(obj, path, val, options) {
        var normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
        path = normalize(path);
        var key;
        var finished = false;
        while (!finished)
          loop();
        function loop() {
          for (key in obj) {
            var normalizedKey = normalize(key);
            if (0 === path.indexOf(normalizedKey)) {
              var temp = path.substr(normalizedKey.length);
              if (temp.charAt(0) === "." || temp.length === 0) {
                path = temp.substr(1);
                var child = obj[key];
                if (null == child) {
                  finished = true;
                  return;
                }
                if (!path.length) {
                  finished = true;
                  return;
                }
                obj = child;
                return;
              }
            }
          }
          key = void 0;
          finished = true;
        }
        if (!key)
          return;
        if (null == obj)
          return obj;
        return fn(obj, key, val);
      };
    }
    function find(obj, key) {
      if (obj.hasOwnProperty(key))
        return obj[key];
    }
    function del(obj, key) {
      if (obj.hasOwnProperty(key))
        delete obj[key];
      return obj;
    }
    function replace(obj, key, val) {
      if (obj.hasOwnProperty(key))
        obj[key] = val;
      return obj;
    }
    function defaultNormalize(path) {
      return path.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase();
    }
    function isFunction(val) {
      return typeof val === "function";
    }
  }
});

// node_modules/@segment/facade/dist/address.js
var require_address = __commonJS({
  "node_modules/@segment/facade/dist/address.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var obj_case_1 = __importDefault(require_obj_case());
    function trait(a, b) {
      return function() {
        var traits = this.traits();
        var props = this.properties ? this.properties() : {};
        return obj_case_1.default(traits, "address." + a) || obj_case_1.default(traits, a) || (b ? obj_case_1.default(traits, "address." + b) : null) || (b ? obj_case_1.default(traits, b) : null) || obj_case_1.default(props, "address." + a) || obj_case_1.default(props, a) || (b ? obj_case_1.default(props, "address." + b) : null) || (b ? obj_case_1.default(props, b) : null);
      };
    }
    function default_1(proto) {
      proto.zip = trait("postalCode", "zip");
      proto.country = trait("country");
      proto.street = trait("street");
      proto.state = trait("state");
      proto.city = trait("city");
      proto.region = trait("region");
    }
    exports.default = default_1;
  }
});

// node_modules/@segment/facade/dist/clone.js
var require_clone = __commonJS({
  "node_modules/@segment/facade/dist/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clone = void 0;
    function clone(properties) {
      if (typeof properties !== "object")
        return properties;
      if (Object.prototype.toString.call(properties) === "[object Object]") {
        var temp = {};
        for (var key in properties) {
          if (Object.prototype.hasOwnProperty.call(properties, key)) {
            temp[key] = clone(properties[key]);
          }
        }
        return temp;
      } else if (Array.isArray(properties)) {
        return properties.map(clone);
      } else {
        return properties;
      }
    }
    exports.clone = clone;
  }
});

// node_modules/@segment/facade/dist/is-enabled.js
var require_is_enabled = __commonJS({
  "node_modules/@segment/facade/dist/is-enabled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var disabled = {
      Salesforce: true
    };
    function default_1(integration) {
      return !disabled[integration];
    }
    exports.default = default_1;
  }
});

// node_modules/@segment/isodate/lib/index.js
var require_lib = __commonJS({
  "node_modules/@segment/isodate/lib/index.js"(exports) {
    "use strict";
    var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    exports.parse = function(iso) {
      var numericKeys = [1, 5, 6, 7, 11, 12];
      var arr = matcher.exec(iso);
      var offset = 0;
      if (!arr) {
        return new Date(iso);
      }
      for (var i = 0, val; val = numericKeys[i]; i++) {
        arr[val] = parseInt(arr[val], 10) || 0;
      }
      arr[2] = parseInt(arr[2], 10) || 1;
      arr[3] = parseInt(arr[3], 10) || 1;
      arr[2]--;
      arr[8] = arr[8] ? (arr[8] + "00").substring(0, 3) : 0;
      if (arr[4] === " ") {
        offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      } else if (arr[9] !== "Z" && arr[10]) {
        offset = arr[11] * 60 + arr[12];
        if (arr[10] === "+") {
          offset = 0 - offset;
        }
      }
      var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
      return new Date(millis);
    };
    exports.is = function(string, strict) {
      if (typeof string !== "string") {
        return false;
      }
      if (strict && /^\d{4}-\d{2}-\d{2}/.test(string) === false) {
        return false;
      }
      return matcher.test(string);
    };
  }
});

// node_modules/new-date/lib/milliseconds.js
var require_milliseconds = __commonJS({
  "node_modules/new-date/lib/milliseconds.js"(exports) {
    "use strict";
    var matcher = /\d{13}/;
    exports.is = function(string) {
      return matcher.test(string);
    };
    exports.parse = function(millis) {
      millis = parseInt(millis, 10);
      return new Date(millis);
    };
  }
});

// node_modules/new-date/lib/seconds.js
var require_seconds = __commonJS({
  "node_modules/new-date/lib/seconds.js"(exports) {
    "use strict";
    var matcher = /\d{10}/;
    exports.is = function(string) {
      return matcher.test(string);
    };
    exports.parse = function(seconds) {
      var millis = parseInt(seconds, 10) * 1e3;
      return new Date(millis);
    };
  }
});

// node_modules/new-date/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/new-date/lib/index.js"(exports, module) {
    "use strict";
    var isodate = require_lib();
    var milliseconds = require_milliseconds();
    var seconds = require_seconds();
    var objProto = Object.prototype;
    var toStr = objProto.toString;
    function isDate(value) {
      return toStr.call(value) === "[object Date]";
    }
    function isNumber(value) {
      return toStr.call(value) === "[object Number]";
    }
    module.exports = function newDate(val) {
      if (isDate(val))
        return val;
      if (isNumber(val))
        return new Date(toMs(val));
      if (isodate.is(val)) {
        return isodate.parse(val);
      }
      if (milliseconds.is(val)) {
        return milliseconds.parse(val);
      }
      if (seconds.is(val)) {
        return seconds.parse(val);
      }
      return new Date(val);
    };
    function toMs(num) {
      if (num < 315576e5)
        return num * 1e3;
      return num;
    }
  }
});

// node_modules/@segment/isodate-traverse/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@segment/isodate-traverse/lib/index.js"(exports, module) {
    "use strict";
    var isodate = require_lib();
    module.exports = traverse;
    function traverse(input, strict) {
      if (strict === void 0)
        strict = true;
      if (input && typeof input === "object") {
        return traverseObject(input, strict);
      } else if (Array.isArray(input)) {
        return traverseArray(input, strict);
      } else if (isodate.is(input, strict)) {
        return isodate.parse(input);
      }
      return input;
    }
    function traverseObject(obj, strict) {
      Object.keys(obj).forEach(function(key) {
        obj[key] = traverse(obj[key], strict);
      });
      return obj;
    }
    function traverseArray(arr, strict) {
      arr.forEach(function(value, index) {
        arr[index] = traverse(value, strict);
      });
      return arr;
    }
  }
});

// node_modules/@segment/facade/dist/facade.js
var require_facade = __commonJS({
  "node_modules/@segment/facade/dist/facade.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Facade = void 0;
    var address_1 = __importDefault(require_address());
    var clone_1 = require_clone();
    var is_enabled_1 = __importDefault(require_is_enabled());
    var new_date_1 = __importDefault(require_lib2());
    var obj_case_1 = __importDefault(require_obj_case());
    var isodate_traverse_1 = __importDefault(require_lib3());
    function Facade2(obj, opts) {
      opts = opts || {};
      this.raw = clone_1.clone(obj);
      if (!("clone" in opts))
        opts.clone = true;
      if (opts.clone)
        obj = clone_1.clone(obj);
      if (!("traverse" in opts))
        opts.traverse = true;
      if (!("timestamp" in obj))
        obj.timestamp = /* @__PURE__ */ new Date();
      else
        obj.timestamp = new_date_1.default(obj.timestamp);
      if (opts.traverse)
        isodate_traverse_1.default(obj);
      this.opts = opts;
      this.obj = obj;
    }
    exports.Facade = Facade2;
    var f = Facade2.prototype;
    f.proxy = function(field) {
      var fields = field.split(".");
      field = fields.shift();
      var obj = this[field] || this.obj[field];
      if (!obj)
        return obj;
      if (typeof obj === "function")
        obj = obj.call(this) || {};
      if (fields.length === 0)
        return this.opts.clone ? transform(obj) : obj;
      obj = obj_case_1.default(obj, fields.join("."));
      return this.opts.clone ? transform(obj) : obj;
    };
    f.field = function(field) {
      var obj = this.obj[field];
      return this.opts.clone ? transform(obj) : obj;
    };
    Facade2.proxy = function(field) {
      return function() {
        return this.proxy(field);
      };
    };
    Facade2.field = function(field) {
      return function() {
        return this.field(field);
      };
    };
    Facade2.multi = function(path) {
      return function() {
        var multi = this.proxy(path + "s");
        if (Array.isArray(multi))
          return multi;
        var one = this.proxy(path);
        if (one)
          one = [this.opts.clone ? clone_1.clone(one) : one];
        return one || [];
      };
    };
    Facade2.one = function(path) {
      return function() {
        var one = this.proxy(path);
        if (one)
          return one;
        var multi = this.proxy(path + "s");
        if (Array.isArray(multi))
          return multi[0];
      };
    };
    f.json = function() {
      var ret = this.opts.clone ? clone_1.clone(this.obj) : this.obj;
      if (this.type)
        ret.type = this.type();
      return ret;
    };
    f.rawEvent = function() {
      return this.raw;
    };
    f.options = function(integration) {
      var obj = this.obj.options || this.obj.context || {};
      var options = this.opts.clone ? clone_1.clone(obj) : obj;
      if (!integration)
        return options;
      if (!this.enabled(integration))
        return;
      var integrations = this.integrations();
      var value = integrations[integration] || obj_case_1.default(integrations, integration);
      if (typeof value !== "object")
        value = obj_case_1.default(this.options(), integration);
      return typeof value === "object" ? value : {};
    };
    f.context = f.options;
    f.enabled = function(integration) {
      var allEnabled = this.proxy("options.providers.all");
      if (typeof allEnabled !== "boolean")
        allEnabled = this.proxy("options.all");
      if (typeof allEnabled !== "boolean")
        allEnabled = this.proxy("integrations.all");
      if (typeof allEnabled !== "boolean")
        allEnabled = true;
      var enabled = allEnabled && is_enabled_1.default(integration);
      var options = this.integrations();
      if (options.providers && options.providers.hasOwnProperty(integration)) {
        enabled = options.providers[integration];
      }
      if (options.hasOwnProperty(integration)) {
        var settings = options[integration];
        if (typeof settings === "boolean") {
          enabled = settings;
        } else {
          enabled = true;
        }
      }
      return !!enabled;
    };
    f.integrations = function() {
      return this.obj.integrations || this.proxy("options.providers") || this.options();
    };
    f.active = function() {
      var active = this.proxy("options.active");
      if (active === null || active === void 0)
        active = true;
      return active;
    };
    f.anonymousId = function() {
      return this.field("anonymousId") || this.field("sessionId");
    };
    f.sessionId = f.anonymousId;
    f.groupId = Facade2.proxy("options.groupId");
    f.traits = function(aliases) {
      var ret = this.proxy("options.traits") || {};
      var id = this.userId();
      aliases = aliases || {};
      if (id)
        ret.id = id;
      for (var alias in aliases) {
        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
          var value = this[alias] == null ? this.proxy("options.traits." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
      }
      return ret;
    };
    f.library = function() {
      var library = this.proxy("options.library");
      if (!library)
        return { name: "unknown", version: null };
      if (typeof library === "string")
        return { name: library, version: null };
      return library;
    };
    f.device = function() {
      var device = this.proxy("context.device");
      if (typeof device !== "object" || device === null) {
        device = {};
      }
      var library = this.library().name;
      if (device.type)
        return device;
      if (library.indexOf("ios") > -1)
        device.type = "ios";
      if (library.indexOf("android") > -1)
        device.type = "android";
      return device;
    };
    f.userAgent = Facade2.proxy("context.userAgent");
    f.timezone = Facade2.proxy("context.timezone");
    f.timestamp = Facade2.field("timestamp");
    f.channel = Facade2.field("channel");
    f.ip = Facade2.proxy("context.ip");
    f.userId = Facade2.field("userId");
    address_1.default(f);
    function transform(obj) {
      return clone_1.clone(obj);
    }
  }
});

// node_modules/@segment/facade/dist/alias.js
var require_alias = __commonJS({
  "node_modules/@segment/facade/dist/alias.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alias = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var facade_1 = require_facade();
    function Alias2(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Alias = Alias2;
    inherits_1.default(Alias2, facade_1.Facade);
    Alias2.prototype.action = function() {
      return "alias";
    };
    Alias2.prototype.type = Alias2.prototype.action;
    Alias2.prototype.previousId = function() {
      return this.field("previousId") || this.field("from");
    };
    Alias2.prototype.from = Alias2.prototype.previousId;
    Alias2.prototype.userId = function() {
      return this.field("userId") || this.field("to");
    };
    Alias2.prototype.to = Alias2.prototype.userId;
  }
});

// node_modules/@segment/facade/dist/is-email.js
var require_is_email = __commonJS({
  "node_modules/@segment/facade/dist/is-email.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher = /.+\@.+\..+/;
    function isEmail(string) {
      return matcher.test(string);
    }
    exports.default = isEmail;
  }
});

// node_modules/@segment/facade/dist/group.js
var require_group = __commonJS({
  "node_modules/@segment/facade/dist/group.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Group = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var is_email_1 = __importDefault(require_is_email());
    var new_date_1 = __importDefault(require_lib2());
    var facade_1 = require_facade();
    function Group2(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Group = Group2;
    inherits_1.default(Group2, facade_1.Facade);
    var g = Group2.prototype;
    g.action = function() {
      return "group";
    };
    g.type = g.action;
    g.groupId = facade_1.Facade.field("groupId");
    g.created = function() {
      var created = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
      if (created)
        return new_date_1.default(created);
    };
    g.email = function() {
      var email = this.proxy("traits.email");
      if (email)
        return email;
      var groupId = this.groupId();
      if (is_email_1.default(groupId))
        return groupId;
    };
    g.traits = function(aliases) {
      var ret = this.properties();
      var id = this.groupId();
      aliases = aliases || {};
      if (id)
        ret.id = id;
      for (var alias in aliases) {
        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
          var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
      }
      return ret;
    };
    g.name = facade_1.Facade.proxy("traits.name");
    g.industry = facade_1.Facade.proxy("traits.industry");
    g.employees = facade_1.Facade.proxy("traits.employees");
    g.properties = function() {
      return this.field("traits") || this.field("properties") || {};
    };
  }
});

// node_modules/@segment/facade/dist/identify.js
var require_identify = __commonJS({
  "node_modules/@segment/facade/dist/identify.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Identify = void 0;
    var facade_1 = require_facade();
    var obj_case_1 = __importDefault(require_obj_case());
    var inherits_1 = __importDefault(require_inherits_browser());
    var is_email_1 = __importDefault(require_is_email());
    var new_date_1 = __importDefault(require_lib2());
    var trim = function(str) {
      return str.trim();
    };
    function Identify2(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Identify = Identify2;
    inherits_1.default(Identify2, facade_1.Facade);
    var i = Identify2.prototype;
    i.action = function() {
      return "identify";
    };
    i.type = i.action;
    i.traits = function(aliases) {
      var ret = this.field("traits") || {};
      var id = this.userId();
      aliases = aliases || {};
      if (id)
        ret.id = id;
      for (var alias in aliases) {
        var value = this[alias] == null ? this.proxy("traits." + alias) : this[alias]();
        if (value == null)
          continue;
        ret[aliases[alias]] = value;
        if (alias !== aliases[alias])
          delete ret[alias];
      }
      return ret;
    };
    i.email = function() {
      var email = this.proxy("traits.email");
      if (email)
        return email;
      var userId = this.userId();
      if (is_email_1.default(userId))
        return userId;
    };
    i.created = function() {
      var created = this.proxy("traits.created") || this.proxy("traits.createdAt");
      if (created)
        return new_date_1.default(created);
    };
    i.companyCreated = function() {
      var created = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
      if (created) {
        return new_date_1.default(created);
      }
    };
    i.companyName = function() {
      return this.proxy("traits.company.name");
    };
    i.name = function() {
      var name = this.proxy("traits.name");
      if (typeof name === "string") {
        return trim(name);
      }
      var firstName = this.firstName();
      var lastName = this.lastName();
      if (firstName && lastName) {
        return trim(firstName + " " + lastName);
      }
    };
    i.firstName = function() {
      var firstName = this.proxy("traits.firstName");
      if (typeof firstName === "string") {
        return trim(firstName);
      }
      var name = this.proxy("traits.name");
      if (typeof name === "string") {
        return trim(name).split(" ")[0];
      }
    };
    i.lastName = function() {
      var lastName = this.proxy("traits.lastName");
      if (typeof lastName === "string") {
        return trim(lastName);
      }
      var name = this.proxy("traits.name");
      if (typeof name !== "string") {
        return;
      }
      var space = trim(name).indexOf(" ");
      if (space === -1) {
        return;
      }
      return trim(name.substr(space + 1));
    };
    i.uid = function() {
      return this.userId() || this.username() || this.email();
    };
    i.description = function() {
      return this.proxy("traits.description") || this.proxy("traits.background");
    };
    i.age = function() {
      var date = this.birthday();
      var age = obj_case_1.default(this.traits(), "age");
      if (age != null)
        return age;
      if (!(date instanceof Date))
        return;
      var now = /* @__PURE__ */ new Date();
      return now.getFullYear() - date.getFullYear();
    };
    i.avatar = function() {
      var traits = this.traits();
      return obj_case_1.default(traits, "avatar") || obj_case_1.default(traits, "photoUrl") || obj_case_1.default(traits, "avatarUrl");
    };
    i.position = function() {
      var traits = this.traits();
      return obj_case_1.default(traits, "position") || obj_case_1.default(traits, "jobTitle");
    };
    i.username = facade_1.Facade.proxy("traits.username");
    i.website = facade_1.Facade.one("traits.website");
    i.websites = facade_1.Facade.multi("traits.website");
    i.phone = facade_1.Facade.one("traits.phone");
    i.phones = facade_1.Facade.multi("traits.phone");
    i.address = facade_1.Facade.proxy("traits.address");
    i.gender = facade_1.Facade.proxy("traits.gender");
    i.birthday = facade_1.Facade.proxy("traits.birthday");
  }
});

// node_modules/@segment/facade/dist/track.js
var require_track = __commonJS({
  "node_modules/@segment/facade/dist/track.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Track = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var facade_1 = require_facade();
    var identify_1 = require_identify();
    var is_email_1 = __importDefault(require_is_email());
    var obj_case_1 = __importDefault(require_obj_case());
    function Track2(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Track = Track2;
    inherits_1.default(Track2, facade_1.Facade);
    var t = Track2.prototype;
    t.action = function() {
      return "track";
    };
    t.type = t.action;
    t.event = facade_1.Facade.field("event");
    t.value = facade_1.Facade.proxy("properties.value");
    t.category = facade_1.Facade.proxy("properties.category");
    t.id = facade_1.Facade.proxy("properties.id");
    t.productId = function() {
      return this.proxy("properties.product_id") || this.proxy("properties.productId");
    };
    t.promotionId = function() {
      return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId");
    };
    t.cartId = function() {
      return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
    };
    t.checkoutId = function() {
      return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId");
    };
    t.paymentId = function() {
      return this.proxy("properties.payment_id") || this.proxy("properties.paymentId");
    };
    t.couponId = function() {
      return this.proxy("properties.coupon_id") || this.proxy("properties.couponId");
    };
    t.wishlistId = function() {
      return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId");
    };
    t.reviewId = function() {
      return this.proxy("properties.review_id") || this.proxy("properties.reviewId");
    };
    t.orderId = function() {
      return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId");
    };
    t.sku = facade_1.Facade.proxy("properties.sku");
    t.tax = facade_1.Facade.proxy("properties.tax");
    t.name = facade_1.Facade.proxy("properties.name");
    t.price = facade_1.Facade.proxy("properties.price");
    t.total = facade_1.Facade.proxy("properties.total");
    t.repeat = facade_1.Facade.proxy("properties.repeat");
    t.coupon = facade_1.Facade.proxy("properties.coupon");
    t.shipping = facade_1.Facade.proxy("properties.shipping");
    t.discount = facade_1.Facade.proxy("properties.discount");
    t.shippingMethod = function() {
      return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod");
    };
    t.paymentMethod = function() {
      return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod");
    };
    t.description = facade_1.Facade.proxy("properties.description");
    t.plan = facade_1.Facade.proxy("properties.plan");
    t.subtotal = function() {
      var subtotal = obj_case_1.default(this.properties(), "subtotal");
      var total = this.total() || this.revenue();
      if (subtotal)
        return subtotal;
      if (!total)
        return 0;
      if (this.total()) {
        var n = this.tax();
        if (n)
          total -= n;
        n = this.shipping();
        if (n)
          total -= n;
        n = this.discount();
        if (n)
          total += n;
      }
      return total;
    };
    t.products = function() {
      var props = this.properties();
      var products = obj_case_1.default(props, "products");
      if (Array.isArray(products)) {
        return products.filter(function(item) {
          return item !== null;
        });
      }
      return [];
    };
    t.quantity = function() {
      var props = this.obj.properties || {};
      return props.quantity || 1;
    };
    t.currency = function() {
      var props = this.obj.properties || {};
      return props.currency || "USD";
    };
    t.referrer = function() {
      return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
    };
    t.query = facade_1.Facade.proxy("options.query");
    t.properties = function(aliases) {
      var ret = this.field("properties") || {};
      aliases = aliases || {};
      for (var alias in aliases) {
        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
          var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
          if (value == null)
            continue;
          ret[aliases[alias]] = value;
          delete ret[alias];
        }
      }
      return ret;
    };
    t.username = function() {
      return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId();
    };
    t.email = function() {
      var email = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
      if (email)
        return email;
      var userId = this.userId();
      if (is_email_1.default(userId))
        return userId;
    };
    t.revenue = function() {
      var revenue = this.proxy("properties.revenue");
      var event = this.event();
      var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
      if (!revenue && event && event.match(orderCompletedRegExp)) {
        revenue = this.proxy("properties.total");
      }
      return currency(revenue);
    };
    t.cents = function() {
      var revenue = this.revenue();
      return typeof revenue !== "number" ? this.value() || 0 : revenue * 100;
    };
    t.identify = function() {
      var json = this.json();
      json.traits = this.traits();
      return new identify_1.Identify(json, this.opts);
    };
    function currency(val) {
      if (!val)
        return;
      if (typeof val === "number") {
        return val;
      }
      if (typeof val !== "string") {
        return;
      }
      val = val.replace(/\$/g, "");
      val = parseFloat(val);
      if (!isNaN(val)) {
        return val;
      }
    }
  }
});

// node_modules/@segment/facade/dist/page.js
var require_page = __commonJS({
  "node_modules/@segment/facade/dist/page.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Page = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var facade_1 = require_facade();
    var track_1 = require_track();
    var is_email_1 = __importDefault(require_is_email());
    function Page2(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Page = Page2;
    inherits_1.default(Page2, facade_1.Facade);
    var p = Page2.prototype;
    p.action = function() {
      return "page";
    };
    p.type = p.action;
    p.category = facade_1.Facade.field("category");
    p.name = facade_1.Facade.field("name");
    p.title = facade_1.Facade.proxy("properties.title");
    p.path = facade_1.Facade.proxy("properties.path");
    p.url = facade_1.Facade.proxy("properties.url");
    p.referrer = function() {
      return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
    };
    p.properties = function(aliases) {
      var props = this.field("properties") || {};
      var category = this.category();
      var name = this.name();
      aliases = aliases || {};
      if (category)
        props.category = category;
      if (name)
        props.name = name;
      for (var alias in aliases) {
        if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
          var value = this[alias] == null ? this.proxy("properties." + alias) : this[alias]();
          if (value == null)
            continue;
          props[aliases[alias]] = value;
          if (alias !== aliases[alias])
            delete props[alias];
        }
      }
      return props;
    };
    p.email = function() {
      var email = this.proxy("context.traits.email") || this.proxy("properties.email");
      if (email)
        return email;
      var userId = this.userId();
      if (is_email_1.default(userId))
        return userId;
    };
    p.fullName = function() {
      var category = this.category();
      var name = this.name();
      return name && category ? category + " " + name : name;
    };
    p.event = function(name) {
      return name ? "Viewed " + name + " Page" : "Loaded a Page";
    };
    p.track = function(name) {
      var json = this.json();
      json.event = this.event(name);
      json.timestamp = this.timestamp();
      json.properties = this.properties();
      return new track_1.Track(json, this.opts);
    };
  }
});

// node_modules/@segment/facade/dist/screen.js
var require_screen = __commonJS({
  "node_modules/@segment/facade/dist/screen.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Screen = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var page_1 = require_page();
    var track_1 = require_track();
    function Screen2(dictionary, opts) {
      page_1.Page.call(this, dictionary, opts);
    }
    exports.Screen = Screen2;
    inherits_1.default(Screen2, page_1.Page);
    Screen2.prototype.action = function() {
      return "screen";
    };
    Screen2.prototype.type = Screen2.prototype.action;
    Screen2.prototype.event = function(name) {
      return name ? "Viewed " + name + " Screen" : "Loaded a Screen";
    };
    Screen2.prototype.track = function(name) {
      var json = this.json();
      json.event = this.event(name);
      json.timestamp = this.timestamp();
      json.properties = this.properties();
      return new track_1.Track(json, this.opts);
    };
  }
});

// node_modules/@segment/facade/dist/delete.js
var require_delete = __commonJS({
  "node_modules/@segment/facade/dist/delete.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Delete = void 0;
    var inherits_1 = __importDefault(require_inherits_browser());
    var facade_1 = require_facade();
    function Delete(dictionary, opts) {
      facade_1.Facade.call(this, dictionary, opts);
    }
    exports.Delete = Delete;
    inherits_1.default(Delete, facade_1.Facade);
    Delete.prototype.type = function() {
      return "delete";
    };
  }
});

// node_modules/@segment/facade/dist/index.js
var require_dist = __commonJS({
  "node_modules/@segment/facade/dist/index.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Delete = exports.Screen = exports.Page = exports.Track = exports.Identify = exports.Group = exports.Alias = exports.Facade = void 0;
    var facade_1 = require_facade();
    Object.defineProperty(exports, "Facade", { enumerable: true, get: function() {
      return facade_1.Facade;
    } });
    var alias_1 = require_alias();
    Object.defineProperty(exports, "Alias", { enumerable: true, get: function() {
      return alias_1.Alias;
    } });
    var group_1 = require_group();
    Object.defineProperty(exports, "Group", { enumerable: true, get: function() {
      return group_1.Group;
    } });
    var identify_1 = require_identify();
    Object.defineProperty(exports, "Identify", { enumerable: true, get: function() {
      return identify_1.Identify;
    } });
    var track_1 = require_track();
    Object.defineProperty(exports, "Track", { enumerable: true, get: function() {
      return track_1.Track;
    } });
    var page_1 = require_page();
    Object.defineProperty(exports, "Page", { enumerable: true, get: function() {
      return page_1.Page;
    } });
    var screen_1 = require_screen();
    Object.defineProperty(exports, "Screen", { enumerable: true, get: function() {
      return screen_1.Screen;
    } });
    var delete_1 = require_delete();
    Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
      return delete_1.Delete;
    } });
    exports.default = __assign2(__assign2({}, facade_1.Facade), {
      Alias: alias_1.Alias,
      Group: group_1.Group,
      Identify: identify_1.Identify,
      Track: track_1.Track,
      Page: page_1.Page,
      Screen: screen_1.Screen,
      Delete: delete_1.Delete
    });
  }
});

// node_modules/unfetch/dist/unfetch.module.js
function unfetch_module_default(e, n) {
  return n = n || {}, new Promise(function(t, r) {
    var s = new XMLHttpRequest(), o = [], u = [], i = {}, a = function() {
      return { ok: 2 == (s.status / 100 | 0), statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: a, headers: { keys: function() {
        return o;
      }, entries: function() {
        return u;
      }, get: function(e2) {
        return i[e2.toLowerCase()];
      }, has: function(e2) {
        return e2.toLowerCase() in i;
      } } };
    };
    for (var l in s.open(n.method || "get", e, true), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n2, t2) {
        o.push(n2 = n2.toLowerCase()), u.push([n2, t2]), i[n2] = i[n2] ? i[n2] + "," + t2 : t2;
      }), t(a());
    }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers)
      s.setRequestHeader(l, n.headers[l]);
    s.send(n.body || null);
  });
}

// node_modules/@segment/analytics-next/dist/pkg/lib/get-global.js
var getGlobal = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return null;
};

// node_modules/@segment/analytics-next/dist/pkg/lib/fetch.js
var fetch = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var global2 = getGlobal();
  return (global2 && global2.fetch || unfetch_module_default).apply(void 0, args);
};

// node_modules/@segment/analytics-next/dist/pkg/generated/version.js
var version = "1.63.0";

// node_modules/@segment/analytics-next/dist/pkg/lib/version-type.js
var _version = "npm";
function getVersionType() {
  return _version;
}

// node_modules/@segment/analytics-next/dist/pkg/core/constants/index.js
var SEGMENT_API_HOST = "api.segment.io/v1";

// node_modules/@segment/analytics-next/dist/pkg/core/stats/remote-metrics.js
var createRemoteMetric = function(metric, tags, versionType) {
  var formattedTags = tags.reduce(function(acc, t) {
    var _a = t.split(":"), k = _a[0], v = _a[1];
    acc[k] = v;
    return acc;
  }, {});
  return {
    type: "Counter",
    metric,
    value: 1,
    tags: __assign(__assign({}, formattedTags), { library: "analytics.js", library_version: versionType === "web" ? "next-".concat(version) : "npm:next-".concat(version) })
  };
};
function logError(err) {
  console.error("Error sending segment performance metrics", err);
}
var RemoteMetrics = (
  /** @class */
  function() {
    function RemoteMetrics2(options) {
      var _this = this;
      var _a, _b, _c, _d;
      this.host = (_a = options === null || options === void 0 ? void 0 : options.host) !== null && _a !== void 0 ? _a : SEGMENT_API_HOST;
      this.sampleRate = (_b = options === null || options === void 0 ? void 0 : options.sampleRate) !== null && _b !== void 0 ? _b : 1;
      this.flushTimer = (_c = options === null || options === void 0 ? void 0 : options.flushTimer) !== null && _c !== void 0 ? _c : 30 * 1e3;
      this.maxQueueSize = (_d = options === null || options === void 0 ? void 0 : options.maxQueueSize) !== null && _d !== void 0 ? _d : 20;
      this.queue = [];
      if (this.sampleRate > 0) {
        var flushing_1 = false;
        var run_1 = function() {
          if (flushing_1) {
            return;
          }
          flushing_1 = true;
          _this.flush().catch(logError);
          flushing_1 = false;
          setTimeout(run_1, _this.flushTimer);
        };
        run_1();
      }
    }
    RemoteMetrics2.prototype.increment = function(metric, tags) {
      if (!metric.includes("analytics_js.")) {
        return;
      }
      if (tags.length === 0) {
        return;
      }
      if (Math.random() > this.sampleRate) {
        return;
      }
      if (this.queue.length >= this.maxQueueSize) {
        return;
      }
      var remoteMetric = createRemoteMetric(metric, tags, getVersionType());
      this.queue.push(remoteMetric);
      if (metric.includes("error")) {
        this.flush().catch(logError);
      }
    };
    RemoteMetrics2.prototype.flush = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.queue.length <= 0) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, this.send().catch(function(error) {
                logError(error);
                _this.sampleRate = 0;
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
    RemoteMetrics2.prototype.send = function() {
      return __awaiter(this, void 0, void 0, function() {
        var payload, headers, url;
        return __generator(this, function(_a) {
          payload = { series: this.queue };
          this.queue = [];
          headers = { "Content-Type": "text/plain" };
          url = "https://".concat(this.host, "/m");
          return [2, fetch(url, {
            headers,
            body: JSON.stringify(payload),
            method: "POST"
          })];
        });
      });
    };
    return RemoteMetrics2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/stats/index.js
var remoteMetrics;
var Stats = (
  /** @class */
  function(_super) {
    __extends(Stats2, _super);
    function Stats2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Stats2.initRemoteMetrics = function(options) {
      remoteMetrics = new RemoteMetrics(options);
    };
    Stats2.prototype.increment = function(metric, by, tags) {
      _super.prototype.increment.call(this, metric, by, tags);
      remoteMetrics === null || remoteMetrics === void 0 ? void 0 : remoteMetrics.increment(metric, tags !== null && tags !== void 0 ? tags : []);
    };
    return Stats2;
  }(CoreStats)
);

// node_modules/@segment/analytics-next/dist/pkg/core/context/index.js
var Context = (
  /** @class */
  function(_super) {
    __extends(Context2, _super);
    function Context2(event, id) {
      return _super.call(this, event, id, new Stats()) || this;
    }
    Context2.system = function() {
      return new this({ type: "track", event: "system" });
    };
    return Context2;
  }(CoreContext)
);

// node_modules/@segment/analytics-next/dist/pkg/lib/to-facade.js
var import_facade = __toESM(require_dist());
function toFacade(evt, options) {
  var fcd = new import_facade.Facade(evt, options);
  if (evt.type === "track") {
    fcd = new import_facade.Track(evt, options);
  }
  if (evt.type === "identify") {
    fcd = new import_facade.Identify(evt, options);
  }
  if (evt.type === "page") {
    fcd = new import_facade.Page(evt, options);
  }
  if (evt.type === "alias") {
    fcd = new import_facade.Alias(evt, options);
  }
  if (evt.type === "group") {
    fcd = new import_facade.Group(evt, options);
  }
  if (evt.type === "screen") {
    fcd = new import_facade.Screen(evt, options);
  }
  Object.defineProperty(fcd, "obj", {
    value: evt,
    writable: true
  });
  return fcd;
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/middleware/index.js
function applyDestinationMiddleware(destination, evt, middleware) {
  return __awaiter(this, void 0, void 0, function() {
    function applyMiddleware(event, fn) {
      return __awaiter(this, void 0, void 0, function() {
        var nextCalled, returnedEvent;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              nextCalled = false;
              returnedEvent = null;
              return [4, fn({
                payload: toFacade(event, {
                  clone: true,
                  traverse: false
                }),
                integration: destination,
                next: function(evt2) {
                  nextCalled = true;
                  if (evt2 === null) {
                    returnedEvent = null;
                  }
                  if (evt2) {
                    returnedEvent = evt2.obj;
                  }
                }
              })];
            case 1:
              _b.sent();
              if (!nextCalled && returnedEvent !== null) {
                returnedEvent = returnedEvent;
                returnedEvent.integrations = __assign(__assign({}, event.integrations), (_a = {}, _a[destination] = false, _a));
              }
              return [2, returnedEvent];
          }
        });
      });
    }
    var modifiedEvent, _i, middleware_1, md, result;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          modifiedEvent = toFacade(evt, {
            clone: true,
            traverse: false
          }).rawEvent();
          _i = 0, middleware_1 = middleware;
          _a.label = 1;
        case 1:
          if (!(_i < middleware_1.length))
            return [3, 4];
          md = middleware_1[_i];
          return [4, applyMiddleware(modifiedEvent, md)];
        case 2:
          result = _a.sent();
          if (result === null) {
            return [2, null];
          }
          modifiedEvent = result;
          _a.label = 3;
        case 3:
          _i++;
          return [3, 1];
        case 4:
          return [2, modifiedEvent];
      }
    });
  });
}
function sourceMiddlewarePlugin(fn, integrations) {
  function apply(ctx) {
    return __awaiter(this, void 0, void 0, function() {
      var nextCalled;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            nextCalled = false;
            return [4, fn({
              payload: toFacade(ctx.event, {
                clone: true,
                traverse: false
              }),
              integrations: integrations !== null && integrations !== void 0 ? integrations : {},
              next: function(evt) {
                nextCalled = true;
                if (evt) {
                  ctx.event = evt.obj;
                }
              }
            })];
          case 1:
            _a.sent();
            if (!nextCalled) {
              throw new ContextCancelation({
                retry: false,
                type: "middleware_cancellation",
                reason: "Middleware `next` function skipped"
              });
            }
            return [2, ctx];
        }
      });
    });
  }
  return {
    name: "Source Middleware ".concat(fn.name),
    type: "before",
    version: "0.1.0",
    isLoaded: function() {
      return true;
    },
    load: function(ctx) {
      return Promise.resolve(ctx);
    },
    track: apply,
    page: apply,
    identify: apply,
    alias: apply,
    group: apply
  };
}

export {
  getGlobal,
  fetch,
  version,
  getVersionType,
  SEGMENT_API_HOST,
  Stats,
  Context,
  require_dist,
  toFacade,
  applyDestinationMiddleware,
  sourceMiddlewarePlugin
};
//# sourceMappingURL=chunk-KM53KPXY.js.map
