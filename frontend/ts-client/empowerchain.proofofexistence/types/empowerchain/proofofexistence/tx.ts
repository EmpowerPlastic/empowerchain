/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "empowerchain.proofofexistence";

/** MsgCreateProof is the message used for creating a new proof of existence */
export interface MsgCreateProof {
  /** hash is the SHA-256 hash in HEX format */
  hash: string;
  /** creator is the account address that created the proof */
  creator: string;
}

/** MsgCreateProofResponse is response from creating a new proof of existence */
export interface MsgCreateProofResponse {}

const baseMsgCreateProof: object = { hash: "", creator: "" };

export const MsgCreateProof = {
  encode(message: MsgCreateProof, writer: Writer = Writer.create()): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProof } as MsgCreateProof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProof {
    const message = { ...baseMsgCreateProof } as MsgCreateProof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgCreateProof): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProof>): MsgCreateProof {
    const message = { ...baseMsgCreateProof } as MsgCreateProof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgCreateProofResponse: object = {};

export const MsgCreateProofResponse = {
  encode(_: MsgCreateProofResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProofResponse } as MsgCreateProofResponse;
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

  fromJSON(_: any): MsgCreateProofResponse {
    const message = { ...baseMsgCreateProofResponse } as MsgCreateProofResponse;
    return message;
  },

  toJSON(_: MsgCreateProofResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateProofResponse>): MsgCreateProofResponse {
    const message = { ...baseMsgCreateProofResponse } as MsgCreateProofResponse;
    return message;
  },
};

/** Msg defines the message service */
export interface Msg {
  /** CreateProof creates a new proof of existence */
  CreateProof(request: MsgCreateProof): Promise<MsgCreateProofResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateProof(request: MsgCreateProof): Promise<MsgCreateProofResponse> {
    const data = MsgCreateProof.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.proofofexistence.Msg",
      "CreateProof",
      data
    );
    return promise.then((data) =>
      MsgCreateProofResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
