"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDescriptor = exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseTableDescriptor() {
  return {
    primaryKey: undefined,
    index: [],
    id: 0
  };
}
var TableDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.index),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTableDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$id;
    var message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = ((_object$index = object.index) === null || _object$index === void 0 ? void 0 : _object$index.map(function (e) {
      return SecondaryIndexDescriptor.fromPartial(e);
    })) || [];
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    return message;
  }
};
exports.TableDescriptor = TableDescriptor;
function createBasePrimaryKeyDescriptor() {
  return {
    fields: "",
    autoIncrement: false
  };
}
var PrimaryKeyDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.autoIncrement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fields, _object$autoIncrement;
    var message = createBasePrimaryKeyDescriptor();
    message.fields = (_object$fields = object.fields) !== null && _object$fields !== void 0 ? _object$fields : "";
    message.autoIncrement = (_object$autoIncrement = object.autoIncrement) !== null && _object$autoIncrement !== void 0 ? _object$autoIncrement : false;
    return message;
  }
};
exports.PrimaryKeyDescriptor = PrimaryKeyDescriptor;
function createBaseSecondaryIndexDescriptor() {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
var SecondaryIndexDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.unique = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fields2, _object$id2, _object$unique;
    var message = createBaseSecondaryIndexDescriptor();
    message.fields = (_object$fields2 = object.fields) !== null && _object$fields2 !== void 0 ? _object$fields2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : 0;
    message.unique = (_object$unique = object.unique) !== null && _object$unique !== void 0 ? _object$unique : false;
    return message;
  }
};
exports.SecondaryIndexDescriptor = SecondaryIndexDescriptor;
function createBaseSingletonDescriptor() {
  return {
    id: 0
  };
}
var SingletonDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id3;
    var message = createBaseSingletonDescriptor();
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : 0;
    return message;
  }
};
exports.SingletonDescriptor = SingletonDescriptor;