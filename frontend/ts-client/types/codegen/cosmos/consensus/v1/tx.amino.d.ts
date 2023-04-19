import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        authority: string;
        block: {
            max_bytes: string;
            max_gas: string;
        };
        evidence: {
            max_age_num_blocks: string;
            max_age_duration: {
                seconds: string;
                nanos: number;
            };
            max_bytes: string;
        };
        validator: {
            pub_key_types: string[];
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, block, evidence, validator }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, block, evidence, validator }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
