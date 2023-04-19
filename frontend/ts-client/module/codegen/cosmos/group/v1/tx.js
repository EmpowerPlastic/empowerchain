import { MemberRequest } from "./types";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */

export let Exec;
/** Exec defines modes of execution of a proposal on creation or on new vote. */
(function (Exec) {
  Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export let ExecSDKType;
(function (ExecSDKType) {
  ExecSDKType[ExecSDKType["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  ExecSDKType[ExecSDKType["EXEC_TRY"] = 1] = "EXEC_TRY";
  ExecSDKType[ExecSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecSDKType || (ExecSDKType = {}));
export function execFromJSON(object) {
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
export function execToJSON(object) {
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
/** MsgCreateGroup is the Msg/CreateGroup request type. */

function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
export const MsgCreateGroup = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$admin, _object$members, _object$metadata;
    const message = createBaseMsgCreateGroup();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(e => MemberRequest.fromPartial(e))) || [];
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  }
};
function createBaseMsgCreateGroupResponse() {
  return {
    groupId: Long.UZERO
  };
}
export const MsgCreateGroupResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    groupId: Long.UZERO,
    memberUpdates: []
  };
}
export const MsgUpdateGroupMembers = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
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
  fromPartial(object) {
    var _object$admin2, _object$memberUpdates;
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.memberUpdates = ((_object$memberUpdates = object.memberUpdates) === null || _object$memberUpdates === void 0 ? void 0 : _object$memberUpdates.map(e => MemberRequest.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  }
};
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    groupId: Long.UZERO,
    newAdmin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
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
  fromPartial(object) {
    var _object$admin3, _object$newAdmin;
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    return message;
  }
};
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  }
};
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: ""
  };
}
export const MsgUpdateGroupMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
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
  fromPartial(object) {
    var _object$admin4, _object$metadata2;
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  }
};
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: "",
    decisionPolicy: undefined
  };
}
export const MsgCreateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
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
  fromPartial(object) {
    var _object$admin5, _object$metadata3;
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
export const MsgCreateGroupPolicyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgUpdateGroupPolicyAdmin = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgUpdateGroupPolicyAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
    decisionPolicy: undefined
  };
}
export const MsgCreateGroupWithPolicy = {
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
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$admin7, _object$members2, _object$groupMetadata, _object$groupPolicyMe, _object$groupPolicyAs;
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = (_object$admin7 = object.admin) !== null && _object$admin7 !== void 0 ? _object$admin7 : "";
    message.members = ((_object$members2 = object.members) === null || _object$members2 === void 0 ? void 0 : _object$members2.map(e => MemberRequest.fromPartial(e))) || [];
    message.groupMetadata = (_object$groupMetadata = object.groupMetadata) !== null && _object$groupMetadata !== void 0 ? _object$groupMetadata : "";
    message.groupPolicyMetadata = (_object$groupPolicyMe = object.groupPolicyMetadata) !== null && _object$groupPolicyMe !== void 0 ? _object$groupPolicyMe : "";
    message.groupPolicyAsAdmin = (_object$groupPolicyAs = object.groupPolicyAsAdmin) !== null && _object$groupPolicyAs !== void 0 ? _object$groupPolicyAs : false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    groupId: Long.UZERO,
    groupPolicyAddress: ""
  };
}
export const MsgCreateGroupWithPolicyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
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
  fromPartial(object) {
    var _object$groupPolicyAd2;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.groupPolicyAddress = (_object$groupPolicyAd2 = object.groupPolicyAddress) !== null && _object$groupPolicyAd2 !== void 0 ? _object$groupPolicyAd2 : "";
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: undefined
  };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$admin8, _object$groupPolicyAd3;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = (_object$admin8 = object.admin) !== null && _object$admin8 !== void 0 ? _object$admin8 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd3 = object.groupPolicyAddress) !== null && _object$groupPolicyAd3 !== void 0 ? _object$groupPolicyAd3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgUpdateGroupPolicyMetadata = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgSubmitProposal = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$groupPolicyAd5, _object$proposers, _object$metadata5, _object$messages, _object$exec, _object$title, _object$summary;
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = (_object$groupPolicyAd5 = object.groupPolicyAddress) !== null && _object$groupPolicyAd5 !== void 0 ? _object$groupPolicyAd5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(e => e)) || [];
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    message.exec = (_object$exec = object.exec) !== null && _object$exec !== void 0 ? _object$exec : 0;
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: Long.UZERO
  };
}
export const MsgSubmitProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgWithdrawProposal() {
  return {
    proposalId: Long.UZERO,
    address: ""
  };
}
export const MsgWithdrawProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial(object) {
    var _object$address2;
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
export const MsgWithdrawProposalResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  }
};
function createBaseMsgVote() {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
export const MsgVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$exec2;
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
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
export const MsgVoteResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgVoteResponse();
    return message;
  }
};
function createBaseMsgExec() {
  return {
    proposalId: Long.UZERO,
    executor: ""
  };
}
export const MsgExec = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial(object) {
    var _object$executor;
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.executor = (_object$executor = object.executor) !== null && _object$executor !== void 0 ? _object$executor : "";
    return message;
  }
};
function createBaseMsgExecResponse() {
  return {
    result: 0
  };
}
export const MsgExecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
    groupId: Long.UZERO
  };
}
export const MsgLeaveGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseMsgLeaveGroup();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgLeaveGroupResponse() {
  return {};
}
export const MsgLeaveGroupResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  }
};