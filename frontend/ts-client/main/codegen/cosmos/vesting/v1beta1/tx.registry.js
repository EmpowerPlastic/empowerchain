"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", _tx.MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", _tx.MsgCreatePermanentLockedAccount], ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", _tx.MsgCreatePeriodicVestingAccount]];
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
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.encode(value).finish()
      };
    },
    createPermanentLockedAccount: function createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value: _tx.MsgCreatePermanentLockedAccount.encode(value).finish()
      };
    },
    createPeriodicVestingAccount: function createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: _tx.MsgCreatePeriodicVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: value
      };
    },
    createPermanentLockedAccount: function createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value: value
      };
    },
    createPeriodicVestingAccount: function createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: value
      };
    }
  },
  fromPartial: {
    createVestingAccount: function createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: _tx.MsgCreateVestingAccount.fromPartial(value)
      };
    },
    createPermanentLockedAccount: function createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value: _tx.MsgCreatePermanentLockedAccount.fromPartial(value)
      };
    },
    createPeriodicVestingAccount: function createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: _tx.MsgCreatePeriodicVestingAccount.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;