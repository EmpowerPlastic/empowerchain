import {
  Duration
} from "./chunk-J33TOWTN.js";
import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/slashing/v1beta1/slashing.js
var slashing_exports = {};
__export(slashing_exports, {
  Params: () => Params,
  ValidatorSigningInfo: () => ValidatorSigningInfo
});
var _m0 = __toESM(require_minimal());
function createBaseValidatorSigningInfo() {
  return {
    address: "",
    startHeight: BigInt("0"),
    indexOffset: BigInt("0"),
    jailedUntil: void 0,
    tombstoned: false,
    missedBlocksCounter: BigInt("0")
  };
}
var ValidatorSigningInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.startHeight.toString()));
    }
    if (message.indexOffset !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.indexOffset.toString()));
    }
    if (message.jailedUntil !== void 0) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(48).int64(import_long.default.fromString(message.missedBlocksCounter.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = BigInt(reader.int64().toString());
          break;
        case 3:
          message.indexOffset = BigInt(reader.int64().toString());
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = BigInt(reader.int64().toString());
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
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt("0"),
      indexOffset: isSet(object.indexOffset) ? BigInt(object.indexOffset.toString()) : BigInt("0"),
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : void 0,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? BigInt(object.missedBlocksCounter.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.startHeight !== void 0 && (obj.startHeight = (message.startHeight || BigInt("0")).toString());
    message.indexOffset !== void 0 && (obj.indexOffset = (message.indexOffset || BigInt("0")).toString());
    message.jailedUntil !== void 0 && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== void 0 && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== void 0 && (obj.missedBlocksCounter = (message.missedBlocksCounter || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$jailedUntil, _object$tombstoned;
    const message = createBaseValidatorSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.startHeight = object.startHeight !== void 0 && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt("0");
    message.indexOffset = object.indexOffset !== void 0 && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt("0");
    message.jailedUntil = (_object$jailedUntil = object.jailedUntil) !== null && _object$jailedUntil !== void 0 ? _object$jailedUntil : void 0;
    message.tombstoned = (_object$tombstoned = object.tombstoned) !== null && _object$tombstoned !== void 0 ? _object$tombstoned : false;
    message.missedBlocksCounter = object.missedBlocksCounter !== void 0 && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt("0");
    return message;
  }
};
function createBaseParams() {
  return {
    signedBlocksWindow: BigInt("0"),
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: void 0,
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.signedBlocksWindow !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.signedBlocksWindow.toString()));
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== void 0) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
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
          message.signedBlocksWindow = BigInt(reader.int64().toString());
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
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
      signedBlocksWindow: isSet(object.signedBlocksWindow) ? BigInt(object.signedBlocksWindow.toString()) : BigInt("0"),
      minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
      downtimeJailDuration: isSet(object.downtimeJailDuration) ? Duration.fromJSON(object.downtimeJailDuration) : void 0,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
      slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.signedBlocksWindow !== void 0 && (obj.signedBlocksWindow = (message.signedBlocksWindow || BigInt("0")).toString());
    message.minSignedPerWindow !== void 0 && (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== void 0 ? message.minSignedPerWindow : new Uint8Array()));
    message.downtimeJailDuration !== void 0 && (obj.downtimeJailDuration = message.downtimeJailDuration ? Duration.toJSON(message.downtimeJailDuration) : void 0);
    message.slashFractionDoubleSign !== void 0 && (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== void 0 ? message.slashFractionDoubleSign : new Uint8Array()));
    message.slashFractionDowntime !== void 0 && (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== void 0 ? message.slashFractionDowntime : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$minSignedPerW, _object$slashFraction, _object$slashFraction2;
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== void 0 && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt("0");
    message.minSignedPerWindow = (_object$minSignedPerW = object.minSignedPerWindow) !== null && _object$minSignedPerW !== void 0 ? _object$minSignedPerW : new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== void 0 && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : void 0;
    message.slashFractionDoubleSign = (_object$slashFraction = object.slashFractionDoubleSign) !== null && _object$slashFraction !== void 0 ? _object$slashFraction : new Uint8Array();
    message.slashFractionDowntime = (_object$slashFraction2 = object.slashFractionDowntime) !== null && _object$slashFraction2 !== void 0 ? _object$slashFraction2 : new Uint8Array();
    return message;
  }
};

export {
  ValidatorSigningInfo,
  Params,
  slashing_exports
};
//# sourceMappingURL=chunk-IT373EAN.js.map
