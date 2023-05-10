import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProofRequest, QueryProofResponse } from "./query";
export interface Query {
  proof(request: QueryProofRequest): Promise<QueryProofResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proof = this.proof.bind(this);
  }
  proof(request: QueryProofRequest): Promise<QueryProofResponse> {
    const data = QueryProofRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.proofofexistence.Query", "Proof", data);
    return promise.then(data => QueryProofResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proof(request: QueryProofRequest): Promise<QueryProofResponse> {
      return queryService.proof(request);
    }
  };
};