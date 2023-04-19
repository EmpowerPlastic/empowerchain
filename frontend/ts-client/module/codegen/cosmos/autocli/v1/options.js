import * as _m0 from "protobufjs/minimal";
function createBaseModuleOptions() {
  return {
    tx: undefined,
    query: undefined
  };
}
export const ModuleOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  }
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: undefined
  };
}
export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseServiceCommandDescriptor() {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {}
  };
}
export const ServiceCommandDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: key,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.subCommands[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$service, _object$rpcCommandOpt, _object$subCommands;
    const message = createBaseServiceCommandDescriptor();
    message.service = (_object$service = object.service) !== null && _object$service !== void 0 ? _object$service : "";
    message.rpcCommandOptions = ((_object$rpcCommandOpt = object.rpcCommandOptions) === null || _object$rpcCommandOpt === void 0 ? void 0 : _object$rpcCommandOpt.map(e => RpcCommandOptions.fromPartial(e))) || [];
    message.subCommands = Object.entries((_object$subCommands = object.subCommands) !== null && _object$subCommands !== void 0 ? _object$subCommands : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseRpcCommandOptions_FlagOptionsEntry() {
  return {
    key: "",
    value: undefined
  };
}
export const RpcCommandOptions_FlagOptionsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseRpcCommandOptions() {
  return {
    rpcMethod: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggestFor: [],
    deprecated: "",
    version: "",
    flagOptions: {},
    positionalArgs: [],
    skip: false
  };
}
export const RpcCommandOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v);
    }
    for (const v of message.suggestFor) {
      writer.uint32(58).string(v);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: key,
        value
      }, writer.uint32(82).fork()).ldelim();
    });
    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggestFor.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.flagOptions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positionalArgs.push(PositionalArgDescriptor.decode(reader, reader.uint32()));
          break;
        case 12:
          message.skip = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$rpcMethod, _object$use, _object$long, _object$short, _object$example, _object$alias, _object$suggestFor, _object$deprecated, _object$version, _object$flagOptions, _object$positionalArg, _object$skip;
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = (_object$rpcMethod = object.rpcMethod) !== null && _object$rpcMethod !== void 0 ? _object$rpcMethod : "";
    message.use = (_object$use = object.use) !== null && _object$use !== void 0 ? _object$use : "";
    message.long = (_object$long = object.long) !== null && _object$long !== void 0 ? _object$long : "";
    message.short = (_object$short = object.short) !== null && _object$short !== void 0 ? _object$short : "";
    message.example = (_object$example = object.example) !== null && _object$example !== void 0 ? _object$example : "";
    message.alias = ((_object$alias = object.alias) === null || _object$alias === void 0 ? void 0 : _object$alias.map(e => e)) || [];
    message.suggestFor = ((_object$suggestFor = object.suggestFor) === null || _object$suggestFor === void 0 ? void 0 : _object$suggestFor.map(e => e)) || [];
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.flagOptions = Object.entries((_object$flagOptions = object.flagOptions) !== null && _object$flagOptions !== void 0 ? _object$flagOptions : {}).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = ((_object$positionalArg = object.positionalArgs) === null || _object$positionalArg === void 0 ? void 0 : _object$positionalArg.map(e => PositionalArgDescriptor.fromPartial(e))) || [];
    message.skip = (_object$skip = object.skip) !== null && _object$skip !== void 0 ? _object$skip : false;
    return message;
  }
};
function createBaseFlagOptions() {
  return {
    name: "",
    shorthand: "",
    usage: "",
    defaultValue: "",
    noOptDefaultValue: "",
    deprecated: "",
    shorthandDeprecated: "",
    hidden: false
  };
}
export const FlagOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.noOptDefaultValue !== "") {
      writer.uint32(42).string(message.noOptDefaultValue);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 5:
          message.noOptDefaultValue = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthandDeprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name, _object$shorthand, _object$usage, _object$defaultValue, _object$noOptDefaultV, _object$deprecated2, _object$shorthandDepr, _object$hidden;
    const message = createBaseFlagOptions();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.shorthand = (_object$shorthand = object.shorthand) !== null && _object$shorthand !== void 0 ? _object$shorthand : "";
    message.usage = (_object$usage = object.usage) !== null && _object$usage !== void 0 ? _object$usage : "";
    message.defaultValue = (_object$defaultValue = object.defaultValue) !== null && _object$defaultValue !== void 0 ? _object$defaultValue : "";
    message.noOptDefaultValue = (_object$noOptDefaultV = object.noOptDefaultValue) !== null && _object$noOptDefaultV !== void 0 ? _object$noOptDefaultV : "";
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : "";
    message.shorthandDeprecated = (_object$shorthandDepr = object.shorthandDeprecated) !== null && _object$shorthandDepr !== void 0 ? _object$shorthandDepr : "";
    message.hidden = (_object$hidden = object.hidden) !== null && _object$hidden !== void 0 ? _object$hidden : false;
    return message;
  }
};
function createBasePositionalArgDescriptor() {
  return {
    protoField: "",
    varargs: false
  };
}
export const PositionalArgDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$protoField, _object$varargs;
    const message = createBasePositionalArgDescriptor();
    message.protoField = (_object$protoField = object.protoField) !== null && _object$protoField !== void 0 ? _object$protoField : "";
    message.varargs = (_object$varargs = object.varargs) !== null && _object$varargs !== void 0 ? _object$varargs : false;
    return message;
  }
};