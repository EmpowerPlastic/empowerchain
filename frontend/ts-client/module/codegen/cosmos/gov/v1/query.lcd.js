import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  /* Proposal queries proposal details based on ProposalID. */

  async proposal(params) {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}`;
    return await this.req.get(endpoint);
  }
  /* Proposals queries all proposals based on given status. */

  async proposals(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.proposalStatus) !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.voter) !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.depositor) !== "undefined") {
      options.params.depositor = params.depositor;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals`;
    return await this.req.get(endpoint, options);
  }
  /* Vote queries voted information based on proposalID, voterAddr. */

  async vote(params) {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes/${params.voter}`;
    return await this.req.get(endpoint);
  }
  /* Votes queries votes of a given proposal. */

  async votes(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes`;
    return await this.req.get(endpoint, options);
  }
  /* Params queries all parameters of the gov module. */

  async params(params) {
    const endpoint = `cosmos/gov/v1/params/${params.paramsType}`;
    return await this.req.get(endpoint);
  }
  /* Deposit queries single deposit information based proposalID, depositAddr. */

  async deposit(params) {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits/${params.depositor}`;
    return await this.req.get(endpoint);
  }
  /* Deposits queries all deposits of a single proposal. */

  async deposits(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits`;
    return await this.req.get(endpoint, options);
  }
  /* TallyResult queries the tally of a proposal vote. */

  async tallyResult(params) {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/tally`;
    return await this.req.get(endpoint);
  }
}