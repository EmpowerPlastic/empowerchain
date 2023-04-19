import { ProofMetadata } from "./types";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    proofList: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proofList) {
      Proof.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofList.push(Proof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$proofList;
    const message = createBaseGenesisState();
    message.proofList = ((_object$proofList = object.proofList) === null || _object$proofList === void 0 ? void 0 : _object$proofList.map(e => Proof.fromPartial(e))) || [];
    return message;
  }
};
function createBaseProof() {
  return {
    hash: "",
    metadata: undefined
  };
}
export const Proof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.metadata !== undefined) {
      ProofMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
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
    var _object$hash;
    const message = createBaseProof();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ProofMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};