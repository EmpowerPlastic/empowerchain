import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  /* Evidence queries evidence based on evidence hash. */

  async evidence(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.evidenceHash) !== "undefined") {
      options.params.evidence_hash = params.evidenceHash;
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.hash}`;
    return await this.req.get(endpoint, options);
  }
  /* AllEvidence queries all evidence. */

  async allEvidence(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get(endpoint, options);
  }
}