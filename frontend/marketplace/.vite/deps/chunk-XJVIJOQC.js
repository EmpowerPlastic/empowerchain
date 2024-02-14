import {
  ModuleVersion,
  Plan
} from "./chunk-WUOSB4IU.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryAppliedPlanRequest: () => QueryAppliedPlanRequest,
  QueryAppliedPlanResponse: () => QueryAppliedPlanResponse,
  QueryAuthorityRequest: () => QueryAuthorityRequest,
  QueryAuthorityResponse: () => QueryAuthorityResponse,
  QueryCurrentPlanRequest: () => QueryCurrentPlanRequest,
  QueryCurrentPlanResponse: () => QueryCurrentPlanResponse,
  QueryModuleVersionsRequest: () => QueryModuleVersionsRequest,
  QueryModuleVersionsResponse: () => QueryModuleVersionsResponse,
  QueryUpgradedConsensusStateRequest: () => QueryUpgradedConsensusStateRequest,
  QueryUpgradedConsensusStateResponse: () => QueryUpgradedConsensusStateResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryCurrentPlanRequest() {
  return {};
}
var QueryCurrentPlanRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  }
};
function createBaseQueryCurrentPlanResponse() {
  return {
    plan: void 0
  };
}
var QueryCurrentPlanResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.plan !== void 0) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
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
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.plan !== void 0 && (obj.plan = message.plan ? Plan.toJSON(message.plan) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== void 0 && object.plan !== null ? Plan.fromPartial(object.plan) : void 0;
    return message;
  }
};
function createBaseQueryAppliedPlanRequest() {
  return {
    name: ""
  };
}
var QueryAppliedPlanRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    return obj;
  },
  fromPartial(object) {
    var _object$name;
    const message = createBaseQueryAppliedPlanRequest();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
function createBaseQueryAppliedPlanResponse() {
  return {
    height: BigInt("0")
  };
}
var QueryAppliedPlanResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateRequest() {
  return {
    lastHeight: BigInt("0")
  };
}
var QueryUpgradedConsensusStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.lastHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = BigInt(reader.int64().toString());
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
      lastHeight: isSet(object.lastHeight) ? BigInt(object.lastHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.lastHeight !== void 0 && (obj.lastHeight = (message.lastHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== void 0 && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}
var QueryUpgradedConsensusStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
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
        case 2:
          message.upgradedConsensusState = reader.bytes();
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
      upgradedConsensusState: isSet(object.upgradedConsensusState) ? bytesFromBase64(object.upgradedConsensusState) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.upgradedConsensusState !== void 0 && (obj.upgradedConsensusState = base64FromBytes(message.upgradedConsensusState !== void 0 ? message.upgradedConsensusState : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$upgradedConse;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = (_object$upgradedConse = object.upgradedConsensusState) !== null && _object$upgradedConse !== void 0 ? _object$upgradedConse : new Uint8Array();
    return message;
  }
};
function createBaseQueryModuleVersionsRequest() {
  return {
    moduleName: ""
  };
}
var QueryModuleVersionsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
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
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.moduleName !== void 0 && (obj.moduleName = message.moduleName);
    return obj;
  },
  fromPartial(object) {
    var _object$moduleName;
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    return message;
  }
};
function createBaseQueryModuleVersionsResponse() {
  return {
    moduleVersions: []
  };
}
var QueryModuleVersionsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
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
      moduleVersions: Array.isArray(object === null || object === void 0 ? void 0 : object.moduleVersions) ? object.moduleVersions.map((e) => ModuleVersion.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.moduleVersions) {
      obj.moduleVersions = message.moduleVersions.map((e) => e ? ModuleVersion.toJSON(e) : void 0);
    } else {
      obj.moduleVersions = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$moduleVersion;
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = ((_object$moduleVersion = object.moduleVersions) === null || _object$moduleVersion === void 0 ? void 0 : _object$moduleVersion.map((e) => ModuleVersion.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryAuthorityRequest() {
  return {};
}
var QueryAuthorityRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();
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
    const message = createBaseQueryAuthorityRequest();
    return message;
  }
};
function createBaseQueryAuthorityResponse() {
  return {
    address: ""
  };
}
var QueryAuthorityResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseQueryAuthorityResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  currentPlan(request = {}) {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then((data2) => QueryCurrentPlanResponse.decode(new _m02.Reader(data2)));
  }
  appliedPlan(request) {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then((data2) => QueryAppliedPlanResponse.decode(new _m02.Reader(data2)));
  }
  upgradedConsensusState(request) {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then((data2) => QueryUpgradedConsensusStateResponse.decode(new _m02.Reader(data2)));
  }
  moduleVersions(request) {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then((data2) => QueryModuleVersionsResponse.decode(new _m02.Reader(data2)));
  }
  authority(request = {}) {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then((data2) => QueryAuthorityResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request) {
      return queryService.currentPlan(request);
    },
    appliedPlan(request) {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions(request) {
      return queryService.moduleVersions(request);
    },
    authority(request) {
      return queryService.authority(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-XJVIJOQC.js.map
