import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProofRequest, QueryProofResponse } from "./query";
export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.proof = this.proof.bind(this);
  }
  proof(request) {
    const data = QueryProofRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.proofofexistence.Query", "Proof", data);
    return promise.then(data => QueryProofResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proof(request) {
      return queryService.proof(request);
    }
  };
};