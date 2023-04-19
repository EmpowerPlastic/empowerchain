import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
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
export declare const AminoConverter: {
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: string;
        toAmino: ({ admin, members, metadata }: MsgCreateGroup) => AminoMsgCreateGroup["value"];
        fromAmino: ({ admin, members, metadata }: AminoMsgCreateGroup["value"]) => MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: ({ admin, groupId, memberUpdates }: MsgUpdateGroupMembers) => AminoMsgUpdateGroupMembers["value"];
        fromAmino: ({ admin, group_id, member_updates }: AminoMsgUpdateGroupMembers["value"]) => MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupId, newAdmin }: MsgUpdateGroupAdmin) => AminoMsgUpdateGroupAdmin["value"];
        fromAmino: ({ admin, group_id, new_admin }: AminoMsgUpdateGroupAdmin["value"]) => MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata }: MsgUpdateGroupMetadata) => AminoMsgUpdateGroupMetadata["value"];
        fromAmino: ({ admin, group_id, metadata }: AminoMsgUpdateGroupMetadata["value"]) => MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, decisionPolicy }: MsgCreateGroupPolicy) => AminoMsgCreateGroupPolicy["value"];
        fromAmino: ({ admin, group_id, metadata, decision_policy }: AminoMsgCreateGroupPolicy["value"]) => MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: string;
        toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: MsgCreateGroupWithPolicy) => AminoMsgCreateGroupWithPolicy["value"];
        fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: AminoMsgCreateGroupWithPolicy["value"]) => MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, newAdmin }: MsgUpdateGroupPolicyAdmin) => AminoMsgUpdateGroupPolicyAdmin["value"];
        fromAmino: ({ admin, group_policy_address, new_admin }: AminoMsgUpdateGroupPolicyAdmin["value"]) => MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: MsgUpdateGroupPolicyDecisionPolicy) => AminoMsgUpdateGroupPolicyDecisionPolicy["value"];
        fromAmino: ({ admin, group_policy_address, decision_policy }: AminoMsgUpdateGroupPolicyDecisionPolicy["value"]) => MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, metadata }: MsgUpdateGroupPolicyMetadata) => AminoMsgUpdateGroupPolicyMetadata["value"];
        fromAmino: ({ admin, group_policy_address, metadata }: AminoMsgUpdateGroupPolicyMetadata["value"]) => MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: MsgSubmitProposal) => AminoMsgSubmitProposal["value"];
        fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: AminoMsgSubmitProposal["value"]) => MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: string;
        toAmino: ({ proposalId, address }: MsgWithdrawProposal) => AminoMsgWithdrawProposal["value"];
        fromAmino: ({ proposal_id, address }: AminoMsgWithdrawProposal["value"]) => MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata, exec }: MsgVote) => AminoMsgVote["value"];
        fromAmino: ({ proposal_id, voter, option, metadata, exec }: AminoMsgVote["value"]) => MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        aminoType: string;
        toAmino: ({ proposalId, executor }: MsgExec) => AminoMsgExec["value"];
        fromAmino: ({ proposal_id, executor }: AminoMsgExec["value"]) => MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: string;
        toAmino: ({ address, groupId }: MsgLeaveGroup) => AminoMsgLeaveGroup["value"];
        fromAmino: ({ address, group_id }: AminoMsgLeaveGroup["value"]) => MsgLeaveGroup;
    };
};
