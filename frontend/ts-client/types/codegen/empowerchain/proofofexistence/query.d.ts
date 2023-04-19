import { ProofMetadata, ProofMetadataSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface QueryProofRequest {
    hash: string;
}
export interface QueryProofRequestSDKType {
    hash: string;
}
export interface QueryProofResponse {
    metadata?: ProofMetadata;
}
export interface QueryProofResponseSDKType {
    metadata?: ProofMetadataSDKType;
}
export declare const QueryProofRequest: {
    encode(message: QueryProofRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofRequest;
    fromPartial(object: DeepPartial<QueryProofRequest>): QueryProofRequest;
};
export declare const QueryProofResponse: {
    encode(message: QueryProofResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProofResponse;
    fromPartial(object: DeepPartial<QueryProofResponse>): QueryProofResponse;
};
