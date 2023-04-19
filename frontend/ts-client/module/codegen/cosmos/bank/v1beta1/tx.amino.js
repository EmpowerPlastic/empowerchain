export const AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({
      fromAddress,
      toAddress,
      amount
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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