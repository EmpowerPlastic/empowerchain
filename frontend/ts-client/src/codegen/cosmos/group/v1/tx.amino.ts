import { voteOptionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface AminoMsgCreateGroup extends AminoMsg {
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
export interface AminoMsgUpdateGroupMembers extends AminoMsg {
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
export interface AminoMsgUpdateGroupAdmin extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: {
    admin: string;
    group_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateGroupMetadata extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
  };
}
export interface AminoMsgCreateGroupPolicy extends AminoMsg {
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
export interface AminoMsgCreateGroupWithPolicy extends AminoMsg {
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
export interface AminoMsgUpdateGroupPolicyAdmin extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: {
    admin: string;
    group_policy_address: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateGroupPolicyDecisionPolicy extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy";
  value: {
    admin: string;
    group_policy_address: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgUpdateGroupPolicyMetadata extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: {
    admin: string;
    group_policy_address: string;
    metadata: string;
  };
}
export interface AminoMsgSubmitProposal extends AminoMsg {
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
export interface AminoMsgWithdrawProposal extends AminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: {
    proposal_id: string;
    address: string;
  };
}
export interface AminoMsgVote extends AminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
    exec: number;
  };
}
export interface AminoMsgExec extends AminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: {
    proposal_id: string;
    executor: string;
  };
}
export interface AminoMsgLeaveGroup extends AminoMsg {
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
    }: MsgCreateGroup): AminoMsgCreateGroup["value"] => {
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
    }: AminoMsgCreateGroup["value"]): MsgCreateGroup => {
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
    }: MsgUpdateGroupMembers): AminoMsgUpdateGroupMembers["value"] => {
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
    }: AminoMsgUpdateGroupMembers["value"]): MsgUpdateGroupMembers => {
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
    }: MsgUpdateGroupAdmin): AminoMsgUpdateGroupAdmin["value"] => {
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
    }: AminoMsgUpdateGroupAdmin["value"]): MsgUpdateGroupAdmin => {
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
    }: MsgUpdateGroupMetadata): AminoMsgUpdateGroupMetadata["value"] => {
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
    }: AminoMsgUpdateGroupMetadata["value"]): MsgUpdateGroupMetadata => {
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
    }: MsgCreateGroupPolicy): AminoMsgCreateGroupPolicy["value"] => {
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
    }: AminoMsgCreateGroupPolicy["value"]): MsgCreateGroupPolicy => {
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
    }: MsgCreateGroupWithPolicy): AminoMsgCreateGroupWithPolicy["value"] => {
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
    }: AminoMsgCreateGroupWithPolicy["value"]): MsgCreateGroupWithPolicy => {
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
    }: MsgUpdateGroupPolicyAdmin): AminoMsgUpdateGroupPolicyAdmin["value"] => {
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
    }: AminoMsgUpdateGroupPolicyAdmin["value"]): MsgUpdateGroupPolicyAdmin => {
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
    }: MsgUpdateGroupPolicyDecisionPolicy): AminoMsgUpdateGroupPolicyDecisionPolicy["value"] => {
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
    }: AminoMsgUpdateGroupPolicyDecisionPolicy["value"]): MsgUpdateGroupPolicyDecisionPolicy => {
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
    }: MsgUpdateGroupPolicyMetadata): AminoMsgUpdateGroupPolicyMetadata["value"] => {
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
    }: AminoMsgUpdateGroupPolicyMetadata["value"]): MsgUpdateGroupPolicyMetadata => {
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
    }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
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
    }: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
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
    }: MsgWithdrawProposal): AminoMsgWithdrawProposal["value"] => {
      return {
        proposal_id: proposalId.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }: AminoMsgWithdrawProposal["value"]): MsgWithdrawProposal => {
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
    }: MsgVote): AminoMsgVote["value"] => {
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
    }: AminoMsgVote["value"]): MsgVote => {
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
    }: MsgExec): AminoMsgExec["value"] => {
      return {
        proposal_id: proposalId.toString(),
        executor
      };
    },
    fromAmino: ({
      proposal_id,
      executor
    }: AminoMsgExec["value"]): MsgExec => {
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
    }: MsgLeaveGroup): AminoMsgLeaveGroup["value"] => {
      return {
        address,
        group_id: groupId.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }: AminoMsgLeaveGroup["value"]): MsgLeaveGroup => {
      return {
        address,
        groupId: Long.fromString(group_id)
      };
    }
  }
};