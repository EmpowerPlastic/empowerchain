import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp } from "../../../helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

function createBaseEquivocation() {
  return {
    height: Long.ZERO,
    time: undefined,
    power: Long.ZERO,
    consensusAddress: ""
  };
}
export const Equivocation = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$time, _object$consensusAddr;
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    message.consensusAddress = (_object$consensusAddr = object.consensusAddress) !== null && _object$consensusAddr !== void 0 ? _object$consensusAddr : "";
    return message;
  }
};