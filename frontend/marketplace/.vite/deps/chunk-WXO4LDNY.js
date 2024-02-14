import {
  Fee,
  PacketFee
} from "./chunk-LT4HFK7R.js";
import {
  PacketId
} from "./chunk-3SYTEMXM.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgPayPacketFee: () => MsgPayPacketFee,
  MsgPayPacketFeeAsync: () => MsgPayPacketFeeAsync,
  MsgPayPacketFeeAsyncResponse: () => MsgPayPacketFeeAsyncResponse,
  MsgPayPacketFeeResponse: () => MsgPayPacketFeeResponse,
  MsgRegisterCounterpartyPayee: () => MsgRegisterCounterpartyPayee,
  MsgRegisterCounterpartyPayeeResponse: () => MsgRegisterCounterpartyPayeeResponse,
  MsgRegisterPayee: () => MsgRegisterPayee,
  MsgRegisterPayeeResponse: () => MsgRegisterPayeeResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgRegisterPayee() {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: ""
  };
}
var MsgRegisterPayee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    message.payee !== void 0 && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object) {
    var _object$portId, _object$channelId, _object$relayer, _object$payee;
    const message = createBaseMsgRegisterPayee();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    message.relayer = (_object$relayer = object.relayer) !== null && _object$relayer !== void 0 ? _object$relayer : "";
    message.payee = (_object$payee = object.payee) !== null && _object$payee !== void 0 ? _object$payee : "";
    return message;
  }
};
function createBaseMsgRegisterPayeeResponse() {
  return {};
}
var MsgRegisterPayeeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  }
};
function createBaseMsgRegisterCounterpartyPayee() {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
var MsgRegisterCounterpartyPayee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    message.counterpartyPayee !== void 0 && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object) {
    var _object$portId2, _object$channelId2, _object$relayer2, _object$counterpartyP;
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    message.relayer = (_object$relayer2 = object.relayer) !== null && _object$relayer2 !== void 0 ? _object$relayer2 : "";
    message.counterpartyPayee = (_object$counterpartyP = object.counterpartyPayee) !== null && _object$counterpartyP !== void 0 ? _object$counterpartyP : "";
    return message;
  }
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
  return {};
}
var MsgRegisterCounterpartyPayeeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  }
};
function createBaseMsgPayPacketFee() {
  return {
    fee: void 0,
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: []
  };
}
var MsgPayPacketFee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fee !== void 0) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
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
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : void 0,
      sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
      sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.fee !== void 0 && (obj.fee = message.fee ? Fee.toJSON(message.fee) : void 0);
    message.sourcePortId !== void 0 && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== void 0 && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== void 0 && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$sourcePortId, _object$sourceChannel, _object$signer, _object$relayers;
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== void 0 && object.fee !== null ? Fee.fromPartial(object.fee) : void 0;
    message.sourcePortId = (_object$sourcePortId = object.sourcePortId) !== null && _object$sourcePortId !== void 0 ? _object$sourcePortId : "";
    message.sourceChannelId = (_object$sourceChannel = object.sourceChannelId) !== null && _object$sourceChannel !== void 0 ? _object$sourceChannel : "";
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    message.relayers = ((_object$relayers = object.relayers) === null || _object$relayers === void 0 ? void 0 : _object$relayers.map((e) => e)) || [];
    return message;
  }
};
function createBaseMsgPayPacketFeeResponse() {
  return {};
}
var MsgPayPacketFeeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  }
};
function createBaseMsgPayPacketFeeAsync() {
  return {
    packetId: void 0,
    packetFee: void 0
  };
}
var MsgPayPacketFeeAsync = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== void 0) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
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
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : void 0,
      packetFee: isSet(object.packetFee) ? PacketFee.fromJSON(object.packetFee) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    message.packetFee !== void 0 && (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    message.packetFee = object.packetFee !== void 0 && object.packetFee !== null ? PacketFee.fromPartial(object.packetFee) : void 0;
    return message;
  }
};
function createBaseMsgPayPacketFeeAsyncResponse() {
  return {};
}
var MsgPayPacketFeeAsyncResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.registerPayee = this.registerPayee.bind(this);
    this.registerCounterpartyPayee = this.registerCounterpartyPayee.bind(this);
    this.payPacketFee = this.payPacketFee.bind(this);
    this.payPacketFeeAsync = this.payPacketFeeAsync.bind(this);
  }
  registerPayee(request) {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
    return promise.then((data2) => MsgRegisterPayeeResponse.decode(new _m02.Reader(data2)));
  }
  registerCounterpartyPayee(request) {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
    return promise.then((data2) => MsgRegisterCounterpartyPayeeResponse.decode(new _m02.Reader(data2)));
  }
  payPacketFee(request) {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
    return promise.then((data2) => MsgPayPacketFeeResponse.decode(new _m02.Reader(data2)));
  }
  payPacketFeeAsync(request) {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
    return promise.then((data2) => MsgPayPacketFeeAsyncResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgRegisterPayee,
  MsgRegisterCounterpartyPayee,
  MsgPayPacketFee,
  MsgPayPacketFeeAsync,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-WXO4LDNY.js.map
