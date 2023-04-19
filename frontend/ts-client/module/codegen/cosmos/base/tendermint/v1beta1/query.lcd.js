import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  /* GetNodeInfo queries the current node info. */

  async getNodeInfo(_params = {}) {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get(endpoint);
  }
  /* GetSyncing queries node syncing. */

  async getSyncing(_params = {}) {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get(endpoint);
  }
  /* GetLatestBlock returns the latest block. */

  async getLatestBlock(_params = {}) {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get(endpoint);
  }
  /* GetBlockByHeight queries block for given height. */

  async getBlockByHeight(params) {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get(endpoint);
  }
  /* GetLatestValidatorSet queries latest validator-set. */

  async getLatestValidatorSet(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get(endpoint, options);
  }
  /* GetValidatorSetByHeight queries validator-set at a given height. */

  async getValidatorSetByHeight(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get(endpoint, options);
  }
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */

  async aBCIQuery(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.data) !== "undefined") {
      options.params.data = params.data;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.path) !== "undefined") {
      options.params.path = params.path;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.height) !== "undefined") {
      options.params.height = params.height;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.prove) !== "undefined") {
      options.params.prove = params.prove;
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/abci_query`;
    return await this.req.get(endpoint, options);
  }
}