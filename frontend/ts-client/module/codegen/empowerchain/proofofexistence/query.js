import { ProofMetadata } from "./types";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryProofRequest() {
  return {
    hash: ""
  };
}
export const QueryProofRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$hash;
    const message = createBaseQueryProofRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseQueryProofResponse() {
  return {
    metadata: undefined
  };
}
export const QueryProofResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryProofResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ProofMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};