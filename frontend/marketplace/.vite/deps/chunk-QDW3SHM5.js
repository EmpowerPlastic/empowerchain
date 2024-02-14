import {
  CommissionRates,
  Description,
  Params
} from "./chunk-TFL62YBX.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgBeginRedelegate: () => MsgBeginRedelegate,
  MsgBeginRedelegateResponse: () => MsgBeginRedelegateResponse,
  MsgCancelUnbondingDelegation: () => MsgCancelUnbondingDelegation,
  MsgCancelUnbondingDelegationResponse: () => MsgCancelUnbondingDelegationResponse,
  MsgCreateValidator: () => MsgCreateValidator,
  MsgCreateValidatorResponse: () => MsgCreateValidatorResponse,
  MsgDelegate: () => MsgDelegate,
  MsgDelegateResponse: () => MsgDelegateResponse,
  MsgEditValidator: () => MsgEditValidator,
  MsgEditValidatorResponse: () => MsgEditValidatorResponse,
  MsgUndelegate: () => MsgUndelegate,
  MsgUndelegateResponse: () => MsgUndelegateResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgCreateValidator() {
  return {
    description: void 0,
    commission: void 0,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: void 0,
    value: void 0
  };
}
var MsgCreateValidator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.description !== void 0) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== void 0) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== void 0) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== void 0) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.delegatorAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
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
      description: isSet(object.description) ? Description.fromJSON(object.description) : void 0,
      commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : void 0,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : void 0,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.description !== void 0 && (obj.description = message.description ? Description.toJSON(message.description) : void 0);
    message.commission !== void 0 && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : void 0);
    message.minSelfDelegation !== void 0 && (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== void 0 && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : void 0);
    message.value !== void 0 && (obj.value = message.value ? Coin.toJSON(message.value) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$minSelfDelega, _object$delegatorAddr, _object$validatorAddr;
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== void 0 && object.description !== null ? Description.fromPartial(object.description) : void 0;
    message.commission = object.commission !== void 0 && object.commission !== null ? CommissionRates.fromPartial(object.commission) : void 0;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) !== null && _object$minSelfDelega !== void 0 ? _object$minSelfDelega : "";
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.pubkey = object.pubkey !== void 0 && object.pubkey !== null ? Any.fromPartial(object.pubkey) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? Coin.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseMsgCreateValidatorResponse() {
  return {};
}
var MsgCreateValidatorResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  }
};
function createBaseMsgEditValidator() {
  return {
    description: void 0,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}
var MsgEditValidator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.description !== void 0) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.commissionRate = reader.string();
          break;
        case 4:
          message.minSelfDelegation = reader.string();
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
      description: isSet(object.description) ? Description.fromJSON(object.description) : void 0,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.description !== void 0 && (obj.description = message.description ? Description.toJSON(message.description) : void 0);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== void 0 && (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== void 0 && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr2, _object$commissionRat, _object$minSelfDelega2;
    const message = createBaseMsgEditValidator();
    message.description = object.description !== void 0 && object.description !== null ? Description.fromPartial(object.description) : void 0;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.commissionRate = (_object$commissionRat = object.commissionRate) !== null && _object$commissionRat !== void 0 ? _object$commissionRat : "";
    message.minSelfDelegation = (_object$minSelfDelega2 = object.minSelfDelegation) !== null && _object$minSelfDelega2 !== void 0 ? _object$minSelfDelega2 : "";
    return message;
  }
};
function createBaseMsgEditValidatorResponse() {
  return {};
}
var MsgEditValidatorResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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
    const message = createBaseMsgEditValidatorResponse();
    return message;
  }
};
function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: void 0
  };
}
var MsgDelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.amount !== void 0 && (obj.amount = message.amount ? Coin.toJSON(message.amount) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr3;
    const message = createBaseMsgDelegate();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    return message;
  }
};
function createBaseMsgDelegateResponse() {
  return {};
}
var MsgDelegateResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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
    const message = createBaseMsgDelegateResponse();
    return message;
  }
};
function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: void 0
  };
}
var MsgBeginRedelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== void 0 && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== void 0 && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== void 0 && (obj.amount = message.amount ? Coin.toJSON(message.amount) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorSrcA, _object$validatorDstA;
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    return message;
  }
};
function createBaseMsgBeginRedelegateResponse() {
  return {
    completionTime: void 0
  };
}
var MsgBeginRedelegateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.completionTime !== void 0 && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$completionTim;
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = (_object$completionTim = object.completionTime) !== null && _object$completionTim !== void 0 ? _object$completionTim : void 0;
    return message;
  }
};
function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: void 0
  };
}
var MsgUndelegate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
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
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.amount !== void 0 && (obj.amount = message.amount ? Coin.toJSON(message.amount) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr4;
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    return message;
  }
};
function createBaseMsgUndelegateResponse() {
  return {
    completionTime: void 0
  };
}
var MsgUndelegateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.completionTime !== void 0 && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$completionTim2;
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = (_object$completionTim2 = object.completionTime) !== null && _object$completionTim2 !== void 0 ? _object$completionTim2 : void 0;
    return message;
  }
};
function createBaseMsgCancelUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: void 0,
    creationHeight: BigInt("0")
  };
}
var MsgCancelUnbondingDelegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.creationHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creationHeight = BigInt(reader.int64().toString());
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
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : void 0,
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.amount !== void 0 && (obj.amount = message.amount ? Coin.toJSON(message.amount) : void 0);
    message.creationHeight !== void 0 && (obj.creationHeight = (message.creationHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr5, _object$validatorAddr5;
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = (_object$delegatorAddr5 = object.delegatorAddress) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.validatorAddress = (_object$validatorAddr5 = object.validatorAddress) !== null && _object$validatorAddr5 !== void 0 ? _object$validatorAddr5 : "";
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgCancelUnbondingDelegationResponse() {
  return {};
}
var MsgCancelUnbondingDelegationResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();
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
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createValidator(request) {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then((data2) => MsgCreateValidatorResponse.decode(new _m02.Reader(data2)));
  }
  editValidator(request) {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then((data2) => MsgEditValidatorResponse.decode(new _m02.Reader(data2)));
  }
  delegate(request) {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then((data2) => MsgDelegateResponse.decode(new _m02.Reader(data2)));
  }
  beginRedelegate(request) {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then((data2) => MsgBeginRedelegateResponse.decode(new _m02.Reader(data2)));
  }
  undelegate(request) {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then((data2) => MsgUndelegateResponse.decode(new _m02.Reader(data2)));
  }
  cancelUnbondingDelegation(request) {
    const data = MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
    return promise.then((data2) => MsgCancelUnbondingDelegationResponse.decode(new _m02.Reader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgUpdateParams,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-QDW3SHM5.js.map
