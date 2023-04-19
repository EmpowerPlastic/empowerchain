"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _tx = require("./tx");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.communityPoolSpend = this.communityPoolSpend.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "setWithdrawAddress",
    value: function setWithdrawAddress(request) {
      var data = _tx.MsgSetWithdrawAddress.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
      return promise.then(function (data) {
        return _tx.MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "withdrawDelegatorReward",
    value: function withdrawDelegatorReward(request) {
      var data = _tx.MsgWithdrawDelegatorReward.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "withdrawValidatorCommission",
    value: function withdrawValidatorCommission(request) {
      var data = _tx.MsgWithdrawValidatorCommission.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "fundCommunityPool",
    value: function fundCommunityPool(request) {
      var data = _tx.MsgFundCommunityPool.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
      return promise.then(function (data) {
        return _tx.MsgFundCommunityPoolResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateParams",
    value: function updateParams(request) {
      var data = _tx.MsgUpdateParams.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "communityPoolSpend",
    value: function communityPoolSpend(request) {
      var data = _tx.MsgCommunityPoolSpend.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
      return promise.then(function (data) {
        return _tx.MsgCommunityPoolSpendResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;