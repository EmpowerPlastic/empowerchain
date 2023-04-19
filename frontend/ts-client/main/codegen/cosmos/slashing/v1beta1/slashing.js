"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSigningInfo = exports.Params = void 0;
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseValidatorSigningInfo() {
  return {
    address: "",
    startHeight: _helpers.Long.ZERO,
    indexOffset: _helpers.Long.ZERO,
    jailedUntil: undefined,
    tombstoned: false,
    missedBlocksCounter: _helpers.Long.ZERO
  };
}
var ValidatorSigningInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (!message.indexOffset.isZero()) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missedBlocksCounter.isZero()) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64();
          break;
        case 3:
          message.indexOffset = reader.int64();
          break;
        case 4:
          message.jailedUntil = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$jailedUntil, _object$tombstoned;
    var message = createBaseValidatorSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? _helpers.Long.fromValue(object.startHeight) : _helpers.Long.ZERO;
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? _helpers.Long.fromValue(object.indexOffset) : _helpers.Long.ZERO;
    message.jailedUntil = (_object$jailedUntil = object.jailedUntil) !== null && _object$jailedUntil !== void 0 ? _object$jailedUntil : undefined;
    message.tombstoned = (_object$tombstoned = object.tombstoned) !== null && _object$tombstoned !== void 0 ? _object$tombstoned : false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? _helpers.Long.fromValue(object.missedBlocksCounter) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorSigningInfo = ValidatorSigningInfo;
function createBaseParams() {
  return {
    signedBlocksWindow: _helpers.Long.ZERO,
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: undefined,
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.signedBlocksWindow.isZero()) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      _duration.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
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
          message.signedBlocksWindow = reader.int64();
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$minSignedPerW, _object$slashFraction, _object$slashFraction2;
    var message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? _helpers.Long.fromValue(object.signedBlocksWindow) : _helpers.Long.ZERO;
    message.minSignedPerWindow = (_object$minSignedPerW = object.minSignedPerWindow) !== null && _object$minSignedPerW !== void 0 ? _object$minSignedPerW : new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? _duration.Duration.fromPartial(object.downtimeJailDuration) : undefined;
    message.slashFractionDoubleSign = (_object$slashFraction = object.slashFractionDoubleSign) !== null && _object$slashFraction !== void 0 ? _object$slashFraction : new Uint8Array();
    message.slashFractionDowntime = (_object$slashFraction2 = object.slashFractionDowntime) !== null && _object$slashFraction2 !== void 0 ? _object$slashFraction2 : new Uint8Array();
    return message;
  }
};
exports.Params = Params;