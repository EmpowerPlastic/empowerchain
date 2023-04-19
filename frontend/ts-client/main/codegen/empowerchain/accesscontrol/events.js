"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventAccessRevoked = exports.EventAccessGranted = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseEventAccessGranted() {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
var EventAccessGranted = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventAccessGranted();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moduleName, _object$account, _object$msgType;
    var message = createBaseEventAccessGranted();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    return message;
  }
};
exports.EventAccessGranted = EventAccessGranted;
function createBaseEventAccessRevoked() {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
var EventAccessRevoked = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventAccessRevoked();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moduleName2, _object$account2, _object$msgType2;
    var message = createBaseEventAccessRevoked();
    message.moduleName = (_object$moduleName2 = object.moduleName) !== null && _object$moduleName2 !== void 0 ? _object$moduleName2 : "";
    message.account = (_object$account2 = object.account) !== null && _object$account2 !== void 0 ? _object$account2 : "";
    message.msgType = (_object$msgType2 = object.msgType) !== null && _object$msgType2 !== void 0 ? _object$msgType2 : "";
    return message;
  }
};
exports.EventAccessRevoked = EventAccessRevoked;