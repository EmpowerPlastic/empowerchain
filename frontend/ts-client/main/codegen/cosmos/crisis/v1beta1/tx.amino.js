"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        invariantModuleName = _ref.invariantModuleName,
        invariantRoute = _ref.invariantRoute;
      return {
        sender: sender,
        invariant_module_name: invariantModuleName,
        invariant_route: invariantRoute
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        invariant_module_name = _ref2.invariant_module_name,
        invariant_route = _ref2.invariant_route;
      return {
        sender: sender,
        invariantModuleName: invariant_module_name,
        invariantRoute: invariant_route
      };
    }
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        constantFee = _ref3.constantFee;
      return {
        authority: authority,
        constant_fee: {
          denom: constantFee.denom,
          amount: _helpers.Long.fromValue(constantFee.amount).toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        constant_fee = _ref4.constant_fee;
      return {
        authority: authority,
        constantFee: {
          denom: constant_fee.denom,
          amount: constant_fee.amount
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;