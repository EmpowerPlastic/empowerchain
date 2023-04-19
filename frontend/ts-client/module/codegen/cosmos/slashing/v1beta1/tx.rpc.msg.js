import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgUnjail, MsgUnjailResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the slashing Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.unjail = this.unjail.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  unjail(request) {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
    return promise.then(data => MsgUnjailResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}