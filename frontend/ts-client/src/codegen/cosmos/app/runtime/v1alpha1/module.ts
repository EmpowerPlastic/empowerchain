import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object for the runtime module. */

export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */

  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */

  endBlockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */

  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */

  exportGenesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */

  overrideStoreKeys: StoreKeyConfig[];
}
/** Module is the config object for the runtime module. */

export interface ModuleSDKType {
  /** app_name is the name of the app. */
  app_name: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */

  begin_blockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */

  end_blockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */

  init_genesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */

  export_genesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */

  override_store_keys: StoreKeyConfigSDKType[];
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */

export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */

  kvStoreKey: string;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */

export interface StoreKeyConfigSDKType {
  /** name of the module to override the store key of */
  module_name: string;
  /** the kv store key to use instead of the module name. */

  kv_store_key: string;
}

function createBaseModule(): Module {
  return {
    appName: "",
    beginBlockers: [],
    endBlockers: [],
    initGenesis: [],
    exportGenesis: [],
    overrideStoreKeys: []
  };
}

export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }

    for (const v of message.beginBlockers) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.endBlockers) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.initGenesis) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.exportGenesis) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;

        case 2:
          message.beginBlockers.push(reader.string());
          break;

        case 3:
          message.endBlockers.push(reader.string());
          break;

        case 4:
          message.initGenesis.push(reader.string());
          break;

        case 5:
          message.exportGenesis.push(reader.string());
          break;

        case 6:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.beginBlockers = object.beginBlockers?.map(e => e) || [];
    message.endBlockers = object.endBlockers?.map(e => e) || [];
    message.initGenesis = object.initGenesis?.map(e => e) || [];
    message.exportGenesis = object.exportGenesis?.map(e => e) || [];
    message.overrideStoreKeys = object.overrideStoreKeys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    return message;
  }

};

function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}

export const StoreKeyConfig = {
  encode(message: StoreKeyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }

    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;

        case 2:
          message.kvStoreKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  }

};