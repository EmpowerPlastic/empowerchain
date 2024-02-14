import {
  Params
} from "./chunk-TKRH3FEW.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/mint/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/mint/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryAnnualProvisionsRequest: () => QueryAnnualProvisionsRequest,
  QueryAnnualProvisionsResponse: () => QueryAnnualProvisionsResponse,
  QueryInflationRequest: () => QueryInflationRequest,
  QueryInflationResponse: () => QueryInflationResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseQueryInflationRequest() {
  return {};
}
var QueryInflationRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRequest();
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
    const message = createBaseQueryInflationRequest();
    return message;
  }
};
function createBaseQueryInflationResponse() {
  return {
    inflation: new Uint8Array()
  };
}
var QueryInflationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.inflation.length !== 0) {
      writer.uint32(10).bytes(message.inflation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.bytes();
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
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.inflation !== void 0 && (obj.inflation = base64FromBytes(message.inflation !== void 0 ? message.inflation : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$inflation;
    const message = createBaseQueryInflationResponse();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : new Uint8Array();
    return message;
  }
};
function createBaseQueryAnnualProvisionsRequest() {
  return {};
}
var QueryAnnualProvisionsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsRequest();
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
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  }
};
function createBaseQueryAnnualProvisionsResponse() {
  return {
    annualProvisions: new Uint8Array()
  };
}
var QueryAnnualProvisionsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnualProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.bytes();
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
      annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.annualProvisions !== void 0 && (obj.annualProvisions = base64FromBytes(message.annualProvisions !== void 0 ? message.annualProvisions : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$annualProvisi;
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = (_object$annualProvisi = object.annualProvisions) !== null && _object$annualProvisi !== void 0 ? _object$annualProvisi : new Uint8Array();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/mint/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  inflation(request = {}) {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then((data2) => QueryInflationResponse.decode(new _m02.Reader(data2)));
  }
  annualProvisions(request = {}) {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then((data2) => QueryAnnualProvisionsResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    inflation(request) {
      return queryService.inflation(request);
    },
    annualProvisions(request) {
      return queryService.annualProvisions(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-Y3YMY2YA.js.map
