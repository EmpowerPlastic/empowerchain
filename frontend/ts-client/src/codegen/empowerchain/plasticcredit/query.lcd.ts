import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryIssuersRequest, QueryIssuersResponseSDKType, QueryIssuerRequest, QueryIssuerResponseSDKType, QueryApplicantRequest, QueryApplicantResponseSDKType, QueryCreditClassesRequest, QueryCreditClassesResponseSDKType, QueryCreditClassRequest, QueryCreditClassResponseSDKType, QueryProjectRequest, QueryProjectResponseSDKType, QueryCreditCollectionRequest, QueryCreditCollectionResponseSDKType, QueryCreditBalanceRequest, QueryCreditBalanceResponseSDKType } from "./query";
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
    this.applicant = this.applicant.bind(this);
    this.creditClasses = this.creditClasses.bind(this);
    this.creditClass = this.creditClass.bind(this);
    this.project = this.project.bind(this);
    this.creditCollection = this.creditCollection.bind(this);
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
  /* Applicant */


  async applicant(params: QueryApplicantRequest): Promise<QueryApplicantResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/applicants/${params.applicantId}`;
    return await this.req.get<QueryApplicantResponseSDKType>(endpoint);
  }
  /* CreditClasses */


  async creditClasses(params: QueryCreditClassesRequest = {
    pagination: undefined
  }): Promise<QueryCreditClassesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes`;
    return await this.req.get<QueryCreditClassesResponseSDKType>(endpoint, options);
  }
  /* CreditClass */


  async creditClass(params: QueryCreditClassRequest): Promise<QueryCreditClassResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes/${params.creditClassAbbreviation}`;
    return await this.req.get<QueryCreditClassResponseSDKType>(endpoint);
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
  /* CreditBalance */


  async creditBalance(params: QueryCreditBalanceRequest): Promise<QueryCreditBalanceResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditbalances/${params.owner}/${params.denom}`;
    return await this.req.get<QueryCreditBalanceResponseSDKType>(endpoint);
  }

}