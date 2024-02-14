import {
  BaseAccount
} from "./chunk-V33XUOV5.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/vesting/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m03 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/vesting/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgCreatePeriodicVestingAccount: () => MsgCreatePeriodicVestingAccount,
  MsgCreatePeriodicVestingAccountResponse: () => MsgCreatePeriodicVestingAccountResponse,
  MsgCreatePermanentLockedAccount: () => MsgCreatePermanentLockedAccount,
  MsgCreatePermanentLockedAccountResponse: () => MsgCreatePermanentLockedAccountResponse,
  MsgCreateVestingAccount: () => MsgCreateVestingAccount,
  MsgCreateVestingAccountResponse: () => MsgCreateVestingAccountResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/vesting/v1beta1/vesting.js
var vesting_exports = {};
__export(vesting_exports, {
  BaseVestingAccount: () => BaseVestingAccount,
  ContinuousVestingAccount: () => ContinuousVestingAccount,
  DelayedVestingAccount: () => DelayedVestingAccount,
  Period: () => Period,
  PeriodicVestingAccount: () => PeriodicVestingAccount,
  PermanentLockedAccount: () => PermanentLockedAccount
});
var _m0 = __toESM(require_minimal());
function createBaseBaseVestingAccount() {
  return {
    baseAccount: void 0,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt("0")
  };
}
var BaseVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseAccount !== void 0) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(import_long.default.fromString(message.endTime.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = BigInt(reader.int64().toString());
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
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : void 0,
      originalVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.originalVesting) ? object.originalVesting.map((e) => Coin.fromJSON(e)) : [],
      delegatedFree: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedFree) ? object.delegatedFree.map((e) => Coin.fromJSON(e)) : [],
      delegatedVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedVesting) ? object.delegatedVesting.map((e) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseAccount !== void 0 && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : void 0);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== void 0 && (obj.endTime = (message.endTime || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$originalVesti, _object$delegatedFree, _object$delegatedVest;
    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== void 0 && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : void 0;
    message.originalVesting = ((_object$originalVesti = object.originalVesting) === null || _object$originalVesti === void 0 ? void 0 : _object$originalVesti.map((e) => Coin.fromPartial(e))) || [];
    message.delegatedFree = ((_object$delegatedFree = object.delegatedFree) === null || _object$delegatedFree === void 0 ? void 0 : _object$delegatedFree.map((e) => Coin.fromPartial(e))) || [];
    message.delegatedVesting = ((_object$delegatedVest = object.delegatedVesting) === null || _object$delegatedVest === void 0 ? void 0 : _object$delegatedVest.map((e) => Coin.fromPartial(e))) || [];
    message.endTime = object.endTime !== void 0 && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt("0");
    return message;
  }
};
function createBaseContinuousVestingAccount() {
  return {
    baseVestingAccount: void 0,
    startTime: BigInt("0")
  };
}
var ContinuousVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.startTime.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = BigInt(reader.int64().toString());
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : void 0,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== void 0 && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : void 0);
    message.startTime !== void 0 && (obj.startTime = (message.startTime || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt("0");
    return message;
  }
};
function createBaseDelayedVestingAccount() {
  return {
    baseVestingAccount: void 0
  };
}
var DelayedVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== void 0 && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    return message;
  }
};
function createBasePeriod() {
  return {
    length: BigInt("0"),
    amount: []
  };
}
var Period = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.length.toString()));
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = BigInt(reader.int64().toString());
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt("0"),
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.length !== void 0 && (obj.length = (message.length || BigInt("0")).toString());
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$amount;
    const message = createBasePeriod();
    message.length = object.length !== void 0 && object.length !== null ? BigInt(object.length.toString()) : BigInt("0");
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBasePeriodicVestingAccount() {
  return {
    baseVestingAccount: void 0,
    startTime: BigInt("0"),
    vestingPeriods: []
  };
}
var PeriodicVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.startTime.toString()));
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = BigInt(reader.int64().toString());
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : void 0,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt("0"),
      vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods) ? object.vestingPeriods.map((e) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== void 0 && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : void 0);
    message.startTime !== void 0 && (obj.startTime = (message.startTime || BigInt("0")).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => e ? Period.toJSON(e) : void 0);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$vestingPeriod;
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt("0");
    message.vestingPeriods = ((_object$vestingPeriod = object.vestingPeriods) === null || _object$vestingPeriod === void 0 ? void 0 : _object$vestingPeriod.map((e) => Period.fromPartial(e))) || [];
    return message;
  }
};
function createBasePermanentLockedAccount() {
  return {
    baseVestingAccount: void 0
  };
}
var PermanentLockedAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== void 0 && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/vesting/v1beta1/tx.js
var _m02 = __toESM(require_minimal());
function createBaseMsgCreateVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: BigInt("0"),
    delayed: false
  };
}
var MsgCreateVestingAccount = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.endTime.toString()));
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = BigInt(reader.int64().toString());
          break;
        case 5:
          message.delayed = reader.bool();
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
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt("0"),
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.fromAddress !== void 0 && (obj.fromAddress = message.fromAddress);
    message.toAddress !== void 0 && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    message.endTime !== void 0 && (obj.endTime = (message.endTime || BigInt("0")).toString());
    message.delayed !== void 0 && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount, _object$delayed;
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = (_object$fromAddress = object.fromAddress) !== null && _object$fromAddress !== void 0 ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) !== null && _object$toAddress !== void 0 ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    message.endTime = object.endTime !== void 0 && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt("0");
    message.delayed = (_object$delayed = object.delayed) !== null && _object$delayed !== void 0 ? _object$delayed : false;
    return message;
  }
};
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
var MsgCreateVestingAccountResponse = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
var MsgCreatePermanentLockedAccount = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.fromAddress !== void 0 && (obj.fromAddress = message.fromAddress);
    message.toAddress !== void 0 && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$fromAddress2, _object$toAddress2, _object$amount2;
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = (_object$fromAddress2 = object.fromAddress) !== null && _object$fromAddress2 !== void 0 ? _object$fromAddress2 : "";
    message.toAddress = (_object$toAddress2 = object.toAddress) !== null && _object$toAddress2 !== void 0 ? _object$toAddress2 : "";
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
var MsgCreatePermanentLockedAccountResponse = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: BigInt("0"),
    vestingPeriods: []
  };
}
var MsgCreatePeriodicVestingAccount = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.startTime.toString()));
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = BigInt(reader.int64().toString());
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
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
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt("0"),
      vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods) ? object.vestingPeriods.map((e) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.fromAddress !== void 0 && (obj.fromAddress = message.fromAddress);
    message.toAddress !== void 0 && (obj.toAddress = message.toAddress);
    message.startTime !== void 0 && (obj.startTime = (message.startTime || BigInt("0")).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => e ? Period.toJSON(e) : void 0);
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$fromAddress3, _object$toAddress3, _object$vestingPeriod;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = (_object$fromAddress3 = object.fromAddress) !== null && _object$fromAddress3 !== void 0 ? _object$fromAddress3 : "";
    message.toAddress = (_object$toAddress3 = object.toAddress) !== null && _object$toAddress3 !== void 0 ? _object$toAddress3 : "";
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt("0");
    message.vestingPeriods = ((_object$vestingPeriod = object.vestingPeriods) === null || _object$vestingPeriod === void 0 ? void 0 : _object$vestingPeriod.map((e) => Period.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
var MsgCreatePeriodicVestingAccountResponse = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/vesting/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }
  createVestingAccount(request) {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then((data2) => MsgCreateVestingAccountResponse.decode(new _m03.Reader(data2)));
  }
  createPermanentLockedAccount(request) {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
    return promise.then((data2) => MsgCreatePermanentLockedAccountResponse.decode(new _m03.Reader(data2)));
  }
  createPeriodicVestingAccount(request) {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then((data2) => MsgCreatePeriodicVestingAccountResponse.decode(new _m03.Reader(data2)));
  }
};

export {
  vesting_exports,
  MsgCreateVestingAccount,
  MsgCreatePermanentLockedAccount,
  MsgCreatePeriodicVestingAccount,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-DLSKLEVI.js.map
