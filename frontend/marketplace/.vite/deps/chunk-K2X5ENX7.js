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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/node/v1beta1/query.rpc.Service.js
var query_rpc_Service_exports = {};
__export(query_rpc_Service_exports, {
  ServiceClientImpl: () => ServiceClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/node/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  ConfigRequest: () => ConfigRequest,
  ConfigResponse: () => ConfigResponse
});
var _m0 = __toESM(require_minimal());
function createBaseConfigRequest() {
  return {};
}
var ConfigRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
    const message = createBaseConfigRequest();
    return message;
  }
};
function createBaseConfigResponse() {
  return {
    minimumGasPrice: ""
  };
}
var ConfigResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
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
      minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.minimumGasPrice !== void 0 && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },
  fromPartial(object) {
    var _object$minimumGasPri;
    const message = createBaseConfigResponse();
    message.minimumGasPrice = (_object$minimumGasPri = object.minimumGasPrice) !== null && _object$minimumGasPri !== void 0 ? _object$minimumGasPri : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/node/v1beta1/query.rpc.Service.js
var ServiceClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }
  config(request = {}) {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then((data2) => ConfigResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    config(request) {
      return queryService.config(request);
    }
  };
};

export {
  query_exports,
  ServiceClientImpl,
  createRpcQueryExtension,
  query_rpc_Service_exports
};
//# sourceMappingURL=chunk-K2X5ENX7.js.map
