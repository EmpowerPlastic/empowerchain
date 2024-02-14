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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/params/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/params/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QuerySubspacesRequest: () => QuerySubspacesRequest,
  QuerySubspacesResponse: () => QuerySubspacesResponse,
  Subspace: () => Subspace
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/params/v1beta1/params.js
var params_exports = {};
__export(params_exports, {
  ParamChange: () => ParamChange,
  ParameterChangeProposal: () => ParameterChangeProposal
});
var _m0 = __toESM(require_minimal());
function createBaseParameterChangeProposal() {
  return {
    title: "",
    description: "",
    changes: []
  };
}
var ParameterChangeProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      changes: Array.isArray(object === null || object === void 0 ? void 0 : object.changes) ? object.changes.map((e) => ParamChange.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    if (message.changes) {
      obj.changes = message.changes.map((e) => e ? ParamChange.toJSON(e) : void 0);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$changes;
    const message = createBaseParameterChangeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.changes = ((_object$changes = object.changes) === null || _object$changes === void 0 ? void 0 : _object$changes.map((e) => ParamChange.fromPartial(e))) || [];
    return message;
  }
};
function createBaseParamChange() {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}
var ParamChange = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
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
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.subspace !== void 0 && (obj.subspace = message.subspace);
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$subspace, _object$key, _object$value;
    const message = createBaseParamChange();
    message.subspace = (_object$subspace = object.subspace) !== null && _object$subspace !== void 0 ? _object$subspace : "";
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/params/v1beta1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryParamsRequest() {
  return {
    subspace: "",
    key: ""
  };
}
var QueryParamsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
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
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.subspace !== void 0 && (obj.subspace = message.subspace);
    message.key !== void 0 && (obj.key = message.key);
    return obj;
  },
  fromPartial(object) {
    var _object$subspace, _object$key;
    const message = createBaseQueryParamsRequest();
    message.subspace = (_object$subspace = object.subspace) !== null && _object$subspace !== void 0 ? _object$subspace : "";
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    param: void 0
  };
}
var QueryParamsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.param !== void 0) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32());
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
      param: isSet(object.param) ? ParamChange.fromJSON(object.param) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.param !== void 0 && (obj.param = message.param ? ParamChange.toJSON(message.param) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.param = object.param !== void 0 && object.param !== null ? ParamChange.fromPartial(object.param) : void 0;
    return message;
  }
};
function createBaseQuerySubspacesRequest() {
  return {};
}
var QuerySubspacesRequest = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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
    const message = createBaseQuerySubspacesRequest();
    return message;
  }
};
function createBaseQuerySubspacesResponse() {
  return {
    subspaces: []
  };
}
var QuerySubspacesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.subspaces) {
      Subspace.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
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
      subspaces: Array.isArray(object === null || object === void 0 ? void 0 : object.subspaces) ? object.subspaces.map((e) => Subspace.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) => e ? Subspace.toJSON(e) : void 0);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$subspaces;
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = ((_object$subspaces = object.subspaces) === null || _object$subspaces === void 0 ? void 0 : _object$subspaces.map((e) => Subspace.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSubspace() {
  return {
    subspace: "",
    keys: []
  };
}
var Subspace = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
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
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.subspace !== void 0 && (obj.subspace = message.subspace);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$subspace2, _object$keys;
    const message = createBaseSubspace();
    message.subspace = (_object$subspace2 = object.subspace) !== null && _object$subspace2 !== void 0 ? _object$subspace2 : "";
    message.keys = ((_object$keys = object.keys) === null || _object$keys === void 0 ? void 0 : _object$keys.map((e) => e)) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/params/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.subspaces = this.subspaces.bind(this);
  }
  params(request) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m03.Reader(data2)));
  }
  subspaces(request = {}) {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
    return promise.then((data2) => QuerySubspacesResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    subspaces(request) {
      return queryService.subspaces(request);
    }
  };
};

export {
  params_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-F4TWKZWE.js.map
