import { MsgUpdateParams } from "./tx";
export const registry = [["/cosmos.consensus.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value) {
      return {
        typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};