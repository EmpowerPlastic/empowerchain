import {
  Input,
  Output,
  Params,
  SendEnabled
} from "./chunk-EWPXETRV.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgMultiSend: () => MsgMultiSend,
  MsgMultiSendResponse: () => MsgMultiSendResponse,
  MsgSend: () => MsgSend,
  MsgSendResponse: () => MsgSendResponse,
  MsgSetSendEnabled: () => MsgSetSendEnabled,
  MsgSetSendEnabledResponse: () => MsgSetSendEnabledResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgSend() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
var MsgSend = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.fromAddress !== void 0 && (obj.fromAddress = message.fromAddress);
    message.toAddress !== void 0 && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount;
    const message = createBaseMsgSend();
    message.fromAddress = (_object$fromAddress = object.fromAddress) !== null && _object$fromAddress !== void 0 ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) !== null && _object$toAddress !== void 0 ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgSendResponse() {
  return {};
}
var MsgSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
    const message = createBaseMsgSendResponse();
    return message;
  }
};
function createBaseMsgMultiSend() {
  return {
    inputs: [],
    outputs: []
  };
}
var MsgMultiSend = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.inputs) {
      Input.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
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
      inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs) ? object.inputs.map((e) => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object === null || object === void 0 ? void 0 : object.outputs) ? object.outputs.map((e) => Output.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? Input.toJSON(e) : void 0);
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? Output.toJSON(e) : void 0);
    } else {
      obj.outputs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$inputs, _object$outputs;
    const message = createBaseMsgMultiSend();
    message.inputs = ((_object$inputs = object.inputs) === null || _object$inputs === void 0 ? void 0 : _object$inputs.map((e) => Input.fromPartial(e))) || [];
    message.outputs = ((_object$outputs = object.outputs) === null || _object$outputs === void 0 ? void 0 : _object$outputs.map((e) => Output.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgMultiSendResponse() {
  return {};
}
var MsgMultiSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
    const message = createBaseMsgMultiSendResponse();
    return message;
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgSetSendEnabled() {
  return {
    authority: "",
    sendEnabled: [],
    useDefaultFor: []
  };
}
var MsgSetSendEnabled = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.useDefaultFor) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 3:
          message.useDefaultFor.push(reader.string());
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled) ? object.sendEnabled.map((e) => SendEnabled.fromJSON(e)) : [],
      useDefaultFor: Array.isArray(object === null || object === void 0 ? void 0 : object.useDefaultFor) ? object.useDefaultFor.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) => e ? SendEnabled.toJSON(e) : void 0);
    } else {
      obj.sendEnabled = [];
    }
    if (message.useDefaultFor) {
      obj.useDefaultFor = message.useDefaultFor.map((e) => e);
    } else {
      obj.useDefaultFor = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$authority2, _object$sendEnabled, _object$useDefaultFor;
    const message = createBaseMsgSetSendEnabled();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    message.sendEnabled = ((_object$sendEnabled = object.sendEnabled) === null || _object$sendEnabled === void 0 ? void 0 : _object$sendEnabled.map((e) => SendEnabled.fromPartial(e))) || [];
    message.useDefaultFor = ((_object$useDefaultFor = object.useDefaultFor) === null || _object$useDefaultFor === void 0 ? void 0 : _object$useDefaultFor.map((e) => e)) || [];
    return message;
  }
};
function createBaseMsgSetSendEnabledResponse() {
  return {};
}
var MsgSetSendEnabledResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabledResponse();
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
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/bank/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.setSendEnabled = this.setSendEnabled.bind(this);
  }
  send(request) {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then((data2) => MsgSendResponse.decode(new _m02.Reader(data2)));
  }
  multiSend(request) {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
    return promise.then((data2) => MsgMultiSendResponse.decode(new _m02.Reader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
  setSendEnabled(request) {
    const data = MsgSetSendEnabled.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "SetSendEnabled", data);
    return promise.then((data2) => MsgSetSendEnabledResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgSend,
  MsgMultiSend,
  MsgUpdateParams,
  MsgSetSendEnabled,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-A7SKQHDH.js.map
