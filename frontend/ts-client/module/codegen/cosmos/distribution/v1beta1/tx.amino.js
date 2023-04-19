export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegatorAddress,
      withdrawAddress
    }) => {
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }) => {
      return {
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: ({
      delegatorAddress,
      validatorAddress
    }) => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }) => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: ({
      validatorAddress
    }) => {
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      validator_address
    }) => {
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }) => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }) => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          community_tax: params.communityTax,
          base_proposer_reward: params.baseProposerReward,
          bonus_proposer_reward: params.bonusProposerReward,
          withdraw_addr_enabled: params.withdrawAddrEnabled
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
          communityTax: params.community_tax,
          baseProposerReward: params.base_proposer_reward,
          bonusProposerReward: params.bonus_proposer_reward,
          withdrawAddrEnabled: params.withdraw_addr_enabled
        }
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
    toAmino: ({
      authority,
      recipient,
      amount
    }) => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      recipient,
      amount
    }) => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};