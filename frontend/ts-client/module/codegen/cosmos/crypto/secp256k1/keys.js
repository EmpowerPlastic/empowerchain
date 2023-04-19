import * as _m0 from "protobufjs/minimal";
function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBasePubKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    return message;
  }
};
function createBasePrivKey() {
  return {
    key: new Uint8Array()
  };
}
export const PrivKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBasePrivKey();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    return message;
  }
};