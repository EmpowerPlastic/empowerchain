"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: function toAmino(_ref) {
      var delegatorAddress = _ref.delegatorAddress,
        withdrawAddress = _ref.withdrawAddress;
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var delegator_address = _ref2.delegator_address,
        withdraw_address = _ref2.withdraw_address;
      return {
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: function toAmino(_ref3) {
      var delegatorAddress = _ref3.delegatorAddress,
        validatorAddress = _ref3.validatorAddress;
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var delegator_address = _ref4.delegator_address,
        validator_address = _ref4.validator_address;
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: function toAmino(_ref5) {
      var validatorAddress = _ref5.validatorAddress;
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var validator_address = _ref6.validator_address;
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: function toAmino(_ref7) {
      var amount = _ref7.amount,
        depositor = _ref7.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var amount = _ref8.amount,
        depositor = _ref8.depositor;
      return {
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        depositor: depositor
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref9) {
      var authority = _ref9.authority,
        params = _ref9.params;
      return {
        authority: authority,
        params: {
          community_tax: params.communityTax,
          base_proposer_reward: params.baseProposerReward,
          bonus_proposer_reward: params.bonusProposerReward,
          withdraw_addr_enabled: params.withdrawAddrEnabled
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var authority = _ref10.authority,
        params = _ref10.params;
      return {
        authority: authority,
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
    toAmino: function toAmino(_ref11) {
      var authority = _ref11.authority,
        recipient = _ref11.recipient,
        amount = _ref11.amount;
      return {
        authority: authority,
        recipient: recipient,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var authority = _ref12.authority,
        recipient = _ref12.recipient,
        amount = _ref12.amount;
      return {
        authority: authority,
        recipient: recipient,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;