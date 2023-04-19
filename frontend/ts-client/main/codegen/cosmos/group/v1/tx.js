"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgVoteResponse = exports.MsgVote = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgUpdateGroupPolicyAdmin = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgCreateGroupResponse = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgCreateGroup = exports.ExecSDKType = exports.Exec = void 0;
exports.execFromJSON = execFromJSON;
exports.execToJSON = execToJSON;
var _types = require("./types");
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
/** Exec defines modes of execution of a proposal on creation or on new vote. */
exports.Exec = Exec;
(function (Exec) {
  Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (exports.Exec = Exec = {}));
var ExecSDKType;
exports.ExecSDKType = ExecSDKType;
(function (ExecSDKType) {
  ExecSDKType[ExecSDKType["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  ExecSDKType[ExecSDKType["EXEC_TRY"] = 1] = "EXEC_TRY";
  ExecSDKType[ExecSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecSDKType || (exports.ExecSDKType = ExecSDKType = {}));
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
/** MsgCreateGroup is the Msg/CreateGroup request type. */

function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
var MsgCreateGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator = _createForOfIteratorHelper(message.members),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(_types.MemberRequest.decode(reader, reader.uint32()));
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
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$members, _object$metadata;
    var message = createBaseMsgCreateGroup();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  }
};
exports.MsgCreateGroup = MsgCreateGroup;
function createBaseMsgCreateGroupResponse() {
  return {
    groupId: _helpers.Long.UZERO
  };
}
var MsgCreateGroupResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateGroupResponse = MsgCreateGroupResponse;
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    groupId: _helpers.Long.UZERO,
    memberUpdates: []
  };
}
var MsgUpdateGroupMembers = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    var _iterator2 = _createForOfIteratorHelper(message.memberUpdates),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _types.MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin2, _object$memberUpdates;
    var message = createBaseMsgUpdateGroupMembers();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.memberUpdates = ((_object$memberUpdates = object.memberUpdates) === null || _object$memberUpdates === void 0 ? void 0 : _object$memberUpdates.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgUpdateGroupMembers = MsgUpdateGroupMembers;
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
var MsgUpdateGroupMembersResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMembersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  }
};
exports.MsgUpdateGroupMembersResponse = MsgUpdateGroupMembersResponse;
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    groupId: _helpers.Long.UZERO,
    newAdmin: ""
  };
}
var MsgUpdateGroupAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$admin3, _object$newAdmin;
    var message = createBaseMsgUpdateGroupAdmin();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    return message;
  }
};
exports.MsgUpdateGroupAdmin = MsgUpdateGroupAdmin;
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
var MsgUpdateGroupAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  }
};
exports.MsgUpdateGroupAdminResponse = MsgUpdateGroupAdminResponse;
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    groupId: _helpers.Long.UZERO,
    metadata: ""
  };
}
var MsgUpdateGroupMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$admin4, _object$metadata2;
    var message = createBaseMsgUpdateGroupMetadata();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
exports.MsgUpdateGroupMetadata = MsgUpdateGroupMetadata;
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
var MsgUpdateGroupMetadataResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  }
};
exports.MsgUpdateGroupMetadataResponse = MsgUpdateGroupMetadataResponse;
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    groupId: _helpers.Long.UZERO,
    metadata: "",
    decisionPolicy: undefined
  };
}
var MsgCreateGroupPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _any.Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.decisionPolicy = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin5, _object$metadata3;
    var message = createBaseMsgCreateGroupPolicy();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? _any.Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
exports.MsgCreateGroupPolicy = MsgCreateGroupPolicy;
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
var MsgCreateGroupPolicyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseMsgCreateGroupPolicyResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.MsgCreateGroupPolicyResponse = MsgCreateGroupPolicyResponse;
function createBaseMsgUpdateGroupPolicyAdmin() {
  return {
    admin: "",
    groupPolicyAddress: "",
    newAdmin: ""
  };
}
var MsgUpdateGroupPolicyAdmin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$admin6, _object$groupPolicyAd, _object$newAdmin2;
    var message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd = object.groupPolicyAddress) !== null && _object$groupPolicyAd !== void 0 ? _object$groupPolicyAd : "";
    message.newAdmin = (_object$newAdmin2 = object.newAdmin) !== null && _object$newAdmin2 !== void 0 ? _object$newAdmin2 : "";
    return message;
  }
};
exports.MsgUpdateGroupPolicyAdmin = MsgUpdateGroupPolicyAdmin;
function createBaseMsgUpdateGroupPolicyAdminResponse() {
  return {};
}
var MsgUpdateGroupPolicyAdminResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyAdminResponse = MsgUpdateGroupPolicyAdminResponse;
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
var MsgCreateGroupWithPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    var _iterator3 = _createForOfIteratorHelper(message.members),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
      _any.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(_types.MemberRequest.decode(reader, reader.uint32()));
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
          message.decisionPolicy = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin7, _object$members2, _object$groupMetadata, _object$groupPolicyMe, _object$groupPolicyAs;
    var message = createBaseMsgCreateGroupWithPolicy();
    message.admin = (_object$admin7 = object.admin) !== null && _object$admin7 !== void 0 ? _object$admin7 : "";
    message.members = ((_object$members2 = object.members) === null || _object$members2 === void 0 ? void 0 : _object$members2.map(function (e) {
      return _types.MemberRequest.fromPartial(e);
    })) || [];
    message.groupMetadata = (_object$groupMetadata = object.groupMetadata) !== null && _object$groupMetadata !== void 0 ? _object$groupMetadata : "";
    message.groupPolicyMetadata = (_object$groupPolicyMe = object.groupPolicyMetadata) !== null && _object$groupPolicyMe !== void 0 ? _object$groupPolicyMe : "";
    message.groupPolicyAsAdmin = (_object$groupPolicyAs = object.groupPolicyAsAdmin) !== null && _object$groupPolicyAs !== void 0 ? _object$groupPolicyAs : false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? _any.Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
exports.MsgCreateGroupWithPolicy = MsgCreateGroupWithPolicy;
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    groupId: _helpers.Long.UZERO,
    groupPolicyAddress: ""
  };
}
var MsgCreateGroupWithPolicyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$groupPolicyAd2;
    var message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.groupPolicyAddress = (_object$groupPolicyAd2 = object.groupPolicyAddress) !== null && _object$groupPolicyAd2 !== void 0 ? _object$groupPolicyAd2 : "";
    return message;
  }
};
exports.MsgCreateGroupWithPolicyResponse = MsgCreateGroupWithPolicyResponse;
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: undefined
  };
}
var MsgUpdateGroupPolicyDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      _any.Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.decisionPolicy = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin8, _object$groupPolicyAd3;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = (_object$admin8 = object.admin) !== null && _object$admin8 !== void 0 ? _object$admin8 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd3 = object.groupPolicyAddress) !== null && _object$groupPolicyAd3 !== void 0 ? _object$groupPolicyAd3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? _any.Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  }
};
exports.MsgUpdateGroupPolicyDecisionPolicy = MsgUpdateGroupPolicyDecisionPolicy;
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
var MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = MsgUpdateGroupPolicyDecisionPolicyResponse;
function createBaseMsgUpdateGroupPolicyMetadata() {
  return {
    admin: "",
    groupPolicyAddress: "",
    metadata: ""
  };
}
var MsgUpdateGroupPolicyMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$admin9, _object$groupPolicyAd4, _object$metadata4;
    var message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = (_object$admin9 = object.admin) !== null && _object$admin9 !== void 0 ? _object$admin9 : "";
    message.groupPolicyAddress = (_object$groupPolicyAd4 = object.groupPolicyAddress) !== null && _object$groupPolicyAd4 !== void 0 ? _object$groupPolicyAd4 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    return message;
  }
};
exports.MsgUpdateGroupPolicyMetadata = MsgUpdateGroupPolicyMetadata;
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
  return {};
}
var MsgUpdateGroupPolicyMetadataResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  }
};
exports.MsgUpdateGroupPolicyMetadataResponse = MsgUpdateGroupPolicyMetadataResponse;
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    var _iterator4 = _createForOfIteratorHelper(message.proposers),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    var _iterator5 = _createForOfIteratorHelper(message.messages),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        _any.Any.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
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
  fromPartial: function fromPartial(object) {
    var _object$groupPolicyAd5, _object$proposers, _object$metadata5, _object$messages, _object$exec, _object$title, _object$summary;
    var message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = (_object$groupPolicyAd5 = object.groupPolicyAddress) !== null && _object$groupPolicyAd5 !== void 0 ? _object$groupPolicyAd5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(function (e) {
      return e;
    })) || [];
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.exec = (_object$exec = object.exec) !== null && _object$exec !== void 0 ? _object$exec : 0;
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
exports.MsgSubmitProposal = MsgSubmitProposal;
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: _helpers.Long.UZERO
  };
}
var MsgSubmitProposalResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSubmitProposalResponse = MsgSubmitProposalResponse;
function createBaseMsgWithdrawProposal() {
  return {
    proposalId: _helpers.Long.UZERO,
    address: ""
  };
}
var MsgWithdrawProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
exports.MsgWithdrawProposal = MsgWithdrawProposal;
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
var MsgWithdrawProposalResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgWithdrawProposalResponse();
    return message;
  }
};
exports.MsgWithdrawProposalResponse = MsgWithdrawProposalResponse;
function createBaseMsgVote() {
  return {
    proposalId: _helpers.Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
var MsgVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$exec2;
    var message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.exec = (_object$exec2 = object.exec) !== null && _object$exec2 !== void 0 ? _object$exec2 : 0;
    return message;
  }
};
exports.MsgVote = MsgVote;
function createBaseMsgVoteResponse() {
  return {};
}
var MsgVoteResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgVoteResponse();
    return message;
  }
};
exports.MsgVoteResponse = MsgVoteResponse;
function createBaseMsgExec() {
  return {
    proposalId: _helpers.Long.UZERO,
    executor: ""
  };
}
var MsgExec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExec();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$executor;
    var message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.executor = (_object$executor = object.executor) !== null && _object$executor !== void 0 ? _object$executor : "";
    return message;
  }
};
exports.MsgExec = MsgExec;
function createBaseMsgExecResponse() {
  return {
    result: 0
  };
}
var MsgExecResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$result;
    var message = createBaseMsgExecResponse();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
exports.MsgExecResponse = MsgExecResponse;
function createBaseMsgLeaveGroup() {
  return {
    address: "",
    groupId: _helpers.Long.UZERO
  };
}
var MsgLeaveGroup = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseMsgLeaveGroup();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgLeaveGroup = MsgLeaveGroup;
function createBaseMsgLeaveGroupResponse() {
  return {};
}
var MsgLeaveGroupResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeaveGroupResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgLeaveGroupResponse();
    return message;
  }
};
exports.MsgLeaveGroupResponse = MsgLeaveGroupResponse;