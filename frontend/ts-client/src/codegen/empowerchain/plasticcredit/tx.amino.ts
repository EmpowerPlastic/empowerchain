import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditClass, MsgUpdateCreditClass, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
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
export interface MsgCreateIssuerAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgCreateIssuer";
  value: {
    creator: string;
    name: string;
    description: string;
    admin: string;
  };
}
export interface MsgUpdateIssuerAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateIssuer";
  value: {
    updater: string;
    issuer_id: string;
    name: string;
    description: string;
    admin: string;
  };
}
export interface MsgCreateApplicantAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgCreateApplicant";
  value: {
    name: string;
    description: string;
    admin: string;
  };
}
export interface MsgUpdateApplicantAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateApplicant";
  value: {
    updater: string;
    applicant_id: string;
    name: string;
    description: string;
    admin: string;
  };
}
export interface MsgCreateCreditClassAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgCreateCreditClass";
  value: {
    creator: string;
    abbreviation: string;
    issuer_id: string;
    name: string;
  };
}
export interface MsgUpdateCreditClassAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateCreditClass";
  value: {
    updater: string;
    abbreviation: string;
    name: string;
  };
}
export interface MsgCreateProjectAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgCreateProject";
  value: {
    creator: string;
    applicant_id: string;
    credit_class_abbreviation: string;
    name: string;
  };
}
export interface MsgUpdateProjectAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateProject";
  value: {
    updater: string;
    project_id: string;
    name: string;
  };
}
export interface MsgApproveProjectAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgApproveProject";
  value: {
    approver: string;
    project_id: string;
  };
}
export interface MsgRejectProjectAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgRejectProject";
  value: {
    rejector: string;
    project_id: string;
  };
}
export interface MsgSuspendProjectAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgSuspendProject";
  value: {
    updater: string;
    project_id: string;
  };
}
export interface MsgIssueCreditsAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgIssueCredits";
  value: {
    creator: string;
    project_id: string;
    serial_number: string;
    credit_amount: string;
  };
}
export interface MsgTransferCreditsAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgTransferCredits";
  value: {
    from: string;
    to: string;
    denom: string;
    amount: string;
    retire: boolean;
  };
}
export interface MsgRetireCreditsAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgRetireCredits";
  value: {
    owner: string;
    denom: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/empowerchain.plasticcredit.MsgUpdateParams": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
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
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
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
    }: MsgCreateIssuer): MsgCreateIssuerAminoType["value"] => {
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
    }: MsgCreateIssuerAminoType["value"]): MsgCreateIssuer => {
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
    }: MsgUpdateIssuer): MsgUpdateIssuerAminoType["value"] => {
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
    }: MsgUpdateIssuerAminoType["value"]): MsgUpdateIssuer => {
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
    }: MsgCreateApplicant): MsgCreateApplicantAminoType["value"] => {
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
    }: MsgCreateApplicantAminoType["value"]): MsgCreateApplicant => {
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
    }: MsgUpdateApplicant): MsgUpdateApplicantAminoType["value"] => {
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
    }: MsgUpdateApplicantAminoType["value"]): MsgUpdateApplicant => {
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
    }: MsgCreateCreditClass): MsgCreateCreditClassAminoType["value"] => {
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
    }: MsgCreateCreditClassAminoType["value"]): MsgCreateCreditClass => {
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
    }: MsgUpdateCreditClass): MsgUpdateCreditClassAminoType["value"] => {
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
    }: MsgUpdateCreditClassAminoType["value"]): MsgUpdateCreditClass => {
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
    }: MsgCreateProject): MsgCreateProjectAminoType["value"] => {
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
    }: MsgCreateProjectAminoType["value"]): MsgCreateProject => {
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
    }: MsgUpdateProject): MsgUpdateProjectAminoType["value"] => {
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
    }: MsgUpdateProjectAminoType["value"]): MsgUpdateProject => {
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
    }: MsgApproveProject): MsgApproveProjectAminoType["value"] => {
      return {
        approver,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      approver,
      project_id
    }: MsgApproveProjectAminoType["value"]): MsgApproveProject => {
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
    }: MsgRejectProject): MsgRejectProjectAminoType["value"] => {
      return {
        rejector,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      rejector,
      project_id
    }: MsgRejectProjectAminoType["value"]): MsgRejectProject => {
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
    }: MsgSuspendProject): MsgSuspendProjectAminoType["value"] => {
      return {
        updater,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      updater,
      project_id
    }: MsgSuspendProjectAminoType["value"]): MsgSuspendProject => {
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
    }: MsgIssueCredits): MsgIssueCreditsAminoType["value"] => {
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
    }: MsgIssueCreditsAminoType["value"]): MsgIssueCredits => {
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
    }: MsgTransferCredits): MsgTransferCreditsAminoType["value"] => {
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
    }: MsgTransferCreditsAminoType["value"]): MsgTransferCredits => {
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
    }: MsgRetireCredits): MsgRetireCreditsAminoType["value"] => {
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
    }: MsgRetireCreditsAminoType["value"]): MsgRetireCredits => {
      return {
        owner,
        denom,
        amount: Long.fromString(amount)
      };
    }
  }
};