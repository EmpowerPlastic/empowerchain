"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: function toAmino(_ref) {
      var validatorAddr = _ref.validatorAddr;
      return {
        validator_addr: validatorAddr
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var validator_addr = _ref2.validator_addr;
      return {
        validatorAddr: validator_addr
      };
    }
  },
  "/cosmos.slashing.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref3) {
      var authority = _ref3.authority,
        params = _ref3.params;
      return {
        authority: authority,
        params: {
          signed_blocks_window: params.signedBlocksWindow.toString(),
          min_signed_per_window: params.minSignedPerWindow,
          downtime_jail_duration: (params.downtimeJailDuration * 1000000000).toString(),
          slash_fraction_double_sign: params.slashFractionDoubleSign,
          slash_fraction_downtime: params.slashFractionDowntime
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var authority = _ref4.authority,
        params = _ref4.params;
      return {
        authority: authority,
        params: {
          signedBlocksWindow: _helpers.Long.fromString(params.signed_blocks_window),
          minSignedPerWindow: params.min_signed_per_window,
          downtimeJailDuration: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1000000000)),
            nanos: parseInt(params.downtime_jail_duration) % 1000000000
          },
          slashFractionDoubleSign: params.slash_fraction_double_sign,
          slashFractionDowntime: params.slash_fraction_downtime
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;