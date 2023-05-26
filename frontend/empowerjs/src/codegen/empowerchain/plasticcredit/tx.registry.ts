import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditType, MsgUpdateCreditType, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/empowerchain.plasticcredit.MsgUpdateParams", MsgUpdateParams], ["/empowerchain.plasticcredit.MsgCreateIssuer", MsgCreateIssuer], ["/empowerchain.plasticcredit.MsgUpdateIssuer", MsgUpdateIssuer], ["/empowerchain.plasticcredit.MsgCreateApplicant", MsgCreateApplicant], ["/empowerchain.plasticcredit.MsgUpdateApplicant", MsgUpdateApplicant], ["/empowerchain.plasticcredit.MsgCreateCreditType", MsgCreateCreditType], ["/empowerchain.plasticcredit.MsgUpdateCreditType", MsgUpdateCreditType], ["/empowerchain.plasticcredit.MsgCreateProject", MsgCreateProject], ["/empowerchain.plasticcredit.MsgUpdateProject", MsgUpdateProject], ["/empowerchain.plasticcredit.MsgApproveProject", MsgApproveProject], ["/empowerchain.plasticcredit.MsgRejectProject", MsgRejectProject], ["/empowerchain.plasticcredit.MsgSuspendProject", MsgSuspendProject], ["/empowerchain.plasticcredit.MsgIssueCredits", MsgIssueCredits], ["/empowerchain.plasticcredit.MsgTransferCredits", MsgTransferCredits], ["/empowerchain.plasticcredit.MsgRetireCredits", MsgRetireCredits]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.encode(value).finish()
      };
    },
    updateIssuer(value: MsgUpdateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.encode(value).finish()
      };
    },
    createApplicant(value: MsgCreateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.encode(value).finish()
      };
    },
    updateApplicant(value: MsgUpdateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.encode(value).finish()
      };
    },
    createCreditType(value: MsgCreateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditType",
        value: MsgCreateCreditType.encode(value).finish()
      };
    },
    updateCreditType(value: MsgUpdateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditType",
        value: MsgUpdateCreditType.encode(value).finish()
      };
    },
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.encode(value).finish()
      };
    },
    updateProject(value: MsgUpdateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.encode(value).finish()
      };
    },
    approveProject(value: MsgApproveProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.encode(value).finish()
      };
    },
    rejectProject(value: MsgRejectProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.encode(value).finish()
      };
    },
    suspendProject(value: MsgSuspendProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.encode(value).finish()
      };
    },
    issueCredits(value: MsgIssueCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.encode(value).finish()
      };
    },
    transferCredits(value: MsgTransferCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.encode(value).finish()
      };
    },
    retireCredits(value: MsgRetireCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value
      };
    },
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value
      };
    },
    updateIssuer(value: MsgUpdateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value
      };
    },
    createApplicant(value: MsgCreateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value
      };
    },
    updateApplicant(value: MsgUpdateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value
      };
    },
    createCreditType(value: MsgCreateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditType",
        value
      };
    },
    updateCreditType(value: MsgUpdateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditType",
        value
      };
    },
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value
      };
    },
    updateProject(value: MsgUpdateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value
      };
    },
    approveProject(value: MsgApproveProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value
      };
    },
    rejectProject(value: MsgRejectProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value
      };
    },
    suspendProject(value: MsgSuspendProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value
      };
    },
    issueCredits(value: MsgIssueCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value
      };
    },
    transferCredits(value: MsgTransferCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value
      };
    },
    retireCredits(value: MsgRetireCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.toJSON(value)
      };
    },
    updateIssuer(value: MsgUpdateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.toJSON(value)
      };
    },
    createApplicant(value: MsgCreateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.toJSON(value)
      };
    },
    updateApplicant(value: MsgUpdateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.toJSON(value)
      };
    },
    createCreditType(value: MsgCreateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditType",
        value: MsgCreateCreditType.toJSON(value)
      };
    },
    updateCreditType(value: MsgUpdateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditType",
        value: MsgUpdateCreditType.toJSON(value)
      };
    },
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.toJSON(value)
      };
    },
    updateProject(value: MsgUpdateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.toJSON(value)
      };
    },
    approveProject(value: MsgApproveProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.toJSON(value)
      };
    },
    rejectProject(value: MsgRejectProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.toJSON(value)
      };
    },
    suspendProject(value: MsgSuspendProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.toJSON(value)
      };
    },
    issueCredits(value: MsgIssueCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.toJSON(value)
      };
    },
    transferCredits(value: MsgTransferCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.toJSON(value)
      };
    },
    retireCredits(value: MsgRetireCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createIssuer(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.fromJSON(value)
      };
    },
    updateIssuer(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.fromJSON(value)
      };
    },
    createApplicant(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.fromJSON(value)
      };
    },
    updateApplicant(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.fromJSON(value)
      };
    },
    createCreditType(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditType",
        value: MsgCreateCreditType.fromJSON(value)
      };
    },
    updateCreditType(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditType",
        value: MsgUpdateCreditType.fromJSON(value)
      };
    },
    createProject(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.fromJSON(value)
      };
    },
    updateProject(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.fromJSON(value)
      };
    },
    approveProject(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.fromJSON(value)
      };
    },
    rejectProject(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.fromJSON(value)
      };
    },
    suspendProject(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.fromJSON(value)
      };
    },
    issueCredits(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.fromJSON(value)
      };
    },
    transferCredits(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.fromJSON(value)
      };
    },
    retireCredits(value: any) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.fromPartial(value)
      };
    },
    updateIssuer(value: MsgUpdateIssuer) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.fromPartial(value)
      };
    },
    createApplicant(value: MsgCreateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.fromPartial(value)
      };
    },
    updateApplicant(value: MsgUpdateApplicant) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.fromPartial(value)
      };
    },
    createCreditType(value: MsgCreateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditType",
        value: MsgCreateCreditType.fromPartial(value)
      };
    },
    updateCreditType(value: MsgUpdateCreditType) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditType",
        value: MsgUpdateCreditType.fromPartial(value)
      };
    },
    createProject(value: MsgCreateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.fromPartial(value)
      };
    },
    updateProject(value: MsgUpdateProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.fromPartial(value)
      };
    },
    approveProject(value: MsgApproveProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.fromPartial(value)
      };
    },
    rejectProject(value: MsgRejectProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.fromPartial(value)
      };
    },
    suspendProject(value: MsgSuspendProject) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.fromPartial(value)
      };
    },
    issueCredits(value: MsgIssueCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.fromPartial(value)
      };
    },
    transferCredits(value: MsgTransferCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.fromPartial(value)
      };
    },
    retireCredits(value: MsgRetireCredits) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.fromPartial(value)
      };
    }
  }
};