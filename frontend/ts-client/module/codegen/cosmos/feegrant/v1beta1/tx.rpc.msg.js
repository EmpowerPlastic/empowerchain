import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";
/** Msg defines the feegrant msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }
  grantAllowance(request) {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then(data => MsgGrantAllowanceResponse.decode(new _m0.Reader(data)));
  }
  revokeAllowance(request) {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then(data => MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)));
  }
}