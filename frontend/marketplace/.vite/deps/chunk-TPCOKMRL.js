import {
  DelegationResponse,
  HistoricalInfo,
  Params,
  Pool,
  RedelegationResponse,
  UnbondingDelegation,
  Validator
} from "./chunk-TFL62YBX.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryDelegationRequest: () => QueryDelegationRequest,
  QueryDelegationResponse: () => QueryDelegationResponse,
  QueryDelegatorDelegationsRequest: () => QueryDelegatorDelegationsRequest,
  QueryDelegatorDelegationsResponse: () => QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest: () => QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorUnbondingDelegationsResponse: () => QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorRequest: () => QueryDelegatorValidatorRequest,
  QueryDelegatorValidatorResponse: () => QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsRequest: () => QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse: () => QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoRequest: () => QueryHistoricalInfoRequest,
  QueryHistoricalInfoResponse: () => QueryHistoricalInfoResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryPoolRequest: () => QueryPoolRequest,
  QueryPoolResponse: () => QueryPoolResponse,
  QueryRedelegationsRequest: () => QueryRedelegationsRequest,
  QueryRedelegationsResponse: () => QueryRedelegationsResponse,
  QueryUnbondingDelegationRequest: () => QueryUnbondingDelegationRequest,
  QueryUnbondingDelegationResponse: () => QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsRequest: () => QueryValidatorDelegationsRequest,
  QueryValidatorDelegationsResponse: () => QueryValidatorDelegationsResponse,
  QueryValidatorRequest: () => QueryValidatorRequest,
  QueryValidatorResponse: () => QueryValidatorResponse,
  QueryValidatorUnbondingDelegationsRequest: () => QueryValidatorUnbondingDelegationsRequest,
  QueryValidatorUnbondingDelegationsResponse: () => QueryValidatorUnbondingDelegationsResponse,
  QueryValidatorsRequest: () => QueryValidatorsRequest,
  QueryValidatorsResponse: () => QueryValidatorsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryValidatorsRequest() {
  return {
    status: "",
    pagination: void 0
  };
}
var QueryValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.status !== void 0 && (obj.status = message.status);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$status;
    const message = createBaseQueryValidatorsRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorsResponse() {
  return {
    validators: [],
    pagination: void 0
  };
}
var QueryValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseQueryValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map((e) => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorRequest() {
  return {
    validatorAddr: ""
  };
}
var QueryValidatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr;
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = (_object$validatorAddr = object.validatorAddr) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  }
};
function createBaseQueryValidatorResponse() {
  return {
    validator: void 0
  };
}
var QueryValidatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.validator !== void 0 && (obj.validator = message.validator ? Validator.toJSON(message.validator) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    return message;
  }
};
function createBaseQueryValidatorDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: void 0
  };
}
var QueryValidatorDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr2;
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = (_object$validatorAddr2 = object.validatorAddr) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: void 0
  };
}
var QueryValidatorDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
      delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses) ? object.delegationResponses.map((e) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : void 0);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegationRes;
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = ((_object$delegationRes = object.delegationResponses) === null || _object$delegationRes === void 0 ? void 0 : _object$delegationRes.map((e) => DelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: void 0
  };
}
var QueryValidatorUnbondingDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr3;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = (_object$validatorAddr3 = object.validatorAddr) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: void 0
  };
}
var QueryValidatorUnbondingDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
      unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses) ? object.unbondingResponses.map((e) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : void 0);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$unbondingResp;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = ((_object$unbondingResp = object.unbondingResponses) === null || _object$unbondingResp === void 0 ? void 0 : _object$unbondingResp.map((e) => UnbondingDelegation.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryDelegationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr4;
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = (_object$delegatorAddr = object.delegatorAddr) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddr = (_object$validatorAddr4 = object.validatorAddr) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    return message;
  }
};
function createBaseQueryDelegationResponse() {
  return {
    delegationResponse: void 0
  };
}
var QueryDelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegationResponse !== void 0) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
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
      delegationResponse: isSet(object.delegationResponse) ? DelegationResponse.fromJSON(object.delegationResponse) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegationResponse !== void 0 && (obj.delegationResponse = message.delegationResponse ? DelegationResponse.toJSON(message.delegationResponse) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== void 0 && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : void 0;
    return message;
  }
};
function createBaseQueryUnbondingDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryUnbondingDelegationRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr5;
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = (_object$delegatorAddr2 = object.delegatorAddr) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddr = (_object$validatorAddr5 = object.validatorAddr) !== null && _object$validatorAddr5 !== void 0 ? _object$validatorAddr5 : "";
    return message;
  }
};
function createBaseQueryUnbondingDelegationResponse() {
  return {
    unbond: void 0
  };
}
var QueryUnbondingDelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.unbond !== void 0) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
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
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.unbond !== void 0 && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== void 0 && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
var QueryDelegatorDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr3;
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr3 = object.delegatorAddr) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: void 0
  };
}
var QueryDelegatorDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
      delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses) ? object.delegationResponses.map((e) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : void 0);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegationRes2;
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = ((_object$delegationRes2 = object.delegationResponses) === null || _object$delegationRes2 === void 0 ? void 0 : _object$delegationRes2.map((e) => DelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
var QueryDelegatorUnbondingDelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr4;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr4 = object.delegatorAddr) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: void 0
  };
}
var QueryDelegatorUnbondingDelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
      unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses) ? object.unbondingResponses.map((e) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : void 0);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$unbondingResp2;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = ((_object$unbondingResp2 = object.unbondingResponses) === null || _object$unbondingResp2 === void 0 ? void 0 : _object$unbondingResp2.map((e) => UnbondingDelegation.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryRedelegationsRequest() {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: void 0
  };
}
var QueryRedelegationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
      dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== void 0 && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== void 0 && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr5, _object$srcValidatorA, _object$dstValidatorA;
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr5 = object.delegatorAddr) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.srcValidatorAddr = (_object$srcValidatorA = object.srcValidatorAddr) !== null && _object$srcValidatorA !== void 0 ? _object$srcValidatorA : "";
    message.dstValidatorAddr = (_object$dstValidatorA = object.dstValidatorAddr) !== null && _object$dstValidatorA !== void 0 ? _object$dstValidatorA : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryRedelegationsResponse() {
  return {
    redelegationResponses: [],
    pagination: void 0
  };
}
var QueryRedelegationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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
      redelegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegationResponses) ? object.redelegationResponses.map((e) => RedelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) => e ? RedelegationResponse.toJSON(e) : void 0);
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$redelegationR;
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = ((_object$redelegationR = object.redelegationResponses) === null || _object$redelegationR === void 0 ? void 0 : _object$redelegationR.map((e) => RedelegationResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
var QueryDelegatorValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr6;
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = (_object$delegatorAddr6 = object.delegatorAddr) !== null && _object$delegatorAddr6 !== void 0 ? _object$delegatorAddr6 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: [],
    pagination: void 0
  };
}
var QueryDelegatorValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validators2;
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map((e) => Validator.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegatorValidatorRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryDelegatorValidatorRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddr !== void 0 && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== void 0 && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr7, _object$validatorAddr6;
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = (_object$delegatorAddr7 = object.delegatorAddr) !== null && _object$delegatorAddr7 !== void 0 ? _object$delegatorAddr7 : "";
    message.validatorAddr = (_object$validatorAddr6 = object.validatorAddr) !== null && _object$validatorAddr6 !== void 0 ? _object$validatorAddr6 : "";
    return message;
  }
};
function createBaseQueryDelegatorValidatorResponse() {
  return {
    validator: void 0
  };
}
var QueryDelegatorValidatorResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validator !== void 0) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
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
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.validator !== void 0 && (obj.validator = message.validator ? Validator.toJSON(message.validator) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== void 0 && object.validator !== null ? Validator.fromPartial(object.validator) : void 0;
    return message;
  }
};
function createBaseQueryHistoricalInfoRequest() {
  return {
    height: BigInt("0")
  };
}
var QueryHistoricalInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
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
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryHistoricalInfoResponse() {
  return {
    hist: void 0
  };
}
var QueryHistoricalInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hist !== void 0) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
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
      hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.hist !== void 0 && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== void 0 && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : void 0;
    return message;
  }
};
function createBaseQueryPoolRequest() {
  return {};
}
var QueryPoolRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
    const message = createBaseQueryPoolRequest();
    return message;
  }
};
function createBaseQueryPoolResponse() {
  return {
    pool: void 0
  };
}
var QueryPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pool !== void 0) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
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
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.pool !== void 0 && (obj.pool = message.pool ? Pool.toJSON(message.pool) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== void 0 && object.pool !== null ? Pool.fromPartial(object.pool) : void 0;
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  validators(request) {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then((data2) => QueryValidatorsResponse.decode(new _m02.Reader(data2)));
  }
  validator(request) {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then((data2) => QueryValidatorResponse.decode(new _m02.Reader(data2)));
  }
  validatorDelegations(request) {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then((data2) => QueryValidatorDelegationsResponse.decode(new _m02.Reader(data2)));
  }
  validatorUnbondingDelegations(request) {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then((data2) => QueryValidatorUnbondingDelegationsResponse.decode(new _m02.Reader(data2)));
  }
  delegation(request) {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then((data2) => QueryDelegationResponse.decode(new _m02.Reader(data2)));
  }
  unbondingDelegation(request) {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then((data2) => QueryUnbondingDelegationResponse.decode(new _m02.Reader(data2)));
  }
  delegatorDelegations(request) {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then((data2) => QueryDelegatorDelegationsResponse.decode(new _m02.Reader(data2)));
  }
  delegatorUnbondingDelegations(request) {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then((data2) => QueryDelegatorUnbondingDelegationsResponse.decode(new _m02.Reader(data2)));
  }
  redelegations(request) {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then((data2) => QueryRedelegationsResponse.decode(new _m02.Reader(data2)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data2) => QueryDelegatorValidatorsResponse.decode(new _m02.Reader(data2)));
  }
  delegatorValidator(request) {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then((data2) => QueryDelegatorValidatorResponse.decode(new _m02.Reader(data2)));
  }
  historicalInfo(request) {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then((data2) => QueryHistoricalInfoResponse.decode(new _m02.Reader(data2)));
  }
  pool(request = {}) {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then((data2) => QueryPoolResponse.decode(new _m02.Reader(data2)));
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request) {
      return queryService.validators(request);
    },
    validator(request) {
      return queryService.validator(request);
    },
    validatorDelegations(request) {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations(request) {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation(request) {
      return queryService.delegation(request);
    },
    unbondingDelegation(request) {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations(request) {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations(request) {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations(request) {
      return queryService.redelegations(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator(request) {
      return queryService.delegatorValidator(request);
    },
    historicalInfo(request) {
      return queryService.historicalInfo(request);
    },
    pool(request) {
      return queryService.pool(request);
    },
    params(request) {
      return queryService.params(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-TPCOKMRL.js.map
