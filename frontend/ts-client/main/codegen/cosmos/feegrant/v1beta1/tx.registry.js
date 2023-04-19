"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", _tx.MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", _tx.MsgRevokeAllowance]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    grantAllowance: function grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: _tx.MsgGrantAllowance.encode(value).finish()
      };
    },
    revokeAllowance: function revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: _tx.MsgRevokeAllowance.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grantAllowance: function grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: value
      };
    },
    revokeAllowance: function revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: value
      };
    }
  },
  fromPartial: {
    grantAllowance: function grantAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: _tx.MsgGrantAllowance.fromPartial(value)
      };
    },
    revokeAllowance: function revokeAllowance(value) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: _tx.MsgRevokeAllowance.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;