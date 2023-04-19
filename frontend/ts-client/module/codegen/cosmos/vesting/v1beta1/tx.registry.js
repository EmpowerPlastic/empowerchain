import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export const registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount], ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", MsgCreatePermanentLockedAccount], ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", MsgCreatePeriodicVestingAccount]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    },
    createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value: MsgCreatePermanentLockedAccount.encode(value).finish()
      };
    },
    createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: MsgCreatePeriodicVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value
      };
    },
    createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value
      };
    },
    createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value
      };
    }
  },
  fromPartial: {
    createVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    },
    createPermanentLockedAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        value: MsgCreatePermanentLockedAccount.fromPartial(value)
      };
    },
    createPeriodicVestingAccount(value) {
      return {
        typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        value: MsgCreatePeriodicVestingAccount.fromPartial(value)
      };
    }
  }
};