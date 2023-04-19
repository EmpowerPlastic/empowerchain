import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ConfigRequest, ConfigResponse } from "./query";
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
    /** Config queries for the operator configuration. */
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: ConfigRequest): Promise<ConfigResponse>;
};
