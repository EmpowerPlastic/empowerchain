"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.Snapshot = exports.ResponseQuery = exports.ResponseProcessProposal_ProposalStatusSDKType = exports.ResponseProcessProposal_ProposalStatus = exports.ResponseProcessProposal = exports.ResponsePrepareProposal = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot = exports.ResponseLoadSnapshotChunk = exports.ResponseListSnapshots = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseException = exports.ResponseEndBlock = exports.ResponseEcho = exports.ResponseDeliverTx = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk = exports.Response = exports.RequestQuery = exports.RequestProcessProposal = exports.RequestPrepareProposal = exports.RequestOfferSnapshot = exports.RequestLoadSnapshotChunk = exports.RequestListSnapshots = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEndBlock = exports.RequestEcho = exports.RequestDeliverTx = exports.RequestCommit = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestApplySnapshotChunk = exports.Request = exports.MisbehaviorTypeSDKType = exports.MisbehaviorType = exports.Misbehavior = exports.ExtendedVoteInfo = exports.ExtendedCommitInfo = exports.EventAttribute = exports.Event = exports.CommitInfo = exports.CheckTxTypeSDKType = exports.CheckTxType = void 0;
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
exports.checkTxTypeToJSON = checkTxTypeToJSON;
exports.misbehaviorTypeFromJSON = misbehaviorTypeFromJSON;
exports.misbehaviorTypeToJSON = misbehaviorTypeToJSON;
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
exports.responseProcessProposal_ProposalStatusFromJSON = responseProcessProposal_ProposalStatusFromJSON;
exports.responseProcessProposal_ProposalStatusToJSON = responseProcessProposal_ProposalStatusToJSON;
var _timestamp = require("../../google/protobuf/timestamp");
var _params = require("../types/params");
var _types = require("../types/types");
var _proof = require("../crypto/proof");
var _keys = require("../crypto/keys");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var CheckTxType;
exports.CheckTxType = CheckTxType;
(function (CheckTxType) {
  CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
  CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
  CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
var CheckTxTypeSDKType;
exports.CheckTxTypeSDKType = CheckTxTypeSDKType;
(function (CheckTxTypeSDKType) {
  CheckTxTypeSDKType[CheckTxTypeSDKType["NEW"] = 0] = "NEW";
  CheckTxTypeSDKType[CheckTxTypeSDKType["RECHECK"] = 1] = "RECHECK";
  CheckTxTypeSDKType[CheckTxTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxTypeSDKType || (exports.CheckTxTypeSDKType = CheckTxTypeSDKType = {}));
function checkTxTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
function checkTxTypeToJSON(object) {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
var ResponseOfferSnapshot_ResultSDKType;
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_ResultSDKType;
(function (ResponseOfferSnapshot_ResultSDKType) {
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_ResultSDKType[ResponseOfferSnapshot_ResultSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_ResultSDKType || (exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_ResultSDKType = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
function responseOfferSnapshot_ResultToJSON(object) {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
var ResponseApplySnapshotChunk_ResultSDKType;
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_ResultSDKType;
(function (ResponseApplySnapshotChunk_ResultSDKType) {
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_ResultSDKType[ResponseApplySnapshotChunk_ResultSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_ResultSDKType || (exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_ResultSDKType = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
function responseApplySnapshotChunk_ResultToJSON(object) {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ResponseProcessProposal_ProposalStatus;
exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
  ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus = {}));
var ResponseProcessProposal_ProposalStatusSDKType;
exports.ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatusSDKType;
(function (ResponseProcessProposal_ProposalStatusSDKType) {
  ResponseProcessProposal_ProposalStatusSDKType[ResponseProcessProposal_ProposalStatusSDKType["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseProcessProposal_ProposalStatusSDKType[ResponseProcessProposal_ProposalStatusSDKType["ACCEPT"] = 1] = "ACCEPT";
  ResponseProcessProposal_ProposalStatusSDKType[ResponseProcessProposal_ProposalStatusSDKType["REJECT"] = 2] = "REJECT";
  ResponseProcessProposal_ProposalStatusSDKType[ResponseProcessProposal_ProposalStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatusSDKType || (exports.ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatusSDKType = {}));
function responseProcessProposal_ProposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
function responseProcessProposal_ProposalStatusToJSON(object) {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var MisbehaviorType;
exports.MisbehaviorType = MisbehaviorType;
(function (MisbehaviorType) {
  MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
  MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (exports.MisbehaviorType = MisbehaviorType = {}));
var MisbehaviorTypeSDKType;
exports.MisbehaviorTypeSDKType = MisbehaviorTypeSDKType;
(function (MisbehaviorTypeSDKType) {
  MisbehaviorTypeSDKType[MisbehaviorTypeSDKType["UNKNOWN"] = 0] = "UNKNOWN";
  MisbehaviorTypeSDKType[MisbehaviorTypeSDKType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  MisbehaviorTypeSDKType[MisbehaviorTypeSDKType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  MisbehaviorTypeSDKType[MisbehaviorTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorTypeSDKType || (exports.MisbehaviorTypeSDKType = MisbehaviorTypeSDKType = {}));
function misbehaviorTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
function misbehaviorTypeToJSON(object) {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseRequest() {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined
  };
}
var Request = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? RequestPrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? RequestProcessProposal.fromPartial(object.processProposal) : undefined;
    return message;
  }
};
exports.Request = Request;
function createBaseRequestEcho() {
  return {
    message: ""
  };
}
var RequestEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestEcho();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$message;
    var message = createBaseRequestEcho();
    message.message = (_object$message = object.message) !== null && _object$message !== void 0 ? _object$message : "";
    return message;
  }
};
exports.RequestEcho = RequestEcho;
function createBaseRequestFlush() {
  return {};
}
var RequestFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestFlush();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestFlush();
    return message;
  }
};
exports.RequestFlush = RequestFlush;
function createBaseRequestInfo() {
  return {
    version: "",
    blockVersion: _helpers.Long.UZERO,
    p2pVersion: _helpers.Long.UZERO,
    abciVersion: ""
  };
}
var RequestInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$version, _object$abciVersion;
    var message = createBaseRequestInfo();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? _helpers.Long.fromValue(object.blockVersion) : _helpers.Long.UZERO;
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? _helpers.Long.fromValue(object.p2pVersion) : _helpers.Long.UZERO;
    message.abciVersion = (_object$abciVersion = object.abciVersion) !== null && _object$abciVersion !== void 0 ? _object$abciVersion : "";
    return message;
  }
};
exports.RequestInfo = RequestInfo;
function createBaseRequestInitChain() {
  return {
    time: undefined,
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: _helpers.Long.ZERO
  };
}
var RequestInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      _params.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInitChain();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = _params.ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$time, _object$chainId, _object$validators, _object$appStateBytes;
    var message = createBaseRequestInitChain();
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? _params.ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appStateBytes = (_object$appStateBytes = object.appStateBytes) !== null && _object$appStateBytes !== void 0 ? _object$appStateBytes : new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? _helpers.Long.fromValue(object.initialHeight) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RequestInitChain = RequestInitChain;
function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: _helpers.Long.ZERO,
    prove: false
  };
}
var RequestQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestQuery();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data, _object$path, _object$prove;
    var message = createBaseRequestQuery();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
exports.RequestQuery = RequestQuery;
function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: undefined,
    lastCommitInfo: undefined,
    byzantineValidators: []
  };
}
var RequestBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      CommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.byzantineValidators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommitInfo = CommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.byzantineValidators.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash, _object$byzantineVali;
    var message = createBaseRequestBeginBlock();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? CommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map(function (e) {
      return Misbehavior.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.RequestBeginBlock = RequestBeginBlock;
function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
var RequestCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx, _object$type;
    var message = createBaseRequestCheckTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    return message;
  }
};
exports.RequestCheckTx = RequestCheckTx;
function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}
var RequestDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx2;
    var message = createBaseRequestDeliverTx();
    message.tx = (_object$tx2 = object.tx) !== null && _object$tx2 !== void 0 ? _object$tx2 : new Uint8Array();
    return message;
  }
};
exports.RequestDeliverTx = RequestDeliverTx;
function createBaseRequestEndBlock() {
  return {
    height: _helpers.Long.ZERO
  };
}
var RequestEndBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RequestEndBlock = RequestEndBlock;
function createBaseRequestCommit() {
  return {};
}
var RequestCommit = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestCommit();
    return message;
  }
};
exports.RequestCommit = RequestCommit;
function createBaseRequestListSnapshots() {
  return {};
}
var RequestListSnapshots = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRequestListSnapshots();
    return message;
  }
};
exports.RequestListSnapshots = RequestListSnapshots;
function createBaseRequestOfferSnapshot() {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}
var RequestOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$appHash;
    var message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  }
};
exports.RequestOfferSnapshot = RequestOfferSnapshot;
function createBaseRequestLoadSnapshotChunk() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    chunk: 0
  };
}
var RequestLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$format, _object$chunk;
    var message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : 0;
    return message;
  }
};
exports.RequestLoadSnapshotChunk = RequestLoadSnapshotChunk;
function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
var RequestApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$chunk2, _object$sender;
    var message = createBaseRequestApplySnapshotChunk();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.chunk = (_object$chunk2 = object.chunk) !== null && _object$chunk2 !== void 0 ? _object$chunk2 : new Uint8Array();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    return message;
  }
};
exports.RequestApplySnapshotChunk = RequestApplySnapshotChunk;
function createBaseRequestPrepareProposal() {
  return {
    maxTxBytes: _helpers.Long.ZERO,
    txs: [],
    localLastCommit: undefined,
    misbehavior: [],
    height: _helpers.Long.ZERO,
    time: undefined,
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var RequestPrepareProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxTxBytes.isZero()) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    var _iterator3 = _createForOfIteratorHelper(message.txs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(18).bytes(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.localLastCommit !== undefined) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    var _iterator4 = _createForOfIteratorHelper(message.misbehavior),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v = _step4.value;
        Misbehavior.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs, _object$misbehavior, _object$time2, _object$nextValidator, _object$proposerAddre;
    var message = createBaseRequestPrepareProposal();
    message.maxTxBytes = object.maxTxBytes !== undefined && object.maxTxBytes !== null ? _helpers.Long.fromValue(object.maxTxBytes) : _helpers.Long.ZERO;
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return e;
    })) || [];
    message.localLastCommit = object.localLastCommit !== undefined && object.localLastCommit !== null ? ExtendedCommitInfo.fromPartial(object.localLastCommit) : undefined;
    message.misbehavior = ((_object$misbehavior = object.misbehavior) === null || _object$misbehavior === void 0 ? void 0 : _object$misbehavior.map(function (e) {
      return Misbehavior.fromPartial(e);
    })) || [];
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = (_object$time2 = object.time) !== null && _object$time2 !== void 0 ? _object$time2 : undefined;
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre = object.proposerAddress) !== null && _object$proposerAddre !== void 0 ? _object$proposerAddre : new Uint8Array();
    return message;
  }
};
exports.RequestPrepareProposal = RequestPrepareProposal;
function createBaseRequestProcessProposal() {
  return {
    txs: [],
    proposedLastCommit: undefined,
    misbehavior: [],
    hash: new Uint8Array(),
    height: _helpers.Long.ZERO,
    time: undefined,
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var RequestProcessProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.txs),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(10).bytes(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    var _iterator6 = _createForOfIteratorHelper(message.misbehavior),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v2 = _step6.value;
        Misbehavior.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs2, _object$misbehavior2, _object$hash2, _object$time3, _object$nextValidator2, _object$proposerAddre2;
    var message = createBaseRequestProcessProposal();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(function (e) {
      return e;
    })) || [];
    message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
    message.misbehavior = ((_object$misbehavior2 = object.misbehavior) === null || _object$misbehavior2 === void 0 ? void 0 : _object$misbehavior2.map(function (e) {
      return Misbehavior.fromPartial(e);
    })) || [];
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = (_object$time3 = object.time) !== null && _object$time3 !== void 0 ? _object$time3 : undefined;
    message.nextValidatorsHash = (_object$nextValidator2 = object.nextValidatorsHash) !== null && _object$nextValidator2 !== void 0 ? _object$nextValidator2 : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre2 = object.proposerAddress) !== null && _object$proposerAddre2 !== void 0 ? _object$proposerAddre2 : new Uint8Array();
    return message;
  }
};
exports.RequestProcessProposal = RequestProcessProposal;
function createBaseResponse() {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined,
    prepareProposal: undefined,
    processProposal: undefined
  };
}
var Response = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== undefined) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? ResponsePrepareProposal.fromPartial(object.prepareProposal) : undefined;
    message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? ResponseProcessProposal.fromPartial(object.processProposal) : undefined;
    return message;
  }
};
exports.Response = Response;
function createBaseResponseException() {
  return {
    error: ""
  };
}
var ResponseException = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseException();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$error;
    var message = createBaseResponseException();
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : "";
    return message;
  }
};
exports.ResponseException = ResponseException;
function createBaseResponseEcho() {
  return {
    message: ""
  };
}
var ResponseEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseEcho();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$message2;
    var message = createBaseResponseEcho();
    message.message = (_object$message2 = object.message) !== null && _object$message2 !== void 0 ? _object$message2 : "";
    return message;
  }
};
exports.ResponseEcho = ResponseEcho;
function createBaseResponseFlush() {
  return {};
}
var ResponseFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseFlush();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseResponseFlush();
    return message;
  }
};
exports.ResponseFlush = ResponseFlush;
function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    appVersion: _helpers.Long.UZERO,
    lastBlockHeight: _helpers.Long.ZERO,
    lastBlockAppHash: new Uint8Array()
  };
}
var ResponseInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$version2, _object$lastBlockAppH;
    var message = createBaseResponseInfo();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? _helpers.Long.fromValue(object.appVersion) : _helpers.Long.UZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? _helpers.Long.fromValue(object.lastBlockHeight) : _helpers.Long.ZERO;
    message.lastBlockAppHash = (_object$lastBlockAppH = object.lastBlockAppHash) !== null && _object$lastBlockAppH !== void 0 ? _object$lastBlockAppH : new Uint8Array();
    return message;
  }
};
exports.ResponseInfo = ResponseInfo;
function createBaseResponseInitChain() {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}
var ResponseInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensusParams !== undefined) {
      _params.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    var _iterator7 = _createForOfIteratorHelper(message.validators),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInitChain();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = _params.ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2, _object$appHash2;
    var message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? _params.ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appHash = (_object$appHash2 = object.appHash) !== null && _object$appHash2 !== void 0 ? _object$appHash2 : new Uint8Array();
    return message;
  }
};
exports.ResponseInitChain = ResponseInitChain;
function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: _helpers.Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: _helpers.Long.ZERO,
    codespace: ""
  };
}
var ResponseQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      _proof.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseQuery();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = _proof.ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    var message = createBaseResponseQuery();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== undefined && object.index !== null ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? _proof.ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
exports.ResponseQuery = ResponseQuery;
function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}
var ResponseBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.events),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        Event.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$events;
    var message = createBaseResponseBeginBlock();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseBeginBlock = ResponseBeginBlock;
function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: _helpers.Long.ZERO,
    gasUsed: _helpers.Long.ZERO,
    events: [],
    codespace: "",
    sender: "",
    priority: _helpers.Long.ZERO,
    mempoolError: ""
  };
}
var ResponseCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    var _iterator9 = _createForOfIteratorHelper(message.events),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (!message.priority.isZero()) {
      writer.uint32(80).int64(message.priority);
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.priority = reader.int64();
          break;
        case 11:
          message.mempoolError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code2, _object$data3, _object$log2, _object$info2, _object$events2, _object$codespace2, _object$sender2, _object$mempoolError;
    var message = createBaseResponseCheckTx();
    message.code = (_object$code2 = object.code) !== null && _object$code2 !== void 0 ? _object$code2 : 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.info = (_object$info2 = object.info) !== null && _object$info2 !== void 0 ? _object$info2 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? _helpers.Long.fromValue(object.gasWanted) : _helpers.Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? _helpers.Long.fromValue(object.gasUsed) : _helpers.Long.ZERO;
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace2 = object.codespace) !== null && _object$codespace2 !== void 0 ? _object$codespace2 : "";
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.priority = object.priority !== undefined && object.priority !== null ? _helpers.Long.fromValue(object.priority) : _helpers.Long.ZERO;
    message.mempoolError = (_object$mempoolError = object.mempoolError) !== null && _object$mempoolError !== void 0 ? _object$mempoolError : "";
    return message;
  }
};
exports.ResponseCheckTx = ResponseCheckTx;
function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: _helpers.Long.ZERO,
    gasUsed: _helpers.Long.ZERO,
    events: [],
    codespace: ""
  };
}
var ResponseDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    var _iterator10 = _createForOfIteratorHelper(message.events),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code3, _object$data4, _object$log3, _object$info3, _object$events3, _object$codespace3;
    var message = createBaseResponseDeliverTx();
    message.code = (_object$code3 = object.code) !== null && _object$code3 !== void 0 ? _object$code3 : 0;
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    message.log = (_object$log3 = object.log) !== null && _object$log3 !== void 0 ? _object$log3 : "";
    message.info = (_object$info3 = object.info) !== null && _object$info3 !== void 0 ? _object$info3 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? _helpers.Long.fromValue(object.gasWanted) : _helpers.Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? _helpers.Long.fromValue(object.gasUsed) : _helpers.Long.ZERO;
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace3 = object.codespace) !== null && _object$codespace3 !== void 0 ? _object$codespace3 : "";
    return message;
  }
};
exports.ResponseDeliverTx = ResponseDeliverTx;
function createBaseResponseEndBlock() {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}
var ResponseEndBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator11 = _createForOfIteratorHelper(message.validatorUpdates),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var v = _step11.value;
        ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    if (message.consensusParamUpdates !== undefined) {
      _params.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    var _iterator12 = _createForOfIteratorHelper(message.events),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _v3 = _step12.value;
        Event.encode(_v3, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = _params.ConsensusParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorUpda, _object$events4;
    var message = createBaseResponseEndBlock();
    message.validatorUpdates = ((_object$validatorUpda = object.validatorUpdates) === null || _object$validatorUpda === void 0 ? void 0 : _object$validatorUpda.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? _params.ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = ((_object$events4 = object.events) === null || _object$events4 === void 0 ? void 0 : _object$events4.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseEndBlock = ResponseEndBlock;
function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retainHeight: _helpers.Long.ZERO
  };
}
var ResponseCommit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data5;
    var message = createBaseResponseCommit();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? _helpers.Long.fromValue(object.retainHeight) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ResponseCommit = ResponseCommit;
function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}
var ResponseListSnapshots = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator13 = _createForOfIteratorHelper(message.snapshots),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$snapshots;
    var message = createBaseResponseListSnapshots();
    message.snapshots = ((_object$snapshots = object.snapshots) === null || _object$snapshots === void 0 ? void 0 : _object$snapshots.map(function (e) {
      return Snapshot.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseListSnapshots = ResponseListSnapshots;
function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}
var ResponseOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$result;
    var message = createBaseResponseOfferSnapshot();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
exports.ResponseOfferSnapshot = ResponseOfferSnapshot;
function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}
var ResponseLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chunk3;
    var message = createBaseResponseLoadSnapshotChunk();
    message.chunk = (_object$chunk3 = object.chunk) !== null && _object$chunk3 !== void 0 ? _object$chunk3 : new Uint8Array();
    return message;
  }
};
exports.ResponseLoadSnapshotChunk = ResponseLoadSnapshotChunk;
function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
var ResponseApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    var _iterator14 = _createForOfIteratorHelper(message.refetchChunks),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var v = _step14.value;
        writer.uint32(v);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    writer.ldelim();
    var _iterator15 = _createForOfIteratorHelper(message.rejectSenders),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _v4 = _step15.value;
        writer.uint32(26).string(_v4);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$result2, _object$refetchChunks, _object$rejectSenders;
    var message = createBaseResponseApplySnapshotChunk();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    message.refetchChunks = ((_object$refetchChunks = object.refetchChunks) === null || _object$refetchChunks === void 0 ? void 0 : _object$refetchChunks.map(function (e) {
      return e;
    })) || [];
    message.rejectSenders = ((_object$rejectSenders = object.rejectSenders) === null || _object$rejectSenders === void 0 ? void 0 : _object$rejectSenders.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ResponseApplySnapshotChunk = ResponseApplySnapshotChunk;
function createBaseResponsePrepareProposal() {
  return {
    txs: []
  };
}
var ResponsePrepareProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator16 = _createForOfIteratorHelper(message.txs),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var v = _step16.value;
        writer.uint32(10).bytes(v);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs3;
    var message = createBaseResponsePrepareProposal();
    message.txs = ((_object$txs3 = object.txs) === null || _object$txs3 === void 0 ? void 0 : _object$txs3.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ResponsePrepareProposal = ResponsePrepareProposal;
function createBaseResponseProcessProposal() {
  return {
    status: 0
  };
}
var ResponseProcessProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$status;
    var message = createBaseResponseProcessProposal();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
exports.ResponseProcessProposal = ResponseProcessProposal;
function createBaseCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
var CommitInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    var _iterator17 = _createForOfIteratorHelper(message.votes),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var v = _step17.value;
        VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$votes;
    var message = createBaseCommitInfo();
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return VoteInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CommitInfo = CommitInfo;
function createBaseExtendedCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
var ExtendedCommitInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    var _iterator18 = _createForOfIteratorHelper(message.votes),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var v = _step18.value;
        ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$round2, _object$votes2;
    var message = createBaseExtendedCommitInfo();
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.votes = ((_object$votes2 = object.votes) === null || _object$votes2 === void 0 ? void 0 : _object$votes2.map(function (e) {
      return ExtendedVoteInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExtendedCommitInfo = ExtendedCommitInfo;
function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}
var Event = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    var _iterator19 = _createForOfIteratorHelper(message.attributes),
      _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var v = _step19.value;
        EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$attributes;
    var message = createBaseEvent();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(function (e) {
      return EventAttribute.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Event = Event;
function createBaseEventAttribute() {
  return {
    key: "",
    value: "",
    index: false
  };
}
var EventAttribute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventAttribute();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key2, _object$value2, _object$index2;
    var message = createBaseEventAttribute();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : "";
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : false;
    return message;
  }
};
exports.EventAttribute = EventAttribute;
function createBaseTxResult() {
  return {
    height: _helpers.Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: undefined
  };
}
var TxResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index3, _object$tx3;
    var message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : 0;
    message.tx = (_object$tx3 = object.tx) !== null && _object$tx3 !== void 0 ? _object$tx3 : new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  }
};
exports.TxResult = TxResult;
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: _helpers.Long.ZERO
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;
function createBaseValidatorUpdate() {
  return {
    pubKey: undefined,
    power: _helpers.Long.ZERO
  };
}
var ValidatorUpdate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pubKey !== undefined) {
      _keys.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = _keys.PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _keys.PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorUpdate = ValidatorUpdate;
function createBaseVoteInfo() {
  return {
    validator: undefined,
    signedLastBlock: false
  };
}
var VoteInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signedLastBlo;
    var message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = (_object$signedLastBlo = object.signedLastBlock) !== null && _object$signedLastBlo !== void 0 ? _object$signedLastBlo : false;
    return message;
  }
};
exports.VoteInfo = VoteInfo;
function createBaseExtendedVoteInfo() {
  return {
    validator: undefined,
    signedLastBlock: false,
    voteExtension: new Uint8Array()
  };
}
var ExtendedVoteInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signedLastBlo2, _object$voteExtension;
    var message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = (_object$signedLastBlo2 = object.signedLastBlock) !== null && _object$signedLastBlo2 !== void 0 ? _object$signedLastBlo2 : false;
    message.voteExtension = (_object$voteExtension = object.voteExtension) !== null && _object$voteExtension !== void 0 ? _object$voteExtension : new Uint8Array();
    return message;
  }
};
exports.ExtendedVoteInfo = ExtendedVoteInfo;
function createBaseMisbehavior() {
  return {
    type: 0,
    validator: undefined,
    height: _helpers.Long.ZERO,
    time: undefined,
    totalVotingPower: _helpers.Long.ZERO
  };
}
var Misbehavior = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMisbehavior();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type3, _object$time4;
    var message = createBaseMisbehavior();
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = (_object$time4 = object.time) !== null && _object$time4 !== void 0 ? _object$time4 : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? _helpers.Long.fromValue(object.totalVotingPower) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Misbehavior = Misbehavior;
function createBaseSnapshot() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
var Snapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSnapshot();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$format2, _object$chunks, _object$hash3, _object$metadata;
    var message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};
exports.Snapshot = Snapshot;