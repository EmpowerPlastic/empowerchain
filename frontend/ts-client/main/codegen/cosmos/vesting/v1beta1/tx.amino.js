"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: function toAmino(_ref) {
      var fromAddress = _ref.fromAddress,
        toAddress = _ref.toAddress,
        amount = _ref.amount,
        endTime = _ref.endTime,
        delayed = _ref.delayed;
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        end_time: endTime.toString(),
        delayed: delayed
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var from_address = _ref2.from_address,
        to_address = _ref2.to_address,
        amount = _ref2.amount,
        end_time = _ref2.end_time,
        delayed = _ref2.delayed;
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        }),
        endTime: _helpers.Long.fromString(end_time),
        delayed: delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
    toAmino: function toAmino(_ref3) {
      var fromAddress = _ref3.fromAddress,
        toAddress = _ref3.toAddress,
        amount = _ref3.amount;
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var from_address = _ref4.from_address,
        to_address = _ref4.to_address,
        amount = _ref4.amount;
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: function toAmino(_ref5) {
      var fromAddress = _ref5.fromAddress,
        toAddress = _ref5.toAddress,
        startTime = _ref5.startTime,
        vestingPeriods = _ref5.vestingPeriods;
      return {
        from_address: fromAddress,
        to_address: toAddress,
        start_time: startTime.toString(),
        vesting_periods: vestingPeriods.map(function (el0) {
          return {
            length: el0.length.toString(),
            amount: el0.amount.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var from_address = _ref6.from_address,
        to_address = _ref6.to_address,
        start_time = _ref6.start_time,
        vesting_periods = _ref6.vesting_periods;
      return {
        fromAddress: from_address,
        toAddress: to_address,
        startTime: _helpers.Long.fromString(start_time),
        vestingPeriods: vesting_periods.map(function (el0) {
          return {
            length: _helpers.Long.fromString(el0.length),
            amount: el0.amount.map(function (el1) {
              return {
                denom: el1.denom,
                amount: el1.amount
              };
            })
          };
        })
      };
    }
  }
};
exports.AminoConverter = AminoConverter;