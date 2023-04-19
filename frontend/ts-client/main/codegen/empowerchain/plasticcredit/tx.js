"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpdateProjectResponse = exports.MsgUpdateProject = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgUpdateIssuerResponse = exports.MsgUpdateIssuer = exports.MsgUpdateCreditClassResponse = exports.MsgUpdateCreditClass = exports.MsgUpdateApplicantResponse = exports.MsgUpdateApplicant = exports.MsgTransferCreditsResponse = exports.MsgTransferCredits = exports.MsgSuspendProjectResponse = exports.MsgSuspendProject = exports.MsgRetireCreditsResponse = exports.MsgRetireCredits = exports.MsgRejectProjectResponse = exports.MsgRejectProject = exports.MsgIssueCreditsResponse = exports.MsgIssueCredits = exports.MsgCreateProjectResponse = exports.MsgCreateProject = exports.MsgCreateIssuerResponse = exports.MsgCreateIssuer = exports.MsgCreateCreditClassResponse = exports.MsgCreateCreditClass = exports.MsgCreateApplicantResponse = exports.MsgCreateApplicant = exports.MsgApproveProjectResponse = exports.MsgApproveProject = void 0;
var _types = require("./types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: undefined
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      _types.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = _types.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== undefined && object.params !== null ? _types.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.MsgUpdateParams = MsgUpdateParams;
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
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
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;
function createBaseMsgCreateIssuer() {
  return {
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
var MsgCreateIssuer = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateIssuer();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$name, _object$description, _object$admin;
    var message = createBaseMsgCreateIssuer();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
exports.MsgCreateIssuer = MsgCreateIssuer;
function createBaseMsgCreateIssuerResponse() {
  return {
    issuerId: _helpers.Long.UZERO
  };
}
var MsgCreateIssuerResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateIssuerResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgCreateIssuerResponse();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? _helpers.Long.fromValue(object.issuerId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateIssuerResponse = MsgCreateIssuerResponse;
function createBaseMsgUpdateIssuer() {
  return {
    updater: "",
    issuerId: _helpers.Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
var MsgUpdateIssuer = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (!message.issuerId.isZero()) {
      writer.uint32(16).uint64(message.issuerId);
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateIssuer();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.issuerId = reader.uint64();
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
  fromPartial: function fromPartial(object) {
    var _object$updater, _object$name2, _object$description2, _object$admin2;
    var message = createBaseMsgUpdateIssuer();
    message.updater = (_object$updater = object.updater) !== null && _object$updater !== void 0 ? _object$updater : "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? _helpers.Long.fromValue(object.issuerId) : _helpers.Long.UZERO;
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
exports.MsgUpdateIssuer = MsgUpdateIssuer;
function createBaseMsgUpdateIssuerResponse() {
  return {};
}
var MsgUpdateIssuerResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateIssuerResponse();
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
    var message = createBaseMsgUpdateIssuerResponse();
    return message;
  }
};
exports.MsgUpdateIssuerResponse = MsgUpdateIssuerResponse;
function createBaseMsgCreateApplicant() {
  return {
    name: "",
    description: "",
    admin: ""
  };
}
var MsgCreateApplicant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateApplicant();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name3, _object$description3, _object$admin3;
    var message = createBaseMsgCreateApplicant();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    return message;
  }
};
exports.MsgCreateApplicant = MsgCreateApplicant;
function createBaseMsgCreateApplicantResponse() {
  return {
    applicantId: _helpers.Long.UZERO
  };
}
var MsgCreateApplicantResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateApplicantResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgCreateApplicantResponse();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? _helpers.Long.fromValue(object.applicantId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateApplicantResponse = MsgCreateApplicantResponse;
function createBaseMsgUpdateApplicant() {
  return {
    updater: "",
    applicantId: _helpers.Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
var MsgUpdateApplicant = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateApplicant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.applicantId = reader.uint64();
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
  fromPartial: function fromPartial(object) {
    var _object$updater2, _object$name4, _object$description4, _object$admin4;
    var message = createBaseMsgUpdateApplicant();
    message.updater = (_object$updater2 = object.updater) !== null && _object$updater2 !== void 0 ? _object$updater2 : "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? _helpers.Long.fromValue(object.applicantId) : _helpers.Long.UZERO;
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    return message;
  }
};
exports.MsgUpdateApplicant = MsgUpdateApplicant;
function createBaseMsgUpdateApplicantResponse() {
  return {};
}
var MsgUpdateApplicantResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateApplicantResponse();
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
    var message = createBaseMsgUpdateApplicantResponse();
    return message;
  }
};
exports.MsgUpdateApplicantResponse = MsgUpdateApplicantResponse;
function createBaseMsgCreateCreditClass() {
  return {
    creator: "",
    abbreviation: "",
    issuerId: _helpers.Long.UZERO,
    name: ""
  };
}
var MsgCreateCreditClass = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }
    if (!message.issuerId.isZero()) {
      writer.uint32(24).uint64(message.issuerId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateCreditClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.abbreviation = reader.string();
          break;
        case 3:
          message.issuerId = reader.uint64();
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
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$abbreviation, _object$name5;
    var message = createBaseMsgCreateCreditClass();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? _helpers.Long.fromValue(object.issuerId) : _helpers.Long.UZERO;
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    return message;
  }
};
exports.MsgCreateCreditClass = MsgCreateCreditClass;
function createBaseMsgCreateCreditClassResponse() {
  return {};
}
var MsgCreateCreditClassResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateCreditClassResponse();
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
    var message = createBaseMsgCreateCreditClassResponse();
    return message;
  }
};
exports.MsgCreateCreditClassResponse = MsgCreateCreditClassResponse;
function createBaseMsgUpdateCreditClass() {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}
var MsgUpdateCreditClass = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateCreditClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$updater3, _object$abbreviation2, _object$name6;
    var message = createBaseMsgUpdateCreditClass();
    message.updater = (_object$updater3 = object.updater) !== null && _object$updater3 !== void 0 ? _object$updater3 : "";
    message.abbreviation = (_object$abbreviation2 = object.abbreviation) !== null && _object$abbreviation2 !== void 0 ? _object$abbreviation2 : "";
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    return message;
  }
};
exports.MsgUpdateCreditClass = MsgUpdateCreditClass;
function createBaseMsgUpdateCreditClassResponse() {
  return {};
}
var MsgUpdateCreditClassResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateCreditClassResponse();
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
    var message = createBaseMsgUpdateCreditClassResponse();
    return message;
  }
};
exports.MsgUpdateCreditClassResponse = MsgUpdateCreditClassResponse;
function createBaseMsgCreateProject() {
  return {
    creator: "",
    applicantId: _helpers.Long.UZERO,
    creditClassAbbreviation: "",
    name: ""
  };
}
var MsgCreateProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$creditClassAb, _object$name7;
    var message = createBaseMsgCreateProject();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? _helpers.Long.fromValue(object.applicantId) : _helpers.Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb = object.creditClassAbbreviation) !== null && _object$creditClassAb !== void 0 ? _object$creditClassAb : "";
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    return message;
  }
};
exports.MsgCreateProject = MsgCreateProject;
function createBaseMsgCreateProjectResponse() {
  return {
    projectId: _helpers.Long.UZERO
  };
}
var MsgCreateProjectResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateProjectResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgCreateProjectResponse = MsgCreateProjectResponse;
function createBaseMsgUpdateProject() {
  return {
    updater: "",
    projectId: _helpers.Long.UZERO,
    name: ""
  };
}
var MsgUpdateProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
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
    var _object$updater4, _object$name8;
    var message = createBaseMsgUpdateProject();
    message.updater = (_object$updater4 = object.updater) !== null && _object$updater4 !== void 0 ? _object$updater4 : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    return message;
  }
};
exports.MsgUpdateProject = MsgUpdateProject;
function createBaseMsgUpdateProjectResponse() {
  return {};
}
var MsgUpdateProjectResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateProjectResponse();
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
    var message = createBaseMsgUpdateProjectResponse();
    return message;
  }
};
exports.MsgUpdateProjectResponse = MsgUpdateProjectResponse;
function createBaseMsgApproveProject() {
  return {
    approver: "",
    projectId: _helpers.Long.UZERO
  };
}
var MsgApproveProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.approver !== "") {
      writer.uint32(10).string(message.approver);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgApproveProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approver = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$approver;
    var message = createBaseMsgApproveProject();
    message.approver = (_object$approver = object.approver) !== null && _object$approver !== void 0 ? _object$approver : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgApproveProject = MsgApproveProject;
function createBaseMsgApproveProjectResponse() {
  return {};
}
var MsgApproveProjectResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgApproveProjectResponse();
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
    var message = createBaseMsgApproveProjectResponse();
    return message;
  }
};
exports.MsgApproveProjectResponse = MsgApproveProjectResponse;
function createBaseMsgRejectProject() {
  return {
    rejector: "",
    projectId: _helpers.Long.UZERO
  };
}
var MsgRejectProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rejector !== "") {
      writer.uint32(10).string(message.rejector);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRejectProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rejector = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rejector;
    var message = createBaseMsgRejectProject();
    message.rejector = (_object$rejector = object.rejector) !== null && _object$rejector !== void 0 ? _object$rejector : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgRejectProject = MsgRejectProject;
function createBaseMsgRejectProjectResponse() {
  return {};
}
var MsgRejectProjectResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRejectProjectResponse();
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
    var message = createBaseMsgRejectProjectResponse();
    return message;
  }
};
exports.MsgRejectProjectResponse = MsgRejectProjectResponse;
function createBaseMsgSuspendProject() {
  return {
    updater: "",
    projectId: _helpers.Long.UZERO
  };
}
var MsgSuspendProject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuspendProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$updater5;
    var message = createBaseMsgSuspendProject();
    message.updater = (_object$updater5 = object.updater) !== null && _object$updater5 !== void 0 ? _object$updater5 : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgSuspendProject = MsgSuspendProject;
function createBaseMsgSuspendProjectResponse() {
  return {};
}
var MsgSuspendProjectResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSuspendProjectResponse();
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
    var message = createBaseMsgSuspendProjectResponse();
    return message;
  }
};
exports.MsgSuspendProjectResponse = MsgSuspendProjectResponse;
function createBaseMsgIssueCredits() {
  return {
    creator: "",
    projectId: _helpers.Long.UZERO,
    serialNumber: "",
    creditAmount: _helpers.Long.UZERO
  };
}
var MsgIssueCredits = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.serialNumber !== "") {
      writer.uint32(26).string(message.serialNumber);
    }
    if (!message.creditAmount.isZero()) {
      writer.uint32(32).uint64(message.creditAmount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIssueCredits();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.serialNumber = reader.string();
          break;
        case 4:
          message.creditAmount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$serialNumber;
    var message = createBaseMsgIssueCredits();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? _helpers.Long.fromValue(object.projectId) : _helpers.Long.UZERO;
    message.serialNumber = (_object$serialNumber = object.serialNumber) !== null && _object$serialNumber !== void 0 ? _object$serialNumber : "";
    message.creditAmount = object.creditAmount !== undefined && object.creditAmount !== null ? _helpers.Long.fromValue(object.creditAmount) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgIssueCredits = MsgIssueCredits;
function createBaseMsgIssueCreditsResponse() {
  return {
    collection: undefined
  };
}
var MsgIssueCreditsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.collection !== undefined) {
      _types.CreditCollection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIssueCreditsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = _types.CreditCollection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgIssueCreditsResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? _types.CreditCollection.fromPartial(object.collection) : undefined;
    return message;
  }
};
exports.MsgIssueCreditsResponse = MsgIssueCreditsResponse;
function createBaseMsgTransferCredits() {
  return {
    from: "",
    to: "",
    denom: "",
    amount: _helpers.Long.UZERO,
    retire: false
  };
}
var MsgTransferCredits = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.retire === true) {
      writer.uint32(40).bool(message.retire);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTransferCredits();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.amount = reader.uint64();
          break;
        case 5:
          message.retire = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$from, _object$to, _object$denom, _object$retire;
    var message = createBaseMsgTransferCredits();
    message.from = (_object$from = object.from) !== null && _object$from !== void 0 ? _object$from : "";
    message.to = (_object$to = object.to) !== null && _object$to !== void 0 ? _object$to : "";
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _helpers.Long.fromValue(object.amount) : _helpers.Long.UZERO;
    message.retire = (_object$retire = object.retire) !== null && _object$retire !== void 0 ? _object$retire : false;
    return message;
  }
};
exports.MsgTransferCredits = MsgTransferCredits;
function createBaseMsgTransferCreditsResponse() {
  return {};
}
var MsgTransferCreditsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTransferCreditsResponse();
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
    var message = createBaseMsgTransferCreditsResponse();
    return message;
  }
};
exports.MsgTransferCreditsResponse = MsgTransferCreditsResponse;
function createBaseMsgRetireCredits() {
  return {
    owner: "",
    denom: "",
    amount: _helpers.Long.UZERO
  };
}
var MsgRetireCredits = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRetireCredits();
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
          message.amount = reader.uint64();
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
    var message = createBaseMsgRetireCredits();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _helpers.Long.fromValue(object.amount) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgRetireCredits = MsgRetireCredits;
function createBaseMsgRetireCreditsResponse() {
  return {
    balance: undefined
  };
}
var MsgRetireCreditsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.balance !== undefined) {
      _types.CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRetireCreditsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = _types.CreditBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgRetireCreditsResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? _types.CreditBalance.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.MsgRetireCreditsResponse = MsgRetireCreditsResponse;