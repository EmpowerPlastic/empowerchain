import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryIssuersRequest, QueryIssuersResponseSDKType, QueryIssuerRequest, QueryIssuerResponseSDKType, QueryApplicantsRequest, QueryApplicantsResponseSDKType, QueryApplicantRequest, QueryApplicantResponseSDKType, QueryCreditClassesRequest, QueryCreditClassesResponseSDKType, QueryCreditClassRequest, QueryCreditClassResponseSDKType, QueryProjectsRequest, QueryProjectsResponseSDKType, QueryProjectRequest, QueryProjectResponseSDKType, QueryCreditCollectionRequest, QueryCreditCollectionResponseSDKType, QueryCreditBalancesRequest, QueryCreditBalancesResponseSDKType, QueryCreditBalanceRequest, QueryCreditBalanceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    issuers(params?: QueryIssuersRequest): Promise<QueryIssuersResponseSDKType>;
    issuer(params: QueryIssuerRequest): Promise<QueryIssuerResponseSDKType>;
    applicants(params?: QueryApplicantsRequest): Promise<QueryApplicantsResponseSDKType>;
    applicant(params: QueryApplicantRequest): Promise<QueryApplicantResponseSDKType>;
    creditClasses(params?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponseSDKType>;
    creditClass(params: QueryCreditClassRequest): Promise<QueryCreditClassResponseSDKType>;
    projects(params?: QueryProjectsRequest): Promise<QueryProjectsResponseSDKType>;
    project(params: QueryProjectRequest): Promise<QueryProjectResponseSDKType>;
    creditCollection(params: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponseSDKType>;
    creditBalances(params?: QueryCreditBalancesRequest): Promise<QueryCreditBalancesResponseSDKType>;
    creditBalance(params: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponseSDKType>;
}
