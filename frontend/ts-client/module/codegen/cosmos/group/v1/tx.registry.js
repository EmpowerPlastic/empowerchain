import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export const registry = [["/cosmos.group.v1.MsgCreateGroup", MsgCreateGroup], ["/cosmos.group.v1.MsgUpdateGroupMembers", MsgUpdateGroupMembers], ["/cosmos.group.v1.MsgUpdateGroupAdmin", MsgUpdateGroupAdmin], ["/cosmos.group.v1.MsgUpdateGroupMetadata", MsgUpdateGroupMetadata], ["/cosmos.group.v1.MsgCreateGroupPolicy", MsgCreateGroupPolicy], ["/cosmos.group.v1.MsgCreateGroupWithPolicy", MsgCreateGroupWithPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", MsgUpdateGroupPolicyAdmin], ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", MsgUpdateGroupPolicyDecisionPolicy], ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", MsgUpdateGroupPolicyMetadata], ["/cosmos.group.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.group.v1.MsgWithdrawProposal", MsgWithdrawProposal], ["/cosmos.group.v1.MsgVote", MsgVote], ["/cosmos.group.v1.MsgExec", MsgExec], ["/cosmos.group.v1.MsgLeaveGroup", MsgLeaveGroup]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: MsgCreateGroup.encode(value).finish()
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: MsgUpdateGroupMembers.encode(value).finish()
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: MsgUpdateGroupAdmin.encode(value).finish()
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: MsgUpdateGroupMetadata.encode(value).finish()
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: MsgCreateGroupPolicy.encode(value).finish()
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: MsgCreateGroupWithPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: MsgUpdateGroupPolicyAdmin.encode(value).finish()
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: MsgUpdateGroupPolicyDecisionPolicy.encode(value).finish()
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: MsgUpdateGroupPolicyMetadata.encode(value).finish()
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: MsgWithdrawProposal.encode(value).finish()
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: MsgExec.encode(value).finish()
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: MsgLeaveGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value
      };
    }
  },
  fromPartial: {
    createGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroup",
        value: MsgCreateGroup.fromPartial(value)
      };
    },
    updateGroupMembers(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
        value: MsgUpdateGroupMembers.fromPartial(value)
      };
    },
    updateGroupAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
        value: MsgUpdateGroupAdmin.fromPartial(value)
      };
    },
    updateGroupMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
        value: MsgUpdateGroupMetadata.fromPartial(value)
      };
    },
    createGroupPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
        value: MsgCreateGroupPolicy.fromPartial(value)
      };
    },
    createGroupWithPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
        value: MsgCreateGroupWithPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyAdmin(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
        value: MsgUpdateGroupPolicyAdmin.fromPartial(value)
      };
    },
    updateGroupPolicyDecisionPolicy(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
        value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial(value)
      };
    },
    updateGroupPolicyMetadata(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
        value: MsgUpdateGroupPolicyMetadata.fromPartial(value)
      };
    },
    submitProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    withdrawProposal(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
        value: MsgWithdrawProposal.fromPartial(value)
      };
    },
    vote(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    exec(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgExec",
        value: MsgExec.fromPartial(value)
      };
    },
    leaveGroup(value) {
      return {
        typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
        value: MsgLeaveGroup.fromPartial(value)
      };
    }
  }
};