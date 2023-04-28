import { voteOptionFromJSON } from "./gov";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams } from "./tx";
export interface AminoMsgSubmitProposal extends AminoMsg {
  type: "cosmos-sdk/v1/MsgSubmitProposal";
  value: {
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    initial_deposit: {
      denom: string;
      amount: string;
    }[];
    proposer: string;
    metadata: string;
    title: string;
    summary: string;
  };
}
export interface AminoMsgExecLegacyContent extends AminoMsg {
  type: "cosmos-sdk/v1/MsgExecLegacyContent";
  value: {
    content: {
      type_url: string;
      value: Uint8Array;
    };
    authority: string;
  };
}
export interface AminoMsgVote extends AminoMsg {
  type: "cosmos-sdk/v1/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
  };
}
export interface AminoMsgVoteWeighted extends AminoMsg {
  type: "cosmos-sdk/v1/MsgVoteWeighted";
  value: {
    proposal_id: string;
    voter: string;
    options: {
      option: number;
      weight: string;
    }[];
    metadata: string;
  };
}
export interface AminoMsgDeposit extends AminoMsg {
  type: "cosmos-sdk/v1/MsgDeposit";
  value: {
    proposal_id: string;
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgUpdateParams extends AminoMsg {
  type: "cosmos-sdk/x/gov/v1/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      min_deposit: {
        denom: string;
        amount: string;
      }[];
      max_deposit_period: {
        seconds: string;
        nanos: number;
      };
      voting_period: {
        seconds: string;
        nanos: number;
      };
      quorum: string;
      threshold: string;
      veto_threshold: string;
      min_initial_deposit_ratio: string;
      burn_vote_quorum: boolean;
      burn_proposal_deposit_prevote: boolean;
      burn_vote_veto: boolean;
    };
  };
}
export const AminoConverter = {
  "/cosmos.gov.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    toAmino: ({
      messages,
      initialDeposit,
      proposer,
      metadata,
      title,
      summary
    }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
      return {
        messages: messages.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        initial_deposit: initialDeposit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer,
        metadata,
        title,
        summary
      };
    },
    fromAmino: ({
      messages,
      initial_deposit,
      proposer,
      metadata,
      title,
      summary
    }: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
      return {
        messages: messages.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        initialDeposit: initial_deposit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer,
        metadata,
        title,
        summary
      };
    }
  },
  "/cosmos.gov.v1.MsgExecLegacyContent": {
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    toAmino: ({
      content,
      authority
    }: MsgExecLegacyContent): AminoMsgExecLegacyContent["value"] => {
      return {
        content: {
          type_url: content.typeUrl,
          value: content.value
        },
        authority
      };
    },
    fromAmino: ({
      content,
      authority
    }: AminoMsgExecLegacyContent["value"]): MsgExecLegacyContent => {
      return {
        content: {
          typeUrl: content.type_url,
          value: content.value
        },
        authority
      };
    }
  },
  "/cosmos.gov.v1.MsgVote": {
    aminoType: "cosmos-sdk/v1/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option,
      metadata
    }: MsgVote): AminoMsgVote["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        option,
        metadata
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata
    }: AminoMsgVote["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    toAmino: ({
      proposalId,
      voter,
      options,
      metadata
    }: MsgVoteWeighted): AminoMsgVoteWeighted["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        options: options.map(el0 => ({
          option: el0.option,
          weight: el0.weight
        })),
        metadata
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      options,
      metadata
    }: AminoMsgVoteWeighted["value"]): MsgVoteWeighted => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        options: options.map(el0 => ({
          option: voteOptionFromJSON(el0.option),
          weight: el0.weight
        })),
        metadata
      };
    }
  },
  "/cosmos.gov.v1.MsgDeposit": {
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    toAmino: ({
      proposalId,
      depositor,
      amount
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        proposal_id: proposalId.toString(),
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      proposal_id,
      depositor,
      amount
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        proposalId: Long.fromString(proposal_id),
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.gov.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          min_deposit: params.minDeposit.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          max_deposit_period: (params.maxDepositPeriod * 1_000_000_000).toString(),
          voting_period: (params.votingPeriod * 1_000_000_000).toString(),
          quorum: params.quorum,
          threshold: params.threshold,
          veto_threshold: params.vetoThreshold,
          min_initial_deposit_ratio: params.minInitialDepositRatio,
          burn_vote_quorum: params.burnVoteQuorum,
          burn_proposal_deposit_prevote: params.burnProposalDepositPrevote,
          burn_vote_veto: params.burnVoteVeto
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          minDeposit: params.min_deposit.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          maxDepositPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.max_deposit_period) / 1_000_000_000)),
            nanos: parseInt(params.max_deposit_period) % 1_000_000_000
          },
          votingPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.voting_period) / 1_000_000_000)),
            nanos: parseInt(params.voting_period) % 1_000_000_000
          },
          quorum: params.quorum,
          threshold: params.threshold,
          vetoThreshold: params.veto_threshold,
          minInitialDepositRatio: params.min_initial_deposit_ratio,
          burnVoteQuorum: params.burn_vote_quorum,
          burnProposalDepositPrevote: params.burn_proposal_deposit_prevote,
          burnVoteVeto: params.burn_vote_veto
        }
      };
    }
  }
};