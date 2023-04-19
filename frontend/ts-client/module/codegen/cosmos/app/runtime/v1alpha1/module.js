import * as _m0 from "protobufjs/minimal";
function createBaseModule() {
  return {
    appName: "",
    beginBlockers: [],
    endBlockers: [],
    initGenesis: [],
    exportGenesis: [],
    overrideStoreKeys: []
  };
}
export const Module = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(18).string(v);
    }
    for (const v of message.endBlockers) {
      writer.uint32(26).string(v);
    }
    for (const v of message.initGenesis) {
      writer.uint32(34).string(v);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(42).string(v);
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.beginBlockers.push(reader.string());
          break;
        case 3:
          message.endBlockers.push(reader.string());
          break;
        case 4:
          message.initGenesis.push(reader.string());
          break;
        case 5:
          message.exportGenesis.push(reader.string());
          break;
        case 6:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$appName, _object$beginBlockers, _object$endBlockers, _object$initGenesis, _object$exportGenesis, _object$overrideStore;
    const message = createBaseModule();
    message.appName = (_object$appName = object.appName) !== null && _object$appName !== void 0 ? _object$appName : "";
    message.beginBlockers = ((_object$beginBlockers = object.beginBlockers) === null || _object$beginBlockers === void 0 ? void 0 : _object$beginBlockers.map(e => e)) || [];
    message.endBlockers = ((_object$endBlockers = object.endBlockers) === null || _object$endBlockers === void 0 ? void 0 : _object$endBlockers.map(e => e)) || [];
    message.initGenesis = ((_object$initGenesis = object.initGenesis) === null || _object$initGenesis === void 0 ? void 0 : _object$initGenesis.map(e => e)) || [];
    message.exportGenesis = ((_object$exportGenesis = object.exportGenesis) === null || _object$exportGenesis === void 0 ? void 0 : _object$exportGenesis.map(e => e)) || [];
    message.overrideStoreKeys = ((_object$overrideStore = object.overrideStoreKeys) === null || _object$overrideStore === void 0 ? void 0 : _object$overrideStore.map(e => StoreKeyConfig.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStoreKeyConfig() {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}
export const StoreKeyConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$moduleName, _object$kvStoreKey;
    const message = createBaseStoreKeyConfig();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.kvStoreKey = (_object$kvStoreKey = object.kvStoreKey) !== null && _object$kvStoreKey !== void 0 ? _object$kvStoreKey : "";
    return message;
  }
};