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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryAllEvidenceRequest: () => QueryAllEvidenceRequest,
  QueryAllEvidenceResponse: () => QueryAllEvidenceResponse,
  QueryEvidenceRequest: () => QueryEvidenceRequest,
  QueryEvidenceResponse: () => QueryEvidenceResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryEvidenceRequest() {
  return {
    evidenceHash: new Uint8Array(),
    hash: ""
  };
}
var QueryEvidenceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        case 2:
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
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.evidenceHash !== void 0 && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== void 0 ? message.evidenceHash : new Uint8Array()));
    message.hash !== void 0 && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$evidenceHash, _object$hash;
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = (_object$evidenceHash = object.evidenceHash) !== null && _object$evidenceHash !== void 0 ? _object$evidenceHash : new Uint8Array();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseQueryEvidenceResponse() {
  return {
    evidence: void 0
  };
}
var QueryEvidenceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.evidence !== void 0) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32());
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
      evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.evidence !== void 0 && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryEvidenceResponse();
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? Any.fromPartial(object.evidence) : void 0;
    return message;
  }
};
function createBaseQueryAllEvidenceRequest() {
  return {
    pagination: void 0
  };
}
var QueryAllEvidenceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
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
    const message = createBaseQueryAllEvidenceRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllEvidenceResponse() {
  return {
    evidence: [],
    pagination: void 0
  };
}
var QueryAllEvidenceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.evidence) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
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
      evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map((e) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.evidence = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$evidence;
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map((e) => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  evidence(request) {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then((data2) => QueryEvidenceResponse.decode(new _m02.Reader(data2)));
  }
  allEvidence(request = {
    pagination: void 0
  }) {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then((data2) => QueryAllEvidenceResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    evidence(request) {
      return queryService.evidence(request);
    },
    allEvidence(request) {
      return queryService.allEvidence(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-ENXPP7RZ.js.map
