import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse } from "./tx";
/** Msg defines the distribution Msg service. */

export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.communityPoolSpend = this.communityPoolSpend.bind(this);
  }
  setWithdrawAddress(request) {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }
  withdrawDelegatorReward(request) {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }
  withdrawValidatorCommission(request) {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }
  fundCommunityPool(request) {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  communityPoolSpend(request) {
    const data = MsgCommunityPoolSpend.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
    return promise.then(data => MsgCommunityPoolSpendResponse.decode(new _m0.Reader(data)));
  }
}