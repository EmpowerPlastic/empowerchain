import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/empowerchain.plasticcredit.MsgUpdateParams": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
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
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
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
    }: MsgCreateIssuer): AminoMsgCreateIssuer["value"] => {
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
    }: AminoMsgCreateIssuer["value"]): MsgCreateIssuer => {
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
    }: MsgUpdateIssuer): AminoMsgUpdateIssuer["value"] => {
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
    }: AminoMsgUpdateIssuer["value"]): MsgUpdateIssuer => {
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
    }: MsgCreateApplicant): AminoMsgCreateApplicant["value"] => {
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
    }: AminoMsgCreateApplicant["value"]): MsgCreateApplicant => {
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
    }: MsgUpdateApplicant): AminoMsgUpdateApplicant["value"] => {
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
    }: AminoMsgUpdateApplicant["value"]): MsgUpdateApplicant => {
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
    }: MsgCreateCreditClass): AminoMsgCreateCreditClass["value"] => {
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
    }: AminoMsgCreateCreditClass["value"]): MsgCreateCreditClass => {
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
    }: MsgUpdateCreditClass): AminoMsgUpdateCreditClass["value"] => {
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
    }: AminoMsgUpdateCreditClass["value"]): MsgUpdateCreditClass => {
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
    }: MsgCreateProject): AminoMsgCreateProject["value"] => {
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
    }: AminoMsgCreateProject["value"]): MsgCreateProject => {
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
    }: MsgUpdateProject): AminoMsgUpdateProject["value"] => {
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
    }: AminoMsgUpdateProject["value"]): MsgUpdateProject => {
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
    }: MsgApproveProject): AminoMsgApproveProject["value"] => {
      return {
        approver,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      approver,
      project_id
    }: AminoMsgApproveProject["value"]): MsgApproveProject => {
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
    }: MsgRejectProject): AminoMsgRejectProject["value"] => {
      return {
        rejector,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      rejector,
      project_id
    }: AminoMsgRejectProject["value"]): MsgRejectProject => {
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
    }: MsgSuspendProject): AminoMsgSuspendProject["value"] => {
      return {
        updater,
        project_id: projectId.toString()
      };
    },
    fromAmino: ({
      updater,
      project_id
    }: AminoMsgSuspendProject["value"]): MsgSuspendProject => {
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
    }: MsgIssueCredits): AminoMsgIssueCredits["value"] => {
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
    }: AminoMsgIssueCredits["value"]): MsgIssueCredits => {
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
    }: MsgTransferCredits): AminoMsgTransferCredits["value"] => {
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
    }: AminoMsgTransferCredits["value"]): MsgTransferCredits => {
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
    }: MsgRetireCredits): AminoMsgRetireCredits["value"] => {
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
    }: AminoMsgRetireCredits["value"]): MsgRetireCredits => {
      return {
        owner,
        denom,
        amount: Long.fromString(amount)
      };
    }
  }
};