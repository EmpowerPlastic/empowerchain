import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditClass, CreditClassSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryIssuersRequest: {
    encode(message: QueryIssuersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersRequest;
    fromPartial(object: DeepPartial<QueryIssuersRequest>): QueryIssuersRequest;
};
export declare const QueryIssuersResponse: {
    encode(message: QueryIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersResponse;
    fromPartial(object: DeepPartial<QueryIssuersResponse>): QueryIssuersResponse;
};
export declare const QueryIssuerRequest: {
    encode(message: QueryIssuerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerRequest;
    fromPartial(object: DeepPartial<QueryIssuerRequest>): QueryIssuerRequest;
};
export declare const QueryIssuerResponse: {
    encode(message: QueryIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerResponse;
    fromPartial(object: DeepPartial<QueryIssuerResponse>): QueryIssuerResponse;
};
export declare const QueryApplicantsRequest: {
    encode(message: QueryApplicantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantsRequest;
    fromPartial(object: DeepPartial<QueryApplicantsRequest>): QueryApplicantsRequest;
};
export declare const QueryApplicantsResponse: {
    encode(message: QueryApplicantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantsResponse;
    fromPartial(object: DeepPartial<QueryApplicantsResponse>): QueryApplicantsResponse;
};
export declare const QueryApplicantRequest: {
    encode(message: QueryApplicantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantRequest;
    fromPartial(object: DeepPartial<QueryApplicantRequest>): QueryApplicantRequest;
};
export declare const QueryApplicantResponse: {
    encode(message: QueryApplicantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicantResponse;
    fromPartial(object: DeepPartial<QueryApplicantResponse>): QueryApplicantResponse;
};
export declare const QueryCreditClassesRequest: {
    encode(message: QueryCreditClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassesRequest;
    fromPartial(object: DeepPartial<QueryCreditClassesRequest>): QueryCreditClassesRequest;
};
export declare const QueryCreditClassesResponse: {
    encode(message: QueryCreditClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassesResponse;
    fromPartial(object: DeepPartial<QueryCreditClassesResponse>): QueryCreditClassesResponse;
};
export declare const QueryCreditClassRequest: {
    encode(message: QueryCreditClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassRequest;
    fromPartial(object: DeepPartial<QueryCreditClassRequest>): QueryCreditClassRequest;
};
export declare const QueryCreditClassResponse: {
    encode(message: QueryCreditClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditClassResponse;
    fromPartial(object: DeepPartial<QueryCreditClassResponse>): QueryCreditClassResponse;
};
export declare const QueryProjectsRequest: {
    encode(message: QueryProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest;
    fromPartial(object: DeepPartial<QueryProjectsRequest>): QueryProjectsRequest;
};
export declare const QueryProjectsResponse: {
    encode(message: QueryProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse;
    fromPartial(object: DeepPartial<QueryProjectsResponse>): QueryProjectsResponse;
};
export declare const QueryProjectRequest: {
    encode(message: QueryProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest;
    fromPartial(object: DeepPartial<QueryProjectRequest>): QueryProjectRequest;
};
export declare const QueryProjectResponse: {
    encode(message: QueryProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse;
    fromPartial(object: DeepPartial<QueryProjectResponse>): QueryProjectResponse;
};
export declare const QueryCreditCollectionRequest: {
    encode(message: QueryCreditCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditCollectionRequest;
    fromPartial(object: DeepPartial<QueryCreditCollectionRequest>): QueryCreditCollectionRequest;
};
export declare const QueryCreditCollectionResponse: {
    encode(message: QueryCreditCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditCollectionResponse;
    fromPartial(object: DeepPartial<QueryCreditCollectionResponse>): QueryCreditCollectionResponse;
};
export declare const QueryCreditBalancesRequest: {
    encode(message: QueryCreditBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalancesRequest;
    fromPartial(object: DeepPartial<QueryCreditBalancesRequest>): QueryCreditBalancesRequest;
};
export declare const QueryCreditBalancesResponse: {
    encode(message: QueryCreditBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalancesResponse;
    fromPartial(object: DeepPartial<QueryCreditBalancesResponse>): QueryCreditBalancesResponse;
};
export declare const QueryCreditBalanceRequest: {
    encode(message: QueryCreditBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalanceRequest;
    fromPartial(object: DeepPartial<QueryCreditBalanceRequest>): QueryCreditBalanceRequest;
};
export declare const QueryCreditBalanceResponse: {
    encode(message: QueryCreditBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditBalanceResponse;
    fromPartial(object: DeepPartial<QueryCreditBalanceResponse>): QueryCreditBalanceResponse;
};
