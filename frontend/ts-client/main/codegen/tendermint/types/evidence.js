"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightClientAttackEvidence = exports.EvidenceList = exports.Evidence = exports.DuplicateVoteEvidence = void 0;
var _types = require("./types");
var _timestamp = require("../../google/protobuf/timestamp");
var _validator = require("./validator");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseEvidence() {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined
  };
}
var Evidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
    return message;
  }
};
exports.Evidence = Evidence;
function createBaseDuplicateVoteEvidence() {
  return {
    voteA: undefined,
    voteB: undefined,
    totalVotingPower: _helpers.Long.ZERO,
    validatorPower: _helpers.Long.ZERO,
    timestamp: undefined
  };
}
var DuplicateVoteEvidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.voteA !== undefined) {
      _types.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      _types.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    if (!message.validatorPower.isZero()) {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = _types.Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = _types.Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        case 4:
          message.validatorPower = reader.int64();
          break;
        case 5:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$timestamp;
    var message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? _types.Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? _types.Vote.fromPartial(object.voteB) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? _helpers.Long.fromValue(object.totalVotingPower) : _helpers.Long.ZERO;
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? _helpers.Long.fromValue(object.validatorPower) : _helpers.Long.ZERO;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    return message;
  }
};
exports.DuplicateVoteEvidence = DuplicateVoteEvidence;
function createBaseLightClientAttackEvidence() {
  return {
    conflictingBlock: undefined,
    commonHeight: _helpers.Long.ZERO,
    byzantineValidators: [],
    totalVotingPower: _helpers.Long.ZERO,
    timestamp: undefined
  };
}
var LightClientAttackEvidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.conflictingBlock !== undefined) {
      _types.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (!message.commonHeight.isZero()) {
      writer.uint32(16).int64(message.commonHeight);
    }
    var _iterator = _createForOfIteratorHelper(message.byzantineValidators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _validator.Validator.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(32).int64(message.totalVotingPower);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = _types.LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = reader.int64();
          break;
        case 3:
          message.byzantineValidators.push(_validator.Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = reader.int64();
          break;
        case 5:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$byzantineVali, _object$timestamp2;
    var message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? _types.LightBlock.fromPartial(object.conflictingBlock) : undefined;
    message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? _helpers.Long.fromValue(object.commonHeight) : _helpers.Long.ZERO;
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map(function (e) {
      return _validator.Validator.fromPartial(e);
    })) || [];
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? _helpers.Long.fromValue(object.totalVotingPower) : _helpers.Long.ZERO;
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    return message;
  }
};
exports.LightClientAttackEvidence = LightClientAttackEvidence;
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
var EvidenceList = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.evidence),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Evidence.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidenceList();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$evidence;
    var message = createBaseEvidenceList();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map(function (e) {
      return Evidence.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.EvidenceList = EvidenceList;