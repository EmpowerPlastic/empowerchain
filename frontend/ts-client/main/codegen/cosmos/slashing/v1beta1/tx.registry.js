"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.slashing.v1beta1.MsgUnjail", _tx.MsgUnjail], ["/cosmos.slashing.v1beta1.MsgUpdateParams", _tx.MsgUpdateParams]];
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
    unjail: function unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: _tx.MsgUnjail.encode(value).finish()
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    unjail: function unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: value
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: value
      };
    }
  },
  fromPartial: {
    unjail: function unjail(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
        value: _tx.MsgUnjail.fromPartial(value)
      };
    },
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;