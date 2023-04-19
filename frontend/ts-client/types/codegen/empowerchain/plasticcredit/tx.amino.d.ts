import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditClass, MsgUpdateCreditClass, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            issuer_creator: string;
            credit_class_creation_fee: {
                denom: string;
                amount: string;
            };
        };
    };
}
export interface AminoMsgCreateIssuer extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgCreateIssuer";
    value: {
        creator: string;
        name: string;
        description: string;
        admin: string;
    };
}
export interface AminoMsgUpdateIssuer extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgUpdateIssuer";
    value: {
        updater: string;
        issuer_id: string;
        name: string;
        description: string;
        admin: string;
    };
}
export interface AminoMsgCreateApplicant extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgCreateApplicant";
    value: {
        name: string;
        description: string;
        admin: string;
    };
}
export interface AminoMsgUpdateApplicant extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgUpdateApplicant";
    value: {
        updater: string;
        applicant_id: string;
        name: string;
        description: string;
        admin: string;
    };
}
export interface AminoMsgCreateCreditClass extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgCreateCreditClass";
    value: {
        creator: string;
        abbreviation: string;
        issuer_id: string;
        name: string;
    };
}
export interface AminoMsgUpdateCreditClass extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgUpdateCreditClass";
    value: {
        updater: string;
        abbreviation: string;
        name: string;
    };
}
export interface AminoMsgCreateProject extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgCreateProject";
    value: {
        creator: string;
        applicant_id: string;
        credit_class_abbreviation: string;
        name: string;
    };
}
export interface AminoMsgUpdateProject extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgUpdateProject";
    value: {
        updater: string;
        project_id: string;
        name: string;
    };
}
export interface AminoMsgApproveProject extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgApproveProject";
    value: {
        approver: string;
        project_id: string;
    };
}
export interface AminoMsgRejectProject extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgRejectProject";
    value: {
        rejector: string;
        project_id: string;
    };
}
export interface AminoMsgSuspendProject extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgSuspendProject";
    value: {
        updater: string;
        project_id: string;
    };
}
export interface AminoMsgIssueCredits extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgIssueCredits";
    value: {
        creator: string;
        project_id: string;
        serial_number: string;
        credit_amount: string;
    };
}
export interface AminoMsgTransferCredits extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgTransferCredits";
    value: {
        from: string;
        to: string;
        denom: string;
        amount: string;
        retire: boolean;
    };
}
export interface AminoMsgRetireCredits extends AminoMsg {
    type: "/empowerchain.plasticcredit.MsgRetireCredits";
    value: {
        owner: string;
        denom: string;
        amount: string;
    };
}
export declare const AminoConverter: {
    "/empowerchain.plasticcredit.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
    "/empowerchain.plasticcredit.MsgCreateIssuer": {
        aminoType: string;
        toAmino: ({ creator, name, description, admin }: MsgCreateIssuer) => AminoMsgCreateIssuer["value"];
        fromAmino: ({ creator, name, description, admin }: AminoMsgCreateIssuer["value"]) => MsgCreateIssuer;
    };
    "/empowerchain.plasticcredit.MsgUpdateIssuer": {
        aminoType: string;
        toAmino: ({ updater, issuerId, name, description, admin }: MsgUpdateIssuer) => AminoMsgUpdateIssuer["value"];
        fromAmino: ({ updater, issuer_id, name, description, admin }: AminoMsgUpdateIssuer["value"]) => MsgUpdateIssuer;
    };
    "/empowerchain.plasticcredit.MsgCreateApplicant": {
        aminoType: string;
        toAmino: ({ name, description, admin }: MsgCreateApplicant) => AminoMsgCreateApplicant["value"];
        fromAmino: ({ name, description, admin }: AminoMsgCreateApplicant["value"]) => MsgCreateApplicant;
    };
    "/empowerchain.plasticcredit.MsgUpdateApplicant": {
        aminoType: string;
        toAmino: ({ updater, applicantId, name, description, admin }: MsgUpdateApplicant) => AminoMsgUpdateApplicant["value"];
        fromAmino: ({ updater, applicant_id, name, description, admin }: AminoMsgUpdateApplicant["value"]) => MsgUpdateApplicant;
    };
    "/empowerchain.plasticcredit.MsgCreateCreditClass": {
        aminoType: string;
        toAmino: ({ creator, abbreviation, issuerId, name }: MsgCreateCreditClass) => AminoMsgCreateCreditClass["value"];
        fromAmino: ({ creator, abbreviation, issuer_id, name }: AminoMsgCreateCreditClass["value"]) => MsgCreateCreditClass;
    };
    "/empowerchain.plasticcredit.MsgUpdateCreditClass": {
        aminoType: string;
        toAmino: ({ updater, abbreviation, name }: MsgUpdateCreditClass) => AminoMsgUpdateCreditClass["value"];
        fromAmino: ({ updater, abbreviation, name }: AminoMsgUpdateCreditClass["value"]) => MsgUpdateCreditClass;
    };
    "/empowerchain.plasticcredit.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ creator, applicantId, creditClassAbbreviation, name }: MsgCreateProject) => AminoMsgCreateProject["value"];
        fromAmino: ({ creator, applicant_id, credit_class_abbreviation, name }: AminoMsgCreateProject["value"]) => MsgCreateProject;
    };
    "/empowerchain.plasticcredit.MsgUpdateProject": {
        aminoType: string;
        toAmino: ({ updater, projectId, name }: MsgUpdateProject) => AminoMsgUpdateProject["value"];
        fromAmino: ({ updater, project_id, name }: AminoMsgUpdateProject["value"]) => MsgUpdateProject;
    };
    "/empowerchain.plasticcredit.MsgApproveProject": {
        aminoType: string;
        toAmino: ({ approver, projectId }: MsgApproveProject) => AminoMsgApproveProject["value"];
        fromAmino: ({ approver, project_id }: AminoMsgApproveProject["value"]) => MsgApproveProject;
    };
    "/empowerchain.plasticcredit.MsgRejectProject": {
        aminoType: string;
        toAmino: ({ rejector, projectId }: MsgRejectProject) => AminoMsgRejectProject["value"];
        fromAmino: ({ rejector, project_id }: AminoMsgRejectProject["value"]) => MsgRejectProject;
    };
    "/empowerchain.plasticcredit.MsgSuspendProject": {
        aminoType: string;
        toAmino: ({ updater, projectId }: MsgSuspendProject) => AminoMsgSuspendProject["value"];
        fromAmino: ({ updater, project_id }: AminoMsgSuspendProject["value"]) => MsgSuspendProject;
    };
    "/empowerchain.plasticcredit.MsgIssueCredits": {
        aminoType: string;
        toAmino: ({ creator, projectId, serialNumber, creditAmount }: MsgIssueCredits) => AminoMsgIssueCredits["value"];
        fromAmino: ({ creator, project_id, serial_number, credit_amount }: AminoMsgIssueCredits["value"]) => MsgIssueCredits;
    };
    "/empowerchain.plasticcredit.MsgTransferCredits": {
        aminoType: string;
        toAmino: ({ from, to, denom, amount, retire }: MsgTransferCredits) => AminoMsgTransferCredits["value"];
        fromAmino: ({ from, to, denom, amount, retire }: AminoMsgTransferCredits["value"]) => MsgTransferCredits;
    };
    "/empowerchain.plasticcredit.MsgRetireCredits": {
        aminoType: string;
        toAmino: ({ owner, denom, amount }: MsgRetireCredits) => AminoMsgRetireCredits["value"];
        fromAmino: ({ owner, denom, amount }: AminoMsgRetireCredits["value"]) => MsgRetireCredits;
    };
};
