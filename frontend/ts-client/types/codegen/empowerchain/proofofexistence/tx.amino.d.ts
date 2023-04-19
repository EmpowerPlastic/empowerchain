import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProof } from "./tx";
export interface AminoMsgCreateProof extends AminoMsg {
    type: "/empowerchain.proofofexistence.MsgCreateProof";
    value: {
        creator: string;
        hash: string;
    };
}
export declare const AminoConverter: {
    "/empowerchain.proofofexistence.MsgCreateProof": {
        aminoType: string;
        toAmino: ({ creator, hash }: MsgCreateProof) => AminoMsgCreateProof["value"];
        fromAmino: ({ creator, hash }: AminoMsgCreateProof["value"]) => MsgCreateProof;
    };
};
