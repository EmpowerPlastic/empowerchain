"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageResponse = exports.PageRequest = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBasePageRequest() {
  return {
    key: new Uint8Array(),
    offset: _helpers.Long.UZERO,
    limit: _helpers.Long.UZERO,
    countTotal: false,
    reverse: false
  };
}
var PageRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = reader.uint64();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.countTotal = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$countTotal, _object$reverse;
    var message = createBasePageRequest();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? _helpers.Long.fromValue(object.offset) : _helpers.Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO;
    message.countTotal = (_object$countTotal = object.countTotal) !== null && _object$countTotal !== void 0 ? _object$countTotal : false;
    message.reverse = (_object$reverse = object.reverse) !== null && _object$reverse !== void 0 ? _object$reverse : false;
    return message;
  }
};
exports.PageRequest = PageRequest;
function createBasePageResponse() {
  return {
    nextKey: new Uint8Array(),
    total: _helpers.Long.UZERO
  };
}
var PageResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;
        case 2:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nextKey;
    var message = createBasePageResponse();
    message.nextKey = (_object$nextKey = object.nextKey) !== null && _object$nextKey !== void 0 ? _object$nextKey : new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? _helpers.Long.fromValue(object.total) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PageResponse = PageResponse;