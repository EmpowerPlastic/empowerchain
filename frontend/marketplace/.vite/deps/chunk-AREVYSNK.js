import {
  BaseAccount,
  Params
} from "./chunk-V33XUOV5.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/auth/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/auth/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  AddressBytesToStringRequest: () => AddressBytesToStringRequest,
  AddressBytesToStringResponse: () => AddressBytesToStringResponse,
  AddressStringToBytesRequest: () => AddressStringToBytesRequest,
  AddressStringToBytesResponse: () => AddressStringToBytesResponse,
  Bech32PrefixRequest: () => Bech32PrefixRequest,
  Bech32PrefixResponse: () => Bech32PrefixResponse,
  QueryAccountAddressByIDRequest: () => QueryAccountAddressByIDRequest,
  QueryAccountAddressByIDResponse: () => QueryAccountAddressByIDResponse,
  QueryAccountInfoRequest: () => QueryAccountInfoRequest,
  QueryAccountInfoResponse: () => QueryAccountInfoResponse,
  QueryAccountRequest: () => QueryAccountRequest,
  QueryAccountResponse: () => QueryAccountResponse,
  QueryAccountsRequest: () => QueryAccountsRequest,
  QueryAccountsResponse: () => QueryAccountsResponse,
  QueryModuleAccountByNameRequest: () => QueryModuleAccountByNameRequest,
  QueryModuleAccountByNameResponse: () => QueryModuleAccountByNameResponse,
  QueryModuleAccountsRequest: () => QueryModuleAccountsRequest,
  QueryModuleAccountsResponse: () => QueryModuleAccountsResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryAccountsRequest() {
  return {
    pagination: void 0
  };
}
var QueryAccountsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: void 0
  };
}
var QueryAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.accounts = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map((e) => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
var QueryAccountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
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
    const message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryAccountResponse() {
  return {
    account: void 0
  };
}
var QueryAccountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== void 0) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
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
      account: isSet(object.account) ? Any.fromJSON(object.account) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.account !== void 0 && (obj.account = message.account ? Any.toJSON(message.account) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== void 0 && object.account !== null ? Any.fromPartial(object.account) : void 0;
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
function createBaseQueryModuleAccountsRequest() {
  return {};
}
var QueryModuleAccountsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  }
};
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
var QueryModuleAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$accounts2;
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryModuleAccountByNameRequest() {
  return {
    name: ""
  };
}
var QueryModuleAccountByNameRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
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
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
function createBaseQueryModuleAccountByNameResponse() {
  return {
    account: void 0
  };
}
var QueryModuleAccountByNameResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== void 0) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
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
      account: isSet(object.account) ? Any.fromJSON(object.account) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.account !== void 0 && (obj.account = message.account ? Any.toJSON(message.account) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== void 0 && object.account !== null ? Any.fromPartial(object.account) : void 0;
    return message;
  }
};
function createBaseBech32PrefixRequest() {
  return {};
}
var Bech32PrefixRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
    const message = createBaseBech32PrefixRequest();
    return message;
  }
};
function createBaseBech32PrefixResponse() {
  return {
    bech32Prefix: ""
  };
}
var Bech32PrefixResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
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
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.bech32Prefix !== void 0 && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },
  fromPartial(object) {
    var _object$bech32Prefix;
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = (_object$bech32Prefix = object.bech32Prefix) !== null && _object$bech32Prefix !== void 0 ? _object$bech32Prefix : "";
    return message;
  }
};
function createBaseAddressBytesToStringRequest() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressBytesToStringRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
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
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressBytes !== void 0 && (obj.addressBytes = base64FromBytes(message.addressBytes !== void 0 ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$addressBytes;
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = (_object$addressBytes = object.addressBytes) !== null && _object$addressBytes !== void 0 ? _object$addressBytes : new Uint8Array();
    return message;
  }
};
function createBaseAddressBytesToStringResponse() {
  return {
    addressString: ""
  };
}
var AddressBytesToStringResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
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
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressString !== void 0 && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object) {
    var _object$addressString;
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = (_object$addressString = object.addressString) !== null && _object$addressString !== void 0 ? _object$addressString : "";
    return message;
  }
};
function createBaseAddressStringToBytesRequest() {
  return {
    addressString: ""
  };
}
var AddressStringToBytesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
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
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressString !== void 0 && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object) {
    var _object$addressString2;
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = (_object$addressString2 = object.addressString) !== null && _object$addressString2 !== void 0 ? _object$addressString2 : "";
    return message;
  }
};
function createBaseAddressStringToBytesResponse() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressStringToBytesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
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
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.addressBytes !== void 0 && (obj.addressBytes = base64FromBytes(message.addressBytes !== void 0 ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$addressBytes2;
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = (_object$addressBytes2 = object.addressBytes) !== null && _object$addressBytes2 !== void 0 ? _object$addressBytes2 : new Uint8Array();
    return message;
  }
};
function createBaseQueryAccountAddressByIDRequest() {
  return {
    id: BigInt("0"),
    accountId: BigInt("0")
  };
}
var QueryAccountAddressByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.id.toString()));
    }
    if (message.accountId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.accountId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.int64().toString());
          break;
        case 2:
          message.accountId = BigInt(reader.uint64().toString());
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
      accountId: isSet(object.accountId) ? BigInt(object.accountId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.accountId !== void 0 && (obj.accountId = (message.accountId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.accountId = object.accountId !== void 0 && object.accountId !== null ? BigInt(object.accountId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryAccountAddressByIDResponse() {
  return {
    accountAddress: ""
  };
}
var QueryAccountAddressByIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.accountAddress !== void 0 && (obj.accountAddress = message.accountAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$accountAddres;
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = (_object$accountAddres = object.accountAddress) !== null && _object$accountAddres !== void 0 ? _object$accountAddres : "";
    return message;
  }
};
function createBaseQueryAccountInfoRequest() {
  return {
    address: ""
  };
}
var QueryAccountInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoRequest();
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
    var _object$address2;
    const message = createBaseQueryAccountInfoRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseQueryAccountInfoResponse() {
  return {
    info: void 0
  };
}
var QueryAccountInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.info !== void 0) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BaseAccount.decode(reader, reader.uint32());
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
      info: isSet(object.info) ? BaseAccount.fromJSON(object.info) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.info !== void 0 && (obj.info = message.info ? BaseAccount.toJSON(message.info) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? BaseAccount.fromPartial(object.info) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/auth/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  accounts(request = {
    pagination: void 0
  }) {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then((data2) => QueryAccountsResponse.decode(new _m02.Reader(data2)));
  }
  account(request) {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then((data2) => QueryAccountResponse.decode(new _m02.Reader(data2)));
  }
  accountAddressByID(request) {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then((data2) => QueryAccountAddressByIDResponse.decode(new _m02.Reader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  moduleAccounts(request = {}) {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then((data2) => QueryModuleAccountsResponse.decode(new _m02.Reader(data2)));
  }
  moduleAccountByName(request) {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then((data2) => QueryModuleAccountByNameResponse.decode(new _m02.Reader(data2)));
  }
  bech32Prefix(request = {}) {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then((data2) => Bech32PrefixResponse.decode(new _m02.Reader(data2)));
  }
  addressBytesToString(request) {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then((data2) => AddressBytesToStringResponse.decode(new _m02.Reader(data2)));
  }
  addressStringToBytes(request) {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then((data2) => AddressStringToBytesResponse.decode(new _m02.Reader(data2)));
  }
  accountInfo(request) {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then((data2) => QueryAccountInfoResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request) {
      return queryService.accounts(request);
    },
    account(request) {
      return queryService.account(request);
    },
    accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params(request) {
      return queryService.params(request);
    },
    moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request) {
      return queryService.accountInfo(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-AREVYSNK.js.map
