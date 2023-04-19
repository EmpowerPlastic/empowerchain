import { voteOptionFromJSON } from "./gov";
import { Long } from "../../../helpers";
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
      return {
        authority,
        params: {
          min_deposit: params.minDeposit.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          max_deposit_period: (params.maxDepositPeriod * 1000000000).toString(),
          voting_period: (params.votingPeriod * 1000000000).toString(),
          quorum: params.quorum,
          threshold: params.threshold,
          veto_threshold: params.vetoThreshold,
          min_initial_deposit_ratio: params.minInitialDepositRatio
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          minDeposit: params.min_deposit.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          maxDepositPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.max_deposit_period) / 1000000000)),
            nanos: parseInt(params.max_deposit_period) % 1000000000
          },
          votingPeriod: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.voting_period) / 1000000000)),
            nanos: parseInt(params.voting_period) % 1000000000
          },
          quorum: params.quorum,
          threshold: params.threshold,
          vetoThreshold: params.veto_threshold,
          minInitialDepositRatio: params.min_initial_deposit_ratio
        }
      };
    }
  }
};