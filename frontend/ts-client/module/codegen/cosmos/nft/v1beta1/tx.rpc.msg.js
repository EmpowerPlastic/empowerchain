import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgSend, MsgSendResponse } from "./tx";
/** Msg defines the nft Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.send = this.send.bind(this);
  }
  send(request) {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }
}