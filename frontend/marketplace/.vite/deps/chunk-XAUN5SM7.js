import {
  Any
} from "./chunk-5CF6M437.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/app/v1alpha1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/app/v1alpha1/query.js
var query_exports = {};
__export(query_exports, {
  QueryConfigRequest: () => QueryConfigRequest,
  QueryConfigResponse: () => QueryConfigResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/app/v1alpha1/config.js
var config_exports = {};
__export(config_exports, {
  Config: () => Config,
  GolangBinding: () => GolangBinding,
  ModuleConfig: () => ModuleConfig
});
var _m0 = __toESM(require_minimal());
function createBaseConfig() {
  return {
    modules: [],
    golangBindings: []
  };
}
var Config = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.modules) {
      ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;
        case 2:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
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
      modules: Array.isArray(object === null || object === void 0 ? void 0 : object.modules) ? object.modules.map((e) => ModuleConfig.fromJSON(e)) : [],
      golangBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golangBindings) ? object.golangBindings.map((e) => GolangBinding.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.modules) {
      obj.modules = message.modules.map((e) => e ? ModuleConfig.toJSON(e) : void 0);
    } else {
      obj.modules = [];
    }
    if (message.golangBindings) {
      obj.golangBindings = message.golangBindings.map((e) => e ? GolangBinding.toJSON(e) : void 0);
    } else {
      obj.golangBindings = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$modules, _object$golangBinding;
    const message = createBaseConfig();
    message.modules = ((_object$modules = object.modules) === null || _object$modules === void 0 ? void 0 : _object$modules.map((e) => ModuleConfig.fromPartial(e))) || [];
    message.golangBindings = ((_object$golangBinding = object.golangBindings) === null || _object$golangBinding === void 0 ? void 0 : _object$golangBinding.map((e) => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseModuleConfig() {
  return {
    name: "",
    config: void 0,
    golangBindings: []
  };
}
var ModuleConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== void 0) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
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
      name: isSet(object.name) ? String(object.name) : "",
      config: isSet(object.config) ? Any.fromJSON(object.config) : void 0,
      golangBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.golangBindings) ? object.golangBindings.map((e) => GolangBinding.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.config !== void 0 && (obj.config = message.config ? Any.toJSON(message.config) : void 0);
    if (message.golangBindings) {
      obj.golangBindings = message.golangBindings.map((e) => e ? GolangBinding.toJSON(e) : void 0);
    } else {
      obj.golangBindings = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$golangBinding2;
    const message = createBaseModuleConfig();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.config = object.config !== void 0 && object.config !== null ? Any.fromPartial(object.config) : void 0;
    message.golangBindings = ((_object$golangBinding2 = object.golangBindings) === null || _object$golangBinding2 === void 0 ? void 0 : _object$golangBinding2.map((e) => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGolangBinding() {
  return {
    interfaceType: "",
    implementation: ""
  };
}
var GolangBinding = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interfaceType !== "") {
      writer.uint32(10).string(message.interfaceType);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceType = reader.string();
          break;
        case 2:
          message.implementation = reader.string();
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
      interfaceType: isSet(object.interfaceType) ? String(object.interfaceType) : "",
      implementation: isSet(object.implementation) ? String(object.implementation) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.interfaceType !== void 0 && (obj.interfaceType = message.interfaceType);
    message.implementation !== void 0 && (obj.implementation = message.implementation);
    return obj;
  },
  fromPartial(object) {
    var _object$interfaceType, _object$implementatio;
    const message = createBaseGolangBinding();
    message.interfaceType = (_object$interfaceType = object.interfaceType) !== null && _object$interfaceType !== void 0 ? _object$interfaceType : "";
    message.implementation = (_object$implementatio = object.implementation) !== null && _object$implementatio !== void 0 ? _object$implementatio : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/app/v1alpha1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryConfigRequest() {
  return {};
}
var QueryConfigRequest = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
    const message = createBaseQueryConfigRequest();
    return message;
  }
};
function createBaseQueryConfigResponse() {
  return {
    config: void 0
  };
}
var QueryConfigResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.config !== void 0) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
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
      config: isSet(object.config) ? Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.config !== void 0 && (obj.config = message.config ? Config.toJSON(message.config) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== void 0 && object.config !== null ? Config.fromPartial(object.config) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/app/v1alpha1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }
  config(request = {}) {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then((data2) => QueryConfigResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    config(request) {
      return queryService.config(request);
    }
  };
};

export {
  config_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-XAUN5SM7.js.map
