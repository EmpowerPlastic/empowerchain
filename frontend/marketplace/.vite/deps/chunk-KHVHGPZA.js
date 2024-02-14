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
  fromJsonTimestamp,
  fromTimestamp,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryAllowanceRequest: () => QueryAllowanceRequest,
  QueryAllowanceResponse: () => QueryAllowanceResponse,
  QueryAllowancesByGranterRequest: () => QueryAllowancesByGranterRequest,
  QueryAllowancesByGranterResponse: () => QueryAllowancesByGranterResponse,
  QueryAllowancesRequest: () => QueryAllowancesRequest,
  QueryAllowancesResponse: () => QueryAllowancesResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/feegrant.js
var feegrant_exports = {};
__export(feegrant_exports, {
  AllowedMsgAllowance: () => AllowedMsgAllowance,
  BasicAllowance: () => BasicAllowance,
  Grant: () => Grant,
  PeriodicAllowance: () => PeriodicAllowance
});
var _m0 = __toESM(require_minimal());
function createBaseBasicAllowance() {
  return {
    spendLimit: [],
    expiration: void 0
  };
}
var BasicAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.spendLimit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spendLimit) ? object.spendLimit.map((e) => Coin.fromJSON(e)) : [],
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.spendLimit = [];
    }
    message.expiration !== void 0 && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$spendLimit, _object$expiration;
    const message = createBaseBasicAllowance();
    message.spendLimit = ((_object$spendLimit = object.spendLimit) === null || _object$spendLimit === void 0 ? void 0 : _object$spendLimit.map((e) => Coin.fromPartial(e))) || [];
    message.expiration = (_object$expiration = object.expiration) !== null && _object$expiration !== void 0 ? _object$expiration : void 0;
    return message;
  }
};
function createBasePeriodicAllowance() {
  return {
    basic: void 0,
    period: void 0,
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: void 0
  };
}
var PeriodicAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.basic !== void 0) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== void 0) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== void 0) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : void 0,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : void 0,
      periodSpendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.periodSpendLimit) ? object.periodSpendLimit.map((e) => Coin.fromJSON(e)) : [],
      periodCanSpend: Array.isArray(object === null || object === void 0 ? void 0 : object.periodCanSpend) ? object.periodCanSpend.map((e) => Coin.fromJSON(e)) : [],
      periodReset: isSet(object.periodReset) ? fromJsonTimestamp(object.periodReset) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.basic !== void 0 && (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : void 0);
    message.period !== void 0 && (obj.period = message.period ? Duration.toJSON(message.period) : void 0);
    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.periodSpendLimit = [];
    }
    if (message.periodCanSpend) {
      obj.periodCanSpend = message.periodCanSpend.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.periodCanSpend = [];
    }
    message.periodReset !== void 0 && (obj.periodReset = message.periodReset.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$periodSpendLi, _object$periodCanSpen, _object$periodReset;
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== void 0 && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : void 0;
    message.period = object.period !== void 0 && object.period !== null ? Duration.fromPartial(object.period) : void 0;
    message.periodSpendLimit = ((_object$periodSpendLi = object.periodSpendLimit) === null || _object$periodSpendLi === void 0 ? void 0 : _object$periodSpendLi.map((e) => Coin.fromPartial(e))) || [];
    message.periodCanSpend = ((_object$periodCanSpen = object.periodCanSpend) === null || _object$periodCanSpen === void 0 ? void 0 : _object$periodCanSpen.map((e) => Coin.fromPartial(e))) || [];
    message.periodReset = (_object$periodReset = object.periodReset) !== null && _object$periodReset !== void 0 ? _object$periodReset : void 0;
    return message;
  }
};
function createBaseAllowedMsgAllowance() {
  return {
    allowance: void 0,
    allowedMessages: []
  };
}
var AllowedMsgAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.allowance !== void 0) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowedMessages.push(reader.string());
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
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : void 0,
      allowedMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowedMessages) ? object.allowedMessages.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.allowance !== void 0 && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : void 0);
    if (message.allowedMessages) {
      obj.allowedMessages = message.allowedMessages.map((e) => e);
    } else {
      obj.allowedMessages = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$allowedMessag;
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Any.fromPartial(object.allowance) : void 0;
    message.allowedMessages = ((_object$allowedMessag = object.allowedMessages) === null || _object$allowedMessag === void 0 ? void 0 : _object$allowedMessag.map((e) => e)) || [];
    return message;
  }
};
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: void 0
  };
}
var Grant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== void 0) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
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
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.allowance !== void 0 && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Any.fromPartial(object.allowance) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryAllowanceRequest() {
  return {
    granter: "",
    grantee: ""
  };
}
var QueryAllowanceRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
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
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseQueryAllowanceRequest();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    return message;
  }
};
function createBaseQueryAllowanceResponse() {
  return {
    allowance: void 0
  };
}
var QueryAllowanceResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.allowance !== void 0) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
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
      allowance: isSet(object.allowance) ? Grant.fromJSON(object.allowance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.allowance !== void 0 && (obj.allowance = message.allowance ? Grant.toJSON(message.allowance) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllowanceResponse();
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Grant.fromPartial(object.allowance) : void 0;
    return message;
  }
};
function createBaseQueryAllowancesRequest() {
  return {
    grantee: "",
    pagination: void 0
  };
}
var QueryAllowancesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
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
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$grantee2;
    const message = createBaseQueryAllowancesRequest();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllowancesResponse() {
  return {
    allowances: [],
    pagination: void 0
  };
}
var QueryAllowancesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.allowances) {
      Grant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
      allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map((e) => e ? Grant.toJSON(e) : void 0);
    } else {
      obj.allowances = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$allowances;
    const message = createBaseQueryAllowancesResponse();
    message.allowances = ((_object$allowances = object.allowances) === null || _object$allowances === void 0 ? void 0 : _object$allowances.map((e) => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllowancesByGranterRequest() {
  return {
    granter: "",
    pagination: void 0
  };
}
var QueryAllowancesByGranterRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
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
      granter: isSet(object.granter) ? String(object.granter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$granter2;
    const message = createBaseQueryAllowancesByGranterRequest();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryAllowancesByGranterResponse() {
  return {
    allowances: [],
    pagination: void 0
  };
}
var QueryAllowancesByGranterResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.allowances) {
      Grant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
      allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map((e) => e ? Grant.toJSON(e) : void 0);
    } else {
      obj.allowances = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$allowances2;
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = ((_object$allowances2 = object.allowances) === null || _object$allowances2 === void 0 ? void 0 : _object$allowances2.map((e) => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  allowance(request) {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then((data2) => QueryAllowanceResponse.decode(new _m03.Reader(data2)));
  }
  allowances(request) {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then((data2) => QueryAllowancesResponse.decode(new _m03.Reader(data2)));
  }
  allowancesByGranter(request) {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then((data2) => QueryAllowancesByGranterResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request) {
      return queryService.allowance(request);
    },
    allowances(request) {
      return queryService.allowances(request);
    },
    allowancesByGranter(request) {
      return queryService.allowancesByGranter(request);
    }
  };
};

export {
  Grant,
  feegrant_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-KHVHGPZA.js.map
