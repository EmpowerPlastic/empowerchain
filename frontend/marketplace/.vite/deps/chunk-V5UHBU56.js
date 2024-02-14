import {
  Certificate,
  Params
} from "./chunk-BYYZD52L.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
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

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/query.js
var query_exports = {};
__export(query_exports, {
  QueryAllCertificatesByUserRequest: () => QueryAllCertificatesByUserRequest,
  QueryAllCertificatesByUserResponse: () => QueryAllCertificatesByUserResponse,
  QueryCertificateRequest: () => QueryCertificateRequest,
  QueryCertificateResponse: () => QueryCertificateResponse,
  QueryCertificatesRequest: () => QueryCertificatesRequest,
  QueryCertificatesResponse: () => QueryCertificatesResponse,
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
function createBaseQueryCertificateRequest() {
  return {
    id: BigInt("0"),
    owner: ""
  };
}
var QueryCertificateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.owner = reader.string();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.owner !== void 0 && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object) {
    var _object$owner;
    const message = createBaseQueryCertificateRequest();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
function createBaseQueryCertificateResponse() {
  return {
    certificate: void 0
  };
}
var QueryCertificateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.certificate !== void 0) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
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
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.certificate !== void 0 && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryCertificateResponse();
    message.certificate = object.certificate !== void 0 && object.certificate !== null ? Certificate.fromPartial(object.certificate) : void 0;
    return message;
  }
};
function createBaseQueryCertificatesRequest() {
  return {
    pagination: void 0
  };
}
var QueryCertificatesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
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
    const message = createBaseQueryCertificatesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryCertificatesResponse() {
  return {
    certificates: [],
    pagination: void 0
  };
}
var QueryCertificatesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.certificates) {
      Certificate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(Certificate.decode(reader, reader.uint32()));
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
      certificates: Array.isArray(object === null || object === void 0 ? void 0 : object.certificates) ? object.certificates.map((e) => Certificate.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) => e ? Certificate.toJSON(e) : void 0);
    } else {
      obj.certificates = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$certificates;
    const message = createBaseQueryCertificatesResponse();
    message.certificates = ((_object$certificates = object.certificates) === null || _object$certificates === void 0 ? void 0 : _object$certificates.map((e) => Certificate.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllCertificatesByUserRequest() {
  return {
    owner: "",
    pagination: void 0
  };
}
var QueryAllCertificatesByUserRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCertificatesByUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$owner2;
    const message = createBaseQueryAllCertificatesByUserRequest();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllCertificatesByUserResponse() {
  return {
    certificates: [],
    pagination: void 0
  };
}
var QueryAllCertificatesByUserResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.certificates) {
      Certificate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCertificatesByUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(Certificate.decode(reader, reader.uint32()));
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
      certificates: Array.isArray(object === null || object === void 0 ? void 0 : object.certificates) ? object.certificates.map((e) => Certificate.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) => e ? Certificate.toJSON(e) : void 0);
    } else {
      obj.certificates = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$certificates2;
    const message = createBaseQueryAllCertificatesByUserResponse();
    message.certificates = ((_object$certificates2 = object.certificates) === null || _object$certificates2 === void 0 ? void 0 : _object$certificates2.map((e) => Certificate.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.certificate = this.certificate.bind(this);
    this.certificates = this.certificates.bind(this);
    this.allCertificatesByUser = this.allCertificatesByUser.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  certificate(request) {
    const data = QueryCertificateRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Certificate", data);
    return promise.then((data2) => QueryCertificateResponse.decode(new _m02.Reader(data2)));
  }
  certificates(request = {
    pagination: void 0
  }) {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Certificates", data);
    return promise.then((data2) => QueryCertificatesResponse.decode(new _m02.Reader(data2)));
  }
  allCertificatesByUser(request) {
    const data = QueryAllCertificatesByUserRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "AllCertificatesByUser", data);
    return promise.then((data2) => QueryAllCertificatesByUserResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    certificate(request) {
      return queryService.certificate(request);
    },
    certificates(request) {
      return queryService.certificates(request);
    },
    allCertificatesByUser(request) {
      return queryService.allCertificatesByUser(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-V5UHBU56.js.map
