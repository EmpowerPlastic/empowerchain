/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Proof } from "../../empowerchain/proofofexistence/proof";

export const protobufPackage = "empowerchain.empowerchain.proofofexistence";

export interface QueryGetProofRequest {
  hash: string;
}

export interface QueryGetProofResponse {
  proof: Proof | undefined;
}

const baseQueryGetProofRequest: object = { hash: "" };

export const QueryGetProofRequest = {
  encode(
    message: QueryGetProofRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProofRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProofRequest } as QueryGetProofRequest;
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

  fromJSON(object: any): QueryGetProofRequest {
    const message = { ...baseQueryGetProofRequest } as QueryGetProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryGetProofRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetProofRequest>): QueryGetProofRequest {
    const message = { ...baseQueryGetProofRequest } as QueryGetProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryGetProofResponse: object = {};

export const QueryGetProofResponse = {
  encode(
    message: QueryGetProofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProofResponse } as QueryGetProofResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProofResponse {
    const message = { ...baseQueryGetProofResponse } as QueryGetProofResponse;
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProofResponse): unknown {
    const obj: any = {};
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProofResponse>
  ): QueryGetProofResponse {
    const message = { ...baseQueryGetProofResponse } as QueryGetProofResponse;
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a Proof by hash. */
  Proof(request: QueryGetProofRequest): Promise<QueryGetProofResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Proof(request: QueryGetProofRequest): Promise<QueryGetProofResponse> {
    const data = QueryGetProofRequest.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.empowerchain.proofofexistence.Query",
      "Proof",
      data
    );
    return promise.then((data) =>
      QueryGetProofResponse.decode(new Reader(data))
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
