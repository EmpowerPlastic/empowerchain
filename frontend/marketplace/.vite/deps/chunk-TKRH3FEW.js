import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/mint/v1beta1/mint.js
var mint_exports = {};
__export(mint_exports, {
  Minter: () => Minter,
  Params: () => Params
});
var _m0 = __toESM(require_minimal());
function createBaseMinter() {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
var Minter = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;
        case 2:
          message.annualProvisions = reader.string();
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
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.inflation !== void 0 && (obj.inflation = message.inflation);
    message.annualProvisions !== void 0 && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },
  fromPartial(object) {
    var _object$inflation, _object$annualProvisi;
    const message = createBaseMinter();
    message.inflation = (_object$inflation = object.inflation) !== null && _object$inflation !== void 0 ? _object$inflation : "";
    message.annualProvisions = (_object$annualProvisi = object.annualProvisions) !== null && _object$annualProvisi !== void 0 ? _object$annualProvisi : "";
    return message;
  }
};
function createBaseParams() {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt("0")
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(message.inflationRateChange);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(message.inflationMax);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(message.inflationMin);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(message.goalBonded);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(import_long.default.fromString(message.blocksPerYear.toString()));
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = reader.string();
          break;
        case 3:
          message.inflationMax = reader.string();
          break;
        case 4:
          message.inflationMin = reader.string();
          break;
        case 5:
          message.goalBonded = reader.string();
          break;
        case 6:
          message.blocksPerYear = BigInt(reader.uint64().toString());
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
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflationRateChange: isSet(object.inflationRateChange) ? String(object.inflationRateChange) : "",
      inflationMax: isSet(object.inflationMax) ? String(object.inflationMax) : "",
      inflationMin: isSet(object.inflationMin) ? String(object.inflationMin) : "",
      goalBonded: isSet(object.goalBonded) ? String(object.goalBonded) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.mintDenom !== void 0 && (obj.mintDenom = message.mintDenom);
    message.inflationRateChange !== void 0 && (obj.inflationRateChange = message.inflationRateChange);
    message.inflationMax !== void 0 && (obj.inflationMax = message.inflationMax);
    message.inflationMin !== void 0 && (obj.inflationMin = message.inflationMin);
    message.goalBonded !== void 0 && (obj.goalBonded = message.goalBonded);
    message.blocksPerYear !== void 0 && (obj.blocksPerYear = (message.blocksPerYear || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$mintDenom, _object$inflationRate, _object$inflationMax, _object$inflationMin, _object$goalBonded;
    const message = createBaseParams();
    message.mintDenom = (_object$mintDenom = object.mintDenom) !== null && _object$mintDenom !== void 0 ? _object$mintDenom : "";
    message.inflationRateChange = (_object$inflationRate = object.inflationRateChange) !== null && _object$inflationRate !== void 0 ? _object$inflationRate : "";
    message.inflationMax = (_object$inflationMax = object.inflationMax) !== null && _object$inflationMax !== void 0 ? _object$inflationMax : "";
    message.inflationMin = (_object$inflationMin = object.inflationMin) !== null && _object$inflationMin !== void 0 ? _object$inflationMin : "";
    message.goalBonded = (_object$goalBonded = object.goalBonded) !== null && _object$goalBonded !== void 0 ? _object$goalBonded : "";
    message.blocksPerYear = object.blocksPerYear !== void 0 && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt("0");
    return message;
  }
};

export {
  Minter,
  Params,
  mint_exports
};
//# sourceMappingURL=chunk-TKRH3FEW.js.map
