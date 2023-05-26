import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: bigint;
  storeInfos: StoreInfo[];
  timestamp?: Date;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
  version: bigint;
  store_infos: StoreInfoSDKType[];
  timestamp?: Date;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commitId?: CommitID;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
  name: string;
  commit_id?: CommitIDSDKType;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: bigint;
  hash: Uint8Array;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
  version: bigint;
  hash: Uint8Array;
}
function createBaseCommitInfo(): CommitInfo {
  return {
    version: BigInt("0"),
    storeInfos: [],
    timestamp: undefined
  };
}
export const CommitInfo = {
  encode(message: CommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(Long.fromString(message.version.toString()));
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = BigInt(reader.int64().toString());
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt("0"),
      storeInfos: Array.isArray(object?.storeInfos) ? object.storeInfos.map((e: any) => StoreInfo.fromJSON(e)) : [],
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt("0")).toString());
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map(e => e ? StoreInfo.toJSON(e) : undefined);
    } else {
      obj.storeInfos = [];
    }
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: Partial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt("0");
    message.storeInfos = object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
};
function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commitId: undefined
  };
}
export const StoreInfo = {
  encode(message: StoreInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      commitId: isSet(object.commitId) ? CommitID.fromJSON(object.commitId) : undefined
    };
  },
  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined && (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StoreInfo>): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
    return message;
  }
};
function createBaseCommitID(): CommitID {
  return {
    version: BigInt("0"),
    hash: new Uint8Array()
  };
}
export const CommitID = {
  encode(message: CommitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(Long.fromString(message.version.toString()));
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = BigInt(reader.int64().toString());
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitID {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt("0"),
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt("0")).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<CommitID>): CommitID {
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt("0");
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};