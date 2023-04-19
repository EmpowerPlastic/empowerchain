import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: ({ sender, invariantModuleName, invariantRoute }: MsgVerifyInvariant) => AminoMsgVerifyInvariant["value"];
        fromAmino: ({ sender, invariant_module_name, invariant_route }: AminoMsgVerifyInvariant["value"]) => MsgVerifyInvariant;
    };
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, constantFee }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, constant_fee }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
