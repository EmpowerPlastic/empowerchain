"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.gov.v1.MsgSubmitProposal", _tx.MsgSubmitProposal], ["/cosmos.gov.v1.MsgExecLegacyContent", _tx.MsgExecLegacyContent], ["/cosmos.gov.v1.MsgVote", _tx.MsgVote], ["/cosmos.gov.v1.MsgVoteWeighted", _tx.MsgVoteWeighted], ["/cosmos.gov.v1.MsgDeposit", _tx.MsgDeposit], ["/cosmos.gov.v1.MsgUpdateParams", _tx.MsgUpdateParams]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: _tx.MsgSubmitProposal.encode(value).finish()
      };
    },
    execLegacyContent: function execLegacyContent(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: _tx.MsgExecLegacyContent.encode(value).finish()
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: _tx.MsgVote.encode(value).finish()
      };
    },
    voteWeighted: function voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: _tx.MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit: function deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: _tx.MsgDeposit.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: value
      };
    },
    execLegacyContent: function execLegacyContent(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: value
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: value
      };
    },
    voteWeighted: function voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: value
      };
    },
    deposit: function deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: value
      };
    }
  },
  fromPartial: {
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: _tx.MsgSubmitProposal.fromPartial(value)
      };
    },
    execLegacyContent: function execLegacyContent(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
        value: _tx.MsgExecLegacyContent.fromPartial(value)
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: _tx.MsgVote.fromPartial(value)
      };
    },
    voteWeighted: function voteWeighted(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
        value: _tx.MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit: function deposit(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: _tx.MsgDeposit.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;