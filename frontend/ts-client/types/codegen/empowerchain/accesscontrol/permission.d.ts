import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Permission {
}
export interface PermissionSDKType {
}
export declare const Permission: {
    encode(_: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
    fromPartial(_: DeepPartial<Permission>): Permission;
};
