import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

function createBaseCommitInfo() {
  return {
    version: Long.ZERO,
    storeInfos: []
  };
}
export const CommitInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$storeInfos;
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.storeInfos = ((_object$storeInfos = object.storeInfos) === null || _object$storeInfos === void 0 ? void 0 : _object$storeInfos.map(e => StoreInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStoreInfo() {
  return {
    name: "",
    commitId: undefined
  };
}
export const StoreInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$name;
    const message = createBaseStoreInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
    return message;
  }
};
function createBaseCommitID() {
  return {
    version: Long.ZERO,
    hash: new Uint8Array()
  };
}
export const CommitID = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
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
  fromPartial(object) {
    var _object$hash;
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};