import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Module is the config object for the auth module. */
export interface Module {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32Prefix: string;
  /** module_account_permissions are module account permissions. */
  moduleAccountPermissions: ModuleAccountPermission[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
/** Module is the config object for the auth module. */
export interface ModuleSDKType {
  bech32_prefix: string;
  module_account_permissions: ModuleAccountPermissionSDKType[];
  authority: string;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
  /** account is the name of the module. */
  account: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions: string[];
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermissionSDKType {
  account: string;
  permissions: string[];
}
function createBaseModule(): Module {
  return {
    bech32Prefix: "",
    moduleAccountPermissions: [],
    authority: ""
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    for (const v of message.moduleAccountPermissions) {
      ModuleAccountPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
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
          message.bech32Prefix = reader.string();
          break;
        case 2:
          message.moduleAccountPermissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : "",
      moduleAccountPermissions: Array.isArray(object?.moduleAccountPermissions) ? object.moduleAccountPermissions.map((e: any) => ModuleAccountPermission.fromJSON(e)) : [],
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    if (message.moduleAccountPermissions) {
      obj.moduleAccountPermissions = message.moduleAccountPermissions.map(e => e ? ModuleAccountPermission.toJSON(e) : undefined);
    } else {
      obj.moduleAccountPermissions = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.bech32Prefix = object.bech32Prefix ?? "";
    message.moduleAccountPermissions = object.moduleAccountPermissions?.map(e => ModuleAccountPermission.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  }
};
function createBaseModuleAccountPermission(): ModuleAccountPermission {
  return {
    account: "",
    permissions: []
  };
}
export const ModuleAccountPermission = {
  encode(message: ModuleAccountPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccountPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccountPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleAccountPermission {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ModuleAccountPermission): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ModuleAccountPermission>): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    message.account = object.account ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  }
};