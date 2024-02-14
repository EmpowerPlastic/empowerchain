import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  fromJsonTimestamp,
  fromTimestamp,
  isSet,
  require_minimal,
  toTimestamp
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/authz/v1beta1/authz.js
var authz_exports = {};
__export(authz_exports, {
  GenericAuthorization: () => GenericAuthorization,
  Grant: () => Grant,
  GrantAuthorization: () => GrantAuthorization,
  GrantQueueItem: () => GrantQueueItem
});
var _m0 = __toESM(require_minimal());
function createBaseGenericAuthorization() {
  return {
    msg: ""
  };
}
var GenericAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
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
      msg: isSet(object.msg) ? String(object.msg) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.msg !== void 0 && (obj.msg = message.msg);
    return obj;
  },
  fromPartial(object) {
    var _object$msg;
    const message = createBaseGenericAuthorization();
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : "";
    return message;
  }
};
function createBaseGrant() {
  return {
    authorization: void 0,
    expiration: void 0
  };
}
var Grant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authorization !== void 0) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : void 0,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authorization !== void 0 && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : void 0);
    message.expiration !== void 0 && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$expiration;
    const message = createBaseGrant();
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? Any.fromPartial(object.authorization) : void 0;
    message.expiration = (_object$expiration = object.expiration) !== null && _object$expiration !== void 0 ? _object$expiration : void 0;
    return message;
  }
};
function createBaseGrantAuthorization() {
  return {
    granter: "",
    grantee: "",
    authorization: void 0,
    expiration: void 0
  };
}
var GrantAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== void 0) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
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
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : void 0,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== void 0 && (obj.granter = message.granter);
    message.grantee !== void 0 && (obj.grantee = message.grantee);
    message.authorization !== void 0 && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : void 0);
    message.expiration !== void 0 && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee, _object$expiration2;
    const message = createBaseGrantAuthorization();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? Any.fromPartial(object.authorization) : void 0;
    message.expiration = (_object$expiration2 = object.expiration) !== null && _object$expiration2 !== void 0 ? _object$expiration2 : void 0;
    return message;
  }
};
function createBaseGrantQueueItem() {
  return {
    msgTypeUrls: []
  };
}
var GrantQueueItem = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
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
      msgTypeUrls: Array.isArray(object === null || object === void 0 ? void 0 : object.msgTypeUrls) ? object.msgTypeUrls.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$msgTypeUrls;
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = ((_object$msgTypeUrls = object.msgTypeUrls) === null || _object$msgTypeUrls === void 0 ? void 0 : _object$msgTypeUrls.map((e) => e)) || [];
    return message;
  }
};

export {
  Grant,
  GrantAuthorization,
  authz_exports
};
//# sourceMappingURL=chunk-U55UB7IY.js.map
