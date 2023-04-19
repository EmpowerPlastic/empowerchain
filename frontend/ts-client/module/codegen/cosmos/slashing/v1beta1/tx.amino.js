import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validatorAddr
    }) => {
      return {
        validator_addr: validatorAddr
      };
    },
    fromAmino: ({
      validator_addr
    }) => {
      return {
        validatorAddr: validator_addr
      };
    }
  },
  "/cosmos.slashing.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          signed_blocks_window: params.signedBlocksWindow.toString(),
          min_signed_per_window: params.minSignedPerWindow,
          downtime_jail_duration: (params.downtimeJailDuration * 1000000000).toString(),
          slash_fraction_double_sign: params.slashFractionDoubleSign,
          slash_fraction_downtime: params.slashFractionDowntime
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
          signedBlocksWindow: Long.fromString(params.signed_blocks_window),
          minSignedPerWindow: params.min_signed_per_window,
          downtimeJailDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1000000000)),
            nanos: parseInt(params.downtime_jail_duration) % 1000000000
          },
          slashFractionDoubleSign: params.slash_fraction_double_sign,
          slashFractionDowntime: params.slash_fraction_downtime
        }
      };
    }
  }
};