"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorUpdates = exports.Validator = exports.ValAddresses = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.RedelegationEntry = exports.Redelegation = exports.Pool = exports.Params = exports.InfractionSDKType = exports.Infraction = exports.HistoricalInfo = exports.Description = exports.DelegationResponse = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.CommissionRates = exports.Commission = exports.BondStatusSDKType = exports.BondStatus = void 0;
exports.bondStatusFromJSON = bondStatusFromJSON;
exports.bondStatusToJSON = bondStatusToJSON;
exports.infractionFromJSON = infractionFromJSON;
exports.infractionToJSON = infractionToJSON;
var _types = require("../../../tendermint/types/types");
var _timestamp = require("../../../google/protobuf/timestamp");
var _any = require("../../../google/protobuf/any");
var _duration = require("../../../google/protobuf/duration");
var _coin = require("../../base/v1beta1/coin");
var _types2 = require("../../../tendermint/abci/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** BondStatus is the status of a validator. */
var BondStatus;
/** BondStatus is the status of a validator. */
exports.BondStatus = BondStatus;
(function (BondStatus) {
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
var BondStatusSDKType;
exports.BondStatusSDKType = BondStatusSDKType;
(function (BondStatusSDKType) {
  BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatusSDKType[BondStatusSDKType["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatusSDKType[BondStatusSDKType["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatusSDKType[BondStatusSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatusSDKType || (exports.BondStatusSDKType = BondStatusSDKType = {}));
function bondStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
function bondStatusToJSON(object) {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Infraction indicates the infraction a validator commited. */
var Infraction;
/** Infraction indicates the infraction a validator commited. */
exports.Infraction = Infraction;
(function (Infraction) {
  Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Infraction || (exports.Infraction = Infraction = {}));
var InfractionSDKType;
exports.InfractionSDKType = InfractionSDKType;
(function (InfractionSDKType) {
  InfractionSDKType[InfractionSDKType["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  InfractionSDKType[InfractionSDKType["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  InfractionSDKType[InfractionSDKType["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  InfractionSDKType[InfractionSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InfractionSDKType || (exports.InfractionSDKType = InfractionSDKType = {}));
function infractionFromJSON(object) {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return Infraction.INFRACTION_UNSPECIFIED;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return Infraction.INFRACTION_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_DOWNTIME":
      return Infraction.INFRACTION_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Infraction.UNRECOGNIZED;
  }
}
function infractionToJSON(object) {
  switch (object) {
    case Infraction.INFRACTION_UNSPECIFIED:
      return "INFRACTION_UNSPECIFIED";
    case Infraction.INFRACTION_DOUBLE_SIGN:
      return "INFRACTION_DOUBLE_SIGN";
    case Infraction.INFRACTION_DOWNTIME:
      return "INFRACTION_DOWNTIME";
    case Infraction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

function createBaseHistoricalInfo() {
  return {
    header: undefined,
    valset: []
  };
}
var HistoricalInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.valset),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$valset;
    var message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.valset = ((_object$valset = object.valset) === null || _object$valset === void 0 ? void 0 : _object$valset.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.HistoricalInfo = HistoricalInfo;
function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
var CommissionRates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionRates();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.maxRate = reader.string();
          break;
        case 3:
          message.maxChangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rate, _object$maxRate, _object$maxChangeRate;
    var message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) !== null && _object$rate !== void 0 ? _object$rate : "";
    message.maxRate = (_object$maxRate = object.maxRate) !== null && _object$maxRate !== void 0 ? _object$maxRate : "";
    message.maxChangeRate = (_object$maxChangeRate = object.maxChangeRate) !== null && _object$maxChangeRate !== void 0 ? _object$maxChangeRate : "";
    return message;
  }
};
exports.CommissionRates = CommissionRates;
function createBaseCommission() {
  return {
    commissionRates: undefined,
    updateTime: undefined
  };
}
var Commission = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$updateTime;
    var message = createBaseCommission();
    message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
    message.updateTime = (_object$updateTime = object.updateTime) !== null && _object$updateTime !== void 0 ? _object$updateTime : undefined;
    return message;
  }
};
exports.Commission = Commission;
function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}
var Description = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescription();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$securityConta, _object$details;
    var message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) !== null && _object$identity !== void 0 ? _object$identity : "";
    message.website = (_object$website = object.website) !== null && _object$website !== void 0 ? _object$website : "";
    message.securityContact = (_object$securityConta = object.securityContact) !== null && _object$securityConta !== void 0 ? _object$securityConta : "";
    message.details = (_object$details = object.details) !== null && _object$details !== void 0 ? _object$details : "";
    return message;
  }
};
exports.Description = Description;
function createBaseValidator() {
  return {
    operatorAddress: "",
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: undefined,
    unbondingHeight: _helpers.Long.ZERO,
    unbondingTime: undefined,
    commission: undefined,
    minSelfDelegation: "",
    unbondingOnHoldRefCount: _helpers.Long.ZERO,
    unbondingIds: []
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      _any.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    var _iterator2 = _createForOfIteratorHelper(message.unbondingIds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        case 12:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingIds.push(reader.uint64());
            }
          } else {
            message.unbondingIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$operatorAddre, _object$jailed, _object$status, _object$tokens, _object$delegatorShar, _object$unbondingTime, _object$minSelfDelega, _object$unbondingIds;
    var message = createBaseValidator();
    message.operatorAddress = (_object$operatorAddre = object.operatorAddress) !== null && _object$operatorAddre !== void 0 ? _object$operatorAddre : "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? _any.Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = (_object$jailed = object.jailed) !== null && _object$jailed !== void 0 ? _object$jailed : false;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tokens = (_object$tokens = object.tokens) !== null && _object$tokens !== void 0 ? _object$tokens : "";
    message.delegatorShares = (_object$delegatorShar = object.delegatorShares) !== null && _object$delegatorShar !== void 0 ? _object$delegatorShar : "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? _helpers.Long.fromValue(object.unbondingHeight) : _helpers.Long.ZERO;
    message.unbondingTime = (_object$unbondingTime = object.unbondingTime) !== null && _object$unbondingTime !== void 0 ? _object$unbondingTime : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) !== null && _object$minSelfDelega !== void 0 ? _object$minSelfDelega : "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? _helpers.Long.fromValue(object.unbondingOnHoldRefCount) : _helpers.Long.ZERO;
    message.unbondingIds = ((_object$unbondingIds = object.unbondingIds) === null || _object$unbondingIds === void 0 ? void 0 : _object$unbondingIds.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.Validator = Validator;
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
var ValAddresses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.addresses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(10).string(v);
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
    var message = createBaseValAddresses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addresses;
    var message = createBaseValAddresses();
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ValAddresses = ValAddresses;
function createBaseDVPair() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var DVPair = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVPair();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr;
    var message = createBaseDVPair();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  }
};
exports.DVPair = DVPair;
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
var DVPairs = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.pairs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        DVPair.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVPairs();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pairs;
    var message = createBaseDVPairs();
    message.pairs = ((_object$pairs = object.pairs) === null || _object$pairs === void 0 ? void 0 : _object$pairs.map(function (e) {
      return DVPair.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DVPairs = DVPairs;
function createBaseDVVTriplet() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
var DVVTriplet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVVTriplet();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorSrcA, _object$validatorDstA;
    var message = createBaseDVVTriplet();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    return message;
  }
};
exports.DVVTriplet = DVVTriplet;
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
var DVVTriplets = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.triplets),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVVTriplets();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$triplets;
    var message = createBaseDVVTriplets();
    message.triplets = ((_object$triplets = object.triplets) === null || _object$triplets === void 0 ? void 0 : _object$triplets.map(function (e) {
      return DVVTriplet.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.DVVTriplets = DVVTriplets;
function createBaseDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
var Delegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorAddr2, _object$shares;
    var message = createBaseDelegation();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.shares = (_object$shares = object.shares) !== null && _object$shares !== void 0 ? _object$shares : "";
    return message;
  }
};
exports.Delegation = Delegation;
function createBaseUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
var UnbondingDelegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    var _iterator6 = _createForOfIteratorHelper(message.entries),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr3, _object$entries;
    var message = createBaseUnbondingDelegation();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(function (e) {
      return UnbondingDelegationEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.UnbondingDelegation = UnbondingDelegation;
function createBaseUnbondingDelegationEntry() {
  return {
    creationHeight: _helpers.Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    balance: "",
    unbondingId: _helpers.Long.UZERO,
    unbondingOnHoldRefCount: _helpers.Long.ZERO
  };
}
var UnbondingDelegationEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (!message.unbondingId.isZero()) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim, _object$initialBalanc, _object$balance;
    var message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? _helpers.Long.fromValue(object.creationHeight) : _helpers.Long.ZERO;
    message.completionTime = (_object$completionTim = object.completionTime) !== null && _object$completionTim !== void 0 ? _object$completionTim : undefined;
    message.initialBalance = (_object$initialBalanc = object.initialBalance) !== null && _object$initialBalanc !== void 0 ? _object$initialBalanc : "";
    message.balance = (_object$balance = object.balance) !== null && _object$balance !== void 0 ? _object$balance : "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? _helpers.Long.fromValue(object.unbondingId) : _helpers.Long.UZERO;
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? _helpers.Long.fromValue(object.unbondingOnHoldRefCount) : _helpers.Long.ZERO;
    return message;
  }
};
exports.UnbondingDelegationEntry = UnbondingDelegationEntry;
function createBaseRedelegationEntry() {
  return {
    creationHeight: _helpers.Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    sharesDst: "",
    unbondingId: _helpers.Long.UZERO,
    unbondingOnHoldRefCount: _helpers.Long.ZERO
  };
}
var RedelegationEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    if (!message.unbondingId.isZero()) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim2, _object$initialBalanc2, _object$sharesDst;
    var message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? _helpers.Long.fromValue(object.creationHeight) : _helpers.Long.ZERO;
    message.completionTime = (_object$completionTim2 = object.completionTime) !== null && _object$completionTim2 !== void 0 ? _object$completionTim2 : undefined;
    message.initialBalance = (_object$initialBalanc2 = object.initialBalance) !== null && _object$initialBalanc2 !== void 0 ? _object$initialBalanc2 : "";
    message.sharesDst = (_object$sharesDst = object.sharesDst) !== null && _object$sharesDst !== void 0 ? _object$sharesDst : "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? _helpers.Long.fromValue(object.unbondingId) : _helpers.Long.UZERO;
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? _helpers.Long.fromValue(object.unbondingOnHoldRefCount) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RedelegationEntry = RedelegationEntry;
function createBaseRedelegation() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
var Redelegation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    var _iterator7 = _createForOfIteratorHelper(message.entries),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr5, _object$validatorSrcA2, _object$validatorDstA2, _object$entries2;
    var message = createBaseRedelegation();
    message.delegatorAddress = (_object$delegatorAddr5 = object.delegatorAddress) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.validatorSrcAddress = (_object$validatorSrcA2 = object.validatorSrcAddress) !== null && _object$validatorSrcA2 !== void 0 ? _object$validatorSrcA2 : "";
    message.validatorDstAddress = (_object$validatorDstA2 = object.validatorDstAddress) !== null && _object$validatorDstA2 !== void 0 ? _object$validatorDstA2 : "";
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(function (e) {
      return RedelegationEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Redelegation = Redelegation;
function createBaseParams() {
  return {
    unbondingTime: undefined,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.unbondingTime !== undefined) {
      _duration.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$maxValidators, _object$maxEntries, _object$historicalEnt, _object$bondDenom, _object$minCommission;
    var message = createBaseParams();
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? _duration.Duration.fromPartial(object.unbondingTime) : undefined;
    message.maxValidators = (_object$maxValidators = object.maxValidators) !== null && _object$maxValidators !== void 0 ? _object$maxValidators : 0;
    message.maxEntries = (_object$maxEntries = object.maxEntries) !== null && _object$maxEntries !== void 0 ? _object$maxEntries : 0;
    message.historicalEntries = (_object$historicalEnt = object.historicalEntries) !== null && _object$historicalEnt !== void 0 ? _object$historicalEnt : 0;
    message.bondDenom = (_object$bondDenom = object.bondDenom) !== null && _object$bondDenom !== void 0 ? _object$bondDenom : "";
    message.minCommissionRate = (_object$minCommission = object.minCommissionRate) !== null && _object$minCommission !== void 0 ? _object$minCommission : "";
    return message;
  }
};
exports.Params = Params;
function createBaseDelegationResponse() {
  return {
    delegation: undefined,
    balance: undefined
  };
}
var DelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      _coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? _coin.Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.DelegationResponse = DelegationResponse;
function createBaseRedelegationEntryResponse() {
  return {
    redelegationEntry: undefined,
    balance: ""
  };
}
var RedelegationEntryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$balance2;
    var message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
    message.balance = (_object$balance2 = object.balance) !== null && _object$balance2 !== void 0 ? _object$balance2 : "";
    return message;
  }
};
exports.RedelegationEntryResponse = RedelegationEntryResponse;
function createBaseRedelegationResponse() {
  return {
    redelegation: undefined,
    entries: []
  };
}
var RedelegationResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    var _iterator8 = _createForOfIteratorHelper(message.entries),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$entries3;
    var message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = ((_object$entries3 = object.entries) === null || _object$entries3 === void 0 ? void 0 : _object$entries3.map(function (e) {
      return RedelegationEntryResponse.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.RedelegationResponse = RedelegationResponse;
function createBasePool() {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
var Pool = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$notBondedToke, _object$bondedTokens;
    var message = createBasePool();
    message.notBondedTokens = (_object$notBondedToke = object.notBondedTokens) !== null && _object$notBondedToke !== void 0 ? _object$notBondedToke : "";
    message.bondedTokens = (_object$bondedTokens = object.bondedTokens) !== null && _object$bondedTokens !== void 0 ? _object$bondedTokens : "";
    return message;
  }
};
exports.Pool = Pool;
function createBaseValidatorUpdates() {
  return {
    updates: []
  };
}
var ValidatorUpdates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.updates),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _types2.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(_types2.ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$updates;
    var message = createBaseValidatorUpdates();
    message.updates = ((_object$updates = object.updates) === null || _object$updates === void 0 ? void 0 : _object$updates.map(function (e) {
      return _types2.ValidatorUpdate.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorUpdates = ValidatorUpdates;