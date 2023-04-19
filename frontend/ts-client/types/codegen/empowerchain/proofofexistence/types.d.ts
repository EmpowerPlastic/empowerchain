import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/**
 * ProofMetadata is the metadata attached to a specific data proof
 * Because the proof itself is also the key, the data structure is hash -> ProofMetadata
 * The hash is the SHA-256 hash of the data of which is being made a proof for.
 */
export interface ProofMetadata {
    /** timestamp is the time the proof was added on-chain (block time) */
    timestamp?: Date;
    /** creator is the account address that created the proof */
    creator: string;
}
/**
 * ProofMetadata is the metadata attached to a specific data proof
 * Because the proof itself is also the key, the data structure is hash -> ProofMetadata
 * The hash is the SHA-256 hash of the data of which is being made a proof for.
 */
export interface ProofMetadataSDKType {
    /** timestamp is the time the proof was added on-chain (block time) */
    timestamp?: Date;
    /** creator is the account address that created the proof */
    creator: string;
}
export declare const ProofMetadata: {
    encode(message: ProofMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofMetadata;
    fromPartial(object: DeepPartial<ProofMetadata>): ProofMetadata;
};
