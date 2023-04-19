import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  /* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */

  async accounts(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get(endpoint, options);
  }
  /* Account returns account details based on address. */

  async account(params) {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get(endpoint);
  }
  /* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */

  async accountAddressByID(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.accountId) !== "undefined") {
      options.params.account_id = params.accountId;
    }
    const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`;
    return await this.req.get(endpoint, options);
  }
  /* Params queries all parameters. */

  async params(_params = {}) {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get(endpoint);
  }
  /* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */

  async moduleAccounts(_params = {}) {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get(endpoint);
  }
  /* ModuleAccountByName returns the module account info by module name */

  async moduleAccountByName(params) {
    const endpoint = `cosmos/auth/v1beta1/module_accounts/${params.name}`;
    return await this.req.get(endpoint);
  }
  /* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */

  async bech32Prefix(_params = {}) {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get(endpoint);
  }
  /* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */

  async addressBytesToString(params) {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get(endpoint);
  }
  /* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */

  async addressStringToBytes(params) {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get(endpoint);
  }
  /* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */

  async accountInfo(params) {
    const endpoint = `cosmos/auth/v1beta1/account_info/${params.address}`;
    return await this.req.get(endpoint);
  }
}