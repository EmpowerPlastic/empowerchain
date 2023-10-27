import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgInstantiateContract2", MsgInstantiateContract2], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin], ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig], ["/cosmwasm.wasm.v1.MsgUpdateParams", MsgUpdateParams], ["/cosmwasm.wasm.v1.MsgSudoContract", MsgSudoContract], ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes], ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes], ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", MsgStoreAndInstantiateContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },
    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.encode(value).finish()
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    },
    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.encode(value).finish()
      };
    },
    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.encode(value).finish()
      };
    },
    updateInstantiateConfig(value: MsgUpdateInstantiateConfig) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    sudoContract(value: MsgSudoContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.encode(value).finish()
      };
    },
    pinCodes(value: MsgPinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.encode(value).finish()
      };
    },
    unpinCodes(value: MsgUnpinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.encode(value).finish()
      };
    },
    storeAndInstantiateContract(value: MsgStoreAndInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value
      };
    },
    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value
      };
    },
    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value
      };
    },
    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value
      };
    },
    updateInstantiateConfig(value: MsgUpdateInstantiateConfig) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value
      };
    },
    sudoContract(value: MsgSudoContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value
      };
    },
    pinCodes(value: MsgPinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value
      };
    },
    unpinCodes(value: MsgUnpinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value
      };
    },
    storeAndInstantiateContract(value: MsgStoreAndInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value
      };
    }
  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.toJSON(value)
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.toJSON(value)
      };
    },
    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.toJSON(value)
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.toJSON(value)
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.toJSON(value)
      };
    },
    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.toJSON(value)
      };
    },
    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.toJSON(value)
      };
    },
    updateInstantiateConfig(value: MsgUpdateInstantiateConfig) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    sudoContract(value: MsgSudoContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.toJSON(value)
      };
    },
    pinCodes(value: MsgPinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.toJSON(value)
      };
    },
    unpinCodes(value: MsgUnpinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.toJSON(value)
      };
    },
    storeAndInstantiateContract(value: MsgStoreAndInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.toJSON(value)
      };
    }
  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },
    instantiateContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },
    instantiateContract2(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromJSON(value)
      };
    },
    executeContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    },
    migrateContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromJSON(value)
      };
    },
    updateAdmin(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromJSON(value)
      };
    },
    clearAdmin(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromJSON(value)
      };
    },
    updateInstantiateConfig(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    sudoContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.fromJSON(value)
      };
    },
    pinCodes(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.fromJSON(value)
      };
    },
    unpinCodes(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.fromJSON(value)
      };
    },
    storeAndInstantiateContract(value: any) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.fromJSON(value)
      };
    }
  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },
    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },
    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromPartial(value)
      };
    },
    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract(value: MsgMigrateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    },
    updateAdmin(value: MsgUpdateAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromPartial(value)
      };
    },
    clearAdmin(value: MsgClearAdmin) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromPartial(value)
      };
    },
    updateInstantiateConfig(value: MsgUpdateInstantiateConfig) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    sudoContract(value: MsgSudoContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.fromPartial(value)
      };
    },
    pinCodes(value: MsgPinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.fromPartial(value)
      };
    },
    unpinCodes(value: MsgUnpinCodes) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.fromPartial(value)
      };
    },
    storeAndInstantiateContract(value: MsgStoreAndInstantiateContract) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.fromPartial(value)
      };
    }
  }
};