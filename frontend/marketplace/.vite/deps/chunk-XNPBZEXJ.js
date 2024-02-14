import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  isObject,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/autocli/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/autocli/v1/query.js
var query_exports = {};
__export(query_exports, {
  AppOptionsRequest: () => AppOptionsRequest,
  AppOptionsResponse: () => AppOptionsResponse,
  AppOptionsResponse_ModuleOptionsEntry: () => AppOptionsResponse_ModuleOptionsEntry
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/autocli/v1/options.js
var options_exports = {};
__export(options_exports, {
  FlagOptions: () => FlagOptions,
  ModuleOptions: () => ModuleOptions,
  PositionalArgDescriptor: () => PositionalArgDescriptor,
  RpcCommandOptions: () => RpcCommandOptions,
  RpcCommandOptions_FlagOptionsEntry: () => RpcCommandOptions_FlagOptionsEntry,
  ServiceCommandDescriptor: () => ServiceCommandDescriptor,
  ServiceCommandDescriptor_SubCommandsEntry: () => ServiceCommandDescriptor_SubCommandsEntry
});
var _m0 = __toESM(require_minimal());
function createBaseModuleOptions() {
  return {
    tx: void 0,
    query: void 0
  };
}
var ModuleOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== void 0) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== void 0) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      tx: isSet(object.tx) ? ServiceCommandDescriptor.fromJSON(object.tx) : void 0,
      query: isSet(object.query) ? ServiceCommandDescriptor.fromJSON(object.query) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = message.tx ? ServiceCommandDescriptor.toJSON(message.tx) : void 0);
    message.query !== void 0 && (obj.query = message.query ? ServiceCommandDescriptor.toJSON(message.query) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== void 0 && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : void 0;
    return message;
  }
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: void 0
  };
}
var ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ServiceCommandDescriptor.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value ? ServiceCommandDescriptor.toJSON(message.value) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== void 0 && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : void 0;
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
var ServiceCommandDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          if (entry3.value !== void 0) {
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
  fromJSON(object) {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      rpcCommandOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.rpcCommandOptions) ? object.rpcCommandOptions.map((e) => RpcCommandOptions.fromJSON(e)) : [],
      subCommands: isObject(object.subCommands) ? Object.entries(object.subCommands).reduce((acc, [key, value]) => {
        acc[key] = ServiceCommandDescriptor.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
    message.service !== void 0 && (obj.service = message.service);
    if (message.rpcCommandOptions) {
      obj.rpcCommandOptions = message.rpcCommandOptions.map((e) => e ? RpcCommandOptions.toJSON(e) : void 0);
    } else {
      obj.rpcCommandOptions = [];
    }
    obj.subCommands = {};
    if (message.subCommands) {
      Object.entries(message.subCommands).forEach(([k, v]) => {
        obj.subCommands[k] = ServiceCommandDescriptor.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object) {
    var _object$service, _object$rpcCommandOpt, _object$subCommands;
    const message = createBaseServiceCommandDescriptor();
    message.service = (_object$service = object.service) !== null && _object$service !== void 0 ? _object$service : "";
    message.rpcCommandOptions = ((_object$rpcCommandOpt = object.rpcCommandOptions) === null || _object$rpcCommandOpt === void 0 ? void 0 : _object$rpcCommandOpt.map((e) => RpcCommandOptions.fromPartial(e))) || [];
    message.subCommands = Object.entries((_object$subCommands = object.subCommands) !== null && _object$subCommands !== void 0 ? _object$subCommands : {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
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
    value: void 0
  };
}
var RpcCommandOptions_FlagOptionsEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? FlagOptions.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value ? FlagOptions.toJSON(message.value) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = object.value !== void 0 && object.value !== null ? FlagOptions.fromPartial(object.value) : void 0;
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
var RpcCommandOptions = {
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
        key,
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
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          if (entry10.value !== void 0) {
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
  fromJSON(object) {
    return {
      rpcMethod: isSet(object.rpcMethod) ? String(object.rpcMethod) : "",
      use: isSet(object.use) ? String(object.use) : "",
      long: isSet(object.long) ? String(object.long) : "",
      short: isSet(object.short) ? String(object.short) : "",
      example: isSet(object.example) ? String(object.example) : "",
      alias: Array.isArray(object === null || object === void 0 ? void 0 : object.alias) ? object.alias.map((e) => String(e)) : [],
      suggestFor: Array.isArray(object === null || object === void 0 ? void 0 : object.suggestFor) ? object.suggestFor.map((e) => String(e)) : [],
      deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
      version: isSet(object.version) ? String(object.version) : "",
      flagOptions: isObject(object.flagOptions) ? Object.entries(object.flagOptions).reduce((acc, [key, value]) => {
        acc[key] = FlagOptions.fromJSON(value);
        return acc;
      }, {}) : {},
      positionalArgs: Array.isArray(object === null || object === void 0 ? void 0 : object.positionalArgs) ? object.positionalArgs.map((e) => PositionalArgDescriptor.fromJSON(e)) : [],
      skip: isSet(object.skip) ? Boolean(object.skip) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.rpcMethod !== void 0 && (obj.rpcMethod = message.rpcMethod);
    message.use !== void 0 && (obj.use = message.use);
    message.long !== void 0 && (obj.long = message.long);
    message.short !== void 0 && (obj.short = message.short);
    message.example !== void 0 && (obj.example = message.example);
    if (message.alias) {
      obj.alias = message.alias.map((e) => e);
    } else {
      obj.alias = [];
    }
    if (message.suggestFor) {
      obj.suggestFor = message.suggestFor.map((e) => e);
    } else {
      obj.suggestFor = [];
    }
    message.deprecated !== void 0 && (obj.deprecated = message.deprecated);
    message.version !== void 0 && (obj.version = message.version);
    obj.flagOptions = {};
    if (message.flagOptions) {
      Object.entries(message.flagOptions).forEach(([k, v]) => {
        obj.flagOptions[k] = FlagOptions.toJSON(v);
      });
    }
    if (message.positionalArgs) {
      obj.positionalArgs = message.positionalArgs.map((e) => e ? PositionalArgDescriptor.toJSON(e) : void 0);
    } else {
      obj.positionalArgs = [];
    }
    message.skip !== void 0 && (obj.skip = message.skip);
    return obj;
  },
  fromPartial(object) {
    var _object$rpcMethod, _object$use, _object$long, _object$short, _object$example, _object$alias, _object$suggestFor, _object$deprecated, _object$version, _object$flagOptions, _object$positionalArg, _object$skip;
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = (_object$rpcMethod = object.rpcMethod) !== null && _object$rpcMethod !== void 0 ? _object$rpcMethod : "";
    message.use = (_object$use = object.use) !== null && _object$use !== void 0 ? _object$use : "";
    message.long = (_object$long = object.long) !== null && _object$long !== void 0 ? _object$long : "";
    message.short = (_object$short = object.short) !== null && _object$short !== void 0 ? _object$short : "";
    message.example = (_object$example = object.example) !== null && _object$example !== void 0 ? _object$example : "";
    message.alias = ((_object$alias = object.alias) === null || _object$alias === void 0 ? void 0 : _object$alias.map((e) => e)) || [];
    message.suggestFor = ((_object$suggestFor = object.suggestFor) === null || _object$suggestFor === void 0 ? void 0 : _object$suggestFor.map((e) => e)) || [];
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.flagOptions = Object.entries((_object$flagOptions = object.flagOptions) !== null && _object$flagOptions !== void 0 ? _object$flagOptions : {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = ((_object$positionalArg = object.positionalArgs) === null || _object$positionalArg === void 0 ? void 0 : _object$positionalArg.map((e) => PositionalArgDescriptor.fromPartial(e))) || [];
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
var FlagOptions = {
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
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      shorthand: isSet(object.shorthand) ? String(object.shorthand) : "",
      usage: isSet(object.usage) ? String(object.usage) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      noOptDefaultValue: isSet(object.noOptDefaultValue) ? String(object.noOptDefaultValue) : "",
      deprecated: isSet(object.deprecated) ? String(object.deprecated) : "",
      shorthandDeprecated: isSet(object.shorthandDeprecated) ? String(object.shorthandDeprecated) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.shorthand !== void 0 && (obj.shorthand = message.shorthand);
    message.usage !== void 0 && (obj.usage = message.usage);
    message.defaultValue !== void 0 && (obj.defaultValue = message.defaultValue);
    message.noOptDefaultValue !== void 0 && (obj.noOptDefaultValue = message.noOptDefaultValue);
    message.deprecated !== void 0 && (obj.deprecated = message.deprecated);
    message.shorthandDeprecated !== void 0 && (obj.shorthandDeprecated = message.shorthandDeprecated);
    message.hidden !== void 0 && (obj.hidden = message.hidden);
    return obj;
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
var PositionalArgDescriptor = {
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
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      protoField: isSet(object.protoField) ? String(object.protoField) : "",
      varargs: isSet(object.varargs) ? Boolean(object.varargs) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.protoField !== void 0 && (obj.protoField = message.protoField);
    message.varargs !== void 0 && (obj.varargs = message.varargs);
    return obj;
  },
  fromPartial(object) {
    var _object$protoField, _object$varargs;
    const message = createBasePositionalArgDescriptor();
    message.protoField = (_object$protoField = object.protoField) !== null && _object$protoField !== void 0 ? _object$protoField : "";
    message.varargs = (_object$varargs = object.varargs) !== null && _object$varargs !== void 0 ? _object$varargs : false;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/autocli/v1/query.js
var _m02 = __toESM(require_minimal());
function createBaseAppOptionsRequest() {
  return {};
}
var AppOptionsRequest = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseAppOptionsRequest();
    return message;
  }
};
function createBaseAppOptionsResponse_ModuleOptionsEntry() {
  return {
    key: "",
    value: void 0
  };
}
var AppOptionsResponse_ModuleOptionsEntry = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ModuleOptions.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value ? ModuleOptions.toJSON(message.value) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== void 0 && object.value !== null ? ModuleOptions.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseAppOptionsResponse() {
  return {
    moduleOptions: {}
  };
}
var AppOptionsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
            message.moduleOptions[entry1.key] = entry1.value;
          }
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
      moduleOptions: isObject(object.moduleOptions) ? Object.entries(object.moduleOptions).reduce((acc, [key, value]) => {
        acc[key] = ModuleOptions.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
    obj.moduleOptions = {};
    if (message.moduleOptions) {
      Object.entries(message.moduleOptions).forEach(([k, v]) => {
        obj.moduleOptions[k] = ModuleOptions.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object) {
    var _object$moduleOptions;
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries((_object$moduleOptions = object.moduleOptions) !== null && _object$moduleOptions !== void 0 ? _object$moduleOptions : {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/autocli/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.appOptions = this.appOptions.bind(this);
  }
  appOptions(request = {}) {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
    return promise.then((data2) => AppOptionsResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    appOptions(request) {
      return queryService.appOptions(request);
    }
  };
};

export {
  options_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-XNPBZEXJ.js.map
