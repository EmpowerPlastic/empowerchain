import {
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Proposal,
  TallyResult,
  Vote
} from "./chunk-L53VIPL5.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryGroupInfoRequest: () => QueryGroupInfoRequest,
  QueryGroupInfoResponse: () => QueryGroupInfoResponse,
  QueryGroupMembersRequest: () => QueryGroupMembersRequest,
  QueryGroupMembersResponse: () => QueryGroupMembersResponse,
  QueryGroupPoliciesByAdminRequest: () => QueryGroupPoliciesByAdminRequest,
  QueryGroupPoliciesByAdminResponse: () => QueryGroupPoliciesByAdminResponse,
  QueryGroupPoliciesByGroupRequest: () => QueryGroupPoliciesByGroupRequest,
  QueryGroupPoliciesByGroupResponse: () => QueryGroupPoliciesByGroupResponse,
  QueryGroupPolicyInfoRequest: () => QueryGroupPolicyInfoRequest,
  QueryGroupPolicyInfoResponse: () => QueryGroupPolicyInfoResponse,
  QueryGroupsByAdminRequest: () => QueryGroupsByAdminRequest,
  QueryGroupsByAdminResponse: () => QueryGroupsByAdminResponse,
  QueryGroupsByMemberRequest: () => QueryGroupsByMemberRequest,
  QueryGroupsByMemberResponse: () => QueryGroupsByMemberResponse,
  QueryGroupsRequest: () => QueryGroupsRequest,
  QueryGroupsResponse: () => QueryGroupsResponse,
  QueryProposalRequest: () => QueryProposalRequest,
  QueryProposalResponse: () => QueryProposalResponse,
  QueryProposalsByGroupPolicyRequest: () => QueryProposalsByGroupPolicyRequest,
  QueryProposalsByGroupPolicyResponse: () => QueryProposalsByGroupPolicyResponse,
  QueryTallyResultRequest: () => QueryTallyResultRequest,
  QueryTallyResultResponse: () => QueryTallyResultResponse,
  QueryVoteByProposalVoterRequest: () => QueryVoteByProposalVoterRequest,
  QueryVoteByProposalVoterResponse: () => QueryVoteByProposalVoterResponse,
  QueryVotesByProposalRequest: () => QueryVotesByProposalRequest,
  QueryVotesByProposalResponse: () => QueryVotesByProposalResponse,
  QueryVotesByVoterRequest: () => QueryVotesByVoterRequest,
  QueryVotesByVoterResponse: () => QueryVotesByVoterResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryGroupInfoRequest() {
  return {
    groupId: BigInt("0")
  };
}
var QueryGroupInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryGroupInfoResponse() {
  return {
    info: void 0
  };
}
var QueryGroupInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.info !== void 0) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
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
  fromJSON(object) {
    return {
      info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.info !== void 0 && (obj.info = message.info ? GroupInfo.toJSON(message.info) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? GroupInfo.fromPartial(object.info) : void 0;
    return message;
  }
};
function createBaseQueryGroupPolicyInfoRequest() {
  return {
    address: ""
  };
}
var QueryGroupPolicyInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryGroupPolicyInfoResponse() {
  return {
    info: void 0
  };
}
var QueryGroupPolicyInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.info !== void 0) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
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
  fromJSON(object) {
    return {
      info: isSet(object.info) ? GroupPolicyInfo.fromJSON(object.info) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.info !== void 0 && (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupPolicyInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? GroupPolicyInfo.fromPartial(object.info) : void 0;
    return message;
  }
};
function createBaseQueryGroupMembersRequest() {
  return {
    groupId: BigInt("0"),
    pagination: void 0
  };
}
var QueryGroupMembersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupMembersResponse() {
  return {
    members: [],
    pagination: void 0
  };
}
var QueryGroupMembersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.members) {
      GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
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
  fromJSON(object) {
    return {
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => GroupMember.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.members) {
      obj.members = message.members.map((e) => e ? GroupMember.toJSON(e) : void 0);
    } else {
      obj.members = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$members;
    const message = createBaseQueryGroupMembersResponse();
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map((e) => GroupMember.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupsByAdminRequest() {
  return {
    admin: "",
    pagination: void 0
  };
}
var QueryGroupsByAdminRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$admin;
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupsByAdminResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
var QueryGroupsByAdminResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
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
  fromJSON(object) {
    return {
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupInfo.toJSON(e) : void 0);
    } else {
      obj.groups = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$groups;
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map((e) => GroupInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupPoliciesByGroupRequest() {
  return {
    groupId: BigInt("0"),
    pagination: void 0
  };
}
var QueryGroupPoliciesByGroupRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupPoliciesByGroupResponse() {
  return {
    groupPolicies: [],
    pagination: void 0
  };
}
var QueryGroupPoliciesByGroupResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies) ? object.groupPolicies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => e ? GroupPolicyInfo.toJSON(e) : void 0);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$groupPolicies;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = ((_object$groupPolicies = object.groupPolicies) === null || _object$groupPolicies === void 0 ? void 0 : _object$groupPolicies.map((e) => GroupPolicyInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupPoliciesByAdminRequest() {
  return {
    admin: "",
    pagination: void 0
  };
}
var QueryGroupPoliciesByAdminRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$admin2;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupPoliciesByAdminResponse() {
  return {
    groupPolicies: [],
    pagination: void 0
  };
}
var QueryGroupPoliciesByAdminResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies) ? object.groupPolicies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => e ? GroupPolicyInfo.toJSON(e) : void 0);
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$groupPolicies2;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = ((_object$groupPolicies2 = object.groupPolicies) === null || _object$groupPolicies2 === void 0 ? void 0 : _object$groupPolicies2.map((e) => GroupPolicyInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryProposalRequest() {
  return {
    proposalId: BigInt("0")
  };
}
var QueryProposalRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: void 0
  };
}
var QueryProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposal !== void 0) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
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
  fromJSON(object) {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposal !== void 0 && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== void 0 && object.proposal !== null ? Proposal.fromPartial(object.proposal) : void 0;
    return message;
  }
};
function createBaseQueryProposalsByGroupPolicyRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QueryProposalsByGroupPolicyRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryProposalsByGroupPolicyResponse() {
  return {
    proposals: [],
    pagination: void 0
  };
}
var QueryProposalsByGroupPolicyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
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
  fromJSON(object) {
    return {
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : void 0);
    } else {
      obj.proposals = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proposals;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map((e) => Proposal.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVoteByProposalVoterRequest() {
  return {
    proposalId: BigInt("0"),
    voter: ""
  };
}
var QueryVoteByProposalVoterRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object) {
    var _object$voter;
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    return message;
  }
};
function createBaseQueryVoteByProposalVoterResponse() {
  return {
    vote: void 0
  };
}
var QueryVoteByProposalVoterResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote !== void 0) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
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
  fromJSON(object) {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.vote !== void 0 && (obj.vote = message.vote ? Vote.toJSON(message.vote) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== void 0 && object.vote !== null ? Vote.fromPartial(object.vote) : void 0;
    return message;
  }
};
function createBaseQueryVotesByProposalRequest() {
  return {
    proposalId: BigInt("0"),
    pagination: void 0
  };
}
var QueryVotesByProposalRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVotesByProposalResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
var QueryVotesByProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
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
  fromJSON(object) {
    return {
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : void 0);
    } else {
      obj.votes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$votes;
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map((e) => Vote.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVotesByVoterRequest() {
  return {
    voter: "",
    pagination: void 0
  };
}
var QueryVotesByVoterRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
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
  fromJSON(object) {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.voter !== void 0 && (obj.voter = message.voter);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$voter2;
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVotesByVoterResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
var QueryVotesByVoterResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
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
  fromJSON(object) {
    return {
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : void 0);
    } else {
      obj.votes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$votes2;
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = ((_object$votes2 = object.votes) === null || _object$votes2 === void 0 ? void 0 : _object$votes2.map((e) => Vote.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupsByMemberRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QueryGroupsByMemberRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupsByMemberResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
var QueryGroupsByMemberResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
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
  fromJSON(object) {
    return {
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupInfo.toJSON(e) : void 0);
    } else {
      obj.groups = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$groups2;
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = ((_object$groups2 = object.groups) === null || _object$groups2 === void 0 ? void 0 : _object$groups2.map((e) => GroupInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: BigInt("0")
  };
}
var QueryTallyResultRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: void 0
  };
}
var QueryTallyResultResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tally !== void 0) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
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
  fromJSON(object) {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tally !== void 0 && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== void 0 && object.tally !== null ? TallyResult.fromPartial(object.tally) : void 0;
    return message;
  }
};
function createBaseQueryGroupsRequest() {
  return {
    pagination: void 0
  };
}
var QueryGroupsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryGroupsResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
var QueryGroupsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
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
  fromJSON(object) {
    return {
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupInfo.toJSON(e) : void 0);
    } else {
      obj.groups = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$groups3;
    const message = createBaseQueryGroupsResponse();
    message.groups = ((_object$groups3 = object.groups) === null || _object$groups3 === void 0 ? void 0 : _object$groups3.map((e) => GroupInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.groups = this.groups.bind(this);
  }
  groupInfo(request) {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then((data2) => QueryGroupInfoResponse.decode(new _m02.Reader(data2)));
  }
  groupPolicyInfo(request) {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then((data2) => QueryGroupPolicyInfoResponse.decode(new _m02.Reader(data2)));
  }
  groupMembers(request) {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then((data2) => QueryGroupMembersResponse.decode(new _m02.Reader(data2)));
  }
  groupsByAdmin(request) {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then((data2) => QueryGroupsByAdminResponse.decode(new _m02.Reader(data2)));
  }
  groupPoliciesByGroup(request) {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then((data2) => QueryGroupPoliciesByGroupResponse.decode(new _m02.Reader(data2)));
  }
  groupPoliciesByAdmin(request) {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then((data2) => QueryGroupPoliciesByAdminResponse.decode(new _m02.Reader(data2)));
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then((data2) => QueryProposalResponse.decode(new _m02.Reader(data2)));
  }
  proposalsByGroupPolicy(request) {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then((data2) => QueryProposalsByGroupPolicyResponse.decode(new _m02.Reader(data2)));
  }
  voteByProposalVoter(request) {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then((data2) => QueryVoteByProposalVoterResponse.decode(new _m02.Reader(data2)));
  }
  votesByProposal(request) {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then((data2) => QueryVotesByProposalResponse.decode(new _m02.Reader(data2)));
  }
  votesByVoter(request) {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then((data2) => QueryVotesByVoterResponse.decode(new _m02.Reader(data2)));
  }
  groupsByMember(request) {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then((data2) => QueryGroupsByMemberResponse.decode(new _m02.Reader(data2)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then((data2) => QueryTallyResultResponse.decode(new _m02.Reader(data2)));
  }
  groups(request = {
    pagination: void 0
  }) {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then((data2) => QueryGroupsResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request) {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo(request) {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers(request) {
      return queryService.groupMembers(request);
    },
    groupsByAdmin(request) {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup(request) {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin(request) {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal(request) {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy(request) {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter(request) {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal(request) {
      return queryService.votesByProposal(request);
    },
    votesByVoter(request) {
      return queryService.votesByVoter(request);
    },
    groupsByMember(request) {
      return queryService.groupsByMember(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
    },
    groups(request) {
      return queryService.groups(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-L7JN62BA.js.map
