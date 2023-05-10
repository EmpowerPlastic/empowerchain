import { certificateTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgCreateCertificate } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/empowerchain.certificates.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      allowed_issuers: string[];
    };
  };
}
export interface MsgCreateCertificateAminoType extends AminoMsg {
  type: "/empowerchain.certificates.MsgCreateCertificate";
  value: {
    issuer: string;
    type: number;
    owner: string;
    additional_data: {
      key: string;
      value: string;
    }[];
  };
}
export const AminoConverter = {
  "/empowerchain.certificates.MsgUpdateParams": {
    aminoType: "/empowerchain.certificates.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          allowed_issuers: params.allowedIssuers
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
          allowedIssuers: params.allowed_issuers
        }
      };
    }
  },
  "/empowerchain.certificates.MsgCreateCertificate": {
    aminoType: "/empowerchain.certificates.MsgCreateCertificate",
    toAmino: ({
      issuer,
      type,
      owner,
      additionalData
    }: MsgCreateCertificate): MsgCreateCertificateAminoType["value"] => {
      return {
        issuer,
        type,
        owner,
        additional_data: additionalData.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    },
    fromAmino: ({
      issuer,
      type,
      owner,
      additional_data
    }: MsgCreateCertificateAminoType["value"]): MsgCreateCertificate => {
      return {
        issuer,
        type: certificateTypeFromJSON(type),
        owner,
        additionalData: additional_data.map(el0 => ({
          key: el0.key,
          value: el0.value
        }))
      };
    }
  }
};