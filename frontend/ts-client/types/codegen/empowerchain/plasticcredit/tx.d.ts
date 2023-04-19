import { Params, ParamsSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten in keeper). */
    authority: string;
    /**
     * params defines the x/plasitccredit parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten in keeper). */
    authority: string;
    /**
     * params defines the x/plasitccredit parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgCreateIssuer {
    creator: string;
    name: string;
    description: string;
    admin: string;
}
export interface MsgCreateIssuerSDKType {
    creator: string;
    name: string;
    description: string;
    admin: string;
}
export interface MsgCreateIssuerResponse {
    issuerId: Long;
}
export interface MsgCreateIssuerResponseSDKType {
    issuer_id: Long;
}
export interface MsgUpdateIssuer {
    /** updater is the address that is performing the update/sends the tx */
    updater: string;
    issuerId: Long;
    name: string;
    description: string;
    admin: string;
}
export interface MsgUpdateIssuerSDKType {
    /** updater is the address that is performing the update/sends the tx */
    updater: string;
    issuer_id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface MsgUpdateIssuerResponse {
}
export interface MsgUpdateIssuerResponseSDKType {
}
export interface MsgCreateApplicant {
    name: string;
    description: string;
    admin: string;
}
export interface MsgCreateApplicantSDKType {
    name: string;
    description: string;
    admin: string;
}
export interface MsgCreateApplicantResponse {
    applicantId: Long;
}
export interface MsgCreateApplicantResponseSDKType {
    applicant_id: Long;
}
export interface MsgUpdateApplicant {
    /** updater is the address that is performing the update/sends the tx */
    updater: string;
    applicantId: Long;
    name: string;
    description: string;
    admin: string;
}
export interface MsgUpdateApplicantSDKType {
    /** updater is the address that is performing the update/sends the tx */
    updater: string;
    applicant_id: Long;
    name: string;
    description: string;
    admin: string;
}
export interface MsgUpdateApplicantResponse {
}
export interface MsgUpdateApplicantResponseSDKType {
}
export interface MsgCreateCreditClass {
    /** creator is the signer and needs to have permissions on the issuer referenced in issuer_id */
    creator: string;
    /** abbreviation is the short-hand name, as well as the ID of the credit class */
    abbreviation: string;
    /** issuer_id is the ID of the issuer creating and owning the credit class */
    issuerId: Long;
    /** name is the human friendly name of the credits (e.g. Empower Plastic Credits) */
    name: string;
}
export interface MsgCreateCreditClassSDKType {
    /** creator is the signer and needs to have permissions on the issuer referenced in issuer_id */
    creator: string;
    /** abbreviation is the short-hand name, as well as the ID of the credit class */
    abbreviation: string;
    /** issuer_id is the ID of the issuer creating and owning the credit class */
    issuer_id: Long;
    /** name is the human friendly name of the credits (e.g. Empower Plastic Credits) */
    name: string;
}
export interface MsgCreateCreditClassResponse {
}
export interface MsgCreateCreditClassResponseSDKType {
}
export interface MsgUpdateCreditClass {
    /** abbreviation is the short-hand name, as well as the ID of the credit class */
    updater: string;
    abbreviation: string;
    name: string;
}
export interface MsgUpdateCreditClassSDKType {
    /** abbreviation is the short-hand name, as well as the ID of the credit class */
    updater: string;
    abbreviation: string;
    name: string;
}
export interface MsgUpdateCreditClassResponse {
}
export interface MsgUpdateCreditClassResponseSDKType {
}
export interface MsgCreateProject {
    /** creator needs to have access to the applicant references in applicant_id */
    creator: string;
    applicantId: Long;
    creditClassAbbreviation: string;
    name: string;
}
export interface MsgCreateProjectSDKType {
    /** creator needs to have access to the applicant references in applicant_id */
    creator: string;
    applicant_id: Long;
    credit_class_abbreviation: string;
    name: string;
}
export interface MsgCreateProjectResponse {
    projectId: Long;
}
export interface MsgCreateProjectResponseSDKType {
    project_id: Long;
}
export interface MsgUpdateProject {
    /** updater needs to have access to the applicant references in applicant_id */
    updater: string;
    projectId: Long;
    name: string;
}
export interface MsgUpdateProjectSDKType {
    /** updater needs to have access to the applicant references in applicant_id */
    updater: string;
    project_id: Long;
    name: string;
}
export interface MsgUpdateProjectResponse {
}
export interface MsgUpdateProjectResponseSDKType {
}
export interface MsgApproveProject {
    /** Approver needs to be someone who has the authority to approve for the credit class of the project */
    approver: string;
    projectId: Long;
}
export interface MsgApproveProjectSDKType {
    /** Approver needs to be someone who has the authority to approve for the credit class of the project */
    approver: string;
    project_id: Long;
}
export interface MsgApproveProjectResponse {
}
export interface MsgApproveProjectResponseSDKType {
}
export interface MsgRejectProject {
    /** Rejector needs to be someone who has the authority to approve/ reject for the credit class of the project */
    rejector: string;
    projectId: Long;
}
export interface MsgRejectProjectSDKType {
    /** Rejector needs to be someone who has the authority to approve/ reject for the credit class of the project */
    rejector: string;
    project_id: Long;
}
export interface MsgRejectProjectResponse {
}
export interface MsgRejectProjectResponseSDKType {
}
export interface MsgSuspendProject {
    /** updater needs to be someone who has the authority to update for the credit class of the project */
    updater: string;
    projectId: Long;
}
export interface MsgSuspendProjectSDKType {
    /** updater needs to be someone who has the authority to update for the credit class of the project */
    updater: string;
    project_id: Long;
}
export interface MsgSuspendProjectResponse {
}
export interface MsgSuspendProjectResponseSDKType {
}
export interface MsgIssueCredits {
    creator: string;
    projectId: Long;
    serialNumber: string;
    creditAmount: Long;
}
export interface MsgIssueCreditsSDKType {
    creator: string;
    project_id: Long;
    serial_number: string;
    credit_amount: Long;
}
export interface MsgIssueCreditsResponse {
    collection?: CreditCollection;
}
export interface MsgIssueCreditsResponseSDKType {
    collection?: CreditCollectionSDKType;
}
export interface MsgTransferCredits {
    from: string;
    to: string;
    denom: string;
    amount: Long;
    retire: boolean;
}
export interface MsgTransferCreditsSDKType {
    from: string;
    to: string;
    denom: string;
    amount: Long;
    retire: boolean;
}
export interface MsgTransferCreditsResponse {
}
export interface MsgTransferCreditsResponseSDKType {
}
export interface MsgRetireCredits {
    owner: string;
    denom: string;
    amount: Long;
}
export interface MsgRetireCreditsSDKType {
    owner: string;
    denom: string;
    amount: Long;
}
export interface MsgRetireCreditsResponse {
    balance?: CreditBalance;
}
export interface MsgRetireCreditsResponseSDKType {
    balance?: CreditBalanceSDKType;
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgCreateIssuer: {
    encode(message: MsgCreateIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuer;
    fromPartial(object: DeepPartial<MsgCreateIssuer>): MsgCreateIssuer;
};
export declare const MsgCreateIssuerResponse: {
    encode(message: MsgCreateIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuerResponse;
    fromPartial(object: DeepPartial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse;
};
export declare const MsgUpdateIssuer: {
    encode(message: MsgUpdateIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIssuer;
    fromPartial(object: DeepPartial<MsgUpdateIssuer>): MsgUpdateIssuer;
};
export declare const MsgUpdateIssuerResponse: {
    encode(_: MsgUpdateIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIssuerResponse;
    fromPartial(_: DeepPartial<MsgUpdateIssuerResponse>): MsgUpdateIssuerResponse;
};
export declare const MsgCreateApplicant: {
    encode(message: MsgCreateApplicant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateApplicant;
    fromPartial(object: DeepPartial<MsgCreateApplicant>): MsgCreateApplicant;
};
export declare const MsgCreateApplicantResponse: {
    encode(message: MsgCreateApplicantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateApplicantResponse;
    fromPartial(object: DeepPartial<MsgCreateApplicantResponse>): MsgCreateApplicantResponse;
};
export declare const MsgUpdateApplicant: {
    encode(message: MsgUpdateApplicant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateApplicant;
    fromPartial(object: DeepPartial<MsgUpdateApplicant>): MsgUpdateApplicant;
};
export declare const MsgUpdateApplicantResponse: {
    encode(_: MsgUpdateApplicantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateApplicantResponse;
    fromPartial(_: DeepPartial<MsgUpdateApplicantResponse>): MsgUpdateApplicantResponse;
};
export declare const MsgCreateCreditClass: {
    encode(message: MsgCreateCreditClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCreditClass;
    fromPartial(object: DeepPartial<MsgCreateCreditClass>): MsgCreateCreditClass;
};
export declare const MsgCreateCreditClassResponse: {
    encode(_: MsgCreateCreditClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCreditClassResponse;
    fromPartial(_: DeepPartial<MsgCreateCreditClassResponse>): MsgCreateCreditClassResponse;
};
export declare const MsgUpdateCreditClass: {
    encode(message: MsgUpdateCreditClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCreditClass;
    fromPartial(object: DeepPartial<MsgUpdateCreditClass>): MsgUpdateCreditClass;
};
export declare const MsgUpdateCreditClassResponse: {
    encode(_: MsgUpdateCreditClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCreditClassResponse;
    fromPartial(_: DeepPartial<MsgUpdateCreditClassResponse>): MsgUpdateCreditClassResponse;
};
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject;
    fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(message: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgUpdateProject: {
    encode(message: MsgUpdateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProject;
    fromPartial(object: DeepPartial<MsgUpdateProject>): MsgUpdateProject;
};
export declare const MsgUpdateProjectResponse: {
    encode(_: MsgUpdateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectResponse;
    fromPartial(_: DeepPartial<MsgUpdateProjectResponse>): MsgUpdateProjectResponse;
};
export declare const MsgApproveProject: {
    encode(message: MsgApproveProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveProject;
    fromPartial(object: DeepPartial<MsgApproveProject>): MsgApproveProject;
};
export declare const MsgApproveProjectResponse: {
    encode(_: MsgApproveProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveProjectResponse;
    fromPartial(_: DeepPartial<MsgApproveProjectResponse>): MsgApproveProjectResponse;
};
export declare const MsgRejectProject: {
    encode(message: MsgRejectProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectProject;
    fromPartial(object: DeepPartial<MsgRejectProject>): MsgRejectProject;
};
export declare const MsgRejectProjectResponse: {
    encode(_: MsgRejectProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectProjectResponse;
    fromPartial(_: DeepPartial<MsgRejectProjectResponse>): MsgRejectProjectResponse;
};
export declare const MsgSuspendProject: {
    encode(message: MsgSuspendProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuspendProject;
    fromPartial(object: DeepPartial<MsgSuspendProject>): MsgSuspendProject;
};
export declare const MsgSuspendProjectResponse: {
    encode(_: MsgSuspendProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuspendProjectResponse;
    fromPartial(_: DeepPartial<MsgSuspendProjectResponse>): MsgSuspendProjectResponse;
};
export declare const MsgIssueCredits: {
    encode(message: MsgIssueCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCredits;
    fromPartial(object: DeepPartial<MsgIssueCredits>): MsgIssueCredits;
};
export declare const MsgIssueCreditsResponse: {
    encode(message: MsgIssueCreditsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCreditsResponse;
    fromPartial(object: DeepPartial<MsgIssueCreditsResponse>): MsgIssueCreditsResponse;
};
export declare const MsgTransferCredits: {
    encode(message: MsgTransferCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCredits;
    fromPartial(object: DeepPartial<MsgTransferCredits>): MsgTransferCredits;
};
export declare const MsgTransferCreditsResponse: {
    encode(_: MsgTransferCreditsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCreditsResponse;
    fromPartial(_: DeepPartial<MsgTransferCreditsResponse>): MsgTransferCreditsResponse;
};
export declare const MsgRetireCredits: {
    encode(message: MsgRetireCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireCredits;
    fromPartial(object: DeepPartial<MsgRetireCredits>): MsgRetireCredits;
};
export declare const MsgRetireCreditsResponse: {
    encode(message: MsgRetireCreditsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireCreditsResponse;
    fromPartial(object: DeepPartial<MsgRetireCreditsResponse>): MsgRetireCreditsResponse;
};
