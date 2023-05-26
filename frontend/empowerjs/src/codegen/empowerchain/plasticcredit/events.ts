import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
/** EventCreateIssuer is an event emitted when a new issuer is created */
export interface EventCreateIssuer {
  issuerId: bigint;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateIssuer is an event emitted when a new issuer is created */
export interface EventCreateIssuerSDKType {
  issuer_id: bigint;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */
export interface EventUpdateIssuer {
  issuerId: bigint;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateIssuer is an event emitted when an issuer is updated */
export interface EventUpdateIssuerSDKType {
  issuer_id: bigint;
  creator: string;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateProject is an event emitted when a new Project is created */
export interface EventCreateProject {
  creator: string;
  projectId: bigint;
  applicantId: bigint;
  creditTypeAbbreviation: string;
  name: string;
}
/** EventCreateProject is an event emitted when a new Project is created */
export interface EventCreateProjectSDKType {
  creator: string;
  project_id: bigint;
  applicant_id: bigint;
  credit_type_abbreviation: string;
  name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */
export interface EventUpdateProject {
  updater: string;
  projectId: bigint;
  name: string;
}
/** EventUpdateProject is an event emitted when a Project is updated */
export interface EventUpdateProjectSDKType {
  updater: string;
  project_id: bigint;
  name: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit type */
export interface EventProjectApproved {
  projectId: bigint;
  approvedForCreditTypeAbbreviation: string;
  approvingIssuerId: bigint;
  approvedBy: string;
}
/** EventProjectApproved is an event emitted when a project is approved by the issuer associated with the projects credit type */
export interface EventProjectApprovedSDKType {
  project_id: bigint;
  approved_for_credit_type_abbreviation: string;
  approving_issuer_id: bigint;
  approved_by: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit type */
export interface EventProjectRejected {
  projectId: bigint;
  rejectedForCreditTypeAbbreviation: string;
  rejectingIssuerId: bigint;
  rejectedBy: string;
}
/** EventProjectRejected is an event emitted when a project is rejected by the issuer associated with the projects credit type */
export interface EventProjectRejectedSDKType {
  project_id: bigint;
  rejected_for_credit_type_abbreviation: string;
  rejecting_issuer_id: bigint;
  rejected_by: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit type */
export interface EventProjectSuspended {
  projectId: bigint;
  suspendedForCreditTypeAbbreviation: string;
  suspendingIssuerId: bigint;
  suspendedBy: string;
}
/** EventProjectSuspended is an event emitted when a project is suspended by the issuer associated with the projects credit type */
export interface EventProjectSuspendedSDKType {
  project_id: bigint;
  suspended_for_credit_type_abbreviation: string;
  suspending_issuer_id: bigint;
  suspended_by: string;
}
/** EventIssuedCredits is an event emitted when new credits are issued */
export interface EventIssuedCredits {
  issuerId: bigint;
  projectId: bigint;
  applicantId: bigint;
  recipient: string;
  creditTypeAbbreviation: string;
  denom: string;
  amount: bigint;
  issuerAddress: string;
  metadataUris: string[];
}
/** EventIssuedCredits is an event emitted when new credits are issued */
export interface EventIssuedCreditsSDKType {
  issuer_id: bigint;
  project_id: bigint;
  applicant_id: bigint;
  recipient: string;
  credit_type_abbreviation: string;
  denom: string;
  amount: bigint;
  issuer_address: string;
  metadata_uris: string[];
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */
export interface EventTransferCredits {
  sender: string;
  recipient: string;
  denom: string;
  amount: bigint;
  issuerId: bigint;
  creditTypeAbbreviation: string;
}
/** EventTransferCredits is an event emitted when credits are being transfered from one account to another */
export interface EventTransferCreditsSDKType {
  sender: string;
  recipient: string;
  denom: string;
  amount: bigint;
  issuer_id: bigint;
  credit_type_abbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */
export interface EventRetiredCredits {
  owner: string;
  denom: string;
  amount: bigint;
  issuerId: bigint;
  creditTypeAbbreviation: string;
}
/** EventRetiredCredits is an event emitted when credits are retired */
export interface EventRetiredCreditsSDKType {
  owner: string;
  denom: string;
  amount: bigint;
  issuer_id: bigint;
  credit_type_abbreviation: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */
export interface EventCreateApplicant {
  applicantId: bigint;
  name: string;
  description: string;
  admin: string;
}
/** EventCreateApplicant is an event emitted when a new applicant is created */
export interface EventCreateApplicantSDKType {
  applicant_id: bigint;
  name: string;
  description: string;
  admin: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */
export interface EventUpdateApplicant {
  applicantId: bigint;
  name: string;
  description: string;
  admin: string;
  updater: string;
}
/** EventUpdateApplicant is an event emitted when an applicant is updated */
export interface EventUpdateApplicantSDKType {
  applicant_id: bigint;
  name: string;
  description: string;
  admin: string;
  updater: string;
}
/** EventCreateCreditType is an event emitted when a new Credit Type is created */
export interface EventCreateCreditType {
  creator: string;
  abbreviation: string;
  issuerId: bigint;
  name: string;
}
/** EventCreateCreditType is an event emitted when a new Credit Type is created */
export interface EventCreateCreditTypeSDKType {
  creator: string;
  abbreviation: string;
  issuer_id: bigint;
  name: string;
}
/** EventUpdateCreditType is an event emitted when a Credit Type is updated */
export interface EventUpdateCreditType {
  updater: string;
  abbreviation: string;
  name: string;
}
/** EventUpdateCreditType is an event emitted when a Credit Type is updated */
export interface EventUpdateCreditTypeSDKType {
  updater: string;
  abbreviation: string;
  name: string;
}
function createBaseEventCreateIssuer(): EventCreateIssuer {
  return {
    issuerId: BigInt("0"),
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
export const EventCreateIssuer = {
  encode(message: EventCreateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.creator = reader.string();
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
  fromJSON(object: any): EventCreateIssuer {
    return {
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: EventCreateIssuer): unknown {
    const obj: any = {};
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<EventCreateIssuer>): EventCreateIssuer {
    const message = createBaseEventCreateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseEventUpdateIssuer(): EventUpdateIssuer {
  return {
    issuerId: BigInt("0"),
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
export const EventUpdateIssuer = {
  encode(message: EventUpdateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.creator = reader.string();
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
  fromJSON(object: any): EventUpdateIssuer {
    return {
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: EventUpdateIssuer): unknown {
    const obj: any = {};
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateIssuer>): EventUpdateIssuer {
    const message = createBaseEventUpdateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseEventCreateProject(): EventCreateProject {
  return {
    creator: "",
    projectId: BigInt("0"),
    applicantId: BigInt("0"),
    creditTypeAbbreviation: "",
    name: ""
  };
}
export const EventCreateProject = {
  encode(message: EventCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.applicantId.toString()));
    }
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(34).string(message.creditTypeAbbreviation);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.applicantId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.creditTypeAbbreviation = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateProject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: EventCreateProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<EventCreateProject>): EventCreateProject {
    const message = createBaseEventCreateProject();
    message.creator = object.creator ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseEventUpdateProject(): EventUpdateProject {
  return {
    updater: "",
    projectId: BigInt("0"),
    name: ""
  };
}
export const EventUpdateProject = {
  encode(message: EventUpdateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
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
  fromJSON(object: any): EventUpdateProject {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: EventUpdateProject): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateProject>): EventUpdateProject {
    const message = createBaseEventUpdateProject();
    message.updater = object.updater ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseEventProjectApproved(): EventProjectApproved {
  return {
    projectId: BigInt("0"),
    approvedForCreditTypeAbbreviation: "",
    approvingIssuerId: BigInt("0"),
    approvedBy: ""
  };
}
export const EventProjectApproved = {
  encode(message: EventProjectApproved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.approvedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.approvedForCreditTypeAbbreviation);
    }
    if (message.approvingIssuerId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.approvingIssuerId.toString()));
    }
    if (message.approvedBy !== "") {
      writer.uint32(34).string(message.approvedBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectApproved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectApproved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.approvedForCreditTypeAbbreviation = reader.string();
          break;
        case 3:
          message.approvingIssuerId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.approvedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProjectApproved {
    return {
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      approvedForCreditTypeAbbreviation: isSet(object.approvedForCreditTypeAbbreviation) ? String(object.approvedForCreditTypeAbbreviation) : "",
      approvingIssuerId: isSet(object.approvingIssuerId) ? BigInt(object.approvingIssuerId.toString()) : BigInt("0"),
      approvedBy: isSet(object.approvedBy) ? String(object.approvedBy) : ""
    };
  },
  toJSON(message: EventProjectApproved): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.approvedForCreditTypeAbbreviation !== undefined && (obj.approvedForCreditTypeAbbreviation = message.approvedForCreditTypeAbbreviation);
    message.approvingIssuerId !== undefined && (obj.approvingIssuerId = (message.approvingIssuerId || BigInt("0")).toString());
    message.approvedBy !== undefined && (obj.approvedBy = message.approvedBy);
    return obj;
  },
  fromPartial(object: Partial<EventProjectApproved>): EventProjectApproved {
    const message = createBaseEventProjectApproved();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.approvedForCreditTypeAbbreviation = object.approvedForCreditTypeAbbreviation ?? "";
    message.approvingIssuerId = object.approvingIssuerId !== undefined && object.approvingIssuerId !== null ? BigInt(object.approvingIssuerId.toString()) : BigInt("0");
    message.approvedBy = object.approvedBy ?? "";
    return message;
  }
};
function createBaseEventProjectRejected(): EventProjectRejected {
  return {
    projectId: BigInt("0"),
    rejectedForCreditTypeAbbreviation: "",
    rejectingIssuerId: BigInt("0"),
    rejectedBy: ""
  };
}
export const EventProjectRejected = {
  encode(message: EventProjectRejected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.rejectedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.rejectedForCreditTypeAbbreviation);
    }
    if (message.rejectingIssuerId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.rejectingIssuerId.toString()));
    }
    if (message.rejectedBy !== "") {
      writer.uint32(34).string(message.rejectedBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectRejected {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectRejected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.rejectedForCreditTypeAbbreviation = reader.string();
          break;
        case 3:
          message.rejectingIssuerId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.rejectedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProjectRejected {
    return {
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      rejectedForCreditTypeAbbreviation: isSet(object.rejectedForCreditTypeAbbreviation) ? String(object.rejectedForCreditTypeAbbreviation) : "",
      rejectingIssuerId: isSet(object.rejectingIssuerId) ? BigInt(object.rejectingIssuerId.toString()) : BigInt("0"),
      rejectedBy: isSet(object.rejectedBy) ? String(object.rejectedBy) : ""
    };
  },
  toJSON(message: EventProjectRejected): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.rejectedForCreditTypeAbbreviation !== undefined && (obj.rejectedForCreditTypeAbbreviation = message.rejectedForCreditTypeAbbreviation);
    message.rejectingIssuerId !== undefined && (obj.rejectingIssuerId = (message.rejectingIssuerId || BigInt("0")).toString());
    message.rejectedBy !== undefined && (obj.rejectedBy = message.rejectedBy);
    return obj;
  },
  fromPartial(object: Partial<EventProjectRejected>): EventProjectRejected {
    const message = createBaseEventProjectRejected();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.rejectedForCreditTypeAbbreviation = object.rejectedForCreditTypeAbbreviation ?? "";
    message.rejectingIssuerId = object.rejectingIssuerId !== undefined && object.rejectingIssuerId !== null ? BigInt(object.rejectingIssuerId.toString()) : BigInt("0");
    message.rejectedBy = object.rejectedBy ?? "";
    return message;
  }
};
function createBaseEventProjectSuspended(): EventProjectSuspended {
  return {
    projectId: BigInt("0"),
    suspendedForCreditTypeAbbreviation: "",
    suspendingIssuerId: BigInt("0"),
    suspendedBy: ""
  };
}
export const EventProjectSuspended = {
  encode(message: EventProjectSuspended, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.suspendedForCreditTypeAbbreviation !== "") {
      writer.uint32(18).string(message.suspendedForCreditTypeAbbreviation);
    }
    if (message.suspendingIssuerId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.suspendingIssuerId.toString()));
    }
    if (message.suspendedBy !== "") {
      writer.uint32(34).string(message.suspendedBy);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventProjectSuspended {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectSuspended();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.suspendedForCreditTypeAbbreviation = reader.string();
          break;
        case 3:
          message.suspendingIssuerId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.suspendedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProjectSuspended {
    return {
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      suspendedForCreditTypeAbbreviation: isSet(object.suspendedForCreditTypeAbbreviation) ? String(object.suspendedForCreditTypeAbbreviation) : "",
      suspendingIssuerId: isSet(object.suspendingIssuerId) ? BigInt(object.suspendingIssuerId.toString()) : BigInt("0"),
      suspendedBy: isSet(object.suspendedBy) ? String(object.suspendedBy) : ""
    };
  },
  toJSON(message: EventProjectSuspended): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.suspendedForCreditTypeAbbreviation !== undefined && (obj.suspendedForCreditTypeAbbreviation = message.suspendedForCreditTypeAbbreviation);
    message.suspendingIssuerId !== undefined && (obj.suspendingIssuerId = (message.suspendingIssuerId || BigInt("0")).toString());
    message.suspendedBy !== undefined && (obj.suspendedBy = message.suspendedBy);
    return obj;
  },
  fromPartial(object: Partial<EventProjectSuspended>): EventProjectSuspended {
    const message = createBaseEventProjectSuspended();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.suspendedForCreditTypeAbbreviation = object.suspendedForCreditTypeAbbreviation ?? "";
    message.suspendingIssuerId = object.suspendingIssuerId !== undefined && object.suspendingIssuerId !== null ? BigInt(object.suspendingIssuerId.toString()) : BigInt("0");
    message.suspendedBy = object.suspendedBy ?? "";
    return message;
  }
};
function createBaseEventIssuedCredits(): EventIssuedCredits {
  return {
    issuerId: BigInt("0"),
    projectId: BigInt("0"),
    applicantId: BigInt("0"),
    recipient: "",
    creditTypeAbbreviation: "",
    denom: "",
    amount: BigInt("0"),
    issuerAddress: "",
    metadataUris: []
  };
}
export const EventIssuedCredits = {
  encode(message: EventIssuedCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.projectId.toString()));
    }
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.applicantId.toString()));
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(42).string(message.creditTypeAbbreviation);
    }
    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(56).uint64(Long.fromString(message.amount.toString()));
    }
    if (message.issuerAddress !== "") {
      writer.uint32(66).string(message.issuerAddress);
    }
    for (const v of message.metadataUris) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssuedCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssuedCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.projectId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.applicantId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.creditTypeAbbreviation = reader.string();
          break;
        case 6:
          message.denom = reader.string();
          break;
        case 7:
          message.amount = BigInt(reader.uint64().toString());
          break;
        case 8:
          message.issuerAddress = reader.string();
          break;
        case 9:
          message.metadataUris.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventIssuedCredits {
    return {
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      projectId: isSet(object.projectId) ? BigInt(object.projectId.toString()) : BigInt("0"),
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0"),
      issuerAddress: isSet(object.issuerAddress) ? String(object.issuerAddress) : "",
      metadataUris: Array.isArray(object?.metadataUris) ? object.metadataUris.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: EventIssuedCredits): unknown {
    const obj: any = {};
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.projectId !== undefined && (obj.projectId = (message.projectId || BigInt("0")).toString());
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt("0")).toString());
    message.issuerAddress !== undefined && (obj.issuerAddress = message.issuerAddress);
    if (message.metadataUris) {
      obj.metadataUris = message.metadataUris.map(e => e);
    } else {
      obj.metadataUris = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventIssuedCredits>): EventIssuedCredits {
    const message = createBaseEventIssuedCredits();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt("0");
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.recipient = object.recipient ?? "";
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    message.issuerAddress = object.issuerAddress ?? "";
    message.metadataUris = object.metadataUris?.map(e => e) || [];
    return message;
  }
};
function createBaseEventTransferCredits(): EventTransferCredits {
  return {
    sender: "",
    recipient: "",
    denom: "",
    amount: BigInt("0"),
    issuerId: BigInt("0"),
    creditTypeAbbreviation: ""
  };
}
export const EventTransferCredits = {
  encode(message: EventTransferCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(Long.fromString(message.amount.toString()));
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(40).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(50).string(message.creditTypeAbbreviation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.amount = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.creditTypeAbbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTransferCredits {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0"),
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : ""
    };
  },
  toJSON(message: EventTransferCredits): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt("0")).toString());
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    return obj;
  },
  fromPartial(object: Partial<EventTransferCredits>): EventTransferCredits {
    const message = createBaseEventTransferCredits();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    return message;
  }
};
function createBaseEventRetiredCredits(): EventRetiredCredits {
  return {
    owner: "",
    denom: "",
    amount: BigInt("0"),
    issuerId: BigInt("0"),
    creditTypeAbbreviation: ""
  };
}
export const EventRetiredCredits = {
  encode(message: EventRetiredCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.amount.toString()));
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(32).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.creditTypeAbbreviation !== "") {
      writer.uint32(42).string(message.creditTypeAbbreviation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRetiredCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRetiredCredits();
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
          message.amount = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.issuerId = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.creditTypeAbbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRetiredCredits {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0"),
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      creditTypeAbbreviation: isSet(object.creditTypeAbbreviation) ? String(object.creditTypeAbbreviation) : ""
    };
  },
  toJSON(message: EventRetiredCredits): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt("0")).toString());
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.creditTypeAbbreviation !== undefined && (obj.creditTypeAbbreviation = message.creditTypeAbbreviation);
    return obj;
  },
  fromPartial(object: Partial<EventRetiredCredits>): EventRetiredCredits {
    const message = createBaseEventRetiredCredits();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.creditTypeAbbreviation = object.creditTypeAbbreviation ?? "";
    return message;
  }
};
function createBaseEventCreateApplicant(): EventCreateApplicant {
  return {
    applicantId: BigInt("0"),
    name: "",
    description: "",
    admin: ""
  };
}
export const EventCreateApplicant = {
  encode(message: EventCreateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.applicantId.toString()));
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = BigInt(reader.uint64().toString());
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
  fromJSON(object: any): EventCreateApplicant {
    return {
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: EventCreateApplicant): unknown {
    const obj: any = {};
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<EventCreateApplicant>): EventCreateApplicant {
    const message = createBaseEventCreateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseEventUpdateApplicant(): EventUpdateApplicant {
  return {
    applicantId: BigInt("0"),
    name: "",
    description: "",
    admin: "",
    updater: ""
  };
}
export const EventUpdateApplicant = {
  encode(message: EventUpdateApplicant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicantId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.applicantId.toString()));
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
    if (message.updater !== "") {
      writer.uint32(42).string(message.updater);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateApplicant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = BigInt(reader.uint64().toString());
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
        case 5:
          message.updater = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateApplicant {
    return {
      applicantId: isSet(object.applicantId) ? BigInt(object.applicantId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      updater: isSet(object.updater) ? String(object.updater) : ""
    };
  },
  toJSON(message: EventUpdateApplicant): unknown {
    const obj: any = {};
    message.applicantId !== undefined && (obj.applicantId = (message.applicantId || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.admin !== undefined && (obj.admin = message.admin);
    message.updater !== undefined && (obj.updater = message.updater);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateApplicant>): EventUpdateApplicant {
    const message = createBaseEventUpdateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? BigInt(object.applicantId.toString()) : BigInt("0");
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.admin = object.admin ?? "";
    message.updater = object.updater ?? "";
    return message;
  }
};
function createBaseEventCreateCreditType(): EventCreateCreditType {
  return {
    creator: "",
    abbreviation: "",
    issuerId: BigInt("0"),
    name: ""
  };
}
export const EventCreateCreditType = {
  encode(message: EventCreateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }
    if (message.issuerId !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.issuerId.toString()));
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCreditType();
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
          message.issuerId = BigInt(reader.uint64().toString());
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
  fromJSON(object: any): EventCreateCreditType {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      issuerId: isSet(object.issuerId) ? BigInt(object.issuerId.toString()) : BigInt("0"),
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: EventCreateCreditType): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.issuerId !== undefined && (obj.issuerId = (message.issuerId || BigInt("0")).toString());
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<EventCreateCreditType>): EventCreateCreditType {
    const message = createBaseEventCreateCreditType();
    message.creator = object.creator ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? BigInt(object.issuerId.toString()) : BigInt("0");
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseEventUpdateCreditType(): EventUpdateCreditType {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}
export const EventUpdateCreditType = {
  encode(message: EventUpdateCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCreditType();
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
  fromJSON(object: any): EventUpdateCreditType {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: EventUpdateCreditType): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateCreditType>): EventUpdateCreditType {
    const message = createBaseEventUpdateCreditType();
    message.updater = object.updater ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    return message;
  }
};