"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCommandDescriptor_SubCommandsEntry = exports.ServiceCommandDescriptor = exports.RpcCommandOptions_FlagOptionsEntry = exports.RpcCommandOptions = exports.PositionalArgDescriptor = exports.ModuleOptions = exports.FlagOptions = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseModuleOptions() {
  return {
    tx: undefined,
    query: undefined
  };
}
var ModuleOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseModuleOptions();
    message.tx = object.tx !== undefined && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : undefined;
    return message;
  }
};
exports.ModuleOptions = ModuleOptions;
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: undefined
  };
}
var ServiceCommandDescriptor_SubCommandsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$key;
    var message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.ServiceCommandDescriptor_SubCommandsEntry = ServiceCommandDescriptor_SubCommandsEntry;
function createBaseServiceCommandDescriptor() {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {}
  };
}
var ServiceCommandDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    var _iterator = _createForOfIteratorHelper(message.rpcCommandOptions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    Object.entries(message.subCommands).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          var entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
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
  fromPartial: function fromPartial(object) {
    var _object$service, _object$rpcCommandOpt, _object$subCommands;
    var message = createBaseServiceCommandDescriptor();
    message.service = (_object$service = object.service) !== null && _object$service !== void 0 ? _object$service : "";
    message.rpcCommandOptions = ((_object$rpcCommandOpt = object.rpcCommandOptions) === null || _object$rpcCommandOpt === void 0 ? void 0 : _object$rpcCommandOpt.map(function (e) {
      return RpcCommandOptions.fromPartial(e);
    })) || [];
    message.subCommands = Object.entries((_object$subCommands = object.subCommands) !== null && _object$subCommands !== void 0 ? _object$subCommands : {}).reduce(function (acc, _ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
exports.ServiceCommandDescriptor = ServiceCommandDescriptor;
function createBaseRpcCommandOptions_FlagOptionsEntry() {
  return {
    key: "",
    value: undefined
  };
}
var RpcCommandOptions_FlagOptionsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$key2;
    var message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.value = object.value !== undefined && object.value !== null ? FlagOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.RpcCommandOptions_FlagOptionsEntry = RpcCommandOptions_FlagOptionsEntry;
function createBaseRpcCommandOptions() {
  return {
    rpcMethod: "",
    use: "",
    "long": "",
    "short": "",
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message["long"] !== "") {
      writer.uint32(26).string(message["long"]);
    }
    if (message["short"] !== "") {
      writer.uint32(34).string(message["short"]);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    var _iterator2 = _createForOfIteratorHelper(message.alias),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(50).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.suggestFor),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        writer.uint32(58).string(_v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(function (_ref5) {
      var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];
      RpcCommandOptions_FlagOptionsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(82).fork()).ldelim();
    });
    var _iterator4 = _createForOfIteratorHelper(message.positionalArgs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        PositionalArgDescriptor.encode(_v2, writer.uint32(90).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message["long"] = reader.string();
          break;
        case 4:
          message["short"] = reader.string();
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
          var entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
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
  fromPartial: function fromPartial(object) {
    var _object$rpcMethod, _object$use, _object$long, _object$short, _object$example, _object$alias, _object$suggestFor, _object$deprecated, _object$version, _object$flagOptions, _object$positionalArg, _object$skip;
    var message = createBaseRpcCommandOptions();
    message.rpcMethod = (_object$rpcMethod = object.rpcMethod) !== null && _object$rpcMethod !== void 0 ? _object$rpcMethod : "";
    message.use = (_object$use = object.use) !== null && _object$use !== void 0 ? _object$use : "";
    message["long"] = (_object$long = object["long"]) !== null && _object$long !== void 0 ? _object$long : "";
    message["short"] = (_object$short = object["short"]) !== null && _object$short !== void 0 ? _object$short : "";
    message.example = (_object$example = object.example) !== null && _object$example !== void 0 ? _object$example : "";
    message.alias = ((_object$alias = object.alias) === null || _object$alias === void 0 ? void 0 : _object$alias.map(function (e) {
      return e;
    })) || [];
    message.suggestFor = ((_object$suggestFor = object.suggestFor) === null || _object$suggestFor === void 0 ? void 0 : _object$suggestFor.map(function (e) {
      return e;
    })) || [];
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.flagOptions = Object.entries((_object$flagOptions = object.flagOptions) !== null && _object$flagOptions !== void 0 ? _object$flagOptions : {}).reduce(function (acc, _ref7) {
      var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
        key = _ref8[0],
        value = _ref8[1];
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = ((_object$positionalArg = object.positionalArgs) === null || _object$positionalArg === void 0 ? void 0 : _object$positionalArg.map(function (e) {
      return PositionalArgDescriptor.fromPartial(e);
    })) || [];
    message.skip = (_object$skip = object.skip) !== null && _object$skip !== void 0 ? _object$skip : false;
    return message;
  }
};
exports.RpcCommandOptions = RpcCommandOptions;
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFlagOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name, _object$shorthand, _object$usage, _object$defaultValue, _object$noOptDefaultV, _object$deprecated2, _object$shorthandDepr, _object$hidden;
    var message = createBaseFlagOptions();
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
exports.FlagOptions = FlagOptions;
function createBasePositionalArgDescriptor() {
  return {
    protoField: "",
    varargs: false
  };
}
var PositionalArgDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$protoField, _object$varargs;
    var message = createBasePositionalArgDescriptor();
    message.protoField = (_object$protoField = object.protoField) !== null && _object$protoField !== void 0 ? _object$protoField : "";
    message.varargs = (_object$varargs = object.varargs) !== null && _object$varargs !== void 0 ? _object$varargs : false;
    return message;
  }
};
exports.PositionalArgDescriptor = PositionalArgDescriptor;