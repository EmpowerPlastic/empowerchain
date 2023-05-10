import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateProof, MsgCreateProofResponse } from "./tx";
/** Msg defines the message service */
export interface Msg {
  /** CreateProof creates a new proof of existence */
  createProof(request: MsgCreateProof): Promise<MsgCreateProofResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProof = this.createProof.bind(this);
  }
  createProof(request: MsgCreateProof): Promise<MsgCreateProofResponse> {
    const data = MsgCreateProof.encode(request).finish();
    const promise = this.rpc.request("empowerchain.proofofexistence.Msg", "CreateProof", data);
    return promise.then(data => MsgCreateProofResponse.decode(new _m0.Reader(data)));
  }
}