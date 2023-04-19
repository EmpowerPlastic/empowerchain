"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", _tx.MsgSubmitEvidence]];
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
    submitEvidence: function submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: _tx.MsgSubmitEvidence.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitEvidence: function submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: value
      };
    }
  },
  fromPartial: {
    submitEvidence: function submitEvidence(value) {
      return {
        typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        value: _tx.MsgSubmitEvidence.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;