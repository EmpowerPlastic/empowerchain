"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", _tx.MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", _tx.MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", _tx.MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", _tx.MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", _tx.MsgUndelegate], ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", _tx.MsgCancelUnbondingDelegation], ["/cosmos.staking.v1beta1.MsgUpdateParams", _tx.MsgUpdateParams]];
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
    createValidator: function createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: _tx.MsgCreateValidator.encode(value).finish()
      };
    },
    editValidator: function editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: _tx.MsgEditValidator.encode(value).finish()
      };
    },
    delegate: function delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: _tx.MsgDelegate.encode(value).finish()
      };
    },
    beginRedelegate: function beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: _tx.MsgBeginRedelegate.encode(value).finish()
      };
    },
    undelegate: function undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: _tx.MsgUndelegate.encode(value).finish()
      };
    },
    cancelUnbondingDelegation: function cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: _tx.MsgCancelUnbondingDelegation.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createValidator: function createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: value
      };
    },
    editValidator: function editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: value
      };
    },
    delegate: function delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: value
      };
    },
    beginRedelegate: function beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: value
      };
    },
    undelegate: function undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: value
      };
    },
    cancelUnbondingDelegation: function cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: value
      };
    }
  },
  fromPartial: {
    createValidator: function createValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: _tx.MsgCreateValidator.fromPartial(value)
      };
    },
    editValidator: function editValidator(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: _tx.MsgEditValidator.fromPartial(value)
      };
    },
    delegate: function delegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: _tx.MsgDelegate.fromPartial(value)
      };
    },
    beginRedelegate: function beginRedelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: _tx.MsgBeginRedelegate.fromPartial(value)
      };
    },
    undelegate: function undelegate(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: _tx.MsgUndelegate.fromPartial(value)
      };
    },
    cancelUnbondingDelegation: function cancelUnbondingDelegation(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: _tx.MsgCancelUnbondingDelegation.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;