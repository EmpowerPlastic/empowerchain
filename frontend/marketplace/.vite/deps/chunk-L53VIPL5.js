import {
  Duration
} from "./chunk-J33TOWTN.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  fromJsonTimestamp,
  fromTimestamp,
  import_long,
  isSet,
  require_minimal,
  toTimestamp
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/group/v1/types.js
var types_exports = {};
__export(types_exports, {
  DecisionPolicyWindows: () => DecisionPolicyWindows,
  GroupInfo: () => GroupInfo,
  GroupMember: () => GroupMember,
  GroupPolicyInfo: () => GroupPolicyInfo,
  Member: () => Member,
  MemberRequest: () => MemberRequest,
  PercentageDecisionPolicy: () => PercentageDecisionPolicy,
  Proposal: () => Proposal,
  ProposalExecutorResult: () => ProposalExecutorResult,
  ProposalExecutorResultSDKType: () => ProposalExecutorResultSDKType,
  ProposalStatus: () => ProposalStatus,
  ProposalStatusSDKType: () => ProposalStatusSDKType,
  TallyResult: () => TallyResult,
  ThresholdDecisionPolicy: () => ThresholdDecisionPolicy,
  Vote: () => Vote,
  VoteOption: () => VoteOption,
  VoteOptionSDKType: () => VoteOptionSDKType,
  proposalExecutorResultFromJSON: () => proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON: () => proposalExecutorResultToJSON,
  proposalStatusFromJSON: () => proposalStatusFromJSON,
  proposalStatusToJSON: () => proposalStatusToJSON,
  voteOptionFromJSON: () => voteOptionFromJSON,
  voteOptionToJSON: () => voteOptionToJSON
});
var _m0 = __toESM(require_minimal());
var VoteOption = function(VoteOption2) {
  VoteOption2[VoteOption2["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption2[VoteOption2["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption2[VoteOption2["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption2[VoteOption2["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption2[VoteOption2["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption2[VoteOption2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return VoteOption2;
}({});
var VoteOptionSDKType = VoteOption;
function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
function voteOptionToJSON(object) {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ProposalStatus = function(ProposalStatus2) {
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
  ProposalStatus2[ProposalStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalStatus2;
}({});
var ProposalStatusSDKType = ProposalStatus;
function proposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
function proposalStatusToJSON(object) {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ProposalExecutorResult = function(ProposalExecutorResult2) {
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
  ProposalExecutorResult2[ProposalExecutorResult2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalExecutorResult2;
}({});
var ProposalExecutorResultSDKType = ProposalExecutorResult;
function proposalExecutorResultFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
function proposalExecutorResultToJSON(object) {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMember() {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: void 0
  };
}
var Member = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== void 0) {
      Timestamp.encode(toTimestamp(message.addedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      addedAt: isSet(object.addedAt) ? fromJsonTimestamp(object.addedAt) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.weight !== void 0 && (obj.weight = message.weight);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.addedAt !== void 0 && (obj.addedAt = message.addedAt.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$weight, _object$metadata, _object$addedAt;
    const message = createBaseMember();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.addedAt = (_object$addedAt = object.addedAt) !== null && _object$addedAt !== void 0 ? _object$addedAt : void 0;
    return message;
  }
};
function createBaseMemberRequest() {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}
var MemberRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.weight !== void 0 && (obj.weight = message.weight);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object) {
    var _object$address2, _object$weight2, _object$metadata2;
    const message = createBaseMemberRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.weight = (_object$weight2 = object.weight) !== null && _object$weight2 !== void 0 ? _object$weight2 : "";
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
function createBaseThresholdDecisionPolicy() {
  return {
    threshold: "",
    windows: void 0
  };
}
var ThresholdDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== void 0) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.threshold !== void 0 && (obj.threshold = message.threshold);
    message.windows !== void 0 && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$threshold;
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.windows = object.windows !== void 0 && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : void 0;
    return message;
  }
};
function createBasePercentageDecisionPolicy() {
  return {
    percentage: "",
    windows: void 0
  };
}
var PercentageDecisionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== void 0) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.percentage !== void 0 && (obj.percentage = message.percentage);
    message.windows !== void 0 && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$percentage;
    const message = createBasePercentageDecisionPolicy();
    message.percentage = (_object$percentage = object.percentage) !== null && _object$percentage !== void 0 ? _object$percentage : "";
    message.windows = object.windows !== void 0 && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : void 0;
    return message;
  }
};
function createBaseDecisionPolicyWindows() {
  return {
    votingPeriod: void 0,
    minExecutionPeriod: void 0
  };
}
var DecisionPolicyWindows = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.votingPeriod !== void 0) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== void 0) {
      Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : void 0,
      minExecutionPeriod: isSet(object.minExecutionPeriod) ? Duration.fromJSON(object.minExecutionPeriod) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.votingPeriod !== void 0 && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : void 0);
    message.minExecutionPeriod !== void 0 && (obj.minExecutionPeriod = message.minExecutionPeriod ? Duration.toJSON(message.minExecutionPeriod) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseDecisionPolicyWindows();
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : void 0;
    message.minExecutionPeriod = object.minExecutionPeriod !== void 0 && object.minExecutionPeriod !== null ? Duration.fromPartial(object.minExecutionPeriod) : void 0;
    return message;
  }
};
function createBaseGroupInfo() {
  return {
    id: BigInt("0"),
    admin: "",
    metadata: "",
    version: BigInt("0"),
    totalWeight: "",
    createdAt: void 0
  };
}
var GroupInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.version.toString()));
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== void 0) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt("0"),
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.admin !== void 0 && (obj.admin = message.admin);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.version !== void 0 && (obj.version = (message.version || BigInt("0")).toString());
    message.totalWeight !== void 0 && (obj.totalWeight = message.totalWeight);
    message.createdAt !== void 0 && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$admin, _object$metadata3, _object$totalWeight, _object$createdAt;
    const message = createBaseGroupInfo();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt("0");
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    message.createdAt = (_object$createdAt = object.createdAt) !== null && _object$createdAt !== void 0 ? _object$createdAt : void 0;
    return message;
  }
};
function createBaseGroupMember() {
  return {
    groupId: BigInt("0"),
    member: void 0
  };
}
var GroupMember = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.member !== void 0) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      member: isSet(object.member) ? Member.fromJSON(object.member) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.member !== void 0 && (obj.member = message.member ? Member.toJSON(message.member) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGroupMember();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.member = object.member !== void 0 && object.member !== null ? Member.fromPartial(object.member) : void 0;
    return message;
  }
};
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    groupId: BigInt("0"),
    admin: "",
    metadata: "",
    version: BigInt("0"),
    decisionPolicy: void 0,
    createdAt: void 0
  };
}
var GroupPolicyInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.groupId.toString()));
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.version.toString()));
    }
    if (message.decisionPolicy !== void 0) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== void 0) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt("0"),
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : void 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.groupId !== void 0 && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.admin !== void 0 && (obj.admin = message.admin);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.version !== void 0 && (obj.version = (message.version || BigInt("0")).toString());
    message.decisionPolicy !== void 0 && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : void 0);
    message.createdAt !== void 0 && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$address3, _object$admin2, _object$metadata4, _object$createdAt2;
    const message = createBaseGroupPolicyInfo();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt("0");
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : void 0;
    message.createdAt = (_object$createdAt2 = object.createdAt) !== null && _object$createdAt2 !== void 0 ? _object$createdAt2 : void 0;
    return message;
  }
};
function createBaseProposal() {
  return {
    id: BigInt("0"),
    groupPolicyAddress: "",
    metadata: "",
    proposers: [],
    submitTime: void 0,
    groupVersion: BigInt("0"),
    groupPolicyVersion: BigInt("0"),
    status: 0,
    finalTallyResult: void 0,
    votingPeriodEnd: void 0,
    executorResult: 0,
    messages: [],
    title: "",
    summary: ""
  };
}
var Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v);
    }
    if (message.submitTime !== void 0) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.groupVersion !== BigInt(0)) {
      writer.uint32(48).uint64(import_long.default.fromString(message.groupVersion.toString()));
    }
    if (message.groupPolicyVersion !== BigInt(0)) {
      writer.uint32(56).uint64(import_long.default.fromString(message.groupPolicyVersion.toString()));
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.finalTallyResult !== void 0) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(74).fork()).ldelim();
    }
    if (message.votingPeriodEnd !== void 0) {
      Timestamp.encode(toTimestamp(message.votingPeriodEnd), writer.uint32(82).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(88).int32(message.executorResult);
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(98).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groupVersion = BigInt(reader.uint64().toString());
          break;
        case 7:
          message.groupPolicyVersion = BigInt(reader.uint64().toString());
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 10:
          message.votingPeriodEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.executorResult = reader.int32();
          break;
        case 12:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map((e) => String(e)) : [],
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : void 0,
      groupVersion: isSet(object.groupVersion) ? BigInt(object.groupVersion.toString()) : BigInt("0"),
      groupPolicyVersion: isSet(object.groupPolicyVersion) ? BigInt(object.groupPolicyVersion.toString()) : BigInt("0"),
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : void 0,
      votingPeriodEnd: isSet(object.votingPeriodEnd) ? fromJsonTimestamp(object.votingPeriodEnd) : void 0,
      executorResult: isSet(object.executorResult) ? proposalExecutorResultFromJSON(object.executorResult) : 0,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.groupPolicyAddress !== void 0 && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.submitTime !== void 0 && (obj.submitTime = message.submitTime.toISOString());
    message.groupVersion !== void 0 && (obj.groupVersion = (message.groupVersion || BigInt("0")).toString());
    message.groupPolicyVersion !== void 0 && (obj.groupPolicyVersion = (message.groupPolicyVersion || BigInt("0")).toString());
    message.status !== void 0 && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== void 0 && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : void 0);
    message.votingPeriodEnd !== void 0 && (obj.votingPeriodEnd = message.votingPeriodEnd.toISOString());
    message.executorResult !== void 0 && (obj.executorResult = proposalExecutorResultToJSON(message.executorResult));
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.messages = [];
    }
    message.title !== void 0 && (obj.title = message.title);
    message.summary !== void 0 && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object) {
    var _object$groupPolicyAd, _object$metadata5, _object$proposers, _object$submitTime, _object$status, _object$votingPeriodE, _object$executorResul, _object$messages, _object$title, _object$summary;
    const message = createBaseProposal();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.groupPolicyAddress = (_object$groupPolicyAd = object.groupPolicyAddress) !== null && _object$groupPolicyAd !== void 0 ? _object$groupPolicyAd : "";
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map((e) => e)) || [];
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : void 0;
    message.groupVersion = object.groupVersion !== void 0 && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt("0");
    message.groupPolicyVersion = object.groupPolicyVersion !== void 0 && object.groupPolicyVersion !== null ? BigInt(object.groupPolicyVersion.toString()) : BigInt("0");
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.votingPeriodEnd = (_object$votingPeriodE = object.votingPeriodEnd) !== null && _object$votingPeriodE !== void 0 ? _object$votingPeriodE : void 0;
    message.executorResult = (_object$executorResul = object.executorResult) !== null && _object$executorResul !== void 0 ? _object$executorResul : 0;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map((e) => Any.fromPartial(e))) || [];
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    return message;
  }
};
function createBaseTallyResult() {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}
var TallyResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      noWithVetoCount: isSet(object.noWithVetoCount) ? String(object.noWithVetoCount) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.yesCount !== void 0 && (obj.yesCount = message.yesCount);
    message.abstainCount !== void 0 && (obj.abstainCount = message.abstainCount);
    message.noCount !== void 0 && (obj.noCount = message.noCount);
    message.noWithVetoCount !== void 0 && (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },
  fromPartial(object) {
    var _object$yesCount, _object$abstainCount, _object$noCount, _object$noWithVetoCou;
    const message = createBaseTallyResult();
    message.yesCount = (_object$yesCount = object.yesCount) !== null && _object$yesCount !== void 0 ? _object$yesCount : "";
    message.abstainCount = (_object$abstainCount = object.abstainCount) !== null && _object$abstainCount !== void 0 ? _object$abstainCount : "";
    message.noCount = (_object$noCount = object.noCount) !== null && _object$noCount !== void 0 ? _object$noCount : "";
    message.noWithVetoCount = (_object$noWithVetoCou = object.noWithVetoCount) !== null && _object$noWithVetoCou !== void 0 ? _object$noWithVetoCou : "";
    return message;
  }
};
function createBaseVote() {
  return {
    proposalId: BigInt("0"),
    voter: "",
    option: 0,
    metadata: "",
    submitTime: void 0
  };
}
var Vote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submitTime !== void 0) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    message.option !== void 0 && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.submitTime !== void 0 && (obj.submitTime = message.submitTime.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$submitTime2;
    const message = createBaseVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.submitTime = (_object$submitTime2 = object.submitTime) !== null && _object$submitTime2 !== void 0 ? _object$submitTime2 : void 0;
    return message;
  }
};

export {
  voteOptionFromJSON,
  voteOptionToJSON,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  MemberRequest,
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Proposal,
  TallyResult,
  Vote,
  types_exports
};
//# sourceMappingURL=chunk-L53VIPL5.js.map
