import * as _m0 from "protobufjs/minimal";
function createBaseHttp() {
  return {
    rules: [],
    fullyDecodeReservedExpansion: false
  };
}
export const Http = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rules) {
      HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fullyDecodeReservedExpansion === true) {
      writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fullyDecodeReservedExpansion = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$rules, _object$fullyDecodeRe;
    const message = createBaseHttp();
    message.rules = ((_object$rules = object.rules) === null || _object$rules === void 0 ? void 0 : _object$rules.map(e => HttpRule.fromPartial(e))) || [];
    message.fullyDecodeReservedExpansion = (_object$fullyDecodeRe = object.fullyDecodeReservedExpansion) !== null && _object$fullyDecodeRe !== void 0 ? _object$fullyDecodeRe : false;
    return message;
  }
};
function createBaseHttpRule() {
  return {
    selector: "",
    get: undefined,
    put: undefined,
    post: undefined,
    delete: undefined,
    patch: undefined,
    custom: undefined,
    body: "",
    responseBody: "",
    additionalBindings: []
  };
}
export const HttpRule = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }
    if (message.delete !== undefined) {
      writer.uint32(42).string(message.delete);
    }
    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }
    for (const v of message.additionalBindings) {
      HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.get = reader.string();
          break;
        case 3:
          message.put = reader.string();
          break;
        case 4:
          message.post = reader.string();
          break;
        case 5:
          message.delete = reader.string();
          break;
        case 6:
          message.patch = reader.string();
          break;
        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;
        case 7:
          message.body = reader.string();
          break;
        case 12:
          message.responseBody = reader.string();
          break;
        case 11:
          message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$selector, _object$get, _object$put, _object$post, _object$delete, _object$patch, _object$body, _object$responseBody, _object$additionalBin;
    const message = createBaseHttpRule();
    message.selector = (_object$selector = object.selector) !== null && _object$selector !== void 0 ? _object$selector : "";
    message.get = (_object$get = object.get) !== null && _object$get !== void 0 ? _object$get : undefined;
    message.put = (_object$put = object.put) !== null && _object$put !== void 0 ? _object$put : undefined;
    message.post = (_object$post = object.post) !== null && _object$post !== void 0 ? _object$post : undefined;
    message.delete = (_object$delete = object.delete) !== null && _object$delete !== void 0 ? _object$delete : undefined;
    message.patch = (_object$patch = object.patch) !== null && _object$patch !== void 0 ? _object$patch : undefined;
    message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
    message.body = (_object$body = object.body) !== null && _object$body !== void 0 ? _object$body : "";
    message.responseBody = (_object$responseBody = object.responseBody) !== null && _object$responseBody !== void 0 ? _object$responseBody : "";
    message.additionalBindings = ((_object$additionalBin = object.additionalBindings) === null || _object$additionalBin === void 0 ? void 0 : _object$additionalBin.map(e => HttpRule.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCustomHttpPattern() {
  return {
    kind: "",
    path: ""
  };
}
export const CustomHttpPattern = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$kind, _object$path;
    const message = createBaseCustomHttpPattern();
    message.kind = (_object$kind = object.kind) !== null && _object$kind !== void 0 ? _object$kind : "";
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    return message;
  }
};