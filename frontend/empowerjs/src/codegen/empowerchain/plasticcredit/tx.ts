import { Params, ParamsSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten in keeper). */
  authority: string;
  /**
   * params defines the x/plasitccredit parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */

  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten in keeper). */
  authority: string;
  /**
   * params defines the x/plasitccredit parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */

  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateIssuer {
  creator: string;
  name: string;
  description: string;
  admin: string;
}
export interface MsgCreateIssuerSDKType {
  creator: string;
  name: string;
  description: string;
  admin: string;
}
export interface MsgCreateIssuerResponse {
  issuerId: Long;
}
export interface MsgCreateIssuerResponseSDKType {
  issuer_id: Long;
}
export interface MsgUpdateIssuer {
  /** updater is the address that is performing the update/sends the tx */
  updater: string;
  issuerId: Long;
  name: string;
  description: string;
  admin: string;
}
export interface MsgUpdateIssuerSDKType {
  /** updater is the address that is performing the update/sends the tx */
  updater: string;
  issuer_id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface MsgUpdateIssuerResponse {}
export interface MsgUpdateIssuerResponseSDKType {}
export interface MsgCreateApplicant {
  name: string;
  description: string;
  admin: string;
}
export interface MsgCreateApplicantSDKType {
  name: string;
  description: string;
  admin: string;
}
export interface MsgCreateApplicantResponse {
  applicantId: Long;
}
export interface MsgCreateApplicantResponseSDKType {
  applicant_id: Long;
}
export interface MsgUpdateApplicant {
  /** updater is the address that is performing the update/sends the tx */
  updater: string;
  applicantId: Long;
  name: string;
  description: string;
  admin: string;
}
export interface MsgUpdateApplicantSDKType {
  /** updater is the address that is performing the update/sends the tx */
  updater: string;
  applicant_id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface MsgUpdateApplicantResponse {}
export interface MsgUpdateApplicantResponseSDKType {}
export interface MsgCreateCreditType {
  /** creator is the signer and needs to have permissions on the issuer referenced in issuer_id */
  creator: string;
  /** abbreviation is the short-hand name, as well as the ID of the credit type */

  abbreviation: string;
  /** issuer_id is the ID of the issuer creating and owning the credit type */

  issuerId: Long;
  /** name is the human friendly name of the credits (e.g. Empower Plastic Credits) */

  name: string;
}
export interface MsgCreateCreditTypeSDKType {
  /** creator is the signer and needs to have permissions on the issuer referenced in issuer_id */
  creator: string;
  /** abbreviation is the short-hand name, as well as the ID of the credit type */

  abbreviation: string;
  /** issuer_id is the ID of the issuer creating and owning the credit type */

  issuer_id: Long;
  /** name is the human friendly name of the credits (e.g. Empower Plastic Credits) */

  name: string;
}
export interface MsgCreateCreditTypeResponse {}
export interface MsgCreateCreditTypeResponseSDKType {}
export interface MsgUpdateCreditType {
  /** abbreviation is the short-hand name, as well as the ID of the credit type */
  updater: string;
  abbreviation: string;
  name: string;
}
export interface MsgUpdateCreditTypeSDKType {
  /** abbreviation is the short-hand name, as well as the ID of the credit type */
  updater: string;
  abbreviation: string;
  name: string;
}
export interface MsgUpdateCreditTypeResponse {}
export interface MsgUpdateCreditTypeResponseSDKType {}
export interface MsgCreateProject {
  /** creator needs to have access to the applicant references in applicant_id */
  creator: string;
  applicantId: Long;
  creditTypeAbbreviation: string;
  name: string;
}
export interface MsgCreateProjectSDKType {
  /** creator needs to have access to the applicant references in applicant_id */
  creator: string;
  applicant_id: Long;
  credit_type_abbreviation: string;
  name: string;
}
export interface MsgCreateProjectResponse {
  projectId: Long;
}
export interface MsgCreateProjectResponseSDKType {
  project_id: Long;
}
export interface MsgUpdateProject {
  /** updater needs to have access to the applicant references in applicant_id */
  updater: string;
  projectId: Long;
  name: string;
}
export interface MsgUpdateProjectSDKType {
  /** updater needs to have access to the applicant references in applicant_id */
  updater: string;
  project_id: Long;
  name: string;
}
export interface MsgUpdateProjectResponse {}
export interface MsgUpdateProjectResponseSDKType {}
export interface MsgApproveProject {
  /** Approver needs to be someone who has the authority to approve for the credit type of the project */
  approver: string;
  projectId: Long;
}
export interface MsgApproveProjectSDKType {
  /** Approver needs to be someone who has the authority to approve for the credit type of the project */
  approver: string;
  project_id: Long;
}
export interface MsgApproveProjectResponse {}
export interface MsgApproveProjectResponseSDKType {}
export interface MsgRejectProject {
  /** Rejector needs to be someone who has the authority to approve/ reject for the credit type of the project */
  rejector: string;
  projectId: Long;
}
export interface MsgRejectProjectSDKType {
  /** Rejector needs to be someone who has the authority to approve/ reject for the credit type of the project */
  rejector: string;
  project_id: Long;
}
export interface MsgRejectProjectResponse {}
export interface MsgRejectProjectResponseSDKType {}
export interface MsgSuspendProject {
  /** updater needs to be someone who has the authority to update for the credit type of the project */
  updater: string;
  projectId: Long;
}
export interface MsgSuspendProjectSDKType {
  /** updater needs to be someone who has the authority to update for the credit type of the project */
  updater: string;
  project_id: Long;
}
export interface MsgSuspendProjectResponse {}
export interface MsgSuspendProjectResponseSDKType {}
export interface MsgIssueCredits {
  creator: string;
  projectId: Long;
  serialNumber: string;
  creditAmount: Long;
  metadataUris: string[];
}
export interface MsgIssueCreditsSDKType {
  creator: string;
  project_id: Long;
  serial_number: string;
  credit_amount: Long;
  metadata_uris: string[];
}
export interface MsgIssueCreditsResponse {
  collection?: CreditCollection;
}
export interface MsgIssueCreditsResponseSDKType {
  collection?: CreditCollectionSDKType;
}
export interface MsgTransferCredits {
  from: string;
  to: string;
  denom: string;
  amount: Long;
  retire: boolean;
}
export interface MsgTransferCreditsSDKType {
  from: string;
  to: string;
  denom: string;
  amount: Long;
  retire: boolean;
}
export interface MsgTransferCreditsResponse {}
export interface MsgTransferCreditsResponseSDKType {}
export interface MsgRetireCredits {
  owner: string;
  denom: string;
  amount: Long;
}
export interface MsgRetireCreditsSDKType {
  owner: string;
  denom: string;
  amount: Long;
}
export interface MsgRetireCreditsResponse {
  balance?: CreditBalance;
}
export interface MsgRetireCreditsResponseSDKType {
  balance?: CreditBalanceSDKType;
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }

};

function createBaseMsgCreateIssuer(): MsgCreateIssuer {
  return {
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}

export const MsgCreateIssuer = {
  encode(message: MsgCreateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = createBaseMsgCreateIssuer();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseMsgCreateIssuerResponse(): MsgCreateIssuerResponse {
  return {
    issuerId: Long.UZERO
  };
}

export const MsgCreateIssuerResponse = {
  encode(message: MsgCreateIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse {
    const message = createBaseMsgCreateIssuerResponse();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateIssuer(): MsgUpdateIssuer {
  return {
    updater: "",
    issuerId: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}

export const MsgUpdateIssuer = {
  encode(message: MsgUpdateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(16).uint64(message.issuerId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateIssuer>): MsgUpdateIssuer {
    const message = createBaseMsgUpdateIssuer();
    message.updater = object.updater ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseMsgUpdateIssuerResponse(): MsgUpdateIssuerResponse {
  return {};
}

export const MsgUpdateIssuerResponse = {
  encode(_: MsgUpdateIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIssuerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateIssuerResponse>): MsgUpdateIssuerResponse {
    const message = createBaseMsgUpdateIssuerResponse();
    return message;
  }

};

function createBaseMsgCreateApplicant(): MsgCreateApplicant {
  return {
    name: "",
    description: "",
    admin: ""
  };
}

export const MsgCreateApplicant = {
  encode(message: MsgCreateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateApplicant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateApplicant>): MsgCreateApplicant {
    const message = createBaseMsgCreateApplicant();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseMsgCreateApplicantResponse(): MsgCreateApplicantResponse {
  return {
    applicantId: Long.UZERO
  };
}

export const MsgCreateApplicantResponse = {
  encode(message: MsgCreateApplicantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateApplicantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateApplicantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.applicantId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateApplicantResponse>): MsgCreateApplicantResponse {
    const message = createBaseMsgCreateApplicantResponse();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateApplicant(): MsgUpdateApplicant {
  return {
    updater: "",
    applicantId: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}

export const MsgUpdateApplicant = {
  encode(message: MsgUpdateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.admin !== "") {
      writer.uint32(42).string(message.admin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateApplicant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.applicantId = (reader.uint64() as Long);
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.admin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateApplicant>): MsgUpdateApplicant {
    const message = createBaseMsgUpdateApplicant();
    message.updater = object.updater ?? "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseMsgUpdateApplicantResponse(): MsgUpdateApplicantResponse {
  return {};
}

export const MsgUpdateApplicantResponse = {
  encode(_: MsgUpdateApplicantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateApplicantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateApplicantResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateApplicantResponse>): MsgUpdateApplicantResponse {
    const message = createBaseMsgUpdateApplicantResponse();
    return message;
  }

};

function createBaseMsgCreateCreditType(): MsgCreateCreditType {
  return {
    creator: "",
    abbreviation: "",
    issuerId: Long.UZERO,
    name: ""
  };
}

export const MsgCreateCreditType = {
  encode(message: MsgCreateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(24).uint64(message.issuerId);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.abbreviation = reader.string();
          break;

        case 3:
          message.issuerId = (reader.uint64() as Long);
          break;

        case 4:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateCreditType>): MsgCreateCreditType {
    const message = createBaseMsgCreateCreditType();
    message.creator = object.creator ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgCreateCreditTypeResponse(): MsgCreateCreditTypeResponse {
  return {};
}

export const MsgCreateCreditTypeResponse = {
  encode(_: MsgCreateCreditTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCreditTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCreditTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateCreditTypeResponse>): MsgCreateCreditTypeResponse {
    const message = createBaseMsgCreateCreditTypeResponse();
    return message;
  }

};

function createBaseMsgUpdateCreditType(): MsgUpdateCreditType {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}

export const MsgUpdateCreditType = {
  encode(message: MsgUpdateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.abbreviation = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateCreditType>): MsgUpdateCreditType {
    const message = createBaseMsgUpdateCreditType();
    message.updater = object.updater ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgUpdateCreditTypeResponse(): MsgUpdateCreditTypeResponse {
  return {};
}

export const MsgUpdateCreditTypeResponse = {
  encode(_: MsgUpdateCreditTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCreditTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCreditTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateCreditTypeResponse>): MsgUpdateCreditTypeResponse {
    const message = createBaseMsgUpdateCreditTypeResponse();
    return message;
  }

};

function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    creator: "",
    applicantId: Long.UZERO,
    creditTypeAbbreviation: "",
    name: ""
  };
}

export const MsgCreateProject = {
  encode(message: MsgCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
    }

    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(26).string(message.creditTypeAbbreviation);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.applicantId = (reader.uint64() as Long);
          break;

        case 3:
          message.creditTypeAbbreviation = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.creator = object.creator ?? "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return {
    projectId: Long.UZERO
  };
}

export const MsgCreateProjectResponse = {
  encode(message: MsgCreateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateProject(): MsgUpdateProject {
  return {
    updater: "",
    projectId: Long.UZERO,
    name: ""
  };
}

export const MsgUpdateProject = {
  encode(message: MsgUpdateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateProject>): MsgUpdateProject {
    const message = createBaseMsgUpdateProject();
    message.updater = object.updater ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgUpdateProjectResponse(): MsgUpdateProjectResponse {
  return {};
}

export const MsgUpdateProjectResponse = {
  encode(_: MsgUpdateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectResponse>): MsgUpdateProjectResponse {
    const message = createBaseMsgUpdateProjectResponse();
    return message;
  }

};

function createBaseMsgApproveProject(): MsgApproveProject {
  return {
    approver: "",
    projectId: Long.UZERO
  };
}

export const MsgApproveProject = {
  encode(message: MsgApproveProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.approver !== "") {
      writer.uint32(10).string(message.approver);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.approver = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgApproveProject>): MsgApproveProject {
    const message = createBaseMsgApproveProject();
    message.approver = object.approver ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgApproveProjectResponse(): MsgApproveProjectResponse {
  return {};
}

export const MsgApproveProjectResponse = {
  encode(_: MsgApproveProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgApproveProjectResponse>): MsgApproveProjectResponse {
    const message = createBaseMsgApproveProjectResponse();
    return message;
  }

};

function createBaseMsgRejectProject(): MsgRejectProject {
  return {
    rejector: "",
    projectId: Long.UZERO
  };
}

export const MsgRejectProject = {
  encode(message: MsgRejectProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejector !== "") {
      writer.uint32(10).string(message.rejector);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rejector = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRejectProject>): MsgRejectProject {
    const message = createBaseMsgRejectProject();
    message.rejector = object.rejector ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRejectProjectResponse(): MsgRejectProjectResponse {
  return {};
}

export const MsgRejectProjectResponse = {
  encode(_: MsgRejectProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRejectProjectResponse>): MsgRejectProjectResponse {
    const message = createBaseMsgRejectProjectResponse();
    return message;
  }

};

function createBaseMsgSuspendProject(): MsgSuspendProject {
  return {
    updater: "",
    projectId: Long.UZERO
  };
}

export const MsgSuspendProject = {
  encode(message: MsgSuspendProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuspendProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSuspendProject>): MsgSuspendProject {
    const message = createBaseMsgSuspendProject();
    message.updater = object.updater ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgSuspendProjectResponse(): MsgSuspendProjectResponse {
  return {};
}

export const MsgSuspendProjectResponse = {
  encode(_: MsgSuspendProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuspendProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuspendProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSuspendProjectResponse>): MsgSuspendProjectResponse {
    const message = createBaseMsgSuspendProjectResponse();
    return message;
  }

};

function createBaseMsgIssueCredits(): MsgIssueCredits {
  return {
    creator: "",
    projectId: Long.UZERO,
    serialNumber: "",
    creditAmount: Long.UZERO,
    metadataUris: []
  };
}

export const MsgIssueCredits = {
  encode(message: MsgIssueCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.serialNumber !== "") {
      writer.uint32(26).string(message.serialNumber);
    }

    if (!message.creditAmount.isZero()) {
      writer.uint32(32).uint64(message.creditAmount);
    }

    for (const v of message.metadataUris) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.serialNumber = reader.string();
          break;

        case 4:
          message.creditAmount = (reader.uint64() as Long);
          break;

        case 5:
          message.metadataUris.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIssueCredits>): MsgIssueCredits {
    const message = createBaseMsgIssueCredits();
    message.creator = object.creator ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.serialNumber = object.serialNumber ?? "";
    message.creditAmount = object.creditAmount !== undefined && object.creditAmount !== null ? Long.fromValue(object.creditAmount) : Long.UZERO;
    message.metadataUris = object.metadataUris?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgIssueCreditsResponse(): MsgIssueCreditsResponse {
  return {
    collection: undefined
  };
}

export const MsgIssueCreditsResponse = {
  encode(message: MsgIssueCreditsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      CreditCollection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCreditsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCreditsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collection = CreditCollection.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIssueCreditsResponse>): MsgIssueCreditsResponse {
    const message = createBaseMsgIssueCreditsResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? CreditCollection.fromPartial(object.collection) : undefined;
    return message;
  }

};

function createBaseMsgTransferCredits(): MsgTransferCredits {
  return {
    from: "",
    to: "",
    denom: "",
    amount: Long.UZERO,
    retire: false
  };
}

export const MsgTransferCredits = {
  encode(message: MsgTransferCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }

    if (message.retire === true) {
      writer.uint32(40).bool(message.retire);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.amount = (reader.uint64() as Long);
          break;

        case 5:
          message.retire = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransferCredits>): MsgTransferCredits {
    const message = createBaseMsgTransferCredits();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.retire = object.retire ?? false;
    return message;
  }

};

function createBaseMsgTransferCreditsResponse(): MsgTransferCreditsResponse {
  return {};
}

export const MsgTransferCreditsResponse = {
  encode(_: MsgTransferCreditsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCreditsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCreditsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgTransferCreditsResponse>): MsgTransferCreditsResponse {
    const message = createBaseMsgTransferCreditsResponse();
    return message;
  }

};

function createBaseMsgRetireCredits(): MsgRetireCredits {
  return {
    owner: "",
    denom: "",
    amount: Long.UZERO
  };
}

export const MsgRetireCredits = {
  encode(message: MsgRetireCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireCredits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRetireCredits>): MsgRetireCredits {
    const message = createBaseMsgRetireCredits();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRetireCreditsResponse(): MsgRetireCreditsResponse {
  return {
    balance: undefined
  };
}

export const MsgRetireCreditsResponse = {
  encode(message: MsgRetireCreditsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      CreditBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireCreditsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireCreditsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = CreditBalance.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRetireCreditsResponse>): MsgRetireCreditsResponse {
    const message = createBaseMsgRetireCreditsResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? CreditBalance.fromPartial(object.balance) : undefined;
    return message;
  }

};