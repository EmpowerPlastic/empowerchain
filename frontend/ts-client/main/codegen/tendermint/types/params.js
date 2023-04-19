"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionParams = exports.ValidatorParams = exports.HashedParams = exports.EvidenceParams = exports.ConsensusParams = exports.BlockParams = void 0;
var _duration = require("../../google/protobuf/duration");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseConsensusParams() {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}
var ConsensusParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
exports.ConsensusParams = ConsensusParams;
function createBaseBlockParams() {
  return {
    maxBytes: _helpers.Long.ZERO,
    maxGas: _helpers.Long.ZERO
  };
}
var BlockParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? _helpers.Long.fromValue(object.maxBytes) : _helpers.Long.ZERO;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? _helpers.Long.fromValue(object.maxGas) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockParams = BlockParams;
function createBaseEvidenceParams() {
  return {
    maxAgeNumBlocks: _helpers.Long.ZERO,
    maxAgeDuration: undefined,
    maxBytes: _helpers.Long.ZERO
  };
}
var EvidenceParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      _duration.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidenceParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;
        case 2:
          message.maxAgeDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? _helpers.Long.fromValue(object.maxAgeNumBlocks) : _helpers.Long.ZERO;
    message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? _duration.Duration.fromPartial(object.maxAgeDuration) : undefined;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? _helpers.Long.fromValue(object.maxBytes) : _helpers.Long.ZERO;
    return message;
  }
};
exports.EvidenceParams = EvidenceParams;
function createBaseValidatorParams() {
  return {
    pubKeyTypes: []
  };
}
var ValidatorParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.pubKeyTypes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
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
    var message = createBaseValidatorParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pubKeyTypes;
    var message = createBaseValidatorParams();
    message.pubKeyTypes = ((_object$pubKeyTypes = object.pubKeyTypes) === null || _object$pubKeyTypes === void 0 ? void 0 : _object$pubKeyTypes.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ValidatorParams = ValidatorParams;
function createBaseVersionParams() {
  return {
    app: _helpers.Long.UZERO
  };
}
var VersionParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVersionParams();
    message.app = object.app !== undefined && object.app !== null ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO;
    return message;
  }
};
exports.VersionParams = VersionParams;
function createBaseHashedParams() {
  return {
    blockMaxBytes: _helpers.Long.ZERO,
    blockMaxGas: _helpers.Long.ZERO
  };
}
var HashedParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHashedParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64();
          break;
        case 2:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? _helpers.Long.fromValue(object.blockMaxBytes) : _helpers.Long.ZERO;
    message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? _helpers.Long.fromValue(object.blockMaxGas) : _helpers.Long.ZERO;
    return message;
  }
};
exports.HashedParams = HashedParams;