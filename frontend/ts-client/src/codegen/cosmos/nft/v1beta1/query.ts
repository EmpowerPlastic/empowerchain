import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */

export interface QueryBalanceRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */

  owner: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */

export interface QueryBalanceRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** owner is the owner address of the nft */

  owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */

export interface QueryBalanceResponse {
  /** amount is the number of all NFTs of a given class owned by the owner */
  amount: Long;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */

export interface QueryBalanceResponseSDKType {
  /** amount is the number of all NFTs of a given class owned by the owner */
  amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */

export interface QueryOwnerRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */

  id: string;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */

export interface QueryOwnerRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the NFT */

  id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */

export interface QueryOwnerResponse {
  /** owner is the owner address of the nft */
  owner: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */

export interface QueryOwnerResponseSDKType {
  /** owner is the owner address of the nft */
  owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */

export interface QuerySupplyRequest {
  /** class_id associated with the nft */
  classId: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */

export interface QuerySupplyRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

export interface QuerySupplyResponse {
  /** amount is the number of all NFTs from the given class */
  amount: Long;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

export interface QuerySupplyResponseSDKType {
  /** amount is the number of all NFTs from the given class */
  amount: Long;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */

export interface QueryNFTsRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */

  owner: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */

export interface QueryNFTsRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** owner is the owner address of the nft */

  owner: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */

export interface QueryNFTsResponse {
  /** NFT defines the NFT */
  nfts: NFT[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */

export interface QueryNFTsResponseSDKType {
  /** NFT defines the NFT */
  nfts: NFTSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */

export interface QueryNFTRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */

  id: string;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */

export interface QueryNFTRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
  /** id is a unique identifier of the NFT */

  id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */

export interface QueryNFTResponse {
  /** owner is the owner address of the nft */
  nft?: NFT;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */

export interface QueryNFTResponseSDKType {
  /** owner is the owner address of the nft */
  nft?: NFTSDKType;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */

export interface QueryClassRequest {
  /** class_id associated with the nft */
  classId: string;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */

export interface QueryClassRequestSDKType {
  /** class_id associated with the nft */
  class_id: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */

export interface QueryClassResponse {
  /** class defines the class of the nft type. */
  class?: Class;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */

export interface QueryClassResponseSDKType {
  /** class defines the class of the nft type. */
  class?: ClassSDKType;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */

export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */

export interface QueryClassesRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */

export interface QueryClassesResponse {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */

export interface QueryClassesResponseSDKType {
  /** class defines the class of the nft type. */
  classes: ClassSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: Long.UZERO
  };
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}

export const QueryOwnerRequest = {
  encode(message: QueryOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}

export const QueryOwnerResponse = {
  encode(message: QueryOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: Long.UZERO
  };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: undefined
  };
}

export const QueryNFTsRequest = {
  encode(message: QueryNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: undefined
  };
}

export const QueryNFTsResponse = {
  encode(message: QueryNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};

    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  }

};

function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}

export const QueryClassRequest = {
  encode(message: QueryClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}

export const QueryClassResponse = {
  encode(message: QueryClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  }

};

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}

export const QueryClassesRequest = {
  encode(message: QueryClassesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();

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

  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesResponse = {
  encode(message: QueryClassesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};