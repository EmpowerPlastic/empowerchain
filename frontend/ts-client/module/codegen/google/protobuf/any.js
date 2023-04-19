import * as _m0 from "protobufjs/minimal";
function createBaseAny() {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}
export const Any = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$typeUrl, _object$value;
    const message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};