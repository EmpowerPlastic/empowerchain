import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */
export interface Query {
    /** AppOptions returns the autocli options for all of the modules in an app. */
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    appOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
};
