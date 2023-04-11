import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the accesscontrol module's genesis state. */

export interface GenesisState {
  permStores: ModulePermStore[];
}
/** GenesisState defines the accesscontrol module's genesis state. */

export interface GenesisStateSDKType {
  perm_stores: ModulePermStoreSDKType[];
}
/** All accesses for a given module */

export interface ModulePermStore {
  /** Name - will be used as a name for a PermStore */
  moduleName: string;
  /** List of accesses */

  accesses: Access[];
}
/** All accesses for a given module */

export interface ModulePermStoreSDKType {
  /** Name - will be used as a name for a PermStore */
  module_name: string;
  /** List of accesses */

  accesses: AccessSDKType[];
}
/**
 * Single access consisting of permissioned address and msgType
 * of the message it can invoke
 */

export interface Access {
  address: string;
  msgType: string;
}
/**
 * Single access consisting of permissioned address and msgType
 * of the message it can invoke
 */

export interface AccessSDKType {
  address: string;
  msg_type: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    permStores: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permStores) {
      ModulePermStore.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.permStores.push(ModulePermStore.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.permStores = object.permStores?.map(e => ModulePermStore.fromPartial(e)) || [];
    return message;
  }

};

function createBaseModulePermStore(): ModulePermStore {
  return {
    moduleName: "",
    accesses: []
  };
}

export const ModulePermStore = {
  encode(message: ModulePermStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }

    for (const v of message.accesses) {
      Access.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulePermStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulePermStore();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;

        case 2:
          message.accesses.push(Access.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModulePermStore>): ModulePermStore {
    const message = createBaseModulePermStore();
    message.moduleName = object.moduleName ?? "";
    message.accesses = object.accesses?.map(e => Access.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAccess(): Access {
  return {
    address: "",
    msgType: ""
  };
}

export const Access = {
  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Access {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccess();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.msgType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.address = object.address ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  }

};