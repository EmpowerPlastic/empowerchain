/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.mint.v1beta1";

/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annualProvisions: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */
  inflationRateChange: string;
  /** maximum inflation rate */
  inflationMax: string;
  /** minimum inflation rate */
  inflationMin: string;
  /** goal of percent bonded atoms */
  goalBonded: string;
  /** expected blocks per year */
  blocksPerYear: number;
}

const baseMinter: object = { inflation: "", annualProvisions: "" };

export const Minter = {
  encode(message: Minter, writer: Writer = Writer.create()): Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(message.annualProvisions);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinter } as Minter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;
        case 2:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Minter {
    const message = { ...baseMinter } as Minter;
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = String(object.inflation);
    } else {
      message.inflation = "";
    }
    if (
      object.annualProvisions !== undefined &&
      object.annualProvisions !== null
    ) {
      message.annualProvisions = String(object.annualProvisions);
    } else {
      message.annualProvisions = "";
    }
    return message;
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.annualProvisions !== undefined &&
      (obj.annualProvisions = message.annualProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = { ...baseMinter } as Minter;
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    } else {
      message.inflation = "";
    }
    if (
      object.annualProvisions !== undefined &&
      object.annualProvisions !== null
    ) {
      message.annualProvisions = object.annualProvisions;
    } else {
      message.annualProvisions = "";
    }
    return message;
  },
};

const baseParams: object = {
  mintDenom: "",
  inflationRateChange: "",
  inflationMax: "",
  inflationMin: "",
  goalBonded: "",
  blocksPerYear: 0,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(message.inflationRateChange);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(message.inflationMax);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(message.inflationMin);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(message.goalBonded);
    }
    if (message.blocksPerYear !== 0) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = reader.string();
          break;
        case 3:
          message.inflationMax = reader.string();
          break;
        case 4:
          message.inflationMin = reader.string();
          break;
        case 5:
          message.goalBonded = reader.string();
          break;
        case 6:
          message.blocksPerYear = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = String(object.mintDenom);
    } else {
      message.mintDenom = "";
    }
    if (
      object.inflationRateChange !== undefined &&
      object.inflationRateChange !== null
    ) {
      message.inflationRateChange = String(object.inflationRateChange);
    } else {
      message.inflationRateChange = "";
    }
    if (object.inflationMax !== undefined && object.inflationMax !== null) {
      message.inflationMax = String(object.inflationMax);
    } else {
      message.inflationMax = "";
    }
    if (object.inflationMin !== undefined && object.inflationMin !== null) {
      message.inflationMin = String(object.inflationMin);
    } else {
      message.inflationMin = "";
    }
    if (object.goalBonded !== undefined && object.goalBonded !== null) {
      message.goalBonded = String(object.goalBonded);
    } else {
      message.goalBonded = "";
    }
    if (object.blocksPerYear !== undefined && object.blocksPerYear !== null) {
      message.blocksPerYear = Number(object.blocksPerYear);
    } else {
      message.blocksPerYear = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflationRateChange !== undefined &&
      (obj.inflationRateChange = message.inflationRateChange);
    message.inflationMax !== undefined &&
      (obj.inflationMax = message.inflationMax);
    message.inflationMin !== undefined &&
      (obj.inflationMin = message.inflationMin);
    message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
    message.blocksPerYear !== undefined &&
      (obj.blocksPerYear = message.blocksPerYear);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.mintDenom !== undefined && object.mintDenom !== null) {
      message.mintDenom = object.mintDenom;
    } else {
      message.mintDenom = "";
    }
    if (
      object.inflationRateChange !== undefined &&
      object.inflationRateChange !== null
    ) {
      message.inflationRateChange = object.inflationRateChange;
    } else {
      message.inflationRateChange = "";
    }
    if (object.inflationMax !== undefined && object.inflationMax !== null) {
      message.inflationMax = object.inflationMax;
    } else {
      message.inflationMax = "";
    }
    if (object.inflationMin !== undefined && object.inflationMin !== null) {
      message.inflationMin = object.inflationMin;
    } else {
      message.inflationMin = "";
    }
    if (object.goalBonded !== undefined && object.goalBonded !== null) {
      message.goalBonded = object.goalBonded;
    } else {
      message.goalBonded = "";
    }
    if (object.blocksPerYear !== undefined && object.blocksPerYear !== null) {
      message.blocksPerYear = object.blocksPerYear;
    } else {
      message.blocksPerYear = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
