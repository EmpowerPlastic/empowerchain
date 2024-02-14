import {
  Grant
} from "./chunk-U55UB7IY.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/authz/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/authz/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgExec: () => MsgExec,
  MsgExecResponse: () => MsgExecResponse,
  MsgGrant: () => MsgGrant,
  MsgGrantResponse: () => MsgGrantResponse,
  MsgRevoke: () => MsgRevoke,
  MsgRevokeResponse: () => MsgRevokeResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgGrant() {
  return {
    granter: "",
    grantee: "",
    grant: void 0
  };
}
var MsgGrant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== void 0) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
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
          message.grant = Grant.decode(reader, reader.uint32());
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
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.grant !== void 0 && (obj.grant = message.grant ? Grant.toJSON(message.grant) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseMsgGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.grant = object.grant !== void 0 && object.grant !== null ? Grant.fromPartial(object.grant) : void 0;
    return message;
  }
};
function createBaseMsgExecResponse() {
  return {
    results: []
  };
}
var MsgExecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.results) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
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
      results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$results;
    const message = createBaseMsgExecResponse();
    message.results = ((_object$results = object.results) === null || _object$results === void 0 ? void 0 : _object$results.map((e) => e)) || [];
    return message;
  }
};
function createBaseMsgExec() {
  return {
    grantee: "",
    msgs: []
  };
}
var MsgExec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
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
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$grantee2, _object$msgs;
    const message = createBaseMsgExec();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgGrantResponse() {
  return {};
}
var MsgGrantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
    const message = createBaseMsgGrantResponse();
    return message;
  }
};
function createBaseMsgRevoke() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
var MsgRevoke = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
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
          message.msgTypeUrl = reader.string();
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
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.msgTypeUrl !== void 0 && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial(object) {
    var _object$granter2, _object$grantee3, _object$msgTypeUrl;
    const message = createBaseMsgRevoke();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee3 = object.grantee) !== null && _object$grantee3 !== void 0 ? _object$grantee3 : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    return message;
  }
};
function createBaseMsgRevokeResponse() {
  return {};
}
var MsgRevokeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
    const message = createBaseMsgRevokeResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/authz/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
  }
  grant(request) {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then((data2) => MsgGrantResponse.decode(new _m02.Reader(data2)));
  }
  exec(request) {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then((data2) => MsgExecResponse.decode(new _m02.Reader(data2)));
  }
  revoke(request) {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then((data2) => MsgRevokeResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgGrant,
  MsgExec,
  MsgRevoke,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-RE277WCV.js.map
