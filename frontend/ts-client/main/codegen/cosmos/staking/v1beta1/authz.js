"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StakeAuthorization_Validators = exports.StakeAuthorization = exports.AuthorizationTypeSDKType = exports.AuthorizationType = void 0;
exports.authorizationTypeFromJSON = authorizationTypeFromJSON;
exports.authorizationTypeToJSON = authorizationTypeToJSON;
var _coin = require("../../base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */
var AuthorizationType;
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */
exports.AuthorizationType = AuthorizationType;
(function (AuthorizationType) {
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (exports.AuthorizationType = AuthorizationType = {}));
var AuthorizationTypeSDKType;
exports.AuthorizationTypeSDKType = AuthorizationTypeSDKType;
(function (AuthorizationTypeSDKType) {
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationTypeSDKType || (exports.AuthorizationTypeSDKType = AuthorizationTypeSDKType = {}));
function authorizationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
function authorizationTypeToJSON(object) {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";
    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";
    case AuthorizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseStakeAuthorization() {
  return {
    maxTokens: undefined,
    allowList: undefined,
    denyList: undefined,
    authorizationType: 0
  };
}
var StakeAuthorization = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.maxTokens !== undefined) {
      _coin.Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowList !== undefined) {
      StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
    }
    if (message.denyList !== undefined) {
      StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokens = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 3:
          message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorizationType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authorization;
    var message = createBaseStakeAuthorization();
    message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? _coin.Coin.fromPartial(object.maxTokens) : undefined;
    message.allowList = object.allowList !== undefined && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
    message.denyList = object.denyList !== undefined && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
    message.authorizationType = (_object$authorization = object.authorizationType) !== null && _object$authorization !== void 0 ? _object$authorization : 0;
    return message;
  }
};
exports.StakeAuthorization = StakeAuthorization;
function createBaseStakeAuthorization_Validators() {
  return {
    address: []
  };
}
var StakeAuthorization_Validators = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.address),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
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
    var message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
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
    var message = createBaseStakeAuthorization_Validators();
    message.address = ((_object$address = object.address) === null || _object$address === void 0 ? void 0 : _object$address.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.StakeAuthorization_Validators = StakeAuthorization_Validators;