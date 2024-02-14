import {
  Any
} from "./chunk-5CF6M437.js";
import {
  base64FromBytes,
  bytesFromBase64,
  import_long,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/controller/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m03 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/controller/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgRegisterInterchainAccount: () => MsgRegisterInterchainAccount,
  MsgRegisterInterchainAccountResponse: () => MsgRegisterInterchainAccountResponse,
  MsgSendTx: () => MsgSendTx,
  MsgSendTxResponse: () => MsgSendTxResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/v1/packet.js
var packet_exports = {};
__export(packet_exports, {
  CosmosTx: () => CosmosTx,
  InterchainAccountPacketData: () => InterchainAccountPacketData,
  Type: () => Type,
  TypeSDKType: () => TypeSDKType,
  typeFromJSON: () => typeFromJSON,
  typeToJSON: () => typeToJSON
});
var _m0 = __toESM(require_minimal());
var Type = function(Type2) {
  Type2[Type2["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
  Type2[Type2["TYPE_EXECUTE_TX"] = 1] = "TYPE_EXECUTE_TX";
  Type2[Type2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Type2;
}({});
var TypeSDKType = Type;
function typeFromJSON(object) {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_EXECUTE_TX":
      return Type.TYPE_EXECUTE_TX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type.UNRECOGNIZED;
  }
}
function typeToJSON(object) {
  switch (object) {
    case Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Type.TYPE_EXECUTE_TX:
      return "TYPE_EXECUTE_TX";
    case Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseInterchainAccountPacketData() {
  return {
    type: 0,
    data: new Uint8Array(),
    memo: ""
  };
}
var InterchainAccountPacketData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccountPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.memo = reader.string();
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
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = typeToJSON(message.type));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.memo !== void 0 && (obj.memo = message.memo);
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$data, _object$memo;
    const message = createBaseInterchainAccountPacketData();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    return message;
  }
};
function createBaseCosmosTx() {
  return {
    messages: []
  };
}
var CosmosTx = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$messages;
    const message = createBaseCosmosTx();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/controller/v1/tx.js
var _m02 = __toESM(require_minimal());
function createBaseMsgRegisterInterchainAccount() {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
var MsgRegisterInterchainAccount = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.version = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.version !== void 0 && (obj.version = message.version);
    return obj;
  },
  fromPartial(object) {
    var _object$owner, _object$connectionId, _object$version;
    const message = createBaseMsgRegisterInterchainAccount();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    return message;
  }
};
function createBaseMsgRegisterInterchainAccountResponse() {
  return {
    channelId: ""
  };
}
var MsgRegisterInterchainAccountResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
function createBaseMsgSendTx() {
  return {
    owner: "",
    connectionId: "",
    packetData: void 0,
    relativeTimeout: BigInt("0")
  };
}
var MsgSendTx = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.packetData !== void 0) {
      InterchainAccountPacketData.encode(message.packetData, writer.uint32(26).fork()).ldelim();
    }
    if (message.relativeTimeout !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.relativeTimeout.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.packetData = InterchainAccountPacketData.decode(reader, reader.uint32());
          break;
        case 4:
          message.relativeTimeout = BigInt(reader.uint64().toString());
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      packetData: isSet(object.packetData) ? InterchainAccountPacketData.fromJSON(object.packetData) : void 0,
      relativeTimeout: isSet(object.relativeTimeout) ? BigInt(object.relativeTimeout.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.packetData !== void 0 && (obj.packetData = message.packetData ? InterchainAccountPacketData.toJSON(message.packetData) : void 0);
    message.relativeTimeout !== void 0 && (obj.relativeTimeout = (message.relativeTimeout || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$owner2, _object$connectionId2;
    const message = createBaseMsgSendTx();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    message.packetData = object.packetData !== void 0 && object.packetData !== null ? InterchainAccountPacketData.fromPartial(object.packetData) : void 0;
    message.relativeTimeout = object.relativeTimeout !== void 0 && object.relativeTimeout !== null ? BigInt(object.relativeTimeout.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgSendTxResponse() {
  return {
    sequence: BigInt("0")
  };
}
var MsgSendTxResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = BigInt(reader.uint64().toString());
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgSendTxResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/interchain_accounts/controller/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.sendTx = this.sendTx.bind(this);
  }
  registerInterchainAccount(request) {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then((data2) => MsgRegisterInterchainAccountResponse.decode(new _m03.Reader(data2)));
  }
  sendTx(request) {
    const data = MsgSendTx.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "SendTx", data);
    return promise.then((data2) => MsgSendTxResponse.decode(new _m03.Reader(data2)));
  }
};

export {
  typeFromJSON,
  packet_exports,
  MsgRegisterInterchainAccount,
  MsgSendTx,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-H77UCQPP.js.map
