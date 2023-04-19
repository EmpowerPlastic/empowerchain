import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.proof = this.proof.bind(this);
  }
  /* Proof */

  async proof(params) {
    const endpoint = `empowerchain/empowerchain/proofofexistence/proof/${params.hash}`;
    return await this.req.get(endpoint);
  }
}