import { AminoMsg } from "@cosmjs/amino";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export interface MsgUnjailAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: {
    validator_addr: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/slashing/MsgUpdateParams";
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
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validatorAddr
    }: MsgUnjail): MsgUnjailAminoType["value"] => {
      return {
        validator_addr: validatorAddr
      };
    },
    fromAmino: ({
      validator_addr
    }: MsgUnjailAminoType["value"]): MsgUnjail => {
      return {
        validatorAddr: validator_addr
      };
    }
  },
  "/cosmos.slashing.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/slashing/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          signed_blocks_window: params.signedBlocksWindow.toString(),
          min_signed_per_window: params.minSignedPerWindow,
          downtime_jail_duration: (params.downtimeJailDuration * 1_000_000_000).toString(),
          slash_fraction_double_sign: params.slashFractionDoubleSign,
          slash_fraction_downtime: params.slashFractionDowntime
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          signedBlocksWindow: BigInt(params.signed_blocks_window),
          minSignedPerWindow: params.min_signed_per_window,
          downtimeJailDuration: {
            seconds: BigInt(Math.floor(parseInt(params.downtime_jail_duration) / 1_000_000_000)),
            nanos: parseInt(params.downtime_jail_duration) % 1_000_000_000
          },
          slashFractionDoubleSign: params.slash_fraction_double_sign,
          slashFractionDowntime: params.slash_fraction_downtime
        }
      };
    }
  }
};