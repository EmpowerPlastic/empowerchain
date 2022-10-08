/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.nft.v1beta1";

/** Class defines the class of the nft type. */
export interface Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol: string;
  /** description is a brief description of nft classification. Optional */
  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uriHash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data: Any | undefined;
}

/** NFT defines the NFT. */
export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uriHash: string;
  /** data is an app specific data of the NFT. Optional */
  data: Any | undefined;
}

const baseClass: object = {
  id: "",
  name: "",
  symbol: "",
  description: "",
  uri: "",
  uriHash: "",
};

export const Class = {
  encode(message: Class, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClass } as Class;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Class {
    const message = { ...baseClass } as Class;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = String(object.uriHash);
    } else {
      message.uriHash = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: Class): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Class>): Class {
    const message = { ...baseClass } as Class;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = object.uriHash;
    } else {
      message.uriHash = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },
};

const baseNFT: object = { classId: "", id: "", uri: "", uriHash: "" };

export const NFT = {
  encode(message: NFT, writer: Writer = Writer.create()): Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNFT } as NFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFT {
    const message = { ...baseNFT } as NFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = String(object.uriHash);
    } else {
      message.uriHash = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    return message;
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NFT>): NFT {
    const message = { ...baseNFT } as NFT;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = object.uriHash;
    } else {
      message.uriHash = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
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
