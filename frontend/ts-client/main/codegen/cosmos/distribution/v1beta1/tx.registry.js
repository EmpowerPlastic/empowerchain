"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", _tx.MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", _tx.MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", _tx.MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", _tx.MsgFundCommunityPool], ["/cosmos.distribution.v1beta1.MsgUpdateParams", _tx.MsgUpdateParams], ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", _tx.MsgCommunityPoolSpend]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    setWithdrawAddress: function setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: _tx.MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward: function withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: _tx.MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawValidatorCommission: function withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: _tx.MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    fundCommunityPool: function fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: _tx.MsgFundCommunityPool.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    },
    communityPoolSpend: function communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: _tx.MsgCommunityPoolSpend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setWithdrawAddress: function setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: value
      };
    },
    withdrawDelegatorReward: function withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: value
      };
    },
    withdrawValidatorCommission: function withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: value
      };
    },
    fundCommunityPool: function fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: value
      };
    },
    communityPoolSpend: function communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: value
      };
    }
  },
  fromPartial: {
    setWithdrawAddress: function setWithdrawAddress(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        value: _tx.MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward: function withdrawDelegatorReward(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: _tx.MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawValidatorCommission: function withdrawValidatorCommission(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        value: _tx.MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    fundCommunityPool: function fundCommunityPool(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        value: _tx.MsgFundCommunityPool.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    },
    communityPoolSpend: function communityPoolSpend(value) {
      return {
        typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        value: _tx.MsgCommunityPoolSpend.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;