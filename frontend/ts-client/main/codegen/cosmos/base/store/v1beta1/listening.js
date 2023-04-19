"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreKVPair = exports.BlockMetadata_DeliverTx = exports.BlockMetadata = void 0;
var _types = require("../../../../tendermint/abci/types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseStoreKVPair() {
  return {
    storeKey: "",
    "delete": false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var StoreKVPair = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message["delete"] === true) {
      writer.uint32(16).bool(message["delete"]);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreKVPair();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message["delete"] = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$storeKey, _object$delete, _object$key, _object$value;
    var message = createBaseStoreKVPair();
    message.storeKey = (_object$storeKey = object.storeKey) !== null && _object$storeKey !== void 0 ? _object$storeKey : "";
    message["delete"] = (_object$delete = object["delete"]) !== null && _object$delete !== void 0 ? _object$delete : false;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};
exports.StoreKVPair = StoreKVPair;
function createBaseBlockMetadata() {
  return {
    requestBeginBlock: undefined,
    responseBeginBlock: undefined,
    deliverTxs: [],
    requestEndBlock: undefined,
    responseEndBlock: undefined,
    responseCommit: undefined
  };
}
var BlockMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.requestBeginBlock !== undefined) {
      _types.RequestBeginBlock.encode(message.requestBeginBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.responseBeginBlock !== undefined) {
      _types.ResponseBeginBlock.encode(message.responseBeginBlock, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.deliverTxs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        BlockMetadata_DeliverTx.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.requestEndBlock !== undefined) {
      _types.RequestEndBlock.encode(message.requestEndBlock, writer.uint32(34).fork()).ldelim();
    }
    if (message.responseEndBlock !== undefined) {
      _types.ResponseEndBlock.encode(message.responseEndBlock, writer.uint32(42).fork()).ldelim();
    }
    if (message.responseCommit !== undefined) {
      _types.ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestBeginBlock = _types.RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.responseBeginBlock = _types.ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliverTxs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.requestEndBlock = _types.RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.responseEndBlock = _types.ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.responseCommit = _types.ResponseCommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deliverTxs;
    var message = createBaseBlockMetadata();
    message.requestBeginBlock = object.requestBeginBlock !== undefined && object.requestBeginBlock !== null ? _types.RequestBeginBlock.fromPartial(object.requestBeginBlock) : undefined;
    message.responseBeginBlock = object.responseBeginBlock !== undefined && object.responseBeginBlock !== null ? _types.ResponseBeginBlock.fromPartial(object.responseBeginBlock) : undefined;
    message.deliverTxs = ((_object$deliverTxs = object.deliverTxs) === null || _object$deliverTxs === void 0 ? void 0 : _object$deliverTxs.map(function (e) {
      return BlockMetadata_DeliverTx.fromPartial(e);
    })) || [];
    message.requestEndBlock = object.requestEndBlock !== undefined && object.requestEndBlock !== null ? _types.RequestEndBlock.fromPartial(object.requestEndBlock) : undefined;
    message.responseEndBlock = object.responseEndBlock !== undefined && object.responseEndBlock !== null ? _types.ResponseEndBlock.fromPartial(object.responseEndBlock) : undefined;
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? _types.ResponseCommit.fromPartial(object.responseCommit) : undefined;
    return message;
  }
};
exports.BlockMetadata = BlockMetadata;
function createBaseBlockMetadata_DeliverTx() {
  return {
    request: undefined,
    response: undefined
  };
}
var BlockMetadata_DeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request !== undefined) {
      _types.RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      _types.ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _types.RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = _types.ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockMetadata_DeliverTx();
    message.request = object.request !== undefined && object.request !== null ? _types.RequestDeliverTx.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? _types.ResponseDeliverTx.fromPartial(object.response) : undefined;
    return message;
  }
};
exports.BlockMetadata_DeliverTx = BlockMetadata_DeliverTx;