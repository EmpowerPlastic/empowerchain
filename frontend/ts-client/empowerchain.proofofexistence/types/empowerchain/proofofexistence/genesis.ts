/* eslint-disable */
import { ProofMetadata } from "../../empowerchain/proofofexistence/proof";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "empowerchain.proofofexistence";

/** GenesisState defines the proofofexistence module's genesis state. */
export interface GenesisState {
  proofList: Proof[];
}

/** Proof is the proof key and the proof metadata */
export interface Proof {
  /** hash is the key of the proof and the SHA-256 hash that is the proof itself */
  hash: string;
  /** metadata is the metadata of the proof */
  metadata: ProofMetadata | undefined;
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

const baseProof: object = { hash: "" };

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.metadata = ProofMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ProofMetadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ProofMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ProofMetadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
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
