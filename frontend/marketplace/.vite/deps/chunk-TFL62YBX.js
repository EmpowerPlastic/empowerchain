import {
  ValidatorUpdate
} from "./chunk-KDGHQXW3.js";
import {
  Header
} from "./chunk-OOMJJQEG.js";
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
  fromJsonTimestamp,
  fromTimestamp,
  import_long,
  isSet,
  require_minimal,
  toTimestamp
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/staking/v1beta1/staking.js
var staking_exports = {};
__export(staking_exports, {
  BondStatus: () => BondStatus,
  BondStatusSDKType: () => BondStatusSDKType,
  Commission: () => Commission,
  CommissionRates: () => CommissionRates,
  DVPair: () => DVPair,
  DVPairs: () => DVPairs,
  DVVTriplet: () => DVVTriplet,
  DVVTriplets: () => DVVTriplets,
  Delegation: () => Delegation,
  DelegationResponse: () => DelegationResponse,
  Description: () => Description,
  HistoricalInfo: () => HistoricalInfo,
  Infraction: () => Infraction,
  InfractionSDKType: () => InfractionSDKType,
  Params: () => Params,
  Pool: () => Pool,
  Redelegation: () => Redelegation,
  RedelegationEntry: () => RedelegationEntry,
  RedelegationEntryResponse: () => RedelegationEntryResponse,
  RedelegationResponse: () => RedelegationResponse,
  UnbondingDelegation: () => UnbondingDelegation,
  UnbondingDelegationEntry: () => UnbondingDelegationEntry,
  ValAddresses: () => ValAddresses,
  Validator: () => Validator,
  ValidatorUpdates: () => ValidatorUpdates,
  bondStatusFromJSON: () => bondStatusFromJSON,
  bondStatusToJSON: () => bondStatusToJSON,
  infractionFromJSON: () => infractionFromJSON,
  infractionToJSON: () => infractionToJSON
});
var _m0 = __toESM(require_minimal());
var BondStatus = function(BondStatus2) {
  BondStatus2[BondStatus2["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus2[BondStatus2["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus2[BondStatus2["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus2[BondStatus2["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus2[BondStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BondStatus2;
}({});
var BondStatusSDKType = BondStatus;
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
var Infraction = function(Infraction2) {
  Infraction2[Infraction2["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  Infraction2[Infraction2["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  Infraction2[Infraction2["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  Infraction2[Infraction2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Infraction2;
}({});
var InfractionSDKType = Infraction;
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
function createBaseHistoricalInfo() {
  return {
    header: void 0,
    valset: []
  };
}
var HistoricalInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : void 0,
      valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset) ? object.valset.map((e) => Validator.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.header !== void 0 && (obj.header = message.header ? Header.toJSON(message.header) : void 0);
    if (message.valset) {
      obj.valset = message.valset.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$valset;
    const message = createBaseHistoricalInfo();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.valset = ((_object$valset = object.valset) === null || _object$valset === void 0 ? void 0 : _object$valset.map((e) => Validator.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
var CommissionRates = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      maxRate: isSet(object.maxRate) ? String(object.maxRate) : "",
      maxChangeRate: isSet(object.maxChangeRate) ? String(object.maxChangeRate) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.rate !== void 0 && (obj.rate = message.rate);
    message.maxRate !== void 0 && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== void 0 && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial(object) {
    var _object$rate, _object$maxRate, _object$maxChangeRate;
    const message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) !== null && _object$rate !== void 0 ? _object$rate : "";
    message.maxRate = (_object$maxRate = object.maxRate) !== null && _object$maxRate !== void 0 ? _object$maxRate : "";
    message.maxChangeRate = (_object$maxChangeRate = object.maxChangeRate) !== null && _object$maxChangeRate !== void 0 ? _object$maxChangeRate : "";
    return message;
  }
};
function createBaseCommission() {
  return {
    commissionRates: void 0,
    updateTime: void 0
  };
}
var Commission = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.commissionRates !== void 0) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== void 0) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      commissionRates: isSet(object.commissionRates) ? CommissionRates.fromJSON(object.commissionRates) : void 0,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.commissionRates !== void 0 && (obj.commissionRates = message.commissionRates ? CommissionRates.toJSON(message.commissionRates) : void 0);
    message.updateTime !== void 0 && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$updateTime;
    const message = createBaseCommission();
    message.commissionRates = object.commissionRates !== void 0 && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : void 0;
    message.updateTime = (_object$updateTime = object.updateTime) !== null && _object$updateTime !== void 0 ? _object$updateTime : void 0;
    return message;
  }
};
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
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.moniker !== void 0 && (obj.moniker = message.moniker);
    message.identity !== void 0 && (obj.identity = message.identity);
    message.website !== void 0 && (obj.website = message.website);
    message.securityContact !== void 0 && (obj.securityContact = message.securityContact);
    message.details !== void 0 && (obj.details = message.details);
    return obj;
  },
  fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$securityConta, _object$details;
    const message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) !== null && _object$identity !== void 0 ? _object$identity : "";
    message.website = (_object$website = object.website) !== null && _object$website !== void 0 ? _object$website : "";
    message.securityContact = (_object$securityConta = object.securityContact) !== null && _object$securityConta !== void 0 ? _object$securityConta : "";
    message.details = (_object$details = object.details) !== null && _object$details !== void 0 ? _object$details : "";
    return message;
  }
};
function createBaseValidator() {
  return {
    operatorAddress: "",
    consensusPubkey: void 0,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: void 0,
    unbondingHeight: BigInt("0"),
    unbondingTime: void 0,
    commission: void 0,
    minSelfDelegation: "",
    unbondingOnHoldRefCount: BigInt("0"),
    unbondingIds: []
  };
}
var Validator = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== void 0) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
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
    if (message.description !== void 0) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(import_long.default.fromString(message.unbondingHeight.toString()));
    }
    if (message.unbondingTime !== void 0) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== void 0) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(96).int64(import_long.default.fromString(message.unbondingOnHoldRefCount.toString()));
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
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
          message.unbondingHeight = BigInt(reader.int64().toString());
          break;
        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        case 12:
          message.unbondingOnHoldRefCount = BigInt(reader.int64().toString());
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingIds.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.unbondingIds.push(BigInt(reader.uint64().toString()));
          }
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
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : void 0,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : void 0,
      unbondingHeight: isSet(object.unbondingHeight) ? BigInt(object.unbondingHeight.toString()) : BigInt("0"),
      unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : void 0,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : void 0,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0"),
      unbondingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingIds) ? object.unbondingIds.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.operatorAddress !== void 0 && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== void 0 && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : void 0);
    message.jailed !== void 0 && (obj.jailed = message.jailed);
    message.status !== void 0 && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== void 0 && (obj.tokens = message.tokens);
    message.delegatorShares !== void 0 && (obj.delegatorShares = message.delegatorShares);
    message.description !== void 0 && (obj.description = message.description ? Description.toJSON(message.description) : void 0);
    message.unbondingHeight !== void 0 && (obj.unbondingHeight = (message.unbondingHeight || BigInt("0")).toString());
    message.unbondingTime !== void 0 && (obj.unbondingTime = message.unbondingTime.toISOString());
    message.commission !== void 0 && (obj.commission = message.commission ? Commission.toJSON(message.commission) : void 0);
    message.minSelfDelegation !== void 0 && (obj.minSelfDelegation = message.minSelfDelegation);
    message.unbondingOnHoldRefCount !== void 0 && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt("0")).toString());
    if (message.unbondingIds) {
      obj.unbondingIds = message.unbondingIds.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.unbondingIds = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$operatorAddre, _object$jailed, _object$status, _object$tokens, _object$delegatorShar, _object$unbondingTime, _object$minSelfDelega, _object$unbondingIds;
    const message = createBaseValidator();
    message.operatorAddress = (_object$operatorAddre = object.operatorAddress) !== null && _object$operatorAddre !== void 0 ? _object$operatorAddre : "";
    message.consensusPubkey = object.consensusPubkey !== void 0 && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : void 0;
    message.jailed = (_object$jailed = object.jailed) !== null && _object$jailed !== void 0 ? _object$jailed : false;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tokens = (_object$tokens = object.tokens) !== null && _object$tokens !== void 0 ? _object$tokens : "";
    message.delegatorShares = (_object$delegatorShar = object.delegatorShares) !== null && _object$delegatorShar !== void 0 ? _object$delegatorShar : "";
    message.description = object.description !== void 0 && object.description !== null ? Description.fromPartial(object.description) : void 0;
    message.unbondingHeight = object.unbondingHeight !== void 0 && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt("0");
    message.unbondingTime = (_object$unbondingTime = object.unbondingTime) !== null && _object$unbondingTime !== void 0 ? _object$unbondingTime : void 0;
    message.commission = object.commission !== void 0 && object.commission !== null ? Commission.fromPartial(object.commission) : void 0;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) !== null && _object$minSelfDelega !== void 0 ? _object$minSelfDelega : "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0");
    message.unbondingIds = ((_object$unbondingIds = object.unbondingIds) === null || _object$unbondingIds === void 0 ? void 0 : _object$unbondingIds.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
var ValAddresses = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$addresses;
    const message = createBaseValAddresses();
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map((e) => e)) || [];
    return message;
  }
};
function createBaseDVPair() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var DVPair = {
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
    const message = createBaseDVPair();
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
    var _object$delegatorAddr, _object$validatorAddr;
    const message = createBaseDVPair();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  }
};
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
var DVPairs = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pairs) {
      DVPair.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map((e) => DVPair.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? DVPair.toJSON(e) : void 0);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$pairs;
    const message = createBaseDVPairs();
    message.pairs = ((_object$pairs = object.pairs) === null || _object$pairs === void 0 ? void 0 : _object$pairs.map((e) => DVPair.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDVVTriplet() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
var DVVTriplet = {
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
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
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
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== void 0 && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== void 0 && (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorSrcA, _object$validatorDstA;
    const message = createBaseDVVTriplet();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    return message;
  }
};
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
var DVVTriplets = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.triplets) {
      DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets) ? object.triplets.map((e) => DVVTriplet.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) => e ? DVVTriplet.toJSON(e) : void 0);
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$triplets;
    const message = createBaseDVVTriplets();
    message.triplets = ((_object$triplets = object.triplets) === null || _object$triplets === void 0 ? void 0 : _object$triplets.map((e) => DVVTriplet.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
var Delegation = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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
          message.shares = reader.string();
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
      shares: isSet(object.shares) ? String(object.shares) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    message.shares !== void 0 && (obj.shares = message.shares);
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorAddr2, _object$shares;
    const message = createBaseDelegation();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.shares = (_object$shares = object.shares) !== null && _object$shares !== void 0 ? _object$shares : "";
    return message;
  }
};
function createBaseUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
var UnbondingDelegation = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
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
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => UnbondingDelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? UnbondingDelegationEntry.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr3, _object$entries;
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map((e) => UnbondingDelegationEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseUnbondingDelegationEntry() {
  return {
    creationHeight: BigInt("0"),
    completionTime: void 0,
    initialBalance: "",
    balance: "",
    unbondingId: BigInt("0"),
    unbondingOnHoldRefCount: BigInt("0")
  };
}
var UnbondingDelegationEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.creationHeight.toString()));
    }
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.unbondingId.toString()));
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.unbondingOnHoldRefCount.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = BigInt(reader.int64().toString());
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbondingId = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.unbondingOnHoldRefCount = BigInt(reader.int64().toString());
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
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt("0"),
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : void 0,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt("0"),
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.creationHeight !== void 0 && (obj.creationHeight = (message.creationHeight || BigInt("0")).toString());
    message.completionTime !== void 0 && (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== void 0 && (obj.initialBalance = message.initialBalance);
    message.balance !== void 0 && (obj.balance = message.balance);
    message.unbondingId !== void 0 && (obj.unbondingId = (message.unbondingId || BigInt("0")).toString());
    message.unbondingOnHoldRefCount !== void 0 && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$completionTim, _object$initialBalanc, _object$balance;
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt("0");
    message.completionTime = (_object$completionTim = object.completionTime) !== null && _object$completionTim !== void 0 ? _object$completionTim : void 0;
    message.initialBalance = (_object$initialBalanc = object.initialBalance) !== null && _object$initialBalanc !== void 0 ? _object$initialBalanc : "";
    message.balance = (_object$balance = object.balance) !== null && _object$balance !== void 0 ? _object$balance : "";
    message.unbondingId = object.unbondingId !== void 0 && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt("0");
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0");
    return message;
  }
};
function createBaseRedelegationEntry() {
  return {
    creationHeight: BigInt("0"),
    completionTime: void 0,
    initialBalance: "",
    sharesDst: "",
    unbondingId: BigInt("0"),
    unbondingOnHoldRefCount: BigInt("0")
  };
}
var RedelegationEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.creationHeight.toString()));
    }
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.unbondingId.toString()));
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.unbondingOnHoldRefCount.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = BigInt(reader.int64().toString());
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        case 5:
          message.unbondingId = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.unbondingOnHoldRefCount = BigInt(reader.int64().toString());
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
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt("0"),
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : void 0,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt("0"),
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.creationHeight !== void 0 && (obj.creationHeight = (message.creationHeight || BigInt("0")).toString());
    message.completionTime !== void 0 && (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== void 0 && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== void 0 && (obj.sharesDst = message.sharesDst);
    message.unbondingId !== void 0 && (obj.unbondingId = (message.unbondingId || BigInt("0")).toString());
    message.unbondingOnHoldRefCount !== void 0 && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$completionTim2, _object$initialBalanc2, _object$sharesDst;
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt("0");
    message.completionTime = (_object$completionTim2 = object.completionTime) !== null && _object$completionTim2 !== void 0 ? _object$completionTim2 : void 0;
    message.initialBalance = (_object$initialBalanc2 = object.initialBalance) !== null && _object$initialBalanc2 !== void 0 ? _object$initialBalanc2 : "";
    message.sharesDst = (_object$sharesDst = object.sharesDst) !== null && _object$sharesDst !== void 0 ? _object$sharesDst : "";
    message.unbondingId = object.unbondingId !== void 0 && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt("0");
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt("0");
    return message;
  }
};
function createBaseRedelegation() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
var Redelegation = {
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
    for (const v of message.entries) {
      RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
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
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => RedelegationEntry.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegatorAddress !== void 0 && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== void 0 && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== void 0 && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? RedelegationEntry.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$delegatorAddr5, _object$validatorSrcA2, _object$validatorDstA2, _object$entries2;
    const message = createBaseRedelegation();
    message.delegatorAddress = (_object$delegatorAddr5 = object.delegatorAddress) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.validatorSrcAddress = (_object$validatorSrcA2 = object.validatorSrcAddress) !== null && _object$validatorSrcA2 !== void 0 ? _object$validatorSrcA2 : "";
    message.validatorDstAddress = (_object$validatorDstA2 = object.validatorDstAddress) !== null && _object$validatorDstA2 !== void 0 ? _object$validatorDstA2 : "";
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map((e) => RedelegationEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    unbondingTime: void 0,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.unbondingTime !== void 0) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      unbondingTime: isSet(object.unbondingTime) ? Duration.fromJSON(object.unbondingTime) : void 0,
      maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.unbondingTime !== void 0 && (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : void 0);
    message.maxValidators !== void 0 && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== void 0 && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== void 0 && (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== void 0 && (obj.bondDenom = message.bondDenom);
    message.minCommissionRate !== void 0 && (obj.minCommissionRate = message.minCommissionRate);
    return obj;
  },
  fromPartial(object) {
    var _object$maxValidators, _object$maxEntries, _object$historicalEnt, _object$bondDenom, _object$minCommission;
    const message = createBaseParams();
    message.unbondingTime = object.unbondingTime !== void 0 && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : void 0;
    message.maxValidators = (_object$maxValidators = object.maxValidators) !== null && _object$maxValidators !== void 0 ? _object$maxValidators : 0;
    message.maxEntries = (_object$maxEntries = object.maxEntries) !== null && _object$maxEntries !== void 0 ? _object$maxEntries : 0;
    message.historicalEntries = (_object$historicalEnt = object.historicalEntries) !== null && _object$historicalEnt !== void 0 ? _object$historicalEnt : 0;
    message.bondDenom = (_object$bondDenom = object.bondDenom) !== null && _object$bondDenom !== void 0 ? _object$bondDenom : "";
    message.minCommissionRate = (_object$minCommission = object.minCommissionRate) !== null && _object$minCommission !== void 0 ? _object$minCommission : "";
    return message;
  }
};
function createBaseDelegationResponse() {
  return {
    delegation: void 0,
    balance: void 0
  };
}
var DelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.delegation !== void 0) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
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
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : void 0,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.delegation !== void 0 && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : void 0);
    message.balance !== void 0 && (obj.balance = message.balance ? Coin.toJSON(message.balance) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== void 0 && object.delegation !== null ? Delegation.fromPartial(object.delegation) : void 0;
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  }
};
function createBaseRedelegationEntryResponse() {
  return {
    redelegationEntry: void 0,
    balance: ""
  };
}
var RedelegationEntryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.redelegationEntry !== void 0) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      redelegationEntry: isSet(object.redelegationEntry) ? RedelegationEntry.fromJSON(object.redelegationEntry) : void 0,
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.redelegationEntry !== void 0 && (obj.redelegationEntry = message.redelegationEntry ? RedelegationEntry.toJSON(message.redelegationEntry) : void 0);
    message.balance !== void 0 && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object) {
    var _object$balance2;
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== void 0 && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : void 0;
    message.balance = (_object$balance2 = object.balance) !== null && _object$balance2 !== void 0 ? _object$balance2 : "";
    return message;
  }
};
function createBaseRedelegationResponse() {
  return {
    redelegation: void 0,
    entries: []
  };
}
var RedelegationResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.redelegation !== void 0) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : void 0,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => RedelegationEntryResponse.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.redelegation !== void 0 && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : void 0);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? RedelegationEntryResponse.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$entries3;
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== void 0 && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : void 0;
    message.entries = ((_object$entries3 = object.entries) === null || _object$entries3 === void 0 ? void 0 : _object$entries3.map((e) => RedelegationEntryResponse.fromPartial(e))) || [];
    return message;
  }
};
function createBasePool() {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
var Pool = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
      bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.notBondedTokens !== void 0 && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== void 0 && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },
  fromPartial(object) {
    var _object$notBondedToke, _object$bondedTokens;
    const message = createBasePool();
    message.notBondedTokens = (_object$notBondedToke = object.notBondedTokens) !== null && _object$notBondedToke !== void 0 ? _object$notBondedToke : "";
    message.bondedTokens = (_object$bondedTokens = object.bondedTokens) !== null && _object$bondedTokens !== void 0 ? _object$bondedTokens : "";
    return message;
  }
};
function createBaseValidatorUpdates() {
  return {
    updates: []
  };
}
var ValidatorUpdates = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
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
      updates: Array.isArray(object === null || object === void 0 ? void 0 : object.updates) ? object.updates.map((e) => ValidatorUpdate.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? ValidatorUpdate.toJSON(e) : void 0);
    } else {
      obj.updates = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$updates;
    const message = createBaseValidatorUpdates();
    message.updates = ((_object$updates = object.updates) === null || _object$updates === void 0 ? void 0 : _object$updates.map((e) => ValidatorUpdate.fromPartial(e))) || [];
    return message;
  }
};

export {
  HistoricalInfo,
  CommissionRates,
  Description,
  Validator,
  Delegation,
  UnbondingDelegation,
  Redelegation,
  Params,
  DelegationResponse,
  RedelegationResponse,
  Pool,
  staking_exports
};
//# sourceMappingURL=chunk-TFL62YBX.js.map
