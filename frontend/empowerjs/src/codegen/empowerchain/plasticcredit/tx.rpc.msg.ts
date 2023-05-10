import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateIssuer, MsgCreateIssuerResponse, MsgUpdateIssuer, MsgUpdateIssuerResponse, MsgCreateApplicant, MsgCreateApplicantResponse, MsgUpdateApplicant, MsgUpdateApplicantResponse, MsgCreateCreditType, MsgCreateCreditTypeResponse, MsgUpdateCreditType, MsgUpdateCreditTypeResponse, MsgCreateProject, MsgCreateProjectResponse, MsgUpdateProject, MsgUpdateProjectResponse, MsgApproveProject, MsgApproveProjectResponse, MsgRejectProject, MsgRejectProjectResponse, MsgSuspendProject, MsgSuspendProjectResponse, MsgIssueCredits, MsgIssueCreditsResponse, MsgTransferCredits, MsgTransferCreditsResponse, MsgRetireCredits, MsgRetireCreditsResponse } from "./tx";
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/plasticcredit module parameters.
   * The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CreateIssuer creates a new Issuer that can create credit types and issue new credits with those types
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
  /** CreateCreditType creates a new Credit Type for an issuer. */
  createCreditType(request: MsgCreateCreditType): Promise<MsgCreateCreditTypeResponse>;
  /** UpdateCreditType update an existing Credit Type for an issuer. Only the admin from the Issuer that owns the Credit Type is allowed and only change the name */
  updateCreditType(request: MsgUpdateCreditType): Promise<MsgUpdateCreditTypeResponse>;
  /** CreateProject creates a new Project for an applicant that can be approved be an issuer for issuing under a credit type */
  createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
  /** UpdateProject updates an existing Project. Can only be done by the admin from the Applicant that owns the Project and only change the name of the project */
  updateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse>;
  /** ApproveProject */
  approveProject(request: MsgApproveProject): Promise<MsgApproveProjectResponse>;
  /** RejectProject */
  rejectProject(request: MsgRejectProject): Promise<MsgRejectProjectResponse>;
  /** SuspendProject suspends an approved project, even if it has already been issued credits. Not allowed to suspend a new or rejected project. */
  suspendProject(request: MsgSuspendProject): Promise<MsgSuspendProjectResponse>;
  /** IssueCredits mints new credits related to given credit type and project */
  issueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse>;
  /** TransferCredits transfers credits from one account to another and can optionally retire them by doing so */
  transferCredits(request: MsgTransferCredits): Promise<MsgTransferCreditsResponse>;
  /** RetireCredits retires active credits */
  retireCredits(request: MsgRetireCredits): Promise<MsgRetireCreditsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createIssuer = this.createIssuer.bind(this);
    this.updateIssuer = this.updateIssuer.bind(this);
    this.createApplicant = this.createApplicant.bind(this);
    this.updateApplicant = this.updateApplicant.bind(this);
    this.createCreditType = this.createCreditType.bind(this);
    this.updateCreditType = this.updateCreditType.bind(this);
    this.createProject = this.createProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.approveProject = this.approveProject.bind(this);
    this.rejectProject = this.rejectProject.bind(this);
    this.suspendProject = this.suspendProject.bind(this);
    this.issueCredits = this.issueCredits.bind(this);
    this.transferCredits = this.transferCredits.bind(this);
    this.retireCredits = this.retireCredits.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateIssuer", data);
    return promise.then(data => MsgCreateIssuerResponse.decode(new _m0.Reader(data)));
  }
  updateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse> {
    const data = MsgUpdateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateIssuer", data);
    return promise.then(data => MsgUpdateIssuerResponse.decode(new _m0.Reader(data)));
  }
  createApplicant(request: MsgCreateApplicant): Promise<MsgCreateApplicantResponse> {
    const data = MsgCreateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateApplicant", data);
    return promise.then(data => MsgCreateApplicantResponse.decode(new _m0.Reader(data)));
  }
  updateApplicant(request: MsgUpdateApplicant): Promise<MsgUpdateApplicantResponse> {
    const data = MsgUpdateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateApplicant", data);
    return promise.then(data => MsgUpdateApplicantResponse.decode(new _m0.Reader(data)));
  }
  createCreditType(request: MsgCreateCreditType): Promise<MsgCreateCreditTypeResponse> {
    const data = MsgCreateCreditType.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateCreditType", data);
    return promise.then(data => MsgCreateCreditTypeResponse.decode(new _m0.Reader(data)));
  }
  updateCreditType(request: MsgUpdateCreditType): Promise<MsgUpdateCreditTypeResponse> {
    const data = MsgUpdateCreditType.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateCreditType", data);
    return promise.then(data => MsgUpdateCreditTypeResponse.decode(new _m0.Reader(data)));
  }
  createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateProject", data);
    return promise.then(data => MsgCreateProjectResponse.decode(new _m0.Reader(data)));
  }
  updateProject(request: MsgUpdateProject): Promise<MsgUpdateProjectResponse> {
    const data = MsgUpdateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateProject", data);
    return promise.then(data => MsgUpdateProjectResponse.decode(new _m0.Reader(data)));
  }
  approveProject(request: MsgApproveProject): Promise<MsgApproveProjectResponse> {
    const data = MsgApproveProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "ApproveProject", data);
    return promise.then(data => MsgApproveProjectResponse.decode(new _m0.Reader(data)));
  }
  rejectProject(request: MsgRejectProject): Promise<MsgRejectProjectResponse> {
    const data = MsgRejectProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RejectProject", data);
    return promise.then(data => MsgRejectProjectResponse.decode(new _m0.Reader(data)));
  }
  suspendProject(request: MsgSuspendProject): Promise<MsgSuspendProjectResponse> {
    const data = MsgSuspendProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "SuspendProject", data);
    return promise.then(data => MsgSuspendProjectResponse.decode(new _m0.Reader(data)));
  }
  issueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse> {
    const data = MsgIssueCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "IssueCredits", data);
    return promise.then(data => MsgIssueCreditsResponse.decode(new _m0.Reader(data)));
  }
  transferCredits(request: MsgTransferCredits): Promise<MsgTransferCreditsResponse> {
    const data = MsgTransferCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "TransferCredits", data);
    return promise.then(data => MsgTransferCreditsResponse.decode(new _m0.Reader(data)));
  }
  retireCredits(request: MsgRetireCredits): Promise<MsgRetireCreditsResponse> {
    const data = MsgRetireCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RetireCredits", data);
    return promise.then(data => MsgRetireCreditsResponse.decode(new _m0.Reader(data)));
  }
}