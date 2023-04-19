"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        plan = _ref.plan;
      return {
        authority: authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: plan.height.toString(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value
          }
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        plan = _ref2.plan;
      return {
        authority: authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: _helpers.Long.fromString(plan.height),
          info: plan.info,
          upgradedClientState: {
            typeUrl: plan.upgraded_client_state.type_url,
            value: plan.upgraded_client_state.value
          }
        }
      };
    }
  },
  "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
    aminoType: "cosmos-sdk/MsgCancelUpgrade",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority;
      return {
        authority: authority
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority;
      return {
        authority: authority
      };
    }
  }
};
exports.AminoConverter = AminoConverter;