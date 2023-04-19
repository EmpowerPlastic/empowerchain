"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _gov = require("./gov");
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.gov.v1beta1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    toAmino: function toAmino(_ref) {
      var content = _ref.content,
        initialDeposit = _ref.initialDeposit,
        proposer = _ref.proposer;
      return {
        content: {
          type_url: content.typeUrl,
          value: content.value
        },
        initial_deposit: initialDeposit.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        proposer: proposer
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var content = _ref2.content,
        initial_deposit = _ref2.initial_deposit,
        proposer = _ref2.proposer;
      return {
        content: {
          typeUrl: content.type_url,
          value: content.value
        },
        initialDeposit: initial_deposit.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        proposer: proposer
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVote": {
    aminoType: "cosmos-sdk/MsgVote",
    toAmino: function toAmino(_ref3) {
      var proposalId = _ref3.proposalId,
        voter = _ref3.voter,
        option = _ref3.option;
      return {
        proposal_id: proposalId.toString(),
        voter: voter,
        option: option
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var proposal_id = _ref4.proposal_id,
        voter = _ref4.voter,
        option = _ref4.option;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        voter: voter,
        option: (0, _gov.voteOptionFromJSON)(option)
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/MsgVoteWeighted",
    toAmino: function toAmino(_ref5) {
      var proposalId = _ref5.proposalId,
        voter = _ref5.voter,
        options = _ref5.options;
      return {
        proposal_id: proposalId.toString(),
        voter: voter,
        options: options.map(function (el0) {
          return {
            option: el0.option,
            weight: el0.weight
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var proposal_id = _ref6.proposal_id,
        voter = _ref6.voter,
        options = _ref6.options;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        voter: voter,
        options: options.map(function (el0) {
          return {
            option: (0, _gov.voteOptionFromJSON)(el0.option),
            weight: el0.weight
          };
        })
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgDeposit": {
    aminoType: "cosmos-sdk/MsgDeposit",
    toAmino: function toAmino(_ref7) {
      var proposalId = _ref7.proposalId,
        depositor = _ref7.depositor,
        amount = _ref7.amount;
      return {
        proposal_id: proposalId.toString(),
        depositor: depositor,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var proposal_id = _ref8.proposal_id,
        depositor = _ref8.depositor,
        amount = _ref8.amount;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        depositor: depositor,
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