import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryIssuersRequest, QueryIssuersResponseSDKType, QueryIssuerRequest, QueryIssuerResponseSDKType, QueryApplicantsRequest, QueryApplicantsResponseSDKType, QueryApplicantRequest, QueryApplicantResponseSDKType, QueryCreditTypesRequest, QueryCreditTypesResponseSDKType, QueryCreditTypeRequest, QueryCreditTypeResponseSDKType, QueryProjectsRequest, QueryProjectsResponseSDKType, QueryProjectRequest, QueryProjectResponseSDKType, QueryCreditCollectionRequest, QueryCreditCollectionResponseSDKType, QueryCreditBalancesRequest, QueryCreditBalancesResponseSDKType, QueryCreditBalanceRequest, QueryCreditBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Issuers */


  async issuers(params: QueryIssuersRequest = {
    pagination: undefined
  }): Promise<QueryIssuersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/issuers`;
    return await this.req.get<QueryIssuersResponseSDKType>(endpoint, options);
  }
  /* Issuer */


  async issuer(params: QueryIssuerRequest): Promise<QueryIssuerResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/issuers/${params.issuerId}`;
    return await this.req.get<QueryIssuerResponseSDKType>(endpoint);
  }
  /* Applicants */


  async applicants(params: QueryApplicantsRequest = {
    pagination: undefined
  }): Promise<QueryApplicantsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/applicants`;
    return await this.req.get<QueryApplicantsResponseSDKType>(endpoint, options);
  }
  /* Applicant */


  async applicant(params: QueryApplicantRequest): Promise<QueryApplicantResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/applicants/${params.applicantId}`;
    return await this.req.get<QueryApplicantResponseSDKType>(endpoint);
  }
  /* CreditTypes */


  async creditTypes(params: QueryCreditTypesRequest = {
    pagination: undefined
  }): Promise<QueryCreditTypesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes`;
    return await this.req.get<QueryCreditTypesResponseSDKType>(endpoint, options);
  }
  /* CreditType */


  async creditType(params: QueryCreditTypeRequest): Promise<QueryCreditTypeResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes/${params.creditTypeAbbreviation}`;
    return await this.req.get<QueryCreditTypeResponseSDKType>(endpoint);
  }
  /* Projects */


  async projects(params: QueryProjectsRequest = {
    pagination: undefined
  }): Promise<QueryProjectsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/projects`;
    return await this.req.get<QueryProjectsResponseSDKType>(endpoint, options);
  }
  /* Project */


  async project(params: QueryProjectRequest): Promise<QueryProjectResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/projects/${params.projectId}`;
    return await this.req.get<QueryProjectResponseSDKType>(endpoint);
  }
  /* CreditCollection */


  async creditCollection(params: QueryCreditCollectionRequest): Promise<QueryCreditCollectionResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditcollections/${params.denom}`;
    return await this.req.get<QueryCreditCollectionResponseSDKType>(endpoint);
  }
  /* CreditBalances */


  async creditBalances(params: QueryCreditBalancesRequest = {
    pagination: undefined
  }): Promise<QueryCreditBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/creditbalances`;
    return await this.req.get<QueryCreditBalancesResponseSDKType>(endpoint, options);
  }
  /* CreditBalance */


  async creditBalance(params: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditbalances/${params.owner}/${params.denom}`;
    return await this.req.get<QueryCreditBalanceResponseSDKType>(endpoint);
  }

}