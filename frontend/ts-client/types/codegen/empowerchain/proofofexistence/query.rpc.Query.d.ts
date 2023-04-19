import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryProofRequest, QueryProofResponse } from "./query";
export interface Query {
    proof(request: QueryProofRequest): Promise<QueryProofResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    proof(request: QueryProofRequest): Promise<QueryProofResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    proof(request: QueryProofRequest): Promise<QueryProofResponse>;
};
