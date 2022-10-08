/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ParamChange } from "../../../cosmos/params/v1beta1/params";

export const protobufPackage = "cosmos.params.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param: ParamChange | undefined;
}

/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequest {}

/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}

/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Subspace {
  subspace: string;
  keys: string[];
}

const baseQueryParamsRequest: object = { subspace: "", key: "" };

export const QueryParamsRequest = {
  encode(
    message: QueryParamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace);
    } else {
      message.subspace = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    } else {
      message.subspace = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32());
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
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromJSON(object.param);
    } else {
      message.param = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.param !== undefined &&
      (obj.param = message.param
        ? ParamChange.toJSON(message.param)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromPartial(object.param);
    } else {
      message.param = undefined;
    }
    return message;
  },
};

const baseQuerySubspacesRequest: object = {};

export const QuerySubspacesRequest = {
  encode(_: QuerySubspacesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySubspacesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySubspacesRequest } as QuerySubspacesRequest;
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

  fromJSON(_: any): QuerySubspacesRequest {
    const message = { ...baseQuerySubspacesRequest } as QuerySubspacesRequest;
    return message;
  },

  toJSON(_: QuerySubspacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = { ...baseQuerySubspacesRequest } as QuerySubspacesRequest;
    return message;
  },
};

const baseQuerySubspacesResponse: object = {};

export const QuerySubspacesResponse = {
  encode(
    message: QuerySubspacesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySubspacesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySubspacesResponse } as QuerySubspacesResponse;
    message.subspaces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspacesResponse {
    const message = { ...baseQuerySubspacesResponse } as QuerySubspacesResponse;
    message.subspaces = [];
    if (object.subspaces !== undefined && object.subspaces !== null) {
      for (const e of object.subspaces) {
        message.subspaces.push(Subspace.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySubspacesResponse>
  ): QuerySubspacesResponse {
    const message = { ...baseQuerySubspacesResponse } as QuerySubspacesResponse;
    message.subspaces = [];
    if (object.subspaces !== undefined && object.subspaces !== null) {
      for (const e of object.subspaces) {
        message.subspaces.push(Subspace.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSubspace: object = { subspace: "", keys: "" };

export const Subspace = {
  encode(message: Subspace, writer: Writer = Writer.create()): Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubspace } as Subspace;
    message.keys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subspace {
    const message = { ...baseSubspace } as Subspace;
    message.keys = [];
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace);
    } else {
      message.subspace = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Subspace): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Subspace>): Subspace {
    const message = { ...baseSubspace } as Subspace;
    message.keys = [];
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    } else {
      message.subspace = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(e);
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Subspaces queries for all registered subspaces and all keys for a subspace.
   *
   * Since: cosmos-sdk 0.46
   */
  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.params.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.params.v1beta1.Query",
      "Subspaces",
      data
    );
    return promise.then((data) =>
      QuerySubspacesResponse.decode(new Reader(data))
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
