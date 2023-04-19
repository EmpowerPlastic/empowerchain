import { ModuleOptions, ModuleOptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequestSDKType {
}
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
export declare const AppOptionsRequest: {
    encode(_: AppOptionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest;
    fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest;
};
export declare const AppOptionsResponse_ModuleOptionsEntry: {
    encode(message: AppOptionsResponse_ModuleOptionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry;
    fromPartial(object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry;
};
export declare const AppOptionsResponse: {
    encode(message: AppOptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse;
    fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse;
};
