import { Vote, VoteSDKType, LightBlock, LightBlockSDKType } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
export interface Evidence {
  duplicateVoteEvidence?: DuplicateVoteEvidence;
  lightClientAttackEvidence?: LightClientAttackEvidence;
}
export interface EvidenceSDKType {
  duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
  light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  voteA?: Vote;
  voteB?: Vote;
  totalVotingPower: bigint;
  validatorPower: bigint;
  timestamp?: Date;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
  vote_a?: VoteSDKType;
  vote_b?: VoteSDKType;
  total_voting_power: bigint;
  validator_power: bigint;
  timestamp?: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflictingBlock?: LightBlock;
  commonHeight: bigint;
  byzantineValidators: Validator[];
  totalVotingPower: bigint;
  timestamp?: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
  conflicting_block?: LightBlockSDKType;
  common_height: bigint;
  byzantine_validators: ValidatorSDKType[];
  total_voting_power: bigint;
  timestamp?: Date;
}
export interface EvidenceList {
  evidence: Evidence[];
}
export interface EvidenceListSDKType {
  evidence: EvidenceSDKType[];
}
function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined
  };
}
export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): Evidence {
    return {
      duplicateVoteEvidence: isSet(object.duplicateVoteEvidence) ? DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence) : undefined,
      lightClientAttackEvidence: isSet(object.lightClientAttackEvidence) ? LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence) : undefined
    };
  },
  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicateVoteEvidence !== undefined && (obj.duplicateVoteEvidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence) : undefined);
    message.lightClientAttackEvidence !== undefined && (obj.lightClientAttackEvidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
    return message;
  }
};
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    totalVotingPower: BigInt("0"),
    validatorPower: BigInt("0"),
    timestamp: undefined
  };
}
export const DuplicateVoteEvidence = {
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.totalVotingPower.toString()));
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(Long.fromString(message.validatorPower.toString()));
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : undefined,
      voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : undefined,
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0"),
      validatorPower: isSet(object.validatorPower) ? BigInt(object.validatorPower.toString()) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.voteA !== undefined && (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined && (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || BigInt("0")).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt("0");
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
};
function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflictingBlock: undefined,
    commonHeight: BigInt("0"),
    byzantineValidators: [],
    totalVotingPower: BigInt("0"),
    timestamp: undefined
  };
}
export const LightClientAttackEvidence = {
  encode(message: LightClientAttackEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflictingBlock !== undefined) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.commonHeight.toString()));
    }
    for (const v of message.byzantineValidators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(Long.fromString(message.totalVotingPower.toString()));
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflictingBlock: isSet(object.conflictingBlock) ? LightBlock.fromJSON(object.conflictingBlock) : undefined,
      commonHeight: isSet(object.commonHeight) ? BigInt(object.commonHeight.toString()) : BigInt("0"),
      byzantineValidators: Array.isArray(object?.byzantineValidators) ? object.byzantineValidators.map((e: any) => Validator.fromJSON(e)) : [],
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0"),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflictingBlock !== undefined && (obj.conflictingBlock = message.conflictingBlock ? LightBlock.toJSON(message.conflictingBlock) : undefined);
    message.commonHeight !== undefined && (obj.commonHeight = (message.commonHeight || BigInt("0")).toString());
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.byzantineValidators = [];
    }
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: Partial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? LightBlock.fromPartial(object.conflictingBlock) : undefined;
    message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? BigInt(object.commonHeight.toString()) : BigInt("0");
    message.byzantineValidators = object.byzantineValidators?.map(e => Validator.fromPartial(e)) || [];
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }
};
function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: []
  };
}
export const EvidenceList = {
  encode(message: EvidenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromJSON(object: any): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },
  toJSON(message: EvidenceList): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  }
};