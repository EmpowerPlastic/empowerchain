import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    permStores: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.permStores) {
      ModulePermStore.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permStores.push(ModulePermStore.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$permStores;
    const message = createBaseGenesisState();
    message.permStores = ((_object$permStores = object.permStores) === null || _object$permStores === void 0 ? void 0 : _object$permStores.map(e => ModulePermStore.fromPartial(e))) || [];
    return message;
  }
};
function createBaseModulePermStore() {
  return {
    moduleName: "",
    accesses: []
  };
}
export const ModulePermStore = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.accesses) {
      Access.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulePermStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.accesses.push(Access.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$moduleName, _object$accesses;
    const message = createBaseModulePermStore();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.accesses = ((_object$accesses = object.accesses) === null || _object$accesses === void 0 ? void 0 : _object$accesses.map(e => Access.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAccess() {
  return {
    address: "",
    msgType: ""
  };
}
export const Access = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
    var _object$address, _object$msgType;
    const message = createBaseAccess();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    return message;
  }
};