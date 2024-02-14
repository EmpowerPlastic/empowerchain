import {
  base64FromBytes,
  bytesFromBase64,
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/query/v1beta1/pagination.js
var pagination_exports = {};
__export(pagination_exports, {
  PageRequest: () => PageRequest,
  PageResponse: () => PageResponse
});
var _m0 = __toESM(require_minimal());
function createBasePageRequest() {
  return {
    key: new Uint8Array(),
    offset: BigInt("0"),
    limit: BigInt("0"),
    countTotal: false,
    reverse: false
  };
}
var PageRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.offset.toString()));
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.limit.toString()));
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.limit = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.countTotal = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
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
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      offset: isSet(object.offset) ? BigInt(object.offset.toString()) : BigInt("0"),
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt("0"),
      countTotal: isSet(object.countTotal) ? Boolean(object.countTotal) : false,
      reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.offset !== void 0 && (obj.offset = (message.offset || BigInt("0")).toString());
    message.limit !== void 0 && (obj.limit = (message.limit || BigInt("0")).toString());
    message.countTotal !== void 0 && (obj.countTotal = message.countTotal);
    message.reverse !== void 0 && (obj.reverse = message.reverse);
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$countTotal, _object$reverse;
    const message = createBasePageRequest();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.offset = object.offset !== void 0 && object.offset !== null ? BigInt(object.offset.toString()) : BigInt("0");
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt("0");
    message.countTotal = (_object$countTotal = object.countTotal) !== null && _object$countTotal !== void 0 ? _object$countTotal : false;
    message.reverse = (_object$reverse = object.reverse) !== null && _object$reverse !== void 0 ? _object$reverse : false;
    return message;
  }
};
function createBasePageResponse() {
  return {
    nextKey: new Uint8Array(),
    total: BigInt("0")
  };
}
var PageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.total.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;
        case 2:
          message.total = BigInt(reader.uint64().toString());
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
      nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(),
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.nextKey !== void 0 && (obj.nextKey = base64FromBytes(message.nextKey !== void 0 ? message.nextKey : new Uint8Array()));
    message.total !== void 0 && (obj.total = (message.total || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$nextKey;
    const message = createBasePageResponse();
    message.nextKey = (_object$nextKey = object.nextKey) !== null && _object$nextKey !== void 0 ? _object$nextKey : new Uint8Array();
    message.total = object.total !== void 0 && object.total !== null ? BigInt(object.total.toString()) : BigInt("0");
    return message;
  }
};

export {
  PageRequest,
  PageResponse,
  pagination_exports
};
//# sourceMappingURL=chunk-PJKHK357.js.map
