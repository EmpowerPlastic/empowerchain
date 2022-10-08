/* eslint-disable */
import { Class, NFT } from "../../../cosmos/nft/v1beta1/nft";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.nft.v1beta1";

/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  entries: Entry[];
}

/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.classes = [];
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.classes = [];
    message.entries = [];
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromJSON(e));
      }
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Entry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? Class.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.classes = [];
    message.entries = [];
    if (object.classes !== undefined && object.classes !== null) {
      for (const e of object.classes) {
        message.classes.push(Class.fromPartial(e));
      }
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(Entry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEntry: object = { owner: "" };

export const Entry = {
  encode(message: Entry, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntry } as Entry;
    message.nfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Entry {
    const message = { ...baseEntry } as Entry;
    message.nfts = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Entry>): Entry {
    const message = { ...baseEntry } as Entry;
    message.nfts = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromPartial(e));
      }
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
