import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryIssuersRequest, QueryIssuersResponse, QueryIssuerRequest, QueryIssuerResponse, QueryApplicantsRequest, QueryApplicantsResponse, QueryApplicantRequest, QueryApplicantResponse, QueryCreditClassesRequest, QueryCreditClassesResponse, QueryCreditClassRequest, QueryCreditClassResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectRequest, QueryProjectResponse, QueryCreditCollectionRequest, QueryCreditCollectionResponse, QueryCreditBalancesRequest, QueryCreditBalancesResponse, QueryCreditBalanceRequest, QueryCreditBalanceResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
    issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse>;
    applicants(request?: QueryApplicantsRequest): Promise<QueryApplicantsResponse>;
    applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse>;
    creditClasses(request?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponse>;
    creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse>;
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse>;
    creditBalances(request?: QueryCreditBalancesRequest): Promise<QueryCreditBalancesResponse>;
    creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
    issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse>;
    applicants(request?: QueryApplicantsRequest): Promise<QueryApplicantsResponse>;
    applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse>;
    creditClasses(request?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponse>;
    creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse>;
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse>;
    creditBalances(request?: QueryCreditBalancesRequest): Promise<QueryCreditBalancesResponse>;
    creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
    issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse>;
    applicants(request?: QueryApplicantsRequest): Promise<QueryApplicantsResponse>;
    applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse>;
    creditClasses(request?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponse>;
    creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse>;
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse>;
    creditBalances(request?: QueryCreditBalancesRequest): Promise<QueryCreditBalancesResponse>;
    creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse>;
};
