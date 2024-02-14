import {
  DelegationDelegatorReward,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent
} from "./chunk-N6SVBLOC.js";
import {
  DecCoin
} from "./chunk-S5OVV5FT.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/distribution/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/distribution/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryCommunityPoolRequest: () => QueryCommunityPoolRequest,
  QueryCommunityPoolResponse: () => QueryCommunityPoolResponse,
  QueryDelegationRewardsRequest: () => QueryDelegationRewardsRequest,
  QueryDelegationRewardsResponse: () => QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest: () => QueryDelegationTotalRewardsRequest,
  QueryDelegationTotalRewardsResponse: () => QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest: () => QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse: () => QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest: () => QueryDelegatorWithdrawAddressRequest,
  QueryDelegatorWithdrawAddressResponse: () => QueryDelegatorWithdrawAddressResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryValidatorCommissionRequest: () => QueryValidatorCommissionRequest,
  QueryValidatorCommissionResponse: () => QueryValidatorCommissionResponse,
  QueryValidatorDistributionInfoRequest: () => QueryValidatorDistributionInfoRequest,
  QueryValidatorDistributionInfoResponse: () => QueryValidatorDistributionInfoResponse,
  QueryValidatorOutstandingRewardsRequest: () => QueryValidatorOutstandingRewardsRequest,
  QueryValidatorOutstandingRewardsResponse: () => QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesRequest: () => QueryValidatorSlashesRequest,
  QueryValidatorSlashesResponse: () => QueryValidatorSlashesResponse
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
function createBaseQueryValidatorDistributionInfoRequest() {
  return {
    validatorAddress: ""
  };
}
var QueryValidatorDistributionInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  }
};
function createBaseQueryValidatorDistributionInfoResponse() {
  return {
    operatorAddress: "",
    selfBondRewards: [],
    commission: []
  };
}
var QueryValidatorDistributionInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.selfBondRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      selfBondRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.selfBondRewards) ? object.selfBondRewards.map((e) => DecCoin.fromJSON(e)) : [],
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.operatorAddress !== void 0 && (obj.operatorAddress = message.operatorAddress);
    if (message.selfBondRewards) {
      obj.selfBondRewards = message.selfBondRewards.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.selfBondRewards = [];
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$operatorAddre, _object$selfBondRewar, _object$commission;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = (_object$operatorAddre = object.operatorAddress) !== null && _object$operatorAddre !== void 0 ? _object$operatorAddre : "";
    message.selfBondRewards = ((_object$selfBondRewar = object.selfBondRewards) === null || _object$selfBondRewar === void 0 ? void 0 : _object$selfBondRewar.map((e) => DecCoin.fromPartial(e))) || [];
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
  return {
    validatorAddress: ""
  };
}
var QueryValidatorOutstandingRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr2;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    return message;
  }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
  return {
    rewards: void 0
  };
}
var QueryValidatorOutstandingRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rewards !== void 0) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
      rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.rewards !== void 0 && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== void 0 && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : void 0;
    return message;
  }
};
function createBaseQueryValidatorCommissionRequest() {
  return {
    validatorAddress: ""
  };
}
var QueryValidatorCommissionRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr3;
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    return message;
  }
};
function createBaseQueryValidatorCommissionResponse() {
  return {
    commission: void 0
  };
}
var QueryValidatorCommissionResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.commission !== void 0) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.commission !== void 0 && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== void 0 && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : void 0;
    return message;
  }
};
function createBaseQueryValidatorSlashesRequest() {
  return {
    validatorAddress: "",
    startingHeight: BigInt("0"),
    endingHeight: BigInt("0"),
    pagination: void 0
  };
}
var QueryValidatorSlashesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.startingHeight.toString()));
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.endingHeight.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.endingHeight = BigInt(reader.uint64().toString());
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      startingHeight: isSet(object.startingHeight) ? BigInt(object.startingHeight.toString()) : BigInt("0"),
      endingHeight: isSet(object.endingHeight) ? BigInt(object.endingHeight.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== void 0 && (obj.startingHeight = (message.startingHeight || BigInt("0")).toString());
    message.endingHeight !== void 0 && (obj.endingHeight = (message.endingHeight || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr4;
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    message.startingHeight = object.startingHeight !== void 0 && object.startingHeight !== null ? BigInt(object.startingHeight.toString()) : BigInt("0");
    message.endingHeight = object.endingHeight !== void 0 && object.endingHeight !== null ? BigInt(object.endingHeight.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryValidatorSlashesResponse() {
  return {
    slashes: [],
    pagination: void 0
  };
}
var QueryValidatorSlashesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
      slashes: Array.isArray(object === null || object === void 0 ? void 0 : object.slashes) ? object.slashes.map((e) => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => e ? ValidatorSlashEvent.toJSON(e) : void 0);
    } else {
      obj.slashes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$slashes;
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = ((_object$slashes = object.slashes) === null || _object$slashes === void 0 ? void 0 : _object$slashes.map((e) => ValidatorSlashEvent.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDelegationRewardsRequest() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var QueryDelegationRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr5;
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr5 = object.validatorAddress) !== null && _object$validatorAddr5 !== void 0 ? _object$validatorAddr5 : "";
    return message;
  }
};
function createBaseQueryDelegationRewardsResponse() {
  return {
    rewards: []
  };
}
var QueryDelegationRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$rewards;
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryDelegationTotalRewardsRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegationTotalRewardsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr2;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    return message;
  }
};
function createBaseQueryDelegationTotalRewardsResponse() {
  return {
    rewards: [],
    total: []
  };
}
var QueryDelegationTotalRewardsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => DelegationDelegatorReward.fromJSON(e)) : [],
      total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DelegationDelegatorReward.toJSON(e) : void 0);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$rewards2, _object$total;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map((e) => DelegationDelegatorReward.fromPartial(e))) || [];
    message.total = ((_object$total = object.total) === null || _object$total === void 0 ? void 0 : _object$total.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegatorValidatorsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
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
          message.delegatorAddress = reader.string();
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr3;
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    return message;
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: []
  };
}
var QueryDelegatorValidatorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validators) {
      writer.uint32(10).string(v);
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
          message.validators.push(reader.string());
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map((e) => e)) || [];
    return message;
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegatorWithdrawAddressRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr4;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    return message;
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
  return {
    withdrawAddress: ""
  };
}
var QueryDelegatorWithdrawAddressResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
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
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.withdrawAddress !== void 0 && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$withdrawAddre;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = (_object$withdrawAddre = object.withdrawAddress) !== null && _object$withdrawAddre !== void 0 ? _object$withdrawAddre : "";
    return message;
  }
};
function createBaseQueryCommunityPoolRequest() {
  return {};
}
var QueryCommunityPoolRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  }
};
function createBaseQueryCommunityPoolResponse() {
  return {
    pool: []
  };
}
var QueryCommunityPoolResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
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
      pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool) ? object.pool.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$pool;
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = ((_object$pool = object.pool) === null || _object$pool === void 0 ? void 0 : _object$pool.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/distribution/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  validatorDistributionInfo(request) {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then((data2) => QueryValidatorDistributionInfoResponse.decode(new _m02.Reader(data2)));
  }
  validatorOutstandingRewards(request) {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then((data2) => QueryValidatorOutstandingRewardsResponse.decode(new _m02.Reader(data2)));
  }
  validatorCommission(request) {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data2) => QueryValidatorCommissionResponse.decode(new _m02.Reader(data2)));
  }
  validatorSlashes(request) {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data2) => QueryValidatorSlashesResponse.decode(new _m02.Reader(data2)));
  }
  delegationRewards(request) {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data2) => QueryDelegationRewardsResponse.decode(new _m02.Reader(data2)));
  }
  delegationTotalRewards(request) {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data2) => QueryDelegationTotalRewardsResponse.decode(new _m02.Reader(data2)));
  }
  delegatorValidators(request) {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data2) => QueryDelegatorValidatorsResponse.decode(new _m02.Reader(data2)));
  }
  delegatorWithdrawAddress(request) {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data2) => QueryDelegatorWithdrawAddressResponse.decode(new _m02.Reader(data2)));
  }
  communityPool(request = {}) {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data2) => QueryCommunityPoolResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    validatorDistributionInfo(request) {
      return queryService.validatorDistributionInfo(request);
    },
    validatorOutstandingRewards(request) {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission(request) {
      return queryService.validatorCommission(request);
    },
    validatorSlashes(request) {
      return queryService.validatorSlashes(request);
    },
    delegationRewards(request) {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards(request) {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress(request) {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool(request) {
      return queryService.communityPool(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-7FKGN4LL.js.map
