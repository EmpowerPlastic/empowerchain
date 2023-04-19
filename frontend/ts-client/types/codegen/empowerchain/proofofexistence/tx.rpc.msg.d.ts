import { Rpc } from "../../helpers";
import { MsgCreateProof, MsgCreateProofResponse } from "./tx";
/** Msg defines the message service */
export interface Msg {
    /** CreateProof creates a new proof of existence */
    createProof(request: MsgCreateProof): Promise<MsgCreateProofResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createProof(request: MsgCreateProof): Promise<MsgCreateProofResponse>;
}
