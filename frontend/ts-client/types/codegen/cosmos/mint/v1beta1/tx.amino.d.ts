import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            mint_denom: string;
            inflation_rate_change: string;
            inflation_max: string;
            inflation_min: string;
            goal_bonded: string;
            blocks_per_year: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.mint.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
