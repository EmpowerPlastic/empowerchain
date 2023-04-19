"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeightedVoteOption = exports.VotingParams = exports.VoteOptionSDKType = exports.VoteOption = exports.Vote = exports.TextProposal = exports.TallyResult = exports.TallyParams = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.Proposal = exports.DepositParams = exports.Deposit = void 0;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
var _coin = require("../../base/v1beta1/coin");
var _any = require("../../../google/protobuf/any");
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
/** VoteOption enumerates the valid vote options for a given governance proposal. */
exports.VoteOption = VoteOption;
(function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
var VoteOptionSDKType;
exports.VoteOptionSDKType = VoteOptionSDKType;
(function (VoteOptionSDKType) {
  VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOptionSDKType[VoteOptionSDKType["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOptionSDKType[VoteOptionSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOptionSDKType || (exports.VoteOptionSDKType = VoteOptionSDKType = {}));
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
/** ProposalStatus enumerates the valid statuses of a proposal. */
exports.ProposalStatus = ProposalStatus;
(function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
var ProposalStatusSDKType;
exports.ProposalStatusSDKType = ProposalStatusSDKType;
(function (ProposalStatusSDKType) {
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatusSDKType[ProposalStatusSDKType["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  ProposalStatusSDKType[ProposalStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatusSDKType || (exports.ProposalStatusSDKType = ProposalStatusSDKType = {}));
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
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}
var WeightedVoteOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$option, _object$weight;
    var message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  }
};
exports.WeightedVoteOption = WeightedVoteOption;
function createBaseTextProposal() {
  return {
    title: "",
    description: ""
  };
}
var TextProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTextProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$title, _object$description;
    var message = createBaseTextProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    return message;
  }
};
exports.TextProposal = TextProposal;
function createBaseDeposit() {
  return {
    proposalId: _helpers.Long.UZERO,
    depositor: "",
    amount: []
  };
}
var Deposit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    var _iterator = _createForOfIteratorHelper(message.amount),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$depositor, _object$amount;
    var message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Deposit = Deposit;
function createBaseProposal() {
  return {
    proposalId: _helpers.Long.UZERO,
    content: undefined,
    status: 0,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.content !== undefined) {
      _any.Any.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.totalDeposit),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.votingStartTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.content = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$status, _object$submitTime, _object$depositEndTim, _object$totalDeposit, _object$votingStartTi, _object$votingEndTime;
    var message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.content = object.content !== undefined && object.content !== null ? _any.Any.fromPartial(object.content) : undefined;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : undefined;
    message.depositEndTime = (_object$depositEndTim = object.depositEndTime) !== null && _object$depositEndTim !== void 0 ? _object$depositEndTim : undefined;
    message.totalDeposit = ((_object$totalDeposit = object.totalDeposit) === null || _object$totalDeposit === void 0 ? void 0 : _object$totalDeposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.votingStartTime = (_object$votingStartTi = object.votingStartTime) !== null && _object$votingStartTi !== void 0 ? _object$votingStartTi : undefined;
    message.votingEndTime = (_object$votingEndTime = object.votingEndTime) !== null && _object$votingEndTime !== void 0 ? _object$votingEndTime : undefined;
    return message;
  }
};
exports.Proposal = Proposal;
function createBaseTallyResult() {
  return {
    yes: "",
    abstain: "",
    no: "",
    noWithVeto: ""
  };
}
var TallyResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$yes, _object$abstain, _object$no, _object$noWithVeto;
    var message = createBaseTallyResult();
    message.yes = (_object$yes = object.yes) !== null && _object$yes !== void 0 ? _object$yes : "";
    message.abstain = (_object$abstain = object.abstain) !== null && _object$abstain !== void 0 ? _object$abstain : "";
    message.no = (_object$no = object.no) !== null && _object$no !== void 0 ? _object$no : "";
    message.noWithVeto = (_object$noWithVeto = object.noWithVeto) !== null && _object$noWithVeto !== void 0 ? _object$noWithVeto : "";
    return message;
  }
};
exports.TallyResult = TallyResult;
function createBaseVote() {
  return {
    proposalId: _helpers.Long.UZERO,
    voter: "",
    option: 0,
    options: []
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    var _iterator3 = _createForOfIteratorHelper(message.options),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option2, _object$options;
    var message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option2 = object.option) !== null && _object$option2 !== void 0 ? _object$option2 : 0;
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map(function (e) {
      return WeightedVoteOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Vote = Vote;
function createBaseDepositParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined
  };
}
var DepositParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.minDeposit),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.maxDepositPeriod !== undefined) {
      _duration.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$minDeposit;
    var message = createBaseDepositParams();
    message.minDeposit = ((_object$minDeposit = object.minDeposit) === null || _object$minDeposit === void 0 ? void 0 : _object$minDeposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? _duration.Duration.fromPartial(object.maxDepositPeriod) : undefined;
    return message;
  }
};
exports.DepositParams = DepositParams;
function createBaseVotingParams() {
  return {
    votingPeriod: undefined
  };
}
var VotingParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.votingPeriod !== undefined) {
      _duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVotingParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? _duration.Duration.fromPartial(object.votingPeriod) : undefined;
    return message;
  }
};
exports.VotingParams = VotingParams;
function createBaseTallyParams() {
  return {
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    vetoThreshold: new Uint8Array()
  };
}
var TallyParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$quorum, _object$threshold, _object$vetoThreshold;
    var message = createBaseTallyParams();
    message.quorum = (_object$quorum = object.quorum) !== null && _object$quorum !== void 0 ? _object$quorum : new Uint8Array();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : new Uint8Array();
    message.vetoThreshold = (_object$vetoThreshold = object.vetoThreshold) !== null && _object$vetoThreshold !== void 0 ? _object$vetoThreshold : new Uint8Array();
    return message;
  }
};
exports.TallyParams = TallyParams;