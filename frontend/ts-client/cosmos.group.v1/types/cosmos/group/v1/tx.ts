/* eslint-disable */
import {
  VoteOption,
  ProposalExecutorResult,
  MemberRequest,
  voteOptionFromJSON,
  voteOptionToJSON,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
} from "../../../cosmos/group/v1/types";
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}

export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}

export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    default:
      return "UNKNOWN";
  }
}

/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: number;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: number;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: MemberRequest[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: number;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: number;
  /** metadata is the updated group's metadata. */
  metadata: string;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: number;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy: Any | undefined;
}

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  groupPolicyAddress: string;
  /** new_admin is the new group policy admin. */
  newAdmin: string;
}

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  groupMetadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  groupPolicyMetadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  groupPolicyAsAdmin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy: Any | undefined;
}

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  groupId: number;
  /** group_policy_address is the account address of the newly created group policy. */
  groupPolicyAddress: string;
}

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy: Any | undefined;
}

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** metadata is the updated group policy metadata. */
  metadata: string;
}

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: number;
}

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposalId: number;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: number;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: number;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: number;
}

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {}

const baseMsgCreateGroup: object = { admin: "", metadata: "" };

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: Writer = Writer.create()): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberRequest.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? MemberRequest.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = { ...baseMsgCreateGroup } as MsgCreateGroup;
    message.members = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberRequest.fromPartial(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgCreateGroupResponse: object = { groupId: 0 };

export const MsgCreateGroupResponse = {
  encode(
    message: MsgCreateGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGroupResponse>
  ): MsgCreateGroupResponse {
    const message = { ...baseMsgCreateGroupResponse } as MsgCreateGroupResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    return message;
  },
};

const baseMsgUpdateGroupMembers: object = { admin: "", groupId: 0 };

export const MsgUpdateGroupMembers = {
  encode(
    message: MsgUpdateGroupMembers,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.memberUpdates.push(
            MemberRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.memberUpdates !== undefined && object.memberUpdates !== null) {
      for (const e of object.memberUpdates) {
        message.memberUpdates.push(MemberRequest.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map((e) =>
        e ? MemberRequest.toJSON(e) : undefined
      );
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGroupMembers>
  ): MsgUpdateGroupMembers {
    const message = { ...baseMsgUpdateGroupMembers } as MsgUpdateGroupMembers;
    message.memberUpdates = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.memberUpdates !== undefined && object.memberUpdates !== null) {
      for (const e of object.memberUpdates) {
        message.memberUpdates.push(MemberRequest.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateGroupMembersResponse: object = {};

export const MsgUpdateGroupMembersResponse = {
  encode(
    _: MsgUpdateGroupMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupMembersResponse,
    } as MsgUpdateGroupMembersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    const message = {
      ...baseMsgUpdateGroupMembersResponse,
    } as MsgUpdateGroupMembersResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupMembersResponse>
  ): MsgUpdateGroupMembersResponse {
    const message = {
      ...baseMsgUpdateGroupMembersResponse,
    } as MsgUpdateGroupMembersResponse;
    return message;
  },
};

const baseMsgUpdateGroupAdmin: object = { admin: "", groupId: 0, newAdmin: "" };

export const MsgUpdateGroupAdmin = {
  encode(
    message: MsgUpdateGroupAdmin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = { ...baseMsgUpdateGroupAdmin } as MsgUpdateGroupAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    } else {
      message.newAdmin = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupAdminResponse: object = {};

export const MsgUpdateGroupAdminResponse = {
  encode(
    _: MsgUpdateGroupAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupAdminResponse,
    } as MsgUpdateGroupAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    const message = {
      ...baseMsgUpdateGroupAdminResponse,
    } as MsgUpdateGroupAdminResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupAdminResponse>
  ): MsgUpdateGroupAdminResponse {
    const message = {
      ...baseMsgUpdateGroupAdminResponse,
    } as MsgUpdateGroupAdminResponse;
    return message;
  },
};

const baseMsgUpdateGroupMetadata: object = {
  admin: "",
  groupId: 0,
  metadata: "",
};

export const MsgUpdateGroupMetadata = {
  encode(
    message: MsgUpdateGroupMetadata,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGroupMetadata>
  ): MsgUpdateGroupMetadata {
    const message = { ...baseMsgUpdateGroupMetadata } as MsgUpdateGroupMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupMetadataResponse: object = {};

export const MsgUpdateGroupMetadataResponse = {
  encode(
    _: MsgUpdateGroupMetadataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupMetadataResponse,
    } as MsgUpdateGroupMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    const message = {
      ...baseMsgUpdateGroupMetadataResponse,
    } as MsgUpdateGroupMetadataResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupMetadataResponse>
  ): MsgUpdateGroupMetadataResponse {
    const message = {
      ...baseMsgUpdateGroupMetadataResponse,
    } as MsgUpdateGroupMetadataResponse;
    return message;
  },
};

const baseMsgCreateGroupPolicy: object = {
  admin: "",
  groupId: 0,
  metadata: "",
};

export const MsgCreateGroupPolicy = {
  encode(
    message: MsgCreateGroupPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = { ...baseMsgCreateGroupPolicy } as MsgCreateGroupPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromPartial(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },
};

const baseMsgCreateGroupPolicyResponse: object = { address: "" };

export const MsgCreateGroupPolicyResponse = {
  encode(
    message: MsgCreateGroupPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateGroupPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateGroupPolicyResponse,
    } as MsgCreateGroupPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    const message = {
      ...baseMsgCreateGroupPolicyResponse,
    } as MsgCreateGroupPolicyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGroupPolicyResponse>
  ): MsgCreateGroupPolicyResponse {
    const message = {
      ...baseMsgCreateGroupPolicyResponse,
    } as MsgCreateGroupPolicyResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyAdmin: object = {
  admin: "",
  groupPolicyAddress: "",
  newAdmin: "",
};

export const MsgUpdateGroupPolicyAdmin = {
  encode(
    message: MsgUpdateGroupPolicyAdmin,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyAdmin,
    } as MsgUpdateGroupPolicyAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    const message = {
      ...baseMsgUpdateGroupPolicyAdmin,
    } as MsgUpdateGroupPolicyAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = String(object.groupPolicyAddress);
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGroupPolicyAdmin>
  ): MsgUpdateGroupPolicyAdmin {
    const message = {
      ...baseMsgUpdateGroupPolicyAdmin,
    } as MsgUpdateGroupPolicyAdmin;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = object.groupPolicyAddress;
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = object.newAdmin;
    } else {
      message.newAdmin = "";
    }
    return message;
  },
};

const baseMsgCreateGroupWithPolicy: object = {
  admin: "",
  groupMetadata: "",
  groupPolicyMetadata: "",
  groupPolicyAsAdmin: false,
};

export const MsgCreateGroupWithPolicy = {
  encode(
    message: MsgCreateGroupWithPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateGroupWithPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateGroupWithPolicy,
    } as MsgCreateGroupWithPolicy;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicy {
    const message = {
      ...baseMsgCreateGroupWithPolicy,
    } as MsgCreateGroupWithPolicy;
    message.members = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberRequest.fromJSON(e));
      }
    }
    if (object.groupMetadata !== undefined && object.groupMetadata !== null) {
      message.groupMetadata = String(object.groupMetadata);
    } else {
      message.groupMetadata = "";
    }
    if (
      object.groupPolicyMetadata !== undefined &&
      object.groupPolicyMetadata !== null
    ) {
      message.groupPolicyMetadata = String(object.groupPolicyMetadata);
    } else {
      message.groupPolicyMetadata = "";
    }
    if (
      object.groupPolicyAsAdmin !== undefined &&
      object.groupPolicyAsAdmin !== null
    ) {
      message.groupPolicyAsAdmin = Boolean(object.groupPolicyAsAdmin);
    } else {
      message.groupPolicyAsAdmin = false;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? MemberRequest.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.groupMetadata !== undefined &&
      (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined &&
      (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined &&
      (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGroupWithPolicy>
  ): MsgCreateGroupWithPolicy {
    const message = {
      ...baseMsgCreateGroupWithPolicy,
    } as MsgCreateGroupWithPolicy;
    message.members = [];
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberRequest.fromPartial(e));
      }
    }
    if (object.groupMetadata !== undefined && object.groupMetadata !== null) {
      message.groupMetadata = object.groupMetadata;
    } else {
      message.groupMetadata = "";
    }
    if (
      object.groupPolicyMetadata !== undefined &&
      object.groupPolicyMetadata !== null
    ) {
      message.groupPolicyMetadata = object.groupPolicyMetadata;
    } else {
      message.groupPolicyMetadata = "";
    }
    if (
      object.groupPolicyAsAdmin !== undefined &&
      object.groupPolicyAsAdmin !== null
    ) {
      message.groupPolicyAsAdmin = object.groupPolicyAsAdmin;
    } else {
      message.groupPolicyAsAdmin = false;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromPartial(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },
};

const baseMsgCreateGroupWithPolicyResponse: object = {
  groupId: 0,
  groupPolicyAddress: "",
};

export const MsgCreateGroupWithPolicyResponse = {
  encode(
    message: MsgCreateGroupWithPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateGroupWithPolicyResponse,
    } as MsgCreateGroupWithPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    const message = {
      ...baseMsgCreateGroupWithPolicyResponse,
    } as MsgCreateGroupWithPolicyResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = String(object.groupPolicyAddress);
    } else {
      message.groupPolicyAddress = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGroupWithPolicyResponse>
  ): MsgCreateGroupWithPolicyResponse {
    const message = {
      ...baseMsgCreateGroupWithPolicyResponse,
    } as MsgCreateGroupWithPolicyResponse;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = object.groupPolicyAddress;
    } else {
      message.groupPolicyAddress = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyAdminResponse: object = {};

export const MsgUpdateGroupPolicyAdminResponse = {
  encode(
    _: MsgUpdateGroupPolicyAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyAdminResponse,
    } as MsgUpdateGroupPolicyAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyAdminResponse,
    } as MsgUpdateGroupPolicyAdminResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupPolicyAdminResponse>
  ): MsgUpdateGroupPolicyAdminResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyAdminResponse,
    } as MsgUpdateGroupPolicyAdminResponse;
    return message;
  },
};

const baseMsgUpdateGroupPolicyDecisionPolicy: object = {
  admin: "",
  groupPolicyAddress: "",
};

export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(
    message: MsgUpdateGroupPolicyDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicy,
    } as MsgUpdateGroupPolicyDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicy,
    } as MsgUpdateGroupPolicyDecisionPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = String(object.groupPolicyAddress);
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>
  ): MsgUpdateGroupPolicyDecisionPolicy {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicy,
    } as MsgUpdateGroupPolicyDecisionPolicy;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = object.groupPolicyAddress;
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = Any.fromPartial(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyDecisionPolicyResponse: object = {};

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(
    _: MsgUpdateGroupPolicyDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>
  ): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyDecisionPolicyResponse,
    } as MsgUpdateGroupPolicyDecisionPolicyResponse;
    return message;
  },
};

const baseMsgUpdateGroupPolicyMetadata: object = {
  admin: "",
  groupPolicyAddress: "",
  metadata: "",
};

export const MsgUpdateGroupPolicyMetadata = {
  encode(
    message: MsgUpdateGroupPolicyMetadata,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyMetadata,
    } as MsgUpdateGroupPolicyMetadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    const message = {
      ...baseMsgUpdateGroupPolicyMetadata,
    } as MsgUpdateGroupPolicyMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = String(object.groupPolicyAddress);
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGroupPolicyMetadata>
  ): MsgUpdateGroupPolicyMetadata {
    const message = {
      ...baseMsgUpdateGroupPolicyMetadata,
    } as MsgUpdateGroupPolicyMetadata;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = object.groupPolicyAddress;
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgUpdateGroupPolicyMetadataResponse: object = {};

export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(
    _: MsgUpdateGroupPolicyMetadataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGroupPolicyMetadataResponse,
    } as MsgUpdateGroupPolicyMetadataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyMetadataResponse,
    } as MsgUpdateGroupPolicyMetadataResponse;
    return message;
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>
  ): MsgUpdateGroupPolicyMetadataResponse {
    const message = {
      ...baseMsgUpdateGroupPolicyMetadataResponse,
    } as MsgUpdateGroupPolicyMetadataResponse;
    return message;
  },
};

const baseMsgSubmitProposal: object = {
  groupPolicyAddress: "",
  proposers: "",
  metadata: "",
  exec: 0,
};

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: Writer = Writer.create()): Writer {
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.proposers = [];
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicyAddress = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.proposers = [];
    message.messages = [];
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = String(object.groupPolicyAddress);
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.proposers !== undefined && object.proposers !== null) {
      for (const e of object.proposers) {
        message.proposers.push(String(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e));
      }
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = execFromJSON(object.exec);
    } else {
      message.exec = 0;
    }
    return message;
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.proposers = [];
    message.messages = [];
    if (
      object.groupPolicyAddress !== undefined &&
      object.groupPolicyAddress !== null
    ) {
      message.groupPolicyAddress = object.groupPolicyAddress;
    } else {
      message.groupPolicyAddress = "";
    }
    if (object.proposers !== undefined && object.proposers !== null) {
      for (const e of object.proposers) {
        message.proposers.push(e);
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e));
      }
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    } else {
      message.exec = 0;
    }
    return message;
  },
};

const baseMsgSubmitProposalResponse: object = { proposalId: 0 };

export const MsgSubmitProposalResponse = {
  encode(
    message: MsgSubmitProposalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitProposalResponse>
  ): MsgSubmitProposalResponse {
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseMsgWithdrawProposal: object = { proposalId: 0, address: "" };

export const MsgWithdrawProposal = {
  encode(
    message: MsgWithdrawProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawProposal } as MsgWithdrawProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawProposal {
    const message = { ...baseMsgWithdrawProposal } as MsgWithdrawProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = { ...baseMsgWithdrawProposal } as MsgWithdrawProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgWithdrawProposalResponse: object = {};

export const MsgWithdrawProposalResponse = {
  encode(
    _: MsgWithdrawProposalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawProposalResponse,
    } as MsgWithdrawProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawProposalResponse {
    const message = {
      ...baseMsgWithdrawProposalResponse,
    } as MsgWithdrawProposalResponse;
    return message;
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawProposalResponse>
  ): MsgWithdrawProposalResponse {
    const message = {
      ...baseMsgWithdrawProposalResponse,
    } as MsgWithdrawProposalResponse;
    return message;
  },
};

const baseMsgVote: object = {
  proposalId: 0,
  voter: "",
  option: 0,
  metadata: "",
  exec: 0,
};

export const MsgVote = {
  encode(message: MsgVote, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVote } as MsgVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    } else {
      message.option = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = execFromJSON(object.exec);
    } else {
      message.exec = 0;
    }
    return message;
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    } else {
      message.option = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.exec !== undefined && object.exec !== null) {
      message.exec = object.exec;
    } else {
      message.exec = 0;
    }
    return message;
  },
};

const baseMsgVoteResponse: object = {};

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },
};

const baseMsgExec: object = { proposalId: 0, executor: "" };

export const MsgExec = {
  encode(message: MsgExec, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExec } as MsgExec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.executor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    const message = { ...baseMsgExec } as MsgExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.executor !== undefined && object.executor !== null) {
      message.executor = String(object.executor);
    } else {
      message.executor = "";
    }
    return message;
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = { ...baseMsgExec } as MsgExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.executor !== undefined && object.executor !== null) {
      message.executor = object.executor;
    } else {
      message.executor = "";
    }
    return message;
  },
};

const baseMsgExecResponse: object = { result: 0 };

export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = proposalExecutorResultFromJSON(object.result);
    } else {
      message.result = 0;
    }
    return message;
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }
    return message;
  },
};

const baseMsgLeaveGroup: object = { address: "", groupId: 0 };

export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLeaveGroup } as MsgLeaveGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLeaveGroup {
    const message = { ...baseMsgLeaveGroup } as MsgLeaveGroup;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    return message;
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = { ...baseMsgLeaveGroup } as MsgLeaveGroup;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    return message;
  },
};

const baseMsgLeaveGroupResponse: object = {};

export const MsgLeaveGroupResponse = {
  encode(_: MsgLeaveGroupResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLeaveGroupResponse } as MsgLeaveGroupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLeaveGroupResponse {
    const message = { ...baseMsgLeaveGroupResponse } as MsgLeaveGroupResponse;
    return message;
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = { ...baseMsgLeaveGroupResponse } as MsgLeaveGroupResponse;
    return message;
  },
};

/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(
    request: MsgUpdateGroupMembers
  ): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(
    request: MsgUpdateGroupAdmin
  ): Promise<MsgUpdateGroupAdminResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(
    request: MsgUpdateGroupMetadata
  ): Promise<MsgUpdateGroupMetadataResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(
    request: MsgCreateGroupPolicy
  ): Promise<MsgCreateGroupPolicyResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  CreateGroupWithPolicy(
    request: MsgCreateGroupWithPolicy
  ): Promise<MsgCreateGroupWithPolicyResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(
    request: MsgUpdateGroupPolicyAdmin
  ): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(
    request: MsgUpdateGroupPolicyDecisionPolicy
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(
    request: MsgUpdateGroupPolicyMetadata
  ): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /** SubmitProposal submits a new proposal. */
  SubmitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse>;
  /** WithdrawProposal withdraws a proposal. */
  WithdrawProposal(
    request: MsgWithdrawProposal
  ): Promise<MsgWithdrawProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: MsgExec): Promise<MsgExecResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "CreateGroup",
      data
    );
    return promise.then((data) =>
      MsgCreateGroupResponse.decode(new Reader(data))
    );
  }

  UpdateGroupMembers(
    request: MsgUpdateGroupMembers
  ): Promise<MsgUpdateGroupMembersResponse> {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupMembers",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupMembersResponse.decode(new Reader(data))
    );
  }

  UpdateGroupAdmin(
    request: MsgUpdateGroupAdmin
  ): Promise<MsgUpdateGroupAdminResponse> {
    const data = MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupAdmin",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupAdminResponse.decode(new Reader(data))
    );
  }

  UpdateGroupMetadata(
    request: MsgUpdateGroupMetadata
  ): Promise<MsgUpdateGroupMetadataResponse> {
    const data = MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupMetadata",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupMetadataResponse.decode(new Reader(data))
    );
  }

  CreateGroupPolicy(
    request: MsgCreateGroupPolicy
  ): Promise<MsgCreateGroupPolicyResponse> {
    const data = MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "CreateGroupPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateGroupPolicyResponse.decode(new Reader(data))
    );
  }

  CreateGroupWithPolicy(
    request: MsgCreateGroupWithPolicy
  ): Promise<MsgCreateGroupWithPolicyResponse> {
    const data = MsgCreateGroupWithPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "CreateGroupWithPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateGroupWithPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateGroupPolicyAdmin(
    request: MsgUpdateGroupPolicyAdmin
  ): Promise<MsgUpdateGroupPolicyAdminResponse> {
    const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupPolicyAdmin",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupPolicyAdminResponse.decode(new Reader(data))
    );
  }

  UpdateGroupPolicyDecisionPolicy(
    request: MsgUpdateGroupPolicyDecisionPolicy
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupPolicyDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateGroupPolicyMetadata(
    request: MsgUpdateGroupPolicyMetadata
  ): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "UpdateGroupPolicyMetadata",
      data
    );
    return promise.then((data) =>
      MsgUpdateGroupPolicyMetadataResponse.decode(new Reader(data))
    );
  }

  SubmitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "SubmitProposal",
      data
    );
    return promise.then((data) =>
      MsgSubmitProposalResponse.decode(new Reader(data))
    );
  }

  WithdrawProposal(
    request: MsgWithdrawProposal
  ): Promise<MsgWithdrawProposalResponse> {
    const data = MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Msg",
      "WithdrawProposal",
      data
    );
    return promise.then((data) =>
      MsgWithdrawProposalResponse.decode(new Reader(data))
    );
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new Reader(data)));
  }

  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
    return promise.then((data) => MsgExecResponse.decode(new Reader(data)));
  }

  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse> {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
    return promise.then((data) =>
      MsgLeaveGroupResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
