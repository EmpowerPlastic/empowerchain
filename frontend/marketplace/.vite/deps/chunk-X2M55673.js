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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/host/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/host/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/host/v1/host.js
var host_exports = {};
__export(host_exports, {
  Params: () => Params
});
var _m0 = __toESM(require_minimal());
function createBaseParams() {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }
    for (const v of message.allowMessages) {
      writer.uint32(18).string(v);
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
          message.hostEnabled = reader.bool();
          break;
        case 2:
          message.allowMessages.push(reader.string());
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
      hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
      allowMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowMessages) ? object.allowMessages.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.hostEnabled !== void 0 && (obj.hostEnabled = message.hostEnabled);
    if (message.allowMessages) {
      obj.allowMessages = message.allowMessages.map((e) => e);
    } else {
      obj.allowMessages = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$hostEnabled, _object$allowMessages;
    const message = createBaseParams();
    message.hostEnabled = (_object$hostEnabled = object.hostEnabled) !== null && _object$hostEnabled !== void 0 ? _object$hostEnabled : false;
    message.allowMessages = ((_object$allowMessages = object.allowMessages) === null || _object$allowMessages === void 0 ? void 0 : _object$allowMessages.map((e) => e)) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/host/v1/query.js
var _m02 = __toESM(require_minimal());
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/host/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    }
  };
};

export {
  Params,
  host_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-X2M55673.js.map
