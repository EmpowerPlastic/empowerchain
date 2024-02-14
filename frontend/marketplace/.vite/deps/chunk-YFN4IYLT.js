import {
  Counterparty,
  Version
} from "./chunk-IBRIQSA5.js";
import {
  Height
} from "./chunk-2L6AETVN.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  base64FromBytes,
  bytesFromBase64,
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgConnectionOpenAck: () => MsgConnectionOpenAck,
  MsgConnectionOpenAckResponse: () => MsgConnectionOpenAckResponse,
  MsgConnectionOpenConfirm: () => MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirmResponse: () => MsgConnectionOpenConfirmResponse,
  MsgConnectionOpenInit: () => MsgConnectionOpenInit,
  MsgConnectionOpenInitResponse: () => MsgConnectionOpenInitResponse,
  MsgConnectionOpenTry: () => MsgConnectionOpenTry,
  MsgConnectionOpenTryResponse: () => MsgConnectionOpenTryResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgConnectionOpenInit() {
  return {
    clientId: "",
    counterparty: void 0,
    version: void 0,
    delayPeriod: BigInt("0"),
    signer: ""
  };
}
var MsgConnectionOpenInit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== void 0) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.delayPeriod.toString()));
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.signer = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      version: isSet(object.version) ? Version.fromJSON(object.version) : void 0,
      delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt("0"),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    message.version !== void 0 && (obj.version = message.version ? Version.toJSON(message.version) : void 0);
    message.delayPeriod !== void 0 && (obj.delayPeriod = (message.delayPeriod || BigInt("0")).toString());
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId, _object$signer;
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.version = object.version !== void 0 && object.version !== null ? Version.fromPartial(object.version) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
function createBaseMsgConnectionOpenInitResponse() {
  return {};
}
var MsgConnectionOpenInitResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();
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
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenTry() {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: void 0,
    counterparty: void 0,
    delayPeriod: BigInt("0"),
    counterpartyVersions: [],
    proofHeight: void 0,
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: void 0,
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
var MsgConnectionOpenTry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.delayPeriod.toString()));
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== void 0) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(106).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 12:
          message.signer = reader.string();
          break;
        case 13:
          message.hostConsensusStateProof = reader.bytes();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      previousConnectionId: isSet(object.previousConnectionId) ? String(object.previousConnectionId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt("0"),
      counterpartyVersions: Array.isArray(object === null || object === void 0 ? void 0 : object.counterpartyVersions) ? object.counterpartyVersions.map((e) => Version.fromJSON(e)) : [],
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
      hostConsensusStateProof: isSet(object.hostConsensusStateProof) ? bytesFromBase64(object.hostConsensusStateProof) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.previousConnectionId !== void 0 && (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    message.delayPeriod !== void 0 && (obj.delayPeriod = (message.delayPeriod || BigInt("0")).toString());
    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map((e) => e ? Version.toJSON(e) : void 0);
    } else {
      obj.counterpartyVersions = [];
    }
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.proofInit !== void 0 && (obj.proofInit = base64FromBytes(message.proofInit !== void 0 ? message.proofInit : new Uint8Array()));
    message.proofClient !== void 0 && (obj.proofClient = base64FromBytes(message.proofClient !== void 0 ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== void 0 && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== void 0 ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== void 0 && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    message.hostConsensusStateProof !== void 0 && (obj.hostConsensusStateProof = base64FromBytes(message.hostConsensusStateProof !== void 0 ? message.hostConsensusStateProof : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$clientId2, _object$previousConne, _object$counterpartyV, _object$proofInit, _object$proofClient, _object$proofConsensu, _object$signer2, _object$hostConsensus;
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.previousConnectionId = (_object$previousConne = object.previousConnectionId) !== null && _object$previousConne !== void 0 ? _object$previousConne : "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    message.counterpartyVersions = ((_object$counterpartyV = object.counterpartyVersions) === null || _object$counterpartyV === void 0 ? void 0 : _object$counterpartyV.map((e) => Version.fromPartial(e))) || [];
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.proofInit = (_object$proofInit = object.proofInit) !== null && _object$proofInit !== void 0 ? _object$proofInit : new Uint8Array();
    message.proofClient = (_object$proofClient = object.proofClient) !== null && _object$proofClient !== void 0 ? _object$proofClient : new Uint8Array();
    message.proofConsensus = (_object$proofConsensu = object.proofConsensus) !== null && _object$proofConsensu !== void 0 ? _object$proofConsensu : new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : void 0;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    message.hostConsensusStateProof = (_object$hostConsensus = object.hostConsensusStateProof) !== null && _object$hostConsensus !== void 0 ? _object$hostConsensus : new Uint8Array();
    return message;
  }
};
function createBaseMsgConnectionOpenTryResponse() {
  return {};
}
var MsgConnectionOpenTryResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();
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
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenAck() {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: void 0,
    clientState: void 0,
    proofHeight: void 0,
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: void 0,
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
var MsgConnectionOpenAck = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== void 0) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== void 0) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(90).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.signer = reader.string();
          break;
        case 11:
          message.hostConsensusStateProof = reader.bytes();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      counterpartyConnectionId: isSet(object.counterpartyConnectionId) ? String(object.counterpartyConnectionId) : "",
      version: isSet(object.version) ? Version.fromJSON(object.version) : void 0,
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0,
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
      hostConsensusStateProof: isSet(object.hostConsensusStateProof) ? bytesFromBase64(object.hostConsensusStateProof) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== void 0 && (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== void 0 && (obj.version = message.version ? Version.toJSON(message.version) : void 0);
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.proofTry !== void 0 && (obj.proofTry = base64FromBytes(message.proofTry !== void 0 ? message.proofTry : new Uint8Array()));
    message.proofClient !== void 0 && (obj.proofClient = base64FromBytes(message.proofClient !== void 0 ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== void 0 && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== void 0 ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== void 0 && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    message.hostConsensusStateProof !== void 0 && (obj.hostConsensusStateProof = base64FromBytes(message.hostConsensusStateProof !== void 0 ? message.hostConsensusStateProof : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$connectionId, _object$counterpartyC, _object$proofTry, _object$proofClient2, _object$proofConsensu2, _object$signer3, _object$hostConsensus2;
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.counterpartyConnectionId = (_object$counterpartyC = object.counterpartyConnectionId) !== null && _object$counterpartyC !== void 0 ? _object$counterpartyC : "";
    message.version = object.version !== void 0 && object.version !== null ? Version.fromPartial(object.version) : void 0;
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.proofTry = (_object$proofTry = object.proofTry) !== null && _object$proofTry !== void 0 ? _object$proofTry : new Uint8Array();
    message.proofClient = (_object$proofClient2 = object.proofClient) !== null && _object$proofClient2 !== void 0 ? _object$proofClient2 : new Uint8Array();
    message.proofConsensus = (_object$proofConsensu2 = object.proofConsensus) !== null && _object$proofConsensu2 !== void 0 ? _object$proofConsensu2 : new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : void 0;
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    message.hostConsensusStateProof = (_object$hostConsensus2 = object.hostConsensusStateProof) !== null && _object$hostConsensus2 !== void 0 ? _object$hostConsensus2 : new Uint8Array();
    return message;
  }
};
function createBaseMsgConnectionOpenAckResponse() {
  return {};
}
var MsgConnectionOpenAckResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();
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
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenConfirm() {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgConnectionOpenConfirm = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.proofAck !== void 0 && (obj.proofAck = base64FromBytes(message.proofAck !== void 0 ? message.proofAck : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$connectionId2, _object$proofAck, _object$signer4;
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    message.proofAck = (_object$proofAck = object.proofAck) !== null && _object$proofAck !== void 0 ? _object$proofAck : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
function createBaseMsgConnectionOpenConfirmResponse() {
  return {};
}
var MsgConnectionOpenConfirmResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();
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
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.connectionOpenInit = this.connectionOpenInit.bind(this);
    this.connectionOpenTry = this.connectionOpenTry.bind(this);
    this.connectionOpenAck = this.connectionOpenAck.bind(this);
    this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
  }
  connectionOpenInit(request) {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
    return promise.then((data2) => MsgConnectionOpenInitResponse.decode(new _m02.Reader(data2)));
  }
  connectionOpenTry(request) {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
    return promise.then((data2) => MsgConnectionOpenTryResponse.decode(new _m02.Reader(data2)));
  }
  connectionOpenAck(request) {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
    return promise.then((data2) => MsgConnectionOpenAckResponse.decode(new _m02.Reader(data2)));
  }
  connectionOpenConfirm(request) {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
    return promise.then((data2) => MsgConnectionOpenConfirmResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-YFN4IYLT.js.map
