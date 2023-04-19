"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: function toAmino(_ref) {
      var granter = _ref.granter,
        grantee = _ref.grantee,
        grant = _ref.grant;
      return {
        granter: granter,
        grantee: grantee,
        grant: {
          authorization: {
            type_url: grant.authorization.typeUrl,
            value: grant.authorization.value
          },
          expiration: grant.expiration
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var granter = _ref2.granter,
        grantee = _ref2.grantee,
        grant = _ref2.grant;
      return {
        granter: granter,
        grantee: grantee,
        grant: {
          authorization: {
            typeUrl: grant.authorization.type_url,
            value: grant.authorization.value
          },
          expiration: grant.expiration
        }
      };
    }
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: function toAmino(_ref3) {
      var grantee = _ref3.grantee,
        msgs = _ref3.msgs;
      return {
        grantee: grantee,
        msgs: msgs.map(function (el0) {
          return {
            type_url: el0.typeUrl,
            value: el0.value
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var grantee = _ref4.grantee,
        msgs = _ref4.msgs;
      return {
        grantee: grantee,
        msgs: msgs.map(function (el0) {
          return {
            typeUrl: el0.type_url,
            value: el0.value
          };
        })
      };
    }
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: function toAmino(_ref5) {
      var granter = _ref5.granter,
        grantee = _ref5.grantee,
        msgTypeUrl = _ref5.msgTypeUrl;
      return {
        granter: granter,
        grantee: grantee,
        msg_type_url: msgTypeUrl
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var granter = _ref6.granter,
        grantee = _ref6.grantee,
        msg_type_url = _ref6.msg_type_url;
      return {
        granter: granter,
        grantee: grantee,
        msgTypeUrl: msg_type_url
      };
    }
  }
};
exports.AminoConverter = AminoConverter;