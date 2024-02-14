import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/types.js
var types_exports = {};
__export(types_exports, {
  Applicant: () => Applicant,
  CreditAmount: () => CreditAmount,
  CreditBalance: () => CreditBalance,
  CreditCollection: () => CreditCollection,
  CreditType: () => CreditType,
  IDCounters: () => IDCounters,
  Issuer: () => Issuer,
  Params: () => Params,
  Project: () => Project,
  ProjectStatus: () => ProjectStatus,
  ProjectStatusSDKType: () => ProjectStatusSDKType,
  ProvenData: () => ProvenData,
  projectStatusFromJSON: () => projectStatusFromJSON,
  projectStatusToJSON: () => projectStatusToJSON
});
var _m0 = __toESM(require_minimal());
var ProjectStatus = function(ProjectStatus2) {
  ProjectStatus2[ProjectStatus2["NEW"] = 0] = "NEW";
  ProjectStatus2[ProjectStatus2["APPROVED"] = 1] = "APPROVED";
  ProjectStatus2[ProjectStatus2["REJECTED"] = 2] = "REJECTED";
  ProjectStatus2[ProjectStatus2["SUSPENDED"] = 3] = "SUSPENDED";
  ProjectStatus2[ProjectStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProjectStatus2;
}({});
var ProjectStatusSDKType = ProjectStatus;
function projectStatusFromJSON(object) {
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
function projectStatusToJSON(object) {
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
function createBaseParams() {
  return {
    issuerCreator: "",
    creditTypeCreationFee: void 0
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuerCreator !== "") {
      writer.uint32(10).string(message.issuerCreator);
    }
    if (message.creditTypeCreationFee !== void 0) {
      Coin.encode(message.creditTypeCreationFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerCreator = reader.string();
          break;
        case 2:
          message.creditTypeCreationFee = Coin.decode(reader, reader.uint32());
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
      issuerCreator: isSet(object.issuerCreator) ? String(object.issuerCreator) : "",
      creditTypeCreationFee: isSet(object.creditTypeCreationFee) ? Coin.fromJSON(object.creditTypeCreationFee) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.issuerCreator !== void 0 && (obj.issuerCreator = message.issuerCreator);
    message.creditTypeCreationFee !== void 0 && (obj.creditTypeCreationFee = message.creditTypeCreationFee ? Coin.toJSON(message.creditTypeCreationFee) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$issuerCreator;
    const message = createBaseParams();
    message.issuerCreator = (_object$issuerCreator = object.issuerCreator) !== null && _object$issuerCreator !== void 0 ? _object$issuerCreator : "";
    message.creditTypeCreationFee = object.creditTypeCreationFee !== void 0 && object.creditTypeCreationFee !== null ? Coin.fromPartial(object.creditTypeCreationFee) : void 0;
    return message;
  }
};
function createBaseIDCounters() {
  return {
    nextIssuerId: BigInt("0"),
    nextApplicantId: BigInt("0"),
    nextProjectId: BigInt("0")
  };
}
var IDCounters = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.nextIssuerId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.nextIssuerId.toString()));
    }
    if (message.nextApplicantId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.nextApplicantId.toString()));
    }
    if (message.nextProjectId !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.nextProjectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIDCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextIssuerId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.nextApplicantId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.nextProjectId = BigInt(reader.uint64().toString());
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
      nextIssuerId: isSet(object.nextIssuerId) ? BigInt(object.nextIssuerId.toString()) : BigInt("0"),
      nextApplicantId: isSet(object.nextApplicantId) ? BigInt(object.nextApplicantId.toString()) : BigInt("0"),
      nextProjectId: isSet(object.nextProjectId) ? BigInt(object.nextProjectId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.nextIssuerId !== void 0 && (obj.nextIssuerId = (message.nextIssuerId || BigInt("0")).toString());
    message.nextApplicantId !== void 0 && (obj.nextApplicantId = (message.nextApplicantId || BigInt("0")).toString());
    message.nextProjectId !== void 0 && (obj.nextProjectId = (message.nextProjectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseIDCounters();
    message.nextIssuerId = object.nextIssuerId !== void 0 && object.nextIssuerId !== null ? BigInt(object.nextIssuerId.toString()) : BigInt("0");
    message.nextApplicantId = object.nextApplicantId !== void 0 && object.nextApplicantId !== null ? BigInt(object.nextApplicantId.toString()) : BigInt("0");
    message.nextProjectId = object.nextProjectId !== void 0 && object.nextProjectId !== null ? BigInt(object.nextProjectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseIssuer() {
  return {
    id: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
var Issuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
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
    const message = createBaseIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$description, _object$admin;
    const message = createBaseIssuer();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
function createBaseApplicant() {
  return {
    id: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
var Applicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
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
    const message = createBaseApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    message.description !== void 0 && (obj.description = message.description);
    message.admin !== void 0 && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object) {
    var _object$name2, _object$description2, _object$admin2;
    const message = createBaseApplicant();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
function createBaseCreditType() {
  return {
    abbreviation: "",
    issuerId: BigInt("0"),
    name: ""
  };
}
var CreditType = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.issuerId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        case 2:
          message.issuerId = BigInt(reader.uint64().toString());
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
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.abbreviation !== void 0 && (obj.abbreviation = message.abbreviation);
    message.issuerId !== void 0 && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$abbreviation, _object$name3;
    const message = createBaseCreditType();
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== void 0 && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    return message;
  }
};
function createBaseProject() {
  return {
    id: BigInt("0"),
    applicantId: BigInt("0"),
    creditTypeAbbreviation: "",
    name: "",
    status: 0
  };
}
var Project = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? projectStatusFromJSON(object.status) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.applicantId !== void 0 && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== void 0 && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.name !== void 0 && (obj.name = message.name);
    message.status !== void 0 && (obj.status = projectStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object) {
    var _object$creditTypeAbb, _object$name4, _object$status;
    const message = createBaseProject();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.applicantId = object.applicantId !== void 0 && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = (_object$creditTypeAbb = object.creditTypeAbbreviation) !== null && _object$creditTypeAbb !== void 0 ? _object$creditTypeAbb : "";
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
function createBaseCreditCollection() {
  return {
    denom: "",
    projectId: BigInt("0"),
    totalAmount: void 0,
    metadataUris: []
  };
}
var CreditCollection = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    if (message.totalAmount !== void 0) {
      CreditAmount.encode(message.totalAmount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.metadataUris) {
      writer.uint32(34).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreditCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.totalAmount = CreditAmount.decode(reader, reader.uint32());
          break;
        case 4:
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      totalAmount: isSet(object.totalAmount) ? CreditAmount.fromJSON(object.totalAmount) : void 0,
      metadataUris: Array.isArray(object === null || object === void 0 ? void 0 : object.metadataUris) ? object.metadataUris.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    message.projectId !== void 0 && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.totalAmount !== void 0 && (obj.totalAmount = message.totalAmount ? CreditAmount.toJSON(message.totalAmount) : void 0);
    if (message.metadataUris) {
      obj.metadataUris = message.metadataUris.map((e) => e);
    } else {
      obj.metadataUris = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$denom, _object$metadataUris;
    const message = createBaseCreditCollection();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.totalAmount = object.totalAmount !== void 0 && object.totalAmount !== null ? CreditAmount.fromPartial(object.totalAmount) : void 0;
    message.metadataUris = ((_object$metadataUris = object.metadataUris) === null || _object$metadataUris === void 0 ? void 0 : _object$metadataUris.map((e) => e)) || [];
    return message;
  }
};
function createBaseCreditBalance() {
  return {
    owner: "",
    denom: "",
    balance: void 0
  };
}
var CreditBalance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== void 0) {
      CreditAmount.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? CreditAmount.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.denom !== void 0 && (obj.denom = message.denom);
    message.balance !== void 0 && (obj.balance = message.balance ? CreditAmount.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$owner, _object$denom2;
    const message = createBaseCreditBalance();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.balance = object.balance !== void 0 && object.balance !== null ? CreditAmount.fromPartial(object.balance) : void 0;
    return message;
  }
};
function createBaseCreditAmount() {
  return {
    active: BigInt("0"),
    retired: BigInt("0")
  };
}
var CreditAmount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.active !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.active.toString()));
    }
    if (message.retired !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.retired.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreditAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.retired = BigInt(reader.uint64().toString());
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
      active: isSet(object.active) ? BigInt(object.active.toString()) : BigInt("0"),
      retired: isSet(object.retired) ? BigInt(object.retired.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.active !== void 0 && (obj.active = (message.active || BigInt("0")).toString());
    message.retired !== void 0 && (obj.retired = (message.retired || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseCreditAmount();
    message.active = object.active !== void 0 && object.active !== null ? BigInt(object.active.toString()) : BigInt("0");
    message.retired = object.retired !== void 0 && object.retired !== null ? BigInt(object.retired.toString()) : BigInt("0");
    return message;
  }
};
function createBaseProvenData() {
  return {
    uri: "",
    hash: ""
  };
}
var ProvenData = {
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
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.uri !== void 0 && (obj.uri = message.uri);
    message.hash !== void 0 && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$uri, _object$hash;
    const message = createBaseProvenData();
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};

export {
  Params,
  IDCounters,
  Issuer,
  Applicant,
  CreditType,
  Project,
  CreditCollection,
  CreditBalance,
  types_exports
};
//# sourceMappingURL=chunk-CMRKTJPJ.js.map
