"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        params = _ref.params;
      return {
        authority: authority,
        params: {
          mint_denom: params.mintDenom,
          inflation_rate_change: params.inflationRateChange,
          inflation_max: params.inflationMax,
          inflation_min: params.inflationMin,
          goal_bonded: params.goalBonded,
          blocks_per_year: params.blocksPerYear.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        params = _ref2.params;
      return {
        authority: authority,
        params: {
          mintDenom: params.mint_denom,
          inflationRateChange: params.inflation_rate_change,
          inflationMax: params.inflation_max,
          inflationMin: params.inflation_min,
          goalBonded: params.goal_bonded,
          blocksPerYear: _helpers.Long.fromString(params.blocks_per_year)
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;