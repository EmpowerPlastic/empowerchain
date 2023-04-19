"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        block = _ref.block,
        evidence = _ref.evidence,
        validator = _ref.validator;
      return {
        authority: authority,
        block: {
          max_bytes: block.maxBytes.toString(),
          max_gas: block.maxGas.toString()
        },
        evidence: {
          max_age_num_blocks: evidence.maxAgeNumBlocks.toString(),
          max_age_duration: (evidence.maxAgeDuration * 1000000000).toString(),
          max_bytes: evidence.maxBytes.toString()
        },
        validator: {
          pub_key_types: validator.pubKeyTypes
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        block = _ref2.block,
        evidence = _ref2.evidence,
        validator = _ref2.validator;
      return {
        authority: authority,
        block: {
          maxBytes: _helpers.Long.fromString(block.max_bytes),
          maxGas: _helpers.Long.fromString(block.max_gas)
        },
        evidence: {
          maxAgeNumBlocks: _helpers.Long.fromString(evidence.max_age_num_blocks),
          maxAgeDuration: {
            seconds: _helpers.Long.fromNumber(Math.floor(parseInt(evidence.max_age_duration) / 1000000000)),
            nanos: parseInt(evidence.max_age_duration) % 1000000000
          },
          maxBytes: _helpers.Long.fromString(evidence.max_bytes)
        },
        validator: {
          pubKeyTypes: validator.pub_key_types
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;