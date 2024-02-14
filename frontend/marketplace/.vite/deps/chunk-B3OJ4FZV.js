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
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1beta1/gov.js
var gov_exports = {};
__export(gov_exports, {
  Deposit: () => Deposit,
  DepositParams: () => DepositParams,
  Proposal: () => Proposal,
  ProposalStatus: () => ProposalStatus,
  ProposalStatusSDKType: () => ProposalStatusSDKType,
  TallyParams: () => TallyParams,
  TallyResult: () => TallyResult,
  TextProposal: () => TextProposal,
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
function createBaseTextProposal() {
  return {
    title: "",
    description: ""
  };
}
var TextProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTextProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description;
    const message = createBaseTextProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
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
    proposalId: BigInt("0"),
    content: void 0,
    status: 0,
    finalTallyResult: void 0,
    submitTime: void 0,
    depositEndTime: void 0,
    totalDeposit: [],
    votingStartTime: void 0,
    votingEndTime: void 0
  };
}
var Proposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.content !== void 0) {
      Any.encode(message.content, writer.uint32(18).fork()).ldelim();
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
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.content = Any.decode(reader, reader.uint32());
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
      content: isSet(object.content) ? Any.fromJSON(object.content) : void 0,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : void 0,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : void 0,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : void 0,
      totalDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.totalDeposit) ? object.totalDeposit.map((e) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : void 0,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.content !== void 0 && (obj.content = message.content ? Any.toJSON(message.content) : void 0);
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
    return obj;
  },
  fromPartial(object) {
    var _object$status, _object$submitTime, _object$depositEndTim, _object$totalDeposit, _object$votingStartTi, _object$votingEndTime;
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.content = object.content !== void 0 && object.content !== null ? Any.fromPartial(object.content) : void 0;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : void 0;
    message.depositEndTime = (_object$depositEndTim = object.depositEndTime) !== null && _object$depositEndTim !== void 0 ? _object$depositEndTim : void 0;
    message.totalDeposit = ((_object$totalDeposit = object.totalDeposit) === null || _object$totalDeposit === void 0 ? void 0 : _object$totalDeposit.map((e) => Coin.fromPartial(e))) || [];
    message.votingStartTime = (_object$votingStartTi = object.votingStartTime) !== null && _object$votingStartTi !== void 0 ? _object$votingStartTi : void 0;
    message.votingEndTime = (_object$votingEndTime = object.votingEndTime) !== null && _object$votingEndTime !== void 0 ? _object$votingEndTime : void 0;
    return message;
  }
};
function createBaseTallyResult() {
  return {
    yes: "",
    abstain: "",
    no: "",
    noWithVeto: ""
  };
}
var TallyResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.yes !== "") {
      writer.uint32(10).string(message.yes);
    }
    if (message.abstain !== "") {
      writer.uint32(18).string(message.abstain);
    }
    if (message.no !== "") {
      writer.uint32(26).string(message.no);
    }
    if (message.noWithVeto !== "") {
      writer.uint32(34).string(message.noWithVeto);
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
          message.yes = reader.string();
          break;
        case 2:
          message.abstain = reader.string();
          break;
        case 3:
          message.no = reader.string();
          break;
        case 4:
          message.noWithVeto = reader.string();
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
      yes: isSet(object.yes) ? String(object.yes) : "",
      abstain: isSet(object.abstain) ? String(object.abstain) : "",
      no: isSet(object.no) ? String(object.no) : "",
      noWithVeto: isSet(object.noWithVeto) ? String(object.noWithVeto) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.yes !== void 0 && (obj.yes = message.yes);
    message.abstain !== void 0 && (obj.abstain = message.abstain);
    message.no !== void 0 && (obj.no = message.no);
    message.noWithVeto !== void 0 && (obj.noWithVeto = message.noWithVeto);
    return obj;
  },
  fromPartial(object) {
    var _object$yes, _object$abstain, _object$no, _object$noWithVeto;
    const message = createBaseTallyResult();
    message.yes = (_object$yes = object.yes) !== null && _object$yes !== void 0 ? _object$yes : "";
    message.abstain = (_object$abstain = object.abstain) !== null && _object$abstain !== void 0 ? _object$abstain : "";
    message.no = (_object$no = object.no) !== null && _object$no !== void 0 ? _object$no : "";
    message.noWithVeto = (_object$noWithVeto = object.noWithVeto) !== null && _object$noWithVeto !== void 0 ? _object$noWithVeto : "";
    return message;
  }
};
function createBaseVote() {
  return {
    proposalId: BigInt("0"),
    voter: "",
    option: 0,
    options: []
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
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
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
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
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
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    message.option !== void 0 && (obj.option = voteOptionToJSON(message.option));
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : void 0);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$voter, _object$option2, _object$options;
    const message = createBaseVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option2 = object.option) !== null && _object$option2 !== void 0 ? _object$option2 : 0;
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map((e) => WeightedVoteOption.fromPartial(e))) || [];
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
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    vetoThreshold: new Uint8Array()
  };
}
var TallyParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.quorum.length !== 0) {
      writer.uint32(10).bytes(message.quorum);
    }
    if (message.threshold.length !== 0) {
      writer.uint32(18).bytes(message.threshold);
    }
    if (message.vetoThreshold.length !== 0) {
      writer.uint32(26).bytes(message.vetoThreshold);
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
          message.quorum = reader.bytes();
          break;
        case 2:
          message.threshold = reader.bytes();
          break;
        case 3:
          message.vetoThreshold = reader.bytes();
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
      quorum: isSet(object.quorum) ? bytesFromBase64(object.quorum) : new Uint8Array(),
      threshold: isSet(object.threshold) ? bytesFromBase64(object.threshold) : new Uint8Array(),
      vetoThreshold: isSet(object.vetoThreshold) ? bytesFromBase64(object.vetoThreshold) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.quorum !== void 0 && (obj.quorum = base64FromBytes(message.quorum !== void 0 ? message.quorum : new Uint8Array()));
    message.threshold !== void 0 && (obj.threshold = base64FromBytes(message.threshold !== void 0 ? message.threshold : new Uint8Array()));
    message.vetoThreshold !== void 0 && (obj.vetoThreshold = base64FromBytes(message.vetoThreshold !== void 0 ? message.vetoThreshold : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$quorum, _object$threshold, _object$vetoThreshold;
    const message = createBaseTallyParams();
    message.quorum = (_object$quorum = object.quorum) !== null && _object$quorum !== void 0 ? _object$quorum : new Uint8Array();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : new Uint8Array();
    message.vetoThreshold = (_object$vetoThreshold = object.vetoThreshold) !== null && _object$vetoThreshold !== void 0 ? _object$vetoThreshold : new Uint8Array();
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
  gov_exports
};
//# sourceMappingURL=chunk-B3OJ4FZV.js.map
