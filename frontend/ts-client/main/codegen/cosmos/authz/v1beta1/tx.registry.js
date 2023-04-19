"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.authz.v1beta1.MsgGrant", _tx.MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", _tx.MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", _tx.MsgRevoke]];
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
    grant: function grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: _tx.MsgGrant.encode(value).finish()
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: _tx.MsgExec.encode(value).finish()
      };
    },
    revoke: function revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: _tx.MsgRevoke.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    grant: function grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: value
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: value
      };
    },
    revoke: function revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: value
      };
    }
  },
  fromPartial: {
    grant: function grant(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
        value: _tx.MsgGrant.fromPartial(value)
      };
    },
    exec: function exec(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgExec",
        value: _tx.MsgExec.fromPartial(value)
      };
    },
    revoke: function revoke(value) {
      return {
        typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
        value: _tx.MsgRevoke.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;