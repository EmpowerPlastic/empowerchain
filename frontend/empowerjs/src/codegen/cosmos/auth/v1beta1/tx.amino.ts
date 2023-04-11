import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.auth.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          max_memo_characters: params.maxMemoCharacters.toString(),
          tx_sig_limit: params.txSigLimit.toString(),
          tx_size_cost_per_byte: params.txSizeCostPerByte.toString(),
          sig_verify_cost_ed25519: params.sigVerifyCostEd25519.toString(),
          sig_verify_cost_secp256k1: params.sigVerifyCostSecp256k1.toString()
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          maxMemoCharacters: Long.fromString(params.max_memo_characters),
          txSigLimit: Long.fromString(params.tx_sig_limit),
          txSizeCostPerByte: Long.fromString(params.tx_size_cost_per_byte),
          sigVerifyCostEd25519: Long.fromString(params.sig_verify_cost_ed25519),
          sigVerifyCostSecp256k1: Long.fromString(params.sig_verify_cost_secp256k1)
        }
      };
    }
  }
};