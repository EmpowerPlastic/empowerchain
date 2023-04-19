import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** EventAccessGranted is an event emitted when access is granted to a given message for a given address */
export interface EventAccessGranted {
    moduleName: string;
    account: string;
    msgType: string;
}
/** EventAccessGranted is an event emitted when access is granted to a given message for a given address */
export interface EventAccessGrantedSDKType {
    module_name: string;
    account: string;
    msg_type: string;
}
/** EventAccessRevoked is an event emitted when access is revoked to a given message for a given address */
export interface EventAccessRevoked {
    moduleName: string;
    account: string;
    msgType: string;
}
/** EventAccessRevoked is an event emitted when access is revoked to a given message for a given address */
export interface EventAccessRevokedSDKType {
    module_name: string;
    account: string;
    msg_type: string;
}
export declare const EventAccessGranted: {
    encode(message: EventAccessGranted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAccessGranted;
    fromPartial(object: DeepPartial<EventAccessGranted>): EventAccessGranted;
};
export declare const EventAccessRevoked: {
    encode(message: EventAccessRevoked, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAccessRevoked;
    fromPartial(object: DeepPartial<EventAccessRevoked>): EventAccessRevoked;
};
