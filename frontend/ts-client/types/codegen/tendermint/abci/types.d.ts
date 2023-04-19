import { ConsensusParams, ConsensusParamsSDKType } from "../types/params";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare enum CheckTxTypeSDKType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare enum ResponseOfferSnapshot_ResultSDKType {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare enum ResponseApplySnapshotChunk_ResultSDKType {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum ResponseProcessProposal_ProposalStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare enum ResponseProcessProposal_ProposalStatusSDKType {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string;
export declare enum MisbehaviorType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare enum MisbehaviorTypeSDKType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function misbehaviorTypeFromJSON(object: any): MisbehaviorType;
export declare function misbehaviorTypeToJSON(object: MisbehaviorType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    beginBlock?: RequestBeginBlock;
    checkTx?: RequestCheckTx;
    deliverTx?: RequestDeliverTx;
    endBlock?: RequestEndBlock;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
    prepareProposal?: RequestPrepareProposal;
    processProposal?: RequestProcessProposal;
}
export interface RequestSDKType {
    echo?: RequestEchoSDKType;
    flush?: RequestFlushSDKType;
    info?: RequestInfoSDKType;
    init_chain?: RequestInitChainSDKType;
    query?: RequestQuerySDKType;
    begin_block?: RequestBeginBlockSDKType;
    check_tx?: RequestCheckTxSDKType;
    deliver_tx?: RequestDeliverTxSDKType;
    end_block?: RequestEndBlockSDKType;
    commit?: RequestCommitSDKType;
    list_snapshots?: RequestListSnapshotsSDKType;
    offer_snapshot?: RequestOfferSnapshotSDKType;
    load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
    prepare_proposal?: RequestPrepareProposalSDKType;
    process_proposal?: RequestProcessProposalSDKType;
}
export interface RequestEcho {
    message: string;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    blockVersion: Long;
    p2pVersion: Long;
    abciVersion: string;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: Long;
    p2p_version: Long;
    abci_version: string;
}
export interface RequestInitChain {
    time?: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: Long;
}
export interface RequestInitChainSDKType {
    time?: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: Long;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: Long;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header?: Header;
    lastCommitInfo?: CommitInfo;
    byzantineValidators: Misbehavior[];
}
export interface RequestBeginBlockSDKType {
    hash: Uint8Array;
    header?: HeaderSDKType;
    last_commit_info?: CommitInfoSDKType;
    byzantine_validators: MisbehaviorSDKType[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxSDKType {
    tx: Uint8Array;
    type: CheckTxTypeSDKType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestDeliverTxSDKType {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: Long;
}
export interface RequestEndBlockSDKType {
    height: Long;
}
export interface RequestCommit {
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
    /** snapshot offered by peers */
    snapshot?: SnapshotSDKType;
    /** light client-verified app hash for snapshot height */
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: Long;
    format: number;
    chunk: number;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: Long;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestPrepareProposal {
    /** the modified transactions cannot exceed this size. */
    maxTxBytes: Long;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    localLastCommit?: ExtendedCommitInfo;
    misbehavior: Misbehavior[];
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposerAddress: Uint8Array;
}
export interface RequestPrepareProposalSDKType {
    /** the modified transactions cannot exceed this size. */
    max_tx_bytes: Long;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    local_last_commit?: ExtendedCommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposer_address: Uint8Array;
}
export interface RequestProcessProposal {
    txs: Uint8Array[];
    proposedLastCommit?: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: Long;
    time?: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface RequestProcessProposalSDKType {
    txs: Uint8Array[];
    proposed_last_commit?: CommitInfoSDKType;
    misbehavior: MisbehaviorSDKType[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: Long;
    time?: Date;
    next_validators_hash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposer_address: Uint8Array;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    beginBlock?: ResponseBeginBlock;
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
    endBlock?: ResponseEndBlock;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
    prepareProposal?: ResponsePrepareProposal;
    processProposal?: ResponseProcessProposal;
}
export interface ResponseSDKType {
    exception?: ResponseExceptionSDKType;
    echo?: ResponseEchoSDKType;
    flush?: ResponseFlushSDKType;
    info?: ResponseInfoSDKType;
    init_chain?: ResponseInitChainSDKType;
    query?: ResponseQuerySDKType;
    begin_block?: ResponseBeginBlockSDKType;
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
    end_block?: ResponseEndBlockSDKType;
    commit?: ResponseCommitSDKType;
    list_snapshots?: ResponseListSnapshotsSDKType;
    offer_snapshot?: ResponseOfferSnapshotSDKType;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
    prepare_proposal?: ResponsePrepareProposalSDKType;
    process_proposal?: ResponseProcessProposalSDKType;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: Long;
    lastBlockHeight: Long;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: Long;
    last_block_height: Long;
    last_block_app_hash: Uint8Array;
}
export interface ResponseInitChain {
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseInitChainSDKType {
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    codespace: string;
}
export interface ResponseQuerySDKType {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: Long;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseBeginBlockSDKType {
    events: EventSDKType[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
    sender: string;
    priority: Long;
    /**
     * mempool_error is set by Tendermint.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempoolError: string;
}
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
    sender: string;
    priority: Long;
    /**
     * mempool_error is set by Tendermint.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempool_error: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTxSDKType {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates?: ConsensusParams;
    events: Event[];
}
export interface ResponseEndBlockSDKType {
    validator_updates: ValidatorUpdateSDKType[];
    consensus_param_updates?: ConsensusParamsSDKType;
    events: EventSDKType[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: Long;
}
export interface ResponseCommitSDKType {
    /** reserve 1 */
    data: Uint8Array;
    retain_height: Long;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsSDKType {
    snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotSDKType {
    result: ResponseOfferSnapshot_ResultSDKType;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkSDKType {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkSDKType {
    result: ResponseApplySnapshotChunk_ResultSDKType;
    /** Chunks to refetch and reapply */
    refetch_chunks: number[];
    /** Chunk senders to reject and ban */
    reject_senders: string[];
}
export interface ResponsePrepareProposal {
    txs: Uint8Array[];
}
export interface ResponsePrepareProposalSDKType {
    txs: Uint8Array[];
}
export interface ResponseProcessProposal {
    status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalSDKType {
    status: ResponseProcessProposal_ProposalStatusSDKType;
}
export interface CommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface CommitInfoSDKType {
    round: number;
    votes: VoteInfoSDKType[];
}
export interface ExtendedCommitInfo {
    /** The round at which the block proposer decided in the previous height. */
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     */
    votes: ExtendedVoteInfo[];
}
export interface ExtendedCommitInfoSDKType {
    /** The round at which the block proposer decided in the previous height. */
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     */
    votes: ExtendedVoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTx;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
    height: Long;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: Long;
}
/** Validator */
export interface ValidatorSDKType {
    /**
     * The first 20 bytes of SHA256(public key)
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     */
    address: Uint8Array;
    /** The voting power */
    power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey?: PublicKey;
    power: Long;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
    pub_key?: PublicKeySDKType;
    power: Long;
}
/** VoteInfo */
export interface VoteInfo {
    validator?: Validator;
    signedLastBlock: boolean;
}
/** VoteInfo */
export interface VoteInfoSDKType {
    validator?: ValidatorSDKType;
    signed_last_block: boolean;
}
export interface ExtendedVoteInfo {
    validator?: Validator;
    signedLastBlock: boolean;
    /** Reserved for future use */
    voteExtension: Uint8Array;
}
export interface ExtendedVoteInfoSDKType {
    validator?: ValidatorSDKType;
    signed_last_block: boolean;
    /** Reserved for future use */
    vote_extension: Uint8Array;
}
export interface Misbehavior {
    type: MisbehaviorType;
    /** The offending validator */
    validator?: Validator;
    /** The height when the offense occurred */
    height: Long;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: Long;
}
export interface MisbehaviorSDKType {
    type: MisbehaviorTypeSDKType;
    /** The offending validator */
    validator?: ValidatorSDKType;
    /** The height when the offense occurred */
    height: Long;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power: Long;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: Long;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotSDKType {
    /** The height at which the snapshot was taken */
    height: Long;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromPartial(object: DeepPartial<Request>): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromPartial(object: DeepPartial<RequestEcho>): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromPartial(_: DeepPartial<RequestFlush>): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromPartial(object: DeepPartial<RequestInfo>): RequestInfo;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromPartial(object: DeepPartial<RequestQuery>): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromPartial(object: DeepPartial<RequestBeginBlock>): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromPartial(object: DeepPartial<RequestDeliverTx>): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromPartial(object: DeepPartial<RequestEndBlock>): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromPartial(_: DeepPartial<RequestCommit>): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
};
export declare const RequestPrepareProposal: {
    encode(message: RequestPrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPrepareProposal;
    fromPartial(object: DeepPartial<RequestPrepareProposal>): RequestPrepareProposal;
};
export declare const RequestProcessProposal: {
    encode(message: RequestProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposal;
    fromPartial(object: DeepPartial<RequestProcessProposal>): RequestProcessProposal;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromPartial(object: DeepPartial<Response>): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromPartial(object: DeepPartial<ResponseException>): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromPartial(object: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromPartial(object: DeepPartial<ResponseDeliverTx>): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromPartial(object: DeepPartial<ResponseEndBlock>): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
};
export declare const ResponsePrepareProposal: {
    encode(message: ResponsePrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePrepareProposal;
    fromPartial(object: DeepPartial<ResponsePrepareProposal>): ResponsePrepareProposal;
};
export declare const ResponseProcessProposal: {
    encode(message: ResponseProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseProcessProposal;
    fromPartial(object: DeepPartial<ResponseProcessProposal>): ResponseProcessProposal;
};
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromPartial(object: DeepPartial<CommitInfo>): CommitInfo;
};
export declare const ExtendedCommitInfo: {
    encode(message: ExtendedCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo;
    fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromPartial(object: DeepPartial<EventAttribute>): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromPartial(object: DeepPartial<VoteInfo>): VoteInfo;
};
export declare const ExtendedVoteInfo: {
    encode(message: ExtendedVoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo;
    fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo;
};
export declare const Misbehavior: {
    encode(message: Misbehavior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior;
    fromPartial(object: DeepPartial<Misbehavior>): Misbehavior;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
