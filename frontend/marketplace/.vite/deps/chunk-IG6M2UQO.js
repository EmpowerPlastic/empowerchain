import {
  ConsensusStateWithHeight,
  Height,
  IdentifiedClientState,
  Params
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryClientParamsRequest: () => QueryClientParamsRequest,
  QueryClientParamsResponse: () => QueryClientParamsResponse,
  QueryClientStateRequest: () => QueryClientStateRequest,
  QueryClientStateResponse: () => QueryClientStateResponse,
  QueryClientStatesRequest: () => QueryClientStatesRequest,
  QueryClientStatesResponse: () => QueryClientStatesResponse,
  QueryClientStatusRequest: () => QueryClientStatusRequest,
  QueryClientStatusResponse: () => QueryClientStatusResponse,
  QueryConsensusStateHeightsRequest: () => QueryConsensusStateHeightsRequest,
  QueryConsensusStateHeightsResponse: () => QueryConsensusStateHeightsResponse,
  QueryConsensusStateRequest: () => QueryConsensusStateRequest,
  QueryConsensusStateResponse: () => QueryConsensusStateResponse,
  QueryConsensusStatesRequest: () => QueryConsensusStatesRequest,
  QueryConsensusStatesResponse: () => QueryConsensusStatesResponse,
  QueryUpgradedClientStateRequest: () => QueryUpgradedClientStateRequest,
  QueryUpgradedClientStateResponse: () => QueryUpgradedClientStateResponse,
  QueryUpgradedConsensusStateRequest: () => QueryUpgradedConsensusStateRequest,
  QueryUpgradedConsensusStateResponse: () => QueryUpgradedConsensusStateResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryClientStateRequest() {
  return {
    clientId: ""
  };
}
var QueryClientStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId;
    const message = createBaseQueryClientStateRequest();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    return message;
  }
};
function createBaseQueryClientStateResponse() {
  return {
    clientState: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryClientStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
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
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof;
    const message = createBaseQueryClientStateResponse();
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryClientStatesRequest() {
  return {
    pagination: void 0
  };
}
var QueryClientStatesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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
    const message = createBaseQueryClientStatesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryClientStatesResponse() {
  return {
    clientStates: [],
    pagination: void 0
  };
}
var QueryClientStatesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
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
      clientStates: Array.isArray(object === null || object === void 0 ? void 0 : object.clientStates) ? object.clientStates.map((e) => IdentifiedClientState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map((e) => e ? IdentifiedClientState.toJSON(e) : void 0);
    } else {
      obj.clientStates = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientStates;
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = ((_object$clientStates = object.clientStates) === null || _object$clientStates === void 0 ? void 0 : _object$clientStates.map((e) => IdentifiedClientState.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConsensusStateRequest() {
  return {
    clientId: "",
    revisionNumber: BigInt("0"),
    revisionHeight: BigInt("0"),
    latestHeight: false
  };
}
var QueryConsensusStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.revisionNumber.toString()));
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.revisionHeight.toString()));
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.revisionHeight = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.latestHeight = reader.bool();
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
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt("0"),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt("0"),
      latestHeight: isSet(object.latestHeight) ? Boolean(object.latestHeight) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.revisionNumber !== void 0 && (obj.revisionNumber = (message.revisionNumber || BigInt("0")).toString());
    message.revisionHeight !== void 0 && (obj.revisionHeight = (message.revisionHeight || BigInt("0")).toString());
    message.latestHeight !== void 0 && (obj.latestHeight = message.latestHeight);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId2, _object$latestHeight;
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt("0");
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt("0");
    message.latestHeight = (_object$latestHeight = object.latestHeight) !== null && _object$latestHeight !== void 0 ? _object$latestHeight : false;
    return message;
  }
};
function createBaseQueryConsensusStateResponse() {
  return {
    consensusState: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
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
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : void 0,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.consensusState !== void 0 && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : void 0);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof2;
    const message = createBaseQueryConsensusStateResponse();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryConsensusStatesRequest() {
  return {
    clientId: "",
    pagination: void 0
  };
}
var QueryConsensusStatesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId3;
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConsensusStatesResponse() {
  return {
    consensusStates: [],
    pagination: void 0
  };
}
var QueryConsensusStatesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        case 2:
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
      consensusStates: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStates) ? object.consensusStates.map((e) => ConsensusStateWithHeight.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) => e ? ConsensusStateWithHeight.toJSON(e) : void 0);
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$consensusStat;
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = ((_object$consensusStat = object.consensusStates) === null || _object$consensusStat === void 0 ? void 0 : _object$consensusStat.map((e) => ConsensusStateWithHeight.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConsensusStateHeightsRequest() {
  return {
    clientId: "",
    pagination: void 0
  };
}
var QueryConsensusStateHeightsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId4;
    const message = createBaseQueryConsensusStateHeightsRequest();
    message.clientId = (_object$clientId4 = object.clientId) !== null && _object$clientId4 !== void 0 ? _object$clientId4 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConsensusStateHeightsResponse() {
  return {
    consensusStateHeights: [],
    pagination: void 0
  };
}
var QueryConsensusStateHeightsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.consensusStateHeights) {
      Height.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStateHeights.push(Height.decode(reader, reader.uint32()));
          break;
        case 2:
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
      consensusStateHeights: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStateHeights) ? object.consensusStateHeights.map((e) => Height.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.consensusStateHeights) {
      obj.consensusStateHeights = message.consensusStateHeights.map((e) => e ? Height.toJSON(e) : void 0);
    } else {
      obj.consensusStateHeights = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$consensusStat2;
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensusStateHeights = ((_object$consensusStat2 = object.consensusStateHeights) === null || _object$consensusStat2 === void 0 ? void 0 : _object$consensusStat2.map((e) => Height.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryClientStatusRequest() {
  return {
    clientId: ""
  };
}
var QueryClientStatusRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId5;
    const message = createBaseQueryClientStatusRequest();
    message.clientId = (_object$clientId5 = object.clientId) !== null && _object$clientId5 !== void 0 ? _object$clientId5 : "";
    return message;
  }
};
function createBaseQueryClientStatusResponse() {
  return {
    status: ""
  };
}
var QueryClientStatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.status !== void 0 && (obj.status = message.status);
    return obj;
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseQueryClientStatusResponse();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    return message;
  }
};
function createBaseQueryClientParamsRequest() {
  return {};
}
var QueryClientParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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
    const message = createBaseQueryClientParamsRequest();
    return message;
  }
};
function createBaseQueryClientParamsResponse() {
  return {
    params: void 0
  };
}
var QueryClientParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryClientParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseQueryUpgradedClientStateRequest() {
  return {};
}
var QueryUpgradedClientStateRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  }
};
function createBaseQueryUpgradedClientStateResponse() {
  return {
    upgradedClientState: void 0
  };
}
var QueryUpgradedClientStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.upgradedClientState !== void 0) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
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
      upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.upgradedClientState !== void 0 && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedClientStateResponse();
    message.upgradedClientState = object.upgradedClientState !== void 0 && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : void 0;
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateRequest() {
  return {};
}
var QueryUpgradedConsensusStateRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgradedConsensusState: void 0
  };
}
var QueryUpgradedConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.upgradedConsensusState !== void 0) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
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
      upgradedConsensusState: isSet(object.upgradedConsensusState) ? Any.fromJSON(object.upgradedConsensusState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.upgradedConsensusState !== void 0 && (obj.upgradedConsensusState = message.upgradedConsensusState ? Any.toJSON(message.upgradedConsensusState) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState !== void 0 && object.upgradedConsensusState !== null ? Any.fromPartial(object.upgradedConsensusState) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  clientState(request) {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then((data2) => QueryClientStateResponse.decode(new _m02.Reader(data2)));
  }
  clientStates(request = {
    pagination: void 0
  }) {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then((data2) => QueryClientStatesResponse.decode(new _m02.Reader(data2)));
  }
  consensusState(request) {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then((data2) => QueryConsensusStateResponse.decode(new _m02.Reader(data2)));
  }
  consensusStates(request) {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then((data2) => QueryConsensusStatesResponse.decode(new _m02.Reader(data2)));
  }
  consensusStateHeights(request) {
    const data = QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then((data2) => QueryConsensusStateHeightsResponse.decode(new _m02.Reader(data2)));
  }
  clientStatus(request) {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then((data2) => QueryClientStatusResponse.decode(new _m02.Reader(data2)));
  }
  clientParams(request = {}) {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then((data2) => QueryClientParamsResponse.decode(new _m02.Reader(data2)));
  }
  upgradedClientState(request = {}) {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then((data2) => QueryUpgradedClientStateResponse.decode(new _m02.Reader(data2)));
  }
  upgradedConsensusState(request = {}) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then((data2) => QueryUpgradedConsensusStateResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clientState(request) {
      return queryService.clientState(request);
    },
    clientStates(request) {
      return queryService.clientStates(request);
    },
    consensusState(request) {
      return queryService.consensusState(request);
    },
    consensusStates(request) {
      return queryService.consensusStates(request);
    },
    consensusStateHeights(request) {
      return queryService.consensusStateHeights(request);
    },
    clientStatus(request) {
      return queryService.clientStatus(request);
    },
    clientParams(request) {
      return queryService.clientParams(request);
    },
    upgradedClientState(request) {
      return queryService.upgradedClientState(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-IG6M2UQO.js.map
