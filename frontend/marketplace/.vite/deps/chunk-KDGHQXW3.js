import {
  Header,
  ProofOps,
  PublicKey
} from "./chunk-OOMJJQEG.js";
import {
  ConsensusParams
} from "./chunk-EHVQXC43.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/abci/types.js
var types_exports = {};
__export(types_exports, {
  CheckTxType: () => CheckTxType,
  CheckTxTypeSDKType: () => CheckTxTypeSDKType,
  CommitInfo: () => CommitInfo,
  Event: () => Event,
  EventAttribute: () => EventAttribute,
  ExtendedCommitInfo: () => ExtendedCommitInfo,
  ExtendedVoteInfo: () => ExtendedVoteInfo,
  Misbehavior: () => Misbehavior,
  MisbehaviorType: () => MisbehaviorType,
  MisbehaviorTypeSDKType: () => MisbehaviorTypeSDKType,
  Request: () => Request,
  RequestApplySnapshotChunk: () => RequestApplySnapshotChunk,
  RequestBeginBlock: () => RequestBeginBlock,
  RequestCheckTx: () => RequestCheckTx,
  RequestCommit: () => RequestCommit,
  RequestDeliverTx: () => RequestDeliverTx,
  RequestEcho: () => RequestEcho,
  RequestEndBlock: () => RequestEndBlock,
  RequestFlush: () => RequestFlush,
  RequestInfo: () => RequestInfo,
  RequestInitChain: () => RequestInitChain,
  RequestListSnapshots: () => RequestListSnapshots,
  RequestLoadSnapshotChunk: () => RequestLoadSnapshotChunk,
  RequestOfferSnapshot: () => RequestOfferSnapshot,
  RequestPrepareProposal: () => RequestPrepareProposal,
  RequestProcessProposal: () => RequestProcessProposal,
  RequestQuery: () => RequestQuery,
  Response: () => Response,
  ResponseApplySnapshotChunk: () => ResponseApplySnapshotChunk,
  ResponseApplySnapshotChunk_Result: () => ResponseApplySnapshotChunk_Result,
  ResponseApplySnapshotChunk_ResultSDKType: () => ResponseApplySnapshotChunk_ResultSDKType,
  ResponseBeginBlock: () => ResponseBeginBlock,
  ResponseCheckTx: () => ResponseCheckTx,
  ResponseCommit: () => ResponseCommit,
  ResponseDeliverTx: () => ResponseDeliverTx,
  ResponseEcho: () => ResponseEcho,
  ResponseEndBlock: () => ResponseEndBlock,
  ResponseException: () => ResponseException,
  ResponseFlush: () => ResponseFlush,
  ResponseInfo: () => ResponseInfo,
  ResponseInitChain: () => ResponseInitChain,
  ResponseListSnapshots: () => ResponseListSnapshots,
  ResponseLoadSnapshotChunk: () => ResponseLoadSnapshotChunk,
  ResponseOfferSnapshot: () => ResponseOfferSnapshot,
  ResponseOfferSnapshot_Result: () => ResponseOfferSnapshot_Result,
  ResponseOfferSnapshot_ResultSDKType: () => ResponseOfferSnapshot_ResultSDKType,
  ResponsePrepareProposal: () => ResponsePrepareProposal,
  ResponseProcessProposal: () => ResponseProcessProposal,
  ResponseProcessProposal_ProposalStatus: () => ResponseProcessProposal_ProposalStatus,
  ResponseProcessProposal_ProposalStatusSDKType: () => ResponseProcessProposal_ProposalStatusSDKType,
  ResponseQuery: () => ResponseQuery,
  Snapshot: () => Snapshot,
  TxResult: () => TxResult,
  Validator: () => Validator,
  ValidatorUpdate: () => ValidatorUpdate,
  VoteInfo: () => VoteInfo,
  checkTxTypeFromJSON: () => checkTxTypeFromJSON,
  checkTxTypeToJSON: () => checkTxTypeToJSON,
  misbehaviorTypeFromJSON: () => misbehaviorTypeFromJSON,
  misbehaviorTypeToJSON: () => misbehaviorTypeToJSON,
  responseApplySnapshotChunk_ResultFromJSON: () => responseApplySnapshotChunk_ResultFromJSON,
  responseApplySnapshotChunk_ResultToJSON: () => responseApplySnapshotChunk_ResultToJSON,
  responseOfferSnapshot_ResultFromJSON: () => responseOfferSnapshot_ResultFromJSON,
  responseOfferSnapshot_ResultToJSON: () => responseOfferSnapshot_ResultToJSON,
  responseProcessProposal_ProposalStatusFromJSON: () => responseProcessProposal_ProposalStatusFromJSON,
  responseProcessProposal_ProposalStatusToJSON: () => responseProcessProposal_ProposalStatusToJSON
});
var _m0 = __toESM(require_minimal());
var CheckTxType = function(CheckTxType2) {
  CheckTxType2[CheckTxType2["NEW"] = 0] = "NEW";
  CheckTxType2[CheckTxType2["RECHECK"] = 1] = "RECHECK";
  CheckTxType2[CheckTxType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CheckTxType2;
}({});
var CheckTxTypeSDKType = CheckTxType;
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
var ResponseOfferSnapshot_Result = function(ResponseOfferSnapshot_Result2) {
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result2[ResponseOfferSnapshot_Result2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseOfferSnapshot_Result2;
}({});
var ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
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
var ResponseApplySnapshotChunk_Result = function(ResponseApplySnapshotChunk_Result2) {
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result2[ResponseApplySnapshotChunk_Result2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseApplySnapshotChunk_Result2;
}({});
var ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
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
var ResponseProcessProposal_ProposalStatus = function(ResponseProcessProposal_ProposalStatus2) {
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["ACCEPT"] = 1] = "ACCEPT";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["REJECT"] = 2] = "REJECT";
  ResponseProcessProposal_ProposalStatus2[ResponseProcessProposal_ProposalStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseProcessProposal_ProposalStatus2;
}({});
var ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
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
var MisbehaviorType = function(MisbehaviorType2) {
  MisbehaviorType2[MisbehaviorType2["UNKNOWN"] = 0] = "UNKNOWN";
  MisbehaviorType2[MisbehaviorType2["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  MisbehaviorType2[MisbehaviorType2["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  MisbehaviorType2[MisbehaviorType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MisbehaviorType2;
}({});
var MisbehaviorTypeSDKType = MisbehaviorType;
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
    echo: void 0,
    flush: void 0,
    info: void 0,
    initChain: void 0,
    query: void 0,
    beginBlock: void 0,
    checkTx: void 0,
    deliverTx: void 0,
    endBlock: void 0,
    commit: void 0,
    listSnapshots: void 0,
    offerSnapshot: void 0,
    loadSnapshotChunk: void 0,
    applySnapshotChunk: void 0,
    prepareProposal: void 0,
    processProposal: void 0
  };
}
var Request = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.echo !== void 0) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== void 0) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== void 0) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== void 0) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== void 0) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== void 0) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== void 0) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== void 0) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== void 0) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== void 0) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== void 0) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== void 0) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== void 0) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepareProposal !== void 0) {
      RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.processProposal !== void 0) {
      RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : void 0,
      flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : void 0,
      info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : void 0,
      initChain: isSet(object.initChain) ? RequestInitChain.fromJSON(object.initChain) : void 0,
      query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : void 0,
      beginBlock: isSet(object.beginBlock) ? RequestBeginBlock.fromJSON(object.beginBlock) : void 0,
      checkTx: isSet(object.checkTx) ? RequestCheckTx.fromJSON(object.checkTx) : void 0,
      deliverTx: isSet(object.deliverTx) ? RequestDeliverTx.fromJSON(object.deliverTx) : void 0,
      endBlock: isSet(object.endBlock) ? RequestEndBlock.fromJSON(object.endBlock) : void 0,
      commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : void 0,
      listSnapshots: isSet(object.listSnapshots) ? RequestListSnapshots.fromJSON(object.listSnapshots) : void 0,
      offerSnapshot: isSet(object.offerSnapshot) ? RequestOfferSnapshot.fromJSON(object.offerSnapshot) : void 0,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk) ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : void 0,
      applySnapshotChunk: isSet(object.applySnapshotChunk) ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : void 0,
      prepareProposal: isSet(object.prepareProposal) ? RequestPrepareProposal.fromJSON(object.prepareProposal) : void 0,
      processProposal: isSet(object.processProposal) ? RequestProcessProposal.fromJSON(object.processProposal) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.echo !== void 0 && (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : void 0);
    message.flush !== void 0 && (obj.flush = message.flush ? RequestFlush.toJSON(message.flush) : void 0);
    message.info !== void 0 && (obj.info = message.info ? RequestInfo.toJSON(message.info) : void 0);
    message.initChain !== void 0 && (obj.initChain = message.initChain ? RequestInitChain.toJSON(message.initChain) : void 0);
    message.query !== void 0 && (obj.query = message.query ? RequestQuery.toJSON(message.query) : void 0);
    message.beginBlock !== void 0 && (obj.beginBlock = message.beginBlock ? RequestBeginBlock.toJSON(message.beginBlock) : void 0);
    message.checkTx !== void 0 && (obj.checkTx = message.checkTx ? RequestCheckTx.toJSON(message.checkTx) : void 0);
    message.deliverTx !== void 0 && (obj.deliverTx = message.deliverTx ? RequestDeliverTx.toJSON(message.deliverTx) : void 0);
    message.endBlock !== void 0 && (obj.endBlock = message.endBlock ? RequestEndBlock.toJSON(message.endBlock) : void 0);
    message.commit !== void 0 && (obj.commit = message.commit ? RequestCommit.toJSON(message.commit) : void 0);
    message.listSnapshots !== void 0 && (obj.listSnapshots = message.listSnapshots ? RequestListSnapshots.toJSON(message.listSnapshots) : void 0);
    message.offerSnapshot !== void 0 && (obj.offerSnapshot = message.offerSnapshot ? RequestOfferSnapshot.toJSON(message.offerSnapshot) : void 0);
    message.loadSnapshotChunk !== void 0 && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : void 0);
    message.applySnapshotChunk !== void 0 && (obj.applySnapshotChunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk) : void 0);
    message.prepareProposal !== void 0 && (obj.prepareProposal = message.prepareProposal ? RequestPrepareProposal.toJSON(message.prepareProposal) : void 0);
    message.processProposal !== void 0 && (obj.processProposal = message.processProposal ? RequestProcessProposal.toJSON(message.processProposal) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseRequest();
    message.echo = object.echo !== void 0 && object.echo !== null ? RequestEcho.fromPartial(object.echo) : void 0;
    message.flush = object.flush !== void 0 && object.flush !== null ? RequestFlush.fromPartial(object.flush) : void 0;
    message.info = object.info !== void 0 && object.info !== null ? RequestInfo.fromPartial(object.info) : void 0;
    message.initChain = object.initChain !== void 0 && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? RequestQuery.fromPartial(object.query) : void 0;
    message.beginBlock = object.beginBlock !== void 0 && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : void 0;
    message.checkTx = object.checkTx !== void 0 && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : void 0;
    message.deliverTx = object.deliverTx !== void 0 && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : void 0;
    message.endBlock = object.endBlock !== void 0 && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? RequestCommit.fromPartial(object.commit) : void 0;
    message.listSnapshots = object.listSnapshots !== void 0 && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : void 0;
    message.offerSnapshot = object.offerSnapshot !== void 0 && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : void 0;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== void 0 && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : void 0;
    message.applySnapshotChunk = object.applySnapshotChunk !== void 0 && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : void 0;
    message.prepareProposal = object.prepareProposal !== void 0 && object.prepareProposal !== null ? RequestPrepareProposal.fromPartial(object.prepareProposal) : void 0;
    message.processProposal = object.processProposal !== void 0 && object.processProposal !== null ? RequestProcessProposal.fromPartial(object.processProposal) : void 0;
    return message;
  }
};
function createBaseRequestEcho() {
  return {
    message: ""
  };
}
var RequestEcho = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.message !== void 0 && (obj.message = message.message);
    return obj;
  },
  fromPartial(object) {
    var _object$message;
    const message = createBaseRequestEcho();
    message.message = (_object$message = object.message) !== null && _object$message !== void 0 ? _object$message : "";
    return message;
  }
};
function createBaseRequestFlush() {
  return {};
}
var RequestFlush = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseRequestFlush();
    return message;
  }
};
function createBaseRequestInfo() {
  return {
    version: "",
    blockVersion: BigInt("0"),
    p2pVersion: BigInt("0"),
    abciVersion: ""
  };
}
var RequestInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.blockVersion.toString()));
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.p2pVersion.toString()));
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.p2pVersion = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      blockVersion: isSet(object.blockVersion) ? BigInt(object.blockVersion.toString()) : BigInt("0"),
      p2pVersion: isSet(object.p2pVersion) ? BigInt(object.p2pVersion.toString()) : BigInt("0"),
      abciVersion: isSet(object.abciVersion) ? String(object.abciVersion) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.version !== void 0 && (obj.version = message.version);
    message.blockVersion !== void 0 && (obj.blockVersion = (message.blockVersion || BigInt("0")).toString());
    message.p2pVersion !== void 0 && (obj.p2pVersion = (message.p2pVersion || BigInt("0")).toString());
    message.abciVersion !== void 0 && (obj.abciVersion = message.abciVersion);
    return obj;
  },
  fromPartial(object) {
    var _object$version, _object$abciVersion;
    const message = createBaseRequestInfo();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.blockVersion = object.blockVersion !== void 0 && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt("0");
    message.p2pVersion = object.p2pVersion !== void 0 && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt("0");
    message.abciVersion = (_object$abciVersion = object.abciVersion) !== null && _object$abciVersion !== void 0 ? _object$abciVersion : "";
    return message;
  }
};
function createBaseRequestInitChain() {
  return {
    time: void 0,
    chainId: "",
    consensusParams: void 0,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt("0")
  };
}
var RequestInitChain = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== void 0) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.initialHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = BigInt(reader.int64().toString());
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
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : void 0,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
      appStateBytes: isSet(object.appStateBytes) ? bytesFromBase64(object.appStateBytes) : new Uint8Array(),
      initialHeight: isSet(object.initialHeight) ? BigInt(object.initialHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.chainId !== void 0 && (obj.chainId = message.chainId);
    message.consensusParams !== void 0 && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : void 0);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.appStateBytes !== void 0 && (obj.appStateBytes = base64FromBytes(message.appStateBytes !== void 0 ? message.appStateBytes : new Uint8Array()));
    message.initialHeight !== void 0 && (obj.initialHeight = (message.initialHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$time, _object$chainId, _object$validators, _object$appStateBytes;
    const message = createBaseRequestInitChain();
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : void 0;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.consensusParams = object.consensusParams !== void 0 && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : void 0;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map((e) => ValidatorUpdate.fromPartial(e))) || [];
    message.appStateBytes = (_object$appStateBytes = object.appStateBytes) !== null && _object$appStateBytes !== void 0 ? _object$appStateBytes : new Uint8Array();
    message.initialHeight = object.initialHeight !== void 0 && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt("0"),
    prove: false
  };
}
var RequestQuery = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      prove: isSet(object.prove) ? Boolean(object.prove) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.path !== void 0 && (obj.path = message.path);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.prove !== void 0 && (obj.prove = message.prove);
    return obj;
  },
  fromPartial(object) {
    var _object$data, _object$path, _object$prove;
    const message = createBaseRequestQuery();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: void 0,
    lastCommitInfo: void 0,
    byzantineValidators: []
  };
}
var RequestBeginBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== void 0) {
      CommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      header: isSet(object.header) ? Header.fromJSON(object.header) : void 0,
      lastCommitInfo: isSet(object.lastCommitInfo) ? CommitInfo.fromJSON(object.lastCommitInfo) : void 0,
      byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators) ? object.byzantineValidators.map((e) => Misbehavior.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    message.header !== void 0 && (obj.header = message.header ? Header.toJSON(message.header) : void 0);
    message.lastCommitInfo !== void 0 && (obj.lastCommitInfo = message.lastCommitInfo ? CommitInfo.toJSON(message.lastCommitInfo) : void 0);
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map((e) => e ? Misbehavior.toJSON(e) : void 0);
    } else {
      obj.byzantineValidators = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$hash, _object$byzantineVali;
    const message = createBaseRequestBeginBlock();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.lastCommitInfo = object.lastCommitInfo !== void 0 && object.lastCommitInfo !== null ? CommitInfo.fromPartial(object.lastCommitInfo) : void 0;
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map((e) => Misbehavior.fromPartial(e))) || [];
    return message;
  }
};
function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
var RequestCheckTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = base64FromBytes(message.tx !== void 0 ? message.tx : new Uint8Array()));
    message.type !== void 0 && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },
  fromPartial(object) {
    var _object$tx, _object$type;
    const message = createBaseRequestCheckTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    return message;
  }
};
function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}
var RequestDeliverTx = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = base64FromBytes(message.tx !== void 0 ? message.tx : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$tx2;
    const message = createBaseRequestDeliverTx();
    message.tx = (_object$tx2 = object.tx) !== null && _object$tx2 !== void 0 ? _object$tx2 : new Uint8Array();
    return message;
  }
};
function createBaseRequestEndBlock() {
  return {
    height: BigInt("0")
  };
}
var RequestEndBlock = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    return message;
  }
};
function createBaseRequestCommit() {
  return {};
}
var RequestCommit = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseRequestCommit();
    return message;
  }
};
function createBaseRequestListSnapshots() {
  return {};
}
var RequestListSnapshots = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseRequestListSnapshots();
    return message;
  }
};
function createBaseRequestOfferSnapshot() {
  return {
    snapshot: void 0,
    appHash: new Uint8Array()
  };
}
var RequestOfferSnapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.snapshot !== void 0) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : void 0,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.snapshot !== void 0 && (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : void 0);
    message.appHash !== void 0 && (obj.appHash = base64FromBytes(message.appHash !== void 0 ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$appHash;
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== void 0 && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : void 0;
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  }
};
function createBaseRequestLoadSnapshotChunk() {
  return {
    height: BigInt("0"),
    format: 0,
    chunk: 0
  };
}
var RequestLoadSnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.height.toString()));
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      format: isSet(object.format) ? Number(object.format) : 0,
      chunk: isSet(object.chunk) ? Number(object.chunk) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.format !== void 0 && (obj.format = Math.round(message.format));
    message.chunk !== void 0 && (obj.chunk = Math.round(message.chunk));
    return obj;
  },
  fromPartial(object) {
    var _object$format, _object$chunk;
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : 0;
    return message;
  }
};
function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
var RequestApplySnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== void 0 && (obj.index = Math.round(message.index));
    message.chunk !== void 0 && (obj.chunk = base64FromBytes(message.chunk !== void 0 ? message.chunk : new Uint8Array()));
    message.sender !== void 0 && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$chunk2, _object$sender;
    const message = createBaseRequestApplySnapshotChunk();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.chunk = (_object$chunk2 = object.chunk) !== null && _object$chunk2 !== void 0 ? _object$chunk2 : new Uint8Array();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    return message;
  }
};
function createBaseRequestPrepareProposal() {
  return {
    maxTxBytes: BigInt("0"),
    txs: [],
    localLastCommit: void 0,
    misbehavior: [],
    height: BigInt("0"),
    time: void 0,
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var RequestPrepareProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.maxTxBytes !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.maxTxBytes.toString()));
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v);
    }
    if (message.localLastCommit !== void 0) {
      ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = BigInt(reader.int64().toString());
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
          message.height = BigInt(reader.int64().toString());
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      maxTxBytes: isSet(object.maxTxBytes) ? BigInt(object.maxTxBytes.toString()) : BigInt("0"),
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
      localLastCommit: isSet(object.localLastCommit) ? ExtendedCommitInfo.fromJSON(object.localLastCommit) : void 0,
      misbehavior: Array.isArray(object === null || object === void 0 ? void 0 : object.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxTxBytes !== void 0 && (obj.maxTxBytes = (message.maxTxBytes || BigInt("0")).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.localLastCommit !== void 0 && (obj.localLastCommit = message.localLastCommit ? ExtendedCommitInfo.toJSON(message.localLastCommit) : void 0);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => e ? Misbehavior.toJSON(e) : void 0);
    } else {
      obj.misbehavior = [];
    }
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.nextValidatorsHash !== void 0 && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== void 0 ? message.nextValidatorsHash : new Uint8Array()));
    message.proposerAddress !== void 0 && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== void 0 ? message.proposerAddress : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txs, _object$misbehavior, _object$time2, _object$nextValidator, _object$proposerAddre;
    const message = createBaseRequestPrepareProposal();
    message.maxTxBytes = object.maxTxBytes !== void 0 && object.maxTxBytes !== null ? BigInt(object.maxTxBytes.toString()) : BigInt("0");
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map((e) => e)) || [];
    message.localLastCommit = object.localLastCommit !== void 0 && object.localLastCommit !== null ? ExtendedCommitInfo.fromPartial(object.localLastCommit) : void 0;
    message.misbehavior = ((_object$misbehavior = object.misbehavior) === null || _object$misbehavior === void 0 ? void 0 : _object$misbehavior.map((e) => Misbehavior.fromPartial(e))) || [];
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = (_object$time2 = object.time) !== null && _object$time2 !== void 0 ? _object$time2 : void 0;
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre = object.proposerAddress) !== null && _object$proposerAddre !== void 0 ? _object$proposerAddre : new Uint8Array();
    return message;
  }
};
function createBaseRequestProcessProposal() {
  return {
    txs: [],
    proposedLastCommit: void 0,
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt("0"),
    time: void 0,
    nextValidatorsHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var RequestProcessProposal = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    if (message.proposedLastCommit !== void 0) {
      CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.height = BigInt(reader.int64().toString());
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
      proposedLastCommit: isSet(object.proposedLastCommit) ? CommitInfo.fromJSON(object.proposedLastCommit) : void 0,
      misbehavior: Array.isArray(object === null || object === void 0 ? void 0 : object.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    message.proposedLastCommit !== void 0 && (obj.proposedLastCommit = message.proposedLastCommit ? CommitInfo.toJSON(message.proposedLastCommit) : void 0);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) => e ? Misbehavior.toJSON(e) : void 0);
    } else {
      obj.misbehavior = [];
    }
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.nextValidatorsHash !== void 0 && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== void 0 ? message.nextValidatorsHash : new Uint8Array()));
    message.proposerAddress !== void 0 && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== void 0 ? message.proposerAddress : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txs2, _object$misbehavior2, _object$hash2, _object$time3, _object$nextValidator2, _object$proposerAddre2;
    const message = createBaseRequestProcessProposal();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map((e) => e)) || [];
    message.proposedLastCommit = object.proposedLastCommit !== void 0 && object.proposedLastCommit !== null ? CommitInfo.fromPartial(object.proposedLastCommit) : void 0;
    message.misbehavior = ((_object$misbehavior2 = object.misbehavior) === null || _object$misbehavior2 === void 0 ? void 0 : _object$misbehavior2.map((e) => Misbehavior.fromPartial(e))) || [];
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = (_object$time3 = object.time) !== null && _object$time3 !== void 0 ? _object$time3 : void 0;
    message.nextValidatorsHash = (_object$nextValidator2 = object.nextValidatorsHash) !== null && _object$nextValidator2 !== void 0 ? _object$nextValidator2 : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre2 = object.proposerAddress) !== null && _object$proposerAddre2 !== void 0 ? _object$proposerAddre2 : new Uint8Array();
    return message;
  }
};
function createBaseResponse() {
  return {
    exception: void 0,
    echo: void 0,
    flush: void 0,
    info: void 0,
    initChain: void 0,
    query: void 0,
    beginBlock: void 0,
    checkTx: void 0,
    deliverTx: void 0,
    endBlock: void 0,
    commit: void 0,
    listSnapshots: void 0,
    offerSnapshot: void 0,
    loadSnapshotChunk: void 0,
    applySnapshotChunk: void 0,
    prepareProposal: void 0,
    processProposal: void 0
  };
}
var Response = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exception !== void 0) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== void 0) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== void 0) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== void 0) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== void 0) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== void 0) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== void 0) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== void 0) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== void 0) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== void 0) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== void 0) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== void 0) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== void 0) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== void 0) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepareProposal !== void 0) {
      ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.processProposal !== void 0) {
      ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : void 0,
      echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : void 0,
      flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : void 0,
      info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : void 0,
      initChain: isSet(object.initChain) ? ResponseInitChain.fromJSON(object.initChain) : void 0,
      query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : void 0,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : void 0,
      checkTx: isSet(object.checkTx) ? ResponseCheckTx.fromJSON(object.checkTx) : void 0,
      deliverTx: isSet(object.deliverTx) ? ResponseDeliverTx.fromJSON(object.deliverTx) : void 0,
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : void 0,
      commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : void 0,
      listSnapshots: isSet(object.listSnapshots) ? ResponseListSnapshots.fromJSON(object.listSnapshots) : void 0,
      offerSnapshot: isSet(object.offerSnapshot) ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot) : void 0,
      loadSnapshotChunk: isSet(object.loadSnapshotChunk) ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : void 0,
      applySnapshotChunk: isSet(object.applySnapshotChunk) ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : void 0,
      prepareProposal: isSet(object.prepareProposal) ? ResponsePrepareProposal.fromJSON(object.prepareProposal) : void 0,
      processProposal: isSet(object.processProposal) ? ResponseProcessProposal.fromJSON(object.processProposal) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.exception !== void 0 && (obj.exception = message.exception ? ResponseException.toJSON(message.exception) : void 0);
    message.echo !== void 0 && (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : void 0);
    message.flush !== void 0 && (obj.flush = message.flush ? ResponseFlush.toJSON(message.flush) : void 0);
    message.info !== void 0 && (obj.info = message.info ? ResponseInfo.toJSON(message.info) : void 0);
    message.initChain !== void 0 && (obj.initChain = message.initChain ? ResponseInitChain.toJSON(message.initChain) : void 0);
    message.query !== void 0 && (obj.query = message.query ? ResponseQuery.toJSON(message.query) : void 0);
    message.beginBlock !== void 0 && (obj.beginBlock = message.beginBlock ? ResponseBeginBlock.toJSON(message.beginBlock) : void 0);
    message.checkTx !== void 0 && (obj.checkTx = message.checkTx ? ResponseCheckTx.toJSON(message.checkTx) : void 0);
    message.deliverTx !== void 0 && (obj.deliverTx = message.deliverTx ? ResponseDeliverTx.toJSON(message.deliverTx) : void 0);
    message.endBlock !== void 0 && (obj.endBlock = message.endBlock ? ResponseEndBlock.toJSON(message.endBlock) : void 0);
    message.commit !== void 0 && (obj.commit = message.commit ? ResponseCommit.toJSON(message.commit) : void 0);
    message.listSnapshots !== void 0 && (obj.listSnapshots = message.listSnapshots ? ResponseListSnapshots.toJSON(message.listSnapshots) : void 0);
    message.offerSnapshot !== void 0 && (obj.offerSnapshot = message.offerSnapshot ? ResponseOfferSnapshot.toJSON(message.offerSnapshot) : void 0);
    message.loadSnapshotChunk !== void 0 && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : void 0);
    message.applySnapshotChunk !== void 0 && (obj.applySnapshotChunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk) : void 0);
    message.prepareProposal !== void 0 && (obj.prepareProposal = message.prepareProposal ? ResponsePrepareProposal.toJSON(message.prepareProposal) : void 0);
    message.processProposal !== void 0 && (obj.processProposal = message.processProposal ? ResponseProcessProposal.toJSON(message.processProposal) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseResponse();
    message.exception = object.exception !== void 0 && object.exception !== null ? ResponseException.fromPartial(object.exception) : void 0;
    message.echo = object.echo !== void 0 && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : void 0;
    message.flush = object.flush !== void 0 && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : void 0;
    message.info = object.info !== void 0 && object.info !== null ? ResponseInfo.fromPartial(object.info) : void 0;
    message.initChain = object.initChain !== void 0 && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? ResponseQuery.fromPartial(object.query) : void 0;
    message.beginBlock = object.beginBlock !== void 0 && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : void 0;
    message.checkTx = object.checkTx !== void 0 && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : void 0;
    message.deliverTx = object.deliverTx !== void 0 && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : void 0;
    message.endBlock = object.endBlock !== void 0 && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : void 0;
    message.listSnapshots = object.listSnapshots !== void 0 && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : void 0;
    message.offerSnapshot = object.offerSnapshot !== void 0 && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : void 0;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== void 0 && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : void 0;
    message.applySnapshotChunk = object.applySnapshotChunk !== void 0 && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : void 0;
    message.prepareProposal = object.prepareProposal !== void 0 && object.prepareProposal !== null ? ResponsePrepareProposal.fromPartial(object.prepareProposal) : void 0;
    message.processProposal = object.processProposal !== void 0 && object.processProposal !== null ? ResponseProcessProposal.fromPartial(object.processProposal) : void 0;
    return message;
  }
};
function createBaseResponseException() {
  return {
    error: ""
  };
}
var ResponseException = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.error !== void 0 && (obj.error = message.error);
    return obj;
  },
  fromPartial(object) {
    var _object$error;
    const message = createBaseResponseException();
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : "";
    return message;
  }
};
function createBaseResponseEcho() {
  return {
    message: ""
  };
}
var ResponseEcho = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.message !== void 0 && (obj.message = message.message);
    return obj;
  },
  fromPartial(object) {
    var _object$message2;
    const message = createBaseResponseEcho();
    message.message = (_object$message2 = object.message) !== null && _object$message2 !== void 0 ? _object$message2 : "";
    return message;
  }
};
function createBaseResponseFlush() {
  return {};
}
var ResponseFlush = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseResponseFlush();
    return message;
  }
};
function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    appVersion: BigInt("0"),
    lastBlockHeight: BigInt("0"),
    lastBlockAppHash: new Uint8Array()
  };
}
var ResponseInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.appVersion.toString()));
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.lastBlockHeight.toString()));
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.lastBlockHeight = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      version: isSet(object.version) ? String(object.version) : "",
      appVersion: isSet(object.appVersion) ? BigInt(object.appVersion.toString()) : BigInt("0"),
      lastBlockHeight: isSet(object.lastBlockHeight) ? BigInt(object.lastBlockHeight.toString()) : BigInt("0"),
      lastBlockAppHash: isSet(object.lastBlockAppHash) ? bytesFromBase64(object.lastBlockAppHash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = message.data);
    message.version !== void 0 && (obj.version = message.version);
    message.appVersion !== void 0 && (obj.appVersion = (message.appVersion || BigInt("0")).toString());
    message.lastBlockHeight !== void 0 && (obj.lastBlockHeight = (message.lastBlockHeight || BigInt("0")).toString());
    message.lastBlockAppHash !== void 0 && (obj.lastBlockAppHash = base64FromBytes(message.lastBlockAppHash !== void 0 ? message.lastBlockAppHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data2, _object$version2, _object$lastBlockAppH;
    const message = createBaseResponseInfo();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.appVersion = object.appVersion !== void 0 && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt("0");
    message.lastBlockHeight = object.lastBlockHeight !== void 0 && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt("0");
    message.lastBlockAppHash = (_object$lastBlockAppH = object.lastBlockAppHash) !== null && _object$lastBlockAppH !== void 0 ? _object$lastBlockAppH : new Uint8Array();
    return message;
  }
};
function createBaseResponseInitChain() {
  return {
    consensusParams: void 0,
    validators: [],
    appHash: new Uint8Array()
  };
}
var ResponseInitChain = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensusParams !== void 0) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : void 0,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.consensusParams !== void 0 && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : void 0);
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? ValidatorUpdate.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.appHash !== void 0 && (obj.appHash = base64FromBytes(message.appHash !== void 0 ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$validators2, _object$appHash2;
    const message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== void 0 && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : void 0;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map((e) => ValidatorUpdate.fromPartial(e))) || [];
    message.appHash = (_object$appHash2 = object.appHash) !== null && _object$appHash2 !== void 0 ? _object$appHash2 : new Uint8Array();
    return message;
  }
};
function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt("0"),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: void 0,
    height: BigInt("0"),
    codespace: ""
  };
}
var ResponseQuery = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.index.toString()));
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== void 0) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.index = BigInt(reader.int64().toString());
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt("0"),
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : void 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.code !== void 0 && (obj.code = Math.round(message.code));
    message.log !== void 0 && (obj.log = message.log);
    message.info !== void 0 && (obj.info = message.info);
    message.index !== void 0 && (obj.index = (message.index || BigInt("0")).toString());
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.value !== void 0 && (obj.value = base64FromBytes(message.value !== void 0 ? message.value : new Uint8Array()));
    message.proofOps !== void 0 && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : void 0);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.codespace !== void 0 && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    const message = createBaseResponseQuery();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt("0");
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proofOps = object.proofOps !== void 0 && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}
var ResponseBeginBlock = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.events) {
      Event.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$events;
    const message = createBaseResponseBeginBlock();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map((e) => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt("0"),
    gasUsed: BigInt("0"),
    events: [],
    codespace: "",
    sender: "",
    priority: BigInt("0"),
    mempoolError: ""
  };
}
var ResponseCheckTx = {
  encode(message, writer = _m0.Writer.create()) {
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
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.gasWanted.toString()));
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.gasUsed.toString()));
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(80).int64(import_long.default.fromString(message.priority.toString()));
    }
    if (message.mempoolError !== "") {
      writer.uint32(90).string(message.mempoolError);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.gasWanted = BigInt(reader.int64().toString());
          break;
        case 6:
          message.gasUsed = BigInt(reader.int64().toString());
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
          message.priority = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt("0"),
      gasUsed: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt("0"),
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      priority: isSet(object.priority) ? BigInt(object.priority.toString()) : BigInt("0"),
      mempoolError: isSet(object.mempoolError) ? String(object.mempoolError) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.code !== void 0 && (obj.code = Math.round(message.code));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.log !== void 0 && (obj.log = message.log);
    message.info !== void 0 && (obj.info = message.info);
    message.gasWanted !== void 0 && (obj.gas_wanted = (message.gasWanted || BigInt("0")).toString());
    message.gasUsed !== void 0 && (obj.gas_used = (message.gasUsed || BigInt("0")).toString());
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    message.codespace !== void 0 && (obj.codespace = message.codespace);
    message.sender !== void 0 && (obj.sender = message.sender);
    message.priority !== void 0 && (obj.priority = (message.priority || BigInt("0")).toString());
    message.mempoolError !== void 0 && (obj.mempoolError = message.mempoolError);
    return obj;
  },
  fromPartial(object) {
    var _object$code2, _object$data3, _object$log2, _object$info2, _object$events2, _object$codespace2, _object$sender2, _object$mempoolError;
    const message = createBaseResponseCheckTx();
    message.code = (_object$code2 = object.code) !== null && _object$code2 !== void 0 ? _object$code2 : 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.info = (_object$info2 = object.info) !== null && _object$info2 !== void 0 ? _object$info2 : "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt("0");
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt("0");
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map((e) => Event.fromPartial(e))) || [];
    message.codespace = (_object$codespace2 = object.codespace) !== null && _object$codespace2 !== void 0 ? _object$codespace2 : "";
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.priority = object.priority !== void 0 && object.priority !== null ? BigInt(object.priority.toString()) : BigInt("0");
    message.mempoolError = (_object$mempoolError = object.mempoolError) !== null && _object$mempoolError !== void 0 ? _object$mempoolError : "";
    return message;
  }
};
function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt("0"),
    gasUsed: BigInt("0"),
    events: [],
    codespace: ""
  };
}
var ResponseDeliverTx = {
  encode(message, writer = _m0.Writer.create()) {
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
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.gasWanted.toString()));
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.gasUsed.toString()));
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.gasWanted = BigInt(reader.int64().toString());
          break;
        case 6:
          message.gasUsed = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt("0"),
      gasUsed: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt("0"),
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.code !== void 0 && (obj.code = Math.round(message.code));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.log !== void 0 && (obj.log = message.log);
    message.info !== void 0 && (obj.info = message.info);
    message.gasWanted !== void 0 && (obj.gas_wanted = (message.gasWanted || BigInt("0")).toString());
    message.gasUsed !== void 0 && (obj.gas_used = (message.gasUsed || BigInt("0")).toString());
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    message.codespace !== void 0 && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial(object) {
    var _object$code3, _object$data4, _object$log3, _object$info3, _object$events3, _object$codespace3;
    const message = createBaseResponseDeliverTx();
    message.code = (_object$code3 = object.code) !== null && _object$code3 !== void 0 ? _object$code3 : 0;
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    message.log = (_object$log3 = object.log) !== null && _object$log3 !== void 0 ? _object$log3 : "";
    message.info = (_object$info3 = object.info) !== null && _object$info3 !== void 0 ? _object$info3 : "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt("0");
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt("0");
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map((e) => Event.fromPartial(e))) || [];
    message.codespace = (_object$codespace3 = object.codespace) !== null && _object$codespace3 !== void 0 ? _object$codespace3 : "";
    return message;
  }
};
function createBaseResponseEndBlock() {
  return {
    validatorUpdates: [],
    consensusParamUpdates: void 0,
    events: []
  };
}
var ResponseEndBlock = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== void 0) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      validatorUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorUpdates) ? object.validatorUpdates.map((e) => ValidatorUpdate.fromJSON(e)) : [],
      consensusParamUpdates: isSet(object.consensusParamUpdates) ? ConsensusParams.fromJSON(object.consensusParamUpdates) : void 0,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) => e ? ValidatorUpdate.toJSON(e) : void 0);
    } else {
      obj.validatorUpdates = [];
    }
    message.consensusParamUpdates !== void 0 && (obj.consensusParamUpdates = message.consensusParamUpdates ? ConsensusParams.toJSON(message.consensusParamUpdates) : void 0);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$validatorUpda, _object$events4;
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = ((_object$validatorUpda = object.validatorUpdates) === null || _object$validatorUpda === void 0 ? void 0 : _object$validatorUpda.map((e) => ValidatorUpdate.fromPartial(e))) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== void 0 && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : void 0;
    message.events = ((_object$events4 = object.events) === null || _object$events4 === void 0 ? void 0 : _object$events4.map((e) => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt("0")
  };
}
var ResponseCommit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.retainHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = BigInt(reader.int64().toString());
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      retainHeight: isSet(object.retainHeight) ? BigInt(object.retainHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.retainHeight !== void 0 && (obj.retainHeight = (message.retainHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$data5;
    const message = createBaseResponseCommit();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    message.retainHeight = object.retainHeight !== void 0 && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}
var ResponseListSnapshots = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.snapshots) {
      Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots) ? object.snapshots.map((e) => Snapshot.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) => e ? Snapshot.toJSON(e) : void 0);
    } else {
      obj.snapshots = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$snapshots;
    const message = createBaseResponseListSnapshots();
    message.snapshots = ((_object$snapshots = object.snapshots) === null || _object$snapshots === void 0 ? void 0 : _object$snapshots.map((e) => Snapshot.fromPartial(e))) || [];
    return message;
  }
};
function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}
var ResponseOfferSnapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result;
    const message = createBaseResponseOfferSnapshot();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}
var ResponseLoadSnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.chunk !== void 0 && (obj.chunk = base64FromBytes(message.chunk !== void 0 ? message.chunk : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$chunk3;
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = (_object$chunk3 = object.chunk) !== null && _object$chunk3 !== void 0 ? _object$chunk3 : new Uint8Array();
    return message;
  }
};
function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
var ResponseApplySnapshotChunk = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
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
  fromJSON(object) {
    return {
      result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : 0,
      refetchChunks: Array.isArray(object === null || object === void 0 ? void 0 : object.refetchChunks) ? object.refetchChunks.map((e) => Number(e)) : [],
      rejectSenders: Array.isArray(object === null || object === void 0 ? void 0 : object.rejectSenders) ? object.rejectSenders.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map((e) => Math.round(e));
    } else {
      obj.refetchChunks = [];
    }
    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map((e) => e);
    } else {
      obj.rejectSenders = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$result2, _object$refetchChunks, _object$rejectSenders;
    const message = createBaseResponseApplySnapshotChunk();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    message.refetchChunks = ((_object$refetchChunks = object.refetchChunks) === null || _object$refetchChunks === void 0 ? void 0 : _object$refetchChunks.map((e) => e)) || [];
    message.rejectSenders = ((_object$rejectSenders = object.rejectSenders) === null || _object$rejectSenders === void 0 ? void 0 : _object$rejectSenders.map((e) => e)) || [];
    return message;
  }
};
function createBaseResponsePrepareProposal() {
  return {
    txs: []
  };
}
var ResponsePrepareProposal = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txs3;
    const message = createBaseResponsePrepareProposal();
    message.txs = ((_object$txs3 = object.txs) === null || _object$txs3 === void 0 ? void 0 : _object$txs3.map((e) => e)) || [];
    return message;
  }
};
function createBaseResponseProcessProposal() {
  return {
    status: 0
  };
}
var ResponseProcessProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      status: isSet(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.status !== void 0 && (obj.status = responseProcessProposal_ProposalStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseResponseProcessProposal();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    return message;
  }
};
function createBaseCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
var CommitInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => VoteInfo.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.round !== void 0 && (obj.round = Math.round(message.round));
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? VoteInfo.toJSON(e) : void 0);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$round, _object$votes;
    const message = createBaseCommitInfo();
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map((e) => VoteInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseExtendedCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}
var ExtendedCommitInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      round: isSet(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => ExtendedVoteInfo.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.round !== void 0 && (obj.round = Math.round(message.round));
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? ExtendedVoteInfo.toJSON(e) : void 0);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$round2, _object$votes2;
    const message = createBaseExtendedCommitInfo();
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.votes = ((_object$votes2 = object.votes) === null || _object$votes2 === void 0 ? void 0 : _object$votes2.map((e) => ExtendedVoteInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}
var Event = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map((e) => EventAttribute.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? EventAttribute.toJSON(e) : void 0);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$type2, _object$attributes;
    const message = createBaseEvent();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map((e) => EventAttribute.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEventAttribute() {
  return {
    key: "",
    value: "",
    index: false
  };
}
var EventAttribute = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      index: isSet(object.index) ? Boolean(object.index) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value);
    message.index !== void 0 && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$key2, _object$value2, _object$index2;
    const message = createBaseEventAttribute();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : "";
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : false;
    return message;
  }
};
function createBaseTxResult() {
  return {
    height: BigInt("0"),
    index: 0,
    tx: new Uint8Array(),
    result: void 0
  };
}
var TxResult = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== void 0) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      index: isSet(object.index) ? Number(object.index) : 0,
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      result: isSet(object.result) ? ResponseDeliverTx.fromJSON(object.result) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.index !== void 0 && (obj.index = Math.round(message.index));
    message.tx !== void 0 && (obj.tx = base64FromBytes(message.tx !== void 0 ? message.tx : new Uint8Array()));
    message.result !== void 0 && (obj.result = message.result ? ResponseDeliverTx.toJSON(message.result) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$index3, _object$tx3;
    const message = createBaseTxResult();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : 0;
    message.tx = (_object$tx3 = object.tx) !== null && _object$tx3 !== void 0 ? _object$tx3 : new Uint8Array();
    message.result = object.result !== void 0 && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : void 0;
    return message;
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: BigInt("0")
  };
}
var Validator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.power.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = BigInt(reader.int64().toString());
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
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = base64FromBytes(message.address !== void 0 ? message.address : new Uint8Array()));
    message.power !== void 0 && (obj.power = (message.power || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt("0");
    return message;
  }
};
function createBaseValidatorUpdate() {
  return {
    pubKey: void 0,
    power: BigInt("0")
  };
}
var ValidatorUpdate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.power.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = BigInt(reader.int64().toString());
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
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : void 0,
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.pubKey !== void 0 && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : void 0);
    message.power !== void 0 && (obj.power = (message.power || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt("0");
    return message;
  }
};
function createBaseVoteInfo() {
  return {
    validator: void 0,
    signedLastBlock: false
  };
}
var VoteInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : void 0,
      signedLastBlock: isSet(object.signedLastBlock) ? Boolean(object.signedLastBlock) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.validator !== void 0 && (obj.validator = message.validator ? Validator.toJSON(message.validator) : void 0);
    message.signedLastBlock !== void 0 && (obj.signedLastBlock = message.signedLastBlock);
    return obj;
  },
  fromPartial(object) {
    var _object$signedLastBlo;
    const message = createBaseVoteInfo();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.signedLastBlock = (_object$signedLastBlo = object.signedLastBlock) !== null && _object$signedLastBlo !== void 0 ? _object$signedLastBlo : false;
    return message;
  }
};
function createBaseExtendedVoteInfo() {
  return {
    validator: void 0,
    signedLastBlock: false,
    voteExtension: new Uint8Array()
  };
}
var ExtendedVoteInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== void 0) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : void 0,
      signedLastBlock: isSet(object.signedLastBlock) ? Boolean(object.signedLastBlock) : false,
      voteExtension: isSet(object.voteExtension) ? bytesFromBase64(object.voteExtension) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.validator !== void 0 && (obj.validator = message.validator ? Validator.toJSON(message.validator) : void 0);
    message.signedLastBlock !== void 0 && (obj.signedLastBlock = message.signedLastBlock);
    message.voteExtension !== void 0 && (obj.voteExtension = base64FromBytes(message.voteExtension !== void 0 ? message.voteExtension : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$signedLastBlo2, _object$voteExtension;
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.signedLastBlock = (_object$signedLastBlo2 = object.signedLastBlock) !== null && _object$signedLastBlo2 !== void 0 ? _object$signedLastBlo2 : false;
    message.voteExtension = (_object$voteExtension = object.voteExtension) !== null && _object$voteExtension !== void 0 ? _object$voteExtension : new Uint8Array();
    return message;
  }
};
function createBaseMisbehavior() {
  return {
    type: 0,
    validator: void 0,
    height: BigInt("0"),
    time: void 0,
    totalVotingPower: BigInt("0")
  };
}
var Misbehavior = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.totalVotingPower.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = BigInt(reader.int64().toString());
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = BigInt(reader.int64().toString());
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
      type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : 0,
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : void 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = misbehaviorTypeToJSON(message.type));
    message.validator !== void 0 && (obj.validator = message.validator ? Validator.toJSON(message.validator) : void 0);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.totalVotingPower !== void 0 && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$type3, _object$time4;
    const message = createBaseMisbehavior();
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = (_object$time4 = object.time) !== null && _object$time4 !== void 0 ? _object$time4 : void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    return message;
  }
};
function createBaseSnapshot() {
  return {
    height: BigInt("0"),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
var Snapshot = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.height.toString()));
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.format !== void 0 && (obj.format = Math.round(message.format));
    message.chunks !== void 0 && (obj.chunks = Math.round(message.chunks));
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    message.metadata !== void 0 && (obj.metadata = base64FromBytes(message.metadata !== void 0 ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$format2, _object$chunks, _object$hash3, _object$metadata;
    const message = createBaseSnapshot();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};

export {
  RequestBeginBlock,
  RequestDeliverTx,
  RequestEndBlock,
  ResponseBeginBlock,
  ResponseDeliverTx,
  ResponseEndBlock,
  ResponseCommit,
  Event,
  ValidatorUpdate,
  types_exports
};
//# sourceMappingURL=chunk-KDGHQXW3.js.map
