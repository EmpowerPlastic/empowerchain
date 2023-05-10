import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../../helpers";
/** Module is the config object of the group module. */
export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod?: Duration;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: bigint;
}
/** Module is the config object of the group module. */
export interface ModuleSDKType {
  max_execution_period?: DurationSDKType;
  max_metadata_len: bigint;
}
function createBaseModule(): Module {
  return {
    maxExecutionPeriod: undefined,
    maxMetadataLen: BigInt("0")
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.maxMetadataLen.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      maxExecutionPeriod: isSet(object.maxExecutionPeriod) ? Duration.fromJSON(object.maxExecutionPeriod) : undefined,
      maxMetadataLen: isSet(object.maxMetadataLen) ? BigInt(object.maxMetadataLen.toString()) : BigInt("0")
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxExecutionPeriod !== undefined && (obj.maxExecutionPeriod = message.maxExecutionPeriod ? Duration.toJSON(message.maxExecutionPeriod) : undefined);
    message.maxMetadataLen !== undefined && (obj.maxMetadataLen = (message.maxMetadataLen || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.maxExecutionPeriod = object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null ? Duration.fromPartial(object.maxExecutionPeriod) : undefined;
    message.maxMetadataLen = object.maxMetadataLen !== undefined && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt("0");
    return message;
  }
};