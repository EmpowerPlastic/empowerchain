import { Grant } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    allowances: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.allowances) {
      Grant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$allowances;
    const message = createBaseGenesisState();
    message.allowances = ((_object$allowances = object.allowances) === null || _object$allowances === void 0 ? void 0 : _object$allowances.map(e => Grant.fromPartial(e))) || [];
    return message;
  }
};