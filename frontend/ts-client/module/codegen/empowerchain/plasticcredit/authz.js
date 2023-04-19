import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
function createBaseTransferAuthorization() {
  return {
    denom: "",
    maxCredits: Long.UZERO
  };
}
export const TransferAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.maxCredits.isZero()) {
      writer.uint32(16).uint64(message.maxCredits);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.maxCredits = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denom;
    const message = createBaseTransferAuthorization();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.maxCredits = object.maxCredits !== undefined && object.maxCredits !== null ? Long.fromValue(object.maxCredits) : Long.UZERO;
    return message;
  }
};