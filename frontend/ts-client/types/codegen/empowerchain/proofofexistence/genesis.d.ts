import { ProofMetadata, ProofMetadataSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the proofofexistence module's genesis state. */
export interface GenesisState {
    proofList: Proof[];
}
/** GenesisState defines the proofofexistence module's genesis state. */
export interface GenesisStateSDKType {
    proof_list: ProofSDKType[];
}
/** Proof is the proof key and the proof metadata */
export interface Proof {
    /** hash is the key of the proof and the SHA-256 hash that is the proof itself */
    hash: string;
    /** metadata is the metadata of the proof */
    metadata?: ProofMetadata;
}
/** Proof is the proof key and the proof metadata */
export interface ProofSDKType {
    /** hash is the key of the proof and the SHA-256 hash that is the proof itself */
    hash: string;
    /** metadata is the metadata of the proof */
    metadata?: ProofMetadataSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
