import { AminoMsg } from "@cosmjs/amino";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export interface AminoMsgUnjail extends AminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: {
        validator_addr: string;
    };
}
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            signed_blocks_window: string;
            min_signed_per_window: Uint8Array;
            downtime_jail_duration: {
                seconds: string;
                nanos: number;
            };
            slash_fraction_double_sign: Uint8Array;
            slash_fraction_downtime: Uint8Array;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: ({ validatorAddr }: MsgUnjail) => AminoMsgUnjail["value"];
        fromAmino: ({ validator_addr }: AminoMsgUnjail["value"]) => MsgUnjail;
    };
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
