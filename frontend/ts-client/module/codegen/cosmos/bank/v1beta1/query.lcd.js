import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  /* Balance queries the balance of a single coin for a single account. */

  async balance(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.req.get(endpoint, options);
  }
  /* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */

  async allBalances(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get(endpoint, options);
  }
  /* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */

  async spendableBalances(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.req.get(endpoint, options);
  }
  /* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */

  async spendableBalanceByDenom(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}/by_denom`;
    return await this.req.get(endpoint, options);
  }
  /* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */

  async totalSupply(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get(endpoint, options);
  }
  /* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */

  async supplyOf(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denom) !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.req.get(endpoint, options);
  }
  /* Params queries the parameters of x/bank module. */

  async params(_params = {}) {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get(endpoint);
  }
  /* DenomsMetadata queries the client metadata of a given coin denomination. */

  async denomMetadata(params) {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get(endpoint);
  }
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */

  async denomsMetadata(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get(endpoint, options);
  }
  /* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */

  async denomOwners(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.req.get(endpoint, options);
  }
  /* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */

  async sendEnabled(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.denoms) !== "undefined") {
      options.params.denoms = params.denoms;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/bank/v1beta1/send_enabled`;
    return await this.req.get(endpoint, options);
  }
}