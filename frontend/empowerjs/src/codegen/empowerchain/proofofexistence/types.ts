import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
/**
 * ProofMetadata is the metadata attached to a specific data proof
 * Because the proof itself is also the key, the data structure is hash -> ProofMetadata
 * The hash is the SHA-256 hash of the data of which is being made a proof for.
 */
export interface ProofMetadata {
  /** timestamp is the time the proof was added on-chain (block time) */
  timestamp?: Date;
  /** creator is the account address that created the proof */
  creator: string;
}
/**
 * ProofMetadata is the metadata attached to a specific data proof
 * Because the proof itself is also the key, the data structure is hash -> ProofMetadata
 * The hash is the SHA-256 hash of the data of which is being made a proof for.
 */
export interface ProofMetadataSDKType {
  timestamp?: Date;
  creator: string;
}
function createBaseProofMetadata(): ProofMetadata {
  return {
    timestamp: undefined,
    creator: ""
  };
}
export const ProofMetadata = {
  encode(message: ProofMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofMetadata {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: ProofMetadata): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<ProofMetadata>): ProofMetadata {
    const message = createBaseProofMetadata();
    message.timestamp = object.timestamp ?? undefined;
    message.creator = object.creator ?? "";
    return message;
  }
};