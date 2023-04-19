"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionInfo = exports.Validator = exports.ProofOps = exports.ProofOp = exports.Module = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.ABCIQueryResponse = exports.ABCIQueryRequest = void 0;
var _pagination = require("../../query/v1beta1/pagination");
var _any = require("../../../../google/protobuf/any");
var _types = require("../../../../tendermint/types/types");
var _block = require("../../../../tendermint/types/block");
var _types2 = require("./types");
var _types3 = require("../../../../tendermint/p2p/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: _helpers.Long.ZERO,
    pagination: undefined
  };
}
var GetValidatorSetByHeightRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightRequest = GetValidatorSetByHeightRequest;
function createBaseGetValidatorSetByHeightResponse() {
  return {
    blockHeight: _helpers.Long.ZERO,
    validators: [],
    pagination: undefined
  };
}
var GetValidatorSetByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;
    var message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? _helpers.Long.fromValue(object.blockHeight) : _helpers.Long.ZERO;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightResponse = GetValidatorSetByHeightResponse;
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: undefined
  };
}
var GetLatestValidatorSetRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetRequest = GetLatestValidatorSetRequest;
function createBaseGetLatestValidatorSetResponse() {
  return {
    blockHeight: _helpers.Long.ZERO,
    validators: [],
    pagination: undefined
  };
}
var GetLatestValidatorSetResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    var _iterator2 = _createForOfIteratorHelper(message.validators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2;
    var message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? _helpers.Long.fromValue(object.blockHeight) : _helpers.Long.ZERO;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetResponse = GetLatestValidatorSetResponse;
function createBaseValidator() {
  return {
    address: "",
    pubKey: undefined,
    votingPower: _helpers.Long.ZERO,
    proposerPriority: _helpers.Long.ZERO
  };
}
var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      _any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _any.Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? _helpers.Long.fromValue(object.votingPower) : _helpers.Long.ZERO;
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? _helpers.Long.fromValue(object.proposerPriority) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;
function createBaseGetBlockByHeightRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}
var GetBlockByHeightRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.GetBlockByHeightRequest = GetBlockByHeightRequest;
function createBaseGetBlockByHeightResponse() {
  return {
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined
  };
}
var GetBlockByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      _types2.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = _types2.Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.sdkBlock = object.sdkBlock !== undefined && object.sdkBlock !== null ? _types2.Block.fromPartial(object.sdkBlock) : undefined;
    return message;
  }
};
exports.GetBlockByHeightResponse = GetBlockByHeightResponse;
function createBaseGetLatestBlockRequest() {
  return {};
}
var GetLatestBlockRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockRequest();
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
    var message = createBaseGetLatestBlockRequest();
    return message;
  }
};
exports.GetLatestBlockRequest = GetLatestBlockRequest;
function createBaseGetLatestBlockResponse() {
  return {
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined
  };
}
var GetLatestBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      _types2.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = _types2.Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.sdkBlock = object.sdkBlock !== undefined && object.sdkBlock !== null ? _types2.Block.fromPartial(object.sdkBlock) : undefined;
    return message;
  }
};
exports.GetLatestBlockResponse = GetLatestBlockResponse;
function createBaseGetSyncingRequest() {
  return {};
}
var GetSyncingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingRequest();
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
    var message = createBaseGetSyncingRequest();
    return message;
  }
};
exports.GetSyncingRequest = GetSyncingRequest;
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
var GetSyncingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$syncing;
    var message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  }
};
exports.GetSyncingResponse = GetSyncingResponse;
function createBaseGetNodeInfoRequest() {
  return {};
}
var GetNodeInfoRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoRequest();
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
    var message = createBaseGetNodeInfoRequest();
    return message;
  }
};
exports.GetNodeInfoRequest = GetNodeInfoRequest;
function createBaseGetNodeInfoResponse() {
  return {
    defaultNodeInfo: undefined,
    applicationVersion: undefined
  };
}
var GetNodeInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.defaultNodeInfo !== undefined) {
      _types3.DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = _types3.DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null ? _types3.DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
  }
};
exports.GetNodeInfoResponse = GetNodeInfoResponse;
function createBaseVersionInfo() {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
var VersionInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    var _iterator3 = _createForOfIteratorHelper(message.buildDeps),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Module.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$appName, _object$version, _object$gitCommit, _object$buildTags, _object$goVersion, _object$buildDeps, _object$cosmosSdkVers;
    var message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.appName = (_object$appName = object.appName) !== null && _object$appName !== void 0 ? _object$appName : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.gitCommit = (_object$gitCommit = object.gitCommit) !== null && _object$gitCommit !== void 0 ? _object$gitCommit : "";
    message.buildTags = (_object$buildTags = object.buildTags) !== null && _object$buildTags !== void 0 ? _object$buildTags : "";
    message.goVersion = (_object$goVersion = object.goVersion) !== null && _object$goVersion !== void 0 ? _object$goVersion : "";
    message.buildDeps = ((_object$buildDeps = object.buildDeps) === null || _object$buildDeps === void 0 ? void 0 : _object$buildDeps.map(function (e) {
      return Module.fromPartial(e);
    })) || [];
    message.cosmosSdkVersion = (_object$cosmosSdkVers = object.cosmosSdkVersion) !== null && _object$cosmosSdkVers !== void 0 ? _object$cosmosSdkVers : "";
    return message;
  }
};
exports.VersionInfo = VersionInfo;
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
var Module = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModule();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$version2, _object$sum;
    var message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  }
};
exports.Module = Module;
function createBaseABCIQueryRequest() {
  return {
    data: new Uint8Array(),
    path: "",
    height: _helpers.Long.ZERO,
    prove: false
  };
}
var ABCIQueryRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data, _object$path2, _object$prove;
    var message = createBaseABCIQueryRequest();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path2 = object.path) !== null && _object$path2 !== void 0 ? _object$path2 : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
exports.ABCIQueryRequest = ABCIQueryRequest;
function createBaseABCIQueryResponse() {
  return {
    code: 0,
    log: "",
    info: "",
    index: _helpers.Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: _helpers.Long.ZERO,
    codespace: ""
  };
}
var ABCIQueryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$log, _object$info, _object$key, _object$value, _object$codespace;
    var message = createBaseABCIQueryResponse();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.index = object.index !== undefined && object.index !== null ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
exports.ABCIQueryResponse = ABCIQueryResponse;
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
var ProofOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProofOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$key2, _object$data2;
    var message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
exports.ProofOp = ProofOp;
function createBaseProofOps() {
  return {
    ops: []
  };
}
var ProofOps = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.ops),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProofOps();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$ops;
    var message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map(function (e) {
      return ProofOp.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ProofOps = ProofOps;