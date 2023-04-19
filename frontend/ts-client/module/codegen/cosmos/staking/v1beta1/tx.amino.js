import { decodeBech32Pubkey, encodeBech32Pubkey } from "@cosmjs/amino";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      minSelfDelegation,
      delegatorAddress,
      validatorAddress,
      pubkey,
      value
    }) => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.maxRate,
          max_change_rate: commission.maxChangeRate
        },
        min_self_delegation: minSelfDelegation,
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        pubkey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64(decodeBech32Pubkey(pubkey).value)
        },
        value: {
          denom: value.denom,
          amount: Long.fromValue(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }) => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          maxRate: commission.max_rate,
          maxChangeRate: commission.max_change_rate
        },
        minSelfDelegation: min_self_delegation,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        pubkey: encodeBech32Pubkey({
          type: "tendermint/PubKeySecp256k1",
          value: toBase64(pubkey.value)
        }, "cosmos"),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validatorAddress,
      commissionRate,
      minSelfDelegation
    }) => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        validator_address: validatorAddress,
        commission_rate: commissionRate,
        min_self_delegation: minSelfDelegation
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }) => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        validatorAddress: validator_address,
        commissionRate: commission_rate,
        minSelfDelegation: min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }) => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }) => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount
    }) => {
      return {
        delegator_address: delegatorAddress,
        validator_src_address: validatorSrcAddress,
        validator_dst_address: validatorDstAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }) => {
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount
    }) => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }) => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      creationHeight
    }) => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        creation_height: creationHeight.toString()
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height
    }) => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        creationHeight: Long.fromString(creation_height)
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          unbonding_time: (params.unbondingTime * 1000000000).toString(),
          max_validators: params.maxValidators,
          max_entries: params.maxEntries,
          historical_entries: params.historicalEntries,
          bond_denom: params.bondDenom,
          min_commission_rate: params.minCommissionRate
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
          unbondingTime: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.unbonding_time) / 1000000000)),
            nanos: parseInt(params.unbonding_time) % 1000000000
          },
          maxValidators: params.max_validators,
          maxEntries: params.max_entries,
          historicalEntries: params.historical_entries,
          bondDenom: params.bond_denom,
          minCommissionRate: params.min_commission_rate
        }
      };
    }
  }
};