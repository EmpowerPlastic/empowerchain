"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.group.v1.MsgCreateGroup", _tx.MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", _tx.MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", _tx.MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", _tx.MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", _tx.MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", _tx.MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", _tx.MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", _tx.MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", _tx.MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", _tx.MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", _tx.MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", _tx.MsgVote], ["/cosmos.group.v1.MsgExec", _tx.MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", _tx.MsgLeaveGroup]];
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
    createGroup: function createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: _tx.MsgCreateGroup.encode(value).finish()
      };
    },
    updateGroupMembers: function updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: _tx.MsgUpdateGroupMembers.encode(value).finish()
      };
    },
    updateGroupAdmin: function updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: _tx.MsgUpdateGroupAdmin.encode(value).finish()
      };
    },
    updateGroupMetadata: function updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: _tx.MsgUpdateGroupMetadata.encode(value).finish()
      };
    },
    createGroupPolicy: function createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: _tx.MsgCreateGroupPolicy.encode(value).finish()
      };
    },
    createGroupWithPolicy: function createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: _tx.MsgCreateGroupWithPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyAdmin: function updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: _tx.MsgUpdateGroupPolicyAdmin.encode(value).finish()
      };
    },
    updateGroupPolicyDecisionPolicy: function updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: _tx.MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyMetadata: function updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: _tx.MsgUpdateGroupPolicyMetadata.encode(value).finish()
      };
    },
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: _tx.MsgSubmitProposal.encode(value).finish()
      };
    },
    withdrawProposal: function withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: _tx.MsgWithdrawProposal.encode(value).finish()
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: _tx.MsgVote.encode(value).finish()
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: _tx.MsgExec.encode(value).finish()
      };
    },
    leaveGroup: function leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: _tx.MsgLeaveGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGroup: function createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: value
      };
    },
    updateGroupMembers: function updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: value
      };
    },
    updateGroupAdmin: function updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: value
      };
    },
    updateGroupMetadata: function updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: value
      };
    },
    createGroupPolicy: function createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: value
      };
    },
    createGroupWithPolicy: function createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: value
      };
    },
    updateGroupPolicyAdmin: function updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: value
      };
    },
    updateGroupPolicyDecisionPolicy: function updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: value
      };
    },
    updateGroupPolicyMetadata: function updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: value
      };
    },
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: value
      };
    },
    withdrawProposal: function withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: value
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: value
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: value
      };
    },
    leaveGroup: function leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: value
      };
    }
  },
  fromPartial: {
    createGroup: function createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: _tx.MsgCreateGroup.fromPartial(value)
      };
    },
    updateGroupMembers: function updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: _tx.MsgUpdateGroupMembers.fromPartial(value)
      };
    },
    updateGroupAdmin: function updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: _tx.MsgUpdateGroupAdmin.fromPartial(value)
      };
    },
    updateGroupMetadata: function updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: _tx.MsgUpdateGroupMetadata.fromPartial(value)
      };
    },
    createGroupPolicy: function createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: _tx.MsgCreateGroupPolicy.fromPartial(value)
      };
    },
    createGroupWithPolicy: function createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: _tx.MsgCreateGroupWithPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyAdmin: function updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: _tx.MsgUpdateGroupPolicyAdmin.fromPartial(value)
      };
    },
    updateGroupPolicyDecisionPolicy: function updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: _tx.MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyMetadata: function updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: _tx.MsgUpdateGroupPolicyMetadata.fromPartial(value)
      };
    },
    submitProposal: function submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: _tx.MsgSubmitProposal.fromPartial(value)
      };
    },
    withdrawProposal: function withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: _tx.MsgWithdrawProposal.fromPartial(value)
      };
    },
    vote: function vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: _tx.MsgVote.fromPartial(value)
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: _tx.MsgExec.fromPartial(value)
      };
    },
    leaveGroup: function leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: _tx.MsgLeaveGroup.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;