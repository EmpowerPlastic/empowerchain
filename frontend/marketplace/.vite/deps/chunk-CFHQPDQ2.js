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
  Coin
} from "./chunk-S5OVV5FT.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1/gov.js
var gov_exports = {};
__export(gov_exports, {
  Deposit: () => Deposit,
  DepositParams: () => DepositParams,
  Params: () => Params,
  Proposal: () => Proposal,
  ProposalStatus: () => ProposalStatus,
  ProposalStatusSDKType: () => ProposalStatusSDKType,
  TallyParams: () => TallyParams,
  TallyResult: () => TallyResult,
  Vote: () => Vote,
  VoteOption: () => VoteOption,
  VoteOptionSDKType: () => VoteOptionSDKType,
  VotingParams: () => VotingParams,
  WeightedVoteOption: () => WeightedVoteOption,
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
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
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
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
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
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}
var WeightedVoteOption = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;
        case 2:
          message.weight = reader.string();
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
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.option !== void 0 && (obj.option = voteOptionToJSON(message.option));
    message.weight !== void 0 && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object) {
    var _object$option, _object$weight;
    const message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
function createBaseDeposit() {
  return {
    proposalId: BigInt("0"),
    depositor: "",
    amount: []
  };
}
var Deposit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.depositor !== void 0 && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$depositor, _object$amount;
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseProposal() {
  return {
    id: BigInt("0"),
    messages: [],
    status: 0,
    finalTallyResult: void 0,
    submitTime: void 0,
    depositEndTime: void 0,
    totalDeposit: [],
    votingStartTime: void 0,
    votingEndTime: void 0,
    metadata: "",
    title: "",
    summary: "",
    proposer: ""
  };
}
var Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== void 0) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== void 0) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== void 0) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== void 0) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== void 0) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
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
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : void 0,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : void 0,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : void 0,
      totalDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDeposit) ? object.totalDeposit.map((e) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : void 0,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : void 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.messages = [];
    }
    message.status !== void 0 && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== void 0 && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : void 0);
    message.submitTime !== void 0 && (obj.submitTime = message.submitTime.toISOString());
    message.depositEndTime !== void 0 && (obj.depositEndTime = message.depositEndTime.toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== void 0 && (obj.votingStartTime = message.votingStartTime.toISOString());
    message.votingEndTime !== void 0 && (obj.votingEndTime = message.votingEndTime.toISOString());
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    message.title !== void 0 && (obj.title = message.title);
    message.summary !== void 0 && (obj.summary = message.summary);
    message.proposer !== void 0 && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial(object) {
    var _object$messages, _object$status, _object$submitTime, _object$depositEndTim, _object$totalDeposit, _object$votingStartTi, _object$votingEndTime, _object$metadata, _object$title, _object$summary, _object$proposer;
    const message = createBaseProposal();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map((e) => Any.fromPartial(e))) || [];
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : void 0;
    message.depositEndTime = (_object$depositEndTim = object.depositEndTime) !== null && _object$depositEndTim !== void 0 ? _object$depositEndTim : void 0;
    message.totalDeposit = ((_object$totalDeposit = object.totalDeposit) === null || _object$totalDeposit === void 0 ? void 0 : _object$totalDeposit.map((e) => Coin.fromPartial(e))) || [];
    message.votingStartTime = (_object$votingStartTi = object.votingStartTime) !== null && _object$votingStartTi !== void 0 ? _object$votingStartTi : void 0;
    message.votingEndTime = (_object$votingEndTime = object.votingEndTime) !== null && _object$votingEndTime !== void 0 ? _object$votingEndTime : void 0;
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.summary = (_object$summary = object.summary) !== null && _object$summary !== void 0 ? _object$summary : "";
    message.proposer = (_object$proposer = object.proposer) !== null && _object$proposer !== void 0 ? _object$proposer : "";
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
    options: [],
    metadata: ""
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
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
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
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
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
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : void 0);
    } else {
      obj.options = [];
    }
    message.metadata !== void 0 && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object) {
    var _object$voter, _object$options, _object$metadata2;
    const message = createBaseVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map((e) => WeightedVoteOption.fromPartial(e))) || [];
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  }
};
function createBaseDepositParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: void 0
  };
}
var DepositParams = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.minDeposit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== void 0) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
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
      minDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.minDeposit) ? object.minDeposit.map((e) => Coin.fromJSON(e)) : [],
      maxDepositPeriod: isSet(object.maxDepositPeriod) ? Duration.fromJSON(object.maxDepositPeriod) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== void 0 && (obj.maxDepositPeriod = message.maxDepositPeriod ? Duration.toJSON(message.maxDepositPeriod) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$minDeposit;
    const message = createBaseDepositParams();
    message.minDeposit = ((_object$minDeposit = object.minDeposit) === null || _object$minDeposit === void 0 ? void 0 : _object$minDeposit.map((e) => Coin.fromPartial(e))) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== void 0 && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : void 0;
    return message;
  }
};
function createBaseVotingParams() {
  return {
    votingPeriod: void 0
  };
}
var VotingParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.votingPeriod !== void 0) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
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
      votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.votingPeriod !== void 0 && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : void 0;
    return message;
  }
};
function createBaseTallyParams() {
  return {
    quorum: "",
    threshold: "",
    vetoThreshold: ""
  };
}
var TallyParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
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
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      vetoThreshold: isSet(object.vetoThreshold) ? String(object.vetoThreshold) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.quorum !== void 0 && (obj.quorum = message.quorum);
    message.threshold !== void 0 && (obj.threshold = message.threshold);
    message.vetoThreshold !== void 0 && (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },
  fromPartial(object) {
    var _object$quorum, _object$threshold, _object$vetoThreshold;
    const message = createBaseTallyParams();
    message.quorum = (_object$quorum = object.quorum) !== null && _object$quorum !== void 0 ? _object$quorum : "";
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.vetoThreshold = (_object$vetoThreshold = object.vetoThreshold) !== null && _object$vetoThreshold !== void 0 ? _object$vetoThreshold : "";
    return message;
  }
};
function createBaseParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: void 0,
    votingPeriod: void 0,
    quorum: "",
    threshold: "",
    vetoThreshold: "",
    minInitialDepositRatio: "",
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    burnVoteVeto: false
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.minDeposit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== void 0) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPeriod !== void 0) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(50).string(message.vetoThreshold);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.burnVoteVeto === true) {
      writer.uint32(120).bool(message.burnVoteVeto);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.vetoThreshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.burnVoteVeto = reader.bool();
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
      minDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.minDeposit) ? object.minDeposit.map((e) => Coin.fromJSON(e)) : [],
      maxDepositPeriod: isSet(object.maxDepositPeriod) ? Duration.fromJSON(object.maxDepositPeriod) : void 0,
      votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : void 0,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      vetoThreshold: isSet(object.vetoThreshold) ? String(object.vetoThreshold) : "",
      minInitialDepositRatio: isSet(object.minInitialDepositRatio) ? String(object.minInitialDepositRatio) : "",
      burnVoteQuorum: isSet(object.burnVoteQuorum) ? Boolean(object.burnVoteQuorum) : false,
      burnProposalDepositPrevote: isSet(object.burnProposalDepositPrevote) ? Boolean(object.burnProposalDepositPrevote) : false,
      burnVoteVeto: isSet(object.burnVoteVeto) ? Boolean(object.burnVoteVeto) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== void 0 && (obj.maxDepositPeriod = message.maxDepositPeriod ? Duration.toJSON(message.maxDepositPeriod) : void 0);
    message.votingPeriod !== void 0 && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : void 0);
    message.quorum !== void 0 && (obj.quorum = message.quorum);
    message.threshold !== void 0 && (obj.threshold = message.threshold);
    message.vetoThreshold !== void 0 && (obj.vetoThreshold = message.vetoThreshold);
    message.minInitialDepositRatio !== void 0 && (obj.minInitialDepositRatio = message.minInitialDepositRatio);
    message.burnVoteQuorum !== void 0 && (obj.burnVoteQuorum = message.burnVoteQuorum);
    message.burnProposalDepositPrevote !== void 0 && (obj.burnProposalDepositPrevote = message.burnProposalDepositPrevote);
    message.burnVoteVeto !== void 0 && (obj.burnVoteVeto = message.burnVoteVeto);
    return obj;
  },
  fromPartial(object) {
    var _object$minDeposit2, _object$quorum2, _object$threshold2, _object$vetoThreshold2, _object$minInitialDep, _object$burnVoteQuoru, _object$burnProposalD, _object$burnVoteVeto;
    const message = createBaseParams();
    message.minDeposit = ((_object$minDeposit2 = object.minDeposit) === null || _object$minDeposit2 === void 0 ? void 0 : _object$minDeposit2.map((e) => Coin.fromPartial(e))) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== void 0 && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : void 0;
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : void 0;
    message.quorum = (_object$quorum2 = object.quorum) !== null && _object$quorum2 !== void 0 ? _object$quorum2 : "";
    message.threshold = (_object$threshold2 = object.threshold) !== null && _object$threshold2 !== void 0 ? _object$threshold2 : "";
    message.vetoThreshold = (_object$vetoThreshold2 = object.vetoThreshold) !== null && _object$vetoThreshold2 !== void 0 ? _object$vetoThreshold2 : "";
    message.minInitialDepositRatio = (_object$minInitialDep = object.minInitialDepositRatio) !== null && _object$minInitialDep !== void 0 ? _object$minInitialDep : "";
    message.burnVoteQuorum = (_object$burnVoteQuoru = object.burnVoteQuorum) !== null && _object$burnVoteQuoru !== void 0 ? _object$burnVoteQuoru : false;
    message.burnProposalDepositPrevote = (_object$burnProposalD = object.burnProposalDepositPrevote) !== null && _object$burnProposalD !== void 0 ? _object$burnProposalD : false;
    message.burnVoteVeto = (_object$burnVoteVeto = object.burnVoteVeto) !== null && _object$burnVoteVeto !== void 0 ? _object$burnVoteVeto : false;
    return message;
  }
};

export {
  voteOptionFromJSON,
  voteOptionToJSON,
  proposalStatusFromJSON,
  proposalStatusToJSON,
  WeightedVoteOption,
  Deposit,
  Proposal,
  TallyResult,
  Vote,
  DepositParams,
  VotingParams,
  TallyParams,
  Params,
  gov_exports
};
//# sourceMappingURL=chunk-CFHQPDQ2.js.map
