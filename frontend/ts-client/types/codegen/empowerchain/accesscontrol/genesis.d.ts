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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ModulePermStore: {
    encode(message: ModulePermStore, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModulePermStore;
    fromPartial(object: DeepPartial<ModulePermStore>): ModulePermStore;
};
export declare const Access: {
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Access;
    fromPartial(object: DeepPartial<Access>): Access;
};
