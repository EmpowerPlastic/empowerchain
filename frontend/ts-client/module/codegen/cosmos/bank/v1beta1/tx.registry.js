import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const registry = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend], ["/cosmos.bank.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.bank.v1beta1.MsgSetSendEnabled", MsgSetSendEnabled]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value
      };
    }
  },
  fromPartial: {
    send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setSendEnabled(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.fromPartial(value)
      };
    }
  }
};