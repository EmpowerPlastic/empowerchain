/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage =
  "ibc.applications.interchain_accounts.controller.v1";

/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
  /** controller_enabled enables or disables the controller submodule. */
  controllerEnabled: boolean;
}

const baseParams: object = { controllerEnabled: false };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.controllerEnabled === true) {
      writer.uint32(8).bool(message.controllerEnabled);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.controllerEnabled !== undefined &&
      object.controllerEnabled !== null
    ) {
      message.controllerEnabled = Boolean(object.controllerEnabled);
    } else {
      message.controllerEnabled = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.controllerEnabled !== undefined &&
      (obj.controllerEnabled = message.controllerEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.controllerEnabled !== undefined &&
      object.controllerEnabled !== null
    ) {
      message.controllerEnabled = object.controllerEnabled;
    } else {
      message.controllerEnabled = false;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
