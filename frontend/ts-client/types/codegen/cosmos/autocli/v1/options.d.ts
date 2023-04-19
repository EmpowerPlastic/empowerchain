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
export declare const ModuleOptions: {
    encode(message: ModuleOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleOptions;
    fromPartial(object: DeepPartial<ModuleOptions>): ModuleOptions;
};
export declare const ServiceCommandDescriptor_SubCommandsEntry: {
    encode(message: ServiceCommandDescriptor_SubCommandsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceCommandDescriptor_SubCommandsEntry;
    fromPartial(object: DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>): ServiceCommandDescriptor_SubCommandsEntry;
};
export declare const ServiceCommandDescriptor: {
    encode(message: ServiceCommandDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceCommandDescriptor;
    fromPartial(object: DeepPartial<ServiceCommandDescriptor>): ServiceCommandDescriptor;
};
export declare const RpcCommandOptions_FlagOptionsEntry: {
    encode(message: RpcCommandOptions_FlagOptionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RpcCommandOptions_FlagOptionsEntry;
    fromPartial(object: DeepPartial<RpcCommandOptions_FlagOptionsEntry>): RpcCommandOptions_FlagOptionsEntry;
};
export declare const RpcCommandOptions: {
    encode(message: RpcCommandOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RpcCommandOptions;
    fromPartial(object: DeepPartial<RpcCommandOptions>): RpcCommandOptions;
};
export declare const FlagOptions: {
    encode(message: FlagOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FlagOptions;
    fromPartial(object: DeepPartial<FlagOptions>): FlagOptions;
};
export declare const PositionalArgDescriptor: {
    encode(message: PositionalArgDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionalArgDescriptor;
    fromPartial(object: DeepPartial<PositionalArgDescriptor>): PositionalArgDescriptor;
};
