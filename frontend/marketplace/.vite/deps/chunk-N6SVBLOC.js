import {
  Coin,
  DecCoin
} from "./chunk-S5OVV5FT.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/distribution/v1beta1/distribution.js
var distribution_exports = {};
__export(distribution_exports, {
  CommunityPoolSpendProposal: () => CommunityPoolSpendProposal,
  CommunityPoolSpendProposalWithDeposit: () => CommunityPoolSpendProposalWithDeposit,
  DelegationDelegatorReward: () => DelegationDelegatorReward,
  DelegatorStartingInfo: () => DelegatorStartingInfo,
  FeePool: () => FeePool,
  Params: () => Params,
  ValidatorAccumulatedCommission: () => ValidatorAccumulatedCommission,
  ValidatorCurrentRewards: () => ValidatorCurrentRewards,
  ValidatorHistoricalRewards: () => ValidatorHistoricalRewards,
  ValidatorOutstandingRewards: () => ValidatorOutstandingRewards,
  ValidatorSlashEvent: () => ValidatorSlashEvent,
  ValidatorSlashEvents: () => ValidatorSlashEvents
});
var _m0 = __toESM(require_minimal());
function createBaseParams() {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.communityTax !== "") {
      writer.uint32(10).string(message.communityTax);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(message.baseProposerReward);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(message.bonusProposerReward);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
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
          message.communityTax = reader.string();
          break;
        case 2:
          message.baseProposerReward = reader.string();
          break;
        case 3:
          message.bonusProposerReward = reader.string();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
      communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
      baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
      bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
      withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.communityTax !== void 0 && (obj.communityTax = message.communityTax);
    message.baseProposerReward !== void 0 && (obj.baseProposerReward = message.baseProposerReward);
    message.bonusProposerReward !== void 0 && (obj.bonusProposerReward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== void 0 && (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
    return obj;
  },
  fromPartial(object) {
    var _object$communityTax, _object$baseProposerR, _object$bonusProposer, _object$withdrawAddrE;
    const message = createBaseParams();
    message.communityTax = (_object$communityTax = object.communityTax) !== null && _object$communityTax !== void 0 ? _object$communityTax : "";
    message.baseProposerReward = (_object$baseProposerR = object.baseProposerReward) !== null && _object$baseProposerR !== void 0 ? _object$baseProposerR : "";
    message.bonusProposerReward = (_object$bonusProposer = object.bonusProposerReward) !== null && _object$bonusProposer !== void 0 ? _object$bonusProposer : "";
    message.withdrawAddrEnabled = (_object$withdrawAddrE = object.withdrawAddrEnabled) !== null && _object$withdrawAddrE !== void 0 ? _object$withdrawAddrE : false;
    return message;
  }
};
function createBaseValidatorHistoricalRewards() {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
var ValidatorHistoricalRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
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
      cumulativeRewardRatio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulativeRewardRatio) ? object.cumulativeRewardRatio.map((e) => DecCoin.fromJSON(e)) : [],
      referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.cumulativeRewardRatio = [];
    }
    message.referenceCount !== void 0 && (obj.referenceCount = Math.round(message.referenceCount));
    return obj;
  },
  fromPartial(object) {
    var _object$cumulativeRew, _object$referenceCoun;
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = ((_object$cumulativeRew = object.cumulativeRewardRatio) === null || _object$cumulativeRew === void 0 ? void 0 : _object$cumulativeRew.map((e) => DecCoin.fromPartial(e))) || [];
    message.referenceCount = (_object$referenceCoun = object.referenceCount) !== null && _object$referenceCoun !== void 0 ? _object$referenceCoun : 0;
    return message;
  }
};
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: BigInt("0")
  };
}
var ValidatorCurrentRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.period.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = BigInt(reader.uint64().toString());
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
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.rewards = [];
    }
    message.period !== void 0 && (obj.period = (message.period || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$rewards;
    const message = createBaseValidatorCurrentRewards();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map((e) => DecCoin.fromPartial(e))) || [];
    message.period = object.period !== void 0 && object.period !== null ? BigInt(object.period.toString()) : BigInt("0");
    return message;
  }
};
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
var ValidatorAccumulatedCommission = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.commission) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.commission) {
      obj.commission = message.commission.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$commission;
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
var ValidatorOutstandingRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
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
    var _object$rewards2;
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorSlashEvent() {
  return {
    validatorPeriod: BigInt("0"),
    fraction: ""
  };
}
var ValidatorSlashEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.validatorPeriod.toString()));
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.fraction = reader.string();
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
      validatorPeriod: isSet(object.validatorPeriod) ? BigInt(object.validatorPeriod.toString()) : BigInt("0"),
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorPeriod !== void 0 && (obj.validatorPeriod = (message.validatorPeriod || BigInt("0")).toString());
    message.fraction !== void 0 && (obj.fraction = message.fraction);
    return obj;
  },
  fromPartial(object) {
    var _object$fraction;
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== void 0 && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt("0");
    message.fraction = (_object$fraction = object.fraction) !== null && _object$fraction !== void 0 ? _object$fraction : "";
    return message;
  }
};
function createBaseValidatorSlashEvents() {
  return {
    validatorSlashEvents: []
  };
}
var ValidatorSlashEvents = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
      validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents) ? object.validatorSlashEvents.map((e) => ValidatorSlashEvent.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => e ? ValidatorSlashEvent.toJSON(e) : void 0);
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$validatorSlas;
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = ((_object$validatorSlas = object.validatorSlashEvents) === null || _object$validatorSlas === void 0 ? void 0 : _object$validatorSlas.map((e) => ValidatorSlashEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFeePool() {
  return {
    communityPool: []
  };
}
var FeePool = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.communityPool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
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
      communityPool: Array.isArray(object === null || object === void 0 ? void 0 : object.communityPool) ? object.communityPool.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.communityPool) {
      obj.communityPool = message.communityPool.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.communityPool = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$communityPool;
    const message = createBaseFeePool();
    message.communityPool = ((_object$communityPool = object.communityPool) === null || _object$communityPool === void 0 ? void 0 : _object$communityPool.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposal() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
var CommunityPoolSpendProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    message.recipient !== void 0 && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$recipient, _object$amount;
    const message = createBaseCommunityPoolSpendProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegatorStartingInfo() {
  return {
    previousPeriod: BigInt("0"),
    stake: "",
    height: BigInt("0")
  };
}
var DelegatorStartingInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.previousPeriod.toString()));
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.height.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.height = BigInt(reader.uint64().toString());
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
      previousPeriod: isSet(object.previousPeriod) ? BigInt(object.previousPeriod.toString()) : BigInt("0"),
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.previousPeriod !== void 0 && (obj.previousPeriod = (message.previousPeriod || BigInt("0")).toString());
    message.stake !== void 0 && (obj.stake = message.stake);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$stake;
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== void 0 && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt("0");
    message.stake = (_object$stake = object.stake) !== null && _object$stake !== void 0 ? _object$stake : "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    return message;
  }
};
function createBaseDelegationDelegatorReward() {
  return {
    validatorAddress: "",
    reward: []
  };
}
var DelegationDelegatorReward = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
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
      reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map((e) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.validatorAddress !== void 0 && (obj.validatorAddress = message.validatorAddress);
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? DecCoin.toJSON(e) : void 0);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$validatorAddr, _object$reward;
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.reward = ((_object$reward = object.reward) === null || _object$reward === void 0 ? void 0 : _object$reward.map((e) => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
var CommunityPoolSpendProposalWithDeposit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    message.recipient !== void 0 && (obj.recipient = message.recipient);
    message.amount !== void 0 && (obj.amount = message.amount);
    message.deposit !== void 0 && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object) {
    var _object$title2, _object$description2, _object$recipient2, _object$amount2, _object$deposit;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.recipient = (_object$recipient2 = object.recipient) !== null && _object$recipient2 !== void 0 ? _object$recipient2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    message.deposit = (_object$deposit = object.deposit) !== null && _object$deposit !== void 0 ? _object$deposit : "";
    return message;
  }
};

export {
  Params,
  ValidatorHistoricalRewards,
  ValidatorCurrentRewards,
  ValidatorAccumulatedCommission,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent,
  FeePool,
  DelegatorStartingInfo,
  DelegationDelegatorReward,
  distribution_exports
};
//# sourceMappingURL=chunk-N6SVBLOC.js.map
