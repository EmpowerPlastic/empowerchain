import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, Issuer, Applicant, CreditClass, Project, CreditCollection, CreditBalance } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryIssuersRequest() {
  return {
    pagination: undefined
  };
}
export const QueryIssuersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryIssuersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIssuersResponse() {
  return {
    issuers: [],
    pagination: undefined
  };
}
export const QueryIssuersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.issuers) {
      Issuer.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$issuers;
    const message = createBaseQueryIssuersResponse();
    message.issuers = ((_object$issuers = object.issuers) === null || _object$issuers === void 0 ? void 0 : _object$issuers.map(e => Issuer.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIssuerRequest() {
  return {
    issuerId: Long.UZERO
  };
}
export const QueryIssuerRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseQueryIssuerRequest();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryIssuerResponse() {
  return {
    issuer: undefined
  };
}
export const QueryIssuerResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuer !== undefined) {
      Issuer.encode(message.issuer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryIssuerResponse();
    message.issuer = object.issuer !== undefined && object.issuer !== null ? Issuer.fromPartial(object.issuer) : undefined;
    return message;
  }
};
function createBaseQueryApplicantsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryApplicantsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryApplicantsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryApplicantsResponse() {
  return {
    applicants: [],
    pagination: undefined
  };
}
export const QueryApplicantsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.applicants) {
      Applicant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$applicants;
    const message = createBaseQueryApplicantsResponse();
    message.applicants = ((_object$applicants = object.applicants) === null || _object$applicants === void 0 ? void 0 : _object$applicants.map(e => Applicant.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryApplicantRequest() {
  return {
    applicantId: Long.UZERO
  };
}
export const QueryApplicantRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseQueryApplicantRequest();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryApplicantResponse() {
  return {
    applicant: undefined
  };
}
export const QueryApplicantResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.applicant !== undefined) {
      Applicant.encode(message.applicant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryApplicantResponse();
    message.applicant = object.applicant !== undefined && object.applicant !== null ? Applicant.fromPartial(object.applicant) : undefined;
    return message;
  }
};
function createBaseQueryCreditClassesRequest() {
  return {
    pagination: undefined
  };
}
export const QueryCreditClassesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditClassesRequest();
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
  fromPartial(object) {
    const message = createBaseQueryCreditClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCreditClassesResponse() {
  return {
    creditClasses: [],
    pagination: undefined
  };
}
export const QueryCreditClassesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.creditClasses) {
      CreditClass.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditClasses.push(CreditClass.decode(reader, reader.uint32()));
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
  fromPartial(object) {
    var _object$creditClasses;
    const message = createBaseQueryCreditClassesResponse();
    message.creditClasses = ((_object$creditClasses = object.creditClasses) === null || _object$creditClasses === void 0 ? void 0 : _object$creditClasses.map(e => CreditClass.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCreditClassRequest() {
  return {
    creditClassAbbreviation: ""
  };
}
export const QueryCreditClassRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(10).string(message.creditClassAbbreviation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditClassAbbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creditClassAb;
    const message = createBaseQueryCreditClassRequest();
    message.creditClassAbbreviation = (_object$creditClassAb = object.creditClassAbbreviation) !== null && _object$creditClassAb !== void 0 ? _object$creditClassAb : "";
    return message;
  }
};
function createBaseQueryCreditClassResponse() {
  return {
    creditClass: undefined
  };
}
export const QueryCreditClassResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditClass !== undefined) {
      CreditClass.encode(message.creditClass, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditClass = CreditClass.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCreditClassResponse();
    message.creditClass = object.creditClass !== undefined && object.creditClass !== null ? CreditClass.fromPartial(object.creditClass) : undefined;
    return message;
  }
};
function createBaseQueryProjectsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryProjectsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryProjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProjectsResponse() {
  return {
    projects: [],
    pagination: undefined
  };
}
export const QueryProjectsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.projects) {
      Project.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$projects;
    const message = createBaseQueryProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(e => Project.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProjectRequest() {
  return {
    projectId: Long.UZERO
  };
}
export const QueryProjectRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryProjectResponse() {
  return {
    project: undefined
  };
}
export const QueryProjectResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryProjectResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  }
};
function createBaseQueryCreditCollectionRequest() {
  return {
    denom: ""
  };
}
export const QueryCreditCollectionRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$denom;
    const message = createBaseQueryCreditCollectionRequest();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseQueryCreditCollectionResponse() {
  return {
    creditCollection: undefined
  };
}
export const QueryCreditCollectionResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creditCollection !== undefined) {
      CreditCollection.encode(message.creditCollection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryCreditCollectionResponse();
    message.creditCollection = object.creditCollection !== undefined && object.creditCollection !== null ? CreditCollection.fromPartial(object.creditCollection) : undefined;
    return message;
  }
};
function createBaseQueryCreditBalancesRequest() {
  return {
    pagination: undefined
  };
}
export const QueryCreditBalancesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryCreditBalancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCreditBalancesResponse() {
  return {
    creditBalances: [],
    pagination: undefined
  };
}
export const QueryCreditBalancesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.creditBalances) {
      CreditBalance.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$creditBalance;
    const message = createBaseQueryCreditBalancesResponse();
    message.creditBalances = ((_object$creditBalance = object.creditBalances) === null || _object$creditBalance === void 0 ? void 0 : _object$creditBalance.map(e => CreditBalance.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCreditBalanceRequest() {
  return {
    owner: "",
    denom: ""
  };
}
export const QueryCreditBalanceRequest = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
    balance: undefined
  };
}
export const QueryCreditBalanceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.balance !== undefined) {
      CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryCreditBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? CreditBalance.fromPartial(object.balance) : undefined;
    return message;
  }
};