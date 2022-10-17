/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "../../../cosmos/auth/v1beta1/auth";

export const protobufPackage = "cosmos.auth.v1beta1";

/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}

/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account: Any | undefined;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
  accounts: Any[];
}

/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {}

/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
  bech32Prefix: string;
}

/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}

/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
  addressString: string;
}

/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
  addressString: string;
}

/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}

/** QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method */
export interface QueryAccountAddressByIDRequest {
  id: number;
}

/** QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method */
export interface QueryAccountAddressByIDResponse {
  accountAddress: string;
}

const baseQueryAccountsRequest: object = {};

export const QueryAccountsRequest = {
  encode(
    message: QueryAccountsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
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

  fromJSON(object: any): QueryAccountsRequest {
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAccountsResponse: object = {};

export const QueryAccountsResponse = {
  encode(
    message: QueryAccountsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccountsResponse {
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Any.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountsResponse>
  ): QueryAccountsResponse {
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Any.fromPartial(e));
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

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryModuleAccountsRequest: object = {};

export const QueryModuleAccountsRequest = {
  encode(
    _: QueryModuleAccountsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
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

  fromJSON(_: any): QueryModuleAccountsRequest {
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
    return message;
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryModuleAccountsRequest>
  ): QueryModuleAccountsRequest {
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
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

const baseQueryAccountResponse: object = {};

export const QueryAccountResponse = {
  encode(
    message: QueryAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.account !== undefined && object.account !== null) {
      message.account = Any.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.account !== undefined && object.account !== null) {
      message.account = Any.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
};

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

const baseQueryModuleAccountsResponse: object = {};

export const QueryModuleAccountsResponse = {
  encode(
    message: QueryModuleAccountsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAccountsResponse>
  ): QueryModuleAccountsResponse {
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Any.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBech32PrefixRequest: object = {};

export const Bech32PrefixRequest = {
  encode(_: Bech32PrefixRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
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

  fromJSON(_: any): Bech32PrefixRequest {
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
    return message;
  },

  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
    return message;
  },
};

const baseBech32PrefixResponse: object = { bech32Prefix: "" };

export const Bech32PrefixResponse = {
  encode(
    message: Bech32PrefixResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bech32PrefixResponse {
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    if (object.bech32Prefix !== undefined && object.bech32Prefix !== null) {
      message.bech32Prefix = String(object.bech32Prefix);
    } else {
      message.bech32Prefix = "";
    }
    return message;
  },

  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined &&
      (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },

  fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    if (object.bech32Prefix !== undefined && object.bech32Prefix !== null) {
      message.bech32Prefix = object.bech32Prefix;
    } else {
      message.bech32Prefix = "";
    }
    return message;
  },
};

const baseAddressBytesToStringRequest: object = {};

export const AddressBytesToStringRequest = {
  encode(
    message: AddressBytesToStringRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AddressBytesToStringRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringRequest {
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    if (object.addressBytes !== undefined && object.addressBytes !== null) {
      message.addressBytes = bytesFromBase64(object.addressBytes);
    }
    return message;
  },

  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressBytesToStringRequest>
  ): AddressBytesToStringRequest {
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    if (object.addressBytes !== undefined && object.addressBytes !== null) {
      message.addressBytes = object.addressBytes;
    } else {
      message.addressBytes = new Uint8Array();
    }
    return message;
  },
};

const baseAddressBytesToStringResponse: object = { addressString: "" };

export const AddressBytesToStringResponse = {
  encode(
    message: AddressBytesToStringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AddressBytesToStringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringResponse {
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    if (object.addressString !== undefined && object.addressString !== null) {
      message.addressString = String(object.addressString);
    } else {
      message.addressString = "";
    }
    return message;
  },

  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressBytesToStringResponse>
  ): AddressBytesToStringResponse {
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    if (object.addressString !== undefined && object.addressString !== null) {
      message.addressString = object.addressString;
    } else {
      message.addressString = "";
    }
    return message;
  },
};

const baseAddressStringToBytesRequest: object = { addressString: "" };

export const AddressStringToBytesRequest = {
  encode(
    message: AddressStringToBytesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AddressStringToBytesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesRequest {
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    if (object.addressString !== undefined && object.addressString !== null) {
      message.addressString = String(object.addressString);
    } else {
      message.addressString = "";
    }
    return message;
  },

  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressStringToBytesRequest>
  ): AddressStringToBytesRequest {
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    if (object.addressString !== undefined && object.addressString !== null) {
      message.addressString = object.addressString;
    } else {
      message.addressString = "";
    }
    return message;
  },
};

const baseAddressStringToBytesResponse: object = {};

export const AddressStringToBytesResponse = {
  encode(
    message: AddressStringToBytesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AddressStringToBytesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesResponse {
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    if (object.addressBytes !== undefined && object.addressBytes !== null) {
      message.addressBytes = bytesFromBase64(object.addressBytes);
    }
    return message;
  },

  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressStringToBytesResponse>
  ): AddressStringToBytesResponse {
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    if (object.addressBytes !== undefined && object.addressBytes !== null) {
      message.addressBytes = object.addressBytes;
    } else {
      message.addressBytes = new Uint8Array();
    }
    return message;
  },
};

const baseQueryAccountAddressByIDRequest: object = { id: 0 };

export const QueryAccountAddressByIDRequest = {
  encode(
    message: QueryAccountAddressByIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAccountAddressByIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDRequest {
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountAddressByIDRequest>
  ): QueryAccountAddressByIDRequest {
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryAccountAddressByIDResponse: object = { accountAddress: "" };

export const QueryAccountAddressByIDResponse = {
  encode(
    message: QueryAccountAddressByIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAccountAddressByIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDResponse {
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress);
    } else {
      message.accountAddress = "";
    }
    return message;
  },

  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountAddressByIDResponse>
  ): QueryAccountAddressByIDResponse {
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress;
    } else {
      message.accountAddress = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts
   *
   * Since: cosmos-sdk 0.43
   */
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** AccountAddressByID returns account address based on account id */
  AccountAddressByID(
    request: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   *
   * Since: cosmos-sdk 0.46
   */
  ModuleAccounts(
    request: QueryModuleAccountsRequest
  ): Promise<QueryModuleAccountsResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   *
   * Since: cosmos-sdk 0.46
   */
  Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   *
   * Since: cosmos-sdk 0.46
   */
  AddressBytesToString(
    request: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   *
   * Since: cosmos-sdk 0.46
   */
  AddressStringToBytes(
    request: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Accounts",
      data
    );
    return promise.then((data) =>
      QueryAccountsResponse.decode(new Reader(data))
    );
  }

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Account",
      data
    );
    return promise.then((data) =>
      QueryAccountResponse.decode(new Reader(data))
    );
  }

  AccountAddressByID(
    request: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse> {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AccountAddressByID",
      data
    );
    return promise.then((data) =>
      QueryAccountAddressByIDResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  ModuleAccounts(
    request: QueryModuleAccountsRequest
  ): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "ModuleAccounts",
      data
    );
    return promise.then((data) =>
      QueryModuleAccountsResponse.decode(new Reader(data))
    );
  }

  Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Bech32Prefix",
      data
    );
    return promise.then((data) =>
      Bech32PrefixResponse.decode(new Reader(data))
    );
  }

  AddressBytesToString(
    request: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AddressBytesToString",
      data
    );
    return promise.then((data) =>
      AddressBytesToStringResponse.decode(new Reader(data))
    );
  }

  AddressStringToBytes(
    request: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AddressStringToBytes",
      data
    );
    return promise.then((data) =>
      AddressStringToBytesResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
