import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** EventCreateIssuer is an event emitted when a new issuer is created */
export interface EventCreateIssuer {
    issuerId: Long;
    creator: string;
    name: string;
    description: string;
    admin: string;
}
/** EventCreateIssuer is an event emitted when a new issuer is created */
export interface EventCreateIssuerSDKType {
    issuer_id: Long;
    creator: string;
    name: string;
    description: string;
    admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */
export interface EventUpdateIssuer {
    issuerId: Long;
    creator: string;
    name: string;
    description: string;
    admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */
export interface EventUpdateIssuerSDKType {
    issuer_id: Long;
    creator: string;
    name: string;
    description: string;
    admin: string;
}
/** EventCreateProject is an event emitted when a new Project is created */
export interface EventCreateProject {
    creator: string;
    applicantId: Long;
    creditClassAbbreviation: string;
    name: string;
}
/** EventCreateProject is an event emitted when a new Project is created */
export interface EventCreateProjectSDKType {
    creator: string;
    applicant_id: Long;
    credit_class_abbreviation: string;
    name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */
export interface EventUpdateProject {
    updater: string;
    projectId: Long;
    name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */
export interface EventUpdateProjectSDKType {
    updater: string;
    project_id: Long;
    name: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit class */
export interface EventProjectApproved {
    projectId: Long;
    approvedForCreditClassAbbreviation: string;
    approvingIssuerId: Long;
    approvedBy: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit class */
export interface EventProjectApprovedSDKType {
    project_id: Long;
    approved_for_credit_class_abbreviation: string;
    approving_issuer_id: Long;
    approved_by: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit class */
export interface EventProjectRejected {
    projectId: Long;
    rejectedForCreditClassAbbreviation: string;
    rejectingIssuerId: Long;
    rejectedBy: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit class */
export interface EventProjectRejectedSDKType {
    project_id: Long;
    rejected_for_credit_class_abbreviation: string;
    rejecting_issuer_id: Long;
    rejected_by: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit class */
export interface EventProjectSuspended {
    projectId: Long;
    suspendedForCreditClassAbbreviation: string;
    suspendingIssuerId: Long;
    suspendedBy: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit class */
export interface EventProjectSuspendedSDKType {
    project_id: Long;
    suspended_for_credit_class_abbreviation: string;
    suspending_issuer_id: Long;
    suspended_by: string;
}
/** EventIssuedCredits is an event emitted when new credits are issued */
export interface EventIssuedCredits {
    issuerId: Long;
    projectId: Long;
    creditClassAbbreviation: string;
    denom: string;
    amount: Long;
    issuerAddress: string;
}
/** EventIssuedCredits is an event emitted when new credits are issued */
export interface EventIssuedCreditsSDKType {
    issuer_id: Long;
    project_id: Long;
    credit_class_abbreviation: string;
    denom: string;
    amount: Long;
    issuer_address: string;
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */
export interface EventTransferCredits {
    sender: string;
    recipient: string;
    denom: string;
    amount: Long;
    issuerId: Long;
    creditClassAbbreviation: string;
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */
export interface EventTransferCreditsSDKType {
    sender: string;
    recipient: string;
    denom: string;
    amount: Long;
    issuer_id: Long;
    credit_class_abbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */
export interface EventRetiredCredits {
    owner: string;
    denom: string;
    amount: Long;
    issuerId: Long;
    creditClassAbbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */
export interface EventRetiredCreditsSDKType {
    owner: string;
    denom: string;
    amount: Long;
    issuer_id: Long;
    credit_class_abbreviation: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */
export interface EventCreateApplicant {
    applicantId: Long;
    name: string;
    description: string;
    admin: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */
export interface EventCreateApplicantSDKType {
    applicant_id: Long;
    name: string;
    description: string;
    admin: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */
export interface EventUpdateApplicant {
    applicantId: Long;
    name: string;
    description: string;
    admin: string;
    updater: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */
export interface EventUpdateApplicantSDKType {
    applicant_id: Long;
    name: string;
    description: string;
    admin: string;
    updater: string;
}
/** EventCreateCreditClass is an event emitted when a new Credit Class is created */
export interface EventCreateCreditClass {
    creator: string;
    abbreviation: string;
    issuerId: Long;
    name: string;
}
/** EventCreateCreditClass is an event emitted when a new Credit Class is created */
export interface EventCreateCreditClassSDKType {
    creator: string;
    abbreviation: string;
    issuer_id: Long;
    name: string;
}
/** EventUpdateCreditClass is an event emitted when a Credit Class is updated */
export interface EventUpdateCreditClass {
    updater: string;
    abbreviation: string;
    name: string;
}
/** EventUpdateCreditClass is an event emitted when a Credit Class is updated */
export interface EventUpdateCreditClassSDKType {
    updater: string;
    abbreviation: string;
    name: string;
}
export declare const EventCreateIssuer: {
    encode(message: EventCreateIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateIssuer;
    fromPartial(object: DeepPartial<EventCreateIssuer>): EventCreateIssuer;
};
export declare const EventUpdateIssuer: {
    encode(message: EventUpdateIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateIssuer;
    fromPartial(object: DeepPartial<EventUpdateIssuer>): EventUpdateIssuer;
};
export declare const EventCreateProject: {
    encode(message: EventCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject;
    fromPartial(object: DeepPartial<EventCreateProject>): EventCreateProject;
};
export declare const EventUpdateProject: {
    encode(message: EventUpdateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProject;
    fromPartial(object: DeepPartial<EventUpdateProject>): EventUpdateProject;
};
export declare const EventProjectApproved: {
    encode(message: EventProjectApproved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectApproved;
    fromPartial(object: DeepPartial<EventProjectApproved>): EventProjectApproved;
};
export declare const EventProjectRejected: {
    encode(message: EventProjectRejected, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectRejected;
    fromPartial(object: DeepPartial<EventProjectRejected>): EventProjectRejected;
};
export declare const EventProjectSuspended: {
    encode(message: EventProjectSuspended, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectSuspended;
    fromPartial(object: DeepPartial<EventProjectSuspended>): EventProjectSuspended;
};
export declare const EventIssuedCredits: {
    encode(message: EventIssuedCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssuedCredits;
    fromPartial(object: DeepPartial<EventIssuedCredits>): EventIssuedCredits;
};
export declare const EventTransferCredits: {
    encode(message: EventTransferCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCredits;
    fromPartial(object: DeepPartial<EventTransferCredits>): EventTransferCredits;
};
export declare const EventRetiredCredits: {
    encode(message: EventRetiredCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRetiredCredits;
    fromPartial(object: DeepPartial<EventRetiredCredits>): EventRetiredCredits;
};
export declare const EventCreateApplicant: {
    encode(message: EventCreateApplicant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateApplicant;
    fromPartial(object: DeepPartial<EventCreateApplicant>): EventCreateApplicant;
};
export declare const EventUpdateApplicant: {
    encode(message: EventUpdateApplicant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateApplicant;
    fromPartial(object: DeepPartial<EventUpdateApplicant>): EventUpdateApplicant;
};
export declare const EventCreateCreditClass: {
    encode(message: EventCreateCreditClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCreditClass;
    fromPartial(object: DeepPartial<EventCreateCreditClass>): EventCreateCreditClass;
};
export declare const EventUpdateCreditClass: {
    encode(message: EventUpdateCreditClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCreditClass;
    fromPartial(object: DeepPartial<EventUpdateCreditClass>): EventUpdateCreditClass;
};
