import { Rpc } from "../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateIssuer, MsgCreateIssuerResponse, MsgUpdateIssuer, MsgUpdateIssuerResponse, MsgCreateApplicant, MsgCreateApplicantResponse, MsgUpdateApplicant, MsgUpdateApplicantResponse, MsgCreateCreditClass, MsgCreateCreditClassResponse, MsgUpdateCreditClass, MsgUpdateCreditClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgUpdateProject, MsgUpdateProjectResponse, MsgApproveProject, MsgApproveProjectResponse, MsgRejectProject, MsgRejectProjectResponse, MsgSuspendProject, MsgSuspendProjectResponse, MsgIssueCredits, MsgIssueCreditsResponse, MsgTransferCredits, MsgTransferCreditsResponse, MsgRetireCredits, MsgRetireCreditsResponse } from "./tx";
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/plasticcredit module parameters.
     * The authority is defined in the keeper.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * CreateIssuer creates a new Issuer that can create credit classes and issue new credits with those classes
     * There is only a single signer in the system that is allowed to create new issuers and it is defined in Params as "issuer_creator"
     */
    createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
    /**
     * UpdateIssuer updates an existing issuer details.
     * The only entity that is allowed to change an issue is the address defined in the issuer as "admin"
     */
    updateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse>;
    /** CreateApplicant creates a new Applicant that can create and apply for projects, for which plastic credits can be issued */
    createApplicant(request: MsgCreateApplicant): Promise<MsgCreateApplicantResponse>;
    /** UpdateApplicant updates an existing Applicant by admin */
    updateApplicant(request: MsgUpdateApplicant): Promise<MsgUpdateApplicantResponse>;
    /** CreateCreditClass creates a new Credit Class for an issuer. */
    createCreditClass(request: MsgCreateCreditClass): Promise<MsgCreateCreditClassResponse>;
    /** UpdateCreditClass update an existing Credit Class for an issuer. Only the admin from the Issuer that owns the Credit Class is allowed and only change the name */
    updateCreditClass(request: MsgUpdateCreditClass): Promise<MsgUpdateCreditClassResponse>;
    /** CreateProject creates a new Project for an applicant that can be approved be an issuer for issuing under a credit class */
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    /** UpdateProject updates an existing Project. Can only be done by the admin from the Applicant that owns the Project and only change the name of the project */
    updateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
    /** ApproveProject */
    approveProject(request: MsgApproveProject): Promise<MsgApproveProjectResponse>;
    /** RejectProject */
    rejectProject(request: MsgRejectProject): Promise<MsgRejectProjectResponse>;
    /** SuspendProject suspends an approved project, even if it has already been issued credits. Not allowed to suspend a new or rejected project. */
    suspendProject(request: MsgSuspendProject): Promise<MsgSuspendProjectResponse>;
    /** IssueCredits mints new credits related to given credit class and project */
    issueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse>;
    /** TransferCredits transfers credits from one account to another and can optionally retire them by doing so */
    transferCredits(request: MsgTransferCredits): Promise<MsgTransferCreditsResponse>;
    /** RetireCredits retires active credits */
    retireCredits(request: MsgRetireCredits): Promise<MsgRetireCreditsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
    updateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse>;
    createApplicant(request: MsgCreateApplicant): Promise<MsgCreateApplicantResponse>;
    updateApplicant(request: MsgUpdateApplicant): Promise<MsgUpdateApplicantResponse>;
    createCreditClass(request: MsgCreateCreditClass): Promise<MsgCreateCreditClassResponse>;
    updateCreditClass(request: MsgUpdateCreditClass): Promise<MsgUpdateCreditClassResponse>;
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    updateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
    approveProject(request: MsgApproveProject): Promise<MsgApproveProjectResponse>;
    rejectProject(request: MsgRejectProject): Promise<MsgRejectProjectResponse>;
    suspendProject(request: MsgSuspendProject): Promise<MsgSuspendProjectResponse>;
    issueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse>;
    transferCredits(request: MsgTransferCredits): Promise<MsgTransferCreditsResponse>;
    retireCredits(request: MsgRetireCredits): Promise<MsgRetireCreditsResponse>;
}
