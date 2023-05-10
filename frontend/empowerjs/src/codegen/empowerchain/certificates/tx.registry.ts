import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateCertificate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/empowerchain.certificates.MsgUpdateParams", MsgUpdateParams], ["/empowerchain.certificates.MsgCreateCertificate", MsgCreateCertificate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.certificates.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/empowerchain.certificates.MsgCreateCertificate",
        value: MsgCreateCertificate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.certificates.MsgUpdateParams",
        value
      };
    },
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/empowerchain.certificates.MsgCreateCertificate",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.certificates.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/empowerchain.certificates.MsgCreateCertificate",
        value: MsgCreateCertificate.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/empowerchain.certificates.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createCertificate(value: any) {
      return {
        typeUrl: "/empowerchain.certificates.MsgCreateCertificate",
        value: MsgCreateCertificate.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/empowerchain.certificates.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createCertificate(value: MsgCreateCertificate) {
      return {
        typeUrl: "/empowerchain.certificates.MsgCreateCertificate",
        value: MsgCreateCertificate.fromPartial(value)
      };
    }
  }
};