import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */

export class ServiceClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  getNodeInfo(request = {}) {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then(data => GetNodeInfoResponse.decode(new _m0.Reader(data)));
  }
  getSyncing(request = {}) {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then(data => GetSyncingResponse.decode(new _m0.Reader(data)));
  }
  getLatestBlock(request = {}) {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then(data => GetLatestBlockResponse.decode(new _m0.Reader(data)));
  }
  getBlockByHeight(request) {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then(data => GetBlockByHeightResponse.decode(new _m0.Reader(data)));
  }
  getLatestValidatorSet(request = {
    pagination: undefined
  }) {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then(data => GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
  }
  getValidatorSetByHeight(request) {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then(data => GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
  }
  aBCIQuery(request) {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then(data => ABCIQueryResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo(request) {
      return queryService.getNodeInfo(request);
    },
    getSyncing(request) {
      return queryService.getSyncing(request);
    },
    getLatestBlock(request) {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight(request) {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet(request) {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight(request) {
      return queryService.getValidatorSetByHeight(request);
    },
    aBCIQuery(request) {
      return queryService.aBCIQuery(request);
    }
  };
};