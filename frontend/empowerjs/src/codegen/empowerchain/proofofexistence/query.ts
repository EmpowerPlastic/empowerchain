import { ProofMetadata, ProofMetadataSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface QueryProofRequest {
  hash: string;
}
export interface QueryProofRequestSDKType {
  hash: string;
}
export interface QueryProofResponse {
  metadata?: ProofMetadata;
}
export interface QueryProofResponseSDKType {
  metadata?: ProofMetadataSDKType;
}
function createBaseQueryProofRequest(): QueryProofRequest {
  return {
    hash: ""
  };
}
export const QueryProofRequest = {
  encode(message: QueryProofRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProofRequest();
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
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message: QueryProofRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryProofRequest>): QueryProofRequest {
    const message = createBaseQueryProofRequest();
    message.hash = object.hash ?? "";
    return message;
  }
};
function createBaseQueryProofResponse(): QueryProofResponse {
  return {
    metadata: undefined
  };
}
export const QueryProofResponse = {
  encode(message: QueryProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProofResponse();
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
    return {
      metadata: isSet(object.metadata) ? ProofMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: QueryProofResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? ProofMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProofResponse>): QueryProofResponse {
    const message = createBaseQueryProofResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ProofMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};