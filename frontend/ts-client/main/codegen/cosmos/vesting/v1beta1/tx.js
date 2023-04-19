"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = void 0;
var _coin = require("../../base/v1beta1/coin");
var _vesting = require("./vesting");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseMsgCreateVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: _helpers.Long.ZERO,
    delayed: false
  };
}
var MsgCreateVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    var _iterator = _createForOfIteratorHelper(message.amount),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
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
  fromPartial: function fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount, _object$delayed;
    var message = createBaseMsgCreateVestingAccount();
    message.fromAddress = (_object$fromAddress = object.fromAddress) !== null && _object$fromAddress !== void 0 ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) !== null && _object$toAddress !== void 0 ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? _helpers.Long.fromValue(object.endTime) : _helpers.Long.ZERO;
    message.delayed = (_object$delayed = object.delayed) !== null && _object$delayed !== void 0 ? _object$delayed : false;
    return message;
  }
};
exports.MsgCreateVestingAccount = MsgCreateVestingAccount;
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
var MsgCreateVestingAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateVestingAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
exports.MsgCreateVestingAccountResponse = MsgCreateVestingAccountResponse;
function createBaseMsgCreatePermanentLockedAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
var MsgCreatePermanentLockedAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    var _iterator2 = _createForOfIteratorHelper(message.amount),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fromAddress2, _object$toAddress2, _object$amount2;
    var message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = (_object$fromAddress2 = object.fromAddress) !== null && _object$fromAddress2 !== void 0 ? _object$fromAddress2 : "";
    message.toAddress = (_object$toAddress2 = object.toAddress) !== null && _object$toAddress2 !== void 0 ? _object$toAddress2 : "";
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgCreatePermanentLockedAccount = MsgCreatePermanentLockedAccount;
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
var MsgCreatePermanentLockedAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePermanentLockedAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }
};
exports.MsgCreatePermanentLockedAccountResponse = MsgCreatePermanentLockedAccountResponse;
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: _helpers.Long.ZERO,
    vestingPeriods: []
  };
}
var MsgCreatePeriodicVestingAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    var _iterator3 = _createForOfIteratorHelper(message.vestingPeriods),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _vesting.Period.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.vestingPeriods.push(_vesting.Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fromAddress3, _object$toAddress3, _object$vestingPeriod;
    var message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = (_object$fromAddress3 = object.fromAddress) !== null && _object$fromAddress3 !== void 0 ? _object$fromAddress3 : "";
    message.toAddress = (_object$toAddress3 = object.toAddress) !== null && _object$toAddress3 !== void 0 ? _object$toAddress3 : "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? _helpers.Long.fromValue(object.startTime) : _helpers.Long.ZERO;
    message.vestingPeriods = ((_object$vestingPeriod = object.vestingPeriods) === null || _object$vestingPeriod === void 0 ? void 0 : _object$vestingPeriod.map(function (e) {
      return _vesting.Period.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgCreatePeriodicVestingAccount = MsgCreatePeriodicVestingAccount;
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
var MsgCreatePeriodicVestingAccountResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreatePeriodicVestingAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }
};
exports.MsgCreatePeriodicVestingAccountResponse = MsgCreatePeriodicVestingAccountResponse;