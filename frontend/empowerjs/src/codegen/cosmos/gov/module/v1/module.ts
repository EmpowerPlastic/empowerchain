import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../../helpers";
/** Module is the config object of the gov module. */
export interface Module {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: bigint;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
/** Module is the config object of the gov module. */
export interface ModuleSDKType {
  max_metadata_len: bigint;
  authority: string;
}
function createBaseModule(): Module {
  return {
    maxMetadataLen: BigInt("0"),
    authority: ""
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.maxMetadataLen.toString()));
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
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
          message.maxMetadataLen = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.authority = reader.string();
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
      maxMetadataLen: isSet(object.maxMetadataLen) ? BigInt(object.maxMetadataLen.toString()) : BigInt("0"),
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxMetadataLen !== undefined && (obj.maxMetadataLen = (message.maxMetadataLen || BigInt("0")).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.maxMetadataLen = object.maxMetadataLen !== undefined && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt("0");
    message.authority = object.authority ?? "";
    return message;
  }
};