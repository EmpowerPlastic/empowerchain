import { accessTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { toBase64, fromBase64, fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract } from "./tx";
export interface MsgStoreCodeAminoType extends AminoMsg {
  type: "wasm/MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: string;
    instantiate_permission: {
      permission: number;
      address: string;
      addresses: string[];
    };
  };
}
export interface MsgInstantiateContractAminoType extends AminoMsg {
  type: "wasm/MsgInstantiateContract";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgInstantiateContract2AminoType extends AminoMsg {
  type: "wasm/MsgInstantiateContract2";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    salt: Uint8Array;
    fix_msg: boolean;
  };
}
export interface MsgExecuteContractAminoType extends AminoMsg {
  type: "wasm/MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgMigrateContractAminoType extends AminoMsg {
  type: "wasm/MsgMigrateContract";
  value: {
    sender: string;
    contract: string;
    code_id: string;
    msg: Uint8Array;
  };
}
export interface MsgUpdateAdminAminoType extends AminoMsg {
  type: "wasm/MsgUpdateAdmin";
  value: {
    sender: string;
    new_admin: string;
    contract: string;
  };
}
export interface MsgClearAdminAminoType extends AminoMsg {
  type: "wasm/MsgClearAdmin";
  value: {
    sender: string;
    contract: string;
  };
}
export interface MsgUpdateInstantiateConfigAminoType extends AminoMsg {
  type: "wasm/MsgUpdateInstantiateConfig";
  value: {
    sender: string;
    code_id: string;
    new_instantiate_permission: {
      permission: number;
      address: string;
      addresses: string[];
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "wasm/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      code_upload_access: {
        permission: number;
        address: string;
        addresses: string[];
      };
      instantiate_default_permission: number;
    };
  };
}
export interface MsgSudoContractAminoType extends AminoMsg {
  type: "wasm/MsgSudoContract";
  value: {
    authority: string;
    contract: string;
    msg: Uint8Array;
  };
}
export interface MsgPinCodesAminoType extends AminoMsg {
  type: "wasm/MsgPinCodes";
  value: {
    authority: string;
    code_ids: string[];
  };
}
export interface MsgUnpinCodesAminoType extends AminoMsg {
  type: "wasm/MsgUnpinCodes";
  value: {
    authority: string;
    code_ids: string[];
  };
}
export interface MsgStoreAndInstantiateContractAminoType extends AminoMsg {
  type: "wasm/MsgStoreAndInstantiateContract";
  value: {
    authority: string;
    wasm_byte_code: string;
    instantiate_permission: {
      permission: number;
      address: string;
      addresses: string[];
    };
    unpin_code: boolean;
    admin: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    source: string;
    builder: string;
    code_hash: Uint8Array;
  };
}
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      instantiatePermission
    }: MsgStoreCode): MsgStoreCodeAminoType["value"] => {
      return {
        sender,
        wasm_byte_code: toBase64(wasmByteCode),
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address,
          addresses: instantiatePermission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }: MsgStoreCodeAminoType["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: fromBase64(wasm_byte_code),
        instantiatePermission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address,
          addresses: instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): MsgInstantiateContractAminoType["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }: MsgInstantiateContractAminoType["value"]): MsgInstantiateContract => {
      return {
        sender,
        admin,
        codeId: BigInt(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
    aminoType: "wasm/MsgInstantiateContract2",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds,
      salt,
      fixMsg
    }: MsgInstantiateContract2): MsgInstantiateContract2AminoType["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fix_msg: fixMsg
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds,
      salt,
      fix_msg
    }: MsgInstantiateContract2AminoType["value"]): MsgInstantiateContract2 => {
      return {
        sender,
        admin,
        codeId: BigInt(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fixMsg: fix_msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContract): MsgExecuteContractAminoType["value"] => {
      return {
        sender,
        contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContractAminoType["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      codeId,
      msg
    }: MsgMigrateContract): MsgMigrateContractAminoType["value"] => {
      return {
        sender,
        contract,
        code_id: codeId.toString(),
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }: MsgMigrateContractAminoType["value"]): MsgMigrateContract => {
      return {
        sender,
        contract,
        codeId: BigInt(code_id),
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: ({
      sender,
      newAdmin,
      contract
    }: MsgUpdateAdmin): MsgUpdateAdminAminoType["value"] => {
      return {
        sender,
        new_admin: newAdmin,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }: MsgUpdateAdminAminoType["value"]): MsgUpdateAdmin => {
      return {
        sender,
        newAdmin: new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }: MsgClearAdmin): MsgClearAdminAminoType["value"] => {
      return {
        sender,
        contract
      };
    },
    fromAmino: ({
      sender,
      contract
    }: MsgClearAdminAminoType["value"]): MsgClearAdmin => {
      return {
        sender,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
    aminoType: "wasm/MsgUpdateInstantiateConfig",
    toAmino: ({
      sender,
      codeId,
      newInstantiatePermission
    }: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAminoType["value"] => {
      return {
        sender,
        code_id: codeId.toString(),
        new_instantiate_permission: {
          permission: newInstantiatePermission.permission,
          address: newInstantiatePermission.address,
          addresses: newInstantiatePermission.addresses
        }
      };
    },
    fromAmino: ({
      sender,
      code_id,
      new_instantiate_permission
    }: MsgUpdateInstantiateConfigAminoType["value"]): MsgUpdateInstantiateConfig => {
      return {
        sender,
        codeId: BigInt(code_id),
        newInstantiatePermission: {
          permission: accessTypeFromJSON(new_instantiate_permission.permission),
          address: new_instantiate_permission.address,
          addresses: new_instantiate_permission.addresses
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateParams": {
    aminoType: "wasm/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          code_upload_access: {
            permission: params.codeUploadAccess.permission,
            address: params.codeUploadAccess.address,
            addresses: params.codeUploadAccess.addresses
          },
          instantiate_default_permission: params.instantiateDefaultPermission
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          codeUploadAccess: {
            permission: accessTypeFromJSON(params.code_upload_access.permission),
            address: params.code_upload_access.address,
            addresses: params.code_upload_access.addresses
          },
          instantiateDefaultPermission: accessTypeFromJSON(params.instantiate_default_permission)
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgSudoContract": {
    aminoType: "wasm/MsgSudoContract",
    toAmino: ({
      authority,
      contract,
      msg
    }: MsgSudoContract): MsgSudoContractAminoType["value"] => {
      return {
        authority,
        contract,
        msg: JSON.parse(fromUtf8(msg))
      };
    },
    fromAmino: ({
      authority,
      contract,
      msg
    }: MsgSudoContractAminoType["value"]): MsgSudoContract => {
      return {
        authority,
        contract,
        msg: toUtf8(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgPinCodes": {
    aminoType: "wasm/MsgPinCodes",
    toAmino: ({
      authority,
      codeIds
    }: MsgPinCodes): MsgPinCodesAminoType["value"] => {
      return {
        authority,
        code_ids: codeIds.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      authority,
      code_ids
    }: MsgPinCodesAminoType["value"]): MsgPinCodes => {
      return {
        authority,
        codeIds: code_ids.map(el0 => BigInt(el0))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUnpinCodes": {
    aminoType: "wasm/MsgUnpinCodes",
    toAmino: ({
      authority,
      codeIds
    }: MsgUnpinCodes): MsgUnpinCodesAminoType["value"] => {
      return {
        authority,
        code_ids: codeIds.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      authority,
      code_ids
    }: MsgUnpinCodesAminoType["value"]): MsgUnpinCodes => {
      return {
        authority,
        codeIds: code_ids.map(el0 => BigInt(el0))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
    aminoType: "wasm/MsgStoreAndInstantiateContract",
    toAmino: ({
      authority,
      wasmByteCode,
      instantiatePermission,
      unpinCode,
      admin,
      label,
      msg,
      funds,
      source,
      builder,
      codeHash
    }: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractAminoType["value"] => {
      return {
        authority,
        wasm_byte_code: toBase64(wasmByteCode),
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address,
          addresses: instantiatePermission.addresses
        },
        unpin_code: unpinCode,
        admin,
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        source,
        builder,
        code_hash: codeHash
      };
    },
    fromAmino: ({
      authority,
      wasm_byte_code,
      instantiate_permission,
      unpin_code,
      admin,
      label,
      msg,
      funds,
      source,
      builder,
      code_hash
    }: MsgStoreAndInstantiateContractAminoType["value"]): MsgStoreAndInstantiateContract => {
      return {
        authority,
        wasmByteCode: fromBase64(wasm_byte_code),
        instantiatePermission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address,
          addresses: instantiate_permission.addresses
        },
        unpinCode: unpin_code,
        admin,
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        source,
        builder,
        codeHash: code_hash
      };
    }
  }
};