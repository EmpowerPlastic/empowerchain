import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateProof, MsgCreateProofResponse } from "./tx";
/** Msg defines the message service */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createProof = this.createProof.bind(this);
  }
  createProof(request) {
    const data = MsgCreateProof.encode(request).finish();
    const promise = this.rpc.request("empowerchain.proofofexistence.Msg", "CreateProof", data);
    return promise.then(data => MsgCreateProofResponse.decode(new _m0.Reader(data)));
  }
}