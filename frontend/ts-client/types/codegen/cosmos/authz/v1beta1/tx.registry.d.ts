import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: Uint8Array;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: Uint8Array;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: MsgGrant;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
    fromPartial: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: MsgGrant;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
};
