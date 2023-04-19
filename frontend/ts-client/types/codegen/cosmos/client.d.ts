import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmosAminoConverters: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: import("./vesting/v1beta1/tx").MsgCreateVestingAccount) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            end_time: string;
            delayed: boolean;
        };
        fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            end_time: string;
            delayed: boolean;
        }) => import("./vesting/v1beta1/tx").MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: import("./vesting/v1beta1/tx").MsgCreatePermanentLockedAccount) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ from_address, to_address, amount }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./vesting/v1beta1/tx").MsgCreatePermanentLockedAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: import("./vesting/v1beta1/tx").MsgCreatePeriodicVestingAccount) => {
            from_address: string;
            to_address: string;
            start_time: string;
            vesting_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        };
        fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
            from_address: string;
            to_address: string;
            start_time: string;
            vesting_periods: {
                length: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            }[];
        }) => import("./vesting/v1beta1/tx").MsgCreatePeriodicVestingAccount;
    };
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: import("./upgrade/v1beta1/tx").MsgSoftwareUpgrade) => {
            authority: string;
            plan: {
                name: string;
                time: {
                    seconds: string;
                    nanos: number;
                };
                height: string;
                info: string;
                upgraded_client_state: {
                    type_url: string;
                    value: Uint8Array;
                };
            };
        };
        fromAmino: ({ authority, plan }: {
            authority: string;
            plan: {
                name: string;
                time: {
                    seconds: string;
                    nanos: number;
                };
                height: string;
                info: string;
                upgraded_client_state: {
                    type_url: string;
                    value: Uint8Array;
                };
            };
        }) => import("./upgrade/v1beta1/tx").MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: string;
        toAmino: ({ authority }: import("./upgrade/v1beta1/tx").MsgCancelUpgrade) => {
            authority: string;
        };
        fromAmino: ({ authority }: {
            authority: string;
        }) => import("./upgrade/v1beta1/tx").MsgCancelUpgrade;
    };
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: import("./staking/v1beta1/tx").MsgCreateValidator) => {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            commission: {
                rate: string;
                max_rate: string;
                max_change_rate: string;
            };
            min_self_delegation: string;
            delegator_address: string;
            validator_address: string;
            pubkey: {
                type_url: string;
                value: Uint8Array;
            };
            value: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            commission: {
                rate: string;
                max_rate: string;
                max_change_rate: string;
            };
            min_self_delegation: string;
            delegator_address: string;
            validator_address: string;
            pubkey: {
                type_url: string;
                value: Uint8Array;
            };
            value: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: import("./staking/v1beta1/tx").MsgEditValidator) => {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            validator_address: string;
            commission_rate: string;
            min_self_delegation: string;
        };
        fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
            description: {
                moniker: string;
                identity: string;
                website: string;
                security_contact: string;
                details: string;
            };
            validator_address: string;
            commission_rate: string;
            min_self_delegation: string;
        }) => import("./staking/v1beta1/tx").MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: import("./staking/v1beta1/tx").MsgDelegate) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_address, amount }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: import("./staking/v1beta1/tx").MsgBeginRedelegate) => {
            delegator_address: string;
            validator_src_address: string;
            validator_dst_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
            delegator_address: string;
            validator_src_address: string;
            validator_dst_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: import("./staking/v1beta1/tx").MsgUndelegate) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ delegator_address, validator_address, amount }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./staking/v1beta1/tx").MsgUndelegate;
    };
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: import("./staking/v1beta1/tx").MsgCancelUnbondingDelegation) => {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
            creation_height: string;
        };
        fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            };
            creation_height: string;
        }) => import("./staking/v1beta1/tx").MsgCancelUnbondingDelegation;
    };
    "/cosmos.staking.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./staking/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                unbonding_time: {
                    seconds: string;
                    nanos: number;
                };
                max_validators: number;
                max_entries: number;
                historical_entries: number;
                bond_denom: string;
                min_commission_rate: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                unbonding_time: {
                    seconds: string;
                    nanos: number;
                };
                max_validators: number;
                max_entries: number;
                historical_entries: number;
                bond_denom: string;
                min_commission_rate: string;
            };
        }) => import("./staking/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: ({ validatorAddr }: import("./slashing/v1beta1/tx").MsgUnjail) => {
            validator_addr: string;
        };
        fromAmino: ({ validator_addr }: {
            validator_addr: string;
        }) => import("./slashing/v1beta1/tx").MsgUnjail;
    };
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./slashing/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                signed_blocks_window: string;
                min_signed_per_window: Uint8Array;
                downtime_jail_duration: {
                    seconds: string;
                    nanos: number;
                };
                slash_fraction_double_sign: Uint8Array;
                slash_fraction_downtime: Uint8Array;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                signed_blocks_window: string;
                min_signed_per_window: Uint8Array;
                downtime_jail_duration: {
                    seconds: string;
                    nanos: number;
                };
                slash_fraction_double_sign: Uint8Array;
                slash_fraction_downtime: Uint8Array;
            };
        }) => import("./slashing/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ classId, id, sender, receiver }: import("./nft/v1beta1/tx").MsgSend) => {
            class_id: string;
            id: string;
            sender: string;
            receiver: string;
        };
        fromAmino: ({ class_id, id, sender, receiver }: {
            class_id: string;
            id: string;
            sender: string;
            receiver: string;
        }) => import("./nft/v1beta1/tx").MsgSend;
    };
    "/cosmos.mint.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./mint/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                mint_denom: string;
                inflation_rate_change: string;
                inflation_max: string;
                inflation_min: string;
                goal_bonded: string;
                blocks_per_year: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                mint_denom: string;
                inflation_rate_change: string;
                inflation_max: string;
                inflation_min: string;
                goal_bonded: string;
                blocks_per_year: string;
            };
        }) => import("./mint/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: string;
        toAmino: ({ admin, members, metadata }: import("./group/v1/tx").MsgCreateGroup) => {
            admin: string;
            members: {
                address: string;
                weight: string;
                metadata: string;
            }[];
            metadata: string;
        };
        fromAmino: ({ admin, members, metadata }: {
            admin: string;
            members: {
                address: string;
                weight: string;
                metadata: string;
            }[];
            metadata: string;
        }) => import("./group/v1/tx").MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: ({ admin, groupId, memberUpdates }: import("./group/v1/tx").MsgUpdateGroupMembers) => {
            admin: string;
            group_id: string;
            member_updates: {
                address: string;
                weight: string;
                metadata: string;
            }[];
        };
        fromAmino: ({ admin, group_id, member_updates }: {
            admin: string;
            group_id: string;
            member_updates: {
                address: string;
                weight: string;
                metadata: string;
            }[];
        }) => import("./group/v1/tx").MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupId, newAdmin }: import("./group/v1/tx").MsgUpdateGroupAdmin) => {
            admin: string;
            group_id: string;
            new_admin: string;
        };
        fromAmino: ({ admin, group_id, new_admin }: {
            admin: string;
            group_id: string;
            new_admin: string;
        }) => import("./group/v1/tx").MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata }: import("./group/v1/tx").MsgUpdateGroupMetadata) => {
            admin: string;
            group_id: string;
            metadata: string;
        };
        fromAmino: ({ admin, group_id, metadata }: {
            admin: string;
            group_id: string;
            metadata: string;
        }) => import("./group/v1/tx").MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, decisionPolicy }: import("./group/v1/tx").MsgCreateGroupPolicy) => {
            admin: string;
            group_id: string;
            metadata: string;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ admin, group_id, metadata, decision_policy }: {
            admin: string;
            group_id: string;
            metadata: string;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./group/v1/tx").MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: string;
        toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: import("./group/v1/tx").MsgCreateGroupWithPolicy) => {
            admin: string;
            members: {
                address: string;
                weight: string;
                metadata: string;
            }[];
            group_metadata: string;
            group_policy_metadata: string;
            group_policy_as_admin: boolean;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
            admin: string;
            members: {
                address: string;
                weight: string;
                metadata: string;
            }[];
            group_metadata: string;
            group_policy_metadata: string;
            group_policy_as_admin: boolean;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./group/v1/tx").MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, newAdmin }: import("./group/v1/tx").MsgUpdateGroupPolicyAdmin) => {
            admin: string;
            group_policy_address: string;
            new_admin: string;
        };
        fromAmino: ({ admin, group_policy_address, new_admin }: {
            admin: string;
            group_policy_address: string;
            new_admin: string;
        }) => import("./group/v1/tx").MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: import("./group/v1/tx").MsgUpdateGroupPolicyDecisionPolicy) => {
            admin: string;
            group_policy_address: string;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ admin, group_policy_address, decision_policy }: {
            admin: string;
            group_policy_address: string;
            decision_policy: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./group/v1/tx").MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupPolicyAddress, metadata }: import("./group/v1/tx").MsgUpdateGroupPolicyMetadata) => {
            admin: string;
            group_policy_address: string;
            metadata: string;
        };
        fromAmino: ({ admin, group_policy_address, metadata }: {
            admin: string;
            group_policy_address: string;
            metadata: string;
        }) => import("./group/v1/tx").MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: import("./group/v1/tx").MsgSubmitProposal) => {
            group_policy_address: string;
            proposers: string[];
            metadata: string;
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            exec: number;
            title: string;
            summary: string;
        };
        fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: {
            group_policy_address: string;
            proposers: string[];
            metadata: string;
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            exec: number;
            title: string;
            summary: string;
        }) => import("./group/v1/tx").MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: string;
        toAmino: ({ proposalId, address }: import("./group/v1/tx").MsgWithdrawProposal) => {
            proposal_id: string;
            address: string;
        };
        fromAmino: ({ proposal_id, address }: {
            proposal_id: string;
            address: string;
        }) => import("./group/v1/tx").MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata, exec }: import("./group/v1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
            exec: number;
        };
        fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
            exec: number;
        }) => import("./group/v1/tx").MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        aminoType: string;
        toAmino: ({ proposalId, executor }: import("./group/v1/tx").MsgExec) => {
            proposal_id: string;
            executor: string;
        };
        fromAmino: ({ proposal_id, executor }: {
            proposal_id: string;
            executor: string;
        }) => import("./group/v1/tx").MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: string;
        toAmino: ({ address, groupId }: import("./group/v1/tx").MsgLeaveGroup) => {
            address: string;
            group_id: string;
        };
        fromAmino: ({ address, group_id }: {
            address: string;
            group_id: string;
        }) => import("./group/v1/tx").MsgLeaveGroup;
    };
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ content, initialDeposit, proposer }: import("./gov/v1beta1/tx").MsgSubmitProposal) => {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
        };
        fromAmino: ({ content, initial_deposit, proposer }: {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
        }) => import("./gov/v1beta1/tx").MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option }: import("./gov/v1beta1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            option: number;
        };
        fromAmino: ({ proposal_id, voter, option }: {
            proposal_id: string;
            voter: string;
            option: number;
        }) => import("./gov/v1beta1/tx").MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options }: import("./gov/v1beta1/tx").MsgVoteWeighted) => {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
        };
        fromAmino: ({ proposal_id, voter, options }: {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
        }) => import("./gov/v1beta1/tx").MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1beta1/tx").MsgDeposit) => {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ proposal_id, depositor, amount }: {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./gov/v1beta1/tx").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: import("./gov/v1/tx").MsgSubmitProposal) => {
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
            metadata: string;
            title: string;
            summary: string;
        };
        fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: {
            messages: {
                type_url: string;
                value: Uint8Array;
            }[];
            initial_deposit: {
                denom: string;
                amount: string;
            }[];
            proposer: string;
            metadata: string;
            title: string;
            summary: string;
        }) => import("./gov/v1/tx").MsgSubmitProposal;
    };
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: string;
        toAmino: ({ content, authority }: import("./gov/v1/tx").MsgExecLegacyContent) => {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            authority: string;
        };
        fromAmino: ({ content, authority }: {
            content: {
                type_url: string;
                value: Uint8Array;
            };
            authority: string;
        }) => import("./gov/v1/tx").MsgExecLegacyContent;
    };
    "/cosmos.gov.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata }: import("./gov/v1/tx").MsgVote) => {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
        };
        fromAmino: ({ proposal_id, voter, option, metadata }: {
            proposal_id: string;
            voter: string;
            option: number;
            metadata: string;
        }) => import("./gov/v1/tx").MsgVote;
    };
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options, metadata }: import("./gov/v1/tx").MsgVoteWeighted) => {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
            metadata: string;
        };
        fromAmino: ({ proposal_id, voter, options, metadata }: {
            proposal_id: string;
            voter: string;
            options: {
                option: number;
                weight: string;
            }[];
            metadata: string;
        }) => import("./gov/v1/tx").MsgVoteWeighted;
    };
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: import("./gov/v1/tx").MsgDeposit) => {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ proposal_id, depositor, amount }: {
            proposal_id: string;
            depositor: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./gov/v1/tx").MsgDeposit;
    };
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./gov/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                min_deposit: {
                    denom: string;
                    amount: string;
                }[];
                max_deposit_period: {
                    seconds: string;
                    nanos: number;
                };
                voting_period: {
                    seconds: string;
                    nanos: number;
                };
                quorum: string;
                threshold: string;
                veto_threshold: string;
                min_initial_deposit_ratio: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                min_deposit: {
                    denom: string;
                    amount: string;
                }[];
                max_deposit_period: {
                    seconds: string;
                    nanos: number;
                };
                voting_period: {
                    seconds: string;
                    nanos: number;
                };
                quorum: string;
                threshold: string;
                veto_threshold: string;
                min_initial_deposit_ratio: string;
            };
        }) => import("./gov/v1/tx").MsgUpdateParams;
    };
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee, allowance }: import("./feegrant/v1beta1/tx").MsgGrantAllowance) => {
            granter: string;
            grantee: string;
            allowance: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ granter, grantee, allowance }: {
            granter: string;
            grantee: string;
            allowance: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./feegrant/v1beta1/tx").MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee }: import("./feegrant/v1beta1/tx").MsgRevokeAllowance) => {
            granter: string;
            grantee: string;
        };
        fromAmino: ({ granter, grantee }: {
            granter: string;
            grantee: string;
        }) => import("./feegrant/v1beta1/tx").MsgRevokeAllowance;
    };
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: string;
        toAmino: ({ submitter, evidence }: import("./evidence/v1beta1/tx").MsgSubmitEvidence) => {
            submitter: string;
            evidence: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ submitter, evidence }: {
            submitter: string;
            evidence: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./evidence/v1beta1/tx").MsgSubmitEvidence;
    };
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: import("./distribution/v1beta1/tx").MsgSetWithdrawAddress) => {
            delegator_address: string;
            withdraw_address: string;
        };
        fromAmino: ({ delegator_address, withdraw_address }: {
            delegator_address: string;
            withdraw_address: string;
        }) => import("./distribution/v1beta1/tx").MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward) => {
            delegator_address: string;
            validator_address: string;
        };
        fromAmino: ({ delegator_address, validator_address }: {
            delegator_address: string;
            validator_address: string;
        }) => import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission) => {
            validator_address: string;
        };
        fromAmino: ({ validator_address }: {
            validator_address: string;
        }) => import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: import("./distribution/v1beta1/tx").MsgFundCommunityPool) => {
            amount: {
                denom: string;
                amount: string;
            }[];
            depositor: string;
        };
        fromAmino: ({ amount, depositor }: {
            amount: {
                denom: string;
                amount: string;
            }[];
            depositor: string;
        }) => import("./distribution/v1beta1/tx").MsgFundCommunityPool;
    };
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./distribution/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                community_tax: string;
                base_proposer_reward: string;
                bonus_proposer_reward: string;
                withdraw_addr_enabled: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                community_tax: string;
                base_proposer_reward: string;
                bonus_proposer_reward: string;
                withdraw_addr_enabled: boolean;
            };
        }) => import("./distribution/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: import("./distribution/v1beta1/tx").MsgCommunityPoolSpend) => {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ authority, recipient, amount }: {
            authority: string;
            recipient: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./distribution/v1beta1/tx").MsgCommunityPoolSpend;
    };
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: ({ sender, invariantModuleName, invariantRoute }: import("./crisis/v1beta1/tx").MsgVerifyInvariant) => {
            sender: string;
            invariant_module_name: string;
            invariant_route: string;
        };
        fromAmino: ({ sender, invariant_module_name, invariant_route }: {
            sender: string;
            invariant_module_name: string;
            invariant_route: string;
        }) => import("./crisis/v1beta1/tx").MsgVerifyInvariant;
    };
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, constantFee }: import("./crisis/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            constant_fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ authority, constant_fee }: {
            authority: string;
            constant_fee: {
                denom: string;
                amount: string;
            };
        }) => import("./crisis/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, block, evidence, validator }: import("./consensus/v1/tx").MsgUpdateParams) => {
            authority: string;
            block: {
                max_bytes: string;
                max_gas: string;
            };
            evidence: {
                max_age_num_blocks: string;
                max_age_duration: {
                    seconds: string;
                    nanos: number;
                };
                max_bytes: string;
            };
            validator: {
                pub_key_types: string[];
            };
        };
        fromAmino: ({ authority, block, evidence, validator }: {
            authority: string;
            block: {
                max_bytes: string;
                max_gas: string;
            };
            evidence: {
                max_age_num_blocks: string;
                max_age_duration: {
                    seconds: string;
                    nanos: number;
                };
                max_bytes: string;
            };
            validator: {
                pub_key_types: string[];
            };
        }) => import("./consensus/v1/tx").MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount }: import("./bank/v1beta1/tx").MsgSend) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ from_address, to_address, amount }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("./bank/v1beta1/tx").MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: ({ inputs, outputs }: import("./bank/v1beta1/tx").MsgMultiSend) => {
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
        fromAmino: ({ inputs, outputs }: {
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
        }) => import("./bank/v1beta1/tx").MsgMultiSend;
    };
    "/cosmos.bank.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./bank/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                send_enabled: {
                    denom: string;
                    enabled: boolean;
                }[];
                default_send_enabled: boolean;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                send_enabled: {
                    denom: string;
                    enabled: boolean;
                }[];
                default_send_enabled: boolean;
            };
        }) => import("./bank/v1beta1/tx").MsgUpdateParams;
    };
    "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
        aminoType: string;
        toAmino: ({ authority, sendEnabled, useDefaultFor }: import("./bank/v1beta1/tx").MsgSetSendEnabled) => {
            authority: string;
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            use_default_for: string[];
        };
        fromAmino: ({ authority, send_enabled, use_default_for }: {
            authority: string;
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            use_default_for: string[];
        }) => import("./bank/v1beta1/tx").MsgSetSendEnabled;
    };
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: string;
        toAmino: ({ granter, grantee, grant }: import("./authz/v1beta1/tx").MsgGrant) => {
            granter: string;
            grantee: string;
            grant: {
                authorization: {
                    type_url: string;
                    value: Uint8Array;
                };
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            };
        };
        fromAmino: ({ granter, grantee, grant }: {
            granter: string;
            grantee: string;
            grant: {
                authorization: {
                    type_url: string;
                    value: Uint8Array;
                };
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            };
        }) => import("./authz/v1beta1/tx").MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: ({ grantee, msgs }: import("./authz/v1beta1/tx").MsgExec) => {
            grantee: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
        };
        fromAmino: ({ grantee, msgs }: {
            grantee: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
        }) => import("./authz/v1beta1/tx").MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: string;
        toAmino: ({ granter, grantee, msgTypeUrl }: import("./authz/v1beta1/tx").MsgRevoke) => {
            granter: string;
            grantee: string;
            msg_type_url: string;
        };
        fromAmino: ({ granter, grantee, msg_type_url }: {
            granter: string;
            grantee: string;
            msg_type_url: string;
        }) => import("./authz/v1beta1/tx").MsgRevoke;
    };
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./auth/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                max_memo_characters: string;
                tx_sig_limit: string;
                tx_size_cost_per_byte: string;
                sig_verify_cost_ed25519: string;
                sig_verify_cost_secp256k1: string;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                max_memo_characters: string;
                tx_sig_limit: string;
                tx_size_cost_per_byte: string;
                sig_verify_cost_ed25519: string;
                sig_verify_cost_secp256k1: string;
            };
        }) => import("./auth/v1beta1/tx").MsgUpdateParams;
    };
};
export declare const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmosClientOptions: () => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmosClient: ({ rpcEndpoint, signer }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
}) => Promise<SigningStargateClient>;
