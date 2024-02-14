import {
  gracefulDecodeURIComponent
} from "./chunk-75GJZ7JK.js";
import {
  PersistedPriorityQueue,
  isOffline,
  mergedOptions,
  pWhile,
  recordIntegrationMetric
} from "./chunk-YDCWOTRP.js";
import {
  Context,
  SEGMENT_API_HOST,
  Stats,
  applyDestinationMiddleware,
  fetch,
  getGlobal,
  getVersionType,
  toFacade,
  version
} from "./chunk-KM53KPXY.js";
import {
  getCDN,
  getGlobalAnalytics,
  loadScript,
  setGlobalAnalytics,
  setGlobalAnalyticsKey,
  setGlobalCDNUrl
} from "./chunk-AC7VDIFQ.js";
import {
  ContextCancelation,
  CoreEventQueue,
  Emitter,
  PriorityQueue,
  ValidationError,
  assertEventExists,
  assertEventType,
  assertTrackEventName,
  assertUserIdentity,
  attempt,
  createDeferred,
  dispatch,
  dset,
  isFunction,
  isNumber,
  isPlainObject,
  isString,
  v4
} from "./chunk-TU7PAYTW.js";
import "./chunk-5SHKMPQI.js";
import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray
} from "./chunk-QZ2OSRME.js";
import {
  __commonJS,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/spark-md5/spark-md5.js
var require_spark_md5 = __commonJS({
  "node_modules/spark-md5/spark-md5.js"(exports, module) {
    (function(factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        var glob;
        try {
          glob = window;
        } catch (e) {
          glob = self;
        }
        glob.SparkMD5 = factory();
      }
    })(function(undefined2) {
      "use strict";
      var add32 = function(a, b) {
        return a + b & 4294967295;
      }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
      }
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
          var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        };
      }
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined2) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex2.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD5.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  }
});

// node_modules/@segment/analytics-next/dist/pkg/core/arguments-resolver/index.js
function resolveArguments(eventName, properties, options, callback) {
  var _a2;
  var args = [eventName, properties, options, callback];
  var name = isPlainObject(eventName) ? eventName.event : eventName;
  if (!name || !isString(name)) {
    throw new Error("Event missing");
  }
  var data = isPlainObject(eventName) ? (_a2 = eventName.properties) !== null && _a2 !== void 0 ? _a2 : {} : isPlainObject(properties) ? properties : {};
  var opts = {};
  if (!isFunction(options)) {
    opts = options !== null && options !== void 0 ? options : {};
  }
  if (isPlainObject(eventName) && !isFunction(properties)) {
    opts = properties !== null && properties !== void 0 ? properties : {};
  }
  var cb = args.find(isFunction);
  return [name, data, opts, cb];
}
function resolvePageArguments(category, name, properties, options, callback) {
  var _a2, _b2;
  var resolvedCategory = null;
  var resolvedName = null;
  var args = [category, name, properties, options, callback];
  var strings = args.filter(isString);
  if (strings[0] !== void 0 && strings[1] !== void 0) {
    resolvedCategory = strings[0];
    resolvedName = strings[1];
  }
  if (strings.length === 1) {
    resolvedCategory = null;
    resolvedName = strings[0];
  }
  var resolvedCallback = args.find(isFunction);
  var objects = args.filter(function(obj) {
    if (resolvedName === null) {
      return isPlainObject(obj);
    }
    return isPlainObject(obj) || obj === null;
  });
  var resolvedProperties = (_a2 = objects[0]) !== null && _a2 !== void 0 ? _a2 : {};
  var resolvedOptions = (_b2 = objects[1]) !== null && _b2 !== void 0 ? _b2 : {};
  return [
    resolvedCategory,
    resolvedName,
    resolvedProperties,
    resolvedOptions,
    resolvedCallback
  ];
}
var resolveUserArguments = function(user) {
  return function() {
    var _a2, _b2, _c;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var values = {};
    var orderStack = [
      "callback",
      "options",
      "traits",
      "id"
    ];
    for (var _d = 0, args_1 = args; _d < args_1.length; _d++) {
      var arg = args_1[_d];
      var current = orderStack.pop();
      if (current === "id") {
        if (isString(arg) || isNumber(arg)) {
          values.id = arg.toString();
          continue;
        }
        if (arg === null || arg === void 0) {
          continue;
        }
        current = orderStack.pop();
      }
      if ((current === "traits" || current === "options") && (arg === null || arg === void 0 || isPlainObject(arg))) {
        values[current] = arg;
      }
      if (isFunction(arg)) {
        values.callback = arg;
        break;
      }
    }
    return [
      (_a2 = values.id) !== null && _a2 !== void 0 ? _a2 : user.id(),
      (_b2 = values.traits) !== null && _b2 !== void 0 ? _b2 : {},
      (_c = values.options) !== null && _c !== void 0 ? _c : {},
      values.callback
    ];
  };
};
function resolveAliasArguments(to, from, options, callback) {
  if (isNumber(to))
    to = to.toString();
  if (isNumber(from))
    from = from.toString();
  var args = [to, from, options, callback];
  var _a2 = args.filter(isString), _b2 = _a2[0], aliasTo = _b2 === void 0 ? to : _b2, _c = _a2[1], aliasFrom = _c === void 0 ? null : _c;
  var _d = args.filter(isPlainObject)[0], opts = _d === void 0 ? {} : _d;
  var resolvedCallback = args.find(isFunction);
  return [aliasTo, aliasFrom, opts, resolvedCallback];
}

// node_modules/@segment/analytics-next/dist/pkg/core/events/index.js
var import_spark_md5 = __toESM(require_spark_md5());

// node_modules/@segment/analytics-next/dist/pkg/core/page/get-page-context.js
var BufferedPageContextDiscriminant = "bpc";
var createBufferedPageContext = function(url, canonicalUrl, search, path, title, referrer) {
  return {
    __t: BufferedPageContextDiscriminant,
    c: canonicalUrl,
    p: path,
    u: url,
    s: search,
    t: title,
    r: referrer
  };
};
var BUFFERED_PAGE_CONTEXT_KEYS = Object.keys(createBufferedPageContext("", "", "", "", "", ""));
function isBufferedPageContext(bufferedPageCtx) {
  if (!isPlainObject(bufferedPageCtx))
    return false;
  if (bufferedPageCtx.__t !== BufferedPageContextDiscriminant)
    return false;
  for (var k in bufferedPageCtx) {
    if (!BUFFERED_PAGE_CONTEXT_KEYS.includes(k)) {
      return false;
    }
  }
  return true;
}
var createCanonicalURL = function(canonicalUrl, searchParams) {
  return canonicalUrl.indexOf("?") > -1 ? canonicalUrl : canonicalUrl + searchParams;
};
var removeHash = function(href) {
  var hashIdx = href.indexOf("#");
  return hashIdx === -1 ? href : href.slice(0, hashIdx);
};
var parseCanonicalPath = function(canonicalUrl) {
  try {
    return new URL(canonicalUrl).pathname;
  } catch (_e) {
    return canonicalUrl[0] === "/" ? canonicalUrl : "/" + canonicalUrl;
  }
};
var createPageContext = function(_a2) {
  var canonicalUrl = _a2.c, pathname = _a2.p, search = _a2.s, url = _a2.u, referrer = _a2.r, title = _a2.t;
  var newPath = canonicalUrl ? parseCanonicalPath(canonicalUrl) : pathname;
  var newUrl = canonicalUrl ? createCanonicalURL(canonicalUrl, search) : removeHash(url);
  return {
    path: newPath,
    referrer,
    search,
    title,
    url: newUrl
  };
};
var getDefaultBufferedPageContext = function() {
  var c = document.querySelector("link[rel='canonical']");
  return createBufferedPageContext(location.href, c && c.getAttribute("href") || void 0, location.search, location.pathname, document.title, document.referrer);
};
var getDefaultPageContext = function() {
  return createPageContext(getDefaultBufferedPageContext());
};

// node_modules/@segment/analytics-next/dist/pkg/lib/pick.js
function pick(object, keys) {
  return Object.assign.apply(Object, __spreadArray([{}], keys.map(function(key) {
    var _a2;
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      return _a2 = {}, _a2[key] = object[key], _a2;
    }
  }), false));
}

// node_modules/@segment/analytics-next/dist/pkg/core/page/add-page-context.js
var addPageContext = function(event, pageCtx) {
  if (pageCtx === void 0) {
    pageCtx = getDefaultPageContext();
  }
  var evtCtx = event.context;
  var pageContextFromEventProps;
  if (event.type === "page") {
    pageContextFromEventProps = event.properties && pick(event.properties, Object.keys(pageCtx));
    event.properties = __assign(__assign(__assign({}, pageCtx), event.properties), event.name ? { name: event.name } : {});
  }
  evtCtx.page = __assign(__assign(__assign({}, pageCtx), pageContextFromEventProps), evtCtx.page);
};

// node_modules/@segment/analytics-next/dist/pkg/core/events/index.js
var EventFactory = (
  /** @class */
  function() {
    function EventFactory2(user) {
      this.user = user;
    }
    EventFactory2.prototype.track = function(event, properties, options, globalIntegrations, pageCtx) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { event, type: "track", properties, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }), pageCtx);
    };
    EventFactory2.prototype.page = function(category, page, properties, options, globalIntegrations, pageCtx) {
      var _a2;
      var event = {
        type: "page",
        properties: __assign({}, properties),
        options: __assign({}, options),
        integrations: __assign({}, globalIntegrations)
      };
      if (category !== null) {
        event.category = category;
        event.properties = (_a2 = event.properties) !== null && _a2 !== void 0 ? _a2 : {};
        event.properties.category = category;
      }
      if (page !== null) {
        event.name = page;
      }
      return this.normalize(__assign(__assign({}, this.baseEvent()), event), pageCtx);
    };
    EventFactory2.prototype.screen = function(category, screen, properties, options, globalIntegrations, pageCtx) {
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
      return this.normalize(__assign(__assign({}, this.baseEvent()), event), pageCtx);
    };
    EventFactory2.prototype.identify = function(userId, traits, options, globalIntegrations, pageCtx) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { type: "identify", userId, traits, options: __assign({}, options), integrations: __assign({}, globalIntegrations) }), pageCtx);
    };
    EventFactory2.prototype.group = function(groupId, traits, options, globalIntegrations, pageCtx) {
      return this.normalize(__assign(__assign({}, this.baseEvent()), { type: "group", traits, options: __assign({}, options), integrations: __assign({}, globalIntegrations), groupId }), pageCtx);
    };
    EventFactory2.prototype.alias = function(to, from, options, globalIntegrations, pageCtx) {
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
      return this.normalize(__assign(__assign({}, this.baseEvent()), base), pageCtx);
    };
    EventFactory2.prototype.baseEvent = function() {
      var base = {
        integrations: {},
        options: {}
      };
      var user = this.user;
      if (user.id()) {
        base.userId = user.id();
      }
      if (user.anonymousId()) {
        base.anonymousId = user.anonymousId();
      }
      return base;
    };
    EventFactory2.prototype.context = function(event) {
      var _a2, _b2, _c;
      var optionsKeys = ["integrations", "anonymousId", "timestamp", "userId"];
      var options = (_a2 = event.options) !== null && _a2 !== void 0 ? _a2 : {};
      delete options["integrations"];
      var providedOptionsKeys = Object.keys(options);
      var context = (_c = (_b2 = event.options) === null || _b2 === void 0 ? void 0 : _b2.context) !== null && _c !== void 0 ? _c : {};
      var overrides = {};
      providedOptionsKeys.forEach(function(key) {
        if (key === "context") {
          return;
        }
        if (optionsKeys.includes(key)) {
          dset(overrides, key, options[key]);
        } else {
          dset(context, key, options[key]);
        }
      });
      return [context, overrides];
    };
    EventFactory2.prototype.normalize = function(event, pageCtx) {
      var _a2, _b2, _c;
      ((_a2 = event.options) === null || _a2 === void 0 ? void 0 : _a2.anonymousId) && this.user.anonymousId(event.options.anonymousId);
      var integrationBooleans = Object.keys((_b2 = event.integrations) !== null && _b2 !== void 0 ? _b2 : {}).reduce(function(integrationNames, name) {
        var _a3;
        var _b3;
        return __assign(__assign({}, integrationNames), (_a3 = {}, _a3[name] = Boolean((_b3 = event.integrations) === null || _b3 === void 0 ? void 0 : _b3[name]), _a3));
      }, {});
      var allIntegrations = __assign(__assign({}, integrationBooleans), (_c = event.options) === null || _c === void 0 ? void 0 : _c.integrations);
      var _d = this.context(event), context = _d[0], overrides = _d[1];
      var options = event.options, rest = __rest(event, ["options"]);
      var newEvent = __assign(__assign(__assign(__assign({ timestamp: /* @__PURE__ */ new Date() }, rest), { context, integrations: allIntegrations }), overrides), { messageId: "ajs-next-" + import_spark_md5.default.hash(JSON.stringify(event) + v4()) });
      addPageContext(newEvent, pageCtx);
      return newEvent;
    };
    return EventFactory2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/queue/event-queue.js
var EventQueue = (
  /** @class */
  function(_super) {
    __extends(EventQueue2, _super);
    function EventQueue2(nameOrQueue) {
      return _super.call(this, typeof nameOrQueue === "string" ? new PersistedPriorityQueue(4, nameOrQueue) : nameOrQueue) || this;
    }
    EventQueue2.prototype.flush = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          if (isOffline())
            return [2, []];
          return [2, _super.prototype.flush.call(this)];
        });
      });
    };
    return EventQueue2;
  }(CoreEventQueue)
);

// node_modules/@segment/analytics-next/dist/pkg/lib/bind-all.js
function bindAll(obj) {
  var proto = obj.constructor.prototype;
  for (var _i = 0, _a2 = Object.getOwnPropertyNames(proto); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (key !== "constructor") {
      var desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key);
      if (!!desc && typeof desc.value === "function") {
        obj[key] = obj[key].bind(obj);
      }
    }
  }
  return obj;
}

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
  }
  function get(key) {
    if (typeof document === "undefined" || arguments.length && !key) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key === foundKey) {
          break;
        }
      } catch (e) {
      }
    }
    return key ? jar[key] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(key, attributes) {
        set(
          key,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });
var js_cookie_default = api;

// node_modules/@segment/analytics-next/dist/pkg/core/user/tld.js
function levels(url) {
  var host = url.hostname;
  var parts = host.split(".");
  var last = parts[parts.length - 1];
  var levels2 = [];
  if (parts.length === 4 && parseInt(last, 10) > 0) {
    return levels2;
  }
  if (parts.length <= 1) {
    return levels2;
  }
  for (var i = parts.length - 2; i >= 0; --i) {
    levels2.push(parts.slice(i).join("."));
  }
  return levels2;
}
function parseUrl(url) {
  try {
    return new URL(url);
  } catch (_a2) {
    return;
  }
}
function tld(url) {
  var parsedUrl = parseUrl(url);
  if (!parsedUrl)
    return;
  var lvls = levels(parsedUrl);
  for (var i = 0; i < lvls.length; ++i) {
    var cname = "__tld__";
    var domain = lvls[i];
    var opts = { domain: "." + domain };
    try {
      js_cookie_default.set(cname, "1", opts);
      if (js_cookie_default.get(cname)) {
        js_cookie_default.remove(cname, opts);
        return domain;
      }
    } catch (_) {
      return;
    }
  }
}

// node_modules/@segment/analytics-next/dist/pkg/core/storage/cookieStorage.js
var ONE_YEAR = 365;
var CookieStorage = (
  /** @class */
  function() {
    function CookieStorage2(options) {
      if (options === void 0) {
        options = CookieStorage2.defaults;
      }
      this.options = __assign(__assign({}, CookieStorage2.defaults), options);
    }
    Object.defineProperty(CookieStorage2, "defaults", {
      get: function() {
        return {
          maxage: ONE_YEAR,
          domain: tld(window.location.href),
          path: "/",
          sameSite: "Lax"
        };
      },
      enumerable: false,
      configurable: true
    });
    CookieStorage2.prototype.opts = function() {
      return {
        sameSite: this.options.sameSite,
        expires: this.options.maxage,
        domain: this.options.domain,
        path: this.options.path,
        secure: this.options.secure
      };
    };
    CookieStorage2.prototype.get = function(key) {
      var _a2;
      try {
        var value = js_cookie_default.get(key);
        if (value === void 0 || value === null) {
          return null;
        }
        try {
          return (_a2 = JSON.parse(value)) !== null && _a2 !== void 0 ? _a2 : null;
        } catch (e) {
          return value !== null && value !== void 0 ? value : null;
        }
      } catch (e) {
        return null;
      }
    };
    CookieStorage2.prototype.set = function(key, value) {
      if (typeof value === "string") {
        js_cookie_default.set(key, value, this.opts());
      } else if (value === null) {
        js_cookie_default.remove(key, this.opts());
      } else {
        js_cookie_default.set(key, JSON.stringify(value), this.opts());
      }
    };
    CookieStorage2.prototype.remove = function(key) {
      return js_cookie_default.remove(key, this.opts());
    };
    return CookieStorage2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/storage/localStorage.js
var LocalStorage = (
  /** @class */
  function() {
    function LocalStorage2() {
    }
    LocalStorage2.prototype.localStorageWarning = function(key, state) {
      console.warn("Unable to access ".concat(key, ", localStorage may be ").concat(state));
    };
    LocalStorage2.prototype.get = function(key) {
      var _a2;
      try {
        var val = localStorage.getItem(key);
        if (val === null) {
          return null;
        }
        try {
          return (_a2 = JSON.parse(val)) !== null && _a2 !== void 0 ? _a2 : null;
        } catch (e) {
          return val !== null && val !== void 0 ? val : null;
        }
      } catch (err) {
        this.localStorageWarning(key, "unavailable");
        return null;
      }
    };
    LocalStorage2.prototype.set = function(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (_a2) {
        this.localStorageWarning(key, "full");
      }
    };
    LocalStorage2.prototype.remove = function(key) {
      try {
        return localStorage.removeItem(key);
      } catch (err) {
        this.localStorageWarning(key, "unavailable");
      }
    };
    return LocalStorage2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/storage/memoryStorage.js
var MemoryStorage = (
  /** @class */
  function() {
    function MemoryStorage2() {
      this.cache = {};
    }
    MemoryStorage2.prototype.get = function(key) {
      var _a2;
      return (_a2 = this.cache[key]) !== null && _a2 !== void 0 ? _a2 : null;
    };
    MemoryStorage2.prototype.set = function(key, value) {
      this.cache[key] = value;
    };
    MemoryStorage2.prototype.remove = function(key) {
      delete this.cache[key];
    };
    return MemoryStorage2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/storage/types.js
var StoreType = {
  Cookie: "cookie",
  LocalStorage: "localStorage",
  Memory: "memory"
};

// node_modules/@segment/analytics-next/dist/pkg/core/storage/settings.js
function isArrayOfStoreType(s) {
  return s && s.stores && Array.isArray(s.stores) && s.stores.every(function(e) {
    return Object.values(StoreType).includes(e);
  });
}
function isStoreTypeWithSettings(s) {
  return typeof s === "object" && s.name !== void 0;
}

// node_modules/@segment/analytics-next/dist/pkg/core/storage/universalStorage.js
var _logStoreKeyError = function(store, action, key, err) {
  console.warn("".concat(store.constructor.name, ": Can't ").concat(action, ' key "').concat(key, '" | Err: ').concat(err));
};
var UniversalStorage = (
  /** @class */
  function() {
    function UniversalStorage2(stores) {
      this.stores = stores;
    }
    UniversalStorage2.prototype.get = function(key) {
      var val = null;
      for (var _i = 0, _a2 = this.stores; _i < _a2.length; _i++) {
        var store = _a2[_i];
        try {
          val = store.get(key);
          if (val !== void 0 && val !== null) {
            return val;
          }
        } catch (e) {
          _logStoreKeyError(store, "get", key, e);
        }
      }
      return null;
    };
    UniversalStorage2.prototype.set = function(key, value) {
      this.stores.forEach(function(store) {
        try {
          store.set(key, value);
        } catch (e) {
          _logStoreKeyError(store, "set", key, e);
        }
      });
    };
    UniversalStorage2.prototype.clear = function(key) {
      this.stores.forEach(function(store) {
        try {
          store.remove(key);
        } catch (e) {
          _logStoreKeyError(store, "remove", key, e);
        }
      });
    };
    UniversalStorage2.prototype.getAndSync = function(key) {
      var val = this.get(key);
      var coercedValue = typeof val === "number" ? val.toString() : val;
      this.set(key, coercedValue);
      return coercedValue;
    };
    return UniversalStorage2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/storage/index.js
function initializeStorages(args) {
  var storages = args.map(function(s) {
    var type;
    var settings;
    if (isStoreTypeWithSettings(s)) {
      type = s.name;
      settings = s.settings;
    } else {
      type = s;
    }
    switch (type) {
      case StoreType.Cookie:
        return new CookieStorage(settings);
      case StoreType.LocalStorage:
        return new LocalStorage();
      case StoreType.Memory:
        return new MemoryStorage();
      default:
        throw new Error("Unknown Store Type: ".concat(s));
    }
  });
  return storages;
}
function applyCookieOptions(storeTypes, cookieOptions2) {
  return storeTypes.map(function(s) {
    if (cookieOptions2 && s === StoreType.Cookie) {
      return {
        name: s,
        settings: cookieOptions2
      };
    }
    return s;
  });
}

// node_modules/@segment/analytics-next/dist/pkg/core/user/index.js
var defaults = {
  persist: true,
  cookie: {
    key: "ajs_user_id",
    oldKey: "ajs_user"
  },
  localStorage: {
    key: "ajs_user_traits"
  }
};
var User = (
  /** @class */
  function() {
    function User2(options, cookieOptions2) {
      if (options === void 0) {
        options = defaults;
      }
      var _this = this;
      var _a2, _b2, _c, _d;
      this.options = {};
      this.id = function(id) {
        if (_this.options.disable) {
          return null;
        }
        var prevId = _this.identityStore.getAndSync(_this.idKey);
        if (id !== void 0) {
          _this.identityStore.set(_this.idKey, id);
          var changingIdentity = id !== prevId && prevId !== null && id !== null;
          if (changingIdentity) {
            _this.anonymousId(null);
          }
        }
        var retId = _this.identityStore.getAndSync(_this.idKey);
        if (retId)
          return retId;
        var retLeg = _this.legacyUserStore.get(defaults.cookie.oldKey);
        return retLeg ? typeof retLeg === "object" ? retLeg.id : retLeg : null;
      };
      this.anonymousId = function(id) {
        var _a3, _b3;
        if (_this.options.disable) {
          return null;
        }
        if (id === void 0) {
          var val = (_a3 = _this.identityStore.getAndSync(_this.anonKey)) !== null && _a3 !== void 0 ? _a3 : (_b3 = _this.legacySIO()) === null || _b3 === void 0 ? void 0 : _b3[0];
          if (val) {
            return val;
          }
        }
        if (id === null) {
          _this.identityStore.set(_this.anonKey, null);
          return _this.identityStore.getAndSync(_this.anonKey);
        }
        _this.identityStore.set(_this.anonKey, id !== null && id !== void 0 ? id : v4());
        return _this.identityStore.getAndSync(_this.anonKey);
      };
      this.traits = function(traits) {
        var _a3;
        if (_this.options.disable) {
          return;
        }
        if (traits === null) {
          traits = {};
        }
        if (traits) {
          _this.traitsStore.set(_this.traitsKey, traits !== null && traits !== void 0 ? traits : {});
        }
        return (_a3 = _this.traitsStore.get(_this.traitsKey)) !== null && _a3 !== void 0 ? _a3 : {};
      };
      this.options = __assign(__assign({}, defaults), options);
      this.cookieOptions = cookieOptions2;
      this.idKey = (_b2 = (_a2 = options.cookie) === null || _a2 === void 0 ? void 0 : _a2.key) !== null && _b2 !== void 0 ? _b2 : defaults.cookie.key;
      this.traitsKey = (_d = (_c = options.localStorage) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : defaults.localStorage.key;
      this.anonKey = "ajs_anonymous_id";
      this.identityStore = this.createStorage(this.options, cookieOptions2);
      this.legacyUserStore = this.createStorage(this.options, cookieOptions2, function(s) {
        return s === StoreType.Cookie;
      });
      this.traitsStore = this.createStorage(this.options, cookieOptions2, function(s) {
        return s !== StoreType.Cookie;
      });
      var legacyUser = this.legacyUserStore.get(defaults.cookie.oldKey);
      if (legacyUser && typeof legacyUser === "object") {
        legacyUser.id && this.id(legacyUser.id);
        legacyUser.traits && this.traits(legacyUser.traits);
      }
      bindAll(this);
    }
    User2.prototype.legacySIO = function() {
      var val = this.legacyUserStore.get("_sio");
      if (!val) {
        return null;
      }
      var _a2 = val.split("----"), anon = _a2[0], user = _a2[1];
      return [anon, user];
    };
    User2.prototype.identify = function(id, traits) {
      if (this.options.disable) {
        return;
      }
      traits = traits !== null && traits !== void 0 ? traits : {};
      var currentId = this.id();
      if (currentId === null || currentId === id) {
        traits = __assign(__assign({}, this.traits()), traits);
      }
      if (id) {
        this.id(id);
      }
      this.traits(traits);
    };
    User2.prototype.logout = function() {
      this.anonymousId(null);
      this.id(null);
      this.traits({});
    };
    User2.prototype.reset = function() {
      this.logout();
      this.identityStore.clear(this.idKey);
      this.identityStore.clear(this.anonKey);
      this.traitsStore.clear(this.traitsKey);
    };
    User2.prototype.load = function() {
      return new User2(this.options, this.cookieOptions);
    };
    User2.prototype.save = function() {
      return true;
    };
    User2.prototype.createStorage = function(options, cookieOpts, filterStores) {
      var stores = [
        StoreType.LocalStorage,
        StoreType.Cookie,
        StoreType.Memory
      ];
      if (options.disable) {
        return new UniversalStorage([]);
      }
      if (!options.persist) {
        return new UniversalStorage([new MemoryStorage()]);
      }
      if (options.storage !== void 0 && options.storage !== null) {
        if (isArrayOfStoreType(options.storage)) {
          stores = options.storage.stores;
        }
      }
      if (options.localStorageFallbackDisabled) {
        stores = stores.filter(function(s) {
          return s !== StoreType.LocalStorage;
        });
      }
      if (filterStores) {
        stores = stores.filter(filterStores);
      }
      return new UniversalStorage(initializeStorages(applyCookieOptions(stores, cookieOpts)));
    };
    User2.defaults = defaults;
    return User2;
  }()
);
var groupDefaults = {
  persist: true,
  cookie: {
    key: "ajs_group_id"
  },
  localStorage: {
    key: "ajs_group_properties"
  }
};
var Group = (
  /** @class */
  function(_super) {
    __extends(Group2, _super);
    function Group2(options, cookie) {
      if (options === void 0) {
        options = groupDefaults;
      }
      var _this = _super.call(this, __assign(__assign({}, groupDefaults), options), cookie) || this;
      _this.anonymousId = function(_id) {
        return void 0;
      };
      bindAll(_this);
      return _this;
    }
    return Group2;
  }(User)
);

// node_modules/@segment/analytics-next/dist/pkg/lib/is-thenable.js
var isThenable = function(value) {
  return typeof value === "object" && value !== null && "then" in value && typeof value.then === "function";
};

// node_modules/@segment/analytics-next/dist/pkg/core/buffer/index.js
var flushSyncAnalyticsCalls = function(name, analytics, buffer) {
  buffer.getCalls(name).forEach(function(c) {
    callAnalyticsMethod(analytics, c).catch(console.error);
  });
};
var flushAddSourceMiddleware = function(analytics, buffer) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _i, _a2, c;
    return __generator(this, function(_b2) {
      switch (_b2.label) {
        case 0:
          _i = 0, _a2 = buffer.getCalls("addSourceMiddleware");
          _b2.label = 1;
        case 1:
          if (!(_i < _a2.length))
            return [3, 4];
          c = _a2[_i];
          return [4, callAnalyticsMethod(analytics, c).catch(console.error)];
        case 2:
          _b2.sent();
          _b2.label = 3;
        case 3:
          _i++;
          return [3, 1];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
};
var flushOn = flushSyncAnalyticsCalls.bind(void 0, "on");
var flushSetAnonymousID = flushSyncAnalyticsCalls.bind(void 0, "setAnonymousId");
var flushAnalyticsCallsInNewTask = function(analytics, buffer) {
  buffer.toArray().forEach(function(m) {
    setTimeout(function() {
      callAnalyticsMethod(analytics, m).catch(console.error);
    }, 0);
  });
};
var popPageContext = function(args) {
  if (hasBufferedPageContextAsLastArg(args)) {
    var ctx = args.pop();
    return createPageContext(ctx);
  }
};
var hasBufferedPageContextAsLastArg = function(args) {
  var lastArg = args[args.length - 1];
  return isBufferedPageContext(lastArg);
};
var PreInitMethodCall = (
  /** @class */
  /* @__PURE__ */ function() {
    function PreInitMethodCall2(method, args, resolve, reject) {
      if (resolve === void 0) {
        resolve = function() {
        };
      }
      if (reject === void 0) {
        reject = console.error;
      }
      this.method = method;
      this.resolve = resolve;
      this.reject = reject;
      this.called = false;
      this.args = args;
    }
    return PreInitMethodCall2;
  }()
);
var PreInitMethodCallBuffer = (
  /** @class */
  function() {
    function PreInitMethodCallBuffer2() {
      var calls = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        calls[_i] = arguments[_i];
      }
      this._callMap = {};
      this.push.apply(this, calls);
    }
    Object.defineProperty(PreInitMethodCallBuffer2.prototype, "calls", {
      /**
       * Pull any buffered method calls from the window object, and use them to hydrate the instance buffer.
       */
      get: function() {
        this._pushSnippetWindowBuffer();
        return this._callMap;
      },
      set: function(calls) {
        this._callMap = calls;
      },
      enumerable: false,
      configurable: true
    });
    PreInitMethodCallBuffer2.prototype.getCalls = function(methodName) {
      var _a2;
      return (_a2 = this.calls[methodName]) !== null && _a2 !== void 0 ? _a2 : [];
    };
    PreInitMethodCallBuffer2.prototype.push = function() {
      var _this = this;
      var calls = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        calls[_i] = arguments[_i];
      }
      calls.forEach(function(call) {
        var eventsExpectingPageContext = [
          "track",
          "screen",
          "alias",
          "group",
          "page",
          "identify"
        ];
        if (eventsExpectingPageContext.includes(call.method) && !hasBufferedPageContextAsLastArg(call.args)) {
          call.args = __spreadArray(__spreadArray([], call.args, true), [getDefaultBufferedPageContext()], false);
        }
        if (_this.calls[call.method]) {
          _this.calls[call.method].push(call);
        } else {
          _this.calls[call.method] = [call];
        }
      });
    };
    PreInitMethodCallBuffer2.prototype.clear = function() {
      this._pushSnippetWindowBuffer();
      this.calls = {};
    };
    PreInitMethodCallBuffer2.prototype.toArray = function() {
      var _a2;
      return (_a2 = []).concat.apply(_a2, Object.values(this.calls));
    };
    PreInitMethodCallBuffer2.prototype._pushSnippetWindowBuffer = function() {
      var wa = getGlobalAnalytics();
      if (!Array.isArray(wa))
        return void 0;
      var buffered = wa.splice(0, wa.length);
      var calls = buffered.map(function(_a2) {
        var methodName = _a2[0], args = _a2.slice(1);
        return new PreInitMethodCall(methodName, args);
      });
      this.push.apply(this, calls);
    };
    return PreInitMethodCallBuffer2;
  }()
);
function callAnalyticsMethod(analytics, call) {
  return __awaiter(this, void 0, void 0, function() {
    var result, err_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 3, , 4]);
          if (call.called) {
            return [2, void 0];
          }
          call.called = true;
          result = analytics[call.method].apply(analytics, call.args);
          if (!isThenable(result))
            return [3, 2];
          return [4, result];
        case 1:
          _a2.sent();
          _a2.label = 2;
        case 2:
          call.resolve(result);
          return [3, 4];
        case 3:
          err_1 = _a2.sent();
          call.reject(err_1);
          return [3, 4];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
var AnalyticsBuffered = (
  /** @class */
  function() {
    function AnalyticsBuffered2(loader) {
      var _this = this;
      this.trackSubmit = this._createMethod("trackSubmit");
      this.trackClick = this._createMethod("trackClick");
      this.trackLink = this._createMethod("trackLink");
      this.pageView = this._createMethod("pageview");
      this.identify = this._createMethod("identify");
      this.reset = this._createMethod("reset");
      this.group = this._createMethod("group");
      this.track = this._createMethod("track");
      this.ready = this._createMethod("ready");
      this.alias = this._createMethod("alias");
      this.debug = this._createChainableMethod("debug");
      this.page = this._createMethod("page");
      this.once = this._createChainableMethod("once");
      this.off = this._createChainableMethod("off");
      this.on = this._createChainableMethod("on");
      this.addSourceMiddleware = this._createMethod("addSourceMiddleware");
      this.setAnonymousId = this._createMethod("setAnonymousId");
      this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware");
      this.screen = this._createMethod("screen");
      this.register = this._createMethod("register");
      this.deregister = this._createMethod("deregister");
      this.user = this._createMethod("user");
      this.VERSION = version;
      this._preInitBuffer = new PreInitMethodCallBuffer();
      this._promise = loader(this._preInitBuffer);
      this._promise.then(function(_a2) {
        var ajs = _a2[0], ctx = _a2[1];
        _this.instance = ajs;
        _this.ctx = ctx;
      }).catch(function() {
      });
    }
    AnalyticsBuffered2.prototype.then = function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a2 = this._promise).then.apply(_a2, args);
    };
    AnalyticsBuffered2.prototype.catch = function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a2 = this._promise).catch.apply(_a2, args);
    };
    AnalyticsBuffered2.prototype.finally = function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a2 = this._promise).finally.apply(_a2, args);
    };
    AnalyticsBuffered2.prototype._createMethod = function(methodName) {
      var _this = this;
      return function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (_this.instance) {
          var result = (_a2 = _this.instance)[methodName].apply(_a2, args);
          return Promise.resolve(result);
        }
        return new Promise(function(resolve, reject) {
          _this._preInitBuffer.push(new PreInitMethodCall(methodName, args, resolve, reject));
        });
      };
    };
    AnalyticsBuffered2.prototype._createChainableMethod = function(methodName) {
      var _this = this;
      return function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (_this.instance) {
          void (_a2 = _this.instance)[methodName].apply(_a2, args);
          return _this;
        } else {
          _this._preInitBuffer.push(new PreInitMethodCall(methodName, args));
        }
        return _this;
      };
    };
    return AnalyticsBuffered2;
  }()
);

// node_modules/@segment/analytics-next/dist/pkg/core/analytics/index.js
var deprecationWarning = "This is being deprecated and will be not be available in future releases of Analytics JS";
var global = getGlobal();
var _analytics = global === null || global === void 0 ? void 0 : global.analytics;
function createDefaultQueue(name, retryQueue, disablePersistance) {
  if (retryQueue === void 0) {
    retryQueue = false;
  }
  if (disablePersistance === void 0) {
    disablePersistance = false;
  }
  var maxAttempts = retryQueue ? 10 : 1;
  var priorityQueue = disablePersistance ? new PriorityQueue(maxAttempts, []) : new PersistedPriorityQueue(maxAttempts, name);
  return new EventQueue(priorityQueue);
}
function _stub() {
  console.warn(deprecationWarning);
}
var Analytics = (
  /** @class */
  function(_super) {
    __extends(Analytics2, _super);
    function Analytics2(settings, options, queue, user, group) {
      var _this = this;
      var _a2, _b2, _c;
      _this = _super.call(this) || this;
      _this._debug = false;
      _this.initialized = false;
      _this.user = function() {
        return _this._user;
      };
      _this.init = _this.initialize.bind(_this);
      _this.log = _stub;
      _this.addIntegrationMiddleware = _stub;
      _this.listeners = _stub;
      _this.addEventListener = _stub;
      _this.removeAllListeners = _stub;
      _this.removeListener = _stub;
      _this.removeEventListener = _stub;
      _this.hasListeners = _stub;
      _this.add = _stub;
      _this.addIntegration = _stub;
      var cookieOptions2 = options === null || options === void 0 ? void 0 : options.cookie;
      var disablePersistance = (_a2 = options === null || options === void 0 ? void 0 : options.disableClientPersistence) !== null && _a2 !== void 0 ? _a2 : false;
      _this.settings = settings;
      _this.settings.timeout = (_b2 = _this.settings.timeout) !== null && _b2 !== void 0 ? _b2 : 300;
      _this.queue = queue !== null && queue !== void 0 ? queue : createDefaultQueue("".concat(settings.writeKey, ":event-queue"), options === null || options === void 0 ? void 0 : options.retryQueue, disablePersistance);
      var storageSetting = options === null || options === void 0 ? void 0 : options.storage;
      _this._universalStorage = _this.createStore(disablePersistance, storageSetting, cookieOptions2);
      _this._user = user !== null && user !== void 0 ? user : new User(__assign({ persist: !disablePersistance, storage: options === null || options === void 0 ? void 0 : options.storage }, options === null || options === void 0 ? void 0 : options.user), cookieOptions2).load();
      _this._group = group !== null && group !== void 0 ? group : new Group(__assign({ persist: !disablePersistance, storage: options === null || options === void 0 ? void 0 : options.storage }, options === null || options === void 0 ? void 0 : options.group), cookieOptions2).load();
      _this.eventFactory = new EventFactory(_this._user);
      _this.integrations = (_c = options === null || options === void 0 ? void 0 : options.integrations) !== null && _c !== void 0 ? _c : {};
      _this.options = options !== null && options !== void 0 ? options : {};
      bindAll(_this);
      return _this;
    }
    Analytics2.prototype.createStore = function(disablePersistance, storageSetting, cookieOptions2) {
      if (disablePersistance) {
        return new UniversalStorage([new MemoryStorage()]);
      } else {
        if (storageSetting) {
          if (isArrayOfStoreType(storageSetting)) {
            return new UniversalStorage(initializeStorages(applyCookieOptions(storageSetting.stores, cookieOptions2)));
          }
        }
      }
      return new UniversalStorage(initializeStorages([
        StoreType.LocalStorage,
        {
          name: StoreType.Cookie,
          settings: cookieOptions2
        },
        StoreType.Memory
      ]));
    };
    Object.defineProperty(Analytics2.prototype, "storage", {
      get: function() {
        return this._universalStorage;
      },
      enumerable: false,
      configurable: true
    });
    Analytics2.prototype.track = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var pageCtx, _a2, name, data, opts, cb, segmentEvent;
        var _this = this;
        return __generator(this, function(_b2) {
          pageCtx = popPageContext(args);
          _a2 = resolveArguments.apply(void 0, args), name = _a2[0], data = _a2[1], opts = _a2[2], cb = _a2[3];
          segmentEvent = this.eventFactory.track(name, data, opts, this.integrations, pageCtx);
          return [2, this._dispatch(segmentEvent, cb).then(function(ctx) {
            _this.emit("track", name, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.page = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var pageCtx, _a2, category, page, properties, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b2) {
          pageCtx = popPageContext(args);
          _a2 = resolvePageArguments.apply(void 0, args), category = _a2[0], page = _a2[1], properties = _a2[2], options = _a2[3], callback = _a2[4];
          segmentEvent = this.eventFactory.page(category, page, properties, options, this.integrations, pageCtx);
          return [2, this._dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("page", category, page, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.identify = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var pageCtx, _a2, id, _traits, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b2) {
          pageCtx = popPageContext(args);
          _a2 = resolveUserArguments(this._user).apply(void 0, args), id = _a2[0], _traits = _a2[1], options = _a2[2], callback = _a2[3];
          this._user.identify(id, _traits);
          segmentEvent = this.eventFactory.identify(this._user.id(), this._user.traits(), options, this.integrations, pageCtx);
          return [2, this._dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("identify", ctx.event.userId, ctx.event.traits, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.group = function() {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var pageCtx = popPageContext(args);
      if (args.length === 0) {
        return this._group;
      }
      var _a2 = resolveUserArguments(this._group).apply(void 0, args), id = _a2[0], _traits = _a2[1], options = _a2[2], callback = _a2[3];
      this._group.identify(id, _traits);
      var groupId = this._group.id();
      var groupTraits = this._group.traits();
      var segmentEvent = this.eventFactory.group(groupId, groupTraits, options, this.integrations, pageCtx);
      return this._dispatch(segmentEvent, callback).then(function(ctx) {
        _this.emit("group", ctx.event.groupId, ctx.event.traits, ctx.event.options);
        return ctx;
      });
    };
    Analytics2.prototype.alias = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var pageCtx, _a2, to, from, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b2) {
          pageCtx = popPageContext(args);
          _a2 = resolveAliasArguments.apply(void 0, args), to = _a2[0], from = _a2[1], options = _a2[2], callback = _a2[3];
          segmentEvent = this.eventFactory.alias(to, from, options, this.integrations, pageCtx);
          return [2, this._dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("alias", to, from, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.screen = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var pageCtx, _a2, category, page, properties, options, callback, segmentEvent;
        var _this = this;
        return __generator(this, function(_b2) {
          pageCtx = popPageContext(args);
          _a2 = resolvePageArguments.apply(void 0, args), category = _a2[0], page = _a2[1], properties = _a2[2], options = _a2[3], callback = _a2[4];
          segmentEvent = this.eventFactory.screen(category, page, properties, options, this.integrations, pageCtx);
          return [2, this._dispatch(segmentEvent, callback).then(function(ctx) {
            _this.emit("screen", category, page, ctx.event.properties, ctx.event.options);
            return ctx;
          })];
        });
      });
    };
    Analytics2.prototype.trackClick = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a2;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              return [4, import(
                /* webpackChunkName: "auto-track" */
                "./auto-track-DTOGYGS3.js"
              )];
            case 1:
              autotrack = _b2.sent();
              return [2, (_a2 = autotrack.link).call.apply(_a2, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackLink = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a2;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              return [4, import(
                /* webpackChunkName: "auto-track" */
                "./auto-track-DTOGYGS3.js"
              )];
            case 1:
              autotrack = _b2.sent();
              return [2, (_a2 = autotrack.link).call.apply(_a2, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackSubmit = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a2;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              return [4, import(
                /* webpackChunkName: "auto-track" */
                "./auto-track-DTOGYGS3.js"
              )];
            case 1:
              autotrack = _b2.sent();
              return [2, (_a2 = autotrack.form).call.apply(_a2, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.trackForm = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var autotrack;
        var _a2;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              return [4, import(
                /* webpackChunkName: "auto-track" */
                "./auto-track-DTOGYGS3.js"
              )];
            case 1:
              autotrack = _b2.sent();
              return [2, (_a2 = autotrack.form).call.apply(_a2, __spreadArray([this], args, false))];
          }
        });
      });
    };
    Analytics2.prototype.register = function() {
      var plugins = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        plugins[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var ctx, registrations;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              ctx = Context.system();
              registrations = plugins.map(function(xt) {
                return _this.queue.register(ctx, xt, _this);
              });
              return [4, Promise.all(registrations)];
            case 1:
              _a2.sent();
              return [2, ctx];
          }
        });
      });
    };
    Analytics2.prototype.deregister = function() {
      var plugins = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        plugins[_i] = arguments[_i];
      }
      return __awaiter(this, void 0, void 0, function() {
        var ctx, deregistrations;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              ctx = Context.system();
              deregistrations = plugins.map(function(pl) {
                var plugin = _this.queue.plugins.find(function(p) {
                  return p.name === pl;
                });
                if (plugin) {
                  return _this.queue.deregister(ctx, plugin, _this);
                } else {
                  ctx.log("warn", "plugin ".concat(pl, " not found"));
                }
              });
              return [4, Promise.all(deregistrations)];
            case 1:
              _a2.sent();
              return [2, ctx];
          }
        });
      });
    };
    Analytics2.prototype.debug = function(toggle) {
      if (toggle === false && localStorage.getItem("debug")) {
        localStorage.removeItem("debug");
      }
      this._debug = toggle;
      return this;
    };
    Analytics2.prototype.reset = function() {
      this._user.reset();
      this._group.reset();
      this.emit("reset");
    };
    Analytics2.prototype.timeout = function(timeout) {
      this.settings.timeout = timeout;
    };
    Analytics2.prototype._dispatch = function(event, callback) {
      return __awaiter(this, void 0, void 0, function() {
        var ctx;
        return __generator(this, function(_a2) {
          ctx = new Context(event);
          if (isOffline() && !this.options.retryQueue) {
            return [2, ctx];
          }
          return [2, dispatch(ctx, this.queue, this, {
            callback,
            debug: this._debug,
            timeout: this.settings.timeout
          })];
        });
      });
    };
    Analytics2.prototype.addSourceMiddleware = function(fn) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.queue.criticalTasks.run(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var sourceMiddlewarePlugin, integrations, plugin;
                  return __generator(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        return [4, import(
                          /* webpackChunkName: "middleware" */
                          "./middleware-K5V45XC3.js"
                        )];
                      case 1:
                        sourceMiddlewarePlugin = _a3.sent().sourceMiddlewarePlugin;
                        integrations = {};
                        this.queue.plugins.forEach(function(plugin2) {
                          if (plugin2.type === "destination") {
                            return integrations[plugin2.name] = true;
                          }
                        });
                        plugin = sourceMiddlewarePlugin(fn, integrations);
                        return [4, this.register(plugin)];
                      case 2:
                        _a3.sent();
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                });
              })];
            case 1:
              _a2.sent();
              return [2, this];
          }
        });
      });
    };
    Analytics2.prototype.addDestinationMiddleware = function(integrationName) {
      var middlewares = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        middlewares[_i - 1] = arguments[_i];
      }
      var legacyDestinations = this.queue.plugins.filter(function(xt) {
        return xt.name.toLowerCase() === integrationName.toLowerCase();
      });
      legacyDestinations.forEach(function(destination) {
        destination.addMiddleware.apply(destination, middlewares);
      });
      return Promise.resolve(this);
    };
    Analytics2.prototype.setAnonymousId = function(id) {
      return this._user.anonymousId(id);
    };
    Analytics2.prototype.queryString = function(query) {
      return __awaiter(this, void 0, void 0, function() {
        var queryString;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (this.options.useQueryString === false) {
                return [2, []];
              }
              return [4, import(
                /* webpackChunkName: "queryString" */
                "./query-string-3LNWNXJY.js"
              )];
            case 1:
              queryString = _a2.sent().queryString;
              return [2, queryString(this, query)];
          }
        });
      });
    };
    Analytics2.prototype.use = function(legacyPluginFactory) {
      legacyPluginFactory(this);
      return this;
    };
    Analytics2.prototype.ready = function(callback) {
      if (callback === void 0) {
        callback = function(res) {
          return res;
        };
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          return [2, Promise.all(this.queue.plugins.map(function(i) {
            return i.ready ? i.ready() : Promise.resolve();
          })).then(function(res) {
            callback(res);
            return res;
          })];
        });
      });
    };
    Analytics2.prototype.noConflict = function() {
      console.warn(deprecationWarning);
      setGlobalAnalytics(_analytics !== null && _analytics !== void 0 ? _analytics : this);
      return this;
    };
    Analytics2.prototype.normalize = function(msg) {
      console.warn(deprecationWarning);
      return this.eventFactory.normalize(msg);
    };
    Object.defineProperty(Analytics2.prototype, "failedInitializations", {
      get: function() {
        console.warn(deprecationWarning);
        return this.queue.failedInitializations;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Analytics2.prototype, "VERSION", {
      get: function() {
        return version;
      },
      enumerable: false,
      configurable: true
    });
    Analytics2.prototype.initialize = function(_settings, _options) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          console.warn(deprecationWarning);
          return [2, Promise.resolve(this)];
        });
      });
    };
    Analytics2.prototype.pageview = function(url) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              console.warn(deprecationWarning);
              return [4, this.page({ path: url })];
            case 1:
              _a2.sent();
              return [2, this];
          }
        });
      });
    };
    Object.defineProperty(Analytics2.prototype, "plugins", {
      get: function() {
        var _a2;
        console.warn(deprecationWarning);
        return (_a2 = this._plugins) !== null && _a2 !== void 0 ? _a2 : {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Analytics2.prototype, "Integrations", {
      get: function() {
        console.warn(deprecationWarning);
        var integrations = this.queue.plugins.filter(function(plugin) {
          return plugin.type === "destination";
        }).reduce(function(acc, plugin) {
          var name = "".concat(plugin.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration");
          var integration = window[name];
          if (!integration) {
            return acc;
          }
          var nested = integration.Integration;
          if (nested) {
            acc[plugin.name] = nested;
            return acc;
          }
          acc[plugin.name] = integration;
          return acc;
        }, {});
        return integrations;
      },
      enumerable: false,
      configurable: true
    });
    Analytics2.prototype.push = function(args) {
      var an = this;
      var method = args.shift();
      if (method) {
        if (!an[method])
          return;
      }
      an[method].apply(this, args);
    };
    return Analytics2;
  }(Emitter)
);
var NullAnalytics = (
  /** @class */
  function(_super) {
    __extends(NullAnalytics2, _super);
    function NullAnalytics2() {
      var _this = _super.call(this, { writeKey: "" }, { disableClientPersistence: true }) || this;
      _this.initialized = true;
      return _this;
    }
    return NullAnalytics2;
  }(Analytics)
);

// node_modules/@segment/analytics-next/dist/pkg/lib/get-process-env.js
function getProcessEnv() {
  if (typeof process === "undefined" || !process.env) {
    return {};
  }
  return process.env;
}

// node_modules/@segment/analytics-next/dist/pkg/lib/client-hints/index.js
function clientHints(hints) {
  return __awaiter(this, void 0, void 0, function() {
    var userAgentData;
    return __generator(this, function(_a2) {
      userAgentData = navigator.userAgentData;
      if (!userAgentData)
        return [2, void 0];
      if (!hints)
        return [2, userAgentData.toJSON()];
      return [2, userAgentData.getHighEntropyValues(hints).catch(function() {
        return userAgentData.toJSON();
      })];
    });
  });
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/env-enrichment/index.js
var cookieOptions;
function getCookieOptions() {
  if (cookieOptions) {
    return cookieOptions;
  }
  var domain = tld(window.location.href);
  cookieOptions = {
    expires: 31536e6,
    secure: false,
    path: "/"
  };
  if (domain) {
    cookieOptions.domain = domain;
  }
  return cookieOptions;
}
function ads(query) {
  var queryIds = {
    btid: "dataxu",
    urid: "millennial-media"
  };
  if (query.startsWith("?")) {
    query = query.substring(1);
  }
  query = query.replace(/\?/g, "&");
  var parts = query.split("&");
  for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
    var part = parts_1[_i];
    var _a2 = part.split("="), k = _a2[0], v = _a2[1];
    if (queryIds[k]) {
      return {
        id: v,
        type: queryIds[k]
      };
    }
  }
}
function utm(query) {
  if (query.startsWith("?")) {
    query = query.substring(1);
  }
  query = query.replace(/\?/g, "&");
  return query.split("&").reduce(function(acc, str) {
    var _a2 = str.split("="), k = _a2[0], _b2 = _a2[1], v = _b2 === void 0 ? "" : _b2;
    if (k.includes("utm_") && k.length > 4) {
      var utmParam = k.slice(4);
      if (utmParam === "campaign") {
        utmParam = "name";
      }
      acc[utmParam] = gracefulDecodeURIComponent(v);
    }
    return acc;
  }, {});
}
function ampId() {
  var ampId2 = js_cookie_default.get("_ga");
  if (ampId2 && ampId2.startsWith("amp")) {
    return ampId2;
  }
}
function referrerId(query, ctx, disablePersistance) {
  var _a2;
  var storage = new UniversalStorage(disablePersistance ? [] : [new CookieStorage(getCookieOptions())]);
  var stored = storage.get("s:context.referrer");
  var ad = (_a2 = ads(query)) !== null && _a2 !== void 0 ? _a2 : stored;
  if (!ad) {
    return;
  }
  if (ctx) {
    ctx.referrer = __assign(__assign({}, ctx.referrer), ad);
  }
  storage.set("s:context.referrer", ad);
}
var objectToQueryString = function(obj) {
  try {
    var searchParams_1 = new URLSearchParams();
    Object.entries(obj).forEach(function(_a2) {
      var k = _a2[0], v = _a2[1];
      if (Array.isArray(v)) {
        v.forEach(function(value) {
          return searchParams_1.append(k, value);
        });
      } else {
        searchParams_1.append(k, v);
      }
    });
    return searchParams_1.toString();
  } catch (_a2) {
    return "";
  }
};
var EnvironmentEnrichmentPlugin = (
  /** @class */
  /* @__PURE__ */ function() {
    function EnvironmentEnrichmentPlugin2() {
      var _this = this;
      this.name = "Page Enrichment";
      this.type = "before";
      this.version = "0.1.0";
      this.isLoaded = function() {
        return true;
      };
      this.load = function(_ctx, instance) {
        return __awaiter(_this, void 0, void 0, function() {
          var _a2, _1;
          return __generator(this, function(_b2) {
            switch (_b2.label) {
              case 0:
                this.instance = instance;
                _b2.label = 1;
              case 1:
                _b2.trys.push([1, 3, , 4]);
                _a2 = this;
                return [4, clientHints(this.instance.options.highEntropyValuesClientHints)];
              case 2:
                _a2.userAgentData = _b2.sent();
                return [3, 4];
              case 3:
                _1 = _b2.sent();
                return [3, 4];
              case 4:
                return [2, Promise.resolve()];
            }
          });
        });
      };
      this.enrich = function(ctx) {
        var _a2, _b2;
        var evtCtx = ctx.event.context;
        var search = evtCtx.page.search || "";
        var query = typeof search === "object" ? objectToQueryString(search) : search;
        evtCtx.userAgent = navigator.userAgent;
        evtCtx.userAgentData = _this.userAgentData;
        var locale = navigator.userLanguage || navigator.language;
        if (typeof evtCtx.locale === "undefined" && typeof locale !== "undefined") {
          evtCtx.locale = locale;
        }
        (_a2 = evtCtx.library) !== null && _a2 !== void 0 ? _a2 : evtCtx.library = {
          name: "analytics.js",
          version: "".concat(getVersionType() === "web" ? "next" : "npm:next", "-").concat(version)
        };
        if (query && !evtCtx.campaign) {
          evtCtx.campaign = utm(query);
        }
        var amp = ampId();
        if (amp) {
          evtCtx.amp = { id: amp };
        }
        referrerId(query, evtCtx, (_b2 = _this.instance.options.disableClientPersistence) !== null && _b2 !== void 0 ? _b2 : false);
        try {
          evtCtx.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (_) {
        }
        return ctx;
      };
      this.track = this.enrich;
      this.identify = this.enrich;
      this.page = this.enrich;
      this.group = this.enrich;
      this.alias = this.enrich;
      this.screen = this.enrich;
    }
    return EnvironmentEnrichmentPlugin2;
  }()
);
var envEnrichment = new EnvironmentEnrichmentPlugin();

// node_modules/@segment/analytics-next/dist/pkg/plugins/remote-loader/index.js
var ActionDestination = (
  /** @class */
  function() {
    function ActionDestination2(name, action) {
      this.version = "1.0.0";
      this.alternativeNames = [];
      this.middleware = [];
      this.alias = this._createMethod("alias");
      this.group = this._createMethod("group");
      this.identify = this._createMethod("identify");
      this.page = this._createMethod("page");
      this.screen = this._createMethod("screen");
      this.track = this._createMethod("track");
      this.action = action;
      this.name = name;
      this.type = action.type;
      this.alternativeNames.push(action.name);
    }
    ActionDestination2.prototype.addMiddleware = function() {
      var _a2;
      var fn = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fn[_i] = arguments[_i];
      }
      if (this.type === "destination") {
        (_a2 = this.middleware).push.apply(_a2, fn);
      }
    };
    ActionDestination2.prototype.transform = function(ctx) {
      return __awaiter(this, void 0, void 0, function() {
        var modifiedEvent;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, applyDestinationMiddleware(this.name, ctx.event, this.middleware)];
            case 1:
              modifiedEvent = _a2.sent();
              if (modifiedEvent === null) {
                ctx.cancel(new ContextCancelation({
                  retry: false,
                  reason: "dropped by destination middleware"
                }));
              }
              return [2, new Context(modifiedEvent)];
          }
        });
      });
    };
    ActionDestination2.prototype._createMethod = function(methodName) {
      var _this = this;
      return function(ctx) {
        return __awaiter(_this, void 0, void 0, function() {
          var transformedContext, error_1;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                if (!this.action[methodName])
                  return [2, ctx];
                transformedContext = ctx;
                if (!(this.type === "destination"))
                  return [3, 2];
                return [4, this.transform(ctx)];
              case 1:
                transformedContext = _a2.sent();
                _a2.label = 2;
              case 2:
                _a2.trys.push([2, 4, , 5]);
                recordIntegrationMetric(ctx, {
                  integrationName: this.action.name,
                  methodName,
                  type: "action"
                });
                return [4, this.action[methodName](transformedContext)];
              case 3:
                _a2.sent();
                return [3, 5];
              case 4:
                error_1 = _a2.sent();
                recordIntegrationMetric(ctx, {
                  integrationName: this.action.name,
                  methodName,
                  type: "action",
                  didError: true
                });
                throw error_1;
              case 5:
                return [2, ctx];
            }
          });
        });
      };
    };
    ActionDestination2.prototype.isLoaded = function() {
      return this.action.isLoaded();
    };
    ActionDestination2.prototype.ready = function() {
      return this.action.ready ? this.action.ready() : Promise.resolve();
    };
    ActionDestination2.prototype.load = function(ctx, analytics) {
      return __awaiter(this, void 0, void 0, function() {
        var error_2;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              _a2.trys.push([0, 2, , 3]);
              recordIntegrationMetric(ctx, {
                integrationName: this.action.name,
                methodName: "load",
                type: "action"
              });
              return [4, this.action.load(ctx, analytics)];
            case 1:
              return [2, _a2.sent()];
            case 2:
              error_2 = _a2.sent();
              recordIntegrationMetric(ctx, {
                integrationName: this.action.name,
                methodName: "load",
                type: "action",
                didError: true
              });
              throw error_2;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ActionDestination2.prototype.unload = function(ctx, analytics) {
      var _a2, _b2;
      return (_b2 = (_a2 = this.action).unload) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, ctx, analytics);
    };
    return ActionDestination2;
  }()
);
function validate(pluginLike) {
  if (!Array.isArray(pluginLike)) {
    throw new Error("Not a valid list of plugins");
  }
  var required = ["load", "isLoaded", "name", "version", "type"];
  pluginLike.forEach(function(plugin) {
    required.forEach(function(method) {
      var _a2;
      if (plugin[method] === void 0) {
        throw new Error("Plugin: ".concat((_a2 = plugin.name) !== null && _a2 !== void 0 ? _a2 : "unknown", " missing required function ").concat(method));
      }
    });
  });
  return true;
}
function isPluginDisabled(userIntegrations, remotePlugin) {
  var creationNameEnabled = userIntegrations[remotePlugin.creationName];
  var currentNameEnabled = userIntegrations[remotePlugin.name];
  if (userIntegrations.All === false && !creationNameEnabled && !currentNameEnabled) {
    return true;
  }
  if (creationNameEnabled === false || currentNameEnabled === false) {
    return true;
  }
  return false;
}
function loadPluginFactory(remotePlugin, obfuscate) {
  return __awaiter(this, void 0, void 0, function() {
    var defaultCdn, cdn, urlSplit, name_1, obfuscatedURL, error_3;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          defaultCdn = new RegExp("https://cdn.segment.(com|build)");
          cdn = getCDN();
          if (!obfuscate)
            return [3, 6];
          urlSplit = remotePlugin.url.split("/");
          name_1 = urlSplit[urlSplit.length - 2];
          obfuscatedURL = remotePlugin.url.replace(name_1, btoa(name_1).replace(/=/g, ""));
          _a2.label = 1;
        case 1:
          _a2.trys.push([1, 3, , 5]);
          return [4, loadScript(obfuscatedURL.replace(defaultCdn, cdn))];
        case 2:
          _a2.sent();
          return [3, 5];
        case 3:
          error_3 = _a2.sent();
          return [4, loadScript(remotePlugin.url.replace(defaultCdn, cdn))];
        case 4:
          _a2.sent();
          return [3, 5];
        case 5:
          return [3, 8];
        case 6:
          return [4, loadScript(remotePlugin.url.replace(defaultCdn, cdn))];
        case 7:
          _a2.sent();
          _a2.label = 8;
        case 8:
          if (typeof window[remotePlugin.libraryName] === "function") {
            return [2, window[remotePlugin.libraryName]];
          }
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function remoteLoader(settings, userIntegrations, mergedIntegrations, obfuscate, routingMiddleware, pluginSources) {
  var _a2, _b2, _c;
  return __awaiter(this, void 0, void 0, function() {
    var allPlugins, routingRules, pluginPromises;
    var _this = this;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          allPlugins = [];
          routingRules = (_b2 = (_a2 = settings.middlewareSettings) === null || _a2 === void 0 ? void 0 : _a2.routingRules) !== null && _b2 !== void 0 ? _b2 : [];
          pluginPromises = ((_c = settings.remotePlugins) !== null && _c !== void 0 ? _c : []).map(function(remotePlugin) {
            return __awaiter(_this, void 0, void 0, function() {
              var pluginFactory, _a3, plugin, plugins, routing_1, error_4;
              return __generator(this, function(_b3) {
                switch (_b3.label) {
                  case 0:
                    if (isPluginDisabled(userIntegrations, remotePlugin))
                      return [
                        2
                        /*return*/
                      ];
                    _b3.label = 1;
                  case 1:
                    _b3.trys.push([1, 6, , 7]);
                    _a3 = pluginSources === null || pluginSources === void 0 ? void 0 : pluginSources.find(function(_a4) {
                      var pluginName = _a4.pluginName;
                      return pluginName === remotePlugin.name;
                    });
                    if (_a3)
                      return [3, 3];
                    return [4, loadPluginFactory(remotePlugin, obfuscate)];
                  case 2:
                    _a3 = _b3.sent();
                    _b3.label = 3;
                  case 3:
                    pluginFactory = _a3;
                    if (!pluginFactory)
                      return [3, 5];
                    return [4, pluginFactory(__assign(__assign({}, remotePlugin.settings), mergedIntegrations[remotePlugin.name]))];
                  case 4:
                    plugin = _b3.sent();
                    plugins = Array.isArray(plugin) ? plugin : [plugin];
                    validate(plugins);
                    routing_1 = routingRules.filter(function(rule) {
                      return rule.destinationName === remotePlugin.creationName;
                    });
                    plugins.forEach(function(plugin2) {
                      var wrapper = new ActionDestination(remotePlugin.creationName, plugin2);
                      if (routing_1.length && routingMiddleware && plugin2.type === "destination") {
                        wrapper.addMiddleware(routingMiddleware);
                      }
                      allPlugins.push(wrapper);
                    });
                    _b3.label = 5;
                  case 5:
                    return [3, 7];
                  case 6:
                    error_4 = _b3.sent();
                    console.warn("Failed to load Remote Plugin", error_4);
                    return [3, 7];
                  case 7:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
          return [4, Promise.all(pluginPromises)];
        case 1:
          _d.sent();
          return [2, allPlugins.filter(Boolean)];
      }
    });
  });
}

// node_modules/@segment/analytics-next/dist/pkg/lib/on-page-change.js
var onPageChange = function(cb) {
  var unloaded = false;
  window.addEventListener("pagehide", function() {
    if (unloaded)
      return;
    unloaded = true;
    cb(unloaded);
  });
  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState == "hidden") {
      if (unloaded)
        return;
      unloaded = true;
    } else {
      unloaded = false;
    }
    cb(unloaded);
  });
};

// node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/batched-dispatcher.js
var MAX_PAYLOAD_SIZE = 500;
function kilobytes(buffer) {
  var size = encodeURI(JSON.stringify(buffer)).split(/%..|./).length - 1;
  return size / 1024;
}
function approachingTrackingAPILimit(buffer) {
  return kilobytes(buffer) >= MAX_PAYLOAD_SIZE - 50;
}
function chunks(batch2) {
  var result = [];
  var index = 0;
  batch2.forEach(function(item) {
    var size = kilobytes(result[index]);
    if (size >= 64) {
      index++;
    }
    if (result[index]) {
      result[index].push(item);
    } else {
      result[index] = [item];
    }
  });
  return result;
}
function batch(apiHost, config) {
  var _a2, _b2;
  var buffer = [];
  var pageUnloaded = false;
  var limit = (_a2 = config === null || config === void 0 ? void 0 : config.size) !== null && _a2 !== void 0 ? _a2 : 10;
  var timeout = (_b2 = config === null || config === void 0 ? void 0 : config.timeout) !== null && _b2 !== void 0 ? _b2 : 5e3;
  function sendBatch(batch2) {
    var _a3;
    if (batch2.length === 0) {
      return;
    }
    var writeKey = (_a3 = batch2[0]) === null || _a3 === void 0 ? void 0 : _a3.writeKey;
    var updatedBatch = batch2.map(function(event) {
      var _a4 = event, sentAt = _a4.sentAt, newEvent = __rest(_a4, ["sentAt"]);
      return newEvent;
    });
    return fetch("https://".concat(apiHost, "/b"), {
      keepalive: pageUnloaded,
      headers: {
        "Content-Type": "text/plain"
      },
      method: "post",
      body: JSON.stringify({
        writeKey,
        batch: updatedBatch,
        sentAt: (/* @__PURE__ */ new Date()).toISOString()
      })
    });
  }
  function flush() {
    return __awaiter(this, void 0, void 0, function() {
      var batch_1;
      return __generator(this, function(_a3) {
        if (buffer.length) {
          batch_1 = buffer;
          buffer = [];
          return [2, sendBatch(batch_1)];
        }
        return [
          2
          /*return*/
        ];
      });
    });
  }
  var schedule;
  function scheduleFlush2() {
    if (schedule) {
      return;
    }
    schedule = setTimeout(function() {
      schedule = void 0;
      flush().catch(console.error);
    }, timeout);
  }
  onPageChange(function(unloaded) {
    pageUnloaded = unloaded;
    if (pageUnloaded && buffer.length) {
      var reqs = chunks(buffer).map(sendBatch);
      Promise.all(reqs).catch(console.error);
    }
  });
  function dispatch2(_url, body) {
    return __awaiter(this, void 0, void 0, function() {
      var bufferOverflow;
      return __generator(this, function(_a3) {
        buffer.push(body);
        bufferOverflow = buffer.length >= limit || approachingTrackingAPILimit(buffer);
        return [2, bufferOverflow || pageUnloaded ? flush() : scheduleFlush2()];
      });
    });
  }
  return {
    dispatch: dispatch2
  };
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/fetch-dispatcher.js
function fetch_dispatcher_default(config) {
  function dispatch2(url, body) {
    return fetch(url, {
      keepalive: config === null || config === void 0 ? void 0 : config.keepalive,
      headers: { "Content-Type": "text/plain" },
      method: "post",
      body: JSON.stringify(body)
    });
  }
  return {
    dispatch: dispatch2
  };
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/normalize.js
function normalize(analytics, json, settings, integrations) {
  var _a2;
  var user = analytics.user();
  delete json.options;
  json.writeKey = settings === null || settings === void 0 ? void 0 : settings.apiKey;
  json.userId = json.userId || user.id();
  json.anonymousId = json.anonymousId || user.anonymousId();
  json.sentAt = /* @__PURE__ */ new Date();
  var failed = analytics.queue.failedInitializations || [];
  if (failed.length > 0) {
    json._metadata = { failedInitializations: failed };
  }
  var bundled = [];
  var unbundled = [];
  for (var key in integrations) {
    var integration = integrations[key];
    if (key === "Segment.io") {
      bundled.push(key);
    }
    if (integration.bundlingStatus === "bundled") {
      bundled.push(key);
    }
    if (integration.bundlingStatus === "unbundled") {
      unbundled.push(key);
    }
  }
  for (var _i = 0, _b2 = (settings === null || settings === void 0 ? void 0 : settings.unbundledIntegrations) || []; _i < _b2.length; _i++) {
    var settingsUnbundled = _b2[_i];
    if (!unbundled.includes(settingsUnbundled)) {
      unbundled.push(settingsUnbundled);
    }
  }
  var configIds = (_a2 = settings === null || settings === void 0 ? void 0 : settings.maybeBundledConfigIds) !== null && _a2 !== void 0 ? _a2 : {};
  var bundledConfigIds = [];
  bundled.sort().forEach(function(name) {
    var _a3;
    ;
    ((_a3 = configIds[name]) !== null && _a3 !== void 0 ? _a3 : []).forEach(function(id) {
      bundledConfigIds.push(id);
    });
  });
  if ((settings === null || settings === void 0 ? void 0 : settings.addBundledMetadata) !== false) {
    json._metadata = __assign(__assign({}, json._metadata), { bundled: bundled.sort(), unbundled: unbundled.sort(), bundledIds: bundledConfigIds });
  }
  return json;
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/schedule-flush.js
function flushQueue(xt, queue) {
  return __awaiter(this, void 0, void 0, function() {
    var failedQueue;
    var _this = this;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          failedQueue = [];
          if (isOffline()) {
            return [2, queue];
          }
          return [
            4,
            pWhile(function() {
              return queue.length > 0 && !isOffline();
            }, function() {
              return __awaiter(_this, void 0, void 0, function() {
                var ctx, result, success;
                return __generator(this, function(_a3) {
                  switch (_a3.label) {
                    case 0:
                      ctx = queue.pop();
                      if (!ctx) {
                        return [
                          2
                          /*return*/
                        ];
                      }
                      return [4, attempt(ctx, xt)];
                    case 1:
                      result = _a3.sent();
                      success = result instanceof Context;
                      if (!success) {
                        failedQueue.push(ctx);
                      }
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            })
            // re-add failed tasks
          ];
        case 1:
          _a2.sent();
          failedQueue.map(function(failed) {
            return queue.pushWithBackoff(failed);
          });
          return [2, queue];
      }
    });
  });
}
function scheduleFlush(flushing, buffer, xt, scheduleFlush2) {
  var _this = this;
  if (flushing) {
    return;
  }
  setTimeout(function() {
    return __awaiter(_this, void 0, void 0, function() {
      var isFlushing, newBuffer;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            isFlushing = true;
            return [4, flushQueue(xt, buffer)];
          case 1:
            newBuffer = _a2.sent();
            isFlushing = false;
            if (buffer.todo > 0) {
              scheduleFlush2(isFlushing, newBuffer, xt, scheduleFlush2);
            }
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, Math.random() * 5e3);
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/segmentio/index.js
function onAlias(analytics, json) {
  var _a2, _b2, _c, _d;
  var user = analytics.user();
  json.previousId = (_c = (_b2 = (_a2 = json.previousId) !== null && _a2 !== void 0 ? _a2 : json.from) !== null && _b2 !== void 0 ? _b2 : user.id()) !== null && _c !== void 0 ? _c : user.anonymousId();
  json.userId = (_d = json.userId) !== null && _d !== void 0 ? _d : json.to;
  delete json.from;
  delete json.to;
  return json;
}
function segmentio(analytics, settings, integrations) {
  var _a2, _b2, _c;
  window.addEventListener("pagehide", function() {
    buffer.push.apply(buffer, Array.from(inflightEvents));
    inflightEvents.clear();
  });
  var writeKey = (_a2 = settings === null || settings === void 0 ? void 0 : settings.apiKey) !== null && _a2 !== void 0 ? _a2 : "";
  var buffer = analytics.options.disableClientPersistence ? new PriorityQueue(analytics.queue.queue.maxAttempts, []) : new PersistedPriorityQueue(analytics.queue.queue.maxAttempts, "".concat(writeKey, ":dest-Segment.io"));
  var inflightEvents = /* @__PURE__ */ new Set();
  var flushing = false;
  var apiHost = (_b2 = settings === null || settings === void 0 ? void 0 : settings.apiHost) !== null && _b2 !== void 0 ? _b2 : SEGMENT_API_HOST;
  var protocol = (_c = settings === null || settings === void 0 ? void 0 : settings.protocol) !== null && _c !== void 0 ? _c : "https";
  var remote = "".concat(protocol, "://").concat(apiHost);
  var deliveryStrategy = settings === null || settings === void 0 ? void 0 : settings.deliveryStrategy;
  var client = (deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.strategy) === "batching" ? batch(apiHost, deliveryStrategy.config) : fetch_dispatcher_default(deliveryStrategy === null || deliveryStrategy === void 0 ? void 0 : deliveryStrategy.config);
  function send(ctx) {
    return __awaiter(this, void 0, void 0, function() {
      var path, json;
      return __generator(this, function(_a3) {
        if (isOffline()) {
          buffer.push(ctx);
          scheduleFlush(flushing, buffer, segmentio2, scheduleFlush);
          return [2, ctx];
        }
        inflightEvents.add(ctx);
        path = ctx.event.type.charAt(0);
        json = toFacade(ctx.event).json();
        if (ctx.event.type === "track") {
          delete json.traits;
        }
        if (ctx.event.type === "alias") {
          json = onAlias(analytics, json);
        }
        return [2, client.dispatch("".concat(remote, "/").concat(path), normalize(analytics, json, settings, integrations)).then(function() {
          return ctx;
        }).catch(function() {
          buffer.pushWithBackoff(ctx);
          scheduleFlush(flushing, buffer, segmentio2, scheduleFlush);
          return ctx;
        }).finally(function() {
          inflightEvents.delete(ctx);
        })];
      });
    });
  }
  var segmentio2 = {
    name: "Segment.io",
    type: "destination",
    version: "0.1.0",
    isLoaded: function() {
      return true;
    },
    load: function() {
      return Promise.resolve();
    },
    track: send,
    identify: send,
    page: send,
    alias: send,
    group: send,
    screen: send
  };
  if (buffer.todo) {
    scheduleFlush(flushing, buffer, segmentio2, scheduleFlush);
  }
  return segmentio2;
}

// node_modules/@segment/analytics-next/dist/pkg/plugins/validation/index.js
function validate2(ctx) {
  var _a2;
  var event = ctx.event;
  assertEventExists(event);
  assertEventType(event);
  if (event.type === "track") {
    assertTrackEventName(event);
  }
  var props = (_a2 = event.properties) !== null && _a2 !== void 0 ? _a2 : event.traits;
  if (event.type !== "alias" && !isPlainObject(props)) {
    throw new ValidationError(".properties", "is not an object");
  }
  assertUserIdentity(event);
  return ctx;
}
var validation = {
  name: "Event Validation",
  type: "before",
  version: "1.0.0",
  isLoaded: function() {
    return true;
  },
  load: function() {
    return Promise.resolve();
  },
  track: validate2,
  identify: validate2,
  page: validate2,
  alias: validate2,
  group: validate2,
  screen: validate2
};

// node_modules/@segment/analytics-next/dist/pkg/core/inspector/index.js
var _a;
var _b;
var env = getGlobal();
var inspectorHost = (_a = (_b = env)["__SEGMENT_INSPECTOR__"]) !== null && _a !== void 0 ? _a : _b["__SEGMENT_INSPECTOR__"] = {};
var attachInspector = function(analytics) {
  var _a2;
  return (_a2 = inspectorHost.attach) === null || _a2 === void 0 ? void 0 : _a2.call(inspectorHost, analytics);
};

// node_modules/@segment/analytics-next/dist/pkg/browser/index.js
function loadLegacySettings(writeKey, cdnURL) {
  var baseUrl = cdnURL !== null && cdnURL !== void 0 ? cdnURL : getCDN();
  return fetch("".concat(baseUrl, "/v1/projects/").concat(writeKey, "/settings")).then(function(res) {
    if (!res.ok) {
      return res.text().then(function(errorResponseMessage) {
        throw new Error(errorResponseMessage);
      });
    }
    return res.json();
  }).catch(function(err) {
    console.error(err.message);
    throw err;
  });
}
function hasLegacyDestinations(settings) {
  return getProcessEnv().NODE_ENV !== "test" && // just one integration means segmentio
  Object.keys(settings.integrations).length > 1;
}
function hasTsubMiddleware(settings) {
  var _a2, _b2, _c;
  return getProcessEnv().NODE_ENV !== "test" && ((_c = (_b2 = (_a2 = settings.middlewareSettings) === null || _a2 === void 0 ? void 0 : _a2.routingRules) === null || _b2 === void 0 ? void 0 : _b2.length) !== null && _c !== void 0 ? _c : 0) > 0;
}
function flushPreBuffer(analytics, buffer) {
  flushSetAnonymousID(analytics, buffer);
  flushOn(analytics, buffer);
}
function flushFinalBuffer(analytics, buffer) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, flushAddSourceMiddleware(analytics, buffer)];
        case 1:
          _a2.sent();
          flushAnalyticsCallsInNewTask(analytics, buffer);
          buffer.clear();
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function registerPlugins(writeKey, legacySettings, analytics, opts, options, pluginLikes, legacyIntegrationSources) {
  var _a2, _b2, _c;
  if (pluginLikes === void 0) {
    pluginLikes = [];
  }
  return __awaiter(this, void 0, void 0, function() {
    var plugins, pluginSources, tsubMiddleware, _d, legacyDestinations, _e, schemaFilter, _f, mergedSettings, remotePlugins, toRegister, shouldIgnoreSegmentio, _g, _h, ctx;
    var _this = this;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          plugins = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function(pluginLike) {
            return typeof pluginLike === "object";
          });
          pluginSources = pluginLikes === null || pluginLikes === void 0 ? void 0 : pluginLikes.filter(function(pluginLike) {
            return typeof pluginLike === "function" && typeof pluginLike.pluginName === "string";
          });
          if (!hasTsubMiddleware(legacySettings))
            return [3, 2];
          return [4, import(
            /* webpackChunkName: "tsub-middleware" */
            "./routing-middleware-IBVH7ZUY.js"
          ).then(function(mod) {
            return mod.tsubMiddleware(legacySettings.middlewareSettings.routingRules);
          })];
        case 1:
          _d = _j.sent();
          return [3, 3];
        case 2:
          _d = void 0;
          _j.label = 3;
        case 3:
          tsubMiddleware = _d;
          if (!(hasLegacyDestinations(legacySettings) || legacyIntegrationSources.length > 0))
            return [3, 5];
          return [4, import(
            /* webpackChunkName: "ajs-destination" */
            "./ajs-destination-LGNNC244.js"
          ).then(function(mod) {
            return mod.ajsDestinations(writeKey, legacySettings, analytics.integrations, opts, tsubMiddleware, legacyIntegrationSources);
          })];
        case 4:
          _e = _j.sent();
          return [3, 6];
        case 5:
          _e = [];
          _j.label = 6;
        case 6:
          legacyDestinations = _e;
          if (!legacySettings.legacyVideoPluginsEnabled)
            return [3, 8];
          return [4, import(
            /* webpackChunkName: "legacyVideos" */
            "./legacy-video-plugins-XTJT6SZL.js"
          ).then(function(mod) {
            return mod.loadLegacyVideoPlugins(analytics);
          })];
        case 7:
          _j.sent();
          _j.label = 8;
        case 8:
          if (!((_a2 = opts.plan) === null || _a2 === void 0 ? void 0 : _a2.track))
            return [3, 10];
          return [4, import(
            /* webpackChunkName: "schemaFilter" */
            "./schema-filter-WJD6NKW5.js"
          ).then(function(mod) {
            var _a3;
            return mod.schemaFilter((_a3 = opts.plan) === null || _a3 === void 0 ? void 0 : _a3.track, legacySettings);
          })];
        case 9:
          _f = _j.sent();
          return [3, 11];
        case 10:
          _f = void 0;
          _j.label = 11;
        case 11:
          schemaFilter = _f;
          mergedSettings = mergedOptions(legacySettings, options);
          return [4, remoteLoader(legacySettings, analytics.integrations, mergedSettings, options.obfuscate, tsubMiddleware, pluginSources).catch(function() {
            return [];
          })];
        case 12:
          remotePlugins = _j.sent();
          toRegister = __spreadArray(__spreadArray(__spreadArray([
            validation,
            envEnrichment
          ], plugins, true), legacyDestinations, true), remotePlugins, true);
          if (schemaFilter) {
            toRegister.push(schemaFilter);
          }
          shouldIgnoreSegmentio = ((_b2 = opts.integrations) === null || _b2 === void 0 ? void 0 : _b2.All) === false && !opts.integrations["Segment.io"] || opts.integrations && opts.integrations["Segment.io"] === false;
          if (!!shouldIgnoreSegmentio)
            return [3, 14];
          _h = (_g = toRegister).push;
          return [4, segmentio(analytics, mergedSettings["Segment.io"], legacySettings.integrations)];
        case 13:
          _h.apply(_g, [_j.sent()]);
          _j.label = 14;
        case 14:
          return [4, analytics.register.apply(analytics, toRegister)];
        case 15:
          ctx = _j.sent();
          if (!Object.entries((_c = legacySettings.enabledMiddleware) !== null && _c !== void 0 ? _c : {}).some(function(_a3) {
            var enabled = _a3[1];
            return enabled;
          }))
            return [3, 17];
          return [4, import(
            /* webpackChunkName: "remoteMiddleware" */
            "./remote-middleware-PKWJHPY4.js"
          ).then(function(_a3) {
            var remoteMiddlewares = _a3.remoteMiddlewares;
            return __awaiter(_this, void 0, void 0, function() {
              var middleware, promises;
              return __generator(this, function(_b3) {
                switch (_b3.label) {
                  case 0:
                    return [4, remoteMiddlewares(ctx, legacySettings, options.obfuscate)];
                  case 1:
                    middleware = _b3.sent();
                    promises = middleware.map(function(mdw) {
                      return analytics.addSourceMiddleware(mdw);
                    });
                    return [2, Promise.all(promises)];
                }
              });
            });
          })];
        case 16:
          _j.sent();
          _j.label = 17;
        case 17:
          return [2, ctx];
      }
    });
  });
}
function loadAnalytics(settings, options, preInitBuffer) {
  var _a2, _b2, _c, _d, _e, _f, _g;
  if (options === void 0) {
    options = {};
  }
  return __awaiter(this, void 0, void 0, function() {
    var legacySettings, _h, disabled, retryQueue, opts, analytics, plugins, classicIntegrations, ctx, search, hash, term;
    return __generator(this, function(_j) {
      switch (_j.label) {
        case 0:
          if (options.disable === true) {
            return [2, [new NullAnalytics(), Context.system()]];
          }
          if (options.globalAnalyticsKey)
            setGlobalAnalyticsKey(options.globalAnalyticsKey);
          if (settings.cdnURL)
            setGlobalCDNUrl(settings.cdnURL);
          if (options.initialPageview) {
            preInitBuffer.push(new PreInitMethodCall("page", []));
          }
          if (!((_a2 = settings.cdnSettings) !== null && _a2 !== void 0))
            return [3, 1];
          _h = _a2;
          return [3, 3];
        case 1:
          return [4, loadLegacySettings(settings.writeKey, settings.cdnURL)];
        case 2:
          _h = _j.sent();
          _j.label = 3;
        case 3:
          legacySettings = _h;
          if (options.updateCDNSettings) {
            legacySettings = options.updateCDNSettings(legacySettings);
          }
          if (!(typeof options.disable === "function"))
            return [3, 5];
          return [4, options.disable(legacySettings)];
        case 4:
          disabled = _j.sent();
          if (disabled) {
            return [2, [new NullAnalytics(), Context.system()]];
          }
          _j.label = 5;
        case 5:
          retryQueue = (_c = (_b2 = legacySettings.integrations["Segment.io"]) === null || _b2 === void 0 ? void 0 : _b2.retryQueue) !== null && _c !== void 0 ? _c : true;
          opts = __assign({ retryQueue }, options);
          analytics = new Analytics(settings, opts);
          attachInspector(analytics);
          plugins = (_d = settings.plugins) !== null && _d !== void 0 ? _d : [];
          classicIntegrations = (_e = settings.classicIntegrations) !== null && _e !== void 0 ? _e : [];
          Stats.initRemoteMetrics(legacySettings.metrics);
          flushPreBuffer(analytics, preInitBuffer);
          return [4, registerPlugins(settings.writeKey, legacySettings, analytics, opts, options, plugins, classicIntegrations)];
        case 6:
          ctx = _j.sent();
          search = (_f = window.location.search) !== null && _f !== void 0 ? _f : "";
          hash = (_g = window.location.hash) !== null && _g !== void 0 ? _g : "";
          term = search.length ? search : hash.replace(/(?=#).*(?=\?)/, "");
          if (!term.includes("ajs_"))
            return [3, 8];
          return [4, analytics.queryString(term).catch(console.error)];
        case 7:
          _j.sent();
          _j.label = 8;
        case 8:
          analytics.initialized = true;
          analytics.emit("initialize", settings, options);
          return [4, flushFinalBuffer(analytics, preInitBuffer)];
        case 9:
          _j.sent();
          return [2, [analytics, ctx]];
      }
    });
  });
}
var AnalyticsBrowser = (
  /** @class */
  function(_super) {
    __extends(AnalyticsBrowser2, _super);
    function AnalyticsBrowser2() {
      var _this = this;
      var _a2 = createDeferred(), loadStart = _a2.promise, resolveLoadStart = _a2.resolve;
      _this = _super.call(this, function(buffer) {
        return loadStart.then(function(_a3) {
          var settings = _a3[0], options = _a3[1];
          return loadAnalytics(settings, options, buffer);
        });
      }) || this;
      _this._resolveLoadStart = function(settings, options) {
        return resolveLoadStart([settings, options]);
      };
      return _this;
    }
    AnalyticsBrowser2.prototype.load = function(settings, options) {
      if (options === void 0) {
        options = {};
      }
      this._resolveLoadStart(settings, options);
      return this;
    };
    AnalyticsBrowser2.load = function(settings, options) {
      if (options === void 0) {
        options = {};
      }
      return new AnalyticsBrowser2().load(settings, options);
    };
    AnalyticsBrowser2.standalone = function(writeKey, options) {
      return AnalyticsBrowser2.load({ writeKey }, options).then(function(res) {
        return res[0];
      });
    };
    return AnalyticsBrowser2;
  }(AnalyticsBuffered)
);

// node_modules/@segment/analytics-next/dist/pkg/node/node.browser.js
var AnalyticsNode = (
  /** @class */
  function() {
    function AnalyticsNode2() {
    }
    AnalyticsNode2.load = function() {
      return Promise.reject(new Error("AnalyticsNode is not available in browsers."));
    };
    return AnalyticsNode2;
  }()
);
export {
  Analytics,
  AnalyticsBrowser,
  AnalyticsNode,
  Context,
  ContextCancelation,
  EventFactory,
  Group,
  NullAnalytics,
  UniversalStorage,
  User,
  getGlobalAnalytics,
  loadLegacySettings
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.1 | MIT *)
*/
//# sourceMappingURL=@segment_analytics-next.js.map
