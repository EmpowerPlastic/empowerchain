import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.appOptions = this.appOptions.bind(this);
  }
  appOptions(request = {}) {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
    return promise.then(data => AppOptionsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appOptions(request) {
      return queryService.appOptions(request);
    }
  };
};