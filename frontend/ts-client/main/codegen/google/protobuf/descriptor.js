"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.ServiceOptions = exports.ServiceDescriptorProto = exports.OneofOptions = exports.OneofDescriptorProto = exports.MethodOptions_IdempotencyLevelSDKType = exports.MethodOptions_IdempotencyLevel = exports.MethodOptions = exports.MethodDescriptorProto = exports.MessageOptions = exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.FileOptions_OptimizeModeSDKType = exports.FileOptions_OptimizeMode = exports.FileOptions = exports.FileDescriptorSet = exports.FileDescriptorProto = exports.FieldOptions_JSTypeSDKType = exports.FieldOptions_JSType = exports.FieldOptions_CTypeSDKType = exports.FieldOptions_CType = exports.FieldOptions = exports.FieldDescriptorProto_TypeSDKType = exports.FieldDescriptorProto_Type = exports.FieldDescriptorProto_LabelSDKType = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.EnumValueOptions = exports.EnumValueDescriptorProto = exports.EnumOptions = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = void 0;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FieldDescriptorProto_Type;
exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
var FieldDescriptorProto_TypeSDKType;
exports.FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_TypeSDKType;
(function (FieldDescriptorProto_TypeSDKType) {
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_INT64"] = 3] = "TYPE_INT64";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_UINT64"] = 4] = "TYPE_UINT64";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_INT32"] = 5] = "TYPE_INT32";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_BOOL"] = 8] = "TYPE_BOOL";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_STRING"] = 9] = "TYPE_STRING";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_GROUP"] = 10] = "TYPE_GROUP";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_BYTES"] = 12] = "TYPE_BYTES";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_UINT32"] = 13] = "TYPE_UINT32";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_ENUM"] = 14] = "TYPE_ENUM";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_SINT32"] = 17] = "TYPE_SINT32";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["TYPE_SINT64"] = 18] = "TYPE_SINT64";
  FieldDescriptorProto_TypeSDKType[FieldDescriptorProto_TypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_TypeSDKType || (exports.FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_TypeSDKType = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
function fieldDescriptorProto_TypeToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldDescriptorProto_Label;
exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
var FieldDescriptorProto_LabelSDKType;
exports.FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_LabelSDKType;
(function (FieldDescriptorProto_LabelSDKType) {
  FieldDescriptorProto_LabelSDKType[FieldDescriptorProto_LabelSDKType["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_LabelSDKType[FieldDescriptorProto_LabelSDKType["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_LabelSDKType[FieldDescriptorProto_LabelSDKType["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_LabelSDKType[FieldDescriptorProto_LabelSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_LabelSDKType || (exports.FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_LabelSDKType = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
function fieldDescriptorProto_LabelToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
/** Generated classes can be optimized for speed or code size. */
exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
var FileOptions_OptimizeModeSDKType;
exports.FileOptions_OptimizeModeSDKType = FileOptions_OptimizeModeSDKType;
(function (FileOptions_OptimizeModeSDKType) {
  FileOptions_OptimizeModeSDKType[FileOptions_OptimizeModeSDKType["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeModeSDKType[FileOptions_OptimizeModeSDKType["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeModeSDKType[FileOptions_OptimizeModeSDKType["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeModeSDKType[FileOptions_OptimizeModeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeModeSDKType || (exports.FileOptions_OptimizeModeSDKType = FileOptions_OptimizeModeSDKType = {}));
function fileOptions_OptimizeModeFromJSON(object) {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
function fileOptions_OptimizeModeToJSON(object) {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_CType;
exports.FieldOptions_CType = FieldOptions_CType;
(function (FieldOptions_CType) {
  FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
  FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
  FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
var FieldOptions_CTypeSDKType;
exports.FieldOptions_CTypeSDKType = FieldOptions_CTypeSDKType;
(function (FieldOptions_CTypeSDKType) {
  FieldOptions_CTypeSDKType[FieldOptions_CTypeSDKType["STRING"] = 0] = "STRING";
  FieldOptions_CTypeSDKType[FieldOptions_CTypeSDKType["CORD"] = 1] = "CORD";
  FieldOptions_CTypeSDKType[FieldOptions_CTypeSDKType["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CTypeSDKType[FieldOptions_CTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CTypeSDKType || (exports.FieldOptions_CTypeSDKType = FieldOptions_CTypeSDKType = {}));
function fieldOptions_CTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
function fieldOptions_CTypeToJSON(object) {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_JSType;
exports.FieldOptions_JSType = FieldOptions_JSType;
(function (FieldOptions_JSType) {
  FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
var FieldOptions_JSTypeSDKType;
exports.FieldOptions_JSTypeSDKType = FieldOptions_JSTypeSDKType;
(function (FieldOptions_JSTypeSDKType) {
  FieldOptions_JSTypeSDKType[FieldOptions_JSTypeSDKType["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSTypeSDKType[FieldOptions_JSTypeSDKType["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSTypeSDKType[FieldOptions_JSTypeSDKType["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSTypeSDKType[FieldOptions_JSTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSTypeSDKType || (exports.FieldOptions_JSTypeSDKType = FieldOptions_JSTypeSDKType = {}));
function fieldOptions_JSTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
function fieldOptions_JSTypeToJSON(object) {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
var MethodOptions_IdempotencyLevelSDKType;
exports.MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevelSDKType;
(function (MethodOptions_IdempotencyLevelSDKType) {
  MethodOptions_IdempotencyLevelSDKType[MethodOptions_IdempotencyLevelSDKType["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevelSDKType[MethodOptions_IdempotencyLevelSDKType["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevelSDKType[MethodOptions_IdempotencyLevelSDKType["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevelSDKType[MethodOptions_IdempotencyLevelSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevelSDKType || (exports.MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevelSDKType = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
function methodOptions_IdempotencyLevelToJSON(object) {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */

function createBaseFileDescriptorSet() {
  return {
    file: []
  };
}
var FileDescriptorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.file),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$file;
    var message = createBaseFileDescriptorSet();
    message.file = ((_object$file = object.file) === null || _object$file === void 0 ? void 0 : _object$file.map(function (e) {
      return FileDescriptorProto.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FileDescriptorSet = FileDescriptorSet;
function createBaseFileDescriptorProto() {
  return {
    name: "",
    "package": "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: ""
  };
}
var FileDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message["package"] !== "") {
      writer.uint32(18).string(message["package"]);
    }
    var _iterator2 = _createForOfIteratorHelper(message.dependency),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.uint32(82).fork();
    var _iterator3 = _createForOfIteratorHelper(message.publicDependency),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        writer.int32(_v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    writer.ldelim();
    writer.uint32(90).fork();
    var _iterator4 = _createForOfIteratorHelper(message.weakDependency),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        writer.int32(_v2);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    var _iterator5 = _createForOfIteratorHelper(message.messageType),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        DescriptorProto.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.enumType),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v4 = _step6.value;
        EnumDescriptorProto.encode(_v4, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.service),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        ServiceDescriptorProto.encode(_v5, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.extension),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v6 = _step8.value;
        FieldDescriptorProto.encode(_v6, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message["package"] = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            var _end = reader.uint32() + reader.pos;
            while (reader.pos < _end) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$package, _object$dependency, _object$publicDepende, _object$weakDependenc, _object$messageType, _object$enumType, _object$service, _object$extension, _object$syntax;
    var message = createBaseFileDescriptorProto();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message["package"] = (_object$package = object["package"]) !== null && _object$package !== void 0 ? _object$package : "";
    message.dependency = ((_object$dependency = object.dependency) === null || _object$dependency === void 0 ? void 0 : _object$dependency.map(function (e) {
      return e;
    })) || [];
    message.publicDependency = ((_object$publicDepende = object.publicDependency) === null || _object$publicDepende === void 0 ? void 0 : _object$publicDepende.map(function (e) {
      return e;
    })) || [];
    message.weakDependency = ((_object$weakDependenc = object.weakDependency) === null || _object$weakDependenc === void 0 ? void 0 : _object$weakDependenc.map(function (e) {
      return e;
    })) || [];
    message.messageType = ((_object$messageType = object.messageType) === null || _object$messageType === void 0 ? void 0 : _object$messageType.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enumType = ((_object$enumType = object.enumType) === null || _object$enumType === void 0 ? void 0 : _object$enumType.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.service = ((_object$service = object.service) === null || _object$service === void 0 ? void 0 : _object$service.map(function (e) {
      return ServiceDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension = object.extension) === null || _object$extension === void 0 ? void 0 : _object$extension.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
    message.syntax = (_object$syntax = object.syntax) !== null && _object$syntax !== void 0 ? _object$syntax : "";
    return message;
  }
};
exports.FileDescriptorProto = FileDescriptorProto;
function createBaseDescriptorProto() {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
var DescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator9 = _createForOfIteratorHelper(message.field),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    var _iterator10 = _createForOfIteratorHelper(message.extension),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _v7 = _step10.value;
        FieldDescriptorProto.encode(_v7, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    var _iterator11 = _createForOfIteratorHelper(message.nestedType),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v8 = _step11.value;
        DescriptorProto.encode(_v8, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var _iterator12 = _createForOfIteratorHelper(message.enumType),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _v9 = _step12.value;
        EnumDescriptorProto.encode(_v9, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var _iterator13 = _createForOfIteratorHelper(message.extensionRange),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _v10 = _step13.value;
        DescriptorProto_ExtensionRange.encode(_v10, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    var _iterator14 = _createForOfIteratorHelper(message.oneofDecl),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _v11 = _step14.value;
        OneofDescriptorProto.encode(_v11, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    var _iterator15 = _createForOfIteratorHelper(message.reservedRange),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _v12 = _step15.value;
        DescriptorProto_ReservedRange.encode(_v12, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var _iterator16 = _createForOfIteratorHelper(message.reservedName),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _v13 = _step16.value;
        writer.uint32(82).string(_v13);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$field, _object$extension2, _object$nestedType, _object$enumType2, _object$extensionRang, _object$oneofDecl, _object$reservedRange, _object$reservedName;
    var message = createBaseDescriptorProto();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.field = ((_object$field = object.field) === null || _object$field === void 0 ? void 0 : _object$field.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension2 = object.extension) === null || _object$extension2 === void 0 ? void 0 : _object$extension2.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.nestedType = ((_object$nestedType = object.nestedType) === null || _object$nestedType === void 0 ? void 0 : _object$nestedType.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enumType = ((_object$enumType2 = object.enumType) === null || _object$enumType2 === void 0 ? void 0 : _object$enumType2.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.extensionRange = ((_object$extensionRang = object.extensionRange) === null || _object$extensionRang === void 0 ? void 0 : _object$extensionRang.map(function (e) {
      return DescriptorProto_ExtensionRange.fromPartial(e);
    })) || [];
    message.oneofDecl = ((_object$oneofDecl = object.oneofDecl) === null || _object$oneofDecl === void 0 ? void 0 : _object$oneofDecl.map(function (e) {
      return OneofDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange = object.reservedRange) === null || _object$reservedRange === void 0 ? void 0 : _object$reservedRange.map(function (e) {
      return DescriptorProto_ReservedRange.fromPartial(e);
    })) || [];
    message.reservedName = ((_object$reservedName = object.reservedName) === null || _object$reservedName === void 0 ? void 0 : _object$reservedName.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.DescriptorProto = DescriptorProto;
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: undefined
  };
}
var DescriptorProto_ExtensionRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$start, _object$end;
    var message = createBaseDescriptorProto_ExtensionRange();
    message.start = (_object$start = object.start) !== null && _object$start !== void 0 ? _object$start : 0;
    message.end = (_object$end = object.end) !== null && _object$end !== void 0 ? _object$end : 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.DescriptorProto_ExtensionRange = DescriptorProto_ExtensionRange;
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var DescriptorProto_ReservedRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$start2, _object$end2;
    var message = createBaseDescriptorProto_ReservedRange();
    message.start = (_object$start2 = object.start) !== null && _object$start2 !== void 0 ? _object$start2 : 0;
    message.end = (_object$end2 = object.end) !== null && _object$end2 !== void 0 ? _object$end2 : 0;
    return message;
  }
};
exports.DescriptorProto_ReservedRange = DescriptorProto_ReservedRange;
function createBaseExtensionRangeOptions() {
  return {
    uninterpretedOption: []
  };
}
var ExtensionRangeOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator17 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var v = _step17.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted;
    var message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = ((_object$uninterpreted = object.uninterpretedOption) === null || _object$uninterpreted === void 0 ? void 0 : _object$uninterpreted.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ExtensionRangeOptions = ExtensionRangeOptions;
function createBaseFieldDescriptorProto() {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined
  };
}
var FieldDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32();
          break;
        case 5:
          message.type = reader.int32();
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name3, _object$number, _object$label, _object$type, _object$typeName, _object$extendee, _object$defaultValue, _object$oneofIndex, _object$jsonName;
    var message = createBaseFieldDescriptorProto();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : 1;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 1;
    message.typeName = (_object$typeName = object.typeName) !== null && _object$typeName !== void 0 ? _object$typeName : "";
    message.extendee = (_object$extendee = object.extendee) !== null && _object$extendee !== void 0 ? _object$extendee : "";
    message.defaultValue = (_object$defaultValue = object.defaultValue) !== null && _object$defaultValue !== void 0 ? _object$defaultValue : "";
    message.oneofIndex = (_object$oneofIndex = object.oneofIndex) !== null && _object$oneofIndex !== void 0 ? _object$oneofIndex : 0;
    message.jsonName = (_object$jsonName = object.jsonName) !== null && _object$jsonName !== void 0 ? _object$jsonName : "";
    message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.FieldDescriptorProto = FieldDescriptorProto;
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: undefined
  };
}
var OneofDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name4;
    var message = createBaseOneofDescriptorProto();
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.OneofDescriptorProto = OneofDescriptorProto;
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
var EnumDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator18 = _createForOfIteratorHelper(message.value),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var v = _step18.value;
        EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    var _iterator19 = _createForOfIteratorHelper(message.reservedRange),
      _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var _v14 = _step19.value;
        EnumDescriptorProto_EnumReservedRange.encode(_v14, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    var _iterator20 = _createForOfIteratorHelper(message.reservedName),
      _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var _v15 = _step20.value;
        writer.uint32(42).string(_v15);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name5, _object$value, _object$reservedRange2, _object$reservedName2;
    var message = createBaseEnumDescriptorProto();
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.value = ((_object$value = object.value) === null || _object$value === void 0 ? void 0 : _object$value.map(function (e) {
      return EnumValueDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange2 = object.reservedRange) === null || _object$reservedRange2 === void 0 ? void 0 : _object$reservedRange2.map(function (e) {
      return EnumDescriptorProto_EnumReservedRange.fromPartial(e);
    })) || [];
    message.reservedName = ((_object$reservedName2 = object.reservedName) === null || _object$reservedName2 === void 0 ? void 0 : _object$reservedName2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.EnumDescriptorProto = EnumDescriptorProto;
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var EnumDescriptorProto_EnumReservedRange = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$start3, _object$end3;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = (_object$start3 = object.start) !== null && _object$start3 !== void 0 ? _object$start3 : 0;
    message.end = (_object$end3 = object.end) !== null && _object$end3 !== void 0 ? _object$end3 : 0;
    return message;
  }
};
exports.EnumDescriptorProto_EnumReservedRange = EnumDescriptorProto_EnumReservedRange;
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: undefined
  };
}
var EnumValueDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name6, _object$number2;
    var message = createBaseEnumValueDescriptorProto();
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.number = (_object$number2 = object.number) !== null && _object$number2 !== void 0 ? _object$number2 : 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.EnumValueDescriptorProto = EnumValueDescriptorProto;
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: undefined
  };
}
var ServiceDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator21 = _createForOfIteratorHelper(message.method),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var v = _step21.value;
        MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name7, _object$method;
    var message = createBaseServiceDescriptorProto();
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    message.method = ((_object$method = object.method) === null || _object$method === void 0 ? void 0 : _object$method.map(function (e) {
      return MethodDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
exports.ServiceDescriptorProto = ServiceDescriptorProto;
function createBaseMethodDescriptorProto() {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false
  };
}
var MethodDescriptorProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name8, _object$inputType, _object$outputType, _object$clientStreami, _object$serverStreami;
    var message = createBaseMethodDescriptorProto();
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    message.inputType = (_object$inputType = object.inputType) !== null && _object$inputType !== void 0 ? _object$inputType : "";
    message.outputType = (_object$outputType = object.outputType) !== null && _object$outputType !== void 0 ? _object$outputType : "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.clientStreaming = (_object$clientStreami = object.clientStreaming) !== null && _object$clientStreami !== void 0 ? _object$clientStreami : false;
    message.serverStreaming = (_object$serverStreami = object.serverStreaming) !== null && _object$serverStreami !== void 0 ? _object$serverStreami : false;
    return message;
  }
};
exports.MethodDescriptorProto = MethodDescriptorProto;
function createBaseFileOptions() {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: []
  };
}
var FileOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices === true) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    var _iterator22 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var v = _step22.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = reader.int32();
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 42:
          message.phpGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$javaPackage, _object$javaOuterClas, _object$javaMultipleF, _object$javaGenerateE, _object$javaStringChe, _object$optimizeFor, _object$goPackage, _object$ccGenericServ, _object$javaGenericSe, _object$pyGenericServ, _object$phpGenericSer, _object$deprecated, _object$ccEnableArena, _object$objcClassPref, _object$csharpNamespa, _object$swiftPrefix, _object$phpClassPrefi, _object$phpNamespace, _object$phpMetadataNa, _object$rubyPackage, _object$uninterpreted2;
    var message = createBaseFileOptions();
    message.javaPackage = (_object$javaPackage = object.javaPackage) !== null && _object$javaPackage !== void 0 ? _object$javaPackage : "";
    message.javaOuterClassname = (_object$javaOuterClas = object.javaOuterClassname) !== null && _object$javaOuterClas !== void 0 ? _object$javaOuterClas : "";
    message.javaMultipleFiles = (_object$javaMultipleF = object.javaMultipleFiles) !== null && _object$javaMultipleF !== void 0 ? _object$javaMultipleF : false;
    message.javaGenerateEqualsAndHash = (_object$javaGenerateE = object.javaGenerateEqualsAndHash) !== null && _object$javaGenerateE !== void 0 ? _object$javaGenerateE : false;
    message.javaStringCheckUtf8 = (_object$javaStringChe = object.javaStringCheckUtf8) !== null && _object$javaStringChe !== void 0 ? _object$javaStringChe : false;
    message.optimizeFor = (_object$optimizeFor = object.optimizeFor) !== null && _object$optimizeFor !== void 0 ? _object$optimizeFor : 1;
    message.goPackage = (_object$goPackage = object.goPackage) !== null && _object$goPackage !== void 0 ? _object$goPackage : "";
    message.ccGenericServices = (_object$ccGenericServ = object.ccGenericServices) !== null && _object$ccGenericServ !== void 0 ? _object$ccGenericServ : false;
    message.javaGenericServices = (_object$javaGenericSe = object.javaGenericServices) !== null && _object$javaGenericSe !== void 0 ? _object$javaGenericSe : false;
    message.pyGenericServices = (_object$pyGenericServ = object.pyGenericServices) !== null && _object$pyGenericServ !== void 0 ? _object$pyGenericServ : false;
    message.phpGenericServices = (_object$phpGenericSer = object.phpGenericServices) !== null && _object$phpGenericSer !== void 0 ? _object$phpGenericSer : false;
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : false;
    message.ccEnableArenas = (_object$ccEnableArena = object.ccEnableArenas) !== null && _object$ccEnableArena !== void 0 ? _object$ccEnableArena : false;
    message.objcClassPrefix = (_object$objcClassPref = object.objcClassPrefix) !== null && _object$objcClassPref !== void 0 ? _object$objcClassPref : "";
    message.csharpNamespace = (_object$csharpNamespa = object.csharpNamespace) !== null && _object$csharpNamespa !== void 0 ? _object$csharpNamespa : "";
    message.swiftPrefix = (_object$swiftPrefix = object.swiftPrefix) !== null && _object$swiftPrefix !== void 0 ? _object$swiftPrefix : "";
    message.phpClassPrefix = (_object$phpClassPrefi = object.phpClassPrefix) !== null && _object$phpClassPrefi !== void 0 ? _object$phpClassPrefi : "";
    message.phpNamespace = (_object$phpNamespace = object.phpNamespace) !== null && _object$phpNamespace !== void 0 ? _object$phpNamespace : "";
    message.phpMetadataNamespace = (_object$phpMetadataNa = object.phpMetadataNamespace) !== null && _object$phpMetadataNa !== void 0 ? _object$phpMetadataNa : "";
    message.rubyPackage = (_object$rubyPackage = object.rubyPackage) !== null && _object$rubyPackage !== void 0 ? _object$rubyPackage : "";
    message.uninterpretedOption = ((_object$uninterpreted2 = object.uninterpretedOption) === null || _object$uninterpreted2 === void 0 ? void 0 : _object$uninterpreted2.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FileOptions = FileOptions;
function createBaseMessageOptions() {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
var MessageOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    var _iterator23 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var v = _step23.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessageOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$messageSetWir, _object$noStandardDes, _object$deprecated2, _object$mapEntry, _object$uninterpreted3;
    var message = createBaseMessageOptions();
    message.messageSetWireFormat = (_object$messageSetWir = object.messageSetWireFormat) !== null && _object$messageSetWir !== void 0 ? _object$messageSetWir : false;
    message.noStandardDescriptorAccessor = (_object$noStandardDes = object.noStandardDescriptorAccessor) !== null && _object$noStandardDes !== void 0 ? _object$noStandardDes : false;
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : false;
    message.mapEntry = (_object$mapEntry = object.mapEntry) !== null && _object$mapEntry !== void 0 ? _object$mapEntry : false;
    message.uninterpretedOption = ((_object$uninterpreted3 = object.uninterpretedOption) === null || _object$uninterpreted3 === void 0 ? void 0 : _object$uninterpreted3.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MessageOptions = MessageOptions;
function createBaseFieldOptions() {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpretedOption: []
  };
}
var FieldOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    var _iterator24 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var v = _step24.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32();
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32();
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$ctype, _object$packed, _object$jstype, _object$lazy, _object$deprecated3, _object$weak, _object$uninterpreted4;
    var message = createBaseFieldOptions();
    message.ctype = (_object$ctype = object.ctype) !== null && _object$ctype !== void 0 ? _object$ctype : 1;
    message.packed = (_object$packed = object.packed) !== null && _object$packed !== void 0 ? _object$packed : false;
    message.jstype = (_object$jstype = object.jstype) !== null && _object$jstype !== void 0 ? _object$jstype : 1;
    message.lazy = (_object$lazy = object.lazy) !== null && _object$lazy !== void 0 ? _object$lazy : false;
    message.deprecated = (_object$deprecated3 = object.deprecated) !== null && _object$deprecated3 !== void 0 ? _object$deprecated3 : false;
    message.weak = (_object$weak = object.weak) !== null && _object$weak !== void 0 ? _object$weak : false;
    message.uninterpretedOption = ((_object$uninterpreted4 = object.uninterpretedOption) === null || _object$uninterpreted4 === void 0 ? void 0 : _object$uninterpreted4.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.FieldOptions = FieldOptions;
function createBaseOneofOptions() {
  return {
    uninterpretedOption: []
  };
}
var OneofOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator25 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var v = _step25.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted5;
    var message = createBaseOneofOptions();
    message.uninterpretedOption = ((_object$uninterpreted5 = object.uninterpretedOption) === null || _object$uninterpreted5 === void 0 ? void 0 : _object$uninterpreted5.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.OneofOptions = OneofOptions;
function createBaseEnumOptions() {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
var EnumOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    var _iterator26 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var v = _step26.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$allowAlias, _object$deprecated4, _object$uninterpreted6;
    var message = createBaseEnumOptions();
    message.allowAlias = (_object$allowAlias = object.allowAlias) !== null && _object$allowAlias !== void 0 ? _object$allowAlias : false;
    message.deprecated = (_object$deprecated4 = object.deprecated) !== null && _object$deprecated4 !== void 0 ? _object$deprecated4 : false;
    message.uninterpretedOption = ((_object$uninterpreted6 = object.uninterpretedOption) === null || _object$uninterpreted6 === void 0 ? void 0 : _object$uninterpreted6.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EnumOptions = EnumOptions;
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
var EnumValueOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    var _iterator27 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step27;
    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var v = _step27.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated5, _object$uninterpreted7;
    var message = createBaseEnumValueOptions();
    message.deprecated = (_object$deprecated5 = object.deprecated) !== null && _object$deprecated5 !== void 0 ? _object$deprecated5 : false;
    message.uninterpretedOption = ((_object$uninterpreted7 = object.uninterpretedOption) === null || _object$uninterpreted7 === void 0 ? void 0 : _object$uninterpreted7.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EnumValueOptions = EnumValueOptions;
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
var ServiceOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    var _iterator28 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step28;
    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var v = _step28.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated6, _object$uninterpreted8;
    var message = createBaseServiceOptions();
    message.deprecated = (_object$deprecated6 = object.deprecated) !== null && _object$deprecated6 !== void 0 ? _object$deprecated6 : false;
    message.uninterpretedOption = ((_object$uninterpreted8 = object.uninterpretedOption) === null || _object$uninterpreted8 === void 0 ? void 0 : _object$uninterpreted8.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ServiceOptions = ServiceOptions;
function createBaseMethodOptions() {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
var MethodOptions = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    var _iterator29 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var v = _step29.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = reader.int32();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deprecated7, _object$idempotencyLe, _object$uninterpreted9;
    var message = createBaseMethodOptions();
    message.deprecated = (_object$deprecated7 = object.deprecated) !== null && _object$deprecated7 !== void 0 ? _object$deprecated7 : false;
    message.idempotencyLevel = (_object$idempotencyLe = object.idempotencyLevel) !== null && _object$idempotencyLe !== void 0 ? _object$idempotencyLe : 1;
    message.uninterpretedOption = ((_object$uninterpreted9 = object.uninterpretedOption) === null || _object$uninterpreted9 === void 0 ? void 0 : _object$uninterpreted9.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MethodOptions = MethodOptions;
function createBaseUninterpretedOption() {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: _helpers.Long.UZERO,
    negativeIntValue: _helpers.Long.ZERO,
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
var UninterpretedOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator30 = _createForOfIteratorHelper(message.name),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var v = _step30.value;
        UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (!message.positiveIntValue.isZero()) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (!message.negativeIntValue.isZero()) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49)["double"](message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader["double"]();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name9, _object$identifierVal, _object$doubleValue, _object$stringValue, _object$aggregateValu;
    var message = createBaseUninterpretedOption();
    message.name = ((_object$name9 = object.name) === null || _object$name9 === void 0 ? void 0 : _object$name9.map(function (e) {
      return UninterpretedOption_NamePart.fromPartial(e);
    })) || [];
    message.identifierValue = (_object$identifierVal = object.identifierValue) !== null && _object$identifierVal !== void 0 ? _object$identifierVal : "";
    message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? _helpers.Long.fromValue(object.positiveIntValue) : _helpers.Long.UZERO;
    message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? _helpers.Long.fromValue(object.negativeIntValue) : _helpers.Long.ZERO;
    message.doubleValue = (_object$doubleValue = object.doubleValue) !== null && _object$doubleValue !== void 0 ? _object$doubleValue : 0;
    message.stringValue = (_object$stringValue = object.stringValue) !== null && _object$stringValue !== void 0 ? _object$stringValue : new Uint8Array();
    message.aggregateValue = (_object$aggregateValu = object.aggregateValue) !== null && _object$aggregateValu !== void 0 ? _object$aggregateValu : "";
    return message;
  }
};
exports.UninterpretedOption = UninterpretedOption;
function createBaseUninterpretedOption_NamePart() {
  return {
    namePart: "",
    isExtension: false
  };
}
var UninterpretedOption_NamePart = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$namePart, _object$isExtension;
    var message = createBaseUninterpretedOption_NamePart();
    message.namePart = (_object$namePart = object.namePart) !== null && _object$namePart !== void 0 ? _object$namePart : "";
    message.isExtension = (_object$isExtension = object.isExtension) !== null && _object$isExtension !== void 0 ? _object$isExtension : false;
    return message;
  }
};
exports.UninterpretedOption_NamePart = UninterpretedOption_NamePart;
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
var SourceCodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator31 = _createForOfIteratorHelper(message.location),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var v = _step31.value;
        SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$location;
    var message = createBaseSourceCodeInfo();
    message.location = ((_object$location = object.location) === null || _object$location === void 0 ? void 0 : _object$location.map(function (e) {
      return SourceCodeInfo_Location.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.SourceCodeInfo = SourceCodeInfo;
function createBaseSourceCodeInfo_Location() {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
var SourceCodeInfo_Location = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator32 = _createForOfIteratorHelper(message.path),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var v = _step32.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
    writer.ldelim();
    writer.uint32(18).fork();
    var _iterator33 = _createForOfIteratorHelper(message.span),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var _v16 = _step33.value;
        writer.int32(_v16);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    var _iterator34 = _createForOfIteratorHelper(message.leadingDetachedComments),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var _v17 = _step34.value;
        writer.uint32(50).string(_v17);
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            var _end2 = reader.uint32() + reader.pos;
            while (reader.pos < _end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$span, _object$leadingCommen, _object$trailingComme, _object$leadingDetach;
    var message = createBaseSourceCodeInfo_Location();
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(function (e) {
      return e;
    })) || [];
    message.span = ((_object$span = object.span) === null || _object$span === void 0 ? void 0 : _object$span.map(function (e) {
      return e;
    })) || [];
    message.leadingComments = (_object$leadingCommen = object.leadingComments) !== null && _object$leadingCommen !== void 0 ? _object$leadingCommen : "";
    message.trailingComments = (_object$trailingComme = object.trailingComments) !== null && _object$trailingComme !== void 0 ? _object$trailingComme : "";
    message.leadingDetachedComments = ((_object$leadingDetach = object.leadingDetachedComments) === null || _object$leadingDetach === void 0 ? void 0 : _object$leadingDetach.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.SourceCodeInfo_Location = SourceCodeInfo_Location;
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
var GeneratedCodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator35 = _createForOfIteratorHelper(message.annotation),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var v = _step35.value;
        GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$annotation;
    var message = createBaseGeneratedCodeInfo();
    message.annotation = ((_object$annotation = object.annotation) === null || _object$annotation === void 0 ? void 0 : _object$annotation.map(function (e) {
      return GeneratedCodeInfo_Annotation.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GeneratedCodeInfo = GeneratedCodeInfo;
function createBaseGeneratedCodeInfo_Annotation() {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
var GeneratedCodeInfo_Annotation = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator36 = _createForOfIteratorHelper(message.path),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var v = _step36.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$path2, _object$sourceFile, _object$begin, _object$end4;
    var message = createBaseGeneratedCodeInfo_Annotation();
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(function (e) {
      return e;
    })) || [];
    message.sourceFile = (_object$sourceFile = object.sourceFile) !== null && _object$sourceFile !== void 0 ? _object$sourceFile : "";
    message.begin = (_object$begin = object.begin) !== null && _object$begin !== void 0 ? _object$begin : 0;
    message.end = (_object$end4 = object.end) !== null && _object$end4 !== void 0 ? _object$end4 : 0;
    return message;
  }
};
exports.GeneratedCodeInfo_Annotation = GeneratedCodeInfo_Annotation;