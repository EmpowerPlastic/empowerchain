import {
  base64FromBytes,
  bytesFromBase64,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/google/protobuf/any.js
var any_exports = {};
__export(any_exports, {
  Any: () => Any
});
var _m0 = __toESM(require_minimal());
function createBaseAny() {
  return {
    typeUrl: "",
    value: new Uint8Array()
  };
}
var Any = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
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
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.typeUrl !== void 0 && (obj.typeUrl = message.typeUrl);
    message.value !== void 0 && (obj.value = base64FromBytes(message.value !== void 0 ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$typeUrl, _object$value;
    const message = createBaseAny();
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};

export {
  Any,
  any_exports
};
//# sourceMappingURL=chunk-5CF6M437.js.map
