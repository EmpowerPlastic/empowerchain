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
export const ProjectStatusSDKType = ProjectStatus;
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
  issuer_creator: string;
  credit_type_creation_fee?: CoinSDKType;
}
export interface IDCounters {
  nextIssuerId: bigint;
  nextApplicantId: bigint;
  nextProjectId: bigint;
}
export interface IDCountersSDKType {
  next_issuer_id: bigint;
  next_applicant_id: bigint;
  next_project_id: bigint;
}
export interface Issuer {
  id: bigint;
  name: string;
  description: string;
  admin: string;
}
export interface IssuerSDKType {
  id: bigint;
  name: string;
  description: string;
  admin: string;
}
export interface Applicant {
  id: bigint;
  name: string;
  description: string;
  admin: string;
}
export interface ApplicantSDKType {
  id: bigint;
  name: string;
  description: string;
  admin: string;
}
export interface CreditType {
  /** abbreviation is the short-hand name *and* the identifier for a credit type */
  abbreviation: string;
  issuerId: bigint;
  name: string;
}
export interface CreditTypeSDKType {
  abbreviation: string;
  issuer_id: bigint;
  name: string;
}
export interface Project {
  id: bigint;
  applicantId: bigint;
  creditTypeAbbreviation: string;
  name: string;
  status: ProjectStatus;
}
export interface ProjectSDKType {
  id: bigint;
  applicant_id: bigint;
  credit_type_abbreviation: string;
  name: string;
  status: ProjectStatus;
}
export interface CreditCollection {
  /** denominator of the credit, store key */
  denom: string;
  /** ID of a project related to the collection */
  projectId: bigint;
  /** Total amount of active and retired credits for the collection */
  totalAmount?: CreditAmount;
  /** IPFS URI of the metadata */
  metadataUris: string[];
}
export interface CreditCollectionSDKType {
  denom: string;
  project_id: bigint;
  total_amount?: CreditAmountSDKType;
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
  owner: string;
  denom: string;
  balance?: CreditAmountSDKType;
}
export interface CreditAmount {
  active: bigint;
  retired: bigint;
}
export interface CreditAmountSDKType {
  active: bigint;
  retired: bigint;
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
    nextIssuerId: BigInt("0"),
    nextApplicantId: BigInt("0"),
    nextProjectId: BigInt("0")
  };
}
export const IDCounters = {
  encode(message: IDCounters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextIssuerId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.nextIssuerId.toString()));
    }
    if (message.nextApplicantId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.nextApplicantId.toString()));
    }
    if (message.nextProjectId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.nextProjectId.toString()));
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
          message.nextIssuerId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.nextApplicantId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.nextProjectId = BigInt(reader.uint64().toString());
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
      nextIssuerId: isSet(object.nextIssuerId) ? BigInt(object.nextIssuerId.toString()) : BigInt("0"),
      nextApplicantId: isSet(object.nextApplicantId) ? BigInt(object.nextApplicantId.toString()) : BigInt("0"),
      nextProjectId: isSet(object.nextProjectId) ? BigInt(object.nextProjectId.toString()) : BigInt("0")
    };
  },
  toJSON(message: IDCounters): unknown {
    const obj: any = {};
    message.nextIssuerId !== undefined && (obj.nextIssuerId = (message.nextIssuerId || BigInt("0")).toString());
    message.nextApplicantId !== undefined && (obj.nextApplicantId = (message.nextApplicantId || BigInt("0")).toString());
    message.nextProjectId !== undefined && (obj.nextProjectId = (message.nextProjectId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<IDCounters>): IDCounters {
    const message = createBaseIDCounters();
    message.nextIssuerId = object.nextIssuerId !== undefined && object.nextIssuerId !== null ? BigInt(object.nextIssuerId.toString()) : BigInt("0");
    message.nextApplicantId = object.nextApplicantId !== undefined && object.nextApplicantId !== null ? BigInt(object.nextApplicantId.toString()) : BigInt("0");
    message.nextProjectId = object.nextProjectId !== undefined && object.nextProjectId !== null ? BigInt(object.nextProjectId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseIssuer(): Issuer {
  return {
    id: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
export const Issuer = {
  encode(message: Issuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.id.toString()));
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
          message.id = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<Issuer>): Issuer {
    const message = createBaseIssuer();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseApplicant(): Applicant {
  return {
    id: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
export const Applicant = {
  encode(message: Applicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.id.toString()));
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
          message.id = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: Applicant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<Applicant>): Applicant {
    const message = createBaseApplicant();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseCreditType(): CreditType {
  return {
    abbreviation: "",
    issuerId: BigInt("0"),
    name: ""
  };
}
export const CreditType = {
  encode(message: CreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.issuerId.toString()));
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
          message.issuerId = BigInt(reader.uint64().toString());
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
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.abbreviation = object.abbreviation ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseProject(): Project {
  return {
    id: BigInt("0"),
    applicantId: BigInt("0"),
    creditTypeAbbreviation: "",
    name: "",
    status: 0
  };
}
export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.id.toString()));
    }
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.applicantId.toString()));
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
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.applicantId = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      status: isSet(object.status) ? projectStatusFromJSON(object.status) : 0
    };
  },
  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt("0")).toString());
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = projectStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object: Partial<Project>): Project {
    const message = createBaseProject();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.name = object.name ?? "";
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseCreditCollection(): CreditCollection {
  return {
    denom: "",
    projectId: BigInt("0"),
    totalAmount: undefined,
    metadataUris: []
  };
}
export const CreditCollection = {
  encode(message: CreditCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.projectId.toString()));
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
          message.projectId = BigInt(reader.uint64().toString());
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
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      totalAmount: isSet(object.totalAmount) ? CreditAmount.fromJSON(object.totalAmount) : undefined,
      metadataUris: Array.isArray(object?.metadataUris) ? object.metadataUris.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: CreditCollection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
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
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
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
    active: BigInt("0"),
    retired: BigInt("0")
  };
}
export const CreditAmount = {
  encode(message: CreditAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.active.toString()));
    }
    if (message.retired !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.retired.toString()));
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
          message.active = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.retired = BigInt(reader.uint64().toString());
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
      active: isSet(object.active) ? BigInt(object.active.toString()) : BigInt("0"),
      retired: isSet(object.retired) ? BigInt(object.retired.toString()) : BigInt("0")
    };
  },
  toJSON(message: CreditAmount): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = (message.active || BigInt("0")).toString());
    message.retired !== undefined && (obj.retired = (message.retired || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<CreditAmount>): CreditAmount {
    const message = createBaseCreditAmount();
    message.active = object.active !== undefined && object.active !== null ? BigInt(object.active.toString()) : BigInt("0");
    message.retired = object.retired !== undefined && object.retired !== null ? BigInt(object.retired.toString()) : BigInt("0");
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