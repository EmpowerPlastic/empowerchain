import { GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    authorization: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
          message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$authorization;
    const message = createBaseGenesisState();
    message.authorization = ((_object$authorization = object.authorization) === null || _object$authorization === void 0 ? void 0 : _object$authorization.map(e => GrantAuthorization.fromPartial(e))) || [];
    return message;
  }
};