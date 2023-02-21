import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      block,
      evidence,
      validator
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        block: {
          max_bytes: block.maxBytes.toString(),
          max_gas: block.maxGas.toString()
        },
        evidence: {
          max_age_num_blocks: evidence.maxAgeNumBlocks.toString(),
          max_age_duration: (evidence.maxAgeDuration * 1_000_000_000).toString(),
          max_bytes: evidence.maxBytes.toString()
        },
        validator: {
          pub_key_types: validator.pubKeyTypes
        }
      };
    },
    fromAmino: ({
      authority,
      block,
      evidence,
      validator
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        block: {
          maxBytes: Long.fromString(block.max_bytes),
          maxGas: Long.fromString(block.max_gas)
        },
        evidence: {
          maxAgeNumBlocks: Long.fromString(evidence.max_age_num_blocks),
          maxAgeDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(evidence.max_age_duration) / 1_000_000_000)),
            nanos: parseInt(evidence.max_age_duration) % 1_000_000_000
          },
          maxBytes: Long.fromString(evidence.max_bytes)
        },
        validator: {
          pubKeyTypes: validator.pub_key_types
        }
      };
    }
  }
};