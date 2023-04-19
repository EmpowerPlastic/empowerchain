import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

function createBaseMsgCreateVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: Long.ZERO,
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.endTime = reader.int64();
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
  fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount, _object$delayed;
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = (_object$fromAddress = object.fromAddress) !== null && _object$fromAddress !== void 0 ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) !== null && _object$toAddress !== void 0 ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    message.delayed = (_object$delayed = object.delayed) !== null && _object$delayed !== void 0 ? _object$delayed : false;
    return message;
  }
};
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
export const MsgCreatePermanentLockedAccount = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    var _object$fromAddress2, _object$toAddress2, _object$amount2;
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = (_object$fromAddress2 = object.fromAddress) !== null && _object$fromAddress2 !== void 0 ? _object$fromAddress2 : "";
    message.toAddress = (_object$toAddress2 = object.toAddress) !== null && _object$toAddress2 !== void 0 ? _object$toAddress2 : "";
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: Long.ZERO,
    vestingPeriods: []
  };
}
export const MsgCreatePeriodicVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.startTime = reader.int64();
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
  fromPartial(object) {
    var _object$fromAddress3, _object$toAddress3, _object$vestingPeriod;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = (_object$fromAddress3 = object.fromAddress) !== null && _object$fromAddress3 !== void 0 ? _object$fromAddress3 : "";
    message.toAddress = (_object$toAddress3 = object.toAddress) !== null && _object$toAddress3 !== void 0 ? _object$toAddress3 : "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.vestingPeriods = ((_object$vestingPeriod = object.vestingPeriods) === null || _object$vestingPeriod === void 0 ? void 0 : _object$vestingPeriod.map(e => Period.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};