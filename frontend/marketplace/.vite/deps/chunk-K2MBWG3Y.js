import {
  Commit,
  Data,
  Header,
  LightBlock,
  Validator,
  Vote
} from "./chunk-OOMJJQEG.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/types/evidence.js
var evidence_exports = {};
__export(evidence_exports, {
  DuplicateVoteEvidence: () => DuplicateVoteEvidence,
  Evidence: () => Evidence,
  EvidenceList: () => EvidenceList,
  LightClientAttackEvidence: () => LightClientAttackEvidence
});
var _m0 = __toESM(require_minimal());
function createBaseEvidence() {
  return {
    duplicateVoteEvidence: void 0,
    lightClientAttackEvidence: void 0
  };
}
var Evidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.duplicateVoteEvidence !== void 0) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== void 0) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
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
      duplicateVoteEvidence: isSet(object.duplicateVoteEvidence) ? DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence) : void 0,
      lightClientAttackEvidence: isSet(object.lightClientAttackEvidence) ? LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.duplicateVoteEvidence !== void 0 && (obj.duplicateVoteEvidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence) : void 0);
    message.lightClientAttackEvidence !== void 0 && (obj.lightClientAttackEvidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== void 0 && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : void 0;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== void 0 && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : void 0;
    return message;
  }
};
function createBaseDuplicateVoteEvidence() {
  return {
    voteA: void 0,
    voteB: void 0,
    totalVotingPower: BigInt("0"),
    validatorPower: BigInt("0"),
    timestamp: void 0
  };
}
var DuplicateVoteEvidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.voteA !== void 0) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== void 0) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.totalVotingPower.toString()));
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.validatorPower.toString()));
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = BigInt(reader.int64().toString());
          break;
        case 4:
          message.validatorPower = BigInt(reader.int64().toString());
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : void 0,
      voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : void 0,
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0"),
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.voteA !== void 0 && (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : void 0);
    message.voteB !== void 0 && (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : void 0);
    message.totalVotingPower !== void 0 && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    message.validatorPower !== void 0 && (obj.validatorPower = (message.validatorPower || BigInt("0")).toString());
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$timestamp;
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== void 0 && object.voteA !== null ? Vote.fromPartial(object.voteA) : void 0;
    message.voteB = object.voteB !== void 0 && object.voteB !== null ? Vote.fromPartial(object.voteB) : void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    message.validatorPower = object.validatorPower !== void 0 && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt("0");
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : void 0;
    return message;
  }
};
function createBaseLightClientAttackEvidence() {
  return {
    conflictingBlock: void 0,
    commonHeight: BigInt("0"),
    byzantineValidators: [],
    totalVotingPower: BigInt("0"),
    timestamp: void 0
  };
}
var LightClientAttackEvidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.conflictingBlock !== void 0) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.commonHeight.toString()));
    }
    for (const v of message.byzantineValidators) {
      Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.totalVotingPower.toString()));
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = BigInt(reader.int64().toString());
          break;
        case 3:
          message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = BigInt(reader.int64().toString());
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      conflictingBlock: isSet(object.conflictingBlock) ? LightBlock.fromJSON(object.conflictingBlock) : void 0,
      commonHeight: isSet(object.commonHeight) ? BigInt(object.commonHeight.toString()) : BigInt("0"),
      byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators) ? object.byzantineValidators.map((e) => Validator.fromJSON(e)) : [],
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.conflictingBlock !== void 0 && (obj.conflictingBlock = message.conflictingBlock ? LightBlock.toJSON(message.conflictingBlock) : void 0);
    message.commonHeight !== void 0 && (obj.commonHeight = (message.commonHeight || BigInt("0")).toString());
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.byzantineValidators = [];
    }
    message.totalVotingPower !== void 0 && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$byzantineVali, _object$timestamp2;
    const message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== void 0 && object.conflictingBlock !== null ? LightBlock.fromPartial(object.conflictingBlock) : void 0;
    message.commonHeight = object.commonHeight !== void 0 && object.commonHeight !== null ? BigInt(object.commonHeight.toString()) : BigInt("0");
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map((e) => Validator.fromPartial(e))) || [];
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : void 0;
    return message;
  }
};
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
var EvidenceList = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.evidence) {
      Evidence.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
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
      evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map((e) => Evidence.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e ? Evidence.toJSON(e) : void 0);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$evidence;
    const message = createBaseEvidenceList();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map((e) => Evidence.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/types/block.js
var block_exports = {};
__export(block_exports, {
  Block: () => Block
});
var _m02 = __toESM(require_minimal());
function createBaseBlock() {
  return {
    header: void 0,
    data: void 0,
    evidence: void 0,
    lastCommit: void 0
  };
}
var Block = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== void 0) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
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
      header: isSet(object.header) ? Header.fromJSON(object.header) : void 0,
      data: isSet(object.data) ? Data.fromJSON(object.data) : void 0,
      evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : void 0,
      lastCommit: isSet(object.lastCommit) ? Commit.fromJSON(object.lastCommit) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.header !== void 0 && (obj.header = message.header ? Header.toJSON(message.header) : void 0);
    message.data !== void 0 && (obj.data = message.data ? Data.toJSON(message.data) : void 0);
    message.evidence !== void 0 && (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : void 0);
    message.lastCommit !== void 0 && (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? Data.fromPartial(object.data) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : void 0;
    message.lastCommit = object.lastCommit !== void 0 && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : void 0;
    return message;
  }
};

export {
  EvidenceList,
  evidence_exports,
  Block,
  block_exports
};
//# sourceMappingURL=chunk-K2MBWG3Y.js.map
