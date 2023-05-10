import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditType, CreditTypeSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
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
  issuerId: bigint;
}
export interface QueryIssuerRequestSDKType {
  issuer_id: bigint;
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
  applicantId: bigint;
}
export interface QueryApplicantRequestSDKType {
  applicant_id: bigint;
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
  projectId: bigint;
}
export interface QueryProjectRequestSDKType {
  project_id: bigint;
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
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
  fromJSON(object: any): QueryIssuersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIssuersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIssuersRequest>): QueryIssuersRequest {
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
  fromJSON(object: any): QueryIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIssuersResponse): unknown {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e ? Issuer.toJSON(e) : undefined);
    } else {
      obj.issuers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = createBaseQueryIssuersResponse();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIssuerRequest(): QueryIssuerRequest {
  return {
    issuerId: BigInt("0")
  };
}
export const QueryIssuerRequest = {
  encode(message: QueryIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.issuerId.toString()));
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
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIssuerRequest {
    return {
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0")
    };
  },
  toJSON(message: QueryIssuerRequest): unknown {
    const obj: any = {};
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryIssuerRequest>): QueryIssuerRequest {
    const message = createBaseQueryIssuerRequest();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
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
  fromJSON(object: any): QueryIssuerResponse {
    return {
      issuer: isSet(object.issuer) ? Issuer.fromJSON(object.issuer) : undefined
    };
  },
  toJSON(message: QueryIssuerResponse): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer ? Issuer.toJSON(message.issuer) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIssuerResponse>): QueryIssuerResponse {
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
  fromJSON(object: any): QueryApplicantsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryApplicantsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryApplicantsRequest>): QueryApplicantsRequest {
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
  fromJSON(object: any): QueryApplicantsResponse {
    return {
      applicants: Array.isArray(object?.applicants) ? object.applicants.map((e: any) => Applicant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryApplicantsResponse): unknown {
    const obj: any = {};
    if (message.applicants) {
      obj.applicants = message.applicants.map(e => e ? Applicant.toJSON(e) : undefined);
    } else {
      obj.applicants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryApplicantsResponse>): QueryApplicantsResponse {
    const message = createBaseQueryApplicantsResponse();
    message.applicants = object.applicants?.map(e => Applicant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryApplicantRequest(): QueryApplicantRequest {
  return {
    applicantId: BigInt("0")
  };
}
export const QueryApplicantRequest = {
  encode(message: QueryApplicantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.applicantId.toString()));
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
          message.applicantId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryApplicantRequest {
    return {
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0")
    };
  },
  toJSON(message: QueryApplicantRequest): unknown {
    const obj: any = {};
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryApplicantRequest>): QueryApplicantRequest {
    const message = createBaseQueryApplicantRequest();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
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
  fromJSON(object: any): QueryApplicantResponse {
    return {
      applicant: isSet(object.applicant) ? Applicant.fromJSON(object.applicant) : undefined
    };
  },
  toJSON(message: QueryApplicantResponse): unknown {
    const obj: any = {};
    message.applicant !== undefined && (obj.applicant = message.applicant ? Applicant.toJSON(message.applicant) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryApplicantResponse>): QueryApplicantResponse {
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
  fromJSON(object: any): QueryCreditTypesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCreditTypesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest {
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
  fromJSON(object: any): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCreditTypesResponse): unknown {
    const obj: any = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse {
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
  fromJSON(object: any): QueryCreditTypeRequest {
    return {
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : ""
    };
  },
  toJSON(message: QueryCreditTypeRequest): unknown {
    const obj: any = {};
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditTypeRequest>): QueryCreditTypeRequest {
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
  fromJSON(object: any): QueryCreditTypeResponse {
    return {
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined
    };
  },
  toJSON(message: QueryCreditTypeResponse): unknown {
    const obj: any = {};
    message.creditType !== undefined && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditTypeResponse>): QueryCreditTypeResponse {
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
  fromJSON(object: any): QueryProjectsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProjectsRequest>): QueryProjectsRequest {
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
  fromJSON(object: any): QueryProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => Project.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProjectsResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? Project.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProjectsResponse>): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProjectRequest(): QueryProjectRequest {
  return {
    projectId: BigInt("0")
  };
}
export const QueryProjectRequest = {
  encode(message: QueryProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.projectId.toString()));
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
          message.projectId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProjectRequest {
    return {
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0")
    };
  },
  toJSON(message: QueryProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryProjectRequest>): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
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
  fromJSON(object: any): QueryProjectResponse {
    return {
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined
    };
  },
  toJSON(message: QueryProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProjectResponse>): QueryProjectResponse {
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
  fromJSON(object: any): QueryCreditCollectionRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryCreditCollectionRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditCollectionRequest>): QueryCreditCollectionRequest {
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
  fromJSON(object: any): QueryCreditCollectionResponse {
    return {
      creditCollection: isSet(object.creditCollection) ? CreditCollection.fromJSON(object.creditCollection) : undefined
    };
  },
  toJSON(message: QueryCreditCollectionResponse): unknown {
    const obj: any = {};
    message.creditCollection !== undefined && (obj.creditCollection = message.creditCollection ? CreditCollection.toJSON(message.creditCollection) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditCollectionResponse>): QueryCreditCollectionResponse {
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
  fromJSON(object: any): QueryCreditBalancesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCreditBalancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditBalancesRequest>): QueryCreditBalancesRequest {
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
  fromJSON(object: any): QueryCreditBalancesResponse {
    return {
      creditBalances: Array.isArray(object?.creditBalances) ? object.creditBalances.map((e: any) => CreditBalance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCreditBalancesResponse): unknown {
    const obj: any = {};
    if (message.creditBalances) {
      obj.creditBalances = message.creditBalances.map(e => e ? CreditBalance.toJSON(e) : undefined);
    } else {
      obj.creditBalances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditBalancesResponse>): QueryCreditBalancesResponse {
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
  fromJSON(object: any): QueryCreditBalanceRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryCreditBalanceRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditBalanceRequest>): QueryCreditBalanceRequest {
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
  fromJSON(object: any): QueryCreditBalanceResponse {
    return {
      balance: isSet(object.balance) ? CreditBalance.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: QueryCreditBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? CreditBalance.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCreditBalanceResponse>): QueryCreditBalanceResponse {
    const message = createBaseQueryCreditBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? CreditBalance.fromPartial(object.balance) : undefined;
    return message;
  }
};