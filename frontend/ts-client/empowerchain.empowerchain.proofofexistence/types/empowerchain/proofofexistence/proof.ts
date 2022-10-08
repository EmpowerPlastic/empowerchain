/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "empowerchain.empowerchain.proofofexistence";

export interface Proof {
  /**
   * Hash is the SHA-256 hash of the data of which is being made a proof for.
   * The hash needs to be sent as a Base64 encoded string.
   */
  hash: string;
  /** Timestamp is the time the proof was added on-chain (block time) */
  timestamp: Date | undefined;
  /** Reporter is the account address that created the proof */
  reporter: string;
}

const baseProof: object = { hash: "", reporter: "" };

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.reporter !== "") {
      writer.uint32(26).string(message.reporter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.reporter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = String(object.reporter);
    } else {
      message.reporter = "";
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.timestamp !== undefined &&
      (obj.timestamp =
        message.timestamp !== undefined
          ? message.timestamp.toISOString()
          : null);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    } else {
      message.reporter = "";
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
