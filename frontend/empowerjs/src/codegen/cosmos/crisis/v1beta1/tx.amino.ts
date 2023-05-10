import { AminoMsg } from "@cosmjs/amino";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export interface MsgVerifyInvariantAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/crisis/MsgUpdateParams";
  value: {
    authority: string;
    constant_fee: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariantModuleName,
      invariantRoute
    }: MsgVerifyInvariant): MsgVerifyInvariantAminoType["value"] => {
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
    }: MsgVerifyInvariantAminoType["value"]): MsgVerifyInvariant => {
      return {
        sender,
        invariantModuleName: invariant_module_name,
        invariantRoute: invariant_route
      };
    }
  },
  "/cosmos.crisis.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
    toAmino: ({
      authority,
      constantFee
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        constant_fee: {
          denom: constantFee.denom,
          amount: constantFee.amount
        }
      };
    },
    fromAmino: ({
      authority,
      constant_fee
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
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