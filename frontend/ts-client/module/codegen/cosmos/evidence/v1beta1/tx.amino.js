export const AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: ({
      submitter,
      evidence
    }) => {
      return {
        submitter,
        evidence: {
          type_url: evidence.typeUrl,
          value: evidence.value
        }
      };
    },
    fromAmino: ({
      submitter,
      evidence
    }) => {
      return {
        submitter,
        evidence: {
          typeUrl: evidence.type_url,
          value: evidence.value
        }
      };
    }
  }
};