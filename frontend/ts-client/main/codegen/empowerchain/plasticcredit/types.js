"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProvenData = exports.ProjectStatusSDKType = exports.ProjectStatus = exports.Project = exports.Params = exports.Issuer = exports.IDCounters = exports.CreditCollection = exports.CreditClass = exports.CreditBalance = exports.CreditAmount = exports.Applicant = void 0;
exports.projectStatusFromJSON = projectStatusFromJSON;
exports.projectStatusToJSON = projectStatusToJSON;
var _coin = require("../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ProjectStatus;
exports.ProjectStatus = ProjectStatus;
(function (ProjectStatus) {
  ProjectStatus[ProjectStatus["NEW"] = 0] = "NEW";
  ProjectStatus[ProjectStatus["APPROVED"] = 1] = "APPROVED";
  ProjectStatus[ProjectStatus["REJECTED"] = 2] = "REJECTED";
  ProjectStatus[ProjectStatus["SUSPENDED"] = 3] = "SUSPENDED";
  ProjectStatus[ProjectStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var ProjectStatusSDKType;
exports.ProjectStatusSDKType = ProjectStatusSDKType;
(function (ProjectStatusSDKType) {
  ProjectStatusSDKType[ProjectStatusSDKType["NEW"] = 0] = "NEW";
  ProjectStatusSDKType[ProjectStatusSDKType["APPROVED"] = 1] = "APPROVED";
  ProjectStatusSDKType[ProjectStatusSDKType["REJECTED"] = 2] = "REJECTED";
  ProjectStatusSDKType[ProjectStatusSDKType["SUSPENDED"] = 3] = "SUSPENDED";
  ProjectStatusSDKType[ProjectStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProjectStatusSDKType || (exports.ProjectStatusSDKType = ProjectStatusSDKType = {}));
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
/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    issuerCreator: "",
    creditClassCreationFee: undefined
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.issuerCreator !== "") {
      writer.uint32(10).string(message.issuerCreator);
    }
    if (message.creditClassCreationFee !== undefined) {
      _coin.Coin.encode(message.creditClassCreationFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerCreator = reader.string();
          break;
        case 2:
          message.creditClassCreationFee = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$issuerCreator;
    var message = createBaseParams();
    message.issuerCreator = (_object$issuerCreator = object.issuerCreator) !== null && _object$issuerCreator !== void 0 ? _object$issuerCreator : "";
    message.creditClassCreationFee = object.creditClassCreationFee !== undefined && object.creditClassCreationFee !== null ? _coin.Coin.fromPartial(object.creditClassCreationFee) : undefined;
    return message;
  }
};
exports.Params = Params;
function createBaseIDCounters() {
  return {
    nextIssuerId: _helpers.Long.UZERO,
    nextApplicantId: _helpers.Long.UZERO,
    nextProjectId: _helpers.Long.UZERO
  };
}
var IDCounters = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIDCounters();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseIDCounters();
    message.nextIssuerId = object.nextIssuerId !== undefined && object.nextIssuerId !== null ? _helpers.Long.fromValue(object.nextIssuerId) : _helpers.Long.UZERO;
    message.nextApplicantId = object.nextApplicantId !== undefined && object.nextApplicantId !== null ? _helpers.Long.fromValue(object.nextApplicantId) : _helpers.Long.UZERO;
    message.nextProjectId = object.nextProjectId !== undefined && object.nextProjectId !== null ? _helpers.Long.fromValue(object.nextProjectId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.IDCounters = IDCounters;
function createBaseIssuer() {
  return {
    id: _helpers.Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
var Issuer = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIssuer();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name, _object$description, _object$admin;
    var message = createBaseIssuer();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
exports.Issuer = Issuer;
function createBaseApplicant() {
  return {
    id: _helpers.Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
var Applicant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseApplicant();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$description2, _object$admin2;
    var message = createBaseApplicant();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
exports.Applicant = Applicant;
function createBaseCreditClass() {
  return {
    abbreviation: "",
    issuerId: _helpers.Long.UZERO,
    name: ""
  };
}
var CreditClass = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCreditClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$abbreviation, _object$name3;
    var message = createBaseCreditClass();
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? _helpers.Long.fromValue(object.issuerId) : _helpers.Long.UZERO;
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    return message;
  }
};
exports.CreditClass = CreditClass;
function createBaseProject() {
  return {
    id: _helpers.Long.UZERO,
    applicantId: _helpers.Long.UZERO,
    creditClassAbbreviation: "",
    name: "",
    status: 0
  };
}
var Project = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$creditClassAb, _object$name4, _object$status;
    var message = createBaseProject();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? _helpers.Long.fromValue(object.applicantId) : _helpers.Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb = object.creditClassAbbreviation) !== null && _object$creditClassAb !== void 0 ? _object$creditClassAb : "";
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
exports.Project = Project;
function createBaseCreditCollection() {
  return {
    denom: "",
    projectId: _helpers.Long.UZERO,
    totalAmount: undefined
  };
}
var CreditCollection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCreditCollection();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$denom;
    var message = createBaseCreditCollection();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? CreditAmount.fromPartial(object.totalAmount) : undefined;
    return message;
  }
};
exports.CreditCollection = CreditCollection;
function createBaseCreditBalance() {
  return {
    owner: "",
    denom: "",
    balance: undefined
  };
}
var CreditBalance = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCreditBalance();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$owner, _object$denom2;
    var message = createBaseCreditBalance();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.balance = object.balance !== undefined && object.balance !== null ? CreditAmount.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.CreditBalance = CreditBalance;
function createBaseCreditAmount() {
  return {
    active: _helpers.Long.UZERO,
    retired: _helpers.Long.UZERO
  };
}
var CreditAmount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.active.isZero()) {
      writer.uint32(8).uint64(message.active);
    }
    if (!message.retired.isZero()) {
      writer.uint32(16).uint64(message.retired);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCreditAmount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseCreditAmount();
    message.active = object.active !== undefined && object.active !== null ? _helpers.Long.fromValue(object.active) : _helpers.Long.UZERO;
    message.retired = object.retired !== undefined && object.retired !== null ? _helpers.Long.fromValue(object.retired) : _helpers.Long.UZERO;
    return message;
  }
};
exports.CreditAmount = CreditAmount;
function createBaseProvenData() {
  return {
    uri: "",
    hash: ""
  };
}
var ProvenData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProvenData();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$uri, _object$hash;
    var message = createBaseProvenData();
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
exports.ProvenData = ProvenData;