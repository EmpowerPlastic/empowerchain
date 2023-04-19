import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** EventCreateIssuer is an event emitted when a new issuer is created */

function createBaseEventCreateIssuer() {
  return {
    issuerId: Long.UZERO,
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
export const EventCreateIssuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$creator, _object$name, _object$description, _object$admin;
    const message = createBaseEventCreateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    return message;
  }
};
function createBaseEventUpdateIssuer() {
  return {
    issuerId: Long.UZERO,
    creator: "",
    name: "",
    description: "",
    admin: ""
  };
}
export const EventUpdateIssuer = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$creator2, _object$name2, _object$description2, _object$admin2;
    const message = createBaseEventUpdateIssuer();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    return message;
  }
};
function createBaseEventCreateProject() {
  return {
    creator: "",
    applicantId: Long.UZERO,
    creditClassAbbreviation: "",
    name: ""
  };
}
export const EventCreateProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.applicantId.isZero()) {
      writer.uint32(16).uint64(message.applicantId);
    }
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(26).string(message.creditClassAbbreviation);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
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
          message.applicantId = reader.uint64();
          break;
        case 3:
          message.creditClassAbbreviation = reader.string();
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
  fromPartial(object) {
    var _object$creator3, _object$creditClassAb, _object$name3;
    const message = createBaseEventCreateProject();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb = object.creditClassAbbreviation) !== null && _object$creditClassAb !== void 0 ? _object$creditClassAb : "";
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    return message;
  }
};
function createBaseEventUpdateProject() {
  return {
    updater: "",
    projectId: Long.UZERO,
    name: ""
  };
}
export const EventUpdateProject = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
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
          message.projectId = reader.uint64();
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
  fromPartial(object) {
    var _object$updater, _object$name4;
    const message = createBaseEventUpdateProject();
    message.updater = (_object$updater = object.updater) !== null && _object$updater !== void 0 ? _object$updater : "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    return message;
  }
};
function createBaseEventProjectApproved() {
  return {
    projectId: Long.UZERO,
    approvedForCreditClassAbbreviation: "",
    approvingIssuerId: Long.UZERO,
    approvedBy: ""
  };
}
export const EventProjectApproved = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.approvedForCreditClassAbbreviation !== "") {
      writer.uint32(18).string(message.approvedForCreditClassAbbreviation);
    }
    if (!message.approvingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.approvingIssuerId);
    }
    if (message.approvedBy !== "") {
      writer.uint32(34).string(message.approvedBy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectApproved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        case 2:
          message.approvedForCreditClassAbbreviation = reader.string();
          break;
        case 3:
          message.approvingIssuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$approvedForCr, _object$approvedBy;
    const message = createBaseEventProjectApproved();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.approvedForCreditClassAbbreviation = (_object$approvedForCr = object.approvedForCreditClassAbbreviation) !== null && _object$approvedForCr !== void 0 ? _object$approvedForCr : "";
    message.approvingIssuerId = object.approvingIssuerId !== undefined && object.approvingIssuerId !== null ? Long.fromValue(object.approvingIssuerId) : Long.UZERO;
    message.approvedBy = (_object$approvedBy = object.approvedBy) !== null && _object$approvedBy !== void 0 ? _object$approvedBy : "";
    return message;
  }
};
function createBaseEventProjectRejected() {
  return {
    projectId: Long.UZERO,
    rejectedForCreditClassAbbreviation: "",
    rejectingIssuerId: Long.UZERO,
    rejectedBy: ""
  };
}
export const EventProjectRejected = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.rejectedForCreditClassAbbreviation !== "") {
      writer.uint32(18).string(message.rejectedForCreditClassAbbreviation);
    }
    if (!message.rejectingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.rejectingIssuerId);
    }
    if (message.rejectedBy !== "") {
      writer.uint32(34).string(message.rejectedBy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectRejected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        case 2:
          message.rejectedForCreditClassAbbreviation = reader.string();
          break;
        case 3:
          message.rejectingIssuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$rejectedForCr, _object$rejectedBy;
    const message = createBaseEventProjectRejected();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.rejectedForCreditClassAbbreviation = (_object$rejectedForCr = object.rejectedForCreditClassAbbreviation) !== null && _object$rejectedForCr !== void 0 ? _object$rejectedForCr : "";
    message.rejectingIssuerId = object.rejectingIssuerId !== undefined && object.rejectingIssuerId !== null ? Long.fromValue(object.rejectingIssuerId) : Long.UZERO;
    message.rejectedBy = (_object$rejectedBy = object.rejectedBy) !== null && _object$rejectedBy !== void 0 ? _object$rejectedBy : "";
    return message;
  }
};
function createBaseEventProjectSuspended() {
  return {
    projectId: Long.UZERO,
    suspendedForCreditClassAbbreviation: "",
    suspendingIssuerId: Long.UZERO,
    suspendedBy: ""
  };
}
export const EventProjectSuspended = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.projectId.isZero()) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.suspendedForCreditClassAbbreviation !== "") {
      writer.uint32(18).string(message.suspendedForCreditClassAbbreviation);
    }
    if (!message.suspendingIssuerId.isZero()) {
      writer.uint32(24).uint64(message.suspendingIssuerId);
    }
    if (message.suspendedBy !== "") {
      writer.uint32(34).string(message.suspendedBy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProjectSuspended();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        case 2:
          message.suspendedForCreditClassAbbreviation = reader.string();
          break;
        case 3:
          message.suspendingIssuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$suspendedForC, _object$suspendedBy;
    const message = createBaseEventProjectSuspended();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.suspendedForCreditClassAbbreviation = (_object$suspendedForC = object.suspendedForCreditClassAbbreviation) !== null && _object$suspendedForC !== void 0 ? _object$suspendedForC : "";
    message.suspendingIssuerId = object.suspendingIssuerId !== undefined && object.suspendingIssuerId !== null ? Long.fromValue(object.suspendingIssuerId) : Long.UZERO;
    message.suspendedBy = (_object$suspendedBy = object.suspendedBy) !== null && _object$suspendedBy !== void 0 ? _object$suspendedBy : "";
    return message;
  }
};
function createBaseEventIssuedCredits() {
  return {
    issuerId: Long.UZERO,
    projectId: Long.UZERO,
    creditClassAbbreviation: "",
    denom: "",
    amount: Long.UZERO,
    issuerAddress: ""
  };
}
export const EventIssuedCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.issuerId.isZero()) {
      writer.uint32(8).uint64(message.issuerId);
    }
    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(26).string(message.creditClassAbbreviation);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (!message.amount.isZero()) {
      writer.uint32(40).uint64(message.amount);
    }
    if (message.issuerAddress !== "") {
      writer.uint32(50).string(message.issuerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssuedCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerId = reader.uint64();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.creditClassAbbreviation = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.amount = reader.uint64();
          break;
        case 6:
          message.issuerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creditClassAb2, _object$denom, _object$issuerAddress;
    const message = createBaseEventIssuedCredits();
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb2 = object.creditClassAbbreviation) !== null && _object$creditClassAb2 !== void 0 ? _object$creditClassAb2 : "";
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerAddress = (_object$issuerAddress = object.issuerAddress) !== null && _object$issuerAddress !== void 0 ? _object$issuerAddress : "";
    return message;
  }
};
function createBaseEventTransferCredits() {
  return {
    sender: "",
    recipient: "",
    denom: "",
    amount: Long.UZERO,
    issuerId: Long.UZERO,
    creditClassAbbreviation: ""
  };
}
export const EventTransferCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    if (!message.issuerId.isZero()) {
      writer.uint32(40).uint64(message.issuerId);
    }
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(50).string(message.creditClassAbbreviation);
    }
    return writer;
  },
  decode(input, length) {
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
          message.amount = reader.uint64();
          break;
        case 5:
          message.issuerId = reader.uint64();
          break;
        case 6:
          message.creditClassAbbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender, _object$recipient, _object$denom2, _object$creditClassAb3;
    const message = createBaseEventTransferCredits();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb3 = object.creditClassAbbreviation) !== null && _object$creditClassAb3 !== void 0 ? _object$creditClassAb3 : "";
    return message;
  }
};
function createBaseEventRetiredCredits() {
  return {
    owner: "",
    denom: "",
    amount: Long.UZERO,
    issuerId: Long.UZERO,
    creditClassAbbreviation: ""
  };
}
export const EventRetiredCredits = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.issuerId.isZero()) {
      writer.uint32(32).uint64(message.issuerId);
    }
    if (message.creditClassAbbreviation !== "") {
      writer.uint32(42).string(message.creditClassAbbreviation);
    }
    return writer;
  },
  decode(input, length) {
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
          message.amount = reader.uint64();
          break;
        case 4:
          message.issuerId = reader.uint64();
          break;
        case 5:
          message.creditClassAbbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owner, _object$denom3, _object$creditClassAb4;
    const message = createBaseEventRetiredCredits();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.creditClassAbbreviation = (_object$creditClassAb4 = object.creditClassAbbreviation) !== null && _object$creditClassAb4 !== void 0 ? _object$creditClassAb4 : "";
    return message;
  }
};
function createBaseEventCreateApplicant() {
  return {
    applicantId: Long.UZERO,
    name: "",
    description: "",
    admin: ""
  };
}
export const EventCreateApplicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = reader.uint64();
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
  fromPartial(object) {
    var _object$name5, _object$description3, _object$admin3;
    const message = createBaseEventCreateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.description = (_object$description3 = object.description) !== null && _object$description3 !== void 0 ? _object$description3 : "";
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    return message;
  }
};
function createBaseEventUpdateApplicant() {
  return {
    applicantId: Long.UZERO,
    name: "",
    description: "",
    admin: "",
    updater: ""
  };
}
export const EventUpdateApplicant = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.applicantId.isZero()) {
      writer.uint32(8).uint64(message.applicantId);
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateApplicant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicantId = reader.uint64();
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
  fromPartial(object) {
    var _object$name6, _object$description4, _object$admin4, _object$updater2;
    const message = createBaseEventUpdateApplicant();
    message.applicantId = object.applicantId !== undefined && object.applicantId !== null ? Long.fromValue(object.applicantId) : Long.UZERO;
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.description = (_object$description4 = object.description) !== null && _object$description4 !== void 0 ? _object$description4 : "";
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.updater = (_object$updater2 = object.updater) !== null && _object$updater2 !== void 0 ? _object$updater2 : "";
    return message;
  }
};
function createBaseEventCreateCreditClass() {
  return {
    creator: "",
    abbreviation: "",
    issuerId: Long.UZERO,
    name: ""
  };
}
export const EventCreateCreditClass = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCreditClass();
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
          message.issuerId = reader.uint64();
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
  fromPartial(object) {
    var _object$creator4, _object$abbreviation, _object$name7;
    const message = createBaseEventCreateCreditClass();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.abbreviation = (_object$abbreviation = object.abbreviation) !== null && _object$abbreviation !== void 0 ? _object$abbreviation : "";
    message.issuerId = object.issuerId !== undefined && object.issuerId !== null ? Long.fromValue(object.issuerId) : Long.UZERO;
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    return message;
  }
};
function createBaseEventUpdateCreditClass() {
  return {
    updater: "",
    abbreviation: "",
    name: ""
  };
}
export const EventUpdateCreditClass = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCreditClass();
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
  fromPartial(object) {
    var _object$updater3, _object$abbreviation2, _object$name8;
    const message = createBaseEventUpdateCreditClass();
    message.updater = (_object$updater3 = object.updater) !== null && _object$updater3 !== void 0 ? _object$updater3 : "";
    message.abbreviation = (_object$abbreviation2 = object.abbreviation) !== null && _object$abbreviation2 !== void 0 ? _object$abbreviation2 : "";
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    return message;
  }
};