import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** MsgCreateProof is the message used for creating a new proof of existence */
export interface MsgCreateProof {
    /** creator is the account address that created the proof */
    creator: string;
    /** hash is the SHA-256 hash in HEX format */
    hash: string;
}
/** MsgCreateProof is the message used for creating a new proof of existence */
export interface MsgCreateProofSDKType {
    /** creator is the account address that created the proof */
    creator: string;
    /** hash is the SHA-256 hash in HEX format */
    hash: string;
}
/** MsgCreateProofResponse is response from creating a new proof of existence */
export interface MsgCreateProofResponse {
}
/** MsgCreateProofResponse is response from creating a new proof of existence */
export interface MsgCreateProofResponseSDKType {
}
export declare const MsgCreateProof: {
    encode(message: MsgCreateProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProof;
    fromPartial(object: DeepPartial<MsgCreateProof>): MsgCreateProof;
};
export declare const MsgCreateProofResponse: {
    encode(_: MsgCreateProofResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProofResponse;
    fromPartial(_: DeepPartial<MsgCreateProofResponse>): MsgCreateProofResponse;
};
