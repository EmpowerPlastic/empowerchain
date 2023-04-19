"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.ModuleCredential = exports.ModuleAccount = exports.BaseAccount = void 0;
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseBaseAccount() {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: _helpers.Long.UZERO,
    sequence: _helpers.Long.UZERO
  };
}
var BaseAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      _any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBaseAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseBaseAccount();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _any.Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? _helpers.Long.fromValue(object.accountNumber) : _helpers.Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.BaseAccount = BaseAccount;
function createBaseModuleAccount() {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}
var ModuleAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    var _iterator = _createForOfIteratorHelper(message.permissions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$permissions;
    var message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.permissions = ((_object$permissions = object.permissions) === null || _object$permissions === void 0 ? void 0 : _object$permissions.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ModuleAccount = ModuleAccount;
function createBaseModuleCredential() {
  return {
    moduleName: "",
    derivationKeys: []
  };
}
var ModuleCredential = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    var _iterator2 = _createForOfIteratorHelper(message.derivationKeys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(18).bytes(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleCredential();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.derivationKeys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moduleName, _object$derivationKey;
    var message = createBaseModuleCredential();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.derivationKeys = ((_object$derivationKey = object.derivationKeys) === null || _object$derivationKey === void 0 ? void 0 : _object$derivationKey.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ModuleCredential = ModuleCredential;
function createBaseParams() {
  return {
    maxMemoCharacters: _helpers.Long.UZERO,
    txSigLimit: _helpers.Long.UZERO,
    txSizeCostPerByte: _helpers.Long.UZERO,
    sigVerifyCostEd25519: _helpers.Long.UZERO,
    sigVerifyCostSecp256k1: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64();
          break;
        case 2:
          message.txSigLimit = reader.uint64();
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64();
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64();
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? _helpers.Long.fromValue(object.maxMemoCharacters) : _helpers.Long.UZERO;
    message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? _helpers.Long.fromValue(object.txSigLimit) : _helpers.Long.UZERO;
    message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? _helpers.Long.fromValue(object.txSizeCostPerByte) : _helpers.Long.UZERO;
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? _helpers.Long.fromValue(object.sigVerifyCostEd25519) : _helpers.Long.UZERO;
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? _helpers.Long.fromValue(object.sigVerifyCostSecp256k1) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;