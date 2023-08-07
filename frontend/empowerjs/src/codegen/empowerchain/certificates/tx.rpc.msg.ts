import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateCertificate, MsgCreateCertificateResponse } from "./tx";
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/certificates module parameters.
   * The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** CreateCertificate creates a new certificate for the given certificate type owned by the given owner */
  createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createCertificate = this.createCertificate.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  createCertificate(request: MsgCreateCertificate): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Msg", "CreateCertificate", data);
    return promise.then(data => MsgCreateCertificateResponse.decode(new _m0.Reader(data)));
  }
}