import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: bigint;
  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  index: bigint;
  index_owners?: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: bigint;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  index: bigint;
  owners: GenesisOwnersSDKType[];
}
function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: BigInt("0"),
    indexOwners: undefined
  };
}
export const GenesisOwners = {
  encode(message: GenesisOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.index.toString()));
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt("0"),
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
    };
  },
  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt("0")).toString());
    message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt("0");
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    index: BigInt("0"),
    owners: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.index.toString()));
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt("0"),
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt("0")).toString());
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt("0");
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  }
};