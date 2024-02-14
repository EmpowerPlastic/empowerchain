import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/tiny-hashes/md5/index.mjs
var md5_exports = {};
__export(md5_exports, {
  default: () => md5_default
});
function md5_default(t) {
  var e, f, n, a = [e = 1732584193, f = 4023233417, ~e, ~f], c = [], h = unescape(encodeURI(t)) + "", u = h.length;
  for (t = --u / 4 + 2 | 15, c[--t] = 8 * u; ~u; )
    c[u >> 2] |= h.charCodeAt(u) << 8 * u--;
  for (o = h = 0; o < t; o += 16) {
    for (u = a; h < 64; u = [n = u[3], e + ((n = u[0] + [e & f | ~e & n, n & e | ~n & f, e ^ f ^ n, f ^ (e | ~n)][u = h >> 4] + r[h] + ~~c[o | 15 & [h, 5 * h + 1, 3 * h + 5, 7 * h][u]]) << (u = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * u + h++ % 4]) | n >>> -u), e, f])
      e = 0 | u[1], f = u[2];
    for (h = 4; h; )
      a[--h] += u[h];
  }
  for (t = ""; h < 32; )
    t += (a[h >> 3] >> 4 * (1 ^ h++) & 15).toString(16);
  return t;
}
var r, o;
var init_md5 = __esm({
  "node_modules/tiny-hashes/md5/index.mjs"() {
    for (r = [], o = 0; o < 64; )
      r[o] = 0 | 4294967296 * Math.sin(++o % Math.PI);
  }
});

// node_modules/dlv/dist/dlv.umd.js
var require_dlv_umd = __commonJS({
  "node_modules/dlv/dist/dlv.umd.js"(exports, module) {
    !function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = function(t2, n2, e, i, o) {
        for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
          t2 = t2 ? t2[n2[i]] : o;
        return t2 === o ? e : t2;
      } : "function" == typeof define && define.amd ? define(function() {
        return function(t2, n2, e, i, o) {
          for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
            t2 = t2 ? t2[n2[i]] : o;
          return t2 === o ? e : t2;
        };
      }) : t.dlv = function(t2, n2, e, i, o) {
        for (n2 = n2.split ? n2.split(".") : n2, i = 0; i < n2.length; i++)
          t2 = t2 ? t2[n2[i]] : o;
        return t2 === o ? e : t2;
      };
    }(exports);
  }
});

// node_modules/@stdlib/constants-float64-pinf/lib/index.js
var require_lib = __commonJS({
  "node_modules/@stdlib/constants-float64-pinf/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_PINF = Number.POSITIVE_INFINITY;
    module.exports = FLOAT64_PINF;
  }
});

// node_modules/@stdlib/number-ctor/lib/number.js
var require_number = __commonJS({
  "node_modules/@stdlib/number-ctor/lib/number.js"(exports, module) {
    "use strict";
    module.exports = Number;
  }
});

// node_modules/@stdlib/number-ctor/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@stdlib/number-ctor/lib/index.js"(exports, module) {
    "use strict";
    var Number2 = require_number();
    module.exports = Number2;
  }
});

// node_modules/@stdlib/constants-float64-ninf/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@stdlib/constants-float64-ninf/lib/index.js"(exports, module) {
    "use strict";
    var Number2 = require_lib2();
    var FLOAT64_NINF = Number2.NEGATIVE_INFINITY;
    module.exports = FLOAT64_NINF;
  }
});

// node_modules/@stdlib/constants-float64-exponent-bias/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/@stdlib/constants-float64-exponent-bias/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_EXPONENT_BIAS = 1023 | 0;
    module.exports = FLOAT64_EXPONENT_BIAS;
  }
});

// node_modules/@stdlib/constants-float64-max-base2-exponent/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/@stdlib/constants-float64-max-base2-exponent/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_MAX_BASE2_EXPONENT = 1023 | 0;
    module.exports = FLOAT64_MAX_BASE2_EXPONENT;
  }
});

// node_modules/@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js
var require_lib6 = __commonJS({
  "node_modules/@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL = -1023 | 0;
    module.exports = FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL;
  }
});

// node_modules/@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js
var require_lib7 = __commonJS({
  "node_modules/@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL = -1074 | 0;
    module.exports = FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL;
  }
});

// node_modules/@stdlib/math-base-assert-is-nan/lib/main.js
var require_main = __commonJS({
  "node_modules/@stdlib/math-base-assert-is-nan/lib/main.js"(exports, module) {
    "use strict";
    function isnan(x) {
      return x !== x;
    }
    module.exports = isnan;
  }
});

// node_modules/@stdlib/math-base-assert-is-nan/lib/index.js
var require_lib8 = __commonJS({
  "node_modules/@stdlib/math-base-assert-is-nan/lib/index.js"(exports, module) {
    "use strict";
    var isnan = require_main();
    module.exports = isnan;
  }
});

// node_modules/@stdlib/math-base-assert-is-infinite/lib/main.js
var require_main2 = __commonJS({
  "node_modules/@stdlib/math-base-assert-is-infinite/lib/main.js"(exports, module) {
    "use strict";
    var PINF = require_lib();
    var NINF = require_lib3();
    function isInfinite(x) {
      return x === PINF || x === NINF;
    }
    module.exports = isInfinite;
  }
});

// node_modules/@stdlib/math-base-assert-is-infinite/lib/index.js
var require_lib9 = __commonJS({
  "node_modules/@stdlib/math-base-assert-is-infinite/lib/index.js"(exports, module) {
    "use strict";
    var isInfinite = require_main2();
    module.exports = isInfinite;
  }
});

// node_modules/@stdlib/constants-float64-high-word-sign-mask/lib/index.js
var require_lib10 = __commonJS({
  "node_modules/@stdlib/constants-float64-high-word-sign-mask/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_HIGH_WORD_SIGN_MASK = 2147483648 >>> 0;
    module.exports = FLOAT64_HIGH_WORD_SIGN_MASK;
  }
});

// node_modules/@stdlib/constants-float64-high-word-abs-mask/lib/index.js
var require_lib11 = __commonJS({
  "node_modules/@stdlib/constants-float64-high-word-abs-mask/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_HIGH_WORD_ABS_MASK = 2147483647 >>> 0;
    module.exports = FLOAT64_HIGH_WORD_ABS_MASK;
  }
});

// node_modules/@stdlib/utils-define-property/lib/define_property.js
var require_define_property = __commonJS({
  "node_modules/@stdlib/utils-define-property/lib/define_property.js"(exports, module) {
    "use strict";
    var main = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
    module.exports = main;
  }
});

// node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js
var require_has_define_property_support = __commonJS({
  "node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js"(exports, module) {
    "use strict";
    var defineProperty = require_define_property();
    function hasDefinePropertySupport() {
      try {
        defineProperty({}, "x", {});
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = hasDefinePropertySupport;
  }
});

// node_modules/@stdlib/utils-define-property/lib/builtin.js
var require_builtin = __commonJS({
  "node_modules/@stdlib/utils-define-property/lib/builtin.js"(exports, module) {
    "use strict";
    var defineProperty = Object.defineProperty;
    module.exports = defineProperty;
  }
});

// node_modules/@stdlib/utils-define-property/lib/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/@stdlib/utils-define-property/lib/polyfill.js"(exports, module) {
    "use strict";
    var objectProtoype = Object.prototype;
    var toStr = objectProtoype.toString;
    var defineGetter = objectProtoype.__defineGetter__;
    var defineSetter = objectProtoype.__defineSetter__;
    var lookupGetter = objectProtoype.__lookupGetter__;
    var lookupSetter = objectProtoype.__lookupSetter__;
    function defineProperty(obj, prop, descriptor) {
      var prototype;
      var hasValue;
      var hasGet;
      var hasSet;
      if (typeof obj !== "object" || obj === null || toStr.call(obj) === "[object Array]") {
        throw new TypeError("invalid argument. First argument must be an object. Value: `" + obj + "`.");
      }
      if (typeof descriptor !== "object" || descriptor === null || toStr.call(descriptor) === "[object Array]") {
        throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + descriptor + "`.");
      }
      hasValue = "value" in descriptor;
      if (hasValue) {
        if (lookupGetter.call(obj, prop) || lookupSetter.call(obj, prop)) {
          prototype = obj.__proto__;
          obj.__proto__ = objectProtoype;
          delete obj[prop];
          obj[prop] = descriptor.value;
          obj.__proto__ = prototype;
        } else {
          obj[prop] = descriptor.value;
        }
      }
      hasGet = "get" in descriptor;
      hasSet = "set" in descriptor;
      if (hasValue && (hasGet || hasSet)) {
        throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
      }
      if (hasGet && defineGetter) {
        defineGetter.call(obj, prop, descriptor.get);
      }
      if (hasSet && defineSetter) {
        defineSetter.call(obj, prop, descriptor.set);
      }
      return obj;
    }
    module.exports = defineProperty;
  }
});

// node_modules/@stdlib/utils-define-property/lib/index.js
var require_lib12 = __commonJS({
  "node_modules/@stdlib/utils-define-property/lib/index.js"(exports, module) {
    "use strict";
    var hasDefinePropertySupport = require_has_define_property_support();
    var builtin = require_builtin();
    var polyfill = require_polyfill();
    var defineProperty;
    if (hasDefinePropertySupport()) {
      defineProperty = builtin;
    } else {
      defineProperty = polyfill;
    }
    module.exports = defineProperty;
  }
});

// node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js
var require_main3 = __commonJS({
  "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js"(exports, module) {
    "use strict";
    var defineProperty = require_lib12();
    function setNonEnumerableReadOnly(obj, prop, value) {
      defineProperty(obj, prop, {
        "configurable": false,
        "enumerable": false,
        "writable": false,
        "value": value
      });
    }
    module.exports = setNonEnumerableReadOnly;
  }
});

// node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js
var require_lib13 = __commonJS({
  "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js"(exports, module) {
    "use strict";
    var setNonEnumerableReadOnly = require_main3();
    module.exports = setNonEnumerableReadOnly;
  }
});

// node_modules/@stdlib/assert-has-symbol-support/lib/main.js
var require_main4 = __commonJS({
  "node_modules/@stdlib/assert-has-symbol-support/lib/main.js"(exports, module) {
    "use strict";
    function hasSymbolSupport() {
      return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    }
    module.exports = hasSymbolSupport;
  }
});

// node_modules/@stdlib/assert-has-symbol-support/lib/index.js
var require_lib14 = __commonJS({
  "node_modules/@stdlib/assert-has-symbol-support/lib/index.js"(exports, module) {
    "use strict";
    var hasSymbolSupport = require_main4();
    module.exports = hasSymbolSupport;
  }
});

// node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js
var require_main5 = __commonJS({
  "node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js"(exports, module) {
    "use strict";
    var hasSymbols = require_lib14();
    var FLG = hasSymbols();
    function hasToStringTagSupport() {
      return FLG && typeof Symbol.toStringTag === "symbol";
    }
    module.exports = hasToStringTagSupport;
  }
});

// node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js
var require_lib15 = __commonJS({
  "node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js"(exports, module) {
    "use strict";
    var hasToStringTagSupport = require_main5();
    module.exports = hasToStringTagSupport;
  }
});

// node_modules/@stdlib/utils-native-class/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/@stdlib/utils-native-class/lib/tostring.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    module.exports = toStr;
  }
});

// node_modules/@stdlib/utils-native-class/lib/native_class.js
var require_native_class = __commonJS({
  "node_modules/@stdlib/utils-native-class/lib/native_class.js"(exports, module) {
    "use strict";
    var toStr = require_tostring();
    function nativeClass(v) {
      return toStr.call(v);
    }
    module.exports = nativeClass;
  }
});

// node_modules/@stdlib/assert-has-own-property/lib/main.js
var require_main6 = __commonJS({
  "node_modules/@stdlib/assert-has-own-property/lib/main.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    function hasOwnProp(value, property) {
      if (value === void 0 || value === null) {
        return false;
      }
      return has.call(value, property);
    }
    module.exports = hasOwnProp;
  }
});

// node_modules/@stdlib/assert-has-own-property/lib/index.js
var require_lib16 = __commonJS({
  "node_modules/@stdlib/assert-has-own-property/lib/index.js"(exports, module) {
    "use strict";
    var hasOwnProp = require_main6();
    module.exports = hasOwnProp;
  }
});

// node_modules/@stdlib/utils-native-class/lib/tostringtag.js
var require_tostringtag = __commonJS({
  "node_modules/@stdlib/utils-native-class/lib/tostringtag.js"(exports, module) {
    "use strict";
    var toStrTag = typeof Symbol === "function" ? Symbol.toStringTag : "";
    module.exports = toStrTag;
  }
});

// node_modules/@stdlib/utils-native-class/lib/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/@stdlib/utils-native-class/lib/polyfill.js"(exports, module) {
    "use strict";
    var hasOwnProp = require_lib16();
    var toStringTag = require_tostringtag();
    var toStr = require_tostring();
    function nativeClass(v) {
      var isOwn;
      var tag;
      var out;
      if (v === null || v === void 0) {
        return toStr.call(v);
      }
      tag = v[toStringTag];
      isOwn = hasOwnProp(v, toStringTag);
      try {
        v[toStringTag] = void 0;
      } catch (err) {
        return toStr.call(v);
      }
      out = toStr.call(v);
      if (isOwn) {
        v[toStringTag] = tag;
      } else {
        delete v[toStringTag];
      }
      return out;
    }
    module.exports = nativeClass;
  }
});

// node_modules/@stdlib/utils-native-class/lib/index.js
var require_lib17 = __commonJS({
  "node_modules/@stdlib/utils-native-class/lib/index.js"(exports, module) {
    "use strict";
    var hasToStringTag = require_lib15();
    var builtin = require_native_class();
    var polyfill = require_polyfill2();
    var nativeClass;
    if (hasToStringTag()) {
      nativeClass = polyfill;
    } else {
      nativeClass = builtin;
    }
    module.exports = nativeClass;
  }
});

// node_modules/@stdlib/assert-is-uint32array/lib/main.js
var require_main7 = __commonJS({
  "node_modules/@stdlib/assert-is-uint32array/lib/main.js"(exports, module) {
    "use strict";
    var nativeClass = require_lib17();
    var hasUint32Array = typeof Uint32Array === "function";
    function isUint32Array(value) {
      return hasUint32Array && value instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
      nativeClass(value) === "[object Uint32Array]";
    }
    module.exports = isUint32Array;
  }
});

// node_modules/@stdlib/assert-is-uint32array/lib/index.js
var require_lib18 = __commonJS({
  "node_modules/@stdlib/assert-is-uint32array/lib/index.js"(exports, module) {
    "use strict";
    var isUint32Array = require_main7();
    module.exports = isUint32Array;
  }
});

// node_modules/@stdlib/constants-uint32-max/lib/index.js
var require_lib19 = __commonJS({
  "node_modules/@stdlib/constants-uint32-max/lib/index.js"(exports, module) {
    "use strict";
    var UINT32_MAX = 4294967295;
    module.exports = UINT32_MAX;
  }
});

// node_modules/@stdlib/assert-has-uint32array-support/lib/uint32array.js
var require_uint32array = __commonJS({
  "node_modules/@stdlib/assert-has-uint32array-support/lib/uint32array.js"(exports, module) {
    "use strict";
    var main = typeof Uint32Array === "function" ? Uint32Array : null;
    module.exports = main;
  }
});

// node_modules/@stdlib/assert-has-uint32array-support/lib/main.js
var require_main8 = __commonJS({
  "node_modules/@stdlib/assert-has-uint32array-support/lib/main.js"(exports, module) {
    "use strict";
    var isUint32Array = require_lib18();
    var UINT32_MAX = require_lib19();
    var GlobalUint32Array = require_uint32array();
    function hasUint32ArraySupport() {
      var bool;
      var arr;
      if (typeof GlobalUint32Array !== "function") {
        return false;
      }
      try {
        arr = [1, 3.14, -3.14, UINT32_MAX + 1, UINT32_MAX + 2];
        arr = new GlobalUint32Array(arr);
        bool = isUint32Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT32_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1;
      } catch (err) {
        bool = false;
      }
      return bool;
    }
    module.exports = hasUint32ArraySupport;
  }
});

// node_modules/@stdlib/assert-has-uint32array-support/lib/index.js
var require_lib20 = __commonJS({
  "node_modules/@stdlib/assert-has-uint32array-support/lib/index.js"(exports, module) {
    "use strict";
    var hasUint32ArraySupport = require_main8();
    module.exports = hasUint32ArraySupport;
  }
});

// node_modules/@stdlib/array-uint32/lib/uint32array.js
var require_uint32array2 = __commonJS({
  "node_modules/@stdlib/array-uint32/lib/uint32array.js"(exports, module) {
    "use strict";
    var ctor = typeof Uint32Array === "function" ? Uint32Array : void 0;
    module.exports = ctor;
  }
});

// node_modules/@stdlib/array-uint32/lib/polyfill.js
var require_polyfill3 = __commonJS({
  "node_modules/@stdlib/array-uint32/lib/polyfill.js"(exports, module) {
    "use strict";
    function polyfill() {
      throw new Error("not implemented");
    }
    module.exports = polyfill;
  }
});

// node_modules/@stdlib/array-uint32/lib/index.js
var require_lib21 = __commonJS({
  "node_modules/@stdlib/array-uint32/lib/index.js"(exports, module) {
    "use strict";
    var hasUint32ArraySupport = require_lib20();
    var builtin = require_uint32array2();
    var polyfill = require_polyfill3();
    var ctor;
    if (hasUint32ArraySupport()) {
      ctor = builtin;
    } else {
      ctor = polyfill;
    }
    module.exports = ctor;
  }
});

// node_modules/@stdlib/assert-is-float64array/lib/main.js
var require_main9 = __commonJS({
  "node_modules/@stdlib/assert-is-float64array/lib/main.js"(exports, module) {
    "use strict";
    var nativeClass = require_lib17();
    var hasFloat64Array = typeof Float64Array === "function";
    function isFloat64Array(value) {
      return hasFloat64Array && value instanceof Float64Array || // eslint-disable-line stdlib/require-globals
      nativeClass(value) === "[object Float64Array]";
    }
    module.exports = isFloat64Array;
  }
});

// node_modules/@stdlib/assert-is-float64array/lib/index.js
var require_lib22 = __commonJS({
  "node_modules/@stdlib/assert-is-float64array/lib/index.js"(exports, module) {
    "use strict";
    var isFloat64Array = require_main9();
    module.exports = isFloat64Array;
  }
});

// node_modules/@stdlib/assert-has-float64array-support/lib/float64array.js
var require_float64array = __commonJS({
  "node_modules/@stdlib/assert-has-float64array-support/lib/float64array.js"(exports, module) {
    "use strict";
    var main = typeof Float64Array === "function" ? Float64Array : null;
    module.exports = main;
  }
});

// node_modules/@stdlib/assert-has-float64array-support/lib/main.js
var require_main10 = __commonJS({
  "node_modules/@stdlib/assert-has-float64array-support/lib/main.js"(exports, module) {
    "use strict";
    var isFloat64Array = require_lib22();
    var GlobalFloat64Array = require_float64array();
    function hasFloat64ArraySupport() {
      var bool;
      var arr;
      if (typeof GlobalFloat64Array !== "function") {
        return false;
      }
      try {
        arr = new GlobalFloat64Array([1, 3.14, -3.14, NaN]);
        bool = isFloat64Array(arr) && arr[0] === 1 && arr[1] === 3.14 && arr[2] === -3.14 && arr[3] !== arr[3];
      } catch (err) {
        bool = false;
      }
      return bool;
    }
    module.exports = hasFloat64ArraySupport;
  }
});

// node_modules/@stdlib/assert-has-float64array-support/lib/index.js
var require_lib23 = __commonJS({
  "node_modules/@stdlib/assert-has-float64array-support/lib/index.js"(exports, module) {
    "use strict";
    var hasFloat64ArraySupport = require_main10();
    module.exports = hasFloat64ArraySupport;
  }
});

// node_modules/@stdlib/array-float64/lib/float64array.js
var require_float64array2 = __commonJS({
  "node_modules/@stdlib/array-float64/lib/float64array.js"(exports, module) {
    "use strict";
    var ctor = typeof Float64Array === "function" ? Float64Array : void 0;
    module.exports = ctor;
  }
});

// node_modules/@stdlib/array-float64/lib/polyfill.js
var require_polyfill4 = __commonJS({
  "node_modules/@stdlib/array-float64/lib/polyfill.js"(exports, module) {
    "use strict";
    function polyfill() {
      throw new Error("not implemented");
    }
    module.exports = polyfill;
  }
});

// node_modules/@stdlib/array-float64/lib/index.js
var require_lib24 = __commonJS({
  "node_modules/@stdlib/array-float64/lib/index.js"(exports, module) {
    "use strict";
    var hasFloat64ArraySupport = require_lib23();
    var builtin = require_float64array2();
    var polyfill = require_polyfill4();
    var ctor;
    if (hasFloat64ArraySupport()) {
      ctor = builtin;
    } else {
      ctor = polyfill;
    }
    module.exports = ctor;
  }
});

// node_modules/@stdlib/assert-is-uint8array/lib/main.js
var require_main11 = __commonJS({
  "node_modules/@stdlib/assert-is-uint8array/lib/main.js"(exports, module) {
    "use strict";
    var nativeClass = require_lib17();
    var hasUint8Array = typeof Uint8Array === "function";
    function isUint8Array(value) {
      return hasUint8Array && value instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
      nativeClass(value) === "[object Uint8Array]";
    }
    module.exports = isUint8Array;
  }
});

// node_modules/@stdlib/assert-is-uint8array/lib/index.js
var require_lib25 = __commonJS({
  "node_modules/@stdlib/assert-is-uint8array/lib/index.js"(exports, module) {
    "use strict";
    var isUint8Array = require_main11();
    module.exports = isUint8Array;
  }
});

// node_modules/@stdlib/constants-uint8-max/lib/index.js
var require_lib26 = __commonJS({
  "node_modules/@stdlib/constants-uint8-max/lib/index.js"(exports, module) {
    "use strict";
    var UINT8_MAX = 255 | 0;
    module.exports = UINT8_MAX;
  }
});

// node_modules/@stdlib/assert-has-uint8array-support/lib/uint8array.js
var require_uint8array = __commonJS({
  "node_modules/@stdlib/assert-has-uint8array-support/lib/uint8array.js"(exports, module) {
    "use strict";
    var main = typeof Uint8Array === "function" ? Uint8Array : null;
    module.exports = main;
  }
});

// node_modules/@stdlib/assert-has-uint8array-support/lib/main.js
var require_main12 = __commonJS({
  "node_modules/@stdlib/assert-has-uint8array-support/lib/main.js"(exports, module) {
    "use strict";
    var isUint8Array = require_lib25();
    var UINT8_MAX = require_lib26();
    var GlobalUint8Array = require_uint8array();
    function hasUint8ArraySupport() {
      var bool;
      var arr;
      if (typeof GlobalUint8Array !== "function") {
        return false;
      }
      try {
        arr = [1, 3.14, -3.14, UINT8_MAX + 1, UINT8_MAX + 2];
        arr = new GlobalUint8Array(arr);
        bool = isUint8Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT8_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1;
      } catch (err) {
        bool = false;
      }
      return bool;
    }
    module.exports = hasUint8ArraySupport;
  }
});

// node_modules/@stdlib/assert-has-uint8array-support/lib/index.js
var require_lib27 = __commonJS({
  "node_modules/@stdlib/assert-has-uint8array-support/lib/index.js"(exports, module) {
    "use strict";
    var hasUint8ArraySupport = require_main12();
    module.exports = hasUint8ArraySupport;
  }
});

// node_modules/@stdlib/array-uint8/lib/uint8array.js
var require_uint8array2 = __commonJS({
  "node_modules/@stdlib/array-uint8/lib/uint8array.js"(exports, module) {
    "use strict";
    var ctor = typeof Uint8Array === "function" ? Uint8Array : void 0;
    module.exports = ctor;
  }
});

// node_modules/@stdlib/array-uint8/lib/polyfill.js
var require_polyfill5 = __commonJS({
  "node_modules/@stdlib/array-uint8/lib/polyfill.js"(exports, module) {
    "use strict";
    function polyfill() {
      throw new Error("not implemented");
    }
    module.exports = polyfill;
  }
});

// node_modules/@stdlib/array-uint8/lib/index.js
var require_lib28 = __commonJS({
  "node_modules/@stdlib/array-uint8/lib/index.js"(exports, module) {
    "use strict";
    var hasUint8ArraySupport = require_lib27();
    var builtin = require_uint8array2();
    var polyfill = require_polyfill5();
    var ctor;
    if (hasUint8ArraySupport()) {
      ctor = builtin;
    } else {
      ctor = polyfill;
    }
    module.exports = ctor;
  }
});

// node_modules/@stdlib/assert-is-uint16array/lib/main.js
var require_main13 = __commonJS({
  "node_modules/@stdlib/assert-is-uint16array/lib/main.js"(exports, module) {
    "use strict";
    var nativeClass = require_lib17();
    var hasUint16Array = typeof Uint16Array === "function";
    function isUint16Array(value) {
      return hasUint16Array && value instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
      nativeClass(value) === "[object Uint16Array]";
    }
    module.exports = isUint16Array;
  }
});

// node_modules/@stdlib/assert-is-uint16array/lib/index.js
var require_lib29 = __commonJS({
  "node_modules/@stdlib/assert-is-uint16array/lib/index.js"(exports, module) {
    "use strict";
    var isUint16Array = require_main13();
    module.exports = isUint16Array;
  }
});

// node_modules/@stdlib/constants-uint16-max/lib/index.js
var require_lib30 = __commonJS({
  "node_modules/@stdlib/constants-uint16-max/lib/index.js"(exports, module) {
    "use strict";
    var UINT16_MAX = 65535 | 0;
    module.exports = UINT16_MAX;
  }
});

// node_modules/@stdlib/assert-has-uint16array-support/lib/uint16array.js
var require_uint16array = __commonJS({
  "node_modules/@stdlib/assert-has-uint16array-support/lib/uint16array.js"(exports, module) {
    "use strict";
    var main = typeof Uint16Array === "function" ? Uint16Array : null;
    module.exports = main;
  }
});

// node_modules/@stdlib/assert-has-uint16array-support/lib/main.js
var require_main14 = __commonJS({
  "node_modules/@stdlib/assert-has-uint16array-support/lib/main.js"(exports, module) {
    "use strict";
    var isUint16Array = require_lib29();
    var UINT16_MAX = require_lib30();
    var GlobalUint16Array = require_uint16array();
    function hasUint16ArraySupport() {
      var bool;
      var arr;
      if (typeof GlobalUint16Array !== "function") {
        return false;
      }
      try {
        arr = [1, 3.14, -3.14, UINT16_MAX + 1, UINT16_MAX + 2];
        arr = new GlobalUint16Array(arr);
        bool = isUint16Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
        arr[2] === UINT16_MAX - 2 && // truncation and wrap around
        arr[3] === 0 && // wrap around
        arr[4] === 1;
      } catch (err) {
        bool = false;
      }
      return bool;
    }
    module.exports = hasUint16ArraySupport;
  }
});

// node_modules/@stdlib/assert-has-uint16array-support/lib/index.js
var require_lib31 = __commonJS({
  "node_modules/@stdlib/assert-has-uint16array-support/lib/index.js"(exports, module) {
    "use strict";
    var hasUint16ArraySupport = require_main14();
    module.exports = hasUint16ArraySupport;
  }
});

// node_modules/@stdlib/array-uint16/lib/uint16array.js
var require_uint16array2 = __commonJS({
  "node_modules/@stdlib/array-uint16/lib/uint16array.js"(exports, module) {
    "use strict";
    var ctor = typeof Uint16Array === "function" ? Uint16Array : void 0;
    module.exports = ctor;
  }
});

// node_modules/@stdlib/array-uint16/lib/polyfill.js
var require_polyfill6 = __commonJS({
  "node_modules/@stdlib/array-uint16/lib/polyfill.js"(exports, module) {
    "use strict";
    function polyfill() {
      throw new Error("not implemented");
    }
    module.exports = polyfill;
  }
});

// node_modules/@stdlib/array-uint16/lib/index.js
var require_lib32 = __commonJS({
  "node_modules/@stdlib/array-uint16/lib/index.js"(exports, module) {
    "use strict";
    var hasUint16ArraySupport = require_lib31();
    var builtin = require_uint16array2();
    var polyfill = require_polyfill6();
    var ctor;
    if (hasUint16ArraySupport()) {
      ctor = builtin;
    } else {
      ctor = polyfill;
    }
    module.exports = ctor;
  }
});

// node_modules/@stdlib/assert-is-little-endian/lib/ctors.js
var require_ctors = __commonJS({
  "node_modules/@stdlib/assert-is-little-endian/lib/ctors.js"(exports, module) {
    "use strict";
    var Uint8Array2 = require_lib28();
    var Uint16Array2 = require_lib32();
    var ctors = {
      "uint16": Uint16Array2,
      "uint8": Uint8Array2
    };
    module.exports = ctors;
  }
});

// node_modules/@stdlib/assert-is-little-endian/lib/main.js
var require_main15 = __commonJS({
  "node_modules/@stdlib/assert-is-little-endian/lib/main.js"(exports, module) {
    "use strict";
    var ctors = require_ctors();
    var bool;
    function isLittleEndian() {
      var uint16view;
      var uint8view;
      uint16view = new ctors["uint16"](1);
      uint16view[0] = 4660;
      uint8view = new ctors["uint8"](uint16view.buffer);
      return uint8view[0] === 52;
    }
    bool = isLittleEndian();
    module.exports = bool;
  }
});

// node_modules/@stdlib/assert-is-little-endian/lib/index.js
var require_lib33 = __commonJS({
  "node_modules/@stdlib/assert-is-little-endian/lib/index.js"(exports, module) {
    "use strict";
    var IS_LITTLE_ENDIAN = require_main15();
    module.exports = IS_LITTLE_ENDIAN;
  }
});

// node_modules/@stdlib/number-float64-base-to-words/lib/indices.js
var require_indices = __commonJS({
  "node_modules/@stdlib/number-float64-base-to-words/lib/indices.js"(exports, module) {
    "use strict";
    var isLittleEndian = require_lib33();
    var indices;
    var HIGH;
    var LOW;
    if (isLittleEndian === true) {
      HIGH = 1;
      LOW = 0;
    } else {
      HIGH = 0;
      LOW = 1;
    }
    indices = {
      "HIGH": HIGH,
      "LOW": LOW
    };
    module.exports = indices;
  }
});

// node_modules/@stdlib/number-float64-base-to-words/lib/assign.js
var require_assign = __commonJS({
  "node_modules/@stdlib/number-float64-base-to-words/lib/assign.js"(exports, module) {
    "use strict";
    var Uint32Array2 = require_lib21();
    var Float64Array2 = require_lib24();
    var indices = require_indices();
    var FLOAT64_VIEW = new Float64Array2(1);
    var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
    var HIGH = indices.HIGH;
    var LOW = indices.LOW;
    function toWords(x, out, stride, offset) {
      FLOAT64_VIEW[0] = x;
      out[offset] = UINT32_VIEW[HIGH];
      out[offset + stride] = UINT32_VIEW[LOW];
      return out;
    }
    module.exports = toWords;
  }
});

// node_modules/@stdlib/number-float64-base-to-words/lib/main.js
var require_main16 = __commonJS({
  "node_modules/@stdlib/number-float64-base-to-words/lib/main.js"(exports, module) {
    "use strict";
    var fcn = require_assign();
    function toWords(x) {
      return fcn(x, [0 >>> 0, 0 >>> 0], 1, 0);
    }
    module.exports = toWords;
  }
});

// node_modules/@stdlib/number-float64-base-to-words/lib/index.js
var require_lib34 = __commonJS({
  "node_modules/@stdlib/number-float64-base-to-words/lib/index.js"(exports, module) {
    "use strict";
    var setReadOnly = require_lib13();
    var main = require_main16();
    var assign = require_assign();
    setReadOnly(main, "assign", assign);
    module.exports = main;
  }
});

// node_modules/@stdlib/number-float64-base-get-high-word/lib/high.js
var require_high = __commonJS({
  "node_modules/@stdlib/number-float64-base-get-high-word/lib/high.js"(exports, module) {
    "use strict";
    var isLittleEndian = require_lib33();
    var HIGH;
    if (isLittleEndian === true) {
      HIGH = 1;
    } else {
      HIGH = 0;
    }
    module.exports = HIGH;
  }
});

// node_modules/@stdlib/number-float64-base-get-high-word/lib/main.js
var require_main17 = __commonJS({
  "node_modules/@stdlib/number-float64-base-get-high-word/lib/main.js"(exports, module) {
    "use strict";
    var Uint32Array2 = require_lib21();
    var Float64Array2 = require_lib24();
    var HIGH = require_high();
    var FLOAT64_VIEW = new Float64Array2(1);
    var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
    function getHighWord(x) {
      FLOAT64_VIEW[0] = x;
      return UINT32_VIEW[HIGH];
    }
    module.exports = getHighWord;
  }
});

// node_modules/@stdlib/number-float64-base-get-high-word/lib/index.js
var require_lib35 = __commonJS({
  "node_modules/@stdlib/number-float64-base-get-high-word/lib/index.js"(exports, module) {
    "use strict";
    var getHighWord = require_main17();
    module.exports = getHighWord;
  }
});

// node_modules/@stdlib/number-float64-base-from-words/lib/indices.js
var require_indices2 = __commonJS({
  "node_modules/@stdlib/number-float64-base-from-words/lib/indices.js"(exports, module) {
    "use strict";
    var isLittleEndian = require_lib33();
    var indices;
    var HIGH;
    var LOW;
    if (isLittleEndian === true) {
      HIGH = 1;
      LOW = 0;
    } else {
      HIGH = 0;
      LOW = 1;
    }
    indices = {
      "HIGH": HIGH,
      "LOW": LOW
    };
    module.exports = indices;
  }
});

// node_modules/@stdlib/number-float64-base-from-words/lib/main.js
var require_main18 = __commonJS({
  "node_modules/@stdlib/number-float64-base-from-words/lib/main.js"(exports, module) {
    "use strict";
    var Uint32Array2 = require_lib21();
    var Float64Array2 = require_lib24();
    var indices = require_indices2();
    var FLOAT64_VIEW = new Float64Array2(1);
    var UINT32_VIEW = new Uint32Array2(FLOAT64_VIEW.buffer);
    var HIGH = indices.HIGH;
    var LOW = indices.LOW;
    function fromWords(high, low) {
      UINT32_VIEW[HIGH] = high;
      UINT32_VIEW[LOW] = low;
      return FLOAT64_VIEW[0];
    }
    module.exports = fromWords;
  }
});

// node_modules/@stdlib/number-float64-base-from-words/lib/index.js
var require_lib36 = __commonJS({
  "node_modules/@stdlib/number-float64-base-from-words/lib/index.js"(exports, module) {
    "use strict";
    var fromWords = require_main18();
    module.exports = fromWords;
  }
});

// node_modules/@stdlib/math-base-special-copysign/lib/main.js
var require_main19 = __commonJS({
  "node_modules/@stdlib/math-base-special-copysign/lib/main.js"(exports, module) {
    "use strict";
    var SIGN_MASK = require_lib10();
    var ABS_MASK = require_lib11();
    var toWords = require_lib34();
    var getHighWord = require_lib35();
    var fromWords = require_lib36();
    var WORDS = [0, 0];
    function copysign(x, y) {
      var hx;
      var hy;
      toWords.assign(x, WORDS, 1, 0);
      hx = WORDS[0];
      hx &= ABS_MASK;
      hy = getHighWord(y);
      hy &= SIGN_MASK;
      hx |= hy;
      return fromWords(hx, WORDS[1]);
    }
    module.exports = copysign;
  }
});

// node_modules/@stdlib/math-base-special-copysign/lib/index.js
var require_lib37 = __commonJS({
  "node_modules/@stdlib/math-base-special-copysign/lib/index.js"(exports, module) {
    "use strict";
    var main = require_main19();
    module.exports = main;
  }
});

// node_modules/@stdlib/constants-float64-smallest-normal/lib/index.js
var require_lib38 = __commonJS({
  "node_modules/@stdlib/constants-float64-smallest-normal/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_SMALLEST_NORMAL = 22250738585072014e-324;
    module.exports = FLOAT64_SMALLEST_NORMAL;
  }
});

// node_modules/@stdlib/math-base-special-abs/lib/main.js
var require_main20 = __commonJS({
  "node_modules/@stdlib/math-base-special-abs/lib/main.js"(exports, module) {
    "use strict";
    function abs(x) {
      return Math.abs(x);
    }
    module.exports = abs;
  }
});

// node_modules/@stdlib/math-base-special-abs/lib/index.js
var require_lib39 = __commonJS({
  "node_modules/@stdlib/math-base-special-abs/lib/index.js"(exports, module) {
    "use strict";
    var abs = require_main20();
    module.exports = abs;
  }
});

// node_modules/@stdlib/number-float64-base-normalize/lib/assign.js
var require_assign2 = __commonJS({
  "node_modules/@stdlib/number-float64-base-normalize/lib/assign.js"(exports, module) {
    "use strict";
    var FLOAT64_SMALLEST_NORMAL = require_lib38();
    var isInfinite = require_lib9();
    var isnan = require_lib8();
    var abs = require_lib39();
    var SCALAR = 4503599627370496;
    function normalize(x, out, stride, offset) {
      if (isnan(x) || isInfinite(x)) {
        out[offset] = x;
        out[offset + stride] = 0;
        return out;
      }
      if (x !== 0 && abs(x) < FLOAT64_SMALLEST_NORMAL) {
        out[offset] = x * SCALAR;
        out[offset + stride] = -52;
        return out;
      }
      out[offset] = x;
      out[offset + stride] = 0;
      return out;
    }
    module.exports = normalize;
  }
});

// node_modules/@stdlib/number-float64-base-normalize/lib/main.js
var require_main21 = __commonJS({
  "node_modules/@stdlib/number-float64-base-normalize/lib/main.js"(exports, module) {
    "use strict";
    var fcn = require_assign2();
    function normalize(x) {
      return fcn(x, [0, 0], 1, 0);
    }
    module.exports = normalize;
  }
});

// node_modules/@stdlib/number-float64-base-normalize/lib/index.js
var require_lib40 = __commonJS({
  "node_modules/@stdlib/number-float64-base-normalize/lib/index.js"(exports, module) {
    "use strict";
    var setReadOnly = require_lib13();
    var main = require_main21();
    var assign = require_assign2();
    setReadOnly(main, "assign", assign);
    module.exports = main;
  }
});

// node_modules/@stdlib/constants-float64-high-word-exponent-mask/lib/index.js
var require_lib41 = __commonJS({
  "node_modules/@stdlib/constants-float64-high-word-exponent-mask/lib/index.js"(exports, module) {
    "use strict";
    var FLOAT64_HIGH_WORD_EXPONENT_MASK = 2146435072;
    module.exports = FLOAT64_HIGH_WORD_EXPONENT_MASK;
  }
});

// node_modules/@stdlib/number-float64-base-exponent/lib/main.js
var require_main22 = __commonJS({
  "node_modules/@stdlib/number-float64-base-exponent/lib/main.js"(exports, module) {
    "use strict";
    var getHighWord = require_lib35();
    var EXP_MASK = require_lib41();
    var BIAS = require_lib4();
    function exponent(x) {
      var high = getHighWord(x);
      high = (high & EXP_MASK) >>> 20;
      return high - BIAS | 0;
    }
    module.exports = exponent;
  }
});

// node_modules/@stdlib/number-float64-base-exponent/lib/index.js
var require_lib42 = __commonJS({
  "node_modules/@stdlib/number-float64-base-exponent/lib/index.js"(exports, module) {
    "use strict";
    var exponent = require_main22();
    module.exports = exponent;
  }
});

// node_modules/@stdlib/math-base-special-ldexp/lib/ldexp.js
var require_ldexp = __commonJS({
  "node_modules/@stdlib/math-base-special-ldexp/lib/ldexp.js"(exports, module) {
    "use strict";
    var PINF = require_lib();
    var NINF = require_lib3();
    var BIAS = require_lib4();
    var MAX_EXPONENT = require_lib5();
    var MAX_SUBNORMAL_EXPONENT = require_lib6();
    var MIN_SUBNORMAL_EXPONENT = require_lib7();
    var isnan = require_lib8();
    var isInfinite = require_lib9();
    var copysign = require_lib37();
    var normalize = require_lib40();
    var floatExp = require_lib42();
    var toWords = require_lib34();
    var fromWords = require_lib36();
    var TWO52_INV = 2220446049250313e-31;
    var CLEAR_EXP_MASK = 2148532223 >>> 0;
    var FRAC = [0, 0];
    var WORDS = [0, 0];
    function ldexp(frac, exp) {
      var high;
      var m;
      if (frac === 0 || // handles +-0
      isnan(frac) || isInfinite(frac)) {
        return frac;
      }
      normalize(FRAC, frac);
      frac = FRAC[0];
      exp += FRAC[1];
      exp += floatExp(frac);
      if (exp < MIN_SUBNORMAL_EXPONENT) {
        return copysign(0, frac);
      }
      if (exp > MAX_EXPONENT) {
        if (frac < 0) {
          return NINF;
        }
        return PINF;
      }
      if (exp <= MAX_SUBNORMAL_EXPONENT) {
        exp += 52;
        m = TWO52_INV;
      } else {
        m = 1;
      }
      toWords(WORDS, frac);
      high = WORDS[0];
      high &= CLEAR_EXP_MASK;
      high |= exp + BIAS << 20;
      return m * fromWords(high, WORDS[1]);
    }
    module.exports = ldexp;
  }
});

// node_modules/@stdlib/math-base-special-ldexp/lib/index.js
var require_lib43 = __commonJS({
  "node_modules/@stdlib/math-base-special-ldexp/lib/index.js"(exports, module) {
    "use strict";
    var ldexp = require_ldexp();
    module.exports = ldexp;
  }
});

// node_modules/dset/dist/index.js
var require_dist = __commonJS({
  "node_modules/dset/dist/index.js"(exports) {
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
    exports.dset = dset;
  }
});

// node_modules/@segment/tsub/dist/unset.js
var require_unset = __commonJS({
  "node_modules/@segment/tsub/dist/unset.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unset = void 0;
    var dlv_1 = __importDefault(require_dlv_umd());
    function unset(obj, prop) {
      if ((0, dlv_1.default)(obj, prop)) {
        var segs = prop.split(".");
        var last = segs.pop();
        while (segs.length && segs[segs.length - 1].slice(-1) === "\\") {
          last = segs.pop().slice(0, -1) + "." + last;
        }
        while (segs.length)
          obj = obj[prop = segs.shift()];
        return delete obj[last];
      }
      return true;
    }
    exports.unset = unset;
  }
});

// node_modules/@segment/tsub/dist/transformers.js
var require_transformers = __commonJS({
  "node_modules/@segment/tsub/dist/transformers.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var md5_1 = __importDefault((init_md5(), __toCommonJS(md5_exports)));
    var dlv_1 = __importDefault(require_dlv_umd());
    var math_base_special_ldexp_1 = __importDefault(require_lib43());
    var dset_1 = require_dist();
    var unset_1 = require_unset();
    function transform2(payload, transformers) {
      var transformedPayload = payload;
      for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
        var transformer = transformers_1[_i];
        switch (transformer.type) {
          case "drop":
            return null;
          case "drop_properties":
            dropProperties(transformedPayload, transformer.config);
            break;
          case "allow_properties":
            allowProperties(transformedPayload, transformer.config);
            break;
          case "sample_event":
            if (sampleEvent(transformedPayload, transformer.config)) {
              break;
            }
            return null;
          case "map_properties":
            mapProperties(transformedPayload, transformer.config);
            break;
          case "hash_properties":
            break;
          default:
            throw new Error('Transformer of type "'.concat(transformer.type, '" is unsupported.'));
        }
      }
      return transformedPayload;
    }
    exports.default = transform2;
    function dropProperties(payload, config) {
      filterProperties(payload, config.drop, function(matchedObj, dropList) {
        dropList.forEach(function(k) {
          return delete matchedObj[k];
        });
      });
    }
    function allowProperties(payload, config) {
      filterProperties(payload, config.allow, function(matchedObj, preserveList) {
        Object.keys(matchedObj).forEach(function(key) {
          if (!preserveList.includes(key)) {
            delete matchedObj[key];
          }
        });
      });
    }
    function filterProperties(payload, ruleSet, filterCb) {
      Object.entries(ruleSet).forEach(function(_a) {
        var key = _a[0], targets = _a[1];
        var filter = function(obj) {
          if (typeof obj !== "object" || obj === null) {
            return;
          }
          filterCb(obj, targets);
        };
        var matchedObject = key === "" ? payload : (0, dlv_1.default)(payload, key);
        if (Array.isArray(matchedObject)) {
          matchedObject.forEach(filter);
        } else {
          filter(matchedObject);
        }
      });
    }
    function mapProperties(payload, config) {
      var initialPayload = JSON.parse(JSON.stringify(payload));
      for (var key in config.map) {
        if (!config.map.hasOwnProperty(key)) {
          continue;
        }
        var actionMap = config.map[key];
        var splitKey = key.split(".");
        var parent_1 = void 0;
        if (splitKey.length > 1) {
          splitKey.pop();
          parent_1 = (0, dlv_1.default)(initialPayload, splitKey.join("."));
        } else {
          parent_1 = payload;
        }
        if (typeof parent_1 !== "object") {
          continue;
        }
        if (actionMap.copy) {
          var valueToCopy = (0, dlv_1.default)(initialPayload, actionMap.copy);
          if (valueToCopy !== void 0) {
            (0, dset_1.dset)(payload, key, valueToCopy);
          }
        } else if (actionMap.move) {
          var valueToMove = (0, dlv_1.default)(initialPayload, actionMap.move);
          if (valueToMove !== void 0) {
            (0, dset_1.dset)(payload, key, valueToMove);
          }
          (0, unset_1.unset)(payload, actionMap.move);
        } else if (actionMap.hasOwnProperty("set")) {
          (0, dset_1.dset)(payload, key, actionMap.set);
        }
        if (actionMap.to_string) {
          var valueToString = (0, dlv_1.default)(payload, key);
          if (typeof valueToString === "string" || typeof valueToString === "object" && valueToString !== null) {
            continue;
          }
          if (valueToString !== void 0) {
            (0, dset_1.dset)(payload, key, JSON.stringify(valueToString));
          } else {
            (0, dset_1.dset)(payload, key, "undefined");
          }
        }
      }
    }
    function sampleEvent(payload, config) {
      if (config.sample.percent <= 0) {
        return false;
      } else if (config.sample.percent >= 1) {
        return true;
      }
      if (!config.sample.path) {
        return samplePercent(config.sample.percent);
      }
      return sampleConsistentPercent(payload, config);
    }
    function samplePercent(percent) {
      return Math.random() <= percent;
    }
    function sampleConsistentPercent(payload, config) {
      var field = (0, dlv_1.default)(payload, config.sample.path);
      var digest = (0, md5_1.default)(JSON.stringify(field));
      var exponent = -64;
      var significand = [];
      consumeDigest(digest.slice(0, 8), significand);
      var leadingZeros = 0;
      for (var i = 0; i < 64; i++) {
        if (significand[i] === 1) {
          break;
        }
        leadingZeros++;
      }
      if (leadingZeros !== 0) {
        var val = [];
        consumeDigest(digest.slice(9, 16), val);
        exponent -= leadingZeros;
        significand.splice(0, leadingZeros);
        val.splice(64 - leadingZeros);
        significand = significand.concat(val);
      }
      significand[63] = significand[63] === 0 ? 1 : 0;
      return (0, math_base_special_ldexp_1.default)(parseInt(significand.join(""), 2), exponent) < config.sample.percent;
    }
    function consumeDigest(digest, arr) {
      for (var i = 0; i < 8; i++) {
        var remainder = digest[i];
        for (var binary = 128; binary >= 1; binary /= 2) {
          if (remainder - binary >= 0) {
            remainder -= binary;
            arr.push(1);
          } else {
            arr.push(0);
          }
        }
      }
    }
  }
});

// node_modules/@segment/tsub/dist/matchers.js
var require_matchers = __commonJS({
  "node_modules/@segment/tsub/dist/matchers.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var dlv_1 = __importDefault(require_dlv_umd());
    function matches2(event, matcher) {
      if (!matcher) {
        throw new Error("No matcher supplied!");
      }
      switch (matcher.type) {
        case "all":
          return all();
        case "fql":
          return fql(matcher.ir, event);
        default:
          throw new Error("Matcher of type ".concat(matcher.type, " unsupported."));
      }
    }
    exports.default = matches2;
    function all() {
      return true;
    }
    function fql(ir, event) {
      if (!ir) {
        return false;
      }
      try {
        ir = JSON.parse(ir);
      } catch (e) {
        throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(ir, '": ').concat(e));
      }
      var result = fqlEvaluate(ir, event);
      if (typeof result !== "boolean") {
        return false;
      }
      return result;
    }
    function fqlEvaluate(ir, event) {
      if (!Array.isArray(ir)) {
        return getValue(ir, event) === true;
      }
      var item = ir[0];
      switch (item) {
        case "!":
          return !fqlEvaluate(ir[1], event);
        case "or":
          for (var i = 1; i < ir.length; i++) {
            if (fqlEvaluate(ir[i], event)) {
              return true;
            }
          }
          return false;
        case "and":
          for (var i = 1; i < ir.length; i++) {
            if (!fqlEvaluate(ir[i], event)) {
              return false;
            }
          }
          return true;
        case "=":
        case "!=":
          return compareItems(getValue(ir[1], event), getValue(ir[2], event), item, event);
        case "<=":
        case "<":
        case ">":
        case ">=":
          return compareNumbers(getValue(ir[1], event), getValue(ir[2], event), item, event);
        case "in":
          return checkInList(getValue(ir[1], event), getValue(ir[2], event), event);
        case "contains":
          return contains(getValue(ir[1], event), getValue(ir[2], event));
        case "match":
          return match(getValue(ir[1], event), getValue(ir[2], event));
        case "lowercase":
          var target = getValue(ir[1], event);
          if (typeof target !== "string") {
            return null;
          }
          return target.toLowerCase();
        case "typeof":
          return typeof getValue(ir[1], event);
        case "length":
          return length(getValue(ir[1], event));
        default:
          throw new Error("FQL IR could not evaluate for token: ".concat(item));
      }
    }
    function getValue(item, event) {
      if (Array.isArray(item)) {
        return item;
      }
      if (typeof item === "object") {
        return item.value;
      }
      return (0, dlv_1.default)(event, item);
    }
    function checkInList(item, list, event) {
      return list.find(function(it) {
        return getValue(it, event) === item;
      }) !== void 0;
    }
    function compareNumbers(first, second, operator, event) {
      if (isIR(first)) {
        first = fqlEvaluate(first, event);
      }
      if (isIR(second)) {
        second = fqlEvaluate(second, event);
      }
      if (typeof first !== "number" || typeof second !== "number") {
        return false;
      }
      switch (operator) {
        case "<=":
          return first <= second;
        case ">=":
          return first >= second;
        case "<":
          return first < second;
        case ">":
          return first > second;
        default:
          throw new Error("Invalid operator in compareNumbers: ".concat(operator));
      }
    }
    function compareItems(first, second, operator, event) {
      if (isIR(first)) {
        first = fqlEvaluate(first, event);
      }
      if (isIR(second)) {
        second = fqlEvaluate(second, event);
      }
      if (typeof first === "object" && typeof second === "object") {
        first = JSON.stringify(first);
        second = JSON.stringify(second);
      }
      switch (operator) {
        case "=":
          return first === second;
        case "!=":
          return first !== second;
        default:
          throw new Error("Invalid operator in compareItems: ".concat(operator));
      }
    }
    function contains(first, second) {
      if (typeof first !== "string" || typeof second !== "string") {
        return false;
      }
      return first.indexOf(second) !== -1;
    }
    function match(str, glob) {
      if (typeof str !== "string" || typeof glob !== "string") {
        return false;
      }
      return globMatches(glob, str);
    }
    function length(item) {
      if (item === null) {
        return 0;
      }
      if (!Array.isArray(item) && typeof item !== "string") {
        return NaN;
      }
      return item.length;
    }
    function isIR(value) {
      if (!Array.isArray(value)) {
        return false;
      }
      if ((value[0] === "lowercase" || value[0] === "length" || value[0] === "typeof") && value.length === 2) {
        return true;
      }
      if ((value[0] === "contains" || value[0] === "match") && value.length === 3) {
        return true;
      }
      return false;
    }
    function globMatches(pattern, str) {
      var _a, _b;
      Pattern:
        while (pattern.length > 0) {
          var star = void 0;
          var chunk = void 0;
          _a = scanChunk(pattern), star = _a.star, chunk = _a.chunk, pattern = _a.pattern;
          if (star && chunk === "") {
            return true;
          }
          var _c = matchChunk(chunk, str), t = _c.t, ok = _c.ok, err = _c.err;
          if (err) {
            return false;
          }
          if (ok && (t.length === 0 || pattern.length > 0)) {
            str = t;
            continue;
          }
          if (star) {
            for (var i = 0; i < str.length; i++) {
              ;
              _b = matchChunk(chunk, str.slice(i + 1)), t = _b.t, ok = _b.ok, err = _b.err;
              if (ok) {
                if (pattern.length === 0 && t.length > 0) {
                  continue;
                }
                str = t;
                continue Pattern;
              }
              if (err) {
                return false;
              }
            }
          }
          return false;
        }
      return str.length === 0;
    }
    function scanChunk(pattern) {
      var result = {
        star: false,
        chunk: "",
        pattern: ""
      };
      while (pattern.length > 0 && pattern[0] === "*") {
        pattern = pattern.slice(1);
        result.star = true;
      }
      var inRange = false;
      var i;
      Scan:
        for (i = 0; i < pattern.length; i++) {
          switch (pattern[i]) {
            case "\\":
              if (i + 1 < pattern.length) {
                i++;
              }
              break;
            case "[":
              inRange = true;
              break;
            case "]":
              inRange = false;
              break;
            case "*":
              if (!inRange) {
                break Scan;
              }
          }
        }
      result.chunk = pattern.slice(0, i);
      result.pattern = pattern.slice(i);
      return result;
    }
    function matchChunk(chunk, str) {
      var _a, _b;
      var result = {
        t: "",
        ok: false,
        err: false
      };
      while (chunk.length > 0) {
        if (str.length === 0) {
          return result;
        }
        switch (chunk[0]) {
          case "[":
            var char = str[0];
            str = str.slice(1);
            chunk = chunk.slice(1);
            var notNegated = true;
            if (chunk.length > 0 && chunk[0] === "^") {
              notNegated = false;
              chunk = chunk.slice(1);
            }
            var foundMatch = false;
            var nRange = 0;
            while (true) {
              if (chunk.length > 0 && chunk[0] === "]" && nRange > 0) {
                chunk = chunk.slice(1);
                break;
              }
              var lo = "";
              var hi = "";
              var err = void 0;
              _a = getEsc(chunk), lo = _a.char, chunk = _a.newChunk, err = _a.err;
              if (err) {
                return result;
              }
              hi = lo;
              if (chunk[0] === "-") {
                ;
                _b = getEsc(chunk.slice(1)), hi = _b.char, chunk = _b.newChunk, err = _b.err;
                if (err) {
                  return result;
                }
              }
              if (lo <= char && char <= hi) {
                foundMatch = true;
              }
              nRange++;
            }
            if (foundMatch !== notNegated) {
              return result;
            }
            break;
          case "?":
            str = str.slice(1);
            chunk = chunk.slice(1);
            break;
          case "\\":
            chunk = chunk.slice(1);
            if (chunk.length === 0) {
              result.err = true;
              return result;
            }
          default:
            if (chunk[0] !== str[0]) {
              return result;
            }
            str = str.slice(1);
            chunk = chunk.slice(1);
        }
      }
      result.t = str;
      result.ok = true;
      result.err = false;
      return result;
    }
    function getEsc(chunk) {
      var result = {
        char: "",
        newChunk: "",
        err: false
      };
      if (chunk.length === 0 || chunk[0] === "-" || chunk[0] === "]") {
        result.err = true;
        return result;
      }
      if (chunk[0] === "\\") {
        chunk = chunk.slice(1);
        if (chunk.length === 0) {
          result.err = true;
          return result;
        }
      }
      result.char = chunk[0];
      result.newChunk = chunk.slice(1);
      if (result.newChunk.length === 0) {
        result.err = true;
      }
      return result;
    }
  }
});

// node_modules/@segment/tsub/dist/store.js
var require_store = __commonJS({
  "node_modules/@segment/tsub/dist/store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Store2 = (
      /** @class */
      function() {
        function Store3(rules) {
          this.rules = [];
          this.rules = rules || [];
        }
        Store3.prototype.getRulesByDestinationName = function(destinationName) {
          var rules = [];
          for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.destinationName === destinationName || rule.destinationName === void 0) {
              rules.push(rule);
            }
          }
          return rules;
        };
        return Store3;
      }()
    );
    exports.default = Store2;
  }
});

// node_modules/@segment/tsub/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@segment/tsub/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Store = exports.matches = exports.transform = void 0;
    var transformers_1 = require_transformers();
    Object.defineProperty(exports, "transform", { enumerable: true, get: function() {
      return __importDefault(transformers_1).default;
    } });
    var matchers_1 = require_matchers();
    Object.defineProperty(exports, "matches", { enumerable: true, get: function() {
      return __importDefault(matchers_1).default;
    } });
    var store_1 = require_store();
    Object.defineProperty(exports, "Store", { enumerable: true, get: function() {
      return __importDefault(store_1).default;
    } });
  }
});

// node_modules/@segment/analytics-next/dist/pkg/plugins/routing-middleware/index.js
var tsub = __toESM(require_dist2());
var tsubMiddleware = function(rules) {
  return function(_a) {
    var payload = _a.payload, integration = _a.integration, next = _a.next;
    var store = new tsub.Store(rules);
    var rulesToApply = store.getRulesByDestinationName(integration);
    rulesToApply.forEach(function(rule) {
      var matchers = rule.matchers, transformers = rule.transformers;
      for (var i = 0; i < matchers.length; i++) {
        if (tsub.matches(payload.obj, matchers[i])) {
          payload.obj = tsub.transform(payload.obj, transformers[i]);
          if (payload.obj === null) {
            return next(null);
          }
        }
      }
    });
    next(payload);
  };
};
export {
  tsubMiddleware
};
/*! Bundled license information:

@stdlib/constants-float64-pinf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-ctor/lib/number.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-ninf/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-exponent-bias/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-max-base2-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-max-base2-exponent-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-min-base2-exponent-subnormal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-assert-is-nan/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-assert-is-nan/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-assert-is-infinite/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-assert-is-infinite/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-high-word-sign-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-high-word-abs-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/define_property.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-symbol-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-symbol-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-tostringtag-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-tostringtag-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/native_class.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-own-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-own-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/tostringtag.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint32array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint32array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-uint32-max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint32array-support/lib/uint32array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint32array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint32array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint32/lib/uint32array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint32/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint32/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-float64array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-float64array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-float64array-support/lib/float64array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-float64array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-float64array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-float64/lib/float64array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-float64/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-float64/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint8array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint8array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-uint8-max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint8array-support/lib/uint8array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint8array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint8array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint8/lib/uint8array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint8/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint8/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint16array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-uint16array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-uint16-max/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint16array-support/lib/uint16array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint16array-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-uint16array-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint16/lib/uint16array.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint16/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/array-uint16/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-little-endian/lib/ctors.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-little-endian/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-little-endian/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-to-words/lib/indices.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-to-words/lib/assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-to-words/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-to-words/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-get-high-word/lib/high.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-get-high-word/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-get-high-word/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-from-words/lib/indices.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-from-words/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-from-words/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-copysign/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-copysign/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-smallest-normal/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-abs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-abs/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-normalize/lib/assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-normalize/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-normalize/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/constants-float64-high-word-exponent-mask/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-exponent/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/number-float64-base-exponent/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-ldexp/lib/ldexp.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/math-base-special-ldexp/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
//# sourceMappingURL=routing-middleware-IBVH7ZUY.js.map
