import { Long } from "../../helpers";
export const AminoConverter = {
  "/empowerchain.plasticcredit.MsgUpdateParams": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          issuer_creator: params.issuerCreator,
          credit_class_creation_fee: {
            denom: params.creditClassCreationFee.denom,
            amount: Long.fromValue(params.creditClassCreationFee.amount).toString()
          }
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }) => {
      return {
        authority,
        params: {
          issuerCreator: params.issuer_creator,
          creditClassCreationFee: {
            denom: params.credit_class_creation_fee.denom,
            amount: params.credit_class_creation_fee.amount
          }
        }
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateIssuer": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateIssuer",
    toAmino: ({
      creator,
      name,
      description,
      admin
    }) => {
      return {
        creator,
        name,
        description,
        admin
      };
    },
    fromAmino: ({
      creator,
      name,
      description,
      admin
    }) => {
      return {
        creator,
        name,
        description,
        admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateIssuer": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateIssuer",
    toAmino: ({
      updater,
      issuerId,
      name,
      description,
      admin
    }) => {
      return {
        updater,
        issuer_id: issuerId.toString(),
        name,
        description,
        admin
      };
    },
    fromAmino: ({
      updater,
      issuer_id,
      name,
      description,
      admin
    }) => {
      return {
        updater,
        issuerId: Long.fromString(issuer_id),
        name,
        description,
        admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateApplicant": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateApplicant",
    toAmino: ({
      name,
      description,
      admin
    }) => {
      return {
        name,
        description,
        admin
      };
    },
    fromAmino: ({
      name,
      description,
      admin
    }) => {
      return {
        name,
        description,
        admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateApplicant": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateApplicant",
    toAmino: ({
      updater,
      applicantId,
      name,
      description,
      admin
    }) => {
      return {
        updater,
        applicant_id: applicantId.toString(),
        name,
        description,
        admin
      };
    },
    fromAmino: ({
      updater,
      applicant_id,
      name,
      description,
      admin
    }) => {
      return {
        updater,
        applicantId: Long.fromString(applicant_id),
        name,
        description,
        admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateCreditClass": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateCreditClass",
    toAmino: ({
      creator,
      abbreviation,
      issuerId,
      name
    }) => {
      return {
        creator,
        abbreviation,
        issuer_id: issuerId.toString(),
        name
      };
    },
    fromAmino: ({
      creator,
      abbreviation,
      issuer_id,
      name
    }) => {
      return {
        creator,
        abbreviation,
        issuerId: Long.fromString(issuer_id),
        name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateCreditClass": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
    toAmino: ({
      updater,
      abbreviation,
      name
    }) => {
      return {
        updater,
        abbreviation,
        name
      };
    },
    fromAmino: ({
      updater,
      abbreviation,
      name
    }) => {
      return {
        updater,
        abbreviation,
        name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateProject": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateProject",
    toAmino: ({
      creator,
      applicantId,
      creditClassAbbreviation,
      name
    }) => {
      return {
        creator,
        applicant_id: applicantId.toString(),
        credit_class_abbreviation: creditClassAbbreviation,
        name
      };
    },
    fromAmino: ({
      creator,
      applicant_id,
      credit_class_abbreviation,
      name
    }) => {
      return {
        creator,
        applicantId: Long.fromString(applicant_id),
        creditClassAbbreviation: credit_class_abbreviation,
        name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateProject": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateProject",
    toAmino: ({
      updater,
      projectId,
      name
    }) => {
      return {
        updater,
        project_id: projectId.toString(),
        name
      };
    },
    fromAmino: ({
      updater,
      project_id,
      name
    }) => {
      return {
        updater,
        projectId: Long.fromString(project_id),
        name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgApproveProject": {
    aminoType: "/empowerchain.plasticcredit.MsgApproveProject",
    toAmino: ({
      approver,
      projectId
    }) => {
      return {
        approver,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      approver,
      project_id
    }) => {
      return {
        approver,
        projectId: Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgRejectProject": {
    aminoType: "/empowerchain.plasticcredit.MsgRejectProject",
    toAmino: ({
      rejector,
      projectId
    }) => {
      return {
        rejector,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      rejector,
      project_id
    }) => {
      return {
        rejector,
        projectId: Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgSuspendProject": {
    aminoType: "/empowerchain.plasticcredit.MsgSuspendProject",
    toAmino: ({
      updater,
      projectId
    }) => {
      return {
        updater,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      updater,
      project_id
    }) => {
      return {
        updater,
        projectId: Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgIssueCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgIssueCredits",
    toAmino: ({
      creator,
      projectId,
      serialNumber,
      creditAmount
    }) => {
      return {
        creator,
        project_id: projectId.toString(),
        serial_number: serialNumber,
        credit_amount: creditAmount.toString()
      };
    },
    fromAmino: ({
      creator,
      project_id,
      serial_number,
      credit_amount
    }) => {
      return {
        creator,
        projectId: Long.fromString(project_id),
        serialNumber: serial_number,
        creditAmount: Long.fromString(credit_amount)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgTransferCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgTransferCredits",
    toAmino: ({
      from,
      to,
      denom,
      amount,
      retire
    }) => {
      return {
        from,
        to,
        denom,
        amount: amount.toString(),
        retire
      };
    },
    fromAmino: ({
      from,
      to,
      denom,
      amount,
      retire
    }) => {
      return {
        from,
        to,
        denom,
        amount: Long.fromString(amount),
        retire
      };
    }
  },
  "/empowerchain.plasticcredit.MsgRetireCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgRetireCredits",
    toAmino: ({
      owner,
      denom,
      amount
    }) => {
      return {
        owner,
        denom,
        amount: amount.toString()
      };
    },
    fromAmino: ({
      owner,
      denom,
      amount
    }) => {
      return {
        owner,
        denom,
        amount: Long.fromString(amount)
      };
    }
  }
};