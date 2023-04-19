import * as _m0 from "protobufjs/minimal";
function createBaseEventAccessGranted() {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
export const EventAccessGranted = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccessGranted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$moduleName, _object$account, _object$msgType;
    const message = createBaseEventAccessGranted();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : "";
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    return message;
  }
};
function createBaseEventAccessRevoked() {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
export const EventAccessRevoked = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccessRevoked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$moduleName2, _object$account2, _object$msgType2;
    const message = createBaseEventAccessRevoked();
    message.moduleName = (_object$moduleName2 = object.moduleName) !== null && _object$moduleName2 !== void 0 ? _object$moduleName2 : "";
    message.account = (_object$account2 = object.account) !== null && _object$account2 !== void 0 ? _object$account2 : "";
    message.msgType = (_object$msgType2 = object.msgType) !== null && _object$msgType2 !== void 0 ? _object$msgType2 : "";
    return message;
  }
};