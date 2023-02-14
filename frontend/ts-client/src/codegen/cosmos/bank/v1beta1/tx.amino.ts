import { AminoMsg } from "@cosmjs/amino";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export interface AminoMsgSend extends AminoMsg {
  type: "cosmos-sdk/MsgSend";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgMultiSend extends AminoMsg {
  type: "cosmos-sdk/MsgMultiSend";
  value: {
    inputs: {
      address: string;
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    outputs: {
      address: string;
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
  };
}
export interface AminoMsgUpdateParams extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      send_enabled: {
        denom: string;
        enabled: boolean;
      }[];
      default_send_enabled: boolean;
    };
  };
}
export interface AminoMsgSetSendEnabled extends AminoMsg {
  type: "cosmos-sdk/MsgSetSendEnabled";
  value: {
    authority: string;
    send_enabled: {
      denom: string;
      enabled: boolean;
    }[];
    use_default_for: string[];
  };
}
export const AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({
      fromAddress,
      toAddress,
      amount
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: ({
      inputs,
      outputs
    }: MsgMultiSend): AminoMsgMultiSend["value"] => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      inputs,
      outputs
    }: AminoMsgMultiSend["value"]): MsgMultiSend => {
      return {
        inputs: inputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        outputs: outputs.map(el0 => ({
          address: el0.address,
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          send_enabled: params.sendEnabled.map(el0 => ({
            denom: el0.denom,
            enabled: el0.enabled
          })),
          default_send_enabled: params.defaultSendEnabled
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          sendEnabled: params.send_enabled.map(el1 => ({
            denom: el1.denom,
            enabled: el1.enabled
          })),
          defaultSendEnabled: params.default_send_enabled
        }
      };
    }
  },
  "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
    aminoType: "cosmos-sdk/MsgSetSendEnabled",
    toAmino: ({
      authority,
      sendEnabled,
      useDefaultFor
    }: MsgSetSendEnabled): AminoMsgSetSendEnabled["value"] => {
      return {
        authority,
        send_enabled: sendEnabled.map(el0 => ({
          denom: el0.denom,
          enabled: el0.enabled
        })),
        use_default_for: useDefaultFor
      };
    },
    fromAmino: ({
      authority,
      send_enabled,
      use_default_for
    }: AminoMsgSetSendEnabled["value"]): MsgSetSendEnabled => {
      return {
        authority,
        sendEnabled: send_enabled.map(el0 => ({
          denom: el0.denom,
          enabled: el0.enabled
        })),
        useDefaultFor: use_default_for
      };
    }
  }
};