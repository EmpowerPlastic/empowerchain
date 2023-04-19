import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.getTx = this.getTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }
  /* GetTx fetches a tx by hash. */

  async getTx(params) {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return await this.req.get(endpoint);
  }
  /* GetTxsEvent fetches txs by event. */

  async getTxsEvent(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.events) !== "undefined") {
      options.params.events = params.events;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.orderBy) !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.page) !== "undefined") {
      options.params.page = params.page;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.limit) !== "undefined") {
      options.params.limit = params.limit;
    }
    const endpoint = `cosmos/tx/v1beta1/txs`;
    return await this.req.get(endpoint, options);
  }
  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */

  async getBlockWithTxs(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
    return await this.req.get(endpoint, options);
  }
}