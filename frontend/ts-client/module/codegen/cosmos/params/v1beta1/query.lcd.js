import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.subspaces = this.subspaces.bind(this);
  }
  /* Params queries a specific parameter of a module, given its subspace and
   key. */

  async params(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.subspace) !== "undefined") {
      options.params.subspace = params.subspace;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.key) !== "undefined") {
      options.params.key = params.key;
    }
    const endpoint = `cosmos/params/v1beta1/params`;
    return await this.req.get(endpoint, options);
  }
  /* Subspaces queries for all registered subspaces and all keys for a subspace.
  
   Since: cosmos-sdk 0.46 */

  async subspaces(_params = {}) {
    const endpoint = `cosmos/params/v1beta1/subspaces`;
    return await this.req.get(endpoint);
  }
}