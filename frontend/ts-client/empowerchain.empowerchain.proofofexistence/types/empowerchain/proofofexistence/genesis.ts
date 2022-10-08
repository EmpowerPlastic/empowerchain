/* eslint-disable */
import { Proof } from "../../empowerchain/proofofexistence/proof";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "empowerchain.empowerchain.proofofexistence";

/** GenesisState defines the proofofexistence module's genesis state. */
export interface GenesisState {
  proofList: Proof[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.proofList) {
      Proof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.proofList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofList.push(Proof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.proofList = [];
    if (object.proofList !== undefined && object.proofList !== null) {
      for (const e of object.proofList) {
        message.proofList.push(Proof.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.proofList) {
      obj.proofList = message.proofList.map((e) =>
        e ? Proof.toJSON(e) : undefined
      );
    } else {
      obj.proofList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.proofList = [];
    if (object.proofList !== undefined && object.proofList !== null) {
      for (const e of object.proofList) {
        message.proofList.push(Proof.fromPartial(e));
      }
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
