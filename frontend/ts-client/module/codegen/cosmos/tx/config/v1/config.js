import * as _m0 from "protobufjs/minimal";
function createBaseConfig() {
  return {
    skipAnteHandler: false,
    skipPostHandler: false
  };
}
export const Config = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.skipAnteHandler === true) {
      writer.uint32(8).bool(message.skipAnteHandler);
    }
    if (message.skipPostHandler === true) {
      writer.uint32(16).bool(message.skipPostHandler);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skipAnteHandler = reader.bool();
          break;
        case 2:
          message.skipPostHandler = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$skipAnteHandl, _object$skipPostHandl;
    const message = createBaseConfig();
    message.skipAnteHandler = (_object$skipAnteHandl = object.skipAnteHandler) !== null && _object$skipAnteHandl !== void 0 ? _object$skipAnteHandl : false;
    message.skipPostHandler = (_object$skipPostHandl = object.skipPostHandler) !== null && _object$skipPostHandl !== void 0 ? _object$skipPostHandl : false;
    return message;
  }
};