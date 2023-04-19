"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageTypeSDKType = exports.StorageType = exports.ModuleSchemaDescriptor_FileEntry = exports.ModuleSchemaDescriptor = void 0;
exports.storageTypeFromJSON = storageTypeFromJSON;
exports.storageTypeToJSON = storageTypeToJSON;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** StorageType */
var StorageType;
/** StorageType */
exports.StorageType = StorageType;
(function (StorageType) {
  StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType || (exports.StorageType = StorageType = {}));
var StorageTypeSDKType;
exports.StorageTypeSDKType = StorageTypeSDKType;
(function (StorageTypeSDKType) {
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageTypeSDKType[StorageTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageTypeSDKType || (exports.StorageTypeSDKType = StorageTypeSDKType = {}));
function storageTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
function storageTypeToJSON(object) {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */

function createBaseModuleSchemaDescriptor() {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}
var ModuleSchemaDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.schemaFile),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$schemaFile, _object$prefix;
    var message = createBaseModuleSchemaDescriptor();
    message.schemaFile = ((_object$schemaFile = object.schemaFile) === null || _object$schemaFile === void 0 ? void 0 : _object$schemaFile.map(function (e) {
      return ModuleSchemaDescriptor_FileEntry.fromPartial(e);
    })) || [];
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
exports.ModuleSchemaDescriptor = ModuleSchemaDescriptor;
function createBaseModuleSchemaDescriptor_FileEntry() {
  return {
    id: 0,
    protoFileName: "",
    storageType: 0
  };
}
var ModuleSchemaDescriptor_FileEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }
    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.protoFileName = reader.string();
          break;
        case 3:
          message.storageType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$protoFileName, _object$storageType;
    var message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    message.protoFileName = (_object$protoFileName = object.protoFileName) !== null && _object$protoFileName !== void 0 ? _object$protoFileName : "";
    message.storageType = (_object$storageType = object.storageType) !== null && _object$storageType !== void 0 ? _object$storageType : 0;
    return message;
  }
};
exports.ModuleSchemaDescriptor_FileEntry = ModuleSchemaDescriptor_FileEntry;