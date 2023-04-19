import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariantModuleName,
      invariantRoute
    }) => {
      return {
        sender,
        invariant_module_name: invariantModuleName,
        invariant_route: invariantRoute
      };
    },
    fromAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }) => {
      return {
        sender,
        invariantModuleName: invariant_module_name,
        invariantRoute: invariant_route
      };
    }
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      constantFee
    }) => {
      return {
        authority,
        constant_fee: {
          denom: constantFee.denom,
          amount: Long.fromValue(constantFee.amount).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      constant_fee
    }) => {
      return {
        authority,
        constantFee: {
          denom: constant_fee.denom,
          amount: constant_fee.amount
        }
      };
    }
  }
};