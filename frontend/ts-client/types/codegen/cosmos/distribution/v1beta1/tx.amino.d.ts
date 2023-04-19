import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend } from "./tx";
export interface AminoMsgSetWithdrawAddress extends AminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: {
        delegator_address: string;
        withdraw_address: string;
    };
}
export interface AminoMsgWithdrawDelegatorReward extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: {
        delegator_address: string;
        validator_address: string;
    };
}
export interface AminoMsgWithdrawValidatorCommission extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: {
        validator_address: string;
    };
}
export interface AminoMsgFundCommunityPool extends AminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: {
        amount: {
            denom: string;
            amount: string;
        }[];
        depositor: string;
    };
}
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
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
export interface AminoMsgCommunityPoolSpend extends AminoMsg {
    type: "cosmos-sdk/MsgCommunityPoolSpend";
    value: {
        authority: string;
        recipient: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: MsgSetWithdrawAddress) => AminoMsgSetWithdrawAddress["value"];
        fromAmino: ({ delegator_address, withdraw_address }: AminoMsgSetWithdrawAddress["value"]) => MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: MsgWithdrawDelegatorReward) => AminoMsgWithdrawDelegatorReward["value"];
        fromAmino: ({ delegator_address, validator_address }: AminoMsgWithdrawDelegatorReward["value"]) => MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: MsgWithdrawValidatorCommission) => AminoMsgWithdrawValidatorCommission["value"];
        fromAmino: ({ validator_address }: AminoMsgWithdrawValidatorCommission["value"]) => MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: MsgFundCommunityPool) => AminoMsgFundCommunityPool["value"];
        fromAmino: ({ amount, depositor }: AminoMsgFundCommunityPool["value"]) => MsgFundCommunityPool;
    };
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: MsgCommunityPoolSpend) => AminoMsgCommunityPoolSpend["value"];
        fromAmino: ({ authority, recipient, amount }: AminoMsgCommunityPoolSpend["value"]) => MsgCommunityPoolSpend;
    };
};
