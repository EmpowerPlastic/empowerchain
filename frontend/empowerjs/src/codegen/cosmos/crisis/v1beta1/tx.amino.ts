import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export interface AminoMsgVerifyInvariant extends AminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
  };
}
export interface AminoMsgUpdateParams extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
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
    }: MsgVerifyInvariant): AminoMsgVerifyInvariant["value"] => {
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
    }: AminoMsgVerifyInvariant["value"]): MsgVerifyInvariant => {
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
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
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
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
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