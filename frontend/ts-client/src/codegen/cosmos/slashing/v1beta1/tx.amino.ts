import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.slashing.v1beta1.MsgUnjail": {
    aminoType: "cosmos-sdk/MsgUnjail",
    toAmino: ({
      validatorAddr
    }: MsgUnjail): AminoMsgUnjail["value"] => {
      return {
        validator_addr: validatorAddr
      };
    },
    fromAmino: ({
      validator_addr
    }: AminoMsgUnjail["value"]): MsgUnjail => {
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
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
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
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          signedBlocksWindow: Long.fromString(params.signed_blocks_window),
          minSignedPerWindow: params.min_signed_per_window,
          downtimeJailDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.downtime_jail_duration) / 1_000_000_000)),
            nanos: parseInt(params.downtime_jail_duration) % 1_000_000_000
          },
          slashFractionDoubleSign: params.slash_fraction_double_sign,
          slashFractionDowntime: params.slash_fraction_downtime
        }
      };
    }
  }
};