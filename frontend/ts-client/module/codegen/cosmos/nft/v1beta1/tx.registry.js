import { MsgSend } from "./tx";
export const registry = [["/cosmos.nft.v1beta1.MsgSend", MsgSend]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value
      };
    }
  },
  fromPartial: {
    send(value) {
      return {
        typeUrl: "/cosmos.nft.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    }
  }
};