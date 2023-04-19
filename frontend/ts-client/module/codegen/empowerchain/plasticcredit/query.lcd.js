import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
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
  /* Params */

  async params(_params = {}) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/params`;
    return await this.req.get(endpoint);
  }
  /* Issuers */

  async issuers(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `empowerchain/empowerchain/plasticcredit/issuers`;
    return await this.req.get(endpoint, options);
  }
  /* Issuer */

  async issuer(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/issuers/${params.issuerId}`;
    return await this.req.get(endpoint);
  }
  /* Applicants */

  async applicants(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `empowerchain/empowerchain/plasticcredit/applicants`;
    return await this.req.get(endpoint, options);
  }
  /* Applicant */

  async applicant(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/applicants/${params.applicantId}`;
    return await this.req.get(endpoint);
  }
  /* CreditClasses */

  async creditClasses(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes`;
    return await this.req.get(endpoint, options);
  }
  /* CreditClass */

  async creditClass(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/credit-classes/${params.creditClassAbbreviation}`;
    return await this.req.get(endpoint);
  }
  /* Projects */

  async projects(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `empowerchain/empowerchain/plasticcredit/projects`;
    return await this.req.get(endpoint, options);
  }
  /* Project */

  async project(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/projects/${params.projectId}`;
    return await this.req.get(endpoint);
  }
  /* CreditCollection */

  async creditCollection(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditcollections/${params.denom}`;
    return await this.req.get(endpoint);
  }
  /* CreditBalances */

  async creditBalances(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditbalances`;
    return await this.req.get(endpoint, options);
  }
  /* CreditBalance */

  async creditBalance(params) {
    const endpoint = `empowerchain/empowerchain/plasticcredit/creditbalances/${params.owner}/${params.denom}`;
    return await this.req.get(endpoint);
  }
}