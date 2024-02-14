import {
  Block,
  EvidenceList
} from "./chunk-K2MBWG3Y.js";
import {
  BlockID,
  Commit,
  Consensus,
  Data
} from "./chunk-OOMJJQEG.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
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
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/tendermint/v1beta1/query.rpc.Service.js
var query_rpc_Service_exports = {};
__export(query_rpc_Service_exports, {
  ServiceClientImpl: () => ServiceClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m04 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/tendermint/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  ABCIQueryRequest: () => ABCIQueryRequest,
  ABCIQueryResponse: () => ABCIQueryResponse,
  GetBlockByHeightRequest: () => GetBlockByHeightRequest,
  GetBlockByHeightResponse: () => GetBlockByHeightResponse,
  GetLatestBlockRequest: () => GetLatestBlockRequest,
  GetLatestBlockResponse: () => GetLatestBlockResponse,
  GetLatestValidatorSetRequest: () => GetLatestValidatorSetRequest,
  GetLatestValidatorSetResponse: () => GetLatestValidatorSetResponse,
  GetNodeInfoRequest: () => GetNodeInfoRequest,
  GetNodeInfoResponse: () => GetNodeInfoResponse,
  GetSyncingRequest: () => GetSyncingRequest,
  GetSyncingResponse: () => GetSyncingResponse,
  GetValidatorSetByHeightRequest: () => GetValidatorSetByHeightRequest,
  GetValidatorSetByHeightResponse: () => GetValidatorSetByHeightResponse,
  Module: () => Module,
  ProofOp: () => ProofOp,
  ProofOps: () => ProofOps,
  Validator: () => Validator,
  VersionInfo: () => VersionInfo
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/tendermint/v1beta1/types.js
var types_exports = {};
__export(types_exports, {
  Block: () => Block2,
  Header: () => Header
});
var _m0 = __toESM(require_minimal());
function createBaseBlock() {
  return {
    header: void 0,
    data: void 0,
    evidence: void 0,
    lastCommit: void 0
  };
}
var Block2 = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseHeader() {
  return {
    version: void 0,
    chainId: "",
    height: BigInt("0"),
    time: void 0,
    lastBlockId: void 0,
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
var Header = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== void 0) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== void 0) {
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
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.height = BigInt(reader.int64().toString());
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
  fromJSON(object) {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : void 0,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : void 0,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? String(object.proposerAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.version !== void 0 && (obj.version = message.version ? Consensus.toJSON(message.version) : void 0);
    message.chainId !== void 0 && (obj.chainId = message.chainId);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.lastBlockId !== void 0 && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : void 0);
    message.lastCommitHash !== void 0 && (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== void 0 ? message.lastCommitHash : new Uint8Array()));
    message.dataHash !== void 0 && (obj.dataHash = base64FromBytes(message.dataHash !== void 0 ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== void 0 && (obj.validatorsHash = base64FromBytes(message.validatorsHash !== void 0 ? message.validatorsHash : new Uint8Array()));
    message.nextValidatorsHash !== void 0 && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== void 0 ? message.nextValidatorsHash : new Uint8Array()));
    message.consensusHash !== void 0 && (obj.consensusHash = base64FromBytes(message.consensusHash !== void 0 ? message.consensusHash : new Uint8Array()));
    message.appHash !== void 0 && (obj.appHash = base64FromBytes(message.appHash !== void 0 ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== void 0 && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== void 0 ? message.lastResultsHash : new Uint8Array()));
    message.evidenceHash !== void 0 && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== void 0 ? message.evidenceHash : new Uint8Array()));
    message.proposerAddress !== void 0 && (obj.proposerAddress = message.proposerAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$chainId, _object$time, _object$lastCommitHas, _object$dataHash, _object$validatorsHas, _object$nextValidator, _object$consensusHash, _object$appHash, _object$lastResultsHa, _object$evidenceHash, _object$proposerAddre;
    const message = createBaseHeader();
    message.version = object.version !== void 0 && object.version !== null ? Consensus.fromPartial(object.version) : void 0;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : void 0;
    message.lastBlockId = object.lastBlockId !== void 0 && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : void 0;
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

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/p2p/types.js
var types_exports2 = {};
__export(types_exports2, {
  DefaultNodeInfo: () => DefaultNodeInfo,
  DefaultNodeInfoOther: () => DefaultNodeInfoOther,
  NetAddress: () => NetAddress,
  ProtocolVersion: () => ProtocolVersion
});
var _m02 = __toESM(require_minimal());
function createBaseNetAddress() {
  return {
    id: "",
    ip: "",
    port: 0
  };
}
var NetAddress = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
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
      id: isSet(object.id) ? String(object.id) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = message.id);
    message.ip !== void 0 && (obj.ip = message.ip);
    message.port !== void 0 && (obj.port = Math.round(message.port));
    return obj;
  },
  fromPartial(object) {
    var _object$id, _object$ip, _object$port;
    const message = createBaseNetAddress();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.ip = (_object$ip = object.ip) !== null && _object$ip !== void 0 ? _object$ip : "";
    message.port = (_object$port = object.port) !== null && _object$port !== void 0 ? _object$port : 0;
    return message;
  }
};
function createBaseProtocolVersion() {
  return {
    p2p: BigInt("0"),
    block: BigInt("0"),
    app: BigInt("0")
  };
}
var ProtocolVersion = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.p2p.toString()));
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.block.toString()));
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.app.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.block = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.app = BigInt(reader.uint64().toString());
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
      p2p: isSet(object.p2p) ? BigInt(object.p2p.toString()) : BigInt("0"),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt("0"),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.p2p !== void 0 && (obj.p2p = (message.p2p || BigInt("0")).toString());
    message.block !== void 0 && (obj.block = (message.block || BigInt("0")).toString());
    message.app !== void 0 && (obj.app = (message.app || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== void 0 && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt("0");
    message.block = object.block !== void 0 && object.block !== null ? BigInt(object.block.toString()) : BigInt("0");
    message.app = object.app !== void 0 && object.app !== null ? BigInt(object.app.toString()) : BigInt("0");
    return message;
  }
};
function createBaseDefaultNodeInfo() {
  return {
    protocolVersion: void 0,
    defaultNodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: void 0
  };
}
var DefaultNodeInfo = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.protocolVersion !== void 0) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultNodeId !== "") {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== void 0) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
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
      protocolVersion: isSet(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : void 0,
      defaultNodeId: isSet(object.defaultNodeId) ? String(object.defaultNodeId) : "",
      listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.protocolVersion !== void 0 && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : void 0);
    message.defaultNodeId !== void 0 && (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== void 0 && (obj.listenAddr = message.listenAddr);
    message.network !== void 0 && (obj.network = message.network);
    message.version !== void 0 && (obj.version = message.version);
    message.channels !== void 0 && (obj.channels = base64FromBytes(message.channels !== void 0 ? message.channels : new Uint8Array()));
    message.moniker !== void 0 && (obj.moniker = message.moniker);
    message.other !== void 0 && (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$defaultNodeId, _object$listenAddr, _object$network, _object$version, _object$channels, _object$moniker;
    const message = createBaseDefaultNodeInfo();
    message.protocolVersion = object.protocolVersion !== void 0 && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : void 0;
    message.defaultNodeId = (_object$defaultNodeId = object.defaultNodeId) !== null && _object$defaultNodeId !== void 0 ? _object$defaultNodeId : "";
    message.listenAddr = (_object$listenAddr = object.listenAddr) !== null && _object$listenAddr !== void 0 ? _object$listenAddr : "";
    message.network = (_object$network = object.network) !== null && _object$network !== void 0 ? _object$network : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.channels = (_object$channels = object.channels) !== null && _object$channels !== void 0 ? _object$channels : new Uint8Array();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.other = object.other !== void 0 && object.other !== null ? DefaultNodeInfoOther.fromPartial(object.other) : void 0;
    return message;
  }
};
function createBaseDefaultNodeInfoOther() {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
var DefaultNodeInfoOther = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
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
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : "",
      rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.txIndex !== void 0 && (obj.txIndex = message.txIndex);
    message.rpcAddress !== void 0 && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$txIndex, _object$rpcAddress;
    const message = createBaseDefaultNodeInfoOther();
    message.txIndex = (_object$txIndex = object.txIndex) !== null && _object$txIndex !== void 0 ? _object$txIndex : "";
    message.rpcAddress = (_object$rpcAddress = object.rpcAddress) !== null && _object$rpcAddress !== void 0 ? _object$rpcAddress : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/tendermint/v1beta1/query.js
var _m03 = __toESM(require_minimal());
function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: BigInt("0"),
    pagination: void 0
  };
}
var GetValidatorSetByHeightRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseGetValidatorSetByHeightResponse() {
  return {
    blockHeight: BigInt("0"),
    validators: [],
    pagination: void 0
  };
}
var GetValidatorSetByHeightResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.blockHeight.toString()));
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = BigInt(reader.int64().toString());
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt("0"),
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockHeight !== void 0 && (obj.blockHeight = (message.blockHeight || BigInt("0")).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt("0");
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map((e) => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: void 0
  };
}
var GetLatestValidatorSetRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseGetLatestValidatorSetResponse() {
  return {
    blockHeight: BigInt("0"),
    validators: [],
    pagination: void 0
  };
}
var GetLatestValidatorSetResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.blockHeight.toString()));
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = BigInt(reader.int64().toString());
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt("0"),
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockHeight !== void 0 && (obj.blockHeight = (message.blockHeight || BigInt("0")).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validators2;
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt("0");
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map((e) => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseValidator() {
  return {
    address: "",
    pubKey: void 0,
    votingPower: BigInt("0"),
    proposerPriority: BigInt("0")
  };
}
var Validator = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== void 0) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.votingPower.toString()));
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.proposerPriority.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = BigInt(reader.int64().toString());
          break;
        case 4:
          message.proposerPriority = BigInt(reader.int64().toString());
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
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : void 0,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt("0"),
      proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pubKey !== void 0 && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : void 0);
    message.votingPower !== void 0 && (obj.votingPower = (message.votingPower || BigInt("0")).toString());
    message.proposerPriority !== void 0 && (obj.proposerPriority = (message.proposerPriority || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? Any.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt("0");
    message.proposerPriority = object.proposerPriority !== void 0 && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt("0");
    return message;
  }
};
function createBaseGetBlockByHeightRequest() {
  return {
    height: BigInt("0")
  };
}
var GetBlockByHeightRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
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
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    return message;
  }
};
function createBaseGetBlockByHeightResponse() {
  return {
    blockId: void 0,
    block: void 0,
    sdkBlock: void 0
  };
}
var GetBlockByHeightResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== void 0) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
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
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      block: isSet(object.block) ? Block.fromJSON(object.block) : void 0,
      sdkBlock: isSet(object.sdkBlock) ? Block2.fromJSON(object.sdkBlock) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.block !== void 0 && (obj.block = message.block ? Block.toJSON(message.block) : void 0);
    message.sdkBlock !== void 0 && (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block.fromPartial(object.block) : void 0;
    message.sdkBlock = object.sdkBlock !== void 0 && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : void 0;
    return message;
  }
};
function createBaseGetLatestBlockRequest() {
  return {};
}
var GetLatestBlockRequest = {
  encode(_, writer = _m03.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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
    const message = createBaseGetLatestBlockRequest();
    return message;
  }
};
function createBaseGetLatestBlockResponse() {
  return {
    blockId: void 0,
    block: void 0,
    sdkBlock: void 0
  };
}
var GetLatestBlockResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== void 0) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
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
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      block: isSet(object.block) ? Block.fromJSON(object.block) : void 0,
      sdkBlock: isSet(object.sdkBlock) ? Block2.fromJSON(object.sdkBlock) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.block !== void 0 && (obj.block = message.block ? Block.toJSON(message.block) : void 0);
    message.sdkBlock !== void 0 && (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block.fromPartial(object.block) : void 0;
    message.sdkBlock = object.sdkBlock !== void 0 && object.sdkBlock !== null ? Block2.fromPartial(object.sdkBlock) : void 0;
    return message;
  }
};
function createBaseGetSyncingRequest() {
  return {};
}
var GetSyncingRequest = {
  encode(_, writer = _m03.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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
    const message = createBaseGetSyncingRequest();
    return message;
  }
};
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
var GetSyncingResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
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
      syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.syncing !== void 0 && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial(object) {
    var _object$syncing;
    const message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  }
};
function createBaseGetNodeInfoRequest() {
  return {};
}
var GetNodeInfoRequest = {
  encode(_, writer = _m03.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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
    const message = createBaseGetNodeInfoRequest();
    return message;
  }
};
function createBaseGetNodeInfoResponse() {
  return {
    defaultNodeInfo: void 0,
    applicationVersion: void 0
  };
}
var GetNodeInfoResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.defaultNodeInfo !== void 0) {
      DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== void 0) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
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
      defaultNodeInfo: isSet(object.defaultNodeInfo) ? DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : void 0,
      applicationVersion: isSet(object.applicationVersion) ? VersionInfo.fromJSON(object.applicationVersion) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.defaultNodeInfo !== void 0 && (obj.defaultNodeInfo = message.defaultNodeInfo ? DefaultNodeInfo.toJSON(message.defaultNodeInfo) : void 0);
    message.applicationVersion !== void 0 && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = object.defaultNodeInfo !== void 0 && object.defaultNodeInfo !== null ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : void 0;
    message.applicationVersion = object.applicationVersion !== void 0 && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : void 0;
    return message;
  }
};
function createBaseVersionInfo() {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
var VersionInfo = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      version: isSet(object.version) ? String(object.version) : "",
      gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
      buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
      goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
      buildDeps: Array.isArray(object === null || object === void 0 ? void 0 : object.buildDeps) ? object.buildDeps.map((e) => Module.fromJSON(e)) : [],
      cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.appName !== void 0 && (obj.appName = message.appName);
    message.version !== void 0 && (obj.version = message.version);
    message.gitCommit !== void 0 && (obj.gitCommit = message.gitCommit);
    message.buildTags !== void 0 && (obj.buildTags = message.buildTags);
    message.goVersion !== void 0 && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map((e) => e ? Module.toJSON(e) : void 0);
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== void 0 && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$appName, _object$version, _object$gitCommit, _object$buildTags, _object$goVersion, _object$buildDeps, _object$cosmosSdkVers;
    const message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.appName = (_object$appName = object.appName) !== null && _object$appName !== void 0 ? _object$appName : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.gitCommit = (_object$gitCommit = object.gitCommit) !== null && _object$gitCommit !== void 0 ? _object$gitCommit : "";
    message.buildTags = (_object$buildTags = object.buildTags) !== null && _object$buildTags !== void 0 ? _object$buildTags : "";
    message.goVersion = (_object$goVersion = object.goVersion) !== null && _object$goVersion !== void 0 ? _object$goVersion : "";
    message.buildDeps = ((_object$buildDeps = object.buildDeps) === null || _object$buildDeps === void 0 ? void 0 : _object$buildDeps.map((e) => Module.fromPartial(e))) || [];
    message.cosmosSdkVersion = (_object$cosmosSdkVers = object.cosmosSdkVersion) !== null && _object$cosmosSdkVers !== void 0 ? _object$cosmosSdkVers : "";
    return message;
  }
};
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
var Module = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
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
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.path !== void 0 && (obj.path = message.path);
    message.version !== void 0 && (obj.version = message.version);
    message.sum !== void 0 && (obj.sum = message.sum);
    return obj;
  },
  fromPartial(object) {
    var _object$path, _object$version2, _object$sum;
    const message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  }
};
function createBaseABCIQueryRequest() {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt("0"),
    prove: false
  };
}
var ABCIQueryRequest = {
  encode(message, writer = _m03.Writer.create()) {
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
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
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
    var _object$data, _object$path2, _object$prove;
    const message = createBaseABCIQueryRequest();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path2 = object.path) !== null && _object$path2 !== void 0 ? _object$path2 : "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
function createBaseABCIQueryResponse() {
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
var ABCIQueryResponse = {
  encode(message, writer = _m03.Writer.create()) {
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
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
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
    const message = createBaseABCIQueryResponse();
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
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
var ProofOp = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = message.type);
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$key2, _object$data2;
    const message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBaseProofOps() {
  return {
    ops: []
  };
}
var ProofOps = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.ops) {
      ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
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
      ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map((e) => ProofOp.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => e ? ProofOp.toJSON(e) : void 0);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$ops;
    const message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map((e) => ProofOp.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/tendermint/v1beta1/query.rpc.Service.js
var ServiceClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  getNodeInfo(request = {}) {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then((data2) => GetNodeInfoResponse.decode(new _m04.Reader(data2)));
  }
  getSyncing(request = {}) {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then((data2) => GetSyncingResponse.decode(new _m04.Reader(data2)));
  }
  getLatestBlock(request = {}) {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then((data2) => GetLatestBlockResponse.decode(new _m04.Reader(data2)));
  }
  getBlockByHeight(request) {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then((data2) => GetBlockByHeightResponse.decode(new _m04.Reader(data2)));
  }
  getLatestValidatorSet(request = {
    pagination: void 0
  }) {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then((data2) => GetLatestValidatorSetResponse.decode(new _m04.Reader(data2)));
  }
  getValidatorSetByHeight(request) {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then((data2) => GetValidatorSetByHeightResponse.decode(new _m04.Reader(data2)));
  }
  aBCIQuery(request) {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then((data2) => ABCIQueryResponse.decode(new _m04.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo(request) {
      return queryService.getNodeInfo(request);
    },
    getSyncing(request) {
      return queryService.getSyncing(request);
    },
    getLatestBlock(request) {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight(request) {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet(request) {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight(request) {
      return queryService.getValidatorSetByHeight(request);
    },
    aBCIQuery(request) {
      return queryService.aBCIQuery(request);
    }
  };
};

export {
  types_exports,
  types_exports2,
  query_exports,
  ServiceClientImpl,
  createRpcQueryExtension,
  query_rpc_Service_exports
};
//# sourceMappingURL=chunk-GZLWUJVJ.js.map
