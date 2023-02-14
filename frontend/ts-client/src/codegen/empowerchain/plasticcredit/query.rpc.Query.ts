import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryIssuersRequest, QueryIssuersResponse, QueryIssuerRequest, QueryIssuerResponse, QueryApplicantRequest, QueryApplicantResponse, QueryCreditClassesRequest, QueryCreditClassesResponse, QueryCreditClassRequest, QueryCreditClassResponse, QueryProjectRequest, QueryProjectResponse, QueryCreditCollectionRequest, QueryCreditCollectionResponse, QueryCreditBalanceRequest, QueryCreditBalanceResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
  issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse>;
  applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse>;
  creditClasses(request?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponse>;
  creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse>;
  project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
  creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse>;
  creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuer = this.issuer.bind(this);
    this.applicant = this.applicant.bind(this);
    this.creditClasses = this.creditClasses.bind(this);
    this.creditClass = this.creditClass.bind(this);
    this.project = this.project.bind(this);
    this.creditCollection = this.creditCollection.bind(this);
    this.creditBalance = this.creditBalance.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  issuers(request: QueryIssuersRequest = {
    pagination: undefined
  }): Promise<QueryIssuersResponse> {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuers", data);
    return promise.then(data => QueryIssuersResponse.decode(new _m0.Reader(data)));
  }

  issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse> {
    const data = QueryIssuerRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuer", data);
    return promise.then(data => QueryIssuerResponse.decode(new _m0.Reader(data)));
  }

  applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse> {
    const data = QueryApplicantRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicant", data);
    return promise.then(data => QueryApplicantResponse.decode(new _m0.Reader(data)));
  }

  creditClasses(request: QueryCreditClassesRequest = {
    pagination: undefined
  }): Promise<QueryCreditClassesResponse> {
    const data = QueryCreditClassesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClasses", data);
    return promise.then(data => QueryCreditClassesResponse.decode(new _m0.Reader(data)));
  }

  creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse> {
    const data = QueryCreditClassRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClass", data);
    return promise.then(data => QueryCreditClassResponse.decode(new _m0.Reader(data)));
  }

  project(request: QueryProjectRequest): Promise<QueryProjectResponse> {
    const data = QueryProjectRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Project", data);
    return promise.then(data => QueryProjectResponse.decode(new _m0.Reader(data)));
  }

  creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse> {
    const data = QueryCreditCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditCollection", data);
    return promise.then(data => QueryCreditCollectionResponse.decode(new _m0.Reader(data)));
  }

  creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse> {
    const data = QueryCreditBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalance", data);
    return promise.then(data => QueryCreditBalanceResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse> {
      return queryService.issuers(request);
    },

    issuer(request: QueryIssuerRequest): Promise<QueryIssuerResponse> {
      return queryService.issuer(request);
    },

    applicant(request: QueryApplicantRequest): Promise<QueryApplicantResponse> {
      return queryService.applicant(request);
    },

    creditClasses(request?: QueryCreditClassesRequest): Promise<QueryCreditClassesResponse> {
      return queryService.creditClasses(request);
    },

    creditClass(request: QueryCreditClassRequest): Promise<QueryCreditClassResponse> {
      return queryService.creditClass(request);
    },

    project(request: QueryProjectRequest): Promise<QueryProjectResponse> {
      return queryService.project(request);
    },

    creditCollection(request: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponse> {
      return queryService.creditCollection(request);
    },

    creditBalance(request: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponse> {
      return queryService.creditBalance(request);
    }

  };
};