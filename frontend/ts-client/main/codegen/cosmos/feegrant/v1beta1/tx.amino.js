"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: function toAmino(_ref) {
      var granter = _ref.granter,
        grantee = _ref.grantee,
        allowance = _ref.allowance;
      return {
        granter: granter,
        grantee: grantee,
        allowance: {
          type_url: allowance.typeUrl,
          value: allowance.value
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var granter = _ref2.granter,
        grantee = _ref2.grantee,
        allowance = _ref2.allowance;
      return {
        granter: granter,
        grantee: grantee,
        allowance: {
          typeUrl: allowance.type_url,
          value: allowance.value
        }
      };
    }
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: function toAmino(_ref3) {
      var granter = _ref3.granter,
        grantee = _ref3.grantee;
      return {
        granter: granter,
        grantee: grantee
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var granter = _ref4.granter,
        grantee = _ref4.grantee;
      return {
        granter: granter,
        grantee: grantee
      };
    }
  }
};
exports.AminoConverter = AminoConverter;