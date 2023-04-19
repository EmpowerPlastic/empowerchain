import { voteOptionFromJSON } from "./types";
import { Long } from "../../../helpers";
import { execFromJSON } from "./tx";
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }) => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    },
    fromAmino: ({
      admin,
      members,
      metadata
    }) => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: ({
      admin,
      groupId,
      memberUpdates
    }) => {
      return {
        admin,
        group_id: groupId.toString(),
        member_updates: memberUpdates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    },
    fromAmino: ({
      admin,
      group_id,
      member_updates
    }) => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        memberUpdates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        }))
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: ({
      admin,
      groupId,
      newAdmin
    }) => {
      return {
        admin,
        group_id: groupId.toString(),
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      group_id,
      new_admin
    }) => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: ({
      admin,
      groupId,
      metadata
    }) => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata
    }) => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: ({
      admin,
      groupId,
      metadata,
      decisionPolicy
    }) => {
      return {
        admin,
        group_id: groupId.toString(),
        metadata,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }) => {
      return {
        admin,
        groupId: Long.fromString(group_id),
        metadata,
        decisionPolicy: {
          typeUrl: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: ({
      admin,
      members,
      groupMetadata,
      groupPolicyMetadata,
      groupPolicyAsAdmin,
      decisionPolicy
    }) => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
        group_metadata: groupMetadata,
        group_policy_metadata: groupPolicyMetadata,
        group_policy_as_admin: groupPolicyAsAdmin,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }) => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata
        })),
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
    toAmino: ({
      admin,
      groupPolicyAddress,
      newAdmin
    }) => {
      return {
        admin,
        group_policy_address: groupPolicyAddress,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      new_admin
    }) => {
      return {
        admin,
        groupPolicyAddress: group_policy_address,
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
    toAmino: ({
      admin,
      groupPolicyAddress,
      decisionPolicy
    }) => {
      return {
        admin,
        group_policy_address: groupPolicyAddress,
        decision_policy: {
          type_url: decisionPolicy.typeUrl,
          value: decisionPolicy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      decision_policy
    }) => {
      return {
        admin,
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
    toAmino: ({
      admin,
      groupPolicyAddress,
      metadata
    }) => {
      return {
        admin,
        group_policy_address: groupPolicyAddress,
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_policy_address,
      metadata
    }) => {
      return {
        admin,
        groupPolicyAddress: group_policy_address,
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    toAmino: ({
      groupPolicyAddress,
      proposers,
      metadata,
      messages,
      exec,
      title,
      summary
    }) => {
      return {
        group_policy_address: groupPolicyAddress,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.typeUrl,
          value: el0.value
        })),
        exec,
        title,
        summary
      };
    },
    fromAmino: ({
      group_policy_address,
      proposers,
      metadata,
      messages,
      exec,
      title,
      summary
    }) => {
      return {
        groupPolicyAddress: group_policy_address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          typeUrl: el0.type_url,
          value: el0.value
        })),
        exec: execFromJSON(exec),
        title,
        summary
      };
    }
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    toAmino: ({
      proposalId,
      address
    }) => {
      return {
        proposal_id: proposalId.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }) => {
      return {
        proposalId: Long.fromString(proposal_id),
        address
      };
    }
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/group/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option,
      metadata,
      exec
    }) => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        option,
        metadata,
        exec
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }) => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata,
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/group/MsgExec",
    toAmino: ({
      proposalId,
      executor
    }) => {
      return {
        proposal_id: proposalId.toString(),
        executor
      };
    },
    fromAmino: ({
      proposal_id,
      executor
    }) => {
      return {
        proposalId: Long.fromString(proposal_id),
        executor
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: ({
      address,
      groupId
    }) => {
      return {
        address,
        group_id: groupId.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }) => {
      return {
        address,
        groupId: Long.fromString(group_id)
      };
    }
  }
};