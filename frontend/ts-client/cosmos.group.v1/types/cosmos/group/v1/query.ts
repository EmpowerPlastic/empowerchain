/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  GroupInfo,
  GroupPolicyInfo,
  GroupMember,
  Proposal,
  Vote,
  TallyResult,
} from "../../../cosmos/group/v1/types";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: number;
}

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo for the group. */
  info: GroupInfo | undefined;
}

/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  /** address is the account address of the group policy. */
  address: string;
}

/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  /** info is the GroupPolicyInfo for the group policy. */
  info: GroupPolicyInfo | undefined;
}

/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: number;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  /** group_id is the unique ID of the group policy's group. */
  groupId: number;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: number;
}

/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal: Proposal | undefined;
}

/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: number;
  /** voter is a proposal voter account address. */
  voter: string;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote: Vote | undefined;
}

/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: number;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  /** proposal_id is the unique id of a proposal. */
  proposalId: number;
}

/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult | undefined;
}

const baseQueryGroupInfoRequest: object = { groupId: 0 };

export const QueryGroupInfoRequest = {
  encode(
    message: QueryGroupInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGroupInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
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

  fromJSON(object: any): QueryGroupInfoRequest {
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    return message;
  },

  toJSON(message: QueryGroupInfoRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupInfoRequest>
  ): QueryGroupInfoRequest {
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    return message;
  },
};

const baseQueryGroupInfoResponse: object = {};

export const QueryGroupInfoResponse = {
  encode(
    message: QueryGroupInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGroupInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupInfoResponse {
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupInfoResponse>
  ): QueryGroupInfoResponse {
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseQueryGroupPolicyInfoRequest: object = { address: "" };

export const QueryGroupPolicyInfoRequest = {
  encode(
    message: QueryGroupPolicyInfoRequest,
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
  ): QueryGroupPolicyInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPolicyInfoRequest,
    } as QueryGroupPolicyInfoRequest;
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

  fromJSON(object: any): QueryGroupPolicyInfoRequest {
    const message = {
      ...baseQueryGroupPolicyInfoRequest,
    } as QueryGroupPolicyInfoRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGroupPolicyInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPolicyInfoRequest>
  ): QueryGroupPolicyInfoRequest {
    const message = {
      ...baseQueryGroupPolicyInfoRequest,
    } as QueryGroupPolicyInfoRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGroupPolicyInfoResponse: object = {};

export const QueryGroupPolicyInfoResponse = {
  encode(
    message: QueryGroupPolicyInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupPolicyInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPolicyInfoResponse,
    } as QueryGroupPolicyInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPolicyInfoResponse {
    const message = {
      ...baseQueryGroupPolicyInfoResponse,
    } as QueryGroupPolicyInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupPolicyInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info
        ? GroupPolicyInfo.toJSON(message.info)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPolicyInfoResponse>
  ): QueryGroupPolicyInfoResponse {
    const message = {
      ...baseQueryGroupPolicyInfoResponse,
    } as QueryGroupPolicyInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupPolicyInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseQueryGroupMembersRequest: object = { groupId: 0 };

export const QueryGroupMembersRequest = {
  encode(
    message: QueryGroupMembersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupMembersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupMembersRequest {
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupMembersRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupMembersRequest>
  ): QueryGroupMembersRequest {
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupMembersResponse: object = {};

export const QueryGroupMembersResponse = {
  encode(
    message: QueryGroupMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupMembersResponse {
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(GroupMember.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? GroupMember.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupMembersResponse>
  ): QueryGroupMembersResponse {
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(GroupMember.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByAdminRequest: object = { admin: "" };

export const QueryGroupsByAdminRequest = {
  encode(
    message: QueryGroupsByAdminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupsByAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByAdminRequest {
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByAdminRequest>
  ): QueryGroupsByAdminRequest {
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByAdminResponse: object = {};

export const QueryGroupsByAdminResponse = {
  encode(
    message: QueryGroupsByAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupsByAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByAdminResponse {
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByAdminResponse>
  ): QueryGroupsByAdminResponse {
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupPoliciesByGroupRequest: object = { groupId: 0 };

export const QueryGroupPoliciesByGroupRequest = {
  encode(
    message: QueryGroupPoliciesByGroupRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPoliciesByGroupRequest,
    } as QueryGroupPoliciesByGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPoliciesByGroupRequest {
    const message = {
      ...baseQueryGroupPoliciesByGroupRequest,
    } as QueryGroupPoliciesByGroupRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupPoliciesByGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPoliciesByGroupRequest>
  ): QueryGroupPoliciesByGroupRequest {
    const message = {
      ...baseQueryGroupPoliciesByGroupRequest,
    } as QueryGroupPoliciesByGroupRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupPoliciesByGroupResponse: object = {};

export const QueryGroupPoliciesByGroupResponse = {
  encode(
    message: QueryGroupPoliciesByGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPoliciesByGroupResponse,
    } as QueryGroupPoliciesByGroupResponse;
    message.groupPolicies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(
            GroupPolicyInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPoliciesByGroupResponse {
    const message = {
      ...baseQueryGroupPoliciesByGroupResponse,
    } as QueryGroupPoliciesByGroupResponse;
    message.groupPolicies = [];
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupPoliciesByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) =>
        e ? GroupPolicyInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPoliciesByGroupResponse>
  ): QueryGroupPoliciesByGroupResponse {
    const message = {
      ...baseQueryGroupPoliciesByGroupResponse,
    } as QueryGroupPoliciesByGroupResponse;
    message.groupPolicies = [];
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupPoliciesByAdminRequest: object = { admin: "" };

export const QueryGroupPoliciesByAdminRequest = {
  encode(
    message: QueryGroupPoliciesByAdminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPoliciesByAdminRequest,
    } as QueryGroupPoliciesByAdminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPoliciesByAdminRequest {
    const message = {
      ...baseQueryGroupPoliciesByAdminRequest,
    } as QueryGroupPoliciesByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupPoliciesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPoliciesByAdminRequest>
  ): QueryGroupPoliciesByAdminRequest {
    const message = {
      ...baseQueryGroupPoliciesByAdminRequest,
    } as QueryGroupPoliciesByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupPoliciesByAdminResponse: object = {};

export const QueryGroupPoliciesByAdminResponse = {
  encode(
    message: QueryGroupPoliciesByAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupPoliciesByAdminResponse,
    } as QueryGroupPoliciesByAdminResponse;
    message.groupPolicies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(
            GroupPolicyInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPoliciesByAdminResponse {
    const message = {
      ...baseQueryGroupPoliciesByAdminResponse,
    } as QueryGroupPoliciesByAdminResponse;
    message.groupPolicies = [];
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupPoliciesByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) =>
        e ? GroupPolicyInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupPoliciesByAdminResponse>
  ): QueryGroupPoliciesByAdminResponse {
    const message = {
      ...baseQueryGroupPoliciesByAdminResponse,
    } as QueryGroupPoliciesByAdminResponse;
    message.groupPolicies = [];
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProposalRequest: object = { proposalId: 0 };

export const QueryProposalRequest = {
  encode(
    message: QueryProposalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
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

  fromJSON(object: any): QueryProposalRequest {
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseQueryProposalResponse: object = {};

export const QueryProposalResponse = {
  encode(
    message: QueryProposalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalResponse>
  ): QueryProposalResponse {
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
};

const baseQueryProposalsByGroupPolicyRequest: object = { address: "" };

export const QueryProposalsByGroupPolicyRequest = {
  encode(
    message: QueryProposalsByGroupPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalsByGroupPolicyRequest,
    } as QueryProposalsByGroupPolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsByGroupPolicyRequest {
    const message = {
      ...baseQueryProposalsByGroupPolicyRequest,
    } as QueryProposalsByGroupPolicyRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalsByGroupPolicyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalsByGroupPolicyRequest>
  ): QueryProposalsByGroupPolicyRequest {
    const message = {
      ...baseQueryProposalsByGroupPolicyRequest,
    } as QueryProposalsByGroupPolicyRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProposalsByGroupPolicyResponse: object = {};

export const QueryProposalsByGroupPolicyResponse = {
  encode(
    message: QueryProposalsByGroupPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalsByGroupPolicyResponse,
    } as QueryProposalsByGroupPolicyResponse;
    message.proposals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsByGroupPolicyResponse {
    const message = {
      ...baseQueryProposalsByGroupPolicyResponse,
    } as QueryProposalsByGroupPolicyResponse;
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalsByGroupPolicyResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalsByGroupPolicyResponse>
  ): QueryProposalsByGroupPolicyResponse {
    const message = {
      ...baseQueryProposalsByGroupPolicyResponse,
    } as QueryProposalsByGroupPolicyResponse;
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVoteByProposalVoterRequest: object = {
  proposalId: 0,
  voter: "",
};

export const QueryVoteByProposalVoterRequest = {
  encode(
    message: QueryVoteByProposalVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVoteByProposalVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
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
    return message;
  },

  toJSON(message: QueryVoteByProposalVoterRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteByProposalVoterRequest>
  ): QueryVoteByProposalVoterRequest {
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
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
    return message;
  },
};

const baseQueryVoteByProposalVoterResponse: object = {};

export const QueryVoteByProposalVoterResponse = {
  encode(
    message: QueryVoteByProposalVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVoteByProposalVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryVoteByProposalVoterResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteByProposalVoterResponse>
  ): QueryVoteByProposalVoterResponse {
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};

const baseQueryVotesByProposalRequest: object = { proposalId: 0 };

export const QueryVotesByProposalRequest = {
  encode(
    message: QueryVotesByProposalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVotesByProposalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByProposalRequest {
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByProposalRequest>
  ): QueryVotesByProposalRequest {
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByProposalResponse: object = {};

export const QueryVotesByProposalResponse = {
  encode(
    message: QueryVotesByProposalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVotesByProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByProposalResponse {
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByProposalResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByProposalResponse>
  ): QueryVotesByProposalResponse {
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByVoterRequest: object = { voter: "" };

export const QueryVotesByVoterRequest = {
  encode(
    message: QueryVotesByVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVotesByVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByVoterRequest {
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByVoterRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByVoterRequest>
  ): QueryVotesByVoterRequest {
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByVoterResponse: object = {};

export const QueryVotesByVoterResponse = {
  encode(
    message: QueryVotesByVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVotesByVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByVoterResponse {
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByVoterResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByVoterResponse>
  ): QueryVotesByVoterResponse {
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByMemberRequest: object = { address: "" };

export const QueryGroupsByMemberRequest = {
  encode(
    message: QueryGroupsByMemberRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupsByMemberRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByMemberRequest,
    } as QueryGroupsByMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByMemberRequest {
    const message = {
      ...baseQueryGroupsByMemberRequest,
    } as QueryGroupsByMemberRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByMemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByMemberRequest>
  ): QueryGroupsByMemberRequest {
    const message = {
      ...baseQueryGroupsByMemberRequest,
    } as QueryGroupsByMemberRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByMemberResponse: object = {};

export const QueryGroupsByMemberResponse = {
  encode(
    message: QueryGroupsByMemberResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGroupsByMemberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByMemberResponse,
    } as QueryGroupsByMemberResponse;
    message.groups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByMemberResponse {
    const message = {
      ...baseQueryGroupsByMemberResponse,
    } as QueryGroupsByMemberResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByMemberResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByMemberResponse>
  ): QueryGroupsByMemberResponse {
    const message = {
      ...baseQueryGroupsByMemberResponse,
    } as QueryGroupsByMemberResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryTallyResultRequest: object = { proposalId: 0 };

export const QueryTallyResultRequest = {
  encode(
    message: QueryTallyResultRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTallyResultRequest,
    } as QueryTallyResultRequest;
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

  fromJSON(object: any): QueryTallyResultRequest {
    const message = {
      ...baseQueryTallyResultRequest,
    } as QueryTallyResultRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTallyResultRequest>
  ): QueryTallyResultRequest {
    const message = {
      ...baseQueryTallyResultRequest,
    } as QueryTallyResultRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseQueryTallyResultResponse: object = {};

export const QueryTallyResultResponse = {
  encode(
    message: QueryTallyResultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTallyResultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTallyResultResponse,
    } as QueryTallyResultResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTallyResultResponse {
    const message = {
      ...baseQueryTallyResultResponse,
    } as QueryTallyResultResponse;
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromJSON(object.tally);
    } else {
      message.tally = undefined;
    }
    return message;
  },

  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined &&
      (obj.tally = message.tally
        ? TallyResult.toJSON(message.tally)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTallyResultResponse>
  ): QueryTallyResultResponse {
    const message = {
      ...baseQueryTallyResultResponse,
    } as QueryTallyResultResponse;
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromPartial(object.tally);
    } else {
      message.tally = undefined;
    }
    return message;
  },
};

/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  GroupPolicyInfo(
    request: QueryGroupPolicyInfoRequest
  ): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group */
  GroupMembers(
    request: QueryGroupMembersRequest
  ): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(
    request: QueryGroupsByAdminRequest
  ): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  GroupPoliciesByGroup(
    request: QueryGroupPoliciesByGroupRequest
  ): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupsByAdmin queries group policies by admin address. */
  GroupPoliciesByAdmin(
    request: QueryGroupPoliciesByAdminRequest
  ): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  ProposalsByGroupPolicy(
    request: QueryProposalsByGroupPolicyRequest
  ): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  VoteByProposalVoter(
    request: QueryVoteByProposalVoterRequest
  ): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal. */
  VotesByProposal(
    request: QueryVotesByProposalRequest
  ): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  VotesByVoter(
    request: QueryVotesByVoterRequest
  ): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  GroupsByMember(
    request: QueryGroupsByMemberRequest
  ): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  TallyResult(
    request: QueryTallyResultRequest
  ): Promise<QueryTallyResultResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupInfo",
      data
    );
    return promise.then((data) =>
      QueryGroupInfoResponse.decode(new Reader(data))
    );
  }

  GroupPolicyInfo(
    request: QueryGroupPolicyInfoRequest
  ): Promise<QueryGroupPolicyInfoResponse> {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupPolicyInfo",
      data
    );
    return promise.then((data) =>
      QueryGroupPolicyInfoResponse.decode(new Reader(data))
    );
  }

  GroupMembers(
    request: QueryGroupMembersRequest
  ): Promise<QueryGroupMembersResponse> {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupMembers",
      data
    );
    return promise.then((data) =>
      QueryGroupMembersResponse.decode(new Reader(data))
    );
  }

  GroupsByAdmin(
    request: QueryGroupsByAdminRequest
  ): Promise<QueryGroupsByAdminResponse> {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupsByAdmin",
      data
    );
    return promise.then((data) =>
      QueryGroupsByAdminResponse.decode(new Reader(data))
    );
  }

  GroupPoliciesByGroup(
    request: QueryGroupPoliciesByGroupRequest
  ): Promise<QueryGroupPoliciesByGroupResponse> {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupPoliciesByGroup",
      data
    );
    return promise.then((data) =>
      QueryGroupPoliciesByGroupResponse.decode(new Reader(data))
    );
  }

  GroupPoliciesByAdmin(
    request: QueryGroupPoliciesByAdminRequest
  ): Promise<QueryGroupPoliciesByAdminResponse> {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupPoliciesByAdmin",
      data
    );
    return promise.then((data) =>
      QueryGroupPoliciesByAdminResponse.decode(new Reader(data))
    );
  }

  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then((data) =>
      QueryProposalResponse.decode(new Reader(data))
    );
  }

  ProposalsByGroupPolicy(
    request: QueryProposalsByGroupPolicyRequest
  ): Promise<QueryProposalsByGroupPolicyResponse> {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "ProposalsByGroupPolicy",
      data
    );
    return promise.then((data) =>
      QueryProposalsByGroupPolicyResponse.decode(new Reader(data))
    );
  }

  VoteByProposalVoter(
    request: QueryVoteByProposalVoterRequest
  ): Promise<QueryVoteByProposalVoterResponse> {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "VoteByProposalVoter",
      data
    );
    return promise.then((data) =>
      QueryVoteByProposalVoterResponse.decode(new Reader(data))
    );
  }

  VotesByProposal(
    request: QueryVotesByProposalRequest
  ): Promise<QueryVotesByProposalResponse> {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "VotesByProposal",
      data
    );
    return promise.then((data) =>
      QueryVotesByProposalResponse.decode(new Reader(data))
    );
  }

  VotesByVoter(
    request: QueryVotesByVoterRequest
  ): Promise<QueryVotesByVoterResponse> {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "VotesByVoter",
      data
    );
    return promise.then((data) =>
      QueryVotesByVoterResponse.decode(new Reader(data))
    );
  }

  GroupsByMember(
    request: QueryGroupsByMemberRequest
  ): Promise<QueryGroupsByMemberResponse> {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "GroupsByMember",
      data
    );
    return promise.then((data) =>
      QueryGroupsByMemberResponse.decode(new Reader(data))
    );
  }

  TallyResult(
    request: QueryTallyResultRequest
  ): Promise<QueryTallyResultResponse> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.group.v1.Query",
      "TallyResult",
      data
    );
    return promise.then((data) =>
      QueryTallyResultResponse.decode(new Reader(data))
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
