import {
  Channel,
  IdentifiedChannel,
  PacketState
} from "./chunk-3SYTEMXM.js";
import {
  Height,
  IdentifiedClientState
} from "./chunk-2L6AETVN.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryChannelClientStateRequest: () => QueryChannelClientStateRequest,
  QueryChannelClientStateResponse: () => QueryChannelClientStateResponse,
  QueryChannelConsensusStateRequest: () => QueryChannelConsensusStateRequest,
  QueryChannelConsensusStateResponse: () => QueryChannelConsensusStateResponse,
  QueryChannelRequest: () => QueryChannelRequest,
  QueryChannelResponse: () => QueryChannelResponse,
  QueryChannelsRequest: () => QueryChannelsRequest,
  QueryChannelsResponse: () => QueryChannelsResponse,
  QueryConnectionChannelsRequest: () => QueryConnectionChannelsRequest,
  QueryConnectionChannelsResponse: () => QueryConnectionChannelsResponse,
  QueryNextSequenceReceiveRequest: () => QueryNextSequenceReceiveRequest,
  QueryNextSequenceReceiveResponse: () => QueryNextSequenceReceiveResponse,
  QueryPacketAcknowledgementRequest: () => QueryPacketAcknowledgementRequest,
  QueryPacketAcknowledgementResponse: () => QueryPacketAcknowledgementResponse,
  QueryPacketAcknowledgementsRequest: () => QueryPacketAcknowledgementsRequest,
  QueryPacketAcknowledgementsResponse: () => QueryPacketAcknowledgementsResponse,
  QueryPacketCommitmentRequest: () => QueryPacketCommitmentRequest,
  QueryPacketCommitmentResponse: () => QueryPacketCommitmentResponse,
  QueryPacketCommitmentsRequest: () => QueryPacketCommitmentsRequest,
  QueryPacketCommitmentsResponse: () => QueryPacketCommitmentsResponse,
  QueryPacketReceiptRequest: () => QueryPacketReceiptRequest,
  QueryPacketReceiptResponse: () => QueryPacketReceiptResponse,
  QueryUnreceivedAcksRequest: () => QueryUnreceivedAcksRequest,
  QueryUnreceivedAcksResponse: () => QueryUnreceivedAcksResponse,
  QueryUnreceivedPacketsRequest: () => QueryUnreceivedPacketsRequest,
  QueryUnreceivedPacketsResponse: () => QueryUnreceivedPacketsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryChannelRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
var QueryChannelRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$portId, _object$channelId;
    const message = createBaseQueryChannelRequest();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
function createBaseQueryChannelResponse() {
  return {
    channel: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryChannelResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channel !== void 0) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : void 0,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.channel !== void 0 && (obj.channel = message.channel ? Channel.toJSON(message.channel) : void 0);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof;
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== void 0 && object.channel !== null ? Channel.fromPartial(object.channel) : void 0;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryChannelsRequest() {
  return {
    pagination: void 0
  };
}
var QueryChannelsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();
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
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryChannelsResponse() {
  return {
    channels: [],
    pagination: void 0,
    height: void 0
  };
}
var QueryChannelsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
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
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : void 0);
    } else {
      obj.channels = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$channels;
    const message = createBaseQueryChannelsResponse();
    message.channels = ((_object$channels = object.channels) === null || _object$channels === void 0 ? void 0 : _object$channels.map((e) => IdentifiedChannel.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryConnectionChannelsRequest() {
  return {
    connection: "",
    pagination: void 0
  };
}
var QueryConnectionChannelsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
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
      connection: isSet(object.connection) ? String(object.connection) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.connection !== void 0 && (obj.connection = message.connection);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$connection;
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = (_object$connection = object.connection) !== null && _object$connection !== void 0 ? _object$connection : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConnectionChannelsResponse() {
  return {
    channels: [],
    pagination: void 0,
    height: void 0
  };
}
var QueryConnectionChannelsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
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
      channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : void 0);
    } else {
      obj.channels = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$channels2;
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = ((_object$channels2 = object.channels) === null || _object$channels2 === void 0 ? void 0 : _object$channels2.map((e) => IdentifiedChannel.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryChannelClientStateRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
var QueryChannelClientStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$portId2, _object$channelId2;
    const message = createBaseQueryChannelClientStateRequest();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    return message;
  }
};
function createBaseQueryChannelClientStateResponse() {
  return {
    identifiedClientState: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryChannelClientStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifiedClientState !== void 0) {
      IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      identifiedClientState: isSet(object.identifiedClientState) ? IdentifiedClientState.fromJSON(object.identifiedClientState) : void 0,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.identifiedClientState !== void 0 && (obj.identifiedClientState = message.identifiedClientState ? IdentifiedClientState.toJSON(message.identifiedClientState) : void 0);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof2;
    const message = createBaseQueryChannelClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== void 0 && object.identifiedClientState !== null ? IdentifiedClientState.fromPartial(object.identifiedClientState) : void 0;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryChannelConsensusStateRequest() {
  return {
    portId: "",
    channelId: "",
    revisionNumber: BigInt("0"),
    revisionHeight: BigInt("0")
  };
}
var QueryChannelConsensusStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.revisionNumber.toString()));
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.revisionHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();
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
          message.revisionNumber = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.revisionHeight = BigInt(reader.uint64().toString());
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
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt("0"),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.revisionNumber !== void 0 && (obj.revisionNumber = (message.revisionNumber || BigInt("0")).toString());
    message.revisionHeight !== void 0 && (obj.revisionHeight = (message.revisionHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId3, _object$channelId3;
    const message = createBaseQueryChannelConsensusStateRequest();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt("0");
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryChannelConsensusStateResponse() {
  return {
    consensusState: void 0,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryChannelConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : void 0,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.consensusState !== void 0 && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : void 0);
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId, _object$proof3;
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryPacketCommitmentRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt("0")
  };
}
var QueryPacketCommitmentRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
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
          message.sequence = BigInt(reader.uint64().toString());
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId4, _object$channelId4;
    const message = createBaseQueryPacketCommitmentRequest();
    message.portId = (_object$portId4 = object.portId) !== null && _object$portId4 !== void 0 ? _object$portId4 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryPacketCommitmentResponse() {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryPacketCommitmentResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.commitment !== void 0 && (obj.commitment = base64FromBytes(message.commitment !== void 0 ? message.commitment : new Uint8Array()));
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$commitment, _object$proof4;
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = (_object$commitment = object.commitment) !== null && _object$commitment !== void 0 ? _object$commitment : new Uint8Array();
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryPacketCommitmentsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: void 0
  };
}
var QueryPacketCommitmentsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$portId5, _object$channelId5;
    const message = createBaseQueryPacketCommitmentsRequest();
    message.portId = (_object$portId5 = object.portId) !== null && _object$portId5 !== void 0 ? _object$portId5 : "";
    message.channelId = (_object$channelId5 = object.channelId) !== null && _object$channelId5 !== void 0 ? _object$channelId5 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryPacketCommitmentsResponse() {
  return {
    commitments: [],
    pagination: void 0,
    height: void 0
  };
}
var QueryPacketCommitmentsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.commitments) {
      PacketState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
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
      commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : void 0);
    } else {
      obj.commitments = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$commitments;
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = ((_object$commitments = object.commitments) === null || _object$commitments === void 0 ? void 0 : _object$commitments.map((e) => PacketState.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryPacketReceiptRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt("0")
  };
}
var QueryPacketReceiptRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
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
          message.sequence = BigInt(reader.uint64().toString());
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId6, _object$channelId6;
    const message = createBaseQueryPacketReceiptRequest();
    message.portId = (_object$portId6 = object.portId) !== null && _object$portId6 !== void 0 ? _object$portId6 : "";
    message.channelId = (_object$channelId6 = object.channelId) !== null && _object$channelId6 !== void 0 ? _object$channelId6 : "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryPacketReceiptResponse() {
  return {
    received: false,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryPacketReceiptResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      received: isSet(object.received) ? Boolean(object.received) : false,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.received !== void 0 && (obj.received = message.received);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$received, _object$proof5;
    const message = createBaseQueryPacketReceiptResponse();
    message.received = (_object$received = object.received) !== null && _object$received !== void 0 ? _object$received : false;
    message.proof = (_object$proof5 = object.proof) !== null && _object$proof5 !== void 0 ? _object$proof5 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryPacketAcknowledgementRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt("0")
  };
}
var QueryPacketAcknowledgementRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
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
          message.sequence = BigInt(reader.uint64().toString());
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId7, _object$channelId7;
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.portId = (_object$portId7 = object.portId) !== null && _object$portId7 !== void 0 ? _object$portId7 : "";
    message.channelId = (_object$channelId7 = object.channelId) !== null && _object$channelId7 !== void 0 ? _object$channelId7 : "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryPacketAcknowledgementResponse() {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryPacketAcknowledgementResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.acknowledgement !== void 0 && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== void 0 ? message.acknowledgement : new Uint8Array()));
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$acknowledgeme, _object$proof6;
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    message.proof = (_object$proof6 = object.proof) !== null && _object$proof6 !== void 0 ? _object$proof6 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryPacketAcknowledgementsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: void 0,
    packetCommitmentSequences: []
  };
}
var QueryPacketAcknowledgementsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.packetCommitmentSequences.push(BigInt(reader.uint64().toString()));
          }
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0,
      packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.packetCommitmentSequences = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$portId8, _object$channelId8, _object$packetCommitm;
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.portId = (_object$portId8 = object.portId) !== null && _object$portId8 !== void 0 ? _object$portId8 : "";
    message.channelId = (_object$channelId8 = object.channelId) !== null && _object$channelId8 !== void 0 ? _object$channelId8 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.packetCommitmentSequences = ((_object$packetCommitm = object.packetCommitmentSequences) === null || _object$packetCommitm === void 0 ? void 0 : _object$packetCommitm.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseQueryPacketAcknowledgementsResponse() {
  return {
    acknowledgements: [],
    pagination: void 0,
    height: void 0
  };
}
var QueryPacketAcknowledgementsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.acknowledgements) {
      PacketState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
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
      acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : void 0);
    } else {
      obj.acknowledgements = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$acknowledgeme2;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = ((_object$acknowledgeme2 = object.acknowledgements) === null || _object$acknowledgeme2 === void 0 ? void 0 : _object$acknowledgeme2.map((e) => PacketState.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryUnreceivedPacketsRequest() {
  return {
    portId: "",
    channelId: "",
    packetCommitmentSequences: []
  };
}
var QueryUnreceivedPacketsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.packetCommitmentSequences.push(BigInt(reader.uint64().toString()));
          }
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
      packetCommitmentSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.packetCommitmentSequences = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$portId9, _object$channelId9, _object$packetCommitm2;
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.portId = (_object$portId9 = object.portId) !== null && _object$portId9 !== void 0 ? _object$portId9 : "";
    message.channelId = (_object$channelId9 = object.channelId) !== null && _object$channelId9 !== void 0 ? _object$channelId9 : "";
    message.packetCommitmentSequences = ((_object$packetCommitm2 = object.packetCommitmentSequences) === null || _object$packetCommitm2 === void 0 ? void 0 : _object$packetCommitm2.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseQueryUnreceivedPacketsResponse() {
  return {
    sequences: [],
    height: void 0
  };
}
var QueryUnreceivedPacketsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.sequences.push(BigInt(reader.uint64().toString()));
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
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
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.sequences = [];
    }
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$sequences;
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = ((_object$sequences = object.sequences) === null || _object$sequences === void 0 ? void 0 : _object$sequences.map((e) => BigInt(e.toString()))) || [];
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryUnreceivedAcksRequest() {
  return {
    portId: "",
    channelId: "",
    packetAckSequences: []
  };
}
var QueryUnreceivedAcksRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.packetAckSequences.push(BigInt(reader.uint64().toString()));
          }
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
      packetAckSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packetAckSequences) ? object.packetAckSequences.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.packetAckSequences = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$portId10, _object$channelId10, _object$packetAckSequ;
    const message = createBaseQueryUnreceivedAcksRequest();
    message.portId = (_object$portId10 = object.portId) !== null && _object$portId10 !== void 0 ? _object$portId10 : "";
    message.channelId = (_object$channelId10 = object.channelId) !== null && _object$channelId10 !== void 0 ? _object$channelId10 : "";
    message.packetAckSequences = ((_object$packetAckSequ = object.packetAckSequences) === null || _object$packetAckSequ === void 0 ? void 0 : _object$packetAckSequ.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseQueryUnreceivedAcksResponse() {
  return {
    sequences: [],
    height: void 0
  };
}
var QueryUnreceivedAcksResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.sequences.push(BigInt(reader.uint64().toString()));
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
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
      sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.sequences = [];
    }
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$sequences2;
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = ((_object$sequences2 = object.sequences) === null || _object$sequences2 === void 0 ? void 0 : _object$sequences2.map((e) => BigInt(e.toString()))) || [];
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryNextSequenceReceiveRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
var QueryNextSequenceReceiveRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$portId11, _object$channelId11;
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.portId = (_object$portId11 = object.portId) !== null && _object$portId11 !== void 0 ? _object$portId11 : "";
    message.channelId = (_object$channelId11 = object.channelId) !== null && _object$channelId11 !== void 0 ? _object$channelId11 : "";
    return message;
  }
};
function createBaseQueryNextSequenceReceiveResponse() {
  return {
    nextSequenceReceive: BigInt("0"),
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryNextSequenceReceiveResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.nextSequenceReceive !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.nextSequenceReceive.toString()));
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
      nextSequenceReceive: isSet(object.nextSequenceReceive) ? BigInt(object.nextSequenceReceive.toString()) : BigInt("0"),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.nextSequenceReceive !== void 0 && (obj.nextSequenceReceive = (message.nextSequenceReceive || BigInt("0")).toString());
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof7;
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.nextSequenceReceive = object.nextSequenceReceive !== void 0 && object.nextSequenceReceive !== null ? BigInt(object.nextSequenceReceive.toString()) : BigInt("0");
    message.proof = (_object$proof7 = object.proof) !== null && _object$proof7 !== void 0 ? _object$proof7 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
  }
  channel(request) {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then((data2) => QueryChannelResponse.decode(new _m02.Reader(data2)));
  }
  channels(request = {
    pagination: void 0
  }) {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then((data2) => QueryChannelsResponse.decode(new _m02.Reader(data2)));
  }
  connectionChannels(request) {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then((data2) => QueryConnectionChannelsResponse.decode(new _m02.Reader(data2)));
  }
  channelClientState(request) {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then((data2) => QueryChannelClientStateResponse.decode(new _m02.Reader(data2)));
  }
  channelConsensusState(request) {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then((data2) => QueryChannelConsensusStateResponse.decode(new _m02.Reader(data2)));
  }
  packetCommitment(request) {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then((data2) => QueryPacketCommitmentResponse.decode(new _m02.Reader(data2)));
  }
  packetCommitments(request) {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then((data2) => QueryPacketCommitmentsResponse.decode(new _m02.Reader(data2)));
  }
  packetReceipt(request) {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then((data2) => QueryPacketReceiptResponse.decode(new _m02.Reader(data2)));
  }
  packetAcknowledgement(request) {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then((data2) => QueryPacketAcknowledgementResponse.decode(new _m02.Reader(data2)));
  }
  packetAcknowledgements(request) {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then((data2) => QueryPacketAcknowledgementsResponse.decode(new _m02.Reader(data2)));
  }
  unreceivedPackets(request) {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then((data2) => QueryUnreceivedPacketsResponse.decode(new _m02.Reader(data2)));
  }
  unreceivedAcks(request) {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then((data2) => QueryUnreceivedAcksResponse.decode(new _m02.Reader(data2)));
  }
  nextSequenceReceive(request) {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then((data2) => QueryNextSequenceReceiveResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    channel(request) {
      return queryService.channel(request);
    },
    channels(request) {
      return queryService.channels(request);
    },
    connectionChannels(request) {
      return queryService.connectionChannels(request);
    },
    channelClientState(request) {
      return queryService.channelClientState(request);
    },
    channelConsensusState(request) {
      return queryService.channelConsensusState(request);
    },
    packetCommitment(request) {
      return queryService.packetCommitment(request);
    },
    packetCommitments(request) {
      return queryService.packetCommitments(request);
    },
    packetReceipt(request) {
      return queryService.packetReceipt(request);
    },
    packetAcknowledgement(request) {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements(request) {
      return queryService.packetAcknowledgements(request);
    },
    unreceivedPackets(request) {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks(request) {
      return queryService.unreceivedAcks(request);
    },
    nextSequenceReceive(request) {
      return queryService.nextSequenceReceive(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-TPFOTVEA.js.map
