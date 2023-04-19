import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseQueryAccountsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAccountsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(e => Any.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$address;
    const message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseQueryAccountResponse() {
  return {
    account: undefined
  };
}
export const QueryAccountResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryModuleAccountsRequest() {
  return {};
}
export const QueryModuleAccountsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const QueryModuleAccountsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$accounts2;
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryModuleAccountByNameRequest() {
  return {
    name: ""
  };
}
export const QueryModuleAccountByNameRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$name;
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
function createBaseQueryModuleAccountByNameResponse() {
  return {
    account: undefined
  };
}
export const QueryModuleAccountByNameResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }
};
function createBaseBech32PrefixRequest() {
  return {};
}
export const Bech32PrefixRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const Bech32PrefixResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const AddressBytesToStringRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const AddressBytesToStringResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const AddressStringToBytesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const AddressStringToBytesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$addressBytes2;
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = (_object$addressBytes2 = object.addressBytes) !== null && _object$addressBytes2 !== void 0 ? _object$addressBytes2 : new Uint8Array();
    return message;
  }
};
function createBaseQueryAccountAddressByIDRequest() {
  return {
    id: Long.ZERO,
    accountId: Long.UZERO
  };
}
export const QueryAccountAddressByIDRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (!message.accountId.isZero()) {
      writer.uint32(16).uint64(message.accountId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.accountId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.accountId = object.accountId !== undefined && object.accountId !== null ? Long.fromValue(object.accountId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAccountAddressByIDResponse() {
  return {
    accountAddress: ""
  };
}
export const QueryAccountAddressByIDResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const QueryAccountInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$address2;
    const message = createBaseQueryAccountInfoRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseQueryAccountInfoResponse() {
  return {
    info: undefined
  };
}
export const QueryAccountInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAccountInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? BaseAccount.fromPartial(object.info) : undefined;
    return message;
  }
};