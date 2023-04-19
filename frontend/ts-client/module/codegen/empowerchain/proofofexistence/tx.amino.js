export const AminoConverter = {
  "/empowerchain.proofofexistence.MsgCreateProof": {
    aminoType: "/empowerchain.proofofexistence.MsgCreateProof",
    toAmino: ({
      creator,
      hash
    }) => {
      return {
        creator,
        hash
      };
    },
    fromAmino: ({
      creator,
      hash
    }) => {
      return {
        creator,
        hash
      };
    }
  }
};