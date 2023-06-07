import { RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, ResponseCommit, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  storeKey: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
  store_key: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  requestBeginBlock?: RequestBeginBlock;
  responseBeginBlock?: ResponseBeginBlock;
  deliverTxs: BlockMetadata_DeliverTx[];
  requestEndBlock?: RequestEndBlock;
  responseEndBlock?: ResponseEndBlock;
  responseCommit?: ResponseCommit;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
  request_begin_block?: RequestBeginBlockSDKType;
  response_begin_block?: ResponseBeginBlockSDKType;
  deliver_txs: BlockMetadata_DeliverTxSDKType[];
  request_end_block?: RequestEndBlockSDKType;
  response_end_block?: ResponseEndBlockSDKType;
  response_commit?: ResponseCommitSDKType;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
  request?: RequestDeliverTx;
  response?: ResponseDeliverTx;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxSDKType {
  request?: RequestDeliverTxSDKType;
  response?: ResponseDeliverTxSDKType;
}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKVPair {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.delete !== undefined && (obj.delete = message.delete);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};
function createBaseBlockMetadata(): BlockMetadata {
  return {
    requestBeginBlock: undefined,
    responseBeginBlock: undefined,
    deliverTxs: [],
    requestEndBlock: undefined,
    responseEndBlock: undefined,
    responseCommit: undefined
  };
}
export const BlockMetadata = {
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestBeginBlock !== undefined) {
      RequestBeginBlock.encode(message.requestBeginBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.responseBeginBlock !== undefined) {
      ResponseBeginBlock.encode(message.responseBeginBlock, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deliverTxs) {
      BlockMetadata_DeliverTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestEndBlock !== undefined) {
      RequestEndBlock.encode(message.requestEndBlock, writer.uint32(34).fork()).ldelim();
    }
    if (message.responseEndBlock !== undefined) {
      ResponseEndBlock.encode(message.responseEndBlock, writer.uint32(42).fork()).ldelim();
    }
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestBeginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.responseBeginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliverTxs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.requestEndBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.responseEndBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata {
    return {
      requestBeginBlock: isSet(object.requestBeginBlock) ? RequestBeginBlock.fromJSON(object.requestBeginBlock) : undefined,
      responseBeginBlock: isSet(object.responseBeginBlock) ? ResponseBeginBlock.fromJSON(object.responseBeginBlock) : undefined,
      deliverTxs: Array.isArray(object?.deliverTxs) ? object.deliverTxs.map((e: any) => BlockMetadata_DeliverTx.fromJSON(e)) : [],
      requestEndBlock: isSet(object.requestEndBlock) ? RequestEndBlock.fromJSON(object.requestEndBlock) : undefined,
      responseEndBlock: isSet(object.responseEndBlock) ? ResponseEndBlock.fromJSON(object.responseEndBlock) : undefined,
      responseCommit: isSet(object.responseCommit) ? ResponseCommit.fromJSON(object.responseCommit) : undefined
    };
  },
  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    message.requestBeginBlock !== undefined && (obj.requestBeginBlock = message.requestBeginBlock ? RequestBeginBlock.toJSON(message.requestBeginBlock) : undefined);
    message.responseBeginBlock !== undefined && (obj.responseBeginBlock = message.responseBeginBlock ? ResponseBeginBlock.toJSON(message.responseBeginBlock) : undefined);
    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map(e => e ? BlockMetadata_DeliverTx.toJSON(e) : undefined);
    } else {
      obj.deliverTxs = [];
    }
    message.requestEndBlock !== undefined && (obj.requestEndBlock = message.requestEndBlock ? RequestEndBlock.toJSON(message.requestEndBlock) : undefined);
    message.responseEndBlock !== undefined && (obj.responseEndBlock = message.responseEndBlock ? ResponseEndBlock.toJSON(message.responseEndBlock) : undefined);
    message.responseCommit !== undefined && (obj.responseCommit = message.responseCommit ? ResponseCommit.toJSON(message.responseCommit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.requestBeginBlock = object.requestBeginBlock !== undefined && object.requestBeginBlock !== null ? RequestBeginBlock.fromPartial(object.requestBeginBlock) : undefined;
    message.responseBeginBlock = object.responseBeginBlock !== undefined && object.responseBeginBlock !== null ? ResponseBeginBlock.fromPartial(object.responseBeginBlock) : undefined;
    message.deliverTxs = object.deliverTxs?.map(e => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.requestEndBlock = object.requestEndBlock !== undefined && object.requestEndBlock !== null ? RequestEndBlock.fromPartial(object.requestEndBlock) : undefined;
    message.responseEndBlock = object.responseEndBlock !== undefined && object.responseEndBlock !== null ? ResponseEndBlock.fromPartial(object.responseEndBlock) : undefined;
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
    return message;
  }
};
function createBaseBlockMetadata_DeliverTx(): BlockMetadata_DeliverTx {
  return {
    request: undefined,
    response: undefined
  };
}
export const BlockMetadata_DeliverTx = {
  encode(message: BlockMetadata_DeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata_DeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMetadata_DeliverTx {
    return {
      request: isSet(object.request) ? RequestDeliverTx.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined
    };
  },
  toJSON(message: BlockMetadata_DeliverTx): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? RequestDeliverTx.toJSON(message.request) : undefined);
    message.response !== undefined && (obj.response = message.response ? ResponseDeliverTx.toJSON(message.response) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockMetadata_DeliverTx>): BlockMetadata_DeliverTx {
    const message = createBaseBlockMetadata_DeliverTx();
    message.request = object.request !== undefined && object.request !== null ? RequestDeliverTx.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? ResponseDeliverTx.fromPartial(object.response) : undefined;
    return message;
  }
};