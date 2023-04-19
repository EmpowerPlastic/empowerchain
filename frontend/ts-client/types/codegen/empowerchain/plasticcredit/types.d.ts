import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export declare enum ProjectStatus {
    NEW = 0,
    APPROVED = 1,
    REJECTED = 2,
    SUSPENDED = 3,
    UNRECOGNIZED = -1
}
export declare enum ProjectStatusSDKType {
    NEW = 0,
    APPROVED = 1,
    REJECTED = 2,
    SUSPENDED = 3,
    UNRECOGNIZED = -1
}
export declare function projectStatusFromJSON(object: any): ProjectStatus;
export declare function projectStatusToJSON(object: ProjectStatus): string;
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * issuer_creator is the address that is allowed to create new issuers
     * defaults to the governance account, but can be changed by governance (to, for instance, a DAO/group/multisig)
     */
    issuerCreator: string;
    /**
     * credit_class_creation_fee is the fee that is charged for creating a new credit class
     * defaults to 50 $MPWR, but can be changed by governance
     */
    creditClassCreationFee?: Coin;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    /**
     * issuer_creator is the address that is allowed to create new issuers
     * defaults to the governance account, but can be changed by governance (to, for instance, a DAO/group/multisig)
     */
    issuer_creator: string;
    /**
     * credit_class_creation_fee is the fee that is charged for creating a new credit class
     * defaults to 50 $MPWR, but can be changed by governance
     */
    credit_class_creation_fee?: CoinSDKType;
}
export interface IDCounters {
    nextIssuerId: Long;
    nextApplicantId: Long;
    nextProjectId: Long;
}
export interface IDCountersSDKType {
    next_issuer_id: Long;
    next_applicant_id: Long;
    next_project_id: Long;
}
export interface Issuer {
    id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface IssuerSDKType {
    id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface Applicant {
    id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface ApplicantSDKType {
    id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface CreditClass {
    /** abbreviation is the short-hand name *and* the identifier for a credit class */
    abbreviation: string;
    issuerId: Long;
    name: string;
}
export interface CreditClassSDKType {
    /** abbreviation is the short-hand name *and* the identifier for a credit class */
    abbreviation: string;
    issuer_id: Long;
    name: string;
}
export interface Project {
    id: Long;
    applicantId: Long;
    creditClassAbbreviation: string;
    name: string;
    status: ProjectStatus;
}
export interface ProjectSDKType {
    id: Long;
    applicant_id: Long;
    credit_class_abbreviation: string;
    name: string;
    status: ProjectStatusSDKType;
}
export interface CreditCollection {
    /** denominator of the credit, store key */
    denom: string;
    /** ID of a project related to the collection */
    projectId: Long;
    /** Total amount of active and retired credits for the collection */
    totalAmount?: CreditAmount;
}
export interface CreditCollectionSDKType {
    /** denominator of the credit, store key */
    denom: string;
    /** ID of a project related to the collection */
    project_id: Long;
    /** Total amount of active and retired credits for the collection */
    total_amount?: CreditAmountSDKType;
}
export interface CreditBalance {
    /** Address of the credits owner, part of compound key */
    owner: string;
    /** denominator of the credit, apart of compound key */
    denom: string;
    /** Number of active and retired credits */
    balance?: CreditAmount;
}
export interface CreditBalanceSDKType {
    /** Address of the credits owner, part of compound key */
    owner: string;
    /** denominator of the credit, apart of compound key */
    denom: string;
    /** Number of active and retired credits */
    balance?: CreditAmountSDKType;
}
export interface CreditAmount {
    active: Long;
    retired: Long;
}
export interface CreditAmountSDKType {
    active: Long;
    retired: Long;
}
export interface ProvenData {
    uri: string;
    hash: string;
}
export interface ProvenDataSDKType {
    uri: string;
    hash: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const IDCounters: {
    encode(message: IDCounters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDCounters;
    fromPartial(object: DeepPartial<IDCounters>): IDCounters;
};
export declare const Issuer: {
    encode(message: Issuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Issuer;
    fromPartial(object: DeepPartial<Issuer>): Issuer;
};
export declare const Applicant: {
    encode(message: Applicant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Applicant;
    fromPartial(object: DeepPartial<Applicant>): Applicant;
};
export declare const CreditClass: {
    encode(message: CreditClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditClass;
    fromPartial(object: DeepPartial<CreditClass>): CreditClass;
};
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromPartial(object: DeepPartial<Project>): Project;
};
export declare const CreditCollection: {
    encode(message: CreditCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditCollection;
    fromPartial(object: DeepPartial<CreditCollection>): CreditCollection;
};
export declare const CreditBalance: {
    encode(message: CreditBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditBalance;
    fromPartial(object: DeepPartial<CreditBalance>): CreditBalance;
};
export declare const CreditAmount: {
    encode(message: CreditAmount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditAmount;
    fromPartial(object: DeepPartial<CreditAmount>): CreditAmount;
};
export declare const ProvenData: {
    encode(message: ProvenData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProvenData;
    fromPartial(object: DeepPartial<ProvenData>): ProvenData;
};
