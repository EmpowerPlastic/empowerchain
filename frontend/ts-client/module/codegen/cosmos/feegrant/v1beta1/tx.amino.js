export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: ({
      granter,
      grantee,
      allowance
    }) => {
      return {
        granter,
        grantee,
        allowance: {
          type_url: allowance.typeUrl,
          value: allowance.value
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      allowance
    }) => {
      return {
        granter,
        grantee,
        allowance: {
          typeUrl: allowance.type_url,
          value: allowance.value
        }
      };
    }
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: ({
      granter,
      grantee
    }) => {
      return {
        granter,
        grantee
      };
    },
    fromAmino: ({
      granter,
      grantee
    }) => {
      return {
        granter,
        grantee
      };
    }
  }
};