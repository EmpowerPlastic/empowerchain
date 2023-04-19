"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Equivocation = void 0;
var _timestamp = require("../../../google/protobuf/timestamp");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseEquivocation() {
  return {
    height: _helpers.Long.ZERO,
    time: undefined,
    power: _helpers.Long.ZERO,
    consensusAddress: ""
  };
}
var Equivocation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEquivocation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$time, _object$consensusAddr;
    var message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    message.consensusAddress = (_object$consensusAddr = object.consensusAddress) !== null && _object$consensusAddr !== void 0 ? _object$consensusAddr : "";
    return message;
  }
};
exports.Equivocation = Equivocation;