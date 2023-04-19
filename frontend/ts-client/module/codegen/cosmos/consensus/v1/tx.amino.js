import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.consensus.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      block,
      evidence,
      validator
    }) => {
      return {
        authority,
        block: {
          max_bytes: block.maxBytes.toString(),
          max_gas: block.maxGas.toString()
        },
        evidence: {
          max_age_num_blocks: evidence.maxAgeNumBlocks.toString(),
          max_age_duration: (evidence.maxAgeDuration * 1000000000).toString(),
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
    }) => {
      return {
        authority,
        block: {
          maxBytes: Long.fromString(block.max_bytes),
          maxGas: Long.fromString(block.max_gas)
        },
        evidence: {
          maxAgeNumBlocks: Long.fromString(evidence.max_age_num_blocks),
          maxAgeDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(evidence.max_age_duration) / 1000000000)),
            nanos: parseInt(evidence.max_age_duration) % 1000000000
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