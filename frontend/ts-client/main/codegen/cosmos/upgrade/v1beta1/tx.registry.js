"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", _tx.MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", _tx.MsgCancelUpgrade]];
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
    softwareUpgrade: function softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: _tx.MsgSoftwareUpgrade.encode(value).finish()
      };
    },
    cancelUpgrade: function cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: _tx.MsgCancelUpgrade.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    softwareUpgrade: function softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: value
      };
    },
    cancelUpgrade: function cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: value
      };
    }
  },
  fromPartial: {
    softwareUpgrade: function softwareUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        value: _tx.MsgSoftwareUpgrade.fromPartial(value)
      };
    },
    cancelUpgrade: function cancelUpgrade(value) {
      return {
        typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        value: _tx.MsgCancelUpgrade.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;