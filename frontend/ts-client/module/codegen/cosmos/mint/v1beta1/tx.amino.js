import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
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
    }) => {
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