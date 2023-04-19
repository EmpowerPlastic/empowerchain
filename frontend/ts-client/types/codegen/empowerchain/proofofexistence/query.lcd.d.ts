import { LCDClient } from "@osmonauts/lcd";
import { QueryProofRequest, QueryProofResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    proof(params: QueryProofRequest): Promise<QueryProofResponseSDKType>;
}
