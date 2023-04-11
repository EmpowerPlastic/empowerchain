import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditType, CreditTypeSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
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
export interface QueryApplicantsRequest {
  pagination?: PageRequest;
}
export interface QueryApplicantsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryApplicantsResponse {
  applicants: Applicant[];
  pagination?: PageResponse;
}
export interface QueryApplicantsResponseSDKType {
  applicants: ApplicantSDKType[];
  pagination?: PageResponseSDKType;
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
export interface QueryCreditTypesRequest {
  pagination?: PageRequest;
}
export interface QueryCreditTypesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryCreditTypesResponse {
  creditTypes: CreditType[];
  pagination?: PageResponse;
}
export interface QueryCreditTypesResponseSDKType {
  credit_types: CreditTypeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCreditTypeRequest {
  creditTypeAbbreviation: string;
}
export interface QueryCreditTypeRequestSDKType {
  credit_type_abbreviation: string;
}
export interface QueryCreditTypeResponse {
  creditType?: CreditType;
}
export interface QueryCreditTypeResponseSDKType {
  credit_type?: CreditTypeSDKType;
}
export interface QueryProjectsRequest {
  pagination?: PageRequest;
}
export interface QueryProjectsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryProjectsResponse {
  projects: Project[];
  pagination?: PageResponse;
}
export interface QueryProjectsResponseSDKType {
  projects: ProjectSDKType[];
  pagination?: PageResponseSDKType;
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
export interface QueryCreditBalancesRequest {
  pagination?: PageRequest;
}
export interface QueryCreditBalancesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryCreditBalancesResponse {
  creditBalances: CreditBalance[];
  pagination?: PageResponse;
}
export interface QueryCreditBalancesResponseSDKType {
  credit_balances: CreditBalanceSDKType[];
  pagination?: PageResponseSDKType;
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

function createBaseQueryApplicantsRequest(): QueryApplicantsRequest {
  return {
    pagination: undefined
  };
}

export const QueryApplicantsRequest = {
  encode(message: QueryApplicantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantsRequest {
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

  fromPartial(object: DeepPartial<QueryApplicantsRequest>): QueryApplicantsRequest {
    const message = createBaseQueryApplicantsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryApplicantsResponse(): QueryApplicantsResponse {
  return {
    applicants: [],
    pagination: undefined
  };
}

export const QueryApplicantsResponse = {
  encode(message: QueryApplicantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.applicants) {
      Applicant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantsResponse {
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

  fromPartial(object: DeepPartial<QueryApplicantsResponse>): QueryApplicantsResponse {
    const message = createBaseQueryApplicantsResponse();
    message.applicants = object.applicants?.map(e => Applicant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
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

function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return {
    pagination: undefined
  };
}

export const QueryCreditTypesRequest = {
  encode(message: QueryCreditTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryCreditTypesRequest>): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    creditTypes: [],
    pagination: undefined
  };
}

export const QueryCreditTypesResponse = {
  encode(message: QueryCreditTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryCreditTypesResponse>): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCreditTypeRequest(): QueryCreditTypeRequest {
  return {
    creditTypeAbbreviation: ""
  };
}

export const QueryCreditTypeRequest = {
  encode(message: QueryCreditTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(10).string(message.creditTypeAbbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryCreditTypeRequest>): QueryCreditTypeRequest {
    const message = createBaseQueryCreditTypeRequest();
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    return message;
  }

};

function createBaseQueryCreditTypeResponse(): QueryCreditTypeResponse {
  return {
    creditType: undefined
  };
}

export const QueryCreditTypeResponse = {
  encode(message: QueryCreditTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryCreditTypeResponse>): QueryCreditTypeResponse {
    const message = createBaseQueryCreditTypeResponse();
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    return message;
  }

};

function createBaseQueryProjectsRequest(): QueryProjectsRequest {
  return {
    pagination: undefined
  };
}

export const QueryProjectsRequest = {
  encode(message: QueryProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest {
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

  fromPartial(object: DeepPartial<QueryProjectsRequest>): QueryProjectsRequest {
    const message = createBaseQueryProjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryProjectsResponse(): QueryProjectsResponse {
  return {
    projects: [],
    pagination: undefined
  };
}

export const QueryProjectsResponse = {
  encode(message: QueryProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse {
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

  fromPartial(object: DeepPartial<QueryProjectsResponse>): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
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

function createBaseQueryCreditBalancesRequest(): QueryCreditBalancesRequest {
  return {
    pagination: undefined
  };
}

export const QueryCreditBalancesRequest = {
  encode(message: QueryCreditBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalancesRequest {
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

  fromPartial(object: DeepPartial<QueryCreditBalancesRequest>): QueryCreditBalancesRequest {
    const message = createBaseQueryCreditBalancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCreditBalancesResponse(): QueryCreditBalancesResponse {
  return {
    creditBalances: [],
    pagination: undefined
  };
}

export const QueryCreditBalancesResponse = {
  encode(message: QueryCreditBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creditBalances) {
      CreditBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalancesResponse {
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

  fromPartial(object: DeepPartial<QueryCreditBalancesResponse>): QueryCreditBalancesResponse {
    const message = createBaseQueryCreditBalancesResponse();
    message.creditBalances = object.creditBalances?.map(e => CreditBalance.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
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