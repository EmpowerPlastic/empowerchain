import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx";
/** Msg defines the evidence Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }
  submitEvidence(request) {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then(data => MsgSubmitEvidenceResponse.decode(new _m0.Reader(data)));
  }
}