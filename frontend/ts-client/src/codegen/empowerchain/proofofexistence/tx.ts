import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** MsgCreateProof is the message used for creating a new proof of existence */

export interface MsgCreateProof {
  /** creator is the account address that created the proof */
  creator: string;
  /** hash is the SHA-256 hash in HEX format */

  hash: string;
}
/** MsgCreateProof is the message used for creating a new proof of existence */

export interface MsgCreateProofSDKType {
  creator: string;
  hash: string;
}
/** MsgCreateProofResponse is response from creating a new proof of existence */

export interface MsgCreateProofResponse {}
/** MsgCreateProofResponse is response from creating a new proof of existence */

export interface MsgCreateProofResponseSDKType {}

function createBaseMsgCreateProof(): MsgCreateProof {
  return {
    creator: "",
    hash: ""
  };
}

export const MsgCreateProof = {
  encode(message: MsgCreateProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateProof>): MsgCreateProof {
    const message = createBaseMsgCreateProof();
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? "";
    return message;
  }

};

function createBaseMsgCreateProofResponse(): MsgCreateProofResponse {
  return {};
}

export const MsgCreateProofResponse = {
  encode(_: MsgCreateProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProofResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateProofResponse>): MsgCreateProofResponse {
    const message = createBaseMsgCreateProofResponse();
    return message;
  }

};