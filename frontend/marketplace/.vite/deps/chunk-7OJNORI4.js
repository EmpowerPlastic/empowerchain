import {
  Duration
} from "./chunk-J33TOWTN.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
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
  fromJsonTimestamp,
  fromTimestamp,
  import_long,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/orm/query/v1alpha1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/orm/query/v1alpha1/query.js
var query_exports = {};
__export(query_exports, {
  GetRequest: () => GetRequest,
  GetResponse: () => GetResponse,
  IndexValue: () => IndexValue,
  ListRequest: () => ListRequest,
  ListRequest_Prefix: () => ListRequest_Prefix,
  ListRequest_Range: () => ListRequest_Range,
  ListResponse: () => ListResponse
});
var _m0 = __toESM(require_minimal());
function createBaseGetRequest() {
  return {
    messageName: "",
    index: "",
    values: []
  };
}
var GetRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
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
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.messageName !== void 0 && (obj.messageName = message.messageName);
    message.index !== void 0 && (obj.index = message.index);
    if (message.values) {
      obj.values = message.values.map((e) => e ? IndexValue.toJSON(e) : void 0);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$messageName, _object$index, _object$values;
    const message = createBaseGetRequest();
    message.messageName = (_object$messageName = object.messageName) !== null && _object$messageName !== void 0 ? _object$messageName : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.values = ((_object$values = object.values) === null || _object$values === void 0 ? void 0 : _object$values.map((e) => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGetResponse() {
  return {
    result: void 0
  };
}
var GetResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== void 0) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
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
      result: isSet(object.result) ? Any.fromJSON(object.result) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = message.result ? Any.toJSON(message.result) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetResponse();
    message.result = object.result !== void 0 && object.result !== null ? Any.fromPartial(object.result) : void 0;
    return message;
  }
};
function createBaseListRequest() {
  return {
    messageName: "",
    index: "",
    prefix: void 0,
    range: void 0,
    pagination: void 0
  };
}
var ListRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== void 0) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== void 0) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
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
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : void 0,
      range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : void 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.messageName !== void 0 && (obj.messageName = message.messageName);
    message.index !== void 0 && (obj.index = message.index);
    message.prefix !== void 0 && (obj.prefix = message.prefix ? ListRequest_Prefix.toJSON(message.prefix) : void 0);
    message.range !== void 0 && (obj.range = message.range ? ListRequest_Range.toJSON(message.range) : void 0);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$messageName2, _object$index2;
    const message = createBaseListRequest();
    message.messageName = (_object$messageName2 = object.messageName) !== null && _object$messageName2 !== void 0 ? _object$messageName2 : "";
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    message.prefix = object.prefix !== void 0 && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : void 0;
    message.range = object.range !== void 0 && object.range !== null ? ListRequest_Range.fromPartial(object.range) : void 0;
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseListRequest_Prefix() {
  return {
    values: []
  };
}
var ListRequest_Prefix = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
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
      values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.values) {
      obj.values = message.values.map((e) => e ? IndexValue.toJSON(e) : void 0);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$values2;
    const message = createBaseListRequest_Prefix();
    message.values = ((_object$values2 = object.values) === null || _object$values2 === void 0 ? void 0 : _object$values2.map((e) => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseListRequest_Range() {
  return {
    start: [],
    end: []
  };
}
var ListRequest_Range = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.start) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
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
      start: Array.isArray(object === null || object === void 0 ? void 0 : object.start) ? object.start.map((e) => IndexValue.fromJSON(e)) : [],
      end: Array.isArray(object === null || object === void 0 ? void 0 : object.end) ? object.end.map((e) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.start) {
      obj.start = message.start.map((e) => e ? IndexValue.toJSON(e) : void 0);
    } else {
      obj.start = [];
    }
    if (message.end) {
      obj.end = message.end.map((e) => e ? IndexValue.toJSON(e) : void 0);
    } else {
      obj.end = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$start, _object$end;
    const message = createBaseListRequest_Range();
    message.start = ((_object$start = object.start) === null || _object$start === void 0 ? void 0 : _object$start.map((e) => IndexValue.fromPartial(e))) || [];
    message.end = ((_object$end = object.end) === null || _object$end === void 0 ? void 0 : _object$end.map((e) => IndexValue.fromPartial(e))) || [];
    return message;
  }
};
function createBaseListResponse() {
  return {
    results: [],
    pagination: void 0
  };
}
var ListResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.results) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
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
      results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map((e) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.results = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$results;
    const message = createBaseListResponse();
    message.results = ((_object$results = object.results) === null || _object$results === void 0 ? void 0 : _object$results.map((e) => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseIndexValue() {
  return {
    uint: void 0,
    int: void 0,
    str: void 0,
    bytes: void 0,
    enum: void 0,
    bool: void 0,
    timestamp: void 0,
    duration: void 0
  };
}
var IndexValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.uint !== void 0) {
      writer.uint32(8).uint64(import_long.default.fromString(message.uint.toString()));
    }
    if (message.int !== void 0) {
      writer.uint32(16).int64(import_long.default.fromString(message.int.toString()));
    }
    if (message.str !== void 0) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== void 0) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== void 0) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== void 0) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== void 0) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.int = BigInt(reader.int64().toString());
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
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
      uint: isSet(object.uint) ? BigInt(object.uint.toString()) : void 0,
      int: isSet(object.int) ? BigInt(object.int.toString()) : void 0,
      str: isSet(object.str) ? String(object.str) : void 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : void 0,
      enum: isSet(object.enum) ? String(object.enum) : void 0,
      bool: isSet(object.bool) ? Boolean(object.bool) : void 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.uint !== void 0 && (obj.uint = (message.uint || void 0).toString());
    message.int !== void 0 && (obj.int = (message.int || void 0).toString());
    message.str !== void 0 && (obj.str = message.str);
    message.bytes !== void 0 && (obj.bytes = message.bytes !== void 0 ? base64FromBytes(message.bytes) : void 0);
    message.enum !== void 0 && (obj.enum = message.enum);
    message.bool !== void 0 && (obj.bool = message.bool);
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    message.duration !== void 0 && (obj.duration = message.duration ? Duration.toJSON(message.duration) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$str, _object$bytes, _object$enum, _object$bool, _object$timestamp;
    const message = createBaseIndexValue();
    message.uint = object.uint !== void 0 && object.uint !== null ? BigInt(object.uint.toString()) : void 0;
    message.int = object.int !== void 0 && object.int !== null ? BigInt(object.int.toString()) : void 0;
    message.str = (_object$str = object.str) !== null && _object$str !== void 0 ? _object$str : void 0;
    message.bytes = (_object$bytes = object.bytes) !== null && _object$bytes !== void 0 ? _object$bytes : void 0;
    message.enum = (_object$enum = object.enum) !== null && _object$enum !== void 0 ? _object$enum : void 0;
    message.bool = (_object$bool = object.bool) !== null && _object$bool !== void 0 ? _object$bool : void 0;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : void 0;
    message.duration = object.duration !== void 0 && object.duration !== null ? Duration.fromPartial(object.duration) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/orm/query/v1alpha1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
  }
  get(request) {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
    return promise.then((data2) => GetResponse.decode(new _m02.Reader(data2)));
  }
  list(request) {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
    return promise.then((data2) => ListResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    get(request) {
      return queryService.get(request);
    },
    list(request) {
      return queryService.list(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-7OJNORI4.js.map
