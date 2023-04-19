"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _types = require("./types");
var _helpers = require("../../../helpers");
var _tx = require("./tx");
var AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: function toAmino(_ref) {
      var admin = _ref.admin,
        members = _ref.members,
        metadata = _ref.metadata;
      return {
        admin: admin,
        members: members.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        }),
        metadata: metadata
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var admin = _ref2.admin,
        members = _ref2.members,
        metadata = _ref2.metadata;
      return {
        admin: admin,
        members: members.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        }),
        metadata: metadata
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: function toAmino(_ref3) {
      var admin = _ref3.admin,
        groupId = _ref3.groupId,
        memberUpdates = _ref3.memberUpdates;
      return {
        admin: admin,
        group_id: groupId.toString(),
        member_updates: memberUpdates.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var admin = _ref4.admin,
        group_id = _ref4.group_id,
        member_updates = _ref4.member_updates;
      return {
        admin: admin,
        groupId: _helpers.Long.fromString(group_id),
        memberUpdates: member_updates.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        })
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: function toAmino(_ref5) {
      var admin = _ref5.admin,
        groupId = _ref5.groupId,
        newAdmin = _ref5.newAdmin;
      return {
        admin: admin,
        group_id: groupId.toString(),
        new_admin: newAdmin
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var admin = _ref6.admin,
        group_id = _ref6.group_id,
        new_admin = _ref6.new_admin;
      return {
        admin: admin,
        groupId: _helpers.Long.fromString(group_id),
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: function toAmino(_ref7) {
      var admin = _ref7.admin,
        groupId = _ref7.groupId,
        metadata = _ref7.metadata;
      return {
        admin: admin,
        group_id: groupId.toString(),
        metadata: metadata
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var admin = _ref8.admin,
        group_id = _ref8.group_id,
        metadata = _ref8.metadata;
      return {
        admin: admin,
        groupId: _helpers.Long.fromString(group_id),
        metadata: metadata
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: function toAmino(_ref9) {
      var admin = _ref9.admin,
        groupId = _ref9.groupId,
        metadata = _ref9.metadata,
        decisionPolicy = _ref9.decisionPolicy;
      return {
        admin: admin,
        group_id: groupId.toString(),
        metadata: metadata,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var admin = _ref10.admin,
        group_id = _ref10.group_id,
        metadata = _ref10.metadata,
        decision_policy = _ref10.decision_policy;
      return {
        admin: admin,
        groupId: _helpers.Long.fromString(group_id),
        metadata: metadata,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: function toAmino(_ref11) {
      var admin = _ref11.admin,
        members = _ref11.members,
        groupMetadata = _ref11.groupMetadata,
        groupPolicyMetadata = _ref11.groupPolicyMetadata,
        groupPolicyAsAdmin = _ref11.groupPolicyAsAdmin,
        decisionPolicy = _ref11.decisionPolicy;
      return {
        admin: admin,
        members: members.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        }),
        group_metadata: groupMetadata,
        group_policy_metadata: groupPolicyMetadata,
        group_policy_as_admin: groupPolicyAsAdmin,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var admin = _ref12.admin,
        members = _ref12.members,
        group_metadata = _ref12.group_metadata,
        group_policy_metadata = _ref12.group_policy_metadata,
        group_policy_as_admin = _ref12.group_policy_as_admin,
        decision_policy = _ref12.decision_policy;
      return {
        admin: admin,
        members: members.map(function (el0) {
          return {
            address: el0.address,
            weight: el0.weight,
            metadata: el0.metadata
          };
        }),
        groupMetadata: group_metadata,
        groupPolicyMetadata: group_policy_metadata,
        groupPolicyAsAdmin: group_policy_as_admin,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    toAmino: function toAmino(_ref13) {
      var admin = _ref13.admin,
        groupPolicyAddress = _ref13.groupPolicyAddress,
        newAdmin = _ref13.newAdmin;
      return {
        admin: admin,
        group_policy_address: groupPolicyAddress,
        new_admin: newAdmin
      };
    },
    fromAmino: function fromAmino(_ref14) {
      var admin = _ref14.admin,
        group_policy_address = _ref14.group_policy_address,
        new_admin = _ref14.new_admin;
      return {
        admin: admin,
        groupPolicyAddress: group_policy_address,
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
    toAmino: function toAmino(_ref15) {
      var admin = _ref15.admin,
        groupPolicyAddress = _ref15.groupPolicyAddress,
        decisionPolicy = _ref15.decisionPolicy;
      return {
        admin: admin,
        group_policy_address: groupPolicyAddress,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: function fromAmino(_ref16) {
      var admin = _ref16.admin,
        group_policy_address = _ref16.group_policy_address,
        decision_policy = _ref16.decision_policy;
      return {
        admin: admin,
        groupPolicyAddress: group_policy_address,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    toAmino: function toAmino(_ref17) {
      var admin = _ref17.admin,
        groupPolicyAddress = _ref17.groupPolicyAddress,
        metadata = _ref17.metadata;
      return {
        admin: admin,
        group_policy_address: groupPolicyAddress,
        metadata: metadata
      };
    },
    fromAmino: function fromAmino(_ref18) {
      var admin = _ref18.admin,
        group_policy_address = _ref18.group_policy_address,
        metadata = _ref18.metadata;
      return {
        admin: admin,
        groupPolicyAddress: group_policy_address,
        metadata: metadata
      };
    }
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    toAmino: function toAmino(_ref19) {
      var groupPolicyAddress = _ref19.groupPolicyAddress,
        proposers = _ref19.proposers,
        metadata = _ref19.metadata,
        messages = _ref19.messages,
        exec = _ref19.exec,
        title = _ref19.title,
        summary = _ref19.summary;
      return {
        group_policy_address: groupPolicyAddress,
        proposers: proposers,
        metadata: metadata,
        messages: messages.map(function (el0) {
          return {
            type_url: el0.typeUrl,
            value: el0.value
          };
        }),
        exec: exec,
        title: title,
        summary: summary
      };
    },
    fromAmino: function fromAmino(_ref20) {
      var group_policy_address = _ref20.group_policy_address,
        proposers = _ref20.proposers,
        metadata = _ref20.metadata,
        messages = _ref20.messages,
        exec = _ref20.exec,
        title = _ref20.title,
        summary = _ref20.summary;
      return {
        groupPolicyAddress: group_policy_address,
        proposers: proposers,
        metadata: metadata,
        messages: messages.map(function (el0) {
          return {
            typeUrl: el0.type_url,
            value: el0.value
          };
        }),
        exec: (0, _tx.execFromJSON)(exec),
        title: title,
        summary: summary
      };
    }
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    toAmino: function toAmino(_ref21) {
      var proposalId = _ref21.proposalId,
        address = _ref21.address;
      return {
        proposal_id: proposalId.toString(),
        address: address
      };
    },
    fromAmino: function fromAmino(_ref22) {
      var proposal_id = _ref22.proposal_id,
        address = _ref22.address;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        address: address
      };
    }
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/group/MsgVote",
    toAmino: function toAmino(_ref23) {
      var proposalId = _ref23.proposalId,
        voter = _ref23.voter,
        option = _ref23.option,
        metadata = _ref23.metadata,
        exec = _ref23.exec;
      return {
        proposal_id: proposalId.toString(),
        voter: voter,
        option: option,
        metadata: metadata,
        exec: exec
      };
    },
    fromAmino: function fromAmino(_ref24) {
      var proposal_id = _ref24.proposal_id,
        voter = _ref24.voter,
        option = _ref24.option,
        metadata = _ref24.metadata,
        exec = _ref24.exec;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        voter: voter,
        option: (0, _types.voteOptionFromJSON)(option),
        metadata: metadata,
        exec: (0, _tx.execFromJSON)(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/group/MsgExec",
    toAmino: function toAmino(_ref25) {
      var proposalId = _ref25.proposalId,
        executor = _ref25.executor;
      return {
        proposal_id: proposalId.toString(),
        executor: executor
      };
    },
    fromAmino: function fromAmino(_ref26) {
      var proposal_id = _ref26.proposal_id,
        executor = _ref26.executor;
      return {
        proposalId: _helpers.Long.fromString(proposal_id),
        executor: executor
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: function toAmino(_ref27) {
      var address = _ref27.address,
        groupId = _ref27.groupId;
      return {
        address: address,
        group_id: groupId.toString()
      };
    },
    fromAmino: function fromAmino(_ref28) {
      var address = _ref28.address,
        group_id = _ref28.group_id;
      return {
        address: address,
        groupId: _helpers.Long.fromString(group_id)
      };
    }
  }
};
exports.AminoConverter = AminoConverter;