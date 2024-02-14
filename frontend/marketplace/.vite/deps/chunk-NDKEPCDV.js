import {
  Any
} from "./chunk-5CF6M437.js";
import {
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgGrantAllowance: () => MsgGrantAllowance,
  MsgGrantAllowanceResponse: () => MsgGrantAllowanceResponse,
  MsgRevokeAllowance: () => MsgRevokeAllowance,
  MsgRevokeAllowanceResponse: () => MsgRevokeAllowanceResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgGrantAllowance() {
  return {
    granter: "",
    grantee: "",
    allowance: void 0
  };
}
var MsgGrantAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== void 0) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.allowance !== void 0 && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseMsgGrantAllowance();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? Any.fromPartial(object.allowance) : void 0;
    return message;
  }
};
function createBaseMsgGrantAllowanceResponse() {
  return {};
}
var MsgGrantAllowanceResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  }
};
function createBaseMsgRevokeAllowance() {
  return {
    granter: "",
    grantee: ""
  };
}
var MsgRevokeAllowance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object) {
    var _object$granter2, _object$grantee2;
    const message = createBaseMsgRevokeAllowance();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    return message;
  }
};
function createBaseMsgRevokeAllowanceResponse() {
  return {};
}
var MsgRevokeAllowanceResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/feegrant/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }
  grantAllowance(request) {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then((data2) => MsgGrantAllowanceResponse.decode(new _m02.Reader(data2)));
  }
  revokeAllowance(request) {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then((data2) => MsgRevokeAllowanceResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgGrantAllowance,
  MsgRevokeAllowance,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-NDKEPCDV.js.map
