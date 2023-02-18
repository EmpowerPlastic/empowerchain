import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          mint_denom: params.mintDenom,
          inflation_rate_change: params.inflationRateChange,
          inflation_max: params.inflationMax,
          inflation_min: params.inflationMin,
          goal_bonded: params.goalBonded,
          blocks_per_year: params.blocksPerYear.toString()
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
          mintDenom: params.mint_denom,
          inflationRateChange: params.inflation_rate_change,
          inflationMax: params.inflation_max,
          inflationMin: params.inflation_min,
          goalBonded: params.goal_bonded,
          blocksPerYear: Long.fromString(params.blocks_per_year)
        }
      };
    }
  }
};