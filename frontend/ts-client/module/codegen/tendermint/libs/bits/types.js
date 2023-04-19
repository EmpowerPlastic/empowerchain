import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
function createBaseBitArray() {
  return {
    bits: Long.ZERO,
    elems: []
  };
}
export const BitArray = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.bits.isZero()) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$elems;
    const message = createBaseBitArray();
    message.bits = object.bits !== undefined && object.bits !== null ? Long.fromValue(object.bits) : Long.ZERO;
    message.elems = ((_object$elems = object.elems) === null || _object$elems === void 0 ? void 0 : _object$elems.map(e => Long.fromValue(e))) || [];
    return message;
  }
};