import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryIssuersRequest, QueryIssuersResponse, QueryIssuerRequest, QueryIssuerResponse, QueryApplicantsRequest, QueryApplicantsResponse, QueryApplicantRequest, QueryApplicantResponse, QueryCreditClassesRequest, QueryCreditClassesResponse, QueryCreditClassRequest, QueryCreditClassResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectRequest, QueryProjectResponse, QueryCreditCollectionRequest, QueryCreditCollectionResponse, QueryCreditBalancesRequest, QueryCreditBalancesResponse, QueryCreditBalanceRequest, QueryCreditBalanceResponse } from "./query";
export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuer = this.issuer.bind(this);
    this.applicants = this.applicants.bind(this);
    this.applicant = this.applicant.bind(this);
    this.creditClasses = this.creditClasses.bind(this);
    this.creditClass = this.creditClass.bind(this);
    this.projects = this.projects.bind(this);
    this.project = this.project.bind(this);
    this.creditCollection = this.creditCollection.bind(this);
    this.creditBalances = this.creditBalances.bind(this);
    this.creditBalance = this.creditBalance.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  issuers(request = {
    pagination: undefined
  }) {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuers", data);
    return promise.then(data => QueryIssuersResponse.decode(new _m0.Reader(data)));
  }
  issuer(request) {
    const data = QueryIssuerRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuer", data);
    return promise.then(data => QueryIssuerResponse.decode(new _m0.Reader(data)));
  }
  applicants(request = {
    pagination: undefined
  }) {
    const data = QueryApplicantsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicants", data);
    return promise.then(data => QueryApplicantsResponse.decode(new _m0.Reader(data)));
  }
  applicant(request) {
    const data = QueryApplicantRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicant", data);
    return promise.then(data => QueryApplicantResponse.decode(new _m0.Reader(data)));
  }
  creditClasses(request = {
    pagination: undefined
  }) {
    const data = QueryCreditClassesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClasses", data);
    return promise.then(data => QueryCreditClassesResponse.decode(new _m0.Reader(data)));
  }
  creditClass(request) {
    const data = QueryCreditClassRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClass", data);
    return promise.then(data => QueryCreditClassResponse.decode(new _m0.Reader(data)));
  }
  projects(request = {
    pagination: undefined
  }) {
    const data = QueryProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Projects", data);
    return promise.then(data => QueryProjectsResponse.decode(new _m0.Reader(data)));
  }
  project(request) {
    const data = QueryProjectRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "Project", data);
    return promise.then(data => QueryProjectResponse.decode(new _m0.Reader(data)));
  }
  creditCollection(request) {
    const data = QueryCreditCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditCollection", data);
    return promise.then(data => QueryCreditCollectionResponse.decode(new _m0.Reader(data)));
  }
  creditBalances(request = {
    pagination: undefined
  }) {
    const data = QueryCreditBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalances", data);
    return promise.then(data => QueryCreditBalancesResponse.decode(new _m0.Reader(data)));
  }
  creditBalance(request) {
    const data = QueryCreditBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalance", data);
    return promise.then(data => QueryCreditBalanceResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
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
    creditClasses(request) {
      return queryService.creditClasses(request);
    },
    creditClass(request) {
      return queryService.creditClass(request);
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