import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryDenomHashRequest: () => QueryDenomHashRequest,
  QueryDenomHashResponse: () => QueryDenomHashResponse,
  QueryDenomTraceRequest: () => QueryDenomTraceRequest,
  QueryDenomTraceResponse: () => QueryDenomTraceResponse,
  QueryDenomTracesRequest: () => QueryDenomTracesRequest,
  QueryDenomTracesResponse: () => QueryDenomTracesResponse,
  QueryEscrowAddressRequest: () => QueryEscrowAddressRequest,
  QueryEscrowAddressResponse: () => QueryEscrowAddressResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/transfer.js
var transfer_exports = {};
__export(transfer_exports, {
  DenomTrace: () => DenomTrace,
  Params: () => Params
});
var _m0 = __toESM(require_minimal());
function createBaseDenomTrace() {
  return {
    path: "",
    baseDenom: ""
  };
}
var DenomTrace = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
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
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.path !== void 0 && (obj.path = message.path);
    message.baseDenom !== void 0 && (obj.baseDenom = message.baseDenom);
    return obj;
  },
  fromPartial(object) {
    var _object$path, _object$baseDenom;
    const message = createBaseDenomTrace();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.baseDenom = (_object$baseDenom = object.baseDenom) !== null && _object$baseDenom !== void 0 ? _object$baseDenom : "";
    return message;
  }
};
function createBaseParams() {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled = reader.bool();
          break;
        case 2:
          message.receiveEnabled = reader.bool();
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
      sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
      receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.sendEnabled !== void 0 && (obj.sendEnabled = message.sendEnabled);
    message.receiveEnabled !== void 0 && (obj.receiveEnabled = message.receiveEnabled);
    return obj;
  },
  fromPartial(object) {
    var _object$sendEnabled, _object$receiveEnable;
    const message = createBaseParams();
    message.sendEnabled = (_object$sendEnabled = object.sendEnabled) !== null && _object$sendEnabled !== void 0 ? _object$sendEnabled : false;
    message.receiveEnabled = (_object$receiveEnable = object.receiveEnabled) !== null && _object$receiveEnable !== void 0 ? _object$receiveEnable : false;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryDenomTraceRequest() {
  return {
    hash: ""
  };
}
var QueryDenomTraceRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseQueryDenomTraceRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseQueryDenomTraceResponse() {
  return {
    denomTrace: void 0
  };
}
var QueryDenomTraceResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.denomTrace !== void 0) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
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
      denomTrace: isSet(object.denomTrace) ? DenomTrace.fromJSON(object.denomTrace) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.denomTrace !== void 0 && (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTraceResponse();
    message.denomTrace = object.denomTrace !== void 0 && object.denomTrace !== null ? DenomTrace.fromPartial(object.denomTrace) : void 0;
    return message;
  }
};
function createBaseQueryDenomTracesRequest() {
  return {
    pagination: void 0
  };
}
var QueryDenomTracesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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
    const message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDenomTracesResponse() {
  return {
    denomTraces: [],
    pagination: void 0
  };
}
var QueryDenomTracesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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
      denomTraces: Array.isArray(object === null || object === void 0 ? void 0 : object.denomTraces) ? object.denomTraces.map((e) => DenomTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map((e) => e ? DenomTrace.toJSON(e) : void 0);
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$denomTraces;
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = ((_object$denomTraces = object.denomTraces) === null || _object$denomTraces === void 0 ? void 0 : _object$denomTraces.map((e) => DenomTrace.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: void 0
  };
}
var QueryParamsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseQueryDenomHashRequest() {
  return {
    trace: ""
  };
}
var QueryDenomHashRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
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
      trace: isSet(object.trace) ? String(object.trace) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.trace !== void 0 && (obj.trace = message.trace);
    return obj;
  },
  fromPartial(object) {
    var _object$trace;
    const message = createBaseQueryDenomHashRequest();
    message.trace = (_object$trace = object.trace) !== null && _object$trace !== void 0 ? _object$trace : "";
    return message;
  }
};
function createBaseQueryDenomHashResponse() {
  return {
    hash: ""
  };
}
var QueryDenomHashResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$hash2;
    const message = createBaseQueryDenomHashResponse();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : "";
    return message;
  }
};
function createBaseQueryEscrowAddressRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
var QueryEscrowAddressRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
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
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
function createBaseQueryEscrowAddressResponse() {
  return {
    escrowAddress: ""
  };
}
var QueryEscrowAddressResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.escrowAddress !== "") {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowAddress = reader.string();
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
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.escrowAddress !== void 0 && (obj.escrowAddress = message.escrowAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$escrowAddress;
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = (_object$escrowAddress = object.escrowAddress) !== null && _object$escrowAddress !== void 0 ? _object$escrowAddress : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
  }
  denomTrace(request) {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then((data2) => QueryDenomTraceResponse.decode(new _m03.Reader(data2)));
  }
  denomTraces(request = {
    pagination: void 0
  }) {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then((data2) => QueryDenomTracesResponse.decode(new _m03.Reader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m03.Reader(data2)));
  }
  denomHash(request) {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
    return promise.then((data2) => QueryDenomHashResponse.decode(new _m03.Reader(data2)));
  }
  escrowAddress(request) {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
    return promise.then((data2) => QueryEscrowAddressResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTrace(request) {
      return queryService.denomTrace(request);
    },
    denomTraces(request) {
      return queryService.denomTraces(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomHash(request) {
      return queryService.denomHash(request);
    },
    escrowAddress(request) {
      return queryService.escrowAddress(request);
    }
  };
};

export {
  DenomTrace,
  Params,
  transfer_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-IWH4GOH2.js.map
