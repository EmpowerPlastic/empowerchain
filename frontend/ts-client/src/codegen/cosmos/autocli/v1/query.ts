import { ModuleOptions, ModuleOptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */

export interface AppOptionsRequest {}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */

export interface AppOptionsRequestSDKType {}
export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value?: ModuleOptions;
}
export interface AppOptionsResponse_ModuleOptionsEntrySDKType {
  key: string;
  value?: ModuleOptionsSDKType;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */

export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  moduleOptions?: {
    [key: string]: ModuleOptions;
  };
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */

export interface AppOptionsResponseSDKType {
  /** module_options is a map of module name to autocli module options. */
  module_options?: {
    [key: string]: ModuleOptionsSDKType;
  };
}

function createBaseAppOptionsRequest(): AppOptionsRequest {
  return {};
}

export const AppOptionsRequest = {
  encode(_: AppOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest {
    const message = createBaseAppOptionsRequest();
    return message;
  }

};

function createBaseAppOptionsResponse_ModuleOptionsEntry(): AppOptionsResponse_ModuleOptionsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(message: AppOptionsResponse_ModuleOptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ModuleOptions.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseAppOptionsResponse(): AppOptionsResponse {
  return {
    moduleOptions: {}
  };
}

export const AppOptionsResponse = {
  encode(message: AppOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.moduleOptions[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse {
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce<{
      [key: string]: ModuleOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ModuleOptions.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};