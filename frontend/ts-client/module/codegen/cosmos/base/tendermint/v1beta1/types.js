import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp } from "../../../../helpers";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */

function createBaseBlock() {
  return {
    header: undefined,
    data: undefined,
    evidence: undefined,
    lastCommit: undefined
  };
}
export const Block = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
    return message;
  }
};
function createBaseHeader() {
  return {
    version: undefined,
    chainId: "",
    height: Long.ZERO,
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: ""
  };
}
export const Header = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress !== "") {
      writer.uint32(114).string(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$chainId, _object$time, _object$lastCommitHas, _object$dataHash, _object$validatorsHas, _object$nextValidator, _object$consensusHash, _object$appHash, _object$lastResultsHa, _object$evidenceHash, _object$proposerAddre;
    const message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastCommitHash = (_object$lastCommitHas = object.lastCommitHash) !== null && _object$lastCommitHas !== void 0 ? _object$lastCommitHas : new Uint8Array();
    message.dataHash = (_object$dataHash = object.dataHash) !== null && _object$dataHash !== void 0 ? _object$dataHash : new Uint8Array();
    message.validatorsHash = (_object$validatorsHas = object.validatorsHash) !== null && _object$validatorsHas !== void 0 ? _object$validatorsHas : new Uint8Array();
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    message.consensusHash = (_object$consensusHash = object.consensusHash) !== null && _object$consensusHash !== void 0 ? _object$consensusHash : new Uint8Array();
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    message.lastResultsHash = (_object$lastResultsHa = object.lastResultsHash) !== null && _object$lastResultsHa !== void 0 ? _object$lastResultsHa : new Uint8Array();
    message.evidenceHash = (_object$evidenceHash = object.evidenceHash) !== null && _object$evidenceHash !== void 0 ? _object$evidenceHash : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre = object.proposerAddress) !== null && _object$proposerAddre !== void 0 ? _object$proposerAddre : "";
    return message;
  }
};