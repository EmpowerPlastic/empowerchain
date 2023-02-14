import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */

export interface ModuleOptions {
  /** tx describes the tx command for the module. */
  tx?: ServiceCommandDescriptor;
  /** query describes the tx command for the module. */

  query?: ServiceCommandDescriptor;
}
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */

export interface ModuleOptionsSDKType {
  /** tx describes the tx command for the module. */
  tx?: ServiceCommandDescriptorSDKType;
  /** query describes the tx command for the module. */

  query?: ServiceCommandDescriptorSDKType;
}
export interface ServiceCommandDescriptor_SubCommandsEntry {
  key: string;
  value?: ServiceCommandDescriptor;
}
export interface ServiceCommandDescriptor_SubCommandsEntrySDKType {
  key: string;
  value?: ServiceCommandDescriptorSDKType;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */

export interface ServiceCommandDescriptor {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */

  rpcCommandOptions: RpcCommandOptions[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */

  subCommands?: {
    [key: string]: ServiceCommandDescriptor;
  };
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */

export interface ServiceCommandDescriptorSDKType {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */

  rpc_command_options: RpcCommandOptionsSDKType[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */

  sub_commands?: {
    [key: string]: ServiceCommandDescriptorSDKType;
  };
}
export interface RpcCommandOptions_FlagOptionsEntry {
  key: string;
  value?: FlagOptions;
}
export interface RpcCommandOptions_FlagOptionsEntrySDKType {
  key: string;
  value?: FlagOptionsSDKType;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */

export interface RpcCommandOptions {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpcMethod: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   * 
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */

  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */

  long: string;
  /** short is the short description shown in the 'help' output. */

  short: string;
  /** example is examples of how to use the command. */

  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */

  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */

  suggestFor: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */

  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */

  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */

  flagOptions?: {
    [key: string]: FlagOptions;
  };
  /** positional_args specifies positional arguments for the command. */

  positionalArgs: PositionalArgDescriptor[];
  /** skip specifies whether to skip this rpc method when generating commands. */

  skip: boolean;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */

export interface RpcCommandOptionsSDKType {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpc_method: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   * 
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */

  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */

  long: string;
  /** short is the short description shown in the 'help' output. */

  short: string;
  /** example is examples of how to use the command. */

  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */

  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */

  suggest_for: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */

  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */

  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */

  flag_options?: {
    [key: string]: FlagOptionsSDKType;
  };
  /** positional_args specifies positional arguments for the command. */

  positional_args: PositionalArgDescriptorSDKType[];
  /** skip specifies whether to skip this rpc method when generating commands. */

  skip: boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */

export interface FlagOptions {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */

  shorthand: string;
  /** usage is the help message. */

  usage: string;
  /** default_value is the default value as text. */

  defaultValue: string;
  /** default value is the default value as text if the flag is used without any value. */

  noOptDefaultValue: string;
  /** deprecated is the usage text to show if this flag is deprecated. */

  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */

  shorthandDeprecated: string;
  /** hidden hides the flag from help/usage text */

  hidden: boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */

export interface FlagOptionsSDKType {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */

  shorthand: string;
  /** usage is the help message. */

  usage: string;
  /** default_value is the default value as text. */

  default_value: string;
  /** default value is the default value as text if the flag is used without any value. */

  no_opt_default_value: string;
  /** deprecated is the usage text to show if this flag is deprecated. */

  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */

  shorthand_deprecated: string;
  /** hidden hides the flag from help/usage text */

  hidden: boolean;
}
/** PositionalArgDescriptor describes a positional argument. */

export interface PositionalArgDescriptor {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  protoField: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */

  varargs: boolean;
}
/** PositionalArgDescriptor describes a positional argument. */

export interface PositionalArgDescriptorSDKType {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  proto_field: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */

  varargs: boolean;
}

function createBaseModuleOptions(): ModuleOptions {
  return {
    tx: undefined,
    query: undefined
  };
}

export const ModuleOptions = {
  encode(message: ModuleOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.query = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModuleOptions>): ModuleOptions {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  }

};

function createBaseServiceCommandDescriptor_SubCommandsEntry(): ServiceCommandDescriptor_SubCommandsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message: ServiceCommandDescriptor_SubCommandsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceCommandDescriptor_SubCommandsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>): ServiceCommandDescriptor_SubCommandsEntry {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseServiceCommandDescriptor(): ServiceCommandDescriptor {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {}
  };
}

export const ServiceCommandDescriptor = {
  encode(message: ServiceCommandDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }

    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceCommandDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;

        case 2:
          message.rpcCommandOptions.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;

        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.subCommands[entry3.key] = entry3.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ServiceCommandDescriptor>): ServiceCommandDescriptor {
    const message = createBaseServiceCommandDescriptor();
    message.service = object.service ?? "";
    message.rpcCommandOptions = object.rpcCommandOptions?.map(e => RpcCommandOptions.fromPartial(e)) || [];
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseRpcCommandOptions_FlagOptionsEntry(): RpcCommandOptions_FlagOptionsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const RpcCommandOptions_FlagOptionsEntry = {
  encode(message: RpcCommandOptions_FlagOptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcCommandOptions_FlagOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RpcCommandOptions_FlagOptionsEntry>): RpcCommandOptions_FlagOptionsEntry {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseRpcCommandOptions(): RpcCommandOptions {
  return {
    rpcMethod: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggestFor: [],
    deprecated: "",
    version: "",
    flagOptions: {},
    positionalArgs: [],
    skip: false
  };
}

export const RpcCommandOptions = {
  encode(message: RpcCommandOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }

    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }

    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }

    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }

    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }

    for (const v of message.alias) {
      writer.uint32(50).string(v!);
    }

    for (const v of message.suggestFor) {
      writer.uint32(58).string(v!);
    }

    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }

    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }

    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(82).fork()).ldelim();
    });

    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcCommandOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;

        case 2:
          message.use = reader.string();
          break;

        case 3:
          message.long = reader.string();
          break;

        case 4:
          message.short = reader.string();
          break;

        case 5:
          message.example = reader.string();
          break;

        case 6:
          message.alias.push(reader.string());
          break;

        case 7:
          message.suggestFor.push(reader.string());
          break;

        case 8:
          message.deprecated = reader.string();
          break;

        case 9:
          message.version = reader.string();
          break;

        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());

          if (entry10.value !== undefined) {
            message.flagOptions[entry10.key] = entry10.value;
          }

          break;

        case 11:
          message.positionalArgs.push(PositionalArgDescriptor.decode(reader, reader.uint32()));
          break;

        case 12:
          message.skip = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RpcCommandOptions>): RpcCommandOptions {
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = object.rpcMethod ?? "";
    message.use = object.use ?? "";
    message.long = object.long ?? "";
    message.short = object.short ?? "";
    message.example = object.example ?? "";
    message.alias = object.alias?.map(e => e) || [];
    message.suggestFor = object.suggestFor?.map(e => e) || [];
    message.deprecated = object.deprecated ?? "";
    message.version = object.version ?? "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }

      return acc;
    }, {});
    message.positionalArgs = object.positionalArgs?.map(e => PositionalArgDescriptor.fromPartial(e)) || [];
    message.skip = object.skip ?? false;
    return message;
  }

};

function createBaseFlagOptions(): FlagOptions {
  return {
    name: "",
    shorthand: "",
    usage: "",
    defaultValue: "",
    noOptDefaultValue: "",
    deprecated: "",
    shorthandDeprecated: "",
    hidden: false
  };
}

export const FlagOptions = {
  encode(message: FlagOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }

    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }

    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }

    if (message.noOptDefaultValue !== "") {
      writer.uint32(42).string(message.noOptDefaultValue);
    }

    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }

    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }

    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlagOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.shorthand = reader.string();
          break;

        case 3:
          message.usage = reader.string();
          break;

        case 4:
          message.defaultValue = reader.string();
          break;

        case 5:
          message.noOptDefaultValue = reader.string();
          break;

        case 6:
          message.deprecated = reader.string();
          break;

        case 7:
          message.shorthandDeprecated = reader.string();
          break;

        case 8:
          message.hidden = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FlagOptions>): FlagOptions {
    const message = createBaseFlagOptions();
    message.name = object.name ?? "";
    message.shorthand = object.shorthand ?? "";
    message.usage = object.usage ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.noOptDefaultValue = object.noOptDefaultValue ?? "";
    message.deprecated = object.deprecated ?? "";
    message.shorthandDeprecated = object.shorthandDeprecated ?? "";
    message.hidden = object.hidden ?? false;
    return message;
  }

};

function createBasePositionalArgDescriptor(): PositionalArgDescriptor {
  return {
    protoField: "",
    varargs: false
  };
}

export const PositionalArgDescriptor = {
  encode(message: PositionalArgDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }

    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionalArgDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;

        case 2:
          message.varargs = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PositionalArgDescriptor>): PositionalArgDescriptor {
    const message = createBasePositionalArgDescriptor();
    message.protoField = object.protoField ?? "";
    message.varargs = object.varargs ?? false;
    return message;
  }

};