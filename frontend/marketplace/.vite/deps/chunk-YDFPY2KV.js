import {
  AccessConfig,
  ContractCodeHistoryEntry,
  ContractInfo,
  Model,
  Params
} from "./chunk-3WIAPAME.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/query.js
var query_exports = {};
__export(query_exports, {
  CodeInfoResponse: () => CodeInfoResponse,
  QueryAllContractStateRequest: () => QueryAllContractStateRequest,
  QueryAllContractStateResponse: () => QueryAllContractStateResponse,
  QueryCodeRequest: () => QueryCodeRequest,
  QueryCodeResponse: () => QueryCodeResponse,
  QueryCodesRequest: () => QueryCodesRequest,
  QueryCodesResponse: () => QueryCodesResponse,
  QueryContractHistoryRequest: () => QueryContractHistoryRequest,
  QueryContractHistoryResponse: () => QueryContractHistoryResponse,
  QueryContractInfoRequest: () => QueryContractInfoRequest,
  QueryContractInfoResponse: () => QueryContractInfoResponse,
  QueryContractsByCodeRequest: () => QueryContractsByCodeRequest,
  QueryContractsByCodeResponse: () => QueryContractsByCodeResponse,
  QueryContractsByCreatorRequest: () => QueryContractsByCreatorRequest,
  QueryContractsByCreatorResponse: () => QueryContractsByCreatorResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryPinnedCodesRequest: () => QueryPinnedCodesRequest,
  QueryPinnedCodesResponse: () => QueryPinnedCodesResponse,
  QueryRawContractStateRequest: () => QueryRawContractStateRequest,
  QueryRawContractStateResponse: () => QueryRawContractStateResponse,
  QuerySmartContractStateRequest: () => QuerySmartContractStateRequest,
  QuerySmartContractStateResponse: () => QuerySmartContractStateResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryContractInfoRequest() {
  return {
    address: ""
  };
}
var QueryContractInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
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
    const message = createBaseQueryContractInfoRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryContractInfoResponse() {
  return {
    address: "",
    contractInfo: void 0
  };
}
var QueryContractInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== void 0) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.contractInfo !== void 0 && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseQueryContractInfoResponse();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.contractInfo = object.contractInfo !== void 0 && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : void 0;
    return message;
  }
};
function createBaseQueryContractHistoryRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QueryContractHistoryRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseQueryContractHistoryRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryContractHistoryResponse() {
  return {
    entries: [],
    pagination: void 0
  };
}
var QueryContractHistoryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => ContractCodeHistoryEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? ContractCodeHistoryEntry.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$entries;
    const message = createBaseQueryContractHistoryResponse();
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map((e) => ContractCodeHistoryEntry.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryContractsByCodeRequest() {
  return {
    codeId: BigInt("0"),
    pagination: void 0
  };
}
var QueryContractsByCodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 2:
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryContractsByCodeResponse() {
  return {
    contracts: [],
    pagination: void 0
  };
}
var QueryContractsByCodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.contracts) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
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
      contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map((e) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$contracts;
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = ((_object$contracts = object.contracts) === null || _object$contracts === void 0 ? void 0 : _object$contracts.map((e) => e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllContractStateRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QueryAllContractStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address4;
    const message = createBaseQueryAllContractStateRequest();
    message.address = (_object$address4 = object.address) !== null && _object$address4 !== void 0 ? _object$address4 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllContractStateResponse() {
  return {
    models: [],
    pagination: void 0
  };
}
var QueryAllContractStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.models) {
      Model.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
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
      models: Array.isArray(object === null || object === void 0 ? void 0 : object.models) ? object.models.map((e) => Model.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.models) {
      obj.models = message.models.map((e) => e ? Model.toJSON(e) : void 0);
    } else {
      obj.models = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$models;
    const message = createBaseQueryAllContractStateResponse();
    message.models = ((_object$models = object.models) === null || _object$models === void 0 ? void 0 : _object$models.map((e) => Model.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryRawContractStateRequest() {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
var QueryRawContractStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
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
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.queryData !== void 0 && (obj.queryData = base64FromBytes(message.queryData !== void 0 ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address5, _object$queryData;
    const message = createBaseQueryRawContractStateRequest();
    message.address = (_object$address5 = object.address) !== null && _object$address5 !== void 0 ? _object$address5 : "";
    message.queryData = (_object$queryData = object.queryData) !== null && _object$queryData !== void 0 ? _object$queryData : new Uint8Array();
    return message;
  }
};
function createBaseQueryRawContractStateResponse() {
  return {
    data: new Uint8Array()
  };
}
var QueryRawContractStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data;
    const message = createBaseQueryRawContractStateResponse();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
function createBaseQuerySmartContractStateRequest() {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
var QuerySmartContractStateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
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
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.queryData !== void 0 && (obj.queryData = base64FromBytes(message.queryData !== void 0 ? message.queryData : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address6, _object$queryData2;
    const message = createBaseQuerySmartContractStateRequest();
    message.address = (_object$address6 = object.address) !== null && _object$address6 !== void 0 ? _object$address6 : "";
    message.queryData = (_object$queryData2 = object.queryData) !== null && _object$queryData2 !== void 0 ? _object$queryData2 : new Uint8Array();
    return message;
  }
};
function createBaseQuerySmartContractStateResponse() {
  return {
    data: new Uint8Array()
  };
}
var QuerySmartContractStateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data2;
    const message = createBaseQuerySmartContractStateResponse();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBaseQueryCodeRequest() {
  return {
    codeId: BigInt("0")
  };
}
var QueryCodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = BigInt(reader.uint64().toString());
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseCodeInfoResponse() {
  return {
    codeId: BigInt("0"),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: void 0
  };
}
var CodeInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      creator: isSet(object.creator) ? String(object.creator) : "",
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.creator !== void 0 && (obj.creator = message.creator);
    message.dataHash !== void 0 && (obj.dataHash = base64FromBytes(message.dataHash !== void 0 ? message.dataHash : new Uint8Array()));
    message.instantiatePermission !== void 0 && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$creator, _object$dataHash;
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.dataHash = (_object$dataHash = object.dataHash) !== null && _object$dataHash !== void 0 ? _object$dataHash : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  }
};
function createBaseQueryCodeResponse() {
  return {
    codeInfo: void 0,
    data: new Uint8Array()
  };
}
var QueryCodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeInfo !== void 0) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
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
      codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : void 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeInfo !== void 0 && (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : void 0);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data3;
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== void 0 && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : void 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseQueryCodesRequest() {
  return {
    pagination: void 0
  };
}
var QueryCodesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
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
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCodesResponse() {
  return {
    codeInfos: [],
    pagination: void 0
  };
}
var QueryCodesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
      codeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.codeInfos) ? object.codeInfos.map((e) => CodeInfoResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map((e) => e ? CodeInfoResponse.toJSON(e) : void 0);
    } else {
      obj.codeInfos = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$codeInfos;
    const message = createBaseQueryCodesResponse();
    message.codeInfos = ((_object$codeInfos = object.codeInfos) === null || _object$codeInfos === void 0 ? void 0 : _object$codeInfos.map((e) => CodeInfoResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryPinnedCodesRequest() {
  return {
    pagination: void 0
  };
}
var QueryPinnedCodesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
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
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryPinnedCodesResponse() {
  return {
    codeIds: [],
    pagination: void 0
  };
}
var QueryPinnedCodesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.codeIds.push(BigInt(reader.uint64().toString()));
          }
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
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.codeIds = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$codeIds;
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = ((_object$codeIds = object.codeIds) === null || _object$codeIds === void 0 ? void 0 : _object$codeIds.map((e) => BigInt(e.toString()))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
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
function createBaseQueryContractsByCreatorRequest() {
  return {
    creatorAddress: "",
    pagination: void 0
  };
}
var QueryContractsByCreatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
          break;
        case 2:
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
      creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.creatorAddress !== void 0 && (obj.creatorAddress = message.creatorAddress);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$creatorAddres;
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = (_object$creatorAddres = object.creatorAddress) !== null && _object$creatorAddres !== void 0 ? _object$creatorAddres : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryContractsByCreatorResponse() {
  return {
    contractAddresses: [],
    pagination: void 0
  };
}
var QueryContractsByCreatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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
      contractAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.contractAddresses) ? object.contractAddresses.map((e) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$contractAddre;
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = ((_object$contractAddre = object.contractAddresses) === null || _object$contractAddre === void 0 ? void 0 : _object$contractAddre.map((e) => e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  contractInfo(request) {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data2) => QueryContractInfoResponse.decode(new _m02.Reader(data2)));
  }
  contractHistory(request) {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data2) => QueryContractHistoryResponse.decode(new _m02.Reader(data2)));
  }
  contractsByCode(request) {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data2) => QueryContractsByCodeResponse.decode(new _m02.Reader(data2)));
  }
  allContractState(request) {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data2) => QueryAllContractStateResponse.decode(new _m02.Reader(data2)));
  }
  rawContractState(request) {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data2) => QueryRawContractStateResponse.decode(new _m02.Reader(data2)));
  }
  smartContractState(request) {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data2) => QuerySmartContractStateResponse.decode(new _m02.Reader(data2)));
  }
  code(request) {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data2) => QueryCodeResponse.decode(new _m02.Reader(data2)));
  }
  codes(request = {
    pagination: void 0
  }) {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data2) => QueryCodesResponse.decode(new _m02.Reader(data2)));
  }
  pinnedCodes(request = {
    pagination: void 0
  }) {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data2) => QueryPinnedCodesResponse.decode(new _m02.Reader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  contractsByCreator(request) {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then((data2) => QueryContractsByCreatorResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request) {
      return queryService.contractInfo(request);
    },
    contractHistory(request) {
      return queryService.contractHistory(request);
    },
    contractsByCode(request) {
      return queryService.contractsByCode(request);
    },
    allContractState(request) {
      return queryService.allContractState(request);
    },
    rawContractState(request) {
      return queryService.rawContractState(request);
    },
    smartContractState(request) {
      return queryService.smartContractState(request);
    },
    code(request) {
      return queryService.code(request);
    },
    codes(request) {
      return queryService.codes(request);
    },
    pinnedCodes(request) {
      return queryService.pinnedCodes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    contractsByCreator(request) {
      return queryService.contractsByCreator(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-YDFPY2KV.js.map
