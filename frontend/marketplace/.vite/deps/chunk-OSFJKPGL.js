import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  fromJsonTimestamp,
  fromTimestamp,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/proofofexistence/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/proofofexistence/query.js
var query_exports = {};
__export(query_exports, {
  QueryProofRequest: () => QueryProofRequest,
  QueryProofResponse: () => QueryProofResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/proofofexistence/types.js
var types_exports = {};
__export(types_exports, {
  ProofMetadata: () => ProofMetadata
});
var _m0 = __toESM(require_minimal());
function createBaseProofMetadata() {
  return {
    timestamp: void 0,
    creator: ""
  };
}
var ProofMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.creator = reader.string();
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
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    message.creator !== void 0 && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object) {
    var _object$timestamp, _object$creator;
    const message = createBaseProofMetadata();
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : void 0;
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/proofofexistence/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryProofRequest() {
  return {
    hash: ""
  };
}
var QueryProofRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProofRequest();
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
    const message = createBaseQueryProofRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseQueryProofResponse() {
  return {
    metadata: void 0
  };
}
var QueryProofResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.metadata !== void 0) {
      ProofMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ProofMetadata.decode(reader, reader.uint32());
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
      metadata: isSet(object.metadata) ? ProofMetadata.fromJSON(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.metadata !== void 0 && (obj.metadata = message.metadata ? ProofMetadata.toJSON(message.metadata) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProofResponse();
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? ProofMetadata.fromPartial(object.metadata) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/proofofexistence/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.proof = this.proof.bind(this);
  }
  proof(request) {
    const data = QueryProofRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.proofofexistence.Query", "Proof", data);
    return promise.then((data2) => QueryProofResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proof(request) {
      return queryService.proof(request);
    }
  };
};

export {
  ProofMetadata,
  types_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-OSFJKPGL.js.map
