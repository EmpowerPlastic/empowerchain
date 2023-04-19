"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppOptionsResponse_ModuleOptionsEntry = exports.AppOptionsResponse = exports.AppOptionsRequest = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _options = require("./options");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseAppOptionsRequest() {
  return {};
}
var AppOptionsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppOptionsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseAppOptionsRequest();
    return message;
  }
};
exports.AppOptionsRequest = AppOptionsRequest;
function createBaseAppOptionsResponse_ModuleOptionsEntry() {
  return {
    key: "",
    value: undefined
  };
}
var AppOptionsResponse_ModuleOptionsEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      _options.ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = _options.ModuleOptions.decode(reader, reader.uint32());
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
    var message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = object.value !== undefined && object.value !== null ? _options.ModuleOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
exports.AppOptionsResponse_ModuleOptionsEntry = AppOptionsResponse_ModuleOptionsEntry;
function createBaseAppOptionsResponse() {
  return {
    moduleOptions: {}
  };
}
var AppOptionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    Object.entries(message.moduleOptions).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key: key,
        value: value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          var entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
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
  fromPartial: function fromPartial(object) {
    var _object$moduleOptions;
    var message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries((_object$moduleOptions = object.moduleOptions) !== null && _object$moduleOptions !== void 0 ? _object$moduleOptions : {}).reduce(function (acc, _ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      if (value !== undefined) {
        acc[key] = _options.ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
exports.AppOptionsResponse = AppOptionsResponse;