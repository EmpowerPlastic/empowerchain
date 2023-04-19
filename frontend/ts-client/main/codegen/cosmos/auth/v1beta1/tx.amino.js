"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.auth.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        params = _ref.params;
      return {
        authority: authority,
        params: {
          max_memo_characters: params.maxMemoCharacters.toString(),
          tx_sig_limit: params.txSigLimit.toString(),
          tx_size_cost_per_byte: params.txSizeCostPerByte.toString(),
          sig_verify_cost_ed25519: params.sigVerifyCostEd25519.toString(),
          sig_verify_cost_secp256k1: params.sigVerifyCostSecp256k1.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        params = _ref2.params;
      return {
        authority: authority,
        params: {
          maxMemoCharacters: _helpers.Long.fromString(params.max_memo_characters),
          txSigLimit: _helpers.Long.fromString(params.tx_sig_limit),
          txSizeCostPerByte: _helpers.Long.fromString(params.tx_size_cost_per_byte),
          sigVerifyCostEd25519: _helpers.Long.fromString(params.sig_verify_cost_ed25519),
          sigVerifyCostSecp256k1: _helpers.Long.fromString(params.sig_verify_cost_secp256k1)
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;