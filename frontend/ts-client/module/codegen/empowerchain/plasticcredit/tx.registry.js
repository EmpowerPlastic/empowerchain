import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditClass, MsgUpdateCreditClass, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export const registry = [["/empowerchain.plasticcredit.MsgUpdateParams", MsgUpdateParams], ["/empowerchain.plasticcredit.MsgCreateIssuer", MsgCreateIssuer], ["/empowerchain.plasticcredit.MsgUpdateIssuer", MsgUpdateIssuer], ["/empowerchain.plasticcredit.MsgCreateApplicant", MsgCreateApplicant], ["/empowerchain.plasticcredit.MsgUpdateApplicant", MsgUpdateApplicant], ["/empowerchain.plasticcredit.MsgCreateCreditClass", MsgCreateCreditClass], ["/empowerchain.plasticcredit.MsgUpdateCreditClass", MsgUpdateCreditClass], ["/empowerchain.plasticcredit.MsgCreateProject", MsgCreateProject], ["/empowerchain.plasticcredit.MsgUpdateProject", MsgUpdateProject], ["/empowerchain.plasticcredit.MsgApproveProject", MsgApproveProject], ["/empowerchain.plasticcredit.MsgRejectProject", MsgRejectProject], ["/empowerchain.plasticcredit.MsgSuspendProject", MsgSuspendProject], ["/empowerchain.plasticcredit.MsgIssueCredits", MsgIssueCredits], ["/empowerchain.plasticcredit.MsgTransferCredits", MsgTransferCredits], ["/empowerchain.plasticcredit.MsgRetireCredits", MsgRetireCredits]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.encode(value).finish()
      };
    },
    updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.encode(value).finish()
      };
    },
    createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.encode(value).finish()
      };
    },
    updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.encode(value).finish()
      };
    },
    createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: MsgCreateCreditClass.encode(value).finish()
      };
    },
    updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: MsgUpdateCreditClass.encode(value).finish()
      };
    },
    createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.encode(value).finish()
      };
    },
    updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.encode(value).finish()
      };
    },
    approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.encode(value).finish()
      };
    },
    rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.encode(value).finish()
      };
    },
    suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.encode(value).finish()
      };
    },
    issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.encode(value).finish()
      };
    },
    transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.encode(value).finish()
      };
    },
    retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value
      };
    },
    createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value
      };
    },
    updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value
      };
    },
    createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value
      };
    },
    updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value
      };
    },
    createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value
      };
    },
    updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value
      };
    },
    createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value
      };
    },
    updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value
      };
    },
    approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value
      };
    },
    rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value
      };
    },
    suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value
      };
    },
    issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value
      };
    },
    transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value
      };
    },
    retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: MsgCreateIssuer.fromPartial(value)
      };
    },
    updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: MsgUpdateIssuer.fromPartial(value)
      };
    },
    createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: MsgCreateApplicant.fromPartial(value)
      };
    },
    updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: MsgUpdateApplicant.fromPartial(value)
      };
    },
    createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: MsgCreateCreditClass.fromPartial(value)
      };
    },
    updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: MsgUpdateCreditClass.fromPartial(value)
      };
    },
    createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: MsgCreateProject.fromPartial(value)
      };
    },
    updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: MsgUpdateProject.fromPartial(value)
      };
    },
    approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: MsgApproveProject.fromPartial(value)
      };
    },
    rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: MsgRejectProject.fromPartial(value)
      };
    },
    suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: MsgSuspendProject.fromPartial(value)
      };
    },
    issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: MsgIssueCredits.fromPartial(value)
      };
    },
    transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: MsgTransferCredits.fromPartial(value)
      };
    },
    retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: MsgRetireCredits.fromPartial(value)
      };
    }
  }
};