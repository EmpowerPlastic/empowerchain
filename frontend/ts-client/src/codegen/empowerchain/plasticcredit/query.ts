import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditClass, CreditClassSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryIssuersRequest {
  pagination?: PageRequest;
}
export interface QueryIssuersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryIssuersResponse {
  issuers: Issuer[];
  pagination?: PageResponse;
}
export interface QueryIssuersResponseSDKType {
  issuers: IssuerSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIssuerRequest {
  issuerId: Long;
}
export interface QueryIssuerRequestSDKType {
  issuer_id: Long;
}
export interface QueryIssuerResponse {
  issuer?: Issuer;
}
export interface QueryIssuerResponseSDKType {
  issuer?: IssuerSDKType;
}
export interface QueryApplicantRequest {
  applicantId: Long;
}
export interface QueryApplicantRequestSDKType {
  applicant_id: Long;
}
export interface QueryApplicantResponse {
  applicant?: Applicant;
}
export interface QueryApplicantResponseSDKType {
  applicant?: ApplicantSDKType;
}
export interface QueryCreditClassesRequest {
  pagination?: PageRequest;
}
export interface QueryCreditClassesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryCreditClassesResponse {
  creditClasses: CreditClass[];
  pagination?: PageResponse;
}
export interface QueryCreditClassesResponseSDKType {
  credit_classes: CreditClassSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCreditClassRequest {
  creditClassAbbreviation: string;
}
export interface QueryCreditClassRequestSDKType {
  credit_class_abbreviation: string;
}
export interface QueryCreditClassResponse {
  creditClass?: CreditClass;
}
export interface QueryCreditClassResponseSDKType {
  credit_class?: CreditClassSDKType;
}
export interface QueryProjectRequest {
  projectId: Long;
}
export interface QueryProjectRequestSDKType {
  project_id: Long;
}
export interface QueryProjectResponse {
  project?: Project;
}
export interface QueryProjectResponseSDKType {
  project?: ProjectSDKType;
}
export interface QueryCreditCollectionRequest {
  denom: string;
}
export interface QueryCreditCollectionRequestSDKType {
  denom: string;
}
export interface QueryCreditCollectionResponse {
  creditCollection?: CreditCollection;
}
export interface QueryCreditCollectionResponseSDKType {
  credit_collection?: CreditCollectionSDKType;
}
export interface QueryCreditBalanceRequest {
  owner: string;
  denom: string;
}
export interface QueryCreditBalanceRequestSDKType {
  owner: string;
  denom: string;
}
export interface QueryCreditBalanceResponse {
  balance?: CreditBalance;
}
export interface QueryCreditBalanceResponseSDKType {
  balance?: CreditBalanceSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryIssuersRequest(): QueryIssuersRequest {
  return {
    pagination: undefined
  };
}

export const QueryIssuersRequest = {
  encode(message: QueryIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersRequest {
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

  fromPartial(object: DeepPartial<QueryIssuersRequest>): QueryIssuersRequest {
    const message = createBaseQueryIssuersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIssuersResponse(): QueryIssuersResponse {
  return {
    issuers: [],
    pagination: undefined
  };
}

export const QueryIssuersResponse = {
  encode(message: QueryIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersResponse {
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

  fromPartial(object: DeepPartial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = createBaseQueryIssuersResponse();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIssuerRequest(): QueryIssuerRequest {
  return {
    issuerId: Long.UZERO
  };
}

export const QueryIssuerRequest = {
  encode(message: QueryIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIssuerRequest>): QueryIssuerRequest {
    const message = createBaseQueryIssuerRequest();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIssuerResponse(): QueryIssuerResponse {
  return {
    issuer: undefined
  };
}

export const QueryIssuerResponse = {
  encode(message: QueryIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== undefined) {
      Issuer.encode(message.issuer, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerResponse {
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

  fromPartial(object: DeepPartial<QueryIssuerResponse>): QueryIssuerResponse {
    const message = createBaseQueryIssuerResponse();
    message.issuer = object.issuer !== undefined && object.issuer !== null ? Issuer.fromPartial(object.issuer) : undefined;
    return message;
  }

};

function createBaseQueryApplicantRequest(): QueryApplicantRequest {
  return {
    applicantId: Long.UZERO
  };
}

export const QueryApplicantRequest = {
  encode(message: QueryApplicantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicantRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.applicantId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryApplicantRequest>): QueryApplicantRequest {
    const message = createBaseQueryApplicantRequest();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryApplicantResponse(): QueryApplicantResponse {
  return {
    applicant: undefined
  };
}

export const QueryApplicantResponse = {
  encode(message: QueryApplicantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicant !== undefined) {
      Applicant.encode(message.applicant, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantResponse {
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

  fromPartial(object: DeepPartial<QueryApplicantResponse>): QueryApplicantResponse {
    const message = createBaseQueryApplicantResponse();
    message.applicant = object.applicant !== undefined && object.applicant !== null ? Applicant.fromPartial(object.applicant) : undefined;
    return message;
  }

};

function createBaseQueryCreditClassesRequest(): QueryCreditClassesRequest {
  return {
    pagination: undefined
  };
}

export const QueryCreditClassesRequest = {
  encode(message: QueryCreditClassesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassesRequest {
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

  fromPartial(object: DeepPartial<QueryCreditClassesRequest>): QueryCreditClassesRequest {
    const message = createBaseQueryCreditClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCreditClassesResponse(): QueryCreditClassesResponse {
  return {
    creditClasses: [],
    pagination: undefined
  };
}

export const QueryCreditClassesResponse = {
  encode(message: QueryCreditClassesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creditClasses) {
      CreditClass.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassesResponse {
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

  fromPartial(object: DeepPartial<QueryCreditClassesResponse>): QueryCreditClassesResponse {
    const message = createBaseQueryCreditClassesResponse();
    message.creditClasses = object.creditClasses?.map(e => CreditClass.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCreditClassRequest(): QueryCreditClassRequest {
  return {
    creditClassAbbreviation: ""
  };
}

export const QueryCreditClassRequest = {
  encode(message: QueryCreditClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(10).string(message.creditClassAbbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassRequest {
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

  fromPartial(object: DeepPartial<QueryCreditClassRequest>): QueryCreditClassRequest {
    const message = createBaseQueryCreditClassRequest();
    message.creditClassAbbreviation = object.creditClassAbbreviation ?? "";
    return message;
  }

};

function createBaseQueryCreditClassResponse(): QueryCreditClassResponse {
  return {
    creditClass: undefined
  };
}

export const QueryCreditClassResponse = {
  encode(message: QueryCreditClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditClass !== undefined) {
      CreditClass.encode(message.creditClass, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassResponse {
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

  fromPartial(object: DeepPartial<QueryCreditClassResponse>): QueryCreditClassResponse {
    const message = createBaseQueryCreditClassResponse();
    message.creditClass = object.creditClass !== undefined && object.creditClass !== null ? CreditClass.fromPartial(object.creditClass) : undefined;
    return message;
  }

};

function createBaseQueryProjectRequest(): QueryProjectRequest {
  return {
    projectId: Long.UZERO
  };
}

export const QueryProjectRequest = {
  encode(message: QueryProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProjectRequest>): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryProjectResponse(): QueryProjectResponse {
  return {
    project: undefined
  };
}

export const QueryProjectResponse = {
  encode(message: QueryProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse {
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

  fromPartial(object: DeepPartial<QueryProjectResponse>): QueryProjectResponse {
    const message = createBaseQueryProjectResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  }

};

function createBaseQueryCreditCollectionRequest(): QueryCreditCollectionRequest {
  return {
    denom: ""
  };
}

export const QueryCreditCollectionRequest = {
  encode(message: QueryCreditCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditCollectionRequest {
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

  fromPartial(object: DeepPartial<QueryCreditCollectionRequest>): QueryCreditCollectionRequest {
    const message = createBaseQueryCreditCollectionRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryCreditCollectionResponse(): QueryCreditCollectionResponse {
  return {
    creditCollection: undefined
  };
}

export const QueryCreditCollectionResponse = {
  encode(message: QueryCreditCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditCollection !== undefined) {
      CreditCollection.encode(message.creditCollection, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditCollectionResponse {
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

  fromPartial(object: DeepPartial<QueryCreditCollectionResponse>): QueryCreditCollectionResponse {
    const message = createBaseQueryCreditCollectionResponse();
    message.creditCollection = object.creditCollection !== undefined && object.creditCollection !== null ? CreditCollection.fromPartial(object.creditCollection) : undefined;
    return message;
  }

};

function createBaseQueryCreditBalanceRequest(): QueryCreditBalanceRequest {
  return {
    owner: "",
    denom: ""
  };
}

export const QueryCreditBalanceRequest = {
  encode(message: QueryCreditBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalanceRequest {
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

  fromPartial(object: DeepPartial<QueryCreditBalanceRequest>): QueryCreditBalanceRequest {
    const message = createBaseQueryCreditBalanceRequest();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryCreditBalanceResponse(): QueryCreditBalanceResponse {
  return {
    balance: undefined
  };
}

export const QueryCreditBalanceResponse = {
  encode(message: QueryCreditBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalanceResponse {
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

  fromPartial(object: DeepPartial<QueryCreditBalanceResponse>): QueryCreditBalanceResponse {
    const message = createBaseQueryCreditBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? CreditBalance.fromPartial(object.balance) : undefined;
    return message;
  }

};