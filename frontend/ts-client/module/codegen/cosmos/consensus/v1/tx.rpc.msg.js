import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the bank Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.consensus.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}