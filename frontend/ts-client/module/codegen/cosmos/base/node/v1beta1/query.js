import * as _m0 from "protobufjs/minimal";
function createBaseConfigRequest() {
  return {};
}
export const ConfigRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseConfigRequest();
    return message;
  }
};
function createBaseConfigResponse() {
  return {
    minimumGasPrice: ""
  };
}
export const ConfigResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$minimumGasPri;
    const message = createBaseConfigResponse();
    message.minimumGasPrice = (_object$minimumGasPri = object.minimumGasPrice) !== null && _object$minimumGasPri !== void 0 ? _object$minimumGasPri : "";
    return message;
  }
};