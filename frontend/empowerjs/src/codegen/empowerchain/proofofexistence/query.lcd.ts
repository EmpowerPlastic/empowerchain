import { LCDClient } from "@osmonauts/lcd";
import { QueryProofRequest, QueryProofResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.proof = this.proof.bind(this);
  }
  /* Proof */


  async proof(params: QueryProofRequest): Promise<QueryProofResponseSDKType> {
    const endpoint = `empowerchain/empowerchain/proofofexistence/proof/${params.hash}`;
    return await this.req.get<QueryProofResponseSDKType>(endpoint);
  }

}