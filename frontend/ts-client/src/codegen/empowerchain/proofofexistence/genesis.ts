import { ProofMetadata, ProofMetadataSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the proofofexistence module's genesis state. */

export interface GenesisState {
  proofList: Proof[];
}
/** GenesisState defines the proofofexistence module's genesis state. */

export interface GenesisStateSDKType {
  proof_list: ProofSDKType[];
}
/** Proof is the proof key and the proof metadata */

export interface Proof {
  /** hash is the key of the proof and the SHA-256 hash that is the proof itself */
  hash: string;
  /** metadata is the metadata of the proof */

  metadata?: ProofMetadata;
}
/** Proof is the proof key and the proof metadata */

export interface ProofSDKType {
  hash: string;
  metadata?: ProofMetadataSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    proofList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofList) {
      Proof.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.proofList = object.proofList?.map(e => Proof.fromPartial(e)) || [];
    return message;
  }

};

function createBaseProof(): Proof {
  return {
    hash: "",
    metadata: undefined
  };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();

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

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.hash = object.hash ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ProofMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};