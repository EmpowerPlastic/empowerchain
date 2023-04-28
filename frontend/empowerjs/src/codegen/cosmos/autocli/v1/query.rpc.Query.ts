import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */

export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.appOptions = this.appOptions.bind(this);
  }

  appOptions(request: AppOptionsRequest = {}): Promise<AppOptionsResponse> {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
    return promise.then(data => AppOptionsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse> {
      return queryService.appOptions(request);
    }

  };
};