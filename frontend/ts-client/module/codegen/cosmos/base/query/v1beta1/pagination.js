import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */

function createBasePageRequest() {
  return {
    key: new Uint8Array(),
    offset: Long.UZERO,
    limit: Long.UZERO,
    countTotal: false,
    reverse: false
  };
}
export const PageRequest = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$key, _object$countTotal, _object$reverse;
    const message = createBasePageRequest();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? Long.fromValue(object.offset) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.countTotal = (_object$countTotal = object.countTotal) !== null && _object$countTotal !== void 0 ? _object$countTotal : false;
    message.reverse = (_object$reverse = object.reverse) !== null && _object$reverse !== void 0 ? _object$reverse : false;
    return message;
  }
};
function createBasePageResponse() {
  return {
    nextKey: new Uint8Array(),
    total: Long.UZERO
  };
}
export const PageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$nextKey;
    const message = createBasePageResponse();
    message.nextKey = (_object$nextKey = object.nextKey) !== null && _object$nextKey !== void 0 ? _object$nextKey : new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }
};