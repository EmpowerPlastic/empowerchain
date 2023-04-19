import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateIssuer, MsgCreateIssuerResponse, MsgUpdateIssuer, MsgUpdateIssuerResponse, MsgCreateApplicant, MsgCreateApplicantResponse, MsgUpdateApplicant, MsgUpdateApplicantResponse, MsgCreateCreditClass, MsgCreateCreditClassResponse, MsgUpdateCreditClass, MsgUpdateCreditClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgUpdateProject, MsgUpdateProjectResponse, MsgApproveProject, MsgApproveProjectResponse, MsgRejectProject, MsgRejectProjectResponse, MsgSuspendProject, MsgSuspendProjectResponse, MsgIssueCredits, MsgIssueCreditsResponse, MsgTransferCredits, MsgTransferCreditsResponse, MsgRetireCredits, MsgRetireCreditsResponse } from "./tx";
export class MsgClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createIssuer = this.createIssuer.bind(this);
    this.updateIssuer = this.updateIssuer.bind(this);
    this.createApplicant = this.createApplicant.bind(this);
    this.updateApplicant = this.updateApplicant.bind(this);
    this.createCreditClass = this.createCreditClass.bind(this);
    this.updateCreditClass = this.updateCreditClass.bind(this);
    this.createProject = this.createProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.approveProject = this.approveProject.bind(this);
    this.rejectProject = this.rejectProject.bind(this);
    this.suspendProject = this.suspendProject.bind(this);
    this.issueCredits = this.issueCredits.bind(this);
    this.transferCredits = this.transferCredits.bind(this);
    this.retireCredits = this.retireCredits.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  createIssuer(request) {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateIssuer", data);
    return promise.then(data => MsgCreateIssuerResponse.decode(new _m0.Reader(data)));
  }
  updateIssuer(request) {
    const data = MsgUpdateIssuer.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateIssuer", data);
    return promise.then(data => MsgUpdateIssuerResponse.decode(new _m0.Reader(data)));
  }
  createApplicant(request) {
    const data = MsgCreateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateApplicant", data);
    return promise.then(data => MsgCreateApplicantResponse.decode(new _m0.Reader(data)));
  }
  updateApplicant(request) {
    const data = MsgUpdateApplicant.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateApplicant", data);
    return promise.then(data => MsgUpdateApplicantResponse.decode(new _m0.Reader(data)));
  }
  createCreditClass(request) {
    const data = MsgCreateCreditClass.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateCreditClass", data);
    return promise.then(data => MsgCreateCreditClassResponse.decode(new _m0.Reader(data)));
  }
  updateCreditClass(request) {
    const data = MsgUpdateCreditClass.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateCreditClass", data);
    return promise.then(data => MsgUpdateCreditClassResponse.decode(new _m0.Reader(data)));
  }
  createProject(request) {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateProject", data);
    return promise.then(data => MsgCreateProjectResponse.decode(new _m0.Reader(data)));
  }
  updateProject(request) {
    const data = MsgUpdateProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateProject", data);
    return promise.then(data => MsgUpdateProjectResponse.decode(new _m0.Reader(data)));
  }
  approveProject(request) {
    const data = MsgApproveProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "ApproveProject", data);
    return promise.then(data => MsgApproveProjectResponse.decode(new _m0.Reader(data)));
  }
  rejectProject(request) {
    const data = MsgRejectProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RejectProject", data);
    return promise.then(data => MsgRejectProjectResponse.decode(new _m0.Reader(data)));
  }
  suspendProject(request) {
    const data = MsgSuspendProject.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "SuspendProject", data);
    return promise.then(data => MsgSuspendProjectResponse.decode(new _m0.Reader(data)));
  }
  issueCredits(request) {
    const data = MsgIssueCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "IssueCredits", data);
    return promise.then(data => MsgIssueCreditsResponse.decode(new _m0.Reader(data)));
  }
  transferCredits(request) {
    const data = MsgTransferCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "TransferCredits", data);
    return promise.then(data => MsgTransferCreditsResponse.decode(new _m0.Reader(data)));
  }
  retireCredits(request) {
    const data = MsgRetireCredits.encode(request).finish();
    const promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RetireCredits", data);
    return promise.then(data => MsgRetireCreditsResponse.decode(new _m0.Reader(data)));
  }
}