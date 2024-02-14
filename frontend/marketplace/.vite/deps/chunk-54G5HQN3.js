import {
  ConnectionEnd,
  IdentifiedConnection
} from "./chunk-IBRIQSA5.js";
import {
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryClientConnectionsRequest: () => QueryClientConnectionsRequest,
  QueryClientConnectionsResponse: () => QueryClientConnectionsResponse,
  QueryConnectionClientStateRequest: () => QueryConnectionClientStateRequest,
  QueryConnectionClientStateResponse: () => QueryConnectionClientStateResponse,
  QueryConnectionConsensusStateRequest: () => QueryConnectionConsensusStateRequest,
  QueryConnectionConsensusStateResponse: () => QueryConnectionConsensusStateResponse,
  QueryConnectionParamsRequest: () => QueryConnectionParamsRequest,
  QueryConnectionParamsResponse: () => QueryConnectionParamsResponse,
  QueryConnectionRequest: () => QueryConnectionRequest,
  QueryConnectionResponse: () => QueryConnectionResponse,
  QueryConnectionsRequest: () => QueryConnectionsRequest,
  QueryConnectionsResponse: () => QueryConnectionsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryConnectionRequest() {
  return {
    connectionId: ""
  };
}
var QueryConnectionRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial(object) {
    var _object$connectionId;
    const message = createBaseQueryConnectionRequest();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    return message;
  }
};
function createBaseQueryConnectionResponse() {
  return {
    connection: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryConnectionResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connection !== void 0) {
      ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
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
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : void 0,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.connection !== void 0 && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : void 0);
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proof;
    const message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== void 0 && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : void 0;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryConnectionsRequest() {
  return {
    pagination: void 0
  };
}
var QueryConnectionsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsRequest();
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
    const message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryConnectionsResponse() {
  return {
    connections: [],
    pagination: void 0,
    height: void 0
  };
}
var QueryConnectionsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
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
      connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections) ? object.connections.map((e) => IdentifiedConnection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toJSON(e) : void 0);
    } else {
      obj.connections = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$connections;
    const message = createBaseQueryConnectionsResponse();
    message.connections = ((_object$connections = object.connections) === null || _object$connections === void 0 ? void 0 : _object$connections.map((e) => IdentifiedConnection.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    return message;
  }
};
function createBaseQueryClientConnectionsRequest() {
  return {
    clientId: ""
  };
}
var QueryClientConnectionsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsRequest();
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
    const message = createBaseQueryClientConnectionsRequest();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    return message;
  }
};
function createBaseQueryClientConnectionsResponse() {
  return {
    connectionPaths: [],
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryClientConnectionsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.connectionPaths) {
      writer.uint32(10).string(v);
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
    const message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionPaths.push(reader.string());
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
      connectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionPaths) ? object.connectionPaths.map((e) => String(e)) : [],
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.connectionPaths) {
      obj.connectionPaths = message.connectionPaths.map((e) => e);
    } else {
      obj.connectionPaths = [];
    }
    message.proof !== void 0 && (obj.proof = base64FromBytes(message.proof !== void 0 ? message.proof : new Uint8Array()));
    message.proofHeight !== void 0 && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$connectionPat, _object$proof2;
    const message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = ((_object$connectionPat = object.connectionPaths) === null || _object$connectionPat === void 0 ? void 0 : _object$connectionPat.map((e) => e)) || [];
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryConnectionClientStateRequest() {
  return {
    connectionId: ""
  };
}
var QueryConnectionClientStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial(object) {
    var _object$connectionId2;
    const message = createBaseQueryConnectionClientStateRequest();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    return message;
  }
};
function createBaseQueryConnectionClientStateResponse() {
  return {
    identifiedClientState: void 0,
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryConnectionClientStateResponse = {
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
    const message = createBaseQueryConnectionClientStateResponse();
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
    var _object$proof3;
    const message = createBaseQueryConnectionClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== void 0 && object.identifiedClientState !== null ? IdentifiedClientState.fromPartial(object.identifiedClientState) : void 0;
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryConnectionConsensusStateRequest() {
  return {
    connectionId: "",
    revisionNumber: BigInt("0"),
    revisionHeight: BigInt("0")
  };
}
var QueryConnectionConsensusStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.revisionNumber.toString()));
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.revisionHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.revisionNumber = BigInt(reader.uint64().toString());
          break;
        case 3:
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt("0"),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.revisionNumber !== void 0 && (obj.revisionNumber = (message.revisionNumber || BigInt("0")).toString());
    message.revisionHeight !== void 0 && (obj.revisionHeight = (message.revisionHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$connectionId3;
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connectionId = (_object$connectionId3 = object.connectionId) !== null && _object$connectionId3 !== void 0 ? _object$connectionId3 : "";
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt("0");
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryConnectionConsensusStateResponse() {
  return {
    consensusState: void 0,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: void 0
  };
}
var QueryConnectionConsensusStateResponse = {
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
    const message = createBaseQueryConnectionConsensusStateResponse();
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
    var _object$clientId2, _object$proof4;
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    return message;
  }
};
function createBaseQueryConnectionParamsRequest() {
  return {};
}
var QueryConnectionParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsRequest();
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
    const message = createBaseQueryConnectionParamsRequest();
    return message;
  }
};
function createBaseQueryConnectionParamsResponse() {
  return {
    params: void 0
  };
}
var QueryConnectionParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsResponse();
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
    const message = createBaseQueryConnectionParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  connection(request) {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then((data2) => QueryConnectionResponse.decode(new _m02.Reader(data2)));
  }
  connections(request = {
    pagination: void 0
  }) {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then((data2) => QueryConnectionsResponse.decode(new _m02.Reader(data2)));
  }
  clientConnections(request) {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then((data2) => QueryClientConnectionsResponse.decode(new _m02.Reader(data2)));
  }
  connectionClientState(request) {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then((data2) => QueryConnectionClientStateResponse.decode(new _m02.Reader(data2)));
  }
  connectionConsensusState(request) {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then((data2) => QueryConnectionConsensusStateResponse.decode(new _m02.Reader(data2)));
  }
  connectionParams(request = {}) {
    const data = QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then((data2) => QueryConnectionParamsResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request) {
      return queryService.connection(request);
    },
    connections(request) {
      return queryService.connections(request);
    },
    clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    },
    connectionParams(request) {
      return queryService.connectionParams(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-54G5HQN3.js.map
