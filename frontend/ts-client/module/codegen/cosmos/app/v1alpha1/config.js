import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
function createBaseConfig() {
  return {
    modules: [],
    golangBindings: []
  };
}
export const Config = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.modules) {
      ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;
        case 2:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$modules, _object$golangBinding;
    const message = createBaseConfig();
    message.modules = ((_object$modules = object.modules) === null || _object$modules === void 0 ? void 0 : _object$modules.map(e => ModuleConfig.fromPartial(e))) || [];
    message.golangBindings = ((_object$golangBinding = object.golangBindings) === null || _object$golangBinding === void 0 ? void 0 : _object$golangBinding.map(e => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseModuleConfig() {
  return {
    name: "",
    config: undefined,
    golangBindings: []
  };
}
export const ModuleConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name, _object$golangBinding2;
    const message = createBaseModuleConfig();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.config = object.config !== undefined && object.config !== null ? Any.fromPartial(object.config) : undefined;
    message.golangBindings = ((_object$golangBinding2 = object.golangBindings) === null || _object$golangBinding2 === void 0 ? void 0 : _object$golangBinding2.map(e => GolangBinding.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGolangBinding() {
  return {
    interfaceType: "",
    implementation: ""
  };
}
export const GolangBinding = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interfaceType !== "") {
      writer.uint32(10).string(message.interfaceType);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceType = reader.string();
          break;
        case 2:
          message.implementation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$interfaceType, _object$implementatio;
    const message = createBaseGolangBinding();
    message.interfaceType = (_object$interfaceType = object.interfaceType) !== null && _object$interfaceType !== void 0 ? _object$interfaceType : "";
    message.implementation = (_object$implementatio = object.implementation) !== null && _object$implementatio !== void 0 ? _object$implementatio : "";
    return message;
  }
};