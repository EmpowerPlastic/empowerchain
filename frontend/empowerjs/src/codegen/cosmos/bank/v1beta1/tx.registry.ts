import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend], ["/cosmos.bank.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/cosmos.bank.v1beta1.MsgSetSendEnabled", MsgSetSendEnabled]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },

    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    },

    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },

    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value
      };
    },

    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value
      };
    },

    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value
      };
    },

    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value
      };
    }

  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },

    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    },

    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },

    setSendEnabled(value: MsgSetSendEnabled) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        value: MsgSetSendEnabled.fromPartial(value)
      };
    }

  }
};