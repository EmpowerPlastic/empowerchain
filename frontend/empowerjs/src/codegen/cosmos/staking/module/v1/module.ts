import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Module is the config object of the staking module. */
export interface Module {
  /**
   * hooks_order specifies the order of staking hooks and should be a list
   * of module names which provide a staking hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooksOrder: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
/** Module is the config object of the staking module. */
export interface ModuleSDKType {
  hooks_order: string[];
  authority: string;
}
function createBaseModule(): Module {
  return {
    hooksOrder: [],
    authority: ""
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hooksOrder) {
      writer.uint32(10).string(v!);
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
          message.hooksOrder.push(reader.string());
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
      hooksOrder: Array.isArray(object?.hooksOrder) ? object.hooksOrder.map((e: any) => String(e)) : [],
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.hooksOrder) {
      obj.hooksOrder = message.hooksOrder.map(e => e);
    } else {
      obj.hooksOrder = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.hooksOrder = object.hooksOrder?.map(e => e) || [];
    message.authority = object.authority ?? "";
    return message;
  }
};