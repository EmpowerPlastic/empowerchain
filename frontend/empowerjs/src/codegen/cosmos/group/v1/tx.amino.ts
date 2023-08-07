import { voteOptionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface MsgCreateGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
    }[];
    metadata: string;
  };
}
export interface MsgUpdateGroupMembersAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: {
    admin: string;
    group_id: string;
    member_updates: {
      address: string;
      weight: string;
      metadata: string;
    }[];
  };
}
export interface MsgUpdateGroupAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: {
    admin: string;
    group_id: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
  };
}
export interface MsgCreateGroupPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgCreateGroupWithPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
    }[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: {
    admin: string;
    group_policy_address: string;
    new_admin: string;
  };
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy";
  value: {
    admin: string;
    group_policy_address: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface MsgUpdateGroupPolicyMetadataAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: {
    admin: string;
    group_policy_address: string;
    metadata: string;
  };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgSubmitProposal";
  value: {
    group_policy_address: string;
    proposers: string[];
    metadata: string;
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    exec: number;
    title: string;
    summary: string;
  };
}
export interface MsgWithdrawProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: {
    proposal_id: string;
    address: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
    exec: number;
  };
}
export interface MsgExecAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: {
    proposal_id: string;
    executor: string;
  };
}
export interface MsgLeaveGroupAminoType extends AminoMsg {
  type: "cosmos-sdk/group/MsgLeaveGroup";
  value: {
    address: string;
    group_id: string;
  };
}
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroup): MsgCreateGroupAminoType["value"] => {
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
    }: MsgCreateGroupAminoType["value"]): MsgCreateGroup => {
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
    }: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoType["value"] => {
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
    }: MsgUpdateGroupMembersAminoType["value"]): MsgUpdateGroupMembers => {
      return {
        admin,
        groupId: BigInt(group_id),
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
    }: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoType["value"] => {
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
    }: MsgUpdateGroupAdminAminoType["value"]): MsgUpdateGroupAdmin => {
      return {
        admin,
        groupId: BigInt(group_id),
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
    }: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoType["value"] => {
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
    }: MsgUpdateGroupMetadataAminoType["value"]): MsgUpdateGroupMetadata => {
      return {
        admin,
        groupId: BigInt(group_id),
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
    }: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoType["value"] => {
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
    }: MsgCreateGroupPolicyAminoType["value"]): MsgCreateGroupPolicy => {
      return {
        admin,
        groupId: BigInt(group_id),
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
    }: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoType["value"] => {
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
    }: MsgCreateGroupWithPolicyAminoType["value"]): MsgCreateGroupWithPolicy => {
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
    }: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoType["value"] => {
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
    }: MsgUpdateGroupPolicyAdminAminoType["value"]): MsgUpdateGroupPolicyAdmin => {
      return {
        admin,
        groupPolicyAddress: group_policy_address,
        newAdmin: new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
    toAmino: ({
      admin,
      groupPolicyAddress,
      decisionPolicy
    }: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoType["value"] => {
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
    }: MsgUpdateGroupPolicyDecisionPolicyAminoType["value"]): MsgUpdateGroupPolicyDecisionPolicy => {
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
    }: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoType["value"] => {
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
    }: MsgUpdateGroupPolicyMetadataAminoType["value"]): MsgUpdateGroupPolicyMetadata => {
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
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
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
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
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
    }: MsgWithdrawProposal): MsgWithdrawProposalAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }: MsgWithdrawProposalAminoType["value"]): MsgWithdrawProposal => {
      return {
        proposalId: BigInt(proposal_id),
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
    }: MsgVote): MsgVoteAminoType["value"] => {
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
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposalId: BigInt(proposal_id),
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
    }: MsgExec): MsgExecAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        executor
      };
    },
    fromAmino: ({
      proposal_id,
      executor
    }: MsgExecAminoType["value"]): MsgExec => {
      return {
        proposalId: BigInt(proposal_id),
        executor
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    toAmino: ({
      address,
      groupId
    }: MsgLeaveGroup): MsgLeaveGroupAminoType["value"] => {
      return {
        address,
        group_id: groupId.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }: MsgLeaveGroupAminoType["value"]): MsgLeaveGroup => {
      return {
        address,
        groupId: BigInt(group_id)
      };
    }
  }
};