import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
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
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
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
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        block: {
          maxBytes: BigInt(block.max_bytes),
          maxGas: BigInt(block.max_gas)
        },
        evidence: {
          maxAgeNumBlocks: BigInt(evidence.max_age_num_blocks),
          maxAgeDuration: {
            seconds: BigInt(Math.floor(parseInt(evidence.max_age_duration) / 1_000_000_000)),
            nanos: parseInt(evidence.max_age_duration) % 1_000_000_000
          },
          maxBytes: BigInt(evidence.max_bytes)
        },
        validator: {
          pubKeyTypes: validator.pub_key_types
        }
      };
    }
  }
};