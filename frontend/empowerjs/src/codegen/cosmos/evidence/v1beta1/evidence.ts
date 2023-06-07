import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  /** height is the equivocation height. */
  height: bigint;
  /** time is the equivocation time. */
  time?: Date;
  /** power is the equivocation validator power. */
  power: bigint;
  /** consensus_address is the equivocation validator consensus address. */
  consensusAddress: string;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time?: Date;
  power: bigint;
  consensus_address: string;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt("0"),
    time: undefined,
    power: BigInt("0"),
    consensusAddress: ""
  };
}
export const Equivocation = {
  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(Long.fromString(message.height.toString()));
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.power.toString()));
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = BigInt(reader.int64().toString());
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
  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt("0"),
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
    };
  },
  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.power !== undefined && (obj.power = (message.power || BigInt("0")).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial(object: Partial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = object.time ?? undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt("0");
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  }
};