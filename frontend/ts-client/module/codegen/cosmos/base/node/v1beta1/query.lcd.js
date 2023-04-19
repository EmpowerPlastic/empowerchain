import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.config = this.config.bind(this);
  }
  /* Config queries for the operator configuration. */

  async config(_params = {}) {
    const endpoint = `cosmos/base/node/v1beta1/config`;
    return await this.req.get(endpoint);
  }
}