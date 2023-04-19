import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const empowerchainAminoConverters: {
    "/empowerchain.proofofexistence.MsgCreateProof": {
        aminoType: string;
        toAmino: ({ creator, hash }: import("./proofofexistence/tx").MsgCreateProof) => {
            creator: string;
            hash: string;
        };
        fromAmino: ({ creator, hash }: {
            creator: string;
            hash: string;
        }) => import("./proofofexistence/tx").MsgCreateProof;
    };
    "/empowerchain.plasticcredit.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./plasticcredit/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                issuer_creator: string;
                credit_class_creation_fee: {
                    denom: string;
                    amount: string;
                };
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                issuer_creator: string;
                credit_class_creation_fee: {
                    denom: string;
                    amount: string;
                };
            };
        }) => import("./plasticcredit/tx").MsgUpdateParams;
    };
    "/empowerchain.plasticcredit.MsgCreateIssuer": {
        aminoType: string;
        toAmino: ({ creator, name, description, admin }: import("./plasticcredit/tx").MsgCreateIssuer) => {
            creator: string;
            name: string;
            description: string;
            admin: string;
        };
        fromAmino: ({ creator, name, description, admin }: {
            creator: string;
            name: string;
            description: string;
            admin: string;
        }) => import("./plasticcredit/tx").MsgCreateIssuer;
    };
    "/empowerchain.plasticcredit.MsgUpdateIssuer": {
        aminoType: string;
        toAmino: ({ updater, issuerId, name, description, admin }: import("./plasticcredit/tx").MsgUpdateIssuer) => {
            updater: string;
            issuer_id: string;
            name: string;
            description: string;
            admin: string;
        };
        fromAmino: ({ updater, issuer_id, name, description, admin }: {
            updater: string;
            issuer_id: string;
            name: string;
            description: string;
            admin: string;
        }) => import("./plasticcredit/tx").MsgUpdateIssuer;
    };
    "/empowerchain.plasticcredit.MsgCreateApplicant": {
        aminoType: string;
        toAmino: ({ name, description, admin }: import("./plasticcredit/tx").MsgCreateApplicant) => {
            name: string;
            description: string;
            admin: string;
        };
        fromAmino: ({ name, description, admin }: {
            name: string;
            description: string;
            admin: string;
        }) => import("./plasticcredit/tx").MsgCreateApplicant;
    };
    "/empowerchain.plasticcredit.MsgUpdateApplicant": {
        aminoType: string;
        toAmino: ({ updater, applicantId, name, description, admin }: import("./plasticcredit/tx").MsgUpdateApplicant) => {
            updater: string;
            applicant_id: string;
            name: string;
            description: string;
            admin: string;
        };
        fromAmino: ({ updater, applicant_id, name, description, admin }: {
            updater: string;
            applicant_id: string;
            name: string;
            description: string;
            admin: string;
        }) => import("./plasticcredit/tx").MsgUpdateApplicant;
    };
    "/empowerchain.plasticcredit.MsgCreateCreditClass": {
        aminoType: string;
        toAmino: ({ creator, abbreviation, issuerId, name }: import("./plasticcredit/tx").MsgCreateCreditClass) => {
            creator: string;
            abbreviation: string;
            issuer_id: string;
            name: string;
        };
        fromAmino: ({ creator, abbreviation, issuer_id, name }: {
            creator: string;
            abbreviation: string;
            issuer_id: string;
            name: string;
        }) => import("./plasticcredit/tx").MsgCreateCreditClass;
    };
    "/empowerchain.plasticcredit.MsgUpdateCreditClass": {
        aminoType: string;
        toAmino: ({ updater, abbreviation, name }: import("./plasticcredit/tx").MsgUpdateCreditClass) => {
            updater: string;
            abbreviation: string;
            name: string;
        };
        fromAmino: ({ updater, abbreviation, name }: {
            updater: string;
            abbreviation: string;
            name: string;
        }) => import("./plasticcredit/tx").MsgUpdateCreditClass;
    };
    "/empowerchain.plasticcredit.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ creator, applicantId, creditClassAbbreviation, name }: import("./plasticcredit/tx").MsgCreateProject) => {
            creator: string;
            applicant_id: string;
            credit_class_abbreviation: string;
            name: string;
        };
        fromAmino: ({ creator, applicant_id, credit_class_abbreviation, name }: {
            creator: string;
            applicant_id: string;
            credit_class_abbreviation: string;
            name: string;
        }) => import("./plasticcredit/tx").MsgCreateProject;
    };
    "/empowerchain.plasticcredit.MsgUpdateProject": {
        aminoType: string;
        toAmino: ({ updater, projectId, name }: import("./plasticcredit/tx").MsgUpdateProject) => {
            updater: string;
            project_id: string;
            name: string;
        };
        fromAmino: ({ updater, project_id, name }: {
            updater: string;
            project_id: string;
            name: string;
        }) => import("./plasticcredit/tx").MsgUpdateProject;
    };
    "/empowerchain.plasticcredit.MsgApproveProject": {
        aminoType: string;
        toAmino: ({ approver, projectId }: import("./plasticcredit/tx").MsgApproveProject) => {
            approver: string;
            project_id: string;
        };
        fromAmino: ({ approver, project_id }: {
            approver: string;
            project_id: string;
        }) => import("./plasticcredit/tx").MsgApproveProject;
    };
    "/empowerchain.plasticcredit.MsgRejectProject": {
        aminoType: string;
        toAmino: ({ rejector, projectId }: import("./plasticcredit/tx").MsgRejectProject) => {
            rejector: string;
            project_id: string;
        };
        fromAmino: ({ rejector, project_id }: {
            rejector: string;
            project_id: string;
        }) => import("./plasticcredit/tx").MsgRejectProject;
    };
    "/empowerchain.plasticcredit.MsgSuspendProject": {
        aminoType: string;
        toAmino: ({ updater, projectId }: import("./plasticcredit/tx").MsgSuspendProject) => {
            updater: string;
            project_id: string;
        };
        fromAmino: ({ updater, project_id }: {
            updater: string;
            project_id: string;
        }) => import("./plasticcredit/tx").MsgSuspendProject;
    };
    "/empowerchain.plasticcredit.MsgIssueCredits": {
        aminoType: string;
        toAmino: ({ creator, projectId, serialNumber, creditAmount }: import("./plasticcredit/tx").MsgIssueCredits) => {
            creator: string;
            project_id: string;
            serial_number: string;
            credit_amount: string;
        };
        fromAmino: ({ creator, project_id, serial_number, credit_amount }: {
            creator: string;
            project_id: string;
            serial_number: string;
            credit_amount: string;
        }) => import("./plasticcredit/tx").MsgIssueCredits;
    };
    "/empowerchain.plasticcredit.MsgTransferCredits": {
        aminoType: string;
        toAmino: ({ from, to, denom, amount, retire }: import("./plasticcredit/tx").MsgTransferCredits) => {
            from: string;
            to: string;
            denom: string;
            amount: string;
            retire: boolean;
        };
        fromAmino: ({ from, to, denom, amount, retire }: {
            from: string;
            to: string;
            denom: string;
            amount: string;
            retire: boolean;
        }) => import("./plasticcredit/tx").MsgTransferCredits;
    };
    "/empowerchain.plasticcredit.MsgRetireCredits": {
        aminoType: string;
        toAmino: ({ owner, denom, amount }: import("./plasticcredit/tx").MsgRetireCredits) => {
            owner: string;
            denom: string;
            amount: string;
        };
        fromAmino: ({ owner, denom, amount }: {
            owner: string;
            denom: string;
            amount: string;
        }) => import("./plasticcredit/tx").MsgRetireCredits;
    };
};
export declare const empowerchainProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEmpowerchainClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEmpowerchainClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
