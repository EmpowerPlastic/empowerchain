"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = void 0;
var _params = require("../../../tendermint/types/params");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    block: undefined,
    evidence: undefined,
    validator: undefined
  };
}
var MsgUpdateParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.block !== undefined) {
      _params.BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      _params.EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      _params.ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.block = _params.BlockParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = _params.EvidenceParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validator = _params.ValidatorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.block = object.block !== undefined && object.block !== null ? _params.BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _params.EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? _params.ValidatorParams.fromPartial(object.validator) : undefined;
    return message;
  }
};
exports.MsgUpdateParams = MsgUpdateParams;
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
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
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;