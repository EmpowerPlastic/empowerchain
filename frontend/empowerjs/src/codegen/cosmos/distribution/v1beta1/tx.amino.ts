import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend } from "./tx";
export interface MsgSetWithdrawAddressAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgModifyWithdrawAddress";
  value: {
    delegator_address: string;
    withdraw_address: string;
  };
}
export interface MsgWithdrawDelegatorRewardAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawDelegationReward";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export interface MsgWithdrawValidatorCommissionAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawValCommission";
  value: {
    validator_address: string;
  };
}
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    amount: {
      denom: string;
      amount: string;
    }[];
    depositor: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/distribution/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      community_tax: string;
      base_proposer_reward: string;
      bonus_proposer_reward: string;
      withdraw_addr_enabled: boolean;
    };
  };
}
export interface MsgCommunityPoolSpendAminoType extends AminoMsg {
  type: "cosmos-sdk/distr/MsgCommunityPoolSpend";
  value: {
    authority: string;
    recipient: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegatorAddress,
      withdrawAddress
    }: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }: MsgSetWithdrawAddressAminoType["value"]): MsgSetWithdrawAddress => {
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
    }: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }: MsgWithdrawDelegatorRewardAminoType["value"]): MsgWithdrawDelegatorReward => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValCommission",
    toAmino: ({
      validatorAddress
    }: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoType["value"] => {
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      validator_address
    }: MsgWithdrawValidatorCommissionAminoType["value"]): MsgWithdrawValidatorCommission => {
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
    }: MsgFundCommunityPool): MsgFundCommunityPoolAminoType["value"] => {
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
    }: MsgFundCommunityPoolAminoType["value"]): MsgFundCommunityPool => {
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
    aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
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
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
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
    aminoType: "cosmos-sdk/distr/MsgCommunityPoolSpend",
    toAmino: ({
      authority,
      recipient,
      amount
    }: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoType["value"] => {
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
    }: MsgCommunityPoolSpendAminoType["value"]): MsgCommunityPoolSpend => {
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