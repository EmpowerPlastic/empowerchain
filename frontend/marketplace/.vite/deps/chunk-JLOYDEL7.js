import {
  Channel,
  Packet
} from "./chunk-3SYTEMXM.js";
import {
  Height
} from "./chunk-2L6AETVN.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgAcknowledgement: () => MsgAcknowledgement,
  MsgAcknowledgementResponse: () => MsgAcknowledgementResponse,
  MsgChannelCloseConfirm: () => MsgChannelCloseConfirm,
  MsgChannelCloseConfirmResponse: () => MsgChannelCloseConfirmResponse,
  MsgChannelCloseInit: () => MsgChannelCloseInit,
  MsgChannelCloseInitResponse: () => MsgChannelCloseInitResponse,
  MsgChannelOpenAck: () => MsgChannelOpenAck,
  MsgChannelOpenAckResponse: () => MsgChannelOpenAckResponse,
  MsgChannelOpenConfirm: () => MsgChannelOpenConfirm,
  MsgChannelOpenConfirmResponse: () => MsgChannelOpenConfirmResponse,
  MsgChannelOpenInit: () => MsgChannelOpenInit,
  MsgChannelOpenInitResponse: () => MsgChannelOpenInitResponse,
  MsgChannelOpenTry: () => MsgChannelOpenTry,
  MsgChannelOpenTryResponse: () => MsgChannelOpenTryResponse,
  MsgRecvPacket: () => MsgRecvPacket,
  MsgRecvPacketResponse: () => MsgRecvPacketResponse,
  MsgTimeout: () => MsgTimeout,
  MsgTimeoutOnClose: () => MsgTimeoutOnClose,
  MsgTimeoutOnCloseResponse: () => MsgTimeoutOnCloseResponse,
  MsgTimeoutResponse: () => MsgTimeoutResponse,
  ResponseResultType: () => ResponseResultType,
  ResponseResultTypeSDKType: () => ResponseResultTypeSDKType,
  responseResultTypeFromJSON: () => responseResultTypeFromJSON,
  responseResultTypeToJSON: () => responseResultTypeToJSON
});
var _m0 = __toESM(require_minimal());
var ResponseResultType = function(ResponseResultType2) {
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
  ResponseResultType2[ResponseResultType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseResultType2;
}({});
var ResponseResultTypeSDKType = ResponseResultType;
function responseResultTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}
function responseResultTypeToJSON(object) {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgChannelOpenInit() {
  return {
    portId: "",
    channel: void 0,
    signer: ""
  };
}
var MsgChannelOpenInit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== void 0) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channel !== void 0 && (obj.channel = message.channel ? Channel.toJSON(message.channel) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId, _object$signer;
    const message = createBaseMsgChannelOpenInit();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channel = object.channel !== void 0 && object.channel !== null ? Channel.fromPartial(object.channel) : void 0;
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
function createBaseMsgChannelOpenInitResponse() {
  return {
    channelId: "",
    version: ""
  };
}
var MsgChannelOpenInitResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.version = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.version !== void 0 && (obj.version = message.version);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId, _object$version;
    const message = createBaseMsgChannelOpenInitResponse();
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    return message;
  }
};
function createBaseMsgChannelOpenTry() {
  return {
    portId: "",
    previousChannelId: "",
    channel: void 0,
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgChannelOpenTry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== void 0) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : void 0,
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.previousChannelId !== void 0 && (obj.previousChannelId = message.previousChannelId);
    message.channel !== void 0 && (obj.channel = message.channel ? Channel.toJSON(message.channel) : void 0);
    message.counterpartyVersion !== void 0 && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== void 0 && (obj.proofInit = base64FromBytes(message.proofInit !== void 0 ? message.proofInit : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId2, _object$previousChann, _object$counterpartyV, _object$proofInit, _object$signer2;
    const message = createBaseMsgChannelOpenTry();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.previousChannelId = (_object$previousChann = object.previousChannelId) !== null && _object$previousChann !== void 0 ? _object$previousChann : "";
    message.channel = object.channel !== void 0 && object.channel !== null ? Channel.fromPartial(object.channel) : void 0;
    message.counterpartyVersion = (_object$counterpartyV = object.counterpartyVersion) !== null && _object$counterpartyV !== void 0 ? _object$counterpartyV : "";
    message.proofInit = (_object$proofInit = object.proofInit) !== null && _object$proofInit !== void 0 ? _object$proofInit : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    return message;
  }
};
function createBaseMsgChannelOpenTryResponse() {
  return {
    version: ""
  };
}
var MsgChannelOpenTryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
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
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.version !== void 0 && (obj.version = message.version);
    return obj;
  },
  fromPartial(object) {
    var _object$version2;
    const message = createBaseMsgChannelOpenTryResponse();
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    return message;
  }
};
function createBaseMsgChannelOpenAck() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgChannelOpenAck = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== void 0 && (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== void 0 && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== void 0 && (obj.proofTry = base64FromBytes(message.proofTry !== void 0 ? message.proofTry : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId3, _object$channelId2, _object$counterpartyC, _object$counterpartyV2, _object$proofTry, _object$signer3;
    const message = createBaseMsgChannelOpenAck();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    message.counterpartyChannelId = (_object$counterpartyC = object.counterpartyChannelId) !== null && _object$counterpartyC !== void 0 ? _object$counterpartyC : "";
    message.counterpartyVersion = (_object$counterpartyV2 = object.counterpartyVersion) !== null && _object$counterpartyV2 !== void 0 ? _object$counterpartyV2 : "";
    message.proofTry = (_object$proofTry = object.proofTry) !== null && _object$proofTry !== void 0 ? _object$proofTry : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    return message;
  }
};
function createBaseMsgChannelOpenAckResponse() {
  return {};
}
var MsgChannelOpenAckResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
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
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  }
};
function createBaseMsgChannelOpenConfirm() {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgChannelOpenConfirm = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.proofAck !== void 0 && (obj.proofAck = base64FromBytes(message.proofAck !== void 0 ? message.proofAck : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId4, _object$channelId3, _object$proofAck, _object$signer4;
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = (_object$portId4 = object.portId) !== null && _object$portId4 !== void 0 ? _object$portId4 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.proofAck = (_object$proofAck = object.proofAck) !== null && _object$proofAck !== void 0 ? _object$proofAck : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
function createBaseMsgChannelOpenConfirmResponse() {
  return {};
}
var MsgChannelOpenConfirmResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
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
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  }
};
function createBaseMsgChannelCloseInit() {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
var MsgChannelCloseInit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId5, _object$channelId4, _object$signer5;
    const message = createBaseMsgChannelCloseInit();
    message.portId = (_object$portId5 = object.portId) !== null && _object$portId5 !== void 0 ? _object$portId5 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    message.signer = (_object$signer5 = object.signer) !== null && _object$signer5 !== void 0 ? _object$signer5 : "";
    return message;
  }
};
function createBaseMsgChannelCloseInitResponse() {
  return {};
}
var MsgChannelCloseInitResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
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
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  }
};
function createBaseMsgChannelCloseConfirm() {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgChannelCloseConfirm = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.proofInit !== void 0 && (obj.proofInit = base64FromBytes(message.proofInit !== void 0 ? message.proofInit : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$portId6, _object$channelId5, _object$proofInit2, _object$signer6;
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = (_object$portId6 = object.portId) !== null && _object$portId6 !== void 0 ? _object$portId6 : "";
    message.channelId = (_object$channelId5 = object.channelId) !== null && _object$channelId5 !== void 0 ? _object$channelId5 : "";
    message.proofInit = (_object$proofInit2 = object.proofInit) !== null && _object$proofInit2 !== void 0 ? _object$proofInit2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer6 = object.signer) !== null && _object$signer6 !== void 0 ? _object$signer6 : "";
    return message;
  }
};
function createBaseMsgChannelCloseConfirmResponse() {
  return {};
}
var MsgChannelCloseConfirmResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
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
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  }
};
function createBaseMsgRecvPacket() {
  return {
    packet: void 0,
    proofCommitment: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgRecvPacket = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
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
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
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
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : void 0,
      proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.packet !== void 0 && (obj.packet = message.packet ? Packet.toJSON(message.packet) : void 0);
    message.proofCommitment !== void 0 && (obj.proofCommitment = base64FromBytes(message.proofCommitment !== void 0 ? message.proofCommitment : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$proofCommitme, _object$signer7;
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofCommitment = (_object$proofCommitme = object.proofCommitment) !== null && _object$proofCommitme !== void 0 ? _object$proofCommitme : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer7 = object.signer) !== null && _object$signer7 !== void 0 ? _object$signer7 : "";
    return message;
  }
};
function createBaseMsgRecvPacketResponse() {
  return {
    result: 0
  };
}
var MsgRecvPacketResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
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
      result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result;
    const message = createBaseMsgRecvPacketResponse();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
function createBaseMsgTimeout() {
  return {
    packet: void 0,
    proofUnreceived: new Uint8Array(),
    proofHeight: void 0,
    nextSequenceRecv: BigInt("0"),
    signer: ""
  };
}
var MsgTimeout = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.nextSequenceRecv.toString()));
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = BigInt(reader.uint64().toString());
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
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : void 0,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? BigInt(object.nextSequenceRecv.toString()) : BigInt("0"),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.packet !== void 0 && (obj.packet = message.packet ? Packet.toJSON(message.packet) : void 0);
    message.proofUnreceived !== void 0 && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== void 0 ? message.proofUnreceived : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.nextSequenceRecv !== void 0 && (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt("0")).toString());
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$proofUnreceiv, _object$signer8;
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = (_object$proofUnreceiv = object.proofUnreceived) !== null && _object$proofUnreceiv !== void 0 ? _object$proofUnreceiv : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt("0");
    message.signer = (_object$signer8 = object.signer) !== null && _object$signer8 !== void 0 ? _object$signer8 : "";
    return message;
  }
};
function createBaseMsgTimeoutResponse() {
  return {
    result: 0
  };
}
var MsgTimeoutResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
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
      result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result2;
    const message = createBaseMsgTimeoutResponse();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    return message;
  }
};
function createBaseMsgTimeoutOnClose() {
  return {
    packet: void 0,
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: void 0,
    nextSequenceRecv: BigInt("0"),
    signer: ""
  };
}
var MsgTimeoutOnClose = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.nextSequenceRecv.toString()));
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = BigInt(reader.uint64().toString());
          break;
        case 6:
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
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : void 0,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? BigInt(object.nextSequenceRecv.toString()) : BigInt("0"),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.packet !== void 0 && (obj.packet = message.packet ? Packet.toJSON(message.packet) : void 0);
    message.proofUnreceived !== void 0 && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== void 0 ? message.proofUnreceived : new Uint8Array()));
    message.proofClose !== void 0 && (obj.proofClose = base64FromBytes(message.proofClose !== void 0 ? message.proofClose : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.nextSequenceRecv !== void 0 && (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt("0")).toString());
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$proofUnreceiv2, _object$proofClose, _object$signer9;
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = (_object$proofUnreceiv2 = object.proofUnreceived) !== null && _object$proofUnreceiv2 !== void 0 ? _object$proofUnreceiv2 : new Uint8Array();
    message.proofClose = (_object$proofClose = object.proofClose) !== null && _object$proofClose !== void 0 ? _object$proofClose : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt("0");
    message.signer = (_object$signer9 = object.signer) !== null && _object$signer9 !== void 0 ? _object$signer9 : "";
    return message;
  }
};
function createBaseMsgTimeoutOnCloseResponse() {
  return {
    result: 0
  };
}
var MsgTimeoutOnCloseResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
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
      result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result3;
    const message = createBaseMsgTimeoutOnCloseResponse();
    message.result = (_object$result3 = object.result) !== null && _object$result3 !== void 0 ? _object$result3 : 0;
    return message;
  }
};
function createBaseMsgAcknowledgement() {
  return {
    packet: void 0,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: void 0,
    signer: ""
  };
}
var MsgAcknowledgement = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : void 0,
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.packet !== void 0 && (obj.packet = message.packet ? Packet.toJSON(message.packet) : void 0);
    message.acknowledgement !== void 0 && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== void 0 ? message.acknowledgement : new Uint8Array()));
    message.proofAcked !== void 0 && (obj.proofAcked = base64FromBytes(message.proofAcked !== void 0 ? message.proofAcked : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$acknowledgeme, _object$proofAcked, _object$signer10;
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    message.proofAcked = (_object$proofAcked = object.proofAcked) !== null && _object$proofAcked !== void 0 ? _object$proofAcked : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = (_object$signer10 = object.signer) !== null && _object$signer10 !== void 0 ? _object$signer10 : "";
    return message;
  }
};
function createBaseMsgAcknowledgementResponse() {
  return {
    result: 0
  };
}
var MsgAcknowledgementResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
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
      result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result4;
    const message = createBaseMsgAcknowledgementResponse();
    message.result = (_object$result4 = object.result) !== null && _object$result4 !== void 0 ? _object$result4 : 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.channelOpenInit = this.channelOpenInit.bind(this);
    this.channelOpenTry = this.channelOpenTry.bind(this);
    this.channelOpenAck = this.channelOpenAck.bind(this);
    this.channelOpenConfirm = this.channelOpenConfirm.bind(this);
    this.channelCloseInit = this.channelCloseInit.bind(this);
    this.channelCloseConfirm = this.channelCloseConfirm.bind(this);
    this.recvPacket = this.recvPacket.bind(this);
    this.timeout = this.timeout.bind(this);
    this.timeoutOnClose = this.timeoutOnClose.bind(this);
    this.acknowledgement = this.acknowledgement.bind(this);
  }
  channelOpenInit(request) {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then((data2) => MsgChannelOpenInitResponse.decode(new _m02.Reader(data2)));
  }
  channelOpenTry(request) {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then((data2) => MsgChannelOpenTryResponse.decode(new _m02.Reader(data2)));
  }
  channelOpenAck(request) {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then((data2) => MsgChannelOpenAckResponse.decode(new _m02.Reader(data2)));
  }
  channelOpenConfirm(request) {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then((data2) => MsgChannelOpenConfirmResponse.decode(new _m02.Reader(data2)));
  }
  channelCloseInit(request) {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then((data2) => MsgChannelCloseInitResponse.decode(new _m02.Reader(data2)));
  }
  channelCloseConfirm(request) {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then((data2) => MsgChannelCloseConfirmResponse.decode(new _m02.Reader(data2)));
  }
  recvPacket(request) {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then((data2) => MsgRecvPacketResponse.decode(new _m02.Reader(data2)));
  }
  timeout(request) {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then((data2) => MsgTimeoutResponse.decode(new _m02.Reader(data2)));
  }
  timeoutOnClose(request) {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then((data2) => MsgTimeoutOnCloseResponse.decode(new _m02.Reader(data2)));
  }
  acknowledgement(request) {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then((data2) => MsgAcknowledgementResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelCloseInit,
  MsgChannelCloseConfirm,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgAcknowledgement,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-JLOYDEL7.js.map
