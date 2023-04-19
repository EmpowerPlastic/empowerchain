import { RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, ResponseCommit, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
    /** the store key for the KVStore this pair originates from */
    store_key: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
    requestBeginBlock?: RequestBeginBlock;
    responseBeginBlock?: ResponseBeginBlock;
    deliverTxs: BlockMetadata_DeliverTx[];
    requestEndBlock?: RequestEndBlock;
    responseEndBlock?: ResponseEndBlock;
    responseCommit?: ResponseCommit;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
    request_begin_block?: RequestBeginBlockSDKType;
    response_begin_block?: ResponseBeginBlockSDKType;
    deliver_txs: BlockMetadata_DeliverTxSDKType[];
    request_end_block?: RequestEndBlockSDKType;
    response_end_block?: ResponseEndBlockSDKType;
    response_commit?: ResponseCommitSDKType;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
    request?: RequestDeliverTx;
    response?: ResponseDeliverTx;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxSDKType {
    request?: RequestDeliverTxSDKType;
    response?: ResponseDeliverTxSDKType;
}
export declare const StoreKVPair: {
    encode(message: StoreKVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair;
    fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair;
};
export declare const BlockMetadata: {
    encode(message: BlockMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata;
    fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata;
};
export declare const BlockMetadata_DeliverTx: {
    encode(message: BlockMetadata_DeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata_DeliverTx;
    fromPartial(object: DeepPartial<BlockMetadata_DeliverTx>): BlockMetadata_DeliverTx;
};
