import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProof } from "./tx";
export interface MsgCreateProofAminoType extends AminoMsg {
  type: "/empowerchain.proofofexistence.MsgCreateProof";
  value: {
    creator: string;
    hash: string;
  };
}
export const AminoConverter = {
  "/empowerchain.proofofexistence.MsgCreateProof": {
    aminoType: "/empowerchain.proofofexistence.MsgCreateProof",
    toAmino: ({
      creator,
      hash
    }: MsgCreateProof): MsgCreateProofAminoType["value"] => {
      return {
        creator,
        hash
      };
    },
    fromAmino: ({
      creator,
      hash
    }: MsgCreateProofAminoType["value"]): MsgCreateProof => {
      return {
        creator,
        hash
      };
    }
  }
};