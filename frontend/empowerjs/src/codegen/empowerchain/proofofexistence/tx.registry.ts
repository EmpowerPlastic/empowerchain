import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProof } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/empowerchain.proofofexistence.MsgCreateProof", MsgCreateProof]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProof(value: MsgCreateProof) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProof(value: MsgCreateProof) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value
      };
    }
  },
  toJSON: {
    createProof(value: MsgCreateProof) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.toJSON(value)
      };
    }
  },
  fromJSON: {
    createProof(value: any) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createProof(value: MsgCreateProof) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: MsgCreateProof.fromPartial(value)
      };
    }
  }
};