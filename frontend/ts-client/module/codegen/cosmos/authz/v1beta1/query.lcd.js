import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */

  async grants(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.granter) !== "undefined") {
      options.params.granter = params.granter;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.grantee) !== "undefined") {
      options.params.grantee = params.grantee;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.msgTypeUrl) !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants`;
    return await this.req.get(endpoint, options);
  }
  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */

  async granterGrants(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants/granter/${params.granter}`;
    return await this.req.get(endpoint, options);
  }
  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */

  async granteeGrants(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/authz/v1beta1/grants/grantee/${params.grantee}`;
    return await this.req.get(endpoint, options);
  }
}