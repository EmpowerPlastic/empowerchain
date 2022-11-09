/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "cosmos.gov.v1";

/** Since: cosmos-sdk 0.46 */

/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}

export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}

export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    default:
      return "UNKNOWN";
  }
}

/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposalId: number;
  depositor: string;
  amount: Coin[];
}

/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  id: number;
  messages: Any[];
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult: TallyResult | undefined;
  submitTime: Date | undefined;
  depositEndTime: Date | undefined;
  totalDeposit: Coin[];
  votingStartTime: Date | undefined;
  votingEndTime: Date | undefined;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  yesCount: string;
  abstainCount: string;
  noCount: string;
  noWithVetoCount: string;
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  proposalId: number;
  voter: string;
  options: WeightedVoteOption[];
  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata: string;
}

/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  maxDepositPeriod: Duration | undefined;
}

/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  votingPeriod: Duration | undefined;
}

/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  vetoThreshold: string;
}

const baseWeightedVoteOption: object = { option: 0, weight: "" };

export const WeightedVoteOption = {
  encode(
    message: WeightedVoteOption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WeightedVoteOption {
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    } else {
      message.option = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption {
    const message = { ...baseWeightedVoteOption } as WeightedVoteOption;
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    } else {
      message.option = 0;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
    return message;
  },
};

const baseDeposit: object = { proposalId: 0, depositor: "" };

export const Deposit = {
  encode(message: Deposit, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deposit {
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseProposal: object = { id: 0, status: 0, metadata: "" };

export const Proposal = {
  encode(message: Proposal, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(
        message.finalTallyResult,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.submitTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.depositEndTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingStartTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingEndTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    message.messages = [];
    message.totalDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.submitTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.depositEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.votingEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.messages = [];
    message.totalDeposit = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = proposalStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.finalTallyResult !== undefined &&
      object.finalTallyResult !== null
    ) {
      message.finalTallyResult = TallyResult.fromJSON(object.finalTallyResult);
    } else {
      message.finalTallyResult = undefined;
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = fromJsonTimestamp(object.submitTime);
    } else {
      message.submitTime = undefined;
    }
    if (object.depositEndTime !== undefined && object.depositEndTime !== null) {
      message.depositEndTime = fromJsonTimestamp(object.depositEndTime);
    } else {
      message.depositEndTime = undefined;
    }
    if (object.totalDeposit !== undefined && object.totalDeposit !== null) {
      for (const e of object.totalDeposit) {
        message.totalDeposit.push(Coin.fromJSON(e));
      }
    }
    if (
      object.votingStartTime !== undefined &&
      object.votingStartTime !== null
    ) {
      message.votingStartTime = fromJsonTimestamp(object.votingStartTime);
    } else {
      message.votingStartTime = undefined;
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = fromJsonTimestamp(object.votingEndTime);
    } else {
      message.votingEndTime = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.status !== undefined &&
      (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.submitTime !== undefined &&
      (obj.submitTime =
        message.submitTime !== undefined
          ? message.submitTime.toISOString()
          : null);
    message.depositEndTime !== undefined &&
      (obj.depositEndTime =
        message.depositEndTime !== undefined
          ? message.depositEndTime.toISOString()
          : null);
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined &&
      (obj.votingStartTime =
        message.votingStartTime !== undefined
          ? message.votingStartTime.toISOString()
          : null);
    message.votingEndTime !== undefined &&
      (obj.votingEndTime =
        message.votingEndTime !== undefined
          ? message.votingEndTime.toISOString()
          : null);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.messages = [];
    message.totalDeposit = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.finalTallyResult !== undefined &&
      object.finalTallyResult !== null
    ) {
      message.finalTallyResult = TallyResult.fromPartial(
        object.finalTallyResult
      );
    } else {
      message.finalTallyResult = undefined;
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = object.submitTime;
    } else {
      message.submitTime = undefined;
    }
    if (object.depositEndTime !== undefined && object.depositEndTime !== null) {
      message.depositEndTime = object.depositEndTime;
    } else {
      message.depositEndTime = undefined;
    }
    if (object.totalDeposit !== undefined && object.totalDeposit !== null) {
      for (const e of object.totalDeposit) {
        message.totalDeposit.push(Coin.fromPartial(e));
      }
    }
    if (
      object.votingStartTime !== undefined &&
      object.votingStartTime !== null
    ) {
      message.votingStartTime = object.votingStartTime;
    } else {
      message.votingStartTime = undefined;
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = object.votingEndTime;
    } else {
      message.votingEndTime = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseTallyResult: object = {
  yesCount: "",
  abstainCount: "",
  noCount: "",
  noWithVetoCount: "",
};

export const TallyResult = {
  encode(message: TallyResult, writer: Writer = Writer.create()): Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyResult } as TallyResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    if (object.yesCount !== undefined && object.yesCount !== null) {
      message.yesCount = String(object.yesCount);
    } else {
      message.yesCount = "";
    }
    if (object.abstainCount !== undefined && object.abstainCount !== null) {
      message.abstainCount = String(object.abstainCount);
    } else {
      message.abstainCount = "";
    }
    if (object.noCount !== undefined && object.noCount !== null) {
      message.noCount = String(object.noCount);
    } else {
      message.noCount = "";
    }
    if (
      object.noWithVetoCount !== undefined &&
      object.noWithVetoCount !== null
    ) {
      message.noWithVetoCount = String(object.noWithVetoCount);
    } else {
      message.noWithVetoCount = "";
    }
    return message;
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined &&
      (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined &&
      (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    if (object.yesCount !== undefined && object.yesCount !== null) {
      message.yesCount = object.yesCount;
    } else {
      message.yesCount = "";
    }
    if (object.abstainCount !== undefined && object.abstainCount !== null) {
      message.abstainCount = object.abstainCount;
    } else {
      message.abstainCount = "";
    }
    if (object.noCount !== undefined && object.noCount !== null) {
      message.noCount = object.noCount;
    } else {
      message.noCount = "";
    }
    if (
      object.noWithVetoCount !== undefined &&
      object.noWithVetoCount !== null
    ) {
      message.noWithVetoCount = object.noWithVetoCount;
    } else {
      message.noWithVetoCount = "";
    }
    return message;
  },
};

const baseVote: object = { proposalId: 0, voter: "", metadata: "" };

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.options = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? WeightedVoteOption.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.options = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromPartial(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseDepositParams: object = {};

export const DepositParams = {
  encode(message: DepositParams, writer: Writer = Writer.create()): Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(
        message.maxDepositPeriod,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    if (object.minDeposit !== undefined && object.minDeposit !== null) {
      for (const e of object.minDeposit) {
        message.minDeposit.push(Coin.fromJSON(e));
      }
    }
    if (
      object.maxDepositPeriod !== undefined &&
      object.maxDepositPeriod !== null
    ) {
      message.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    } else {
      message.maxDepositPeriod = undefined;
    }
    return message;
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    if (object.minDeposit !== undefined && object.minDeposit !== null) {
      for (const e of object.minDeposit) {
        message.minDeposit.push(Coin.fromPartial(e));
      }
    }
    if (
      object.maxDepositPeriod !== undefined &&
      object.maxDepositPeriod !== null
    ) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    } else {
      message.maxDepositPeriod = undefined;
    }
    return message;
  },
};

const baseVotingParams: object = {};

export const VotingParams = {
  encode(message: VotingParams, writer: Writer = Writer.create()): Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotingParams } as VotingParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromJSON(object.votingPeriod);
    } else {
      message.votingPeriod = undefined;
    }
    return message;
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod
        ? Duration.toJSON(message.votingPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    } else {
      message.votingPeriod = undefined;
    }
    return message;
  },
};

const baseTallyParams: object = {
  quorum: "",
  threshold: "",
  vetoThreshold: "",
};

export const TallyParams = {
  encode(message: TallyParams, writer: Writer = Writer.create()): Writer {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyParams } as TallyParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = String(object.quorum);
    } else {
      message.quorum = "";
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = String(object.threshold);
    } else {
      message.threshold = "";
    }
    if (object.vetoThreshold !== undefined && object.vetoThreshold !== null) {
      message.vetoThreshold = String(object.vetoThreshold);
    } else {
      message.vetoThreshold = "";
    }
    return message;
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined &&
      (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    } else {
      message.quorum = "";
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    } else {
      message.threshold = "";
    }
    if (object.vetoThreshold !== undefined && object.vetoThreshold !== null) {
      message.vetoThreshold = object.vetoThreshold;
    } else {
      message.vetoThreshold = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
