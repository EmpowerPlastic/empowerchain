import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
    toAmino: ({
      authority,
      plan
    }) => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: plan.height.toString(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value
          }
        }
      };
    },
    fromAmino: ({
      authority,
      plan
    }) => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: Long.fromString(plan.height),
          info: plan.info,
          upgradedClientState: {
            typeUrl: plan.upgraded_client_state.type_url,
            value: plan.upgraded_client_state.value
          }
        }
      };
    }
  },
  "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
    aminoType: "cosmos-sdk/MsgCancelUpgrade",
    toAmino: ({
      authority
    }) => {
      return {
        authority
      };
    },
    fromAmino: ({
      authority
    }) => {
      return {
        authority
      };
    }
  }
};