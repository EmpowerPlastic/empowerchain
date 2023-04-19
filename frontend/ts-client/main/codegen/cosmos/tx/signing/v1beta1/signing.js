"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureDescriptors = exports.SignatureDescriptor_Data_Single = exports.SignatureDescriptor_Data_Multi = exports.SignatureDescriptor_Data = exports.SignatureDescriptor = exports.SignModeSDKType = exports.SignMode = void 0;
exports.signModeFromJSON = signModeFromJSON;
exports.signModeToJSON = signModeToJSON;
var _multisig = require("../../../crypto/multisig/v1beta1/multisig");
var _any = require("../../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * SignMode represents a signing mode with its own security guarantees.
 * 
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
var SignMode;
/**
 * SignMode represents a signing mode with its own security guarantees.
 * 
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
exports.SignMode = SignMode;
(function (SignMode) {
  SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  SignMode[SignMode["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
  SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignMode[SignMode["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
  SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode || (exports.SignMode = SignMode = {}));
var SignModeSDKType;
exports.SignModeSDKType = SignModeSDKType;
(function (SignModeSDKType) {
  SignModeSDKType[SignModeSDKType["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  SignModeSDKType[SignModeSDKType["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  SignModeSDKType[SignModeSDKType["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  SignModeSDKType[SignModeSDKType["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
  SignModeSDKType[SignModeSDKType["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignModeSDKType[SignModeSDKType["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
  SignModeSDKType[SignModeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignModeSDKType || (exports.SignModeSDKType = SignModeSDKType = {}));
function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;
    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    case 191:
    case "SIGN_MODE_EIP_191":
      return SignMode.SIGN_MODE_EIP_191;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
function signModeToJSON(object) {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";
    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";
    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";
    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";
    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case SignMode.SIGN_MODE_EIP_191:
      return "SIGN_MODE_EIP_191";
    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */

function createBaseSignatureDescriptors() {
  return {
    signatures: []
  };
}
var SignatureDescriptors = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.signatures),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseSignatureDescriptors();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signatures;
    var message = createBaseSignatureDescriptors();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(function (e) {
      return SignatureDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SignatureDescriptors = SignatureDescriptors;
function createBaseSignatureDescriptor() {
  return {
    publicKey: undefined,
    data: undefined,
    sequence: _helpers.Long.UZERO
  };
}
var SignatureDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.publicKey !== undefined) {
      _any.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignatureDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;
        case 3:
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
    var message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? _any.Any.fromPartial(object.publicKey) : undefined;
    message.data = object.data !== undefined && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SignatureDescriptor = SignatureDescriptor;
function createBaseSignatureDescriptor_Data() {
  return {
    single: undefined,
    multi: undefined
  };
}
var SignatureDescriptor_Data = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.single !== undefined) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignatureDescriptor_Data();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== undefined && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};
exports.SignatureDescriptor_Data = SignatureDescriptor_Data;
function createBaseSignatureDescriptor_Data_Single() {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}
var SignatureDescriptor_Data_Single = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignatureDescriptor_Data_Single();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$mode, _object$signature;
    var message = createBaseSignatureDescriptor_Data_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  }
};
exports.SignatureDescriptor_Data_Single = SignatureDescriptor_Data_Single;
function createBaseSignatureDescriptor_Data_Multi() {
  return {
    bitarray: undefined,
    signatures: []
  };
}
var SignatureDescriptor_Data_Multi = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bitarray !== undefined) {
      _multisig.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.signatures),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseSignatureDescriptor_Data_Multi();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = _multisig.CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signatures2;
    var message = createBaseSignatureDescriptor_Data_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? _multisig.CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(function (e) {
      return SignatureDescriptor_Data.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SignatureDescriptor_Data_Multi = SignatureDescriptor_Data_Multi;