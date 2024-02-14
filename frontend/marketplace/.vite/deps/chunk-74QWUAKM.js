import {
  Applicant,
  CreditBalance,
  CreditCollection,
  CreditType,
  Issuer,
  Params,
  Project
} from "./chunk-CMRKTJPJ.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/query.js
var query_exports = {};
__export(query_exports, {
  QueryApplicantRequest: () => QueryApplicantRequest,
  QueryApplicantResponse: () => QueryApplicantResponse,
  QueryApplicantsRequest: () => QueryApplicantsRequest,
  QueryApplicantsResponse: () => QueryApplicantsResponse,
  QueryCreditBalanceRequest: () => QueryCreditBalanceRequest,
  QueryCreditBalanceResponse: () => QueryCreditBalanceResponse,
  QueryCreditBalancesRequest: () => QueryCreditBalancesRequest,
  QueryCreditBalancesResponse: () => QueryCreditBalancesResponse,
  QueryCreditCollectionRequest: () => QueryCreditCollectionRequest,
  QueryCreditCollectionResponse: () => QueryCreditCollectionResponse,
  QueryCreditTypeRequest: () => QueryCreditTypeRequest,
  QueryCreditTypeResponse: () => QueryCreditTypeResponse,
  QueryCreditTypesRequest: () => QueryCreditTypesRequest,
  QueryCreditTypesResponse: () => QueryCreditTypesResponse,
  QueryIssuerRequest: () => QueryIssuerRequest,
  QueryIssuerResponse: () => QueryIssuerResponse,
  QueryIssuersRequest: () => QueryIssuersRequest,
  QueryIssuersResponse: () => QueryIssuersResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryProjectRequest: () => QueryProjectRequest,
  QueryProjectResponse: () => QueryProjectResponse,
  QueryProjectsRequest: () => QueryProjectsRequest,
  QueryProjectsResponse: () => QueryProjectsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: void 0
  };
}
var QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseQueryIssuersRequest() {
  return {
    pagination: void 0
  };
}
var QueryIssuersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryIssuersRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryIssuersResponse() {
  return {
    issuers: [],
    pagination: void 0
  };
}
var QueryIssuersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.issuers) {
      Issuer.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuers.push(Issuer.decode(reader, reader.uint32()));
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
      issuers: Array.isArray(object === null || object === void 0 ? void 0 : object.issuers) ? object.issuers.map((e) => Issuer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) => e ? Issuer.toJSON(e) : void 0);
    } else {
      obj.issuers = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$issuers;
    const message = createBaseQueryIssuersResponse();
    message.issuers = ((_object$issuers = object.issuers) === null || _object$issuers === void 0 ? void 0 : _object$issuers.map((e) => Issuer.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryIssuerRequest() {
  return {
    issuerId: BigInt("0")
  };
}
var QueryIssuerRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.issuerId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerRequest();
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
    const message = createBaseQueryIssuerRequest();
    message.issuerId = object.issuerId !== void 0 && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryIssuerResponse() {
  return {
    issuer: void 0
  };
}
var QueryIssuerResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuer !== void 0) {
      Issuer.encode(message.issuer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = Issuer.decode(reader, reader.uint32());
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
      issuer: isSet(object.issuer) ? Issuer.fromJSON(object.issuer) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.issuer !== void 0 && (obj.issuer = message.issuer ? Issuer.toJSON(message.issuer) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryIssuerResponse();
    message.issuer = object.issuer !== void 0 && object.issuer !== null ? Issuer.fromPartial(object.issuer) : void 0;
    return message;
  }
};
function createBaseQueryApplicantsRequest() {
  return {
    pagination: void 0
  };
}
var QueryApplicantsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryApplicantsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryApplicantsResponse() {
  return {
    applicants: [],
    pagination: void 0
  };
}
var QueryApplicantsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.applicants) {
      Applicant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicants.push(Applicant.decode(reader, reader.uint32()));
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
      applicants: Array.isArray(object === null || object === void 0 ? void 0 : object.applicants) ? object.applicants.map((e) => Applicant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.applicants) {
      obj.applicants = message.applicants.map((e) => e ? Applicant.toJSON(e) : void 0);
    } else {
      obj.applicants = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$applicants;
    const message = createBaseQueryApplicantsResponse();
    message.applicants = ((_object$applicants = object.applicants) === null || _object$applicants === void 0 ? void 0 : _object$applicants.map((e) => Applicant.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryApplicantRequest() {
  return {
    applicantId: BigInt("0")
  };
}
var QueryApplicantRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.applicantId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantRequest();
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
    const message = createBaseQueryApplicantRequest();
    message.applicantId = object.applicantId !== void 0 && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryApplicantResponse() {
  return {
    applicant: void 0
  };
}
var QueryApplicantResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.applicant !== void 0) {
      Applicant.encode(message.applicant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicant = Applicant.decode(reader, reader.uint32());
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
      applicant: isSet(object.applicant) ? Applicant.fromJSON(object.applicant) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.applicant !== void 0 && (obj.applicant = message.applicant ? Applicant.toJSON(message.applicant) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryApplicantResponse();
    message.applicant = object.applicant !== void 0 && object.applicant !== null ? Applicant.fromPartial(object.applicant) : void 0;
    return message;
  }
};
function createBaseQueryCreditTypesRequest() {
  return {
    pagination: void 0
  };
}
var QueryCreditTypesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryCreditTypesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCreditTypesResponse() {
  return {
    creditTypes: [],
    pagination: void 0
  };
}
var QueryCreditTypesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.creditTypes) {
      CreditType.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
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
      creditTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.creditTypes) ? object.creditTypes.map((e) => CreditType.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map((e) => e ? CreditType.toJSON(e) : void 0);
    } else {
      obj.creditTypes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$creditTypes;
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = ((_object$creditTypes = object.creditTypes) === null || _object$creditTypes === void 0 ? void 0 : _object$creditTypes.map((e) => CreditType.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCreditTypeRequest() {
  return {
    creditTypeAbbreviation: ""
  };
}
var QueryCreditTypeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(10).string(message.creditTypeAbbreviation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypeAbbreviation = reader.string();
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
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.creditTypeAbbreviation !== void 0 && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    return obj;
  },
  fromPartial(object) {
    var _object$creditTypeAbb;
    const message = createBaseQueryCreditTypeRequest();
    message.creditTypeAbbreviation = (_object$creditTypeAbb = object.creditTypeAbbreviation) !== null && _object$creditTypeAbb !== void 0 ? _object$creditTypeAbb : "";
    return message;
  }
};
function createBaseQueryCreditTypeResponse() {
  return {
    creditType: void 0
  };
}
var QueryCreditTypeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditType !== void 0) {
      CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditType = CreditType.decode(reader, reader.uint32());
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
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.creditType !== void 0 && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryCreditTypeResponse();
    message.creditType = object.creditType !== void 0 && object.creditType !== null ? CreditType.fromPartial(object.creditType) : void 0;
    return message;
  }
};
function createBaseQueryProjectsRequest() {
  return {
    pagination: void 0
  };
}
var QueryProjectsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryProjectsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryProjectsResponse() {
  return {
    projects: [],
    pagination: void 0
  };
}
var QueryProjectsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.projects) {
      Project.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(Project.decode(reader, reader.uint32()));
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
      projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map((e) => Project.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.projects) {
      obj.projects = message.projects.map((e) => e ? Project.toJSON(e) : void 0);
    } else {
      obj.projects = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$projects;
    const message = createBaseQueryProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map((e) => Project.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryProjectRequest() {
  return {
    projectId: BigInt("0")
  };
}
var QueryProjectRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.projectId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectRequest();
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
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId !== void 0 && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryProjectResponse() {
  return {
    project: void 0
  };
}
var QueryProjectResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.project !== void 0) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
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
      project: isSet(object.project) ? Project.fromJSON(object.project) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.project !== void 0 && (obj.project = message.project ? Project.toJSON(message.project) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProjectResponse();
    message.project = object.project !== void 0 && object.project !== null ? Project.fromPartial(object.project) : void 0;
    return message;
  }
};
function createBaseQueryCreditCollectionRequest() {
  return {
    denom: ""
  };
}
var QueryCreditCollectionRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$denom;
    const message = createBaseQueryCreditCollectionRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseQueryCreditCollectionResponse() {
  return {
    creditCollection: void 0
  };
}
var QueryCreditCollectionResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditCollection !== void 0) {
      CreditCollection.encode(message.creditCollection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditCollection = CreditCollection.decode(reader, reader.uint32());
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
      creditCollection: isSet(object.creditCollection) ? CreditCollection.fromJSON(object.creditCollection) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.creditCollection !== void 0 && (obj.creditCollection = message.creditCollection ? CreditCollection.toJSON(message.creditCollection) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryCreditCollectionResponse();
    message.creditCollection = object.creditCollection !== void 0 && object.creditCollection !== null ? CreditCollection.fromPartial(object.creditCollection) : void 0;
    return message;
  }
};
function createBaseQueryCreditBalancesRequest() {
  return {
    pagination: void 0
  };
}
var QueryCreditBalancesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryCreditBalancesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCreditBalancesResponse() {
  return {
    creditBalances: [],
    pagination: void 0
  };
}
var QueryCreditBalancesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.creditBalances) {
      CreditBalance.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditBalances.push(CreditBalance.decode(reader, reader.uint32()));
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
      creditBalances: Array.isArray(object === null || object === void 0 ? void 0 : object.creditBalances) ? object.creditBalances.map((e) => CreditBalance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.creditBalances) {
      obj.creditBalances = message.creditBalances.map((e) => e ? CreditBalance.toJSON(e) : void 0);
    } else {
      obj.creditBalances = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$creditBalance;
    const message = createBaseQueryCreditBalancesResponse();
    message.creditBalances = ((_object$creditBalance = object.creditBalances) === null || _object$creditBalance === void 0 ? void 0 : _object$creditBalance.map((e) => CreditBalance.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCreditBalanceRequest() {
  return {
    owner: "",
    denom: ""
  };
}
var QueryCreditBalanceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$owner, _object$denom2;
    const message = createBaseQueryCreditBalanceRequest();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    return message;
  }
};
function createBaseQueryCreditBalanceResponse() {
  return {
    balance: void 0
  };
}
var QueryCreditBalanceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.balance !== void 0) {
      CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditBalanceResponse();
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
    const message = createBaseQueryCreditBalanceResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? CreditBalance.fromPartial(object.balance) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/plasticcredit/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuer = this.issuer.bind(this);
    this.applicants = this.applicants.bind(this);
    this.applicant = this.applicant.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.creditType = this.creditType.bind(this);
    this.projects = this.projects.bind(this);
    this.project = this.project.bind(this);
    this.creditCollection = this.creditCollection.bind(this);
    this.creditBalances = this.creditBalances.bind(this);
    this.creditBalance = this.creditBalance.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  issuers(request = {
    pagination: void 0
  }) {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuers", data);
    return promise.then((data2) => QueryIssuersResponse.decode(new _m02.Reader(data2)));
  }
  issuer(request) {
    const data = QueryIssuerRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuer", data);
    return promise.then((data2) => QueryIssuerResponse.decode(new _m02.Reader(data2)));
  }
  applicants(request = {
    pagination: void 0
  }) {
    const data = QueryApplicantsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicants", data);
    return promise.then((data2) => QueryApplicantsResponse.decode(new _m02.Reader(data2)));
  }
  applicant(request) {
    const data = QueryApplicantRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicant", data);
    return promise.then((data2) => QueryApplicantResponse.decode(new _m02.Reader(data2)));
  }
  creditTypes(request = {
    pagination: void 0
  }) {
    const data = QueryCreditTypesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditTypes", data);
    return promise.then((data2) => QueryCreditTypesResponse.decode(new _m02.Reader(data2)));
  }
  creditType(request) {
    const data = QueryCreditTypeRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditType", data);
    return promise.then((data2) => QueryCreditTypeResponse.decode(new _m02.Reader(data2)));
  }
  projects(request = {
    pagination: void 0
  }) {
    const data = QueryProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Projects", data);
    return promise.then((data2) => QueryProjectsResponse.decode(new _m02.Reader(data2)));
  }
  project(request) {
    const data = QueryProjectRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Project", data);
    return promise.then((data2) => QueryProjectResponse.decode(new _m02.Reader(data2)));
  }
  creditCollection(request) {
    const data = QueryCreditCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditCollection", data);
    return promise.then((data2) => QueryCreditCollectionResponse.decode(new _m02.Reader(data2)));
  }
  creditBalances(request = {
    pagination: void 0
  }) {
    const data = QueryCreditBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalances", data);
    return promise.then((data2) => QueryCreditBalancesResponse.decode(new _m02.Reader(data2)));
  }
  creditBalance(request) {
    const data = QueryCreditBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalance", data);
    return promise.then((data2) => QueryCreditBalanceResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    issuers(request) {
      return queryService.issuers(request);
    },
    issuer(request) {
      return queryService.issuer(request);
    },
    applicants(request) {
      return queryService.applicants(request);
    },
    applicant(request) {
      return queryService.applicant(request);
    },
    creditTypes(request) {
      return queryService.creditTypes(request);
    },
    creditType(request) {
      return queryService.creditType(request);
    },
    projects(request) {
      return queryService.projects(request);
    },
    project(request) {
      return queryService.project(request);
    },
    creditCollection(request) {
      return queryService.creditCollection(request);
    },
    creditBalances(request) {
      return queryService.creditBalances(request);
    },
    creditBalance(request) {
      return queryService.creditBalance(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-74QWUAKM.js.map
