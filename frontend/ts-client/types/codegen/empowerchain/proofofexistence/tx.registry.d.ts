import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProof } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createProof(value: MsgCreateProof): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createProof(value: MsgCreateProof): {
            typeUrl: string;
            value: MsgCreateProof;
        };
    };
    fromPartial: {
        createProof(value: MsgCreateProof): {
            typeUrl: string;
            value: MsgCreateProof;
        };
    };
};
