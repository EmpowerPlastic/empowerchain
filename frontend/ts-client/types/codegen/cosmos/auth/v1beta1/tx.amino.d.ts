import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            max_memo_characters: string;
            tx_sig_limit: string;
            tx_size_cost_per_byte: string;
            sig_verify_cost_ed25519: string;
            sig_verify_cost_secp256k1: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
