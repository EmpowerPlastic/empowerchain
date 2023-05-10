import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreateIssuer, MsgUpdateIssuer, MsgCreateApplicant, MsgUpdateApplicant, MsgCreateCreditType, MsgUpdateCreditType, MsgCreateProject, MsgUpdateProject, MsgApproveProject, MsgRejectProject, MsgSuspendProject, MsgIssueCredits, MsgTransferCredits, MsgRetireCredits } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      issuer_creator: string;
      credit_type_creation_fee: {
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
export interface MsgCreateCreditTypeAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgCreateCreditType";
  value: {
    creator: string;
    abbreviation: string;
    issuer_id: string;
    name: string;
  };
}
export interface MsgUpdateCreditTypeAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgUpdateCreditType";
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
    credit_type_abbreviation: string;
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
    metadata_uris: string[];
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
    retiring_entity_name: string;
    retiring_entity_additional_data: string;
  };
}
export interface MsgRetireCreditsAminoType extends AminoMsg {
  type: "/empowerchain.plasticcredit.MsgRetireCredits";
  value: {
    owner: string;
    denom: string;
    amount: string;
    retiring_entity_name: string;
    retiring_entity_additional_data: string;
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
          credit_type_creation_fee: {
            denom: params.creditTypeCreationFee.denom,
            amount: params.creditTypeCreationFee.amount
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
          creditTypeCreationFee: {
            denom: params.credit_type_creation_fee.denom,
            amount: params.credit_type_creation_fee.amount
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
        issuerId: BigInt(issuer_id),
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
        applicantId: BigInt(applicant_id),
        name,
        description,
        admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateCreditType": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateCreditType",
    toAmino: ({
      creator,
      abbreviation,
      issuerId,
      name
    }: MsgCreateCreditType): MsgCreateCreditTypeAminoType["value"] => {
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
    }: MsgCreateCreditTypeAminoType["value"]): MsgCreateCreditType => {
      return {
        creator,
        abbreviation,
        issuerId: BigInt(issuer_id),
        name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateCreditType": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateCreditType",
    toAmino: ({
      updater,
      abbreviation,
      name
    }: MsgUpdateCreditType): MsgUpdateCreditTypeAminoType["value"] => {
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
    }: MsgUpdateCreditTypeAminoType["value"]): MsgUpdateCreditType => {
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
      creditTypeAbbreviation,
      name
    }: MsgCreateProject): MsgCreateProjectAminoType["value"] => {
      return {
        creator,
        applicant_id: applicantId.toString(),
        credit_type_abbreviation: creditTypeAbbreviation,
        name
      };
    },
    fromAmino: ({
      creator,
      applicant_id,
      credit_type_abbreviation,
      name
    }: MsgCreateProjectAminoType["value"]): MsgCreateProject => {
      return {
        creator,
        applicantId: BigInt(applicant_id),
        creditTypeAbbreviation: credit_type_abbreviation,
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
        projectId: BigInt(project_id),
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
        projectId: BigInt(project_id)
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
        projectId: BigInt(project_id)
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
        projectId: BigInt(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgIssueCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgIssueCredits",
    toAmino: ({
      creator,
      projectId,
      serialNumber,
      creditAmount,
      metadataUris
    }: MsgIssueCredits): MsgIssueCreditsAminoType["value"] => {
      return {
        creator,
        project_id: projectId.toString(),
        serial_number: serialNumber,
        credit_amount: creditAmount.toString(),
        metadata_uris: metadataUris
      };
    },
    fromAmino: ({
      creator,
      project_id,
      serial_number,
      credit_amount,
      metadata_uris
    }: MsgIssueCreditsAminoType["value"]): MsgIssueCredits => {
      return {
        creator,
        projectId: BigInt(project_id),
        serialNumber: serial_number,
        creditAmount: BigInt(credit_amount),
        metadataUris: metadata_uris
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
      retire,
      retiringEntityName,
      retiringEntityAdditionalData
    }: MsgTransferCredits): MsgTransferCreditsAminoType["value"] => {
      return {
        from,
        to,
        denom,
        amount: amount.toString(),
        retire,
        retiring_entity_name: retiringEntityName,
        retiring_entity_additional_data: retiringEntityAdditionalData
      };
    },
    fromAmino: ({
      from,
      to,
      denom,
      amount,
      retire,
      retiring_entity_name,
      retiring_entity_additional_data
    }: MsgTransferCreditsAminoType["value"]): MsgTransferCredits => {
      return {
        from,
        to,
        denom,
        amount: BigInt(amount),
        retire,
        retiringEntityName: retiring_entity_name,
        retiringEntityAdditionalData: retiring_entity_additional_data
      };
    }
  },
  "/empowerchain.plasticcredit.MsgRetireCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgRetireCredits",
    toAmino: ({
      owner,
      denom,
      amount,
      retiringEntityName,
      retiringEntityAdditionalData
    }: MsgRetireCredits): MsgRetireCreditsAminoType["value"] => {
      return {
        owner,
        denom,
        amount: amount.toString(),
        retiring_entity_name: retiringEntityName,
        retiring_entity_additional_data: retiringEntityAdditionalData
      };
    },
    fromAmino: ({
      owner,
      denom,
      amount,
      retiring_entity_name,
      retiring_entity_additional_data
    }: MsgRetireCreditsAminoType["value"]): MsgRetireCredits => {
      return {
        owner,
        denom,
        amount: BigInt(amount),
        retiringEntityName: retiring_entity_name,
        retiringEntityAdditionalData: retiring_entity_additional_data
      };
    }
  }
};