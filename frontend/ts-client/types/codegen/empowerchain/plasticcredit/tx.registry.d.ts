import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditClass, MsgUpdateCreditClass, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateIssuer(value: MsgUpdateIssuer): {
            typeUrl: string;
            value: Uint8Array;
        };
        createApplicant(value: MsgCreateApplicant): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateApplicant(value: MsgUpdateApplicant): {
            typeUrl: string;
            value: Uint8Array;
        };
        createCreditClass(value: MsgCreateCreditClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateCreditClass(value: MsgUpdateCreditClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProject(value: MsgUpdateProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        approveProject(value: MsgApproveProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        rejectProject(value: MsgRejectProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        suspendProject(value: MsgSuspendProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        issueCredits(value: MsgIssueCredits): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferCredits(value: MsgTransferCredits): {
            typeUrl: string;
            value: Uint8Array;
        };
        retireCredits(value: MsgRetireCredits): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: MsgCreateIssuer;
        };
        updateIssuer(value: MsgUpdateIssuer): {
            typeUrl: string;
            value: MsgUpdateIssuer;
        };
        createApplicant(value: MsgCreateApplicant): {
            typeUrl: string;
            value: MsgCreateApplicant;
        };
        updateApplicant(value: MsgUpdateApplicant): {
            typeUrl: string;
            value: MsgUpdateApplicant;
        };
        createCreditClass(value: MsgCreateCreditClass): {
            typeUrl: string;
            value: MsgCreateCreditClass;
        };
        updateCreditClass(value: MsgUpdateCreditClass): {
            typeUrl: string;
            value: MsgUpdateCreditClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        updateProject(value: MsgUpdateProject): {
            typeUrl: string;
            value: MsgUpdateProject;
        };
        approveProject(value: MsgApproveProject): {
            typeUrl: string;
            value: MsgApproveProject;
        };
        rejectProject(value: MsgRejectProject): {
            typeUrl: string;
            value: MsgRejectProject;
        };
        suspendProject(value: MsgSuspendProject): {
            typeUrl: string;
            value: MsgSuspendProject;
        };
        issueCredits(value: MsgIssueCredits): {
            typeUrl: string;
            value: MsgIssueCredits;
        };
        transferCredits(value: MsgTransferCredits): {
            typeUrl: string;
            value: MsgTransferCredits;
        };
        retireCredits(value: MsgRetireCredits): {
            typeUrl: string;
            value: MsgRetireCredits;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createIssuer(value: MsgCreateIssuer): {
            typeUrl: string;
            value: MsgCreateIssuer;
        };
        updateIssuer(value: MsgUpdateIssuer): {
            typeUrl: string;
            value: MsgUpdateIssuer;
        };
        createApplicant(value: MsgCreateApplicant): {
            typeUrl: string;
            value: MsgCreateApplicant;
        };
        updateApplicant(value: MsgUpdateApplicant): {
            typeUrl: string;
            value: MsgUpdateApplicant;
        };
        createCreditClass(value: MsgCreateCreditClass): {
            typeUrl: string;
            value: MsgCreateCreditClass;
        };
        updateCreditClass(value: MsgUpdateCreditClass): {
            typeUrl: string;
            value: MsgUpdateCreditClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        updateProject(value: MsgUpdateProject): {
            typeUrl: string;
            value: MsgUpdateProject;
        };
        approveProject(value: MsgApproveProject): {
            typeUrl: string;
            value: MsgApproveProject;
        };
        rejectProject(value: MsgRejectProject): {
            typeUrl: string;
            value: MsgRejectProject;
        };
        suspendProject(value: MsgSuspendProject): {
            typeUrl: string;
            value: MsgSuspendProject;
        };
        issueCredits(value: MsgIssueCredits): {
            typeUrl: string;
            value: MsgIssueCredits;
        };
        transferCredits(value: MsgTransferCredits): {
            typeUrl: string;
            value: MsgTransferCredits;
        };
        retireCredits(value: MsgRetireCredits): {
            typeUrl: string;
            value: MsgRetireCredits;
        };
    };
};
