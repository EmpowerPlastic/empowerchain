import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditClass, MsgUpdateCreditClass, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/empowerchain.plasticcredit.MsgUpdateParams", MsgUpdateParams], ["/empowerchain.plasticcredit.MsgCreateIssuer", MsgCreateIssuer], ["/empowerchain.plasticcredit.MsgUpdateIssuer", MsgUpdateIssuer], ["/empowerchain.plasticcredit.MsgCreateApplicant", MsgCreateApplicant], ["/empowerchain.plasticcredit.MsgUpdateApplicant", MsgUpdateApplicant], ["/empowerchain.plasticcredit.MsgCreateCreditClass", MsgCreateCreditClass], ["/empowerchain.plasticcredit.MsgUpdateCreditClass", MsgUpdateCreditClass], ["/empowerchain.plasticcredit.MsgCreateProject", MsgCreateProject], ["/empowerchain.plasticcredit.MsgUpdateProject", MsgUpdateProject], ["/empowerchain.plasticcredit.MsgApproveProject", MsgApproveProject], ["/empowerchain.plasticcredit.MsgRejectProject", MsgRejectProject], ["/empowerchain.plasticcredit.MsgSuspendProject", MsgSuspendProject], ["/empowerchain.plasticcredit.MsgIssueCredits", MsgIssueCredits], ["/empowerchain.plasticcredit.MsgTransferCredits", MsgTransferCredits], ["/empowerchain.plasticcredit.MsgRetireCredits", MsgRetireCredits]];
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

    createCreditClass(value: MsgCreateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: MsgCreateCreditClass.encode(value).finish()
      };
    },

    updateCreditClass(value: MsgUpdateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: MsgUpdateCreditClass.encode(value).finish()
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

    createCreditClass(value: MsgCreateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value
      };
    },

    updateCreditClass(value: MsgUpdateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
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

    createCreditClass(value: MsgCreateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: MsgCreateCreditClass.fromPartial(value)
      };
    },

    updateCreditClass(value: MsgUpdateCreditClass) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: MsgUpdateCreditClass.fromPartial(value)
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