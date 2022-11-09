/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.p2p";

export interface NetAddress {
  id: string;
  ip: string;
  port: number;
}

export interface ProtocolVersion {
  p2p: number;
  block: number;
  app: number;
}

export interface DefaultNodeInfo {
  protocolVersion: ProtocolVersion | undefined;
  defaultNodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: DefaultNodeInfoOther | undefined;
}

export interface DefaultNodeInfoOther {
  txIndex: string;
  rpcAddress: string;
}

const baseNetAddress: object = { id: "", ip: "", port: 0 };

export const NetAddress = {
  encode(message: NetAddress, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetAddress } as NetAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetAddress {
    const message = { ...baseNetAddress } as NetAddress;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = Number(object.port);
    } else {
      message.port = 0;
    }
    return message;
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = message.port);
    return obj;
  },

  fromPartial(object: DeepPartial<NetAddress>): NetAddress {
    const message = { ...baseNetAddress } as NetAddress;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = 0;
    }
    return message;
  },
};

const baseProtocolVersion: object = { p2p: 0, block: 0, app: 0 };

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: Writer = Writer.create()): Writer {
    if (message.p2p !== 0) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== 0) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== 0) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.block = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.app = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = Number(object.p2p);
    } else {
      message.p2p = 0;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Number(object.block);
    } else {
      message.block = 0;
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = Number(object.app);
    } else {
      message.app = 0;
    }
    return message;
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = message.p2p);
    message.block !== undefined && (obj.block = message.block);
    message.app !== undefined && (obj.app = message.app);
    return obj;
  },

  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    if (object.p2p !== undefined && object.p2p !== null) {
      message.p2p = object.p2p;
    } else {
      message.p2p = 0;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = object.block;
    } else {
      message.block = 0;
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = object.app;
    } else {
      message.app = 0;
    }
    return message;
  },
};

const baseDefaultNodeInfo: object = {
  defaultNodeId: "",
  listenAddr: "",
  network: "",
  version: "",
  moniker: "",
};

export const DefaultNodeInfo = {
  encode(message: DefaultNodeInfo, writer: Writer = Writer.create()): Writer {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(
        message.protocolVersion,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.defaultNodeId !== "") {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(
        message.other,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfo {
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    if (
      object.protocolVersion !== undefined &&
      object.protocolVersion !== null
    ) {
      message.protocolVersion = ProtocolVersion.fromJSON(
        object.protocolVersion
      );
    } else {
      message.protocolVersion = undefined;
    }
    if (object.defaultNodeId !== undefined && object.defaultNodeId !== null) {
      message.defaultNodeId = String(object.defaultNodeId);
    } else {
      message.defaultNodeId = "";
    }
    if (object.listenAddr !== undefined && object.listenAddr !== null) {
      message.listenAddr = String(object.listenAddr);
    } else {
      message.listenAddr = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = String(object.network);
    } else {
      message.network = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = "";
    }
    if (object.channels !== undefined && object.channels !== null) {
      message.channels = bytesFromBase64(object.channels);
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.other !== undefined && object.other !== null) {
      message.other = DefaultNodeInfoOther.fromJSON(object.other);
    } else {
      message.other = undefined;
    }
    return message;
  },

  toJSON(message: DefaultNodeInfo): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = message.protocolVersion
        ? ProtocolVersion.toJSON(message.protocolVersion)
        : undefined);
    message.defaultNodeId !== undefined &&
      (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined &&
      (obj.channels = base64FromBytes(
        message.channels !== undefined ? message.channels : new Uint8Array()
      ));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined &&
      (obj.other = message.other
        ? DefaultNodeInfoOther.toJSON(message.other)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DefaultNodeInfo>): DefaultNodeInfo {
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    if (
      object.protocolVersion !== undefined &&
      object.protocolVersion !== null
    ) {
      message.protocolVersion = ProtocolVersion.fromPartial(
        object.protocolVersion
      );
    } else {
      message.protocolVersion = undefined;
    }
    if (object.defaultNodeId !== undefined && object.defaultNodeId !== null) {
      message.defaultNodeId = object.defaultNodeId;
    } else {
      message.defaultNodeId = "";
    }
    if (object.listenAddr !== undefined && object.listenAddr !== null) {
      message.listenAddr = object.listenAddr;
    } else {
      message.listenAddr = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    if (object.channels !== undefined && object.channels !== null) {
      message.channels = object.channels;
    } else {
      message.channels = new Uint8Array();
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.other !== undefined && object.other !== null) {
      message.other = DefaultNodeInfoOther.fromPartial(object.other);
    } else {
      message.other = undefined;
    }
    return message;
  },
};

const baseDefaultNodeInfoOther: object = { txIndex: "", rpcAddress: "" };

export const DefaultNodeInfoOther = {
  encode(
    message: DefaultNodeInfoOther,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfoOther {
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    if (object.txIndex !== undefined && object.txIndex !== null) {
      message.txIndex = String(object.txIndex);
    } else {
      message.txIndex = "";
    }
    if (object.rpcAddress !== undefined && object.rpcAddress !== null) {
      message.rpcAddress = String(object.rpcAddress);
    } else {
      message.rpcAddress = "";
    }
    return message;
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<DefaultNodeInfoOther>): DefaultNodeInfoOther {
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    if (object.txIndex !== undefined && object.txIndex !== null) {
      message.txIndex = object.txIndex;
    } else {
      message.txIndex = "";
    }
    if (object.rpcAddress !== undefined && object.rpcAddress !== null) {
      message.rpcAddress = object.rpcAddress;
    } else {
      message.rpcAddress = "";
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
