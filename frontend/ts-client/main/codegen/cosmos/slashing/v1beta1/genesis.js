"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorMissedBlocks = exports.SigningInfo = exports.MissedBlock = exports.GenesisState = void 0;
var _slashing = require("./slashing");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenesisState() {
  return {
    params: undefined,
    signingInfos: [],
    missedBlocks: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _slashing.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.signingInfos),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.missedBlocks),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        ValidatorMissedBlocks.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _slashing.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signingInfos, _object$missedBlocks;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _slashing.Params.fromPartial(object.params) : undefined;
    message.signingInfos = ((_object$signingInfos = object.signingInfos) === null || _object$signingInfos === void 0 ? void 0 : _object$signingInfos.map(function (e) {
      return SigningInfo.fromPartial(e);
    })) || [];
    message.missedBlocks = ((_object$missedBlocks = object.missedBlocks) === null || _object$missedBlocks === void 0 ? void 0 : _object$missedBlocks.map(function (e) {
      return ValidatorMissedBlocks.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBaseSigningInfo() {
  return {
    address: "",
    validatorSigningInfo: undefined
  };
}
var SigningInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      _slashing.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSigningInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = _slashing.ValidatorSigningInfo.decode(reader, reader.uint32());
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
    var message = createBaseSigningInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? _slashing.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  }
};
exports.SigningInfo = SigningInfo;
function createBaseValidatorMissedBlocks() {
  return {
    address: "",
    missedBlocks: []
  };
}
var ValidatorMissedBlocks = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    var _iterator3 = _createForOfIteratorHelper(message.missedBlocks),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$missedBlocks2;
    var message = createBaseValidatorMissedBlocks();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.missedBlocks = ((_object$missedBlocks2 = object.missedBlocks) === null || _object$missedBlocks2 === void 0 ? void 0 : _object$missedBlocks2.map(function (e) {
      return MissedBlock.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ValidatorMissedBlocks = ValidatorMissedBlocks;
function createBaseMissedBlock() {
  return {
    index: _helpers.Long.ZERO,
    missed: false
  };
}
var MissedBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMissedBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$missed;
    var message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO;
    message.missed = (_object$missed = object.missed) !== null && _object$missed !== void 0 ? _object$missed : false;
    return message;
  }
};
exports.MissedBlock = MissedBlock;