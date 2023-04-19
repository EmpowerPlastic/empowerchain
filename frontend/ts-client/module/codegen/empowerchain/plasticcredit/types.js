import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export let ProjectStatus;
(function (ProjectStatus) {
  ProjectStatus[ProjectStatus["NEW"] = 0] = "NEW";
  ProjectStatus[ProjectStatus["APPROVED"] = 1] = "APPROVED";
  ProjectStatus[ProjectStatus["REJECTED"] = 2] = "REJECTED";
  ProjectStatus[ProjectStatus["SUSPENDED"] = 3] = "SUSPENDED";
  ProjectStatus[ProjectStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectStatus || (ProjectStatus = {}));
export let ProjectStatusSDKType;
(function (ProjectStatusSDKType) {
  ProjectStatusSDKType[ProjectStatusSDKType["NEW"] = 0] = "NEW";
  ProjectStatusSDKType[ProjectStatusSDKType["APPROVED"] = 1] = "APPROVED";
  ProjectStatusSDKType[ProjectStatusSDKType["REJECTED"] = 2] = "REJECTED";
  ProjectStatusSDKType[ProjectStatusSDKType["SUSPENDED"] = 3] = "SUSPENDED";
  ProjectStatusSDKType[ProjectStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectStatusSDKType || (ProjectStatusSDKType = {}));
export function projectStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return ProjectStatus.NEW;
    case 1:
    case "APPROVED":
      return ProjectStatus.APPROVED;
    case 2:
    case "REJECTED":
      return ProjectStatus.REJECTED;
    case 3:
    case "SUSPENDED":
      return ProjectStatus.SUSPENDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectStatus.UNRECOGNIZED;
  }
}
export function projectStatusToJSON(object) {
  switch (object) {
    case ProjectStatus.NEW:
      return "NEW";
    case ProjectStatus.APPROVED:
      return "APPROVED";
    case ProjectStatus.REJECTED:
      return "REJECTED";
    case ProjectStatus.SUSPENDED:
      return "SUSPENDED";
    case ProjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    issuerCreator: "",
    creditClassCreationFee: undefined
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuerCreator !== "") {
      writer.uint32(10).string(message.issuerCreator);
    }
    if (message.creditClassCreationFee !== undefined) {
      Coin.encode(message.creditClassCreationFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerCreator = reader.string();
          break;
        case 2:
          message.creditClassCreationFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$issuerCreator;
    const message = createBaseParams();
    message.issuerCreator = (_object$issuerCreator = object.issuerCreator) !== null && _object$issuerCreator !== void 0 ? _object$issuerCreator : "";
    message.creditClassCreationFee = object.creditClassCreationFee !== undefined && object.creditClassCreationFee !== null ? Coin.fromPartial(object.creditClassCreationFee) : undefined;
    return message;
  }
};
function createBaseIDCounters() {
  return {
    nextIssuerId: Long.UZERO,
    nextApplicantId: Long.UZERO,
    nextProjectId: Long.UZERO
  };
}
export const IDCounters = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.nextIssuerId.isZero()) {
      writer.uint32(8).uint64(message.nextIssuerId);
    }
    if (!message.nextApplicantId.isZero()) {
      writer.uint32(16).uint64(message.nextApplicantId);
    }
    if (!message.nextProjectId.isZero()) {
      writer.uint32(24).uint64(message.nextProjectId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextIssuerId = reader.uint64();
          break;
        case 2:
          message.nextApplicantId = reader.uint64();
          break;
        case 3:
          message.nextProjectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIDCounters();
    message.nextIssuerId = object.nextIssuerId !== undefined && object.nextIssuerId !== null ? Long.fromValue(object.nextIssuerId) : Long.UZERO;
    message.nextApplicantId = object.nextApplicantId !== undefined && object.nextApplicantId !== null ? Long.fromValue(object.nextApplicantId) : Long.UZERO;
    message.nextProjectId = object.nextProjectId !== undefined && object.nextProjectId !== null ? Long.fromValue(object.nextProjectId) : Long.UZERO;
    return message;
  }
};
function createBaseIssuer() {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
export const Issuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object) {
    var _object$name, _object$description, _object$admin;
    const message = createBaseIssuer();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
function createBaseApplicant() {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
export const Applicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object) {
    var _object$name2, _object$description2, _object$admin2;
    const message = createBaseApplicant();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
function createBaseCreditClass() {
  return {
    abbreviation: "",
    issuerId: Long.UZERO,
    name: ""
  };
}
export const CreditClass = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    if (!message.issuerId.isZero()) {
      writer.uint32(16).uint64(message.issuerId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        case 2:
          message.issuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$abbreviation, _object$name3;
    const message = createBaseCreditClass();
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    return message;
  }
};
function createBaseProject() {
  return {
    id: Long.UZERO,
    applicantId: Long.UZERO,
    creditClassAbbreviation: "",
    name: "",
    status: 0
  };
}
export const Project = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
    }
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(26).string(message.creditClassAbbreviation);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.applicantId = reader.uint64();
          break;
        case 3:
          message.creditClassAbbreviation = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creditClassAb, _object$name4, _object$status;
    const message = createBaseProject();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb = object.creditClassAbbreviation) !== null && _object$creditClassAb !== void 0 ? _object$creditClassAb : "";
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
function createBaseCreditCollection() {
  return {
    denom: "",
    projectId: Long.UZERO,
    totalAmount: undefined
  };
}
export const CreditCollection = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.totalAmount !== undefined) {
      CreditAmount.encode(message.totalAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.totalAmount = CreditAmount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$denom;
    const message = createBaseCreditCollection();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? CreditAmount.fromPartial(object.totalAmount) : undefined;
    return message;
  }
};
function createBaseCreditBalance() {
  return {
    owner: "",
    denom: "",
    balance: undefined
  };
}
export const CreditBalance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== undefined) {
      CreditAmount.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditBalance();
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
          message.balance = CreditAmount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner, _object$denom2;
    const message = createBaseCreditBalance();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.balance = object.balance !== undefined && object.balance !== null ? CreditAmount.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseCreditAmount() {
  return {
    active: Long.UZERO,
    retired: Long.UZERO
  };
}
export const CreditAmount = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.active.isZero()) {
      writer.uint32(8).uint64(message.active);
    }
    if (!message.retired.isZero()) {
      writer.uint32(16).uint64(message.retired);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.uint64();
          break;
        case 2:
          message.retired = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCreditAmount();
    message.active = object.active !== undefined && object.active !== null ? Long.fromValue(object.active) : Long.UZERO;
    message.retired = object.retired !== undefined && object.retired !== null ? Long.fromValue(object.retired) : Long.UZERO;
    return message;
  }
};
function createBaseProvenData() {
  return {
    uri: "",
    hash: ""
  };
}
export const ProvenData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvenData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$uri, _object$hash;
    const message = createBaseProvenData();
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};