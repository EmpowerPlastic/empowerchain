import {
  CreditBalance,
  CreditCollection,
  Params
} from "./chunk-CMRKTJPJ.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgApproveProject: () => MsgApproveProject,
  MsgApproveProjectResponse: () => MsgApproveProjectResponse,
  MsgCreateApplicant: () => MsgCreateApplicant,
  MsgCreateApplicantResponse: () => MsgCreateApplicantResponse,
  MsgCreateCreditType: () => MsgCreateCreditType,
  MsgCreateCreditTypeResponse: () => MsgCreateCreditTypeResponse,
  MsgCreateIssuer: () => MsgCreateIssuer,
  MsgCreateIssuerResponse: () => MsgCreateIssuerResponse,
  MsgCreateProject: () => MsgCreateProject,
  MsgCreateProjectResponse: () => MsgCreateProjectResponse,
  MsgIssueCredits: () => MsgIssueCredits,
  MsgIssueCreditsResponse: () => MsgIssueCreditsResponse,
  MsgRejectProject: () => MsgRejectProject,
  MsgRejectProjectResponse: () => MsgRejectProjectResponse,
  MsgRetireCredits: () => MsgRetireCredits,
  MsgRetireCreditsResponse: () => MsgRetireCreditsResponse,
  MsgSuspendProject: () => MsgSuspendProject,
  MsgSuspendProjectResponse: () => MsgSuspendProjectResponse,
  MsgTransferCredits: () => MsgTransferCredits,
  MsgTransferCreditsResponse: () => MsgTransferCreditsResponse,
  MsgUpdateApplicant: () => MsgUpdateApplicant,
  MsgUpdateApplicantResponse: () => MsgUpdateApplicantResponse,
  MsgUpdateCreditType: () => MsgUpdateCreditType,
  MsgUpdateCreditTypeResponse: () => MsgUpdateCreditTypeResponse,
  MsgUpdateIssuer: () => MsgUpdateIssuer,
  MsgUpdateIssuerResponse: () => MsgUpdateIssuerResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse,
  MsgUpdateProject: () => MsgUpdateProject,
  MsgUpdateProjectResponse: () => MsgUpdateProjectResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgCreateIssuer() {
  return {
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
var MsgCreateIssuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.admin = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== void 0 && (obj.creator = message.creator);
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$creator, _object$name, _object$description, _object$admin;
    const message = createBaseMsgCreateIssuer();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
function createBaseMsgCreateIssuerResponse() {
  return {
    issuerId: BigInt("0")
  };
}
var MsgCreateIssuerResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.issuerId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = BigInt(reader.uint64().toString());
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
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.issuerId !== void 0 && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateIssuerResponse();
    message.issuerId = object.issuerId !== void 0 && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgUpdateIssuer() {
  return {
    updater: "",
    issuerId: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
var MsgUpdateIssuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.issuerId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.admin = reader.string();
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
      updater: isSet(object.updater) ? String(object.updater) : "",
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.updater !== void 0 && (obj.updater = message.updater);
    message.issuerId !== void 0 && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$updater, _object$name2, _object$description2, _object$admin2;
    const message = createBaseMsgUpdateIssuer();
    message.updater = (_object$updater = object.updater) !== null && _object$updater !== void 0 ? _object$updater : "";
    message.issuerId = object.issuerId !== void 0 && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
function createBaseMsgUpdateIssuerResponse() {
  return {};
}
var MsgUpdateIssuerResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIssuerResponse();
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
    const message = createBaseMsgUpdateIssuerResponse();
    return message;
  }
};
function createBaseMsgCreateApplicant() {
  return {
    name: "",
    description: "",
    admin: ""
  };
}
var MsgCreateApplicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.admin = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$name3, _object$description3, _object$admin3;
    const message = createBaseMsgCreateApplicant();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    return message;
  }
};
function createBaseMsgCreateApplicantResponse() {
  return {
    applicantId: BigInt("0")
  };
}
var MsgCreateApplicantResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.applicantId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateApplicantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = BigInt(reader.uint64().toString());
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
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.applicantId !== void 0 && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateApplicantResponse();
    message.applicantId = object.applicantId !== void 0 && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgUpdateApplicant() {
  return {
    updater: "",
    applicantId: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
var MsgUpdateApplicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.applicantId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.applicantId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.admin = reader.string();
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
      updater: isSet(object.updater) ? String(object.updater) : "",
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.updater !== void 0 && (obj.updater = message.updater);
    message.applicantId !== void 0 && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$updater2, _object$name4, _object$description4, _object$admin4;
    const message = createBaseMsgUpdateApplicant();
    message.updater = (_object$updater2 = object.updater) !== null && _object$updater2 !== void 0 ? _object$updater2 : "";
    message.applicantId = object.applicantId !== void 0 && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    return message;
  }
};
function createBaseMsgUpdateApplicantResponse() {
  return {};
}
var MsgUpdateApplicantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateApplicantResponse();
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
    const message = createBaseMsgUpdateApplicantResponse();
    return message;
  }
};
function createBaseMsgCreateCreditType() {
  return {
    creator: "",
    abbreviation: "",
    issuerId: BigInt("0"),
    name: ""
  };
}
var MsgCreateCreditType = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.issuerId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.abbreviation = reader.string();
          break;
        case 3:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.name = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== void 0 && (obj.creator = message.creator);
    message.abbreviation !== void 0 && (obj.abbreviation = message.abbreviation);
    message.issuerId !== void 0 && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$creator2, _object$abbreviation, _object$name5;
    const message = createBaseMsgCreateCreditType();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== void 0 && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    return message;
  }
};
function createBaseMsgCreateCreditTypeResponse() {
  return {};
}
var MsgCreateCreditTypeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCreditTypeResponse();
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
    const message = createBaseMsgCreateCreditTypeResponse();
    return message;
  }
};
function createBaseMsgUpdateCreditType() {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}
var MsgUpdateCreditType = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.abbreviation = reader.string();
          break;
        case 3:
          message.name = reader.string();
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
      updater: isSet(object.updater) ? String(object.updater) : "",
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.updater !== void 0 && (obj.updater = message.updater);
    message.abbreviation !== void 0 && (obj.abbreviation = message.abbreviation);
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$updater3, _object$abbreviation2, _object$name6;
    const message = createBaseMsgUpdateCreditType();
    message.updater = (_object$updater3 = object.updater) !== null && _object$updater3 !== void 0 ? _object$updater3 : "";
    message.abbreviation = (_object$abbreviation2 = object.abbreviation) !== null && _object$abbreviation2 !== void 0 ? _object$abbreviation2 : "";
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    return message;
  }
};
function createBaseMsgUpdateCreditTypeResponse() {
  return {};
}
var MsgUpdateCreditTypeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCreditTypeResponse();
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
    const message = createBaseMsgUpdateCreditTypeResponse();
    return message;
  }
};
function createBaseMsgCreateProject() {
  return {
    creator: "",
    applicantId: BigInt("0"),
    creditTypeAbbreviation: "",
    name: ""
  };
}
var MsgCreateProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.applicantId.toString()));
    }
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(26).string(message.creditTypeAbbreviation);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.applicantId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.creditTypeAbbreviation = reader.string();
          break;
        case 4:
          message.name = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== void 0 && (obj.creator = message.creator);
    message.applicantId !== void 0 && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== void 0 && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$creator3, _object$creditTypeAbb, _object$name7;
    const message = createBaseMsgCreateProject();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.applicantId = object.applicantId !== void 0 && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = (_object$creditTypeAbb = object.creditTypeAbbreviation) !== null && _object$creditTypeAbb !== void 0 ? _object$creditTypeAbb : "";
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    return message;
  }
};
function createBaseMsgCreateProjectResponse() {
  return {
    projectId: BigInt("0")
  };
}
var MsgCreateProjectResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = BigInt(reader.uint64().toString());
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
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgUpdateProject() {
  return {
    updater: "",
    projectId: BigInt("0"),
    name: ""
  };
}
var MsgUpdateProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.name = reader.string();
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
      updater: isSet(object.updater) ? String(object.updater) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.updater !== void 0 && (obj.updater = message.updater);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$updater4, _object$name8;
    const message = createBaseMsgUpdateProject();
    message.updater = (_object$updater4 = object.updater) !== null && _object$updater4 !== void 0 ? _object$updater4 : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    return message;
  }
};
function createBaseMsgUpdateProjectResponse() {
  return {};
}
var MsgUpdateProjectResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectResponse();
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
    const message = createBaseMsgUpdateProjectResponse();
    return message;
  }
};
function createBaseMsgApproveProject() {
  return {
    approver: "",
    projectId: BigInt("0")
  };
}
var MsgApproveProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.approver !== "") {
      writer.uint32(10).string(message.approver);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approver = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
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
      approver: isSet(object.approver) ? String(object.approver) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.approver !== void 0 && (obj.approver = message.approver);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$approver;
    const message = createBaseMsgApproveProject();
    message.approver = (_object$approver = object.approver) !== null && _object$approver !== void 0 ? _object$approver : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgApproveProjectResponse() {
  return {};
}
var MsgApproveProjectResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProjectResponse();
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
    const message = createBaseMsgApproveProjectResponse();
    return message;
  }
};
function createBaseMsgRejectProject() {
  return {
    rejector: "",
    projectId: BigInt("0")
  };
}
var MsgRejectProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rejector !== "") {
      writer.uint32(10).string(message.rejector);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rejector = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
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
      rejector: isSet(object.rejector) ? String(object.rejector) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.rejector !== void 0 && (obj.rejector = message.rejector);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$rejector;
    const message = createBaseMsgRejectProject();
    message.rejector = (_object$rejector = object.rejector) !== null && _object$rejector !== void 0 ? _object$rejector : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgRejectProjectResponse() {
  return {};
}
var MsgRejectProjectResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProjectResponse();
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
    const message = createBaseMsgRejectProjectResponse();
    return message;
  }
};
function createBaseMsgSuspendProject() {
  return {
    updater: "",
    projectId: BigInt("0")
  };
}
var MsgSuspendProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
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
      updater: isSet(object.updater) ? String(object.updater) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.updater !== void 0 && (obj.updater = message.updater);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$updater5;
    const message = createBaseMsgSuspendProject();
    message.updater = (_object$updater5 = object.updater) !== null && _object$updater5 !== void 0 ? _object$updater5 : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgSuspendProjectResponse() {
  return {};
}
var MsgSuspendProjectResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendProjectResponse();
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
    const message = createBaseMsgSuspendProjectResponse();
    return message;
  }
};
function createBaseMsgIssueCredits() {
  return {
    creator: "",
    projectId: BigInt("0"),
    serialNumber: "",
    creditAmount: BigInt("0"),
    metadataUris: []
  };
}
var MsgIssueCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    if (message.serialNumber !== "") {
      writer.uint32(26).string(message.serialNumber);
    }
    if (message.creditAmount !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.creditAmount.toString()));
    }
    for (const v of message.metadataUris) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.serialNumber = reader.string();
          break;
        case 4:
          message.creditAmount = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.metadataUris.push(reader.string());
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      creditAmount: isSet(object.creditAmount) ? BigInt(object.creditAmount.toString()) : BigInt("0"),
      metadataUris: Array.isArray(object === null || object === void 0 ? void 0 : object.metadataUris) ? object.metadataUris.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== void 0 && (obj.creator = message.creator);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.serialNumber !== void 0 && (obj.serialNumber = message.serialNumber);
    message.creditAmount !== void 0 && (obj.creditAmount = (message.creditAmount || BigInt("0")).toString());
    if (message.metadataUris) {
      obj.metadataUris = message.metadataUris.map((e) => e);
    } else {
      obj.metadataUris = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$creator4, _object$serialNumber, _object$metadataUris;
    const message = createBaseMsgIssueCredits();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.serialNumber = (_object$serialNumber = object.serialNumber) !== null && _object$serialNumber !== void 0 ? _object$serialNumber : "";
    message.creditAmount = object.creditAmount !== void 0 && object.creditAmount !== null ? BigInt(object.creditAmount.toString()) : BigInt("0");
    message.metadataUris = ((_object$metadataUris = object.metadataUris) === null || _object$metadataUris === void 0 ? void 0 : _object$metadataUris.map((e) => e)) || [];
    return message;
  }
};
function createBaseMsgIssueCreditsResponse() {
  return {
    collection: void 0
  };
}
var MsgIssueCreditsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.collection !== void 0) {
      CreditCollection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCreditsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = CreditCollection.decode(reader, reader.uint32());
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
      collection: isSet(object.collection) ? CreditCollection.fromJSON(object.collection) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.collection !== void 0 && (obj.collection = message.collection ? CreditCollection.toJSON(message.collection) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgIssueCreditsResponse();
    message.collection = object.collection !== void 0 && object.collection !== null ? CreditCollection.fromPartial(object.collection) : void 0;
    return message;
  }
};
function createBaseMsgTransferCredits() {
  return {
    from: "",
    to: "",
    denom: "",
    amount: BigInt("0"),
    retire: false,
    retiringEntityName: "",
    retiringEntityAdditionalData: ""
  };
}
var MsgTransferCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.amount.toString()));
    }
    if (message.retire === true) {
      writer.uint32(40).bool(message.retire);
    }
    if (message.retiringEntityName !== "") {
      writer.uint32(50).string(message.retiringEntityName);
    }
    if (message.retiringEntityAdditionalData !== "") {
      writer.uint32(58).string(message.retiringEntityAdditionalData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.amount = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.retire = reader.bool();
          break;
        case 6:
          message.retiringEntityName = reader.string();
          break;
        case 7:
          message.retiringEntityAdditionalData = reader.string();
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
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0"),
      retire: isSet(object.retire) ? Boolean(object.retire) : false,
      retiringEntityName: isSet(object.retiringEntityName) ? String(object.retiringEntityName) : "",
      retiringEntityAdditionalData: isSet(object.retiringEntityAdditionalData) ? String(object.retiringEntityAdditionalData) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.from !== void 0 && (obj.from = message.from);
    message.to !== void 0 && (obj.to = message.to);
    message.denom !== void 0 && (obj.denom = message.denom);
    message.amount !== void 0 && (obj.amount = (message.amount || BigInt("0")).toString());
    message.retire !== void 0 && (obj.retire = message.retire);
    message.retiringEntityName !== void 0 && (obj.retiringEntityName = message.retiringEntityName);
    message.retiringEntityAdditionalData !== void 0 && (obj.retiringEntityAdditionalData = message.retiringEntityAdditionalData);
    return obj;
  },
  fromPartial(object) {
    var _object$from, _object$to, _object$denom, _object$retire, _object$retiringEntit, _object$retiringEntit2;
    const message = createBaseMsgTransferCredits();
    message.from = (_object$from = object.from) !== null && _object$from !== void 0 ? _object$from : "";
    message.to = (_object$to = object.to) !== null && _object$to !== void 0 ? _object$to : "";
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    message.retire = (_object$retire = object.retire) !== null && _object$retire !== void 0 ? _object$retire : false;
    message.retiringEntityName = (_object$retiringEntit = object.retiringEntityName) !== null && _object$retiringEntit !== void 0 ? _object$retiringEntit : "";
    message.retiringEntityAdditionalData = (_object$retiringEntit2 = object.retiringEntityAdditionalData) !== null && _object$retiringEntit2 !== void 0 ? _object$retiringEntit2 : "";
    return message;
  }
};
function createBaseMsgTransferCreditsResponse() {
  return {};
}
var MsgTransferCreditsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCreditsResponse();
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
    const message = createBaseMsgTransferCreditsResponse();
    return message;
  }
};
function createBaseMsgRetireCredits() {
  return {
    owner: "",
    denom: "",
    amount: BigInt("0"),
    retiringEntityName: "",
    retiringEntityAdditionalData: ""
  };
}
var MsgRetireCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.amount.toString()));
    }
    if (message.retiringEntityName !== "") {
      writer.uint32(34).string(message.retiringEntityName);
    }
    if (message.retiringEntityAdditionalData !== "") {
      writer.uint32(42).string(message.retiringEntityAdditionalData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.retiringEntityName = reader.string();
          break;
        case 5:
          message.retiringEntityAdditionalData = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0"),
      retiringEntityName: isSet(object.retiringEntityName) ? String(object.retiringEntityName) : "",
      retiringEntityAdditionalData: isSet(object.retiringEntityAdditionalData) ? String(object.retiringEntityAdditionalData) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.denom !== void 0 && (obj.denom = message.denom);
    message.amount !== void 0 && (obj.amount = (message.amount || BigInt("0")).toString());
    message.retiringEntityName !== void 0 && (obj.retiringEntityName = message.retiringEntityName);
    message.retiringEntityAdditionalData !== void 0 && (obj.retiringEntityAdditionalData = message.retiringEntityAdditionalData);
    return obj;
  },
  fromPartial(object) {
    var _object$owner, _object$denom2, _object$retiringEntit3, _object$retiringEntit4;
    const message = createBaseMsgRetireCredits();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    message.retiringEntityName = (_object$retiringEntit3 = object.retiringEntityName) !== null && _object$retiringEntit3 !== void 0 ? _object$retiringEntit3 : "";
    message.retiringEntityAdditionalData = (_object$retiringEntit4 = object.retiringEntityAdditionalData) !== null && _object$retiringEntit4 !== void 0 ? _object$retiringEntit4 : "";
    return message;
  }
};
function createBaseMsgRetireCreditsResponse() {
  return {
    balance: void 0
  };
}
var MsgRetireCreditsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.balance !== void 0) {
      CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireCreditsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = CreditBalance.decode(reader, reader.uint32());
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
      balance: isSet(object.balance) ? CreditBalance.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.balance !== void 0 && (obj.balance = message.balance ? CreditBalance.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgRetireCreditsResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? CreditBalance.fromPartial(object.balance) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createIssuer = this.createIssuer.bind(this);
    this.updateIssuer = this.updateIssuer.bind(this);
    this.createApplicant = this.createApplicant.bind(this);
    this.updateApplicant = this.updateApplicant.bind(this);
    this.createCreditType = this.createCreditType.bind(this);
    this.updateCreditType = this.updateCreditType.bind(this);
    this.createProject = this.createProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.approveProject = this.approveProject.bind(this);
    this.rejectProject = this.rejectProject.bind(this);
    this.suspendProject = this.suspendProject.bind(this);
    this.issueCredits = this.issueCredits.bind(this);
    this.transferCredits = this.transferCredits.bind(this);
    this.retireCredits = this.retireCredits.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
  createIssuer(request) {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateIssuer", data);
    return promise.then((data2) => MsgCreateIssuerResponse.decode(new _m02.Reader(data2)));
  }
  updateIssuer(request) {
    const data = MsgUpdateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateIssuer", data);
    return promise.then((data2) => MsgUpdateIssuerResponse.decode(new _m02.Reader(data2)));
  }
  createApplicant(request) {
    const data = MsgCreateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateApplicant", data);
    return promise.then((data2) => MsgCreateApplicantResponse.decode(new _m02.Reader(data2)));
  }
  updateApplicant(request) {
    const data = MsgUpdateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateApplicant", data);
    return promise.then((data2) => MsgUpdateApplicantResponse.decode(new _m02.Reader(data2)));
  }
  createCreditType(request) {
    const data = MsgCreateCreditType.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateCreditType", data);
    return promise.then((data2) => MsgCreateCreditTypeResponse.decode(new _m02.Reader(data2)));
  }
  updateCreditType(request) {
    const data = MsgUpdateCreditType.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateCreditType", data);
    return promise.then((data2) => MsgUpdateCreditTypeResponse.decode(new _m02.Reader(data2)));
  }
  createProject(request) {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateProject", data);
    return promise.then((data2) => MsgCreateProjectResponse.decode(new _m02.Reader(data2)));
  }
  updateProject(request) {
    const data = MsgUpdateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateProject", data);
    return promise.then((data2) => MsgUpdateProjectResponse.decode(new _m02.Reader(data2)));
  }
  approveProject(request) {
    const data = MsgApproveProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "ApproveProject", data);
    return promise.then((data2) => MsgApproveProjectResponse.decode(new _m02.Reader(data2)));
  }
  rejectProject(request) {
    const data = MsgRejectProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RejectProject", data);
    return promise.then((data2) => MsgRejectProjectResponse.decode(new _m02.Reader(data2)));
  }
  suspendProject(request) {
    const data = MsgSuspendProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "SuspendProject", data);
    return promise.then((data2) => MsgSuspendProjectResponse.decode(new _m02.Reader(data2)));
  }
  issueCredits(request) {
    const data = MsgIssueCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "IssueCredits", data);
    return promise.then((data2) => MsgIssueCreditsResponse.decode(new _m02.Reader(data2)));
  }
  transferCredits(request) {
    const data = MsgTransferCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "TransferCredits", data);
    return promise.then((data2) => MsgTransferCreditsResponse.decode(new _m02.Reader(data2)));
  }
  retireCredits(request) {
    const data = MsgRetireCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RetireCredits", data);
    return promise.then((data2) => MsgRetireCreditsResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgUpdateParams,
  MsgCreateIssuer,
  MsgUpdateIssuer,
  MsgCreateApplicant,
  MsgUpdateApplicant,
  MsgCreateCreditType,
  MsgUpdateCreditType,
  MsgCreateProject,
  MsgUpdateProject,
  MsgApproveProject,
  MsgRejectProject,
  MsgSuspendProject,
  MsgIssueCredits,
  MsgTransferCredits,
  MsgRetireCredits,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-TMBFTG73.js.map
