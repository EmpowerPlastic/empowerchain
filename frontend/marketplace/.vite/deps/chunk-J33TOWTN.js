import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/google/protobuf/duration.js
var duration_exports = {};
__export(duration_exports, {
  Duration: () => Duration
});
var _m0 = __toESM(require_minimal());
function createBaseDuration() {
  return {
    seconds: BigInt("0"),
    nanos: 0
  };
}
var Duration = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.seconds !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.seconds.toString()));
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = BigInt(reader.int64().toString());
          break;
        case 2:
          message.nanos = reader.int32();
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
      seconds: isSet(object.seconds) ? BigInt(object.seconds.toString()) : BigInt("0"),
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.seconds !== void 0 && (obj.seconds = (message.seconds || BigInt("0")).toString());
    message.nanos !== void 0 && (obj.nanos = Math.round(message.nanos));
    return obj;
  },
  fromPartial(object) {
    var _object$nanos;
    const message = createBaseDuration();
    message.seconds = object.seconds !== void 0 && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt("0");
    message.nanos = (_object$nanos = object.nanos) !== null && _object$nanos !== void 0 ? _object$nanos : 0;
    return message;
  }
};

export {
  Duration,
  duration_exports
};
//# sourceMappingURL=chunk-J33TOWTN.js.map
