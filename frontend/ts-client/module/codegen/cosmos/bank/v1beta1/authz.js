import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseSendAuthorization() {
  return {
    spendLimit: [],
    allowList: []
  };
}
export const SendAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.spendLimit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.allowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$spendLimit, _object$allowList;
    const message = createBaseSendAuthorization();
    message.spendLimit = ((_object$spendLimit = object.spendLimit) === null || _object$spendLimit === void 0 ? void 0 : _object$spendLimit.map(e => Coin.fromPartial(e))) || [];
    message.allowList = ((_object$allowList = object.allowList) === null || _object$allowList === void 0 ? void 0 : _object$allowList.map(e => e)) || [];
    return message;
  }
};