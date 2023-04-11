import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
export enum ProjectStatus {
  NEW = 0,
  APPROVED = 1,
  REJECTED = 2,
  SUSPENDED = 3,
  UNRECOGNIZED = -1,
}
export enum ProjectStatusSDKType {
  NEW = 0,
  APPROVED = 1,
  REJECTED = 2,
  SUSPENDED = 3,
  UNRECOGNIZED = -1,
}
export function projectStatusFromJSON(object: any): ProjectStatus {
  switch (object) {
    case 0:
    case "NEW":
      return ProjectStatus.NEW;

    case 1:
    case "APPROVED":
      return ProjectStatus.APPROVED;

    case 2:
    case "REJECTED":
      return ProjectStatus.REJECTED;

    case 3:
    case "SUSPENDED":
      return ProjectStatus.SUSPENDED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectStatus.UNRECOGNIZED;
  }
}
export function projectStatusToJSON(object: ProjectStatus): string {
  switch (object) {
    case ProjectStatus.NEW:
      return "NEW";

    case ProjectStatus.APPROVED:
      return "APPROVED";

    case ProjectStatus.REJECTED:
      return "REJECTED";

    case ProjectStatus.SUSPENDED:
      return "SUSPENDED";

    case ProjectStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the module. */

export interface Params {
  /**
   * issuer_creator is the address that is allowed to create new issuers
   * defaults to the governance account, but can be changed by governance (to, for instance, a DAO/group/multisig)
   */
  issuerCreator: string;
  /**
   * credit_type_creation_fee is the fee that is charged for creating a new credit type
   * defaults to 50 $MPWR, but can be changed by governance
   */

  creditTypeCreationFee?: Coin;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  /**
   * issuer_creator is the address that is allowed to create new issuers
   * defaults to the governance account, but can be changed by governance (to, for instance, a DAO/group/multisig)
   */
  issuer_creator: string;
  /**
   * credit_type_creation_fee is the fee that is charged for creating a new credit type
   * defaults to 50 $MPWR, but can be changed by governance
   */

  credit_type_creation_fee?: CoinSDKType;
}
export interface IDCounters {
  nextIssuerId: Long;
  nextApplicantId: Long;
  nextProjectId: Long;
}
export interface IDCountersSDKType {
  next_issuer_id: Long;
  next_applicant_id: Long;
  next_project_id: Long;
}
export interface Issuer {
  id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface IssuerSDKType {
  id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface Applicant {
  id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface ApplicantSDKType {
  id: Long;
  name: string;
  description: string;
  admin: string;
}
export interface CreditType {
  /** abbreviation is the short-hand name *and* the identifier for a credit type */
  abbreviation: string;
  issuerId: Long;
  name: string;
}
export interface CreditTypeSDKType {
  /** abbreviation is the short-hand name *and* the identifier for a credit type */
  abbreviation: string;
  issuer_id: Long;
  name: string;
}
export interface Project {
  id: Long;
  applicantId: Long;
  creditTypeAbbreviation: string;
  name: string;
  status: ProjectStatus;
}
export interface ProjectSDKType {
  id: Long;
  applicant_id: Long;
  credit_type_abbreviation: string;
  name: string;
  status: ProjectStatusSDKType;
}
export interface CreditCollection {
  /** denominator of the credit, store key */
  denom: string;
  /** ID of a project related to the collection */

  projectId: Long;
  /** Total amount of active and retired credits for the collection */

  totalAmount?: CreditAmount;
  /** IPFS URI of the metadata */

  metadataUris: string[];
}
export interface CreditCollectionSDKType {
  /** denominator of the credit, store key */
  denom: string;
  /** ID of a project related to the collection */

  project_id: Long;
  /** Total amount of active and retired credits for the collection */

  total_amount?: CreditAmountSDKType;
  /** IPFS URI of the metadata */

  metadata_uris: string[];
}
export interface CreditBalance {
  /** Address of the credits owner, part of compound key */
  owner: string;
  /** denominator of the credit, apart of compound key */

  denom: string;
  /** Number of active and retired credits */

  balance?: CreditAmount;
}
export interface CreditBalanceSDKType {
  /** Address of the credits owner, part of compound key */
  owner: string;
  /** denominator of the credit, apart of compound key */

  denom: string;
  /** Number of active and retired credits */

  balance?: CreditAmountSDKType;
}
export interface CreditAmount {
  active: Long;
  retired: Long;
}
export interface CreditAmountSDKType {
  active: Long;
  retired: Long;
}
export interface ProvenData {
  uri: string;
  hash: string;
}
export interface ProvenDataSDKType {
  uri: string;
  hash: string;
}

function createBaseParams(): Params {
  return {
    issuerCreator: "",
    creditTypeCreationFee: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerCreator !== "") {
      writer.uint32(10).string(message.issuerCreator);
    }

    if (message.creditTypeCreationFee !== undefined) {
      Coin.encode(message.creditTypeCreationFee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerCreator = reader.string();
          break;

        case 2:
          message.creditTypeCreationFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      issuerCreator: isSet(object.issuerCreator) ? String(object.issuerCreator) : "",
      creditTypeCreationFee: isSet(object.creditTypeCreationFee) ? Coin.fromJSON(object.creditTypeCreationFee) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.issuerCreator !== undefined && (obj.issuerCreator = message.issuerCreator);
    message.creditTypeCreationFee !== undefined && (obj.creditTypeCreationFee = message.creditTypeCreationFee ? Coin.toJSON(message.creditTypeCreationFee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.issuerCreator = object.issuerCreator ?? "";
    message.creditTypeCreationFee = object.creditTypeCreationFee !== undefined && object.creditTypeCreationFee !== null ? Coin.fromPartial(object.creditTypeCreationFee) : undefined;
    return message;
  }

};

function createBaseIDCounters(): IDCounters {
  return {
    nextIssuerId: Long.UZERO,
    nextApplicantId: Long.UZERO,
    nextProjectId: Long.UZERO
  };
}

export const IDCounters = {
  encode(message: IDCounters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextIssuerId.isZero()) {
      writer.uint32(8).uint64(message.nextIssuerId);
    }

    if (!message.nextApplicantId.isZero()) {
      writer.uint32(16).uint64(message.nextApplicantId);
    }

    if (!message.nextProjectId.isZero()) {
      writer.uint32(24).uint64(message.nextProjectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDCounters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCounters();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextIssuerId = (reader.uint64() as Long);
          break;

        case 2:
          message.nextApplicantId = (reader.uint64() as Long);
          break;

        case 3:
          message.nextProjectId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IDCounters {
    return {
      nextIssuerId: isSet(object.nextIssuerId) ? Long.fromValue(object.nextIssuerId) : Long.UZERO,
      nextApplicantId: isSet(object.nextApplicantId) ? Long.fromValue(object.nextApplicantId) : Long.UZERO,
      nextProjectId: isSet(object.nextProjectId) ? Long.fromValue(object.nextProjectId) : Long.UZERO
    };
  },

  toJSON(message: IDCounters): unknown {
    const obj: any = {};
    message.nextIssuerId !== undefined && (obj.nextIssuerId = (message.nextIssuerId || Long.UZERO).toString());
    message.nextApplicantId !== undefined && (obj.nextApplicantId = (message.nextApplicantId || Long.UZERO).toString());
    message.nextProjectId !== undefined && (obj.nextProjectId = (message.nextProjectId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<IDCounters>): IDCounters {
    const message = createBaseIDCounters();
    message.nextIssuerId = object.nextIssuerId !== undefined && object.nextIssuerId !== null ? Long.fromValue(object.nextIssuerId) : Long.UZERO;
    message.nextApplicantId = object.nextApplicantId !== undefined && object.nextApplicantId !== null ? Long.fromValue(object.nextApplicantId) : Long.UZERO;
    message.nextProjectId = object.nextProjectId !== undefined && object.nextProjectId !== null ? Long.fromValue(object.nextProjectId) : Long.UZERO;
    return message;
  }

};

function createBaseIssuer(): Issuer {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}

export const Issuer = {
  encode(message: Issuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
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

  fromJSON(object: any): Issuer {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },

  fromPartial(object: Partial<Issuer>): Issuer {
    const message = createBaseIssuer();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseApplicant(): Applicant {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}

export const Applicant = {
  encode(message: Applicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Applicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
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

  fromJSON(object: any): Applicant {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },

  toJSON(message: Applicant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },

  fromPartial(object: Partial<Applicant>): Applicant {
    const message = createBaseApplicant();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }

};

function createBaseCreditType(): CreditType {
  return {
    abbreviation: "",
    issuerId: Long.UZERO,
    name: ""
  };
}

export const CreditType = {
  encode(message: CreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }

    if (!message.issuerId.isZero()) {
      writer.uint32(16).uint64(message.issuerId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;

        case 2:
          message.issuerId = (reader.uint64() as Long);
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

  fromJSON(object: any): CreditType {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      issuerId: isSet(object.issuerId) ? Long.fromValue(object.issuerId) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: Partial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.abbreviation = object.abbreviation ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseProject(): Project {
  return {
    id: Long.UZERO,
    applicantId: Long.UZERO,
    creditTypeAbbreviation: "",
    name: "",
    status: 0
  };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
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

        case 5:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Project {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      applicantId: isSet(object.applicantId) ? Long.fromValue(object.applicantId) : Long.UZERO,
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? projectStatusFromJSON(object.status) : 0
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || Long.UZERO).toString());
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = projectStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: Partial<Project>): Project {
    const message = createBaseProject();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.name = object.name ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseCreditCollection(): CreditCollection {
  return {
    denom: "",
    projectId: Long.UZERO,
    totalAmount: undefined,
    metadataUris: []
  };
}

export const CreditCollection = {
  encode(message: CreditCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.totalAmount !== undefined) {
      CreditAmount.encode(message.totalAmount, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.metadataUris) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditCollection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.totalAmount = CreditAmount.decode(reader, reader.uint32());
          break;

        case 4:
          message.metadataUris.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreditCollection {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      projectId: isSet(object.projectId) ? Long.fromValue(object.projectId) : Long.UZERO,
      totalAmount: isSet(object.totalAmount) ? CreditAmount.fromJSON(object.totalAmount) : undefined,
      metadataUris: Array.isArray(object?.metadataUris) ? object.metadataUris.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: CreditCollection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount ? CreditAmount.toJSON(message.totalAmount) : undefined);

    if (message.metadataUris) {
      obj.metadataUris = message.metadataUris.map(e => e);
    } else {
      obj.metadataUris = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CreditCollection>): CreditCollection {
    const message = createBaseCreditCollection();
    message.denom = object.denom ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? CreditAmount.fromPartial(object.totalAmount) : undefined;
    message.metadataUris = object.metadataUris?.map(e => e) || [];
    return message;
  }

};

function createBaseCreditBalance(): CreditBalance {
  return {
    owner: "",
    denom: "",
    balance: undefined
  };
}

export const CreditBalance = {
  encode(message: CreditBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.balance !== undefined) {
      CreditAmount.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditBalance();

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
          message.balance = CreditAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreditBalance {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? CreditAmount.fromJSON(object.balance) : undefined
    };
  },

  toJSON(message: CreditBalance): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance ? CreditAmount.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CreditBalance>): CreditBalance {
    const message = createBaseCreditBalance();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? CreditAmount.fromPartial(object.balance) : undefined;
    return message;
  }

};

function createBaseCreditAmount(): CreditAmount {
  return {
    active: Long.UZERO,
    retired: Long.UZERO
  };
}

export const CreditAmount = {
  encode(message: CreditAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.active.isZero()) {
      writer.uint32(8).uint64(message.active);
    }

    if (!message.retired.isZero()) {
      writer.uint32(16).uint64(message.retired);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditAmount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = (reader.uint64() as Long);
          break;

        case 2:
          message.retired = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreditAmount {
    return {
      active: isSet(object.active) ? Long.fromValue(object.active) : Long.UZERO,
      retired: isSet(object.retired) ? Long.fromValue(object.retired) : Long.UZERO
    };
  },

  toJSON(message: CreditAmount): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = (message.active || Long.UZERO).toString());
    message.retired !== undefined && (obj.retired = (message.retired || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<CreditAmount>): CreditAmount {
    const message = createBaseCreditAmount();
    message.active = object.active !== undefined && object.active !== null ? Long.fromValue(object.active) : Long.UZERO;
    message.retired = object.retired !== undefined && object.retired !== null ? Long.fromValue(object.retired) : Long.UZERO;
    return message;
  }

};

function createBaseProvenData(): ProvenData {
  return {
    uri: "",
    hash: ""
  };
}

export const ProvenData = {
  encode(message: ProvenData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }

    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProvenData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvenData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;

        case 2:
          message.hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProvenData {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },

  toJSON(message: ProvenData): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: Partial<ProvenData>): ProvenData {
    const message = createBaseProvenData();
    message.uri = object.uri ?? "";
    message.hash = object.hash ?? "";
    return message;
  }

};