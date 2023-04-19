import { MsgCreateProof } from "./tx";
export const registry = [["/empowerchain.proofofexistence.MsgCreateProof", MsgCreateProof]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value
      };
    }
  },
  fromPartial: {
    createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.fromPartial(value)
      };
    }
  }
};