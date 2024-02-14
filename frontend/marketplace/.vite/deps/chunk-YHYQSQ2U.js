import {
  MemberRequest,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  voteOptionFromJSON,
  voteOptionToJSON
} from "./chunk-L53VIPL5.js";
import {
  Any
} from "./chunk-5CF6M437.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  Exec: () => Exec,
  ExecSDKType: () => ExecSDKType,
  MsgCreateGroup: () => MsgCreateGroup,
  MsgCreateGroupPolicy: () => MsgCreateGroupPolicy,
  MsgCreateGroupPolicyResponse: () => MsgCreateGroupPolicyResponse,
  MsgCreateGroupResponse: () => MsgCreateGroupResponse,
  MsgCreateGroupWithPolicy: () => MsgCreateGroupWithPolicy,
  MsgCreateGroupWithPolicyResponse: () => MsgCreateGroupWithPolicyResponse,
  MsgExec: () => MsgExec,
  MsgExecResponse: () => MsgExecResponse,
  MsgLeaveGroup: () => MsgLeaveGroup,
  MsgLeaveGroupResponse: () => MsgLeaveGroupResponse,
  MsgSubmitProposal: () => MsgSubmitProposal,
  MsgSubmitProposalResponse: () => MsgSubmitProposalResponse,
  MsgUpdateGroupAdmin: () => MsgUpdateGroupAdmin,
  MsgUpdateGroupAdminResponse: () => MsgUpdateGroupAdminResponse,
  MsgUpdateGroupMembers: () => MsgUpdateGroupMembers,
  MsgUpdateGroupMembersResponse: () => MsgUpdateGroupMembersResponse,
  MsgUpdateGroupMetadata: () => MsgUpdateGroupMetadata,
  MsgUpdateGroupMetadataResponse: () => MsgUpdateGroupMetadataResponse,
  MsgUpdateGroupPolicyAdmin: () => MsgUpdateGroupPolicyAdmin,
  MsgUpdateGroupPolicyAdminResponse: () => MsgUpdateGroupPolicyAdminResponse,
  MsgUpdateGroupPolicyDecisionPolicy: () => MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyDecisionPolicyResponse: () => MsgUpdateGroupPolicyDecisionPolicyResponse,
  MsgUpdateGroupPolicyMetadata: () => MsgUpdateGroupPolicyMetadata,
  MsgUpdateGroupPolicyMetadataResponse: () => MsgUpdateGroupPolicyMetadataResponse,
  MsgVote: () => MsgVote,
  MsgVoteResponse: () => MsgVoteResponse,
  MsgWithdrawProposal: () => MsgWithdrawProposal,
  MsgWithdrawProposalResponse: () => MsgWithdrawProposalResponse,
  execFromJSON: () => execFromJSON,
  execToJSON: () => execToJSON
});
var _m0 = __toESM(require_minimal());
var Exec = function(Exec2) {
  Exec2[Exec2["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec2[Exec2["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec2[Exec2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Exec2;
}({});
var ExecSDKType = Exec;
function execFromJSON(object) {
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
function execToJSON(object) {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
var MsgCreateGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map((e) => e ? MemberRequest.toJSON(e) : void 0);
    } else {
      obj.members = [];
    }
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object) {
    var _object$admin, _object$members, _object$metadata;
    const message = createBaseMsgCreateGroup();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map((e) => MemberRequest.fromPartial(e))) || [];
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  }
};
function createBaseMsgCreateGroupResponse() {
  return {
    groupId: BigInt("0")
  };
}
var MsgCreateGroupResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    groupId: BigInt("0"),
    memberUpdates: []
  };
}
var MsgUpdateGroupMembers = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.memberUpdates.push(MemberRequest.decode(reader, reader.uint32()));
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
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      memberUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.memberUpdates) ? object.memberUpdates.map((e) => MemberRequest.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map((e) => e ? MemberRequest.toJSON(e) : void 0);
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$admin2, _object$memberUpdates;
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.memberUpdates = ((_object$memberUpdates = object.memberUpdates) === null || _object$memberUpdates === void 0 ? void 0 : _object$memberUpdates.map((e) => MemberRequest.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
var MsgUpdateGroupMembersResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  }
};
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    groupId: BigInt("0"),
    newAdmin: ""
  };
}
var MsgUpdateGroupAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.newAdmin !== void 0 && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object) {
    var _object$admin3, _object$newAdmin;
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    return message;
  }
};
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
var MsgUpdateGroupAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  }
};
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    groupId: BigInt("0"),
    metadata: ""
  };
}
var MsgUpdateGroupMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object) {
    var _object$admin4, _object$metadata2;
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
var MsgUpdateGroupMetadataResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  }
};
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    groupId: BigInt("0"),
    metadata: "",
    decisionPolicy: void 0
  };
}
var MsgCreateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== void 0) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.decisionPolicy !== void 0 && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$admin5, _object$metadata3;
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  }
};
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
var MsgCreateGroupPolicyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
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
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
  return {
    admin: "",
    groupPolicyAddress: "",
    newAdmin: ""
  };
}
var MsgUpdateGroupPolicyAdmin = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.newAdmin !== void 0 && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object) {
    var _object$admin6, _object$groupPolicyAd, _object$newAdmin2;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd = object.groupPolicyAddress) !== null && _object$groupPolicyAd !== void 0 ? _object$groupPolicyAd : "";
    message.newAdmin = (_object$newAdmin2 = object.newAdmin) !== null && _object$newAdmin2 !== void 0 ? _object$newAdmin2 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
  return {};
}
var MsgUpdateGroupPolicyAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  }
};
function createBaseMsgCreateGroupWithPolicy() {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: void 0
  };
}
var MsgCreateGroupWithPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
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
    if (message.decisionPolicy !== void 0) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
      groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
      groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
      groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map((e) => e ? MemberRequest.toJSON(e) : void 0);
    } else {
      obj.members = [];
    }
    message.groupMetadata !== void 0 && (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== void 0 && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== void 0 && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== void 0 && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$admin7, _object$members2, _object$groupMetadata, _object$groupPolicyMe, _object$groupPolicyAs;
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = (_object$admin7 = object.admin) !== null && _object$admin7 !== void 0 ? _object$admin7 : "";
    message.members = ((_object$members2 = object.members) === null || _object$members2 === void 0 ? void 0 : _object$members2.map((e) => MemberRequest.fromPartial(e))) || [];
    message.groupMetadata = (_object$groupMetadata = object.groupMetadata) !== null && _object$groupMetadata !== void 0 ? _object$groupMetadata : "";
    message.groupPolicyMetadata = (_object$groupPolicyMe = object.groupPolicyMetadata) !== null && _object$groupPolicyMe !== void 0 ? _object$groupPolicyMe : "";
    message.groupPolicyAsAdmin = (_object$groupPolicyAs = object.groupPolicyAsAdmin) !== null && _object$groupPolicyAs !== void 0 ? _object$groupPolicyAs : false;
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    groupId: BigInt("0"),
    groupPolicyAddress: ""
  };
}
var MsgCreateGroupWithPolicyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$groupPolicyAd2;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.groupPolicyAddress = (_object$groupPolicyAd2 = object.groupPolicyAddress) !== null && _object$groupPolicyAd2 !== void 0 ? _object$groupPolicyAd2 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: void 0
  };
}
var MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== void 0) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.decisionPolicy !== void 0 && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$admin8, _object$groupPolicyAd3;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = (_object$admin8 = object.admin) !== null && _object$admin8 !== void 0 ? _object$admin8 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd3 = object.groupPolicyAddress) !== null && _object$groupPolicyAd3 !== void 0 ? _object$groupPolicyAd3 : "";
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
var MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
  return {
    admin: "",
    groupPolicyAddress: "",
    metadata: ""
  };
}
var MsgUpdateGroupPolicyMetadata = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
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
  fromJSON(object) {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.admin !== void 0 && (obj.admin = message.admin);
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object) {
    var _object$admin9, _object$groupPolicyAd4, _object$metadata4;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = (_object$admin9 = object.admin) !== null && _object$admin9 !== void 0 ? _object$admin9 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd4 = object.groupPolicyAddress) !== null && _object$groupPolicyAd4 !== void 0 ? _object$groupPolicyAd4 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
  return {};
}
var MsgUpdateGroupPolicyMetadataResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  }
};
function createBaseMsgSubmitProposal() {
  return {
    groupPolicyAddress: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0,
    title: "",
    summary: ""
  };
}
var MsgSubmitProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
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
          message.exec = reader.int32();
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.summary = reader.string();
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
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map((e) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.messages = [];
    }
    message.exec !== void 0 && (obj.exec = execToJSON(message.exec));
    message.title !== void 0 && (obj.title = message.title);
    message.summary !== void 0 && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object) {
    var _object$groupPolicyAd5, _object$proposers, _object$metadata5, _object$messages, _object$exec, _object$title, _object$summary;
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = (_object$groupPolicyAd5 = object.groupPolicyAddress) !== null && _object$groupPolicyAd5 !== void 0 ? _object$groupPolicyAd5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map((e) => e)) || [];
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map((e) => Any.fromPartial(e))) || [];
    message.exec = (_object$exec = object.exec) !== null && _object$exec !== void 0 ? _object$exec : 0;
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt("0")
  };
}
var MsgSubmitProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgWithdrawProposal() {
  return {
    proposalId: BigInt("0"),
    address: ""
  };
}
var MsgWithdrawProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.address !== void 0 && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
var MsgWithdrawProposalResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt("0"),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
var MsgVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32();
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
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    message.option !== void 0 && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.exec !== void 0 && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$exec2;
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.exec = (_object$exec2 = object.exec) !== null && _object$exec2 !== void 0 ? _object$exec2 : 0;
    return message;
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
var MsgVoteResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgVoteResponse();
    return message;
  }
};
function createBaseMsgExec() {
  return {
    proposalId: BigInt("0"),
    executor: ""
  };
}
var MsgExec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.executor !== void 0 && (obj.executor = message.executor);
    return obj;
  },
  fromPartial(object) {
    var _object$executor;
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.executor = (_object$executor = object.executor) !== null && _object$executor !== void 0 ? _object$executor : "";
    return message;
  }
};
function createBaseMsgExecResponse() {
  return {
    result: 0
  };
}
var MsgExecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = reader.int32();
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
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result;
    const message = createBaseMsgExecResponse();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
function createBaseMsgLeaveGroup() {
  return {
    address: "",
    groupId: BigInt("0")
  };
}
var MsgLeaveGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseMsgLeaveGroup();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgLeaveGroupResponse() {
  return {};
}
var MsgLeaveGroupResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }
  createGroup(request) {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
    return promise.then((data2) => MsgCreateGroupResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupMembers(request) {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
    return promise.then((data2) => MsgUpdateGroupMembersResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupAdmin(request) {
    const data = MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
    return promise.then((data2) => MsgUpdateGroupAdminResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupMetadata(request) {
    const data = MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
    return promise.then((data2) => MsgUpdateGroupMetadataResponse.decode(new _m02.Reader(data2)));
  }
  createGroupPolicy(request) {
    const data = MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
    return promise.then((data2) => MsgCreateGroupPolicyResponse.decode(new _m02.Reader(data2)));
  }
  createGroupWithPolicy(request) {
    const data = MsgCreateGroupWithPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
    return promise.then((data2) => MsgCreateGroupWithPolicyResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupPolicyAdmin(request) {
    const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
    return promise.then((data2) => MsgUpdateGroupPolicyAdminResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupPolicyDecisionPolicy(request) {
    const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
    return promise.then((data2) => MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m02.Reader(data2)));
  }
  updateGroupPolicyMetadata(request) {
    const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
    return promise.then((data2) => MsgUpdateGroupPolicyMetadataResponse.decode(new _m02.Reader(data2)));
  }
  submitProposal(request) {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
    return promise.then((data2) => MsgSubmitProposalResponse.decode(new _m02.Reader(data2)));
  }
  withdrawProposal(request) {
    const data = MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
    return promise.then((data2) => MsgWithdrawProposalResponse.decode(new _m02.Reader(data2)));
  }
  vote(request) {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
    return promise.then((data2) => MsgVoteResponse.decode(new _m02.Reader(data2)));
  }
  exec(request) {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
    return promise.then((data2) => MsgExecResponse.decode(new _m02.Reader(data2)));
  }
  leaveGroup(request) {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
    return promise.then((data2) => MsgLeaveGroupResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  execFromJSON,
  MsgCreateGroup,
  MsgUpdateGroupMembers,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupMetadata,
  MsgCreateGroupPolicy,
  MsgUpdateGroupPolicyAdmin,
  MsgCreateGroupWithPolicy,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyMetadata,
  MsgSubmitProposal,
  MsgWithdrawProposal,
  MsgVote,
  MsgExec,
  MsgLeaveGroup,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-YHYQSQ2U.js.map
