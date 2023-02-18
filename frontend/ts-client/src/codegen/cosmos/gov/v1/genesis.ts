import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType, Params, ParamsSDKType } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** GenesisState defines the gov module's genesis state. */

export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  startingProposalId: Long;
  /** deposits defines all the deposits present at genesis. */

  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */

  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */

  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */

  /** @deprecated */

  depositParams?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */

  /** @deprecated */

  votingParams?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */

  /** @deprecated */

  tallyParams?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */

  params?: Params;
}
/** GenesisState defines the gov module's genesis state. */

export interface GenesisStateSDKType {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: Long;
  /** deposits defines all the deposits present at genesis. */

  deposits: DepositSDKType[];
  /** votes defines all the votes present at genesis. */

  votes: VoteSDKType[];
  /** proposals defines all the proposals present at genesis. */

  proposals: ProposalSDKType[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */

  /** @deprecated */

  deposit_params?: DepositParamsSDKType;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */

  /** @deprecated */

  voting_params?: VotingParamsSDKType;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */

  /** @deprecated */

  tally_params?: TallyParamsSDKType;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */

  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: Long.UZERO,
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: undefined,
    votingParams: undefined,
    tallyParams: undefined,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startingProposalId.isZero()) {
      writer.uint32(8).uint64(message.startingProposalId);
    }

    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }

    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }

    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;

        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;

        case 5:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;

        case 6:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;

        case 7:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;

        case 8:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? Long.fromValue(object.startingProposalId) : Long.UZERO;
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};