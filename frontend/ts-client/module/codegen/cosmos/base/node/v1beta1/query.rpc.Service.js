import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { ConfigRequest, ConfigResponse } from "./query";
/** Service defines the gRPC querier service for node related queries. */

export class ServiceClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }
  config(request = {}) {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then(data => ConfigResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    config(request) {
      return queryService.config(request);
    }
  };
};