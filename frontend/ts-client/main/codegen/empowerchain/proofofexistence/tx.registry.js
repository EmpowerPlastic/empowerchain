"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/empowerchain.proofofexistence.MsgCreateProof", _tx.MsgCreateProof]];
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
    createProof: function createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: _tx.MsgCreateProof.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProof: function createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: value
      };
    }
  },
  fromPartial: {
    createProof: function createProof(value) {
      return {
        typeUrl: "/empowerchain.proofofexistence.MsgCreateProof",
        value: _tx.MsgCreateProof.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;