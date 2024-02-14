import {
  Metadata,
  Params,
  SendEnabled
} from "./chunk-EWPXETRV.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  DenomOwner: () => DenomOwner,
  QueryAllBalancesRequest: () => QueryAllBalancesRequest,
  QueryAllBalancesResponse: () => QueryAllBalancesResponse,
  QueryBalanceRequest: () => QueryBalanceRequest,
  QueryBalanceResponse: () => QueryBalanceResponse,
  QueryDenomMetadataRequest: () => QueryDenomMetadataRequest,
  QueryDenomMetadataResponse: () => QueryDenomMetadataResponse,
  QueryDenomOwnersRequest: () => QueryDenomOwnersRequest,
  QueryDenomOwnersResponse: () => QueryDenomOwnersResponse,
  QueryDenomsMetadataRequest: () => QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse: () => QueryDenomsMetadataResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QuerySendEnabledRequest: () => QuerySendEnabledRequest,
  QuerySendEnabledResponse: () => QuerySendEnabledResponse,
  QuerySpendableBalanceByDenomRequest: () => QuerySpendableBalanceByDenomRequest,
  QuerySpendableBalanceByDenomResponse: () => QuerySpendableBalanceByDenomResponse,
  QuerySpendableBalancesRequest: () => QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse: () => QuerySpendableBalancesResponse,
  QuerySupplyOfRequest: () => QuerySupplyOfRequest,
  QuerySupplyOfResponse: () => QuerySupplyOfResponse,
  QueryTotalSupplyRequest: () => QueryTotalSupplyRequest,
  QueryTotalSupplyResponse: () => QueryTotalSupplyResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryBalanceRequest() {
  return {
    address: "",
    denom: ""
  };
}
var QueryBalanceRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$denom;
    const message = createBaseQueryBalanceRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
function createBaseQueryBalanceResponse() {
  return {
    balance: void 0
  };
}
var QueryBalanceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
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
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.balance !== void 0 && (obj.balance = message.balance ? Coin.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  }
};
function createBaseQueryAllBalancesRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QueryAllBalancesRequest = {
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
    const message = createBaseQueryAllBalancesRequest();
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
    var _object$address2;
    const message = createBaseQueryAllBalancesRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllBalancesResponse() {
  return {
    balances: [],
    pagination: void 0
  };
}
var QueryAllBalancesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.balances) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.balances = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$balances;
    const message = createBaseQueryAllBalancesResponse();
    message.balances = ((_object$balances = object.balances) === null || _object$balances === void 0 ? void 0 : _object$balances.map((e) => Coin.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySpendableBalancesRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
var QuerySpendableBalancesRequest = {
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
    const message = createBaseQuerySpendableBalancesRequest();
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
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySpendableBalancesResponse() {
  return {
    balances: [],
    pagination: void 0
  };
}
var QuerySpendableBalancesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.balances) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.balances = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$balances2;
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = ((_object$balances2 = object.balances) === null || _object$balances2 === void 0 ? void 0 : _object$balances2.map((e) => Coin.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySpendableBalanceByDenomRequest() {
  return {
    address: "",
    denom: ""
  };
}
var QuerySpendableBalanceByDenomRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$address4, _object$denom2;
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    message.address = (_object$address4 = object.address) !== null && _object$address4 !== void 0 ? _object$address4 : "";
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    return message;
  }
};
function createBaseQuerySpendableBalanceByDenomResponse() {
  return {
    balance: void 0
  };
}
var QuerySpendableBalanceByDenomResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
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
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.balance !== void 0 && (obj.balance = message.balance ? Coin.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  }
};
function createBaseQueryTotalSupplyRequest() {
  return {
    pagination: void 0
  };
}
var QueryTotalSupplyRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryTotalSupplyResponse() {
  return {
    supply: [],
    pagination: void 0
  };
}
var QueryTotalSupplyResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.supply) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
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
      supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map((e) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.supply = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$supply;
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = ((_object$supply = object.supply) === null || _object$supply === void 0 ? void 0 : _object$supply.map((e) => Coin.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySupplyOfRequest() {
  return {
    denom: ""
  };
}
var QuerySupplyOfRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$denom3;
    const message = createBaseQuerySupplyOfRequest();
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    return message;
  }
};
function createBaseQuerySupplyOfResponse() {
  return {
    amount: void 0
  };
}
var QuerySupplyOfResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.amount !== void 0 && (obj.amount = message.amount ? Coin.toJSON(message.amount) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyOfResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
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
function createBaseQueryDenomsMetadataRequest() {
  return {
    pagination: void 0
  };
}
var QueryDenomsMetadataRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
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
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDenomsMetadataResponse() {
  return {
    metadatas: [],
    pagination: void 0
  };
}
var QueryDenomsMetadataResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.metadatas) {
      Metadata.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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
      metadatas: Array.isArray(object === null || object === void 0 ? void 0 : object.metadatas) ? object.metadatas.map((e) => Metadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) => e ? Metadata.toJSON(e) : void 0);
    } else {
      obj.metadatas = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$metadatas;
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = ((_object$metadatas = object.metadatas) === null || _object$metadatas === void 0 ? void 0 : _object$metadatas.map((e) => Metadata.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDenomMetadataRequest() {
  return {
    denom: ""
  };
}
var QueryDenomMetadataRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object) {
    var _object$denom4;
    const message = createBaseQueryDenomMetadataRequest();
    message.denom = (_object$denom4 = object.denom) !== null && _object$denom4 !== void 0 ? _object$denom4 : "";
    return message;
  }
};
function createBaseQueryDenomMetadataResponse() {
  return {
    metadata: void 0
  };
}
var QueryDenomMetadataResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.metadata !== void 0) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
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
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.metadata !== void 0 && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomMetadataResponse();
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? Metadata.fromPartial(object.metadata) : void 0;
    return message;
  }
};
function createBaseQueryDenomOwnersRequest() {
  return {
    denom: "",
    pagination: void 0
  };
}
var QueryDenomOwnersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$denom5;
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = (_object$denom5 = object.denom) !== null && _object$denom5 !== void 0 ? _object$denom5 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseDenomOwner() {
  return {
    address: "",
    balance: void 0
  };
}
var DenomOwner = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
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
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.balance !== void 0 && (obj.balance = message.balance ? Coin.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address5;
    const message = createBaseDenomOwner();
    message.address = (_object$address5 = object.address) !== null && _object$address5 !== void 0 ? _object$address5 : "";
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  }
};
function createBaseQueryDenomOwnersResponse() {
  return {
    denomOwners: [],
    pagination: void 0
  };
}
var QueryDenomOwnersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
      denomOwners: Array.isArray(object === null || object === void 0 ? void 0 : object.denomOwners) ? object.denomOwners.map((e) => DenomOwner.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map((e) => e ? DenomOwner.toJSON(e) : void 0);
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$denomOwners;
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = ((_object$denomOwners = object.denomOwners) === null || _object$denomOwners === void 0 ? void 0 : _object$denomOwners.map((e) => DenomOwner.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySendEnabledRequest() {
  return {
    denoms: [],
    pagination: void 0
  };
}
var QuerySendEnabledRequest = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.denoms) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
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
      denoms: Array.isArray(object === null || object === void 0 ? void 0 : object.denoms) ? object.denoms.map((e) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$denoms;
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = ((_object$denoms = object.denoms) === null || _object$denoms === void 0 ? void 0 : _object$denoms.map((e) => e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQuerySendEnabledResponse() {
  return {
    sendEnabled: [],
    pagination: void 0
  };
}
var QuerySendEnabledResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
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
      sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled) ? object.sendEnabled.map((e) => SendEnabled.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) => e ? SendEnabled.toJSON(e) : void 0);
    } else {
      obj.sendEnabled = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$sendEnabled;
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = ((_object$sendEnabled = object.sendEnabled) === null || _object$sendEnabled === void 0 ? void 0 : _object$sendEnabled.map((e) => SendEnabled.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  balance(request) {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then((data2) => QueryBalanceResponse.decode(new _m02.Reader(data2)));
  }
  allBalances(request) {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then((data2) => QueryAllBalancesResponse.decode(new _m02.Reader(data2)));
  }
  spendableBalances(request) {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then((data2) => QuerySpendableBalancesResponse.decode(new _m02.Reader(data2)));
  }
  spendableBalanceByDenom(request) {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then((data2) => QuerySpendableBalanceByDenomResponse.decode(new _m02.Reader(data2)));
  }
  totalSupply(request = {
    pagination: void 0
  }) {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then((data2) => QueryTotalSupplyResponse.decode(new _m02.Reader(data2)));
  }
  supplyOf(request) {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then((data2) => QuerySupplyOfResponse.decode(new _m02.Reader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  denomMetadata(request) {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then((data2) => QueryDenomMetadataResponse.decode(new _m02.Reader(data2)));
  }
  denomsMetadata(request = {
    pagination: void 0
  }) {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then((data2) => QueryDenomsMetadataResponse.decode(new _m02.Reader(data2)));
  }
  denomOwners(request) {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then((data2) => QueryDenomOwnersResponse.decode(new _m02.Reader(data2)));
  }
  sendEnabled(request) {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then((data2) => QuerySendEnabledResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request) {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request) {
      return queryService.denomOwners(request);
    },
    sendEnabled(request) {
      return queryService.sendEnabled(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-6KOJOPAE.js.map
