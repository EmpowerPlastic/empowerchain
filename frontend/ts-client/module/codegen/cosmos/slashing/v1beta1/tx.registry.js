import { MsgUnjail, MsgUpdateParams } from "./tx";
export const registry = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail], ["/cosmos.slashing.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: MsgUnjail.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};