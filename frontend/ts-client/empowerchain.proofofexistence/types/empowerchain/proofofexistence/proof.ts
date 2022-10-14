/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "empowerchain.proofofexistence";

/**
 * ProofMetadata is the metadata attached to a specific data proof
 * Because the proof itself is also the key, the data structure is hash -> ProofMetadata
 * The hash is the SHA-256 hash of the data of which is being made a proof for.
 */
export interface ProofMetadata {
  /** timestamp is the time the proof was added on-chain (block time) */
  timestamp: Date | undefined;
  /** creator is the account address that created the proof */
  creator: string;
}

const baseProofMetadata: object = { creator: "" };

export const ProofMetadata = {
  encode(message: ProofMetadata, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofMetadata } as ProofMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
    const message = { ...baseProofMetadata } as ProofMetadata;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ProofMetadata): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp =
        message.timestamp !== undefined
          ? message.timestamp.toISOString()
          : null);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<ProofMetadata>): ProofMetadata {
    const message = { ...baseProofMetadata } as ProofMetadata;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
