import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Minter represents the minting state. */

function createBaseMinter() {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
export const Minter = {
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
    let end = length === undefined ? reader.len : reader.pos + length;
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
    blocksPerYear: Long.UZERO
  };
}
export const Params = {
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
    if (!message.blocksPerYear.isZero()) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$mintDenom, _object$inflationRate, _object$inflationMax, _object$inflationMin, _object$goalBonded;
    const message = createBaseParams();
    message.mintDenom = (_object$mintDenom = object.mintDenom) !== null && _object$mintDenom !== void 0 ? _object$mintDenom : "";
    message.inflationRateChange = (_object$inflationRate = object.inflationRateChange) !== null && _object$inflationRate !== void 0 ? _object$inflationRate : "";
    message.inflationMax = (_object$inflationMax = object.inflationMax) !== null && _object$inflationMax !== void 0 ? _object$inflationMax : "";
    message.inflationMin = (_object$inflationMin = object.inflationMin) !== null && _object$inflationMin !== void 0 ? _object$inflationMin : "";
    message.goalBonded = (_object$goalBonded = object.goalBonded) !== null && _object$goalBonded !== void 0 ? _object$goalBonded : "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }
};