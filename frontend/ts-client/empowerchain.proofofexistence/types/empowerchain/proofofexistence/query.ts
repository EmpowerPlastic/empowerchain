/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ProofMetadata } from "../../empowerchain/proofofexistence/proof";

export const protobufPackage = "empowerchain.proofofexistence";

export interface QueryProofRequest {
  hash: string;
}

export interface QueryProofResponse {
  metadata: ProofMetadata | undefined;
}

const baseQueryProofRequest: object = { hash: "" };

export const QueryProofRequest = {
  encode(message: QueryProofRequest, writer: Writer = Writer.create()): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProofRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProofRequest } as QueryProofRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProofRequest {
    const message = { ...baseQueryProofRequest } as QueryProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryProofRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProofRequest>): QueryProofRequest {
    const message = { ...baseQueryProofRequest } as QueryProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryProofResponse: object = {};

export const QueryProofResponse = {
  encode(
    message: QueryProofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProofResponse } as QueryProofResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ProofMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProofResponse {
    const message = { ...baseQueryProofResponse } as QueryProofResponse;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ProofMetadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryProofResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ProofMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProofResponse>): QueryProofResponse {
    const message = { ...baseQueryProofResponse } as QueryProofResponse;
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ProofMetadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

export interface Query {
  Proof(request: QueryProofRequest): Promise<QueryProofResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Proof(request: QueryProofRequest): Promise<QueryProofResponse> {
    const data = QueryProofRequest.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.proofofexistence.Query",
      "Proof",
      data
    );
    return promise.then((data) => QueryProofResponse.decode(new Reader(data)));
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
