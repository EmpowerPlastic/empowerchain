import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }
  /* Params queries the parameters of slashing module */

  async params(_params = {}) {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.req.get(endpoint);
  }
  /* SigningInfo queries the signing info of given cons address */

  async signingInfo(params) {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.consAddress}`;
    return await this.req.get(endpoint);
  }
  /* SigningInfos queries signing info of all validators */

  async signingInfos(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.req.get(endpoint, options);
  }
}