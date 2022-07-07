/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../proofofexistence/params";
import { StoredProof } from "../proofofexistence/stored_proof";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "empowerchain.empowerchain.proofofexistence";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetStoredProofRequest {
  hash: string;
}

export interface QueryGetStoredProofResponse {
  storedProof: StoredProof | undefined;
}

export interface QueryAllStoredProofRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredProofResponse {
  storedProof: StoredProof[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredProofRequest: object = { hash: "" };

export const QueryGetStoredProofRequest = {
  encode(
    message: QueryGetStoredProofRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredProofRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredProofRequest,
    } as QueryGetStoredProofRequest;
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

  fromJSON(object: any): QueryGetStoredProofRequest {
    const message = {
      ...baseQueryGetStoredProofRequest,
    } as QueryGetStoredProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredProofRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredProofRequest>
  ): QueryGetStoredProofRequest {
    const message = {
      ...baseQueryGetStoredProofRequest,
    } as QueryGetStoredProofRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryGetStoredProofResponse: object = {};

export const QueryGetStoredProofResponse = {
  encode(
    message: QueryGetStoredProofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedProof !== undefined) {
      StoredProof.encode(
        message.storedProof,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredProofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredProofResponse,
    } as QueryGetStoredProofResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedProof = StoredProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredProofResponse {
    const message = {
      ...baseQueryGetStoredProofResponse,
    } as QueryGetStoredProofResponse;
    if (object.storedProof !== undefined && object.storedProof !== null) {
      message.storedProof = StoredProof.fromJSON(object.storedProof);
    } else {
      message.storedProof = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredProofResponse): unknown {
    const obj: any = {};
    message.storedProof !== undefined &&
      (obj.storedProof = message.storedProof
        ? StoredProof.toJSON(message.storedProof)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredProofResponse>
  ): QueryGetStoredProofResponse {
    const message = {
      ...baseQueryGetStoredProofResponse,
    } as QueryGetStoredProofResponse;
    if (object.storedProof !== undefined && object.storedProof !== null) {
      message.storedProof = StoredProof.fromPartial(object.storedProof);
    } else {
      message.storedProof = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredProofRequest: object = {};

export const QueryAllStoredProofRequest = {
  encode(
    message: QueryAllStoredProofRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredProofRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredProofRequest,
    } as QueryAllStoredProofRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredProofRequest {
    const message = {
      ...baseQueryAllStoredProofRequest,
    } as QueryAllStoredProofRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredProofRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredProofRequest>
  ): QueryAllStoredProofRequest {
    const message = {
      ...baseQueryAllStoredProofRequest,
    } as QueryAllStoredProofRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredProofResponse: object = {};

export const QueryAllStoredProofResponse = {
  encode(
    message: QueryAllStoredProofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedProof) {
      StoredProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredProofResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredProofResponse,
    } as QueryAllStoredProofResponse;
    message.storedProof = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedProof.push(StoredProof.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredProofResponse {
    const message = {
      ...baseQueryAllStoredProofResponse,
    } as QueryAllStoredProofResponse;
    message.storedProof = [];
    if (object.storedProof !== undefined && object.storedProof !== null) {
      for (const e of object.storedProof) {
        message.storedProof.push(StoredProof.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredProofResponse): unknown {
    const obj: any = {};
    if (message.storedProof) {
      obj.storedProof = message.storedProof.map((e) =>
        e ? StoredProof.toJSON(e) : undefined
      );
    } else {
      obj.storedProof = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredProofResponse>
  ): QueryAllStoredProofResponse {
    const message = {
      ...baseQueryAllStoredProofResponse,
    } as QueryAllStoredProofResponse;
    message.storedProof = [];
    if (object.storedProof !== undefined && object.storedProof !== null) {
      for (const e of object.storedProof) {
        message.storedProof.push(StoredProof.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StoredProof by index. */
  StoredProof(
    request: QueryGetStoredProofRequest
  ): Promise<QueryGetStoredProofResponse>;
  /** Queries a list of StoredProof items. */
  StoredProofAll(
    request: QueryAllStoredProofRequest
  ): Promise<QueryAllStoredProofResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.empowerchain.proofofexistence.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  StoredProof(
    request: QueryGetStoredProofRequest
  ): Promise<QueryGetStoredProofResponse> {
    const data = QueryGetStoredProofRequest.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.empowerchain.proofofexistence.Query",
      "StoredProof",
      data
    );
    return promise.then((data) =>
      QueryGetStoredProofResponse.decode(new Reader(data))
    );
  }

  StoredProofAll(
    request: QueryAllStoredProofRequest
  ): Promise<QueryAllStoredProofResponse> {
    const data = QueryAllStoredProofRequest.encode(request).finish();
    const promise = this.rpc.request(
      "empowerchain.empowerchain.proofofexistence.Query",
      "StoredProofAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredProofResponse.decode(new Reader(data))
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
