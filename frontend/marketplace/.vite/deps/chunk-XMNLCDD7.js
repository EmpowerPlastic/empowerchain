import {
  Height
} from "./chunk-2L6AETVN.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgTransfer: () => MsgTransfer,
  MsgTransferResponse: () => MsgTransferResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgTransfer() {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: void 0,
    sender: "",
    receiver: "",
    timeoutHeight: void 0,
    timeoutTimestamp: BigInt("0"),
    memo: ""
  };
}
var MsgTransfer = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== void 0) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== void 0) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(56).uint64(import_long.default.fromString(message.timeoutTimestamp.toString()));
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = BigInt(reader.uint64().toString());
          break;
        case 8:
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
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : void 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : void 0,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0"),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.sourcePort !== void 0 && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== void 0 && (obj.sourceChannel = message.sourceChannel);
    message.token !== void 0 && (obj.token = message.token ? Coin.toJSON(message.token) : void 0);
    message.sender !== void 0 && (obj.sender = message.sender);
    message.receiver !== void 0 && (obj.receiver = message.receiver);
    message.timeoutHeight !== void 0 && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : void 0);
    message.timeoutTimestamp !== void 0 && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt("0")).toString());
    message.memo !== void 0 && (obj.memo = message.memo);
    return obj;
  },
  fromPartial(object) {
    var _object$sourcePort, _object$sourceChannel, _object$sender, _object$receiver, _object$memo;
    const message = createBaseMsgTransfer();
    message.sourcePort = (_object$sourcePort = object.sourcePort) !== null && _object$sourcePort !== void 0 ? _object$sourcePort : "";
    message.sourceChannel = (_object$sourceChannel = object.sourceChannel) !== null && _object$sourceChannel !== void 0 ? _object$sourceChannel : "";
    message.token = object.token !== void 0 && object.token !== null ? Coin.fromPartial(object.token) : void 0;
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : void 0;
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0");
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    return message;
  }
};
function createBaseMsgTransferResponse() {
  return {
    sequence: BigInt("0")
  };
}
var MsgTransferResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
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
    const message = createBaseMsgTransferResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/transfer/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.transfer = this.transfer.bind(this);
  }
  transfer(request) {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
    return promise.then((data2) => MsgTransferResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgTransfer,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-XMNLCDD7.js.map
