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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgCreateClient: () => MsgCreateClient,
  MsgCreateClientResponse: () => MsgCreateClientResponse,
  MsgSubmitMisbehaviour: () => MsgSubmitMisbehaviour,
  MsgSubmitMisbehaviourResponse: () => MsgSubmitMisbehaviourResponse,
  MsgUpdateClient: () => MsgUpdateClient,
  MsgUpdateClientResponse: () => MsgUpdateClientResponse,
  MsgUpgradeClient: () => MsgUpgradeClient,
  MsgUpgradeClientResponse: () => MsgUpgradeClientResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgCreateClient() {
  return {
    clientState: void 0,
    consensusState: void 0,
    signer: ""
  };
}
var MsgCreateClient = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
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
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    message.consensusState !== void 0 && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$signer;
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
function createBaseMsgCreateClientResponse() {
  return {};
}
var MsgCreateClientResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
    const message = createBaseMsgCreateClientResponse();
    return message;
  }
};
function createBaseMsgUpdateClient() {
  return {
    clientId: "",
    clientMessage: void 0,
    signer: ""
  };
}
var MsgUpdateClient = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== void 0) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientMessage: isSet(object.clientMessage) ? Any.fromJSON(object.clientMessage) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.clientMessage !== void 0 && (obj.clientMessage = message.clientMessage ? Any.toJSON(message.clientMessage) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId, _object$signer2;
    const message = createBaseMsgUpdateClient();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.clientMessage = object.clientMessage !== void 0 && object.clientMessage !== null ? Any.fromPartial(object.clientMessage) : void 0;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    return message;
  }
};
function createBaseMsgUpdateClientResponse() {
  return {};
}
var MsgUpdateClientResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
    const message = createBaseMsgUpdateClientResponse();
    return message;
  }
};
function createBaseMsgUpgradeClient() {
  return {
    clientId: "",
    clientState: void 0,
    consensusState: void 0,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
var MsgUpgradeClient = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : void 0,
      proofUpgradeClient: isSet(object.proofUpgradeClient) ? bytesFromBase64(object.proofUpgradeClient) : new Uint8Array(),
      proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState) ? bytesFromBase64(object.proofUpgradeConsensusState) : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    message.consensusState !== void 0 && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : void 0);
    message.proofUpgradeClient !== void 0 && (obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient !== void 0 ? message.proofUpgradeClient : new Uint8Array()));
    message.proofUpgradeConsensusState !== void 0 && (obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState !== void 0 ? message.proofUpgradeConsensusState : new Uint8Array()));
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId2, _object$proofUpgradeC, _object$proofUpgradeC2, _object$signer3;
    const message = createBaseMsgUpgradeClient();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.proofUpgradeClient = (_object$proofUpgradeC = object.proofUpgradeClient) !== null && _object$proofUpgradeC !== void 0 ? _object$proofUpgradeC : new Uint8Array();
    message.proofUpgradeConsensusState = (_object$proofUpgradeC2 = object.proofUpgradeConsensusState) !== null && _object$proofUpgradeC2 !== void 0 ? _object$proofUpgradeC2 : new Uint8Array();
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    return message;
  }
};
function createBaseMsgUpgradeClientResponse() {
  return {};
}
var MsgUpgradeClientResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  }
};
function createBaseMsgSubmitMisbehaviour() {
  return {
    clientId: "",
    misbehaviour: void 0,
    signer: ""
  };
}
var MsgSubmitMisbehaviour = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== void 0) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : void 0,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.misbehaviour !== void 0 && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : void 0);
    message.signer !== void 0 && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId3, _object$signer4;
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.misbehaviour = object.misbehaviour !== void 0 && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : void 0;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
function createBaseMsgSubmitMisbehaviourResponse() {
  return {};
}
var MsgSubmitMisbehaviourResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
  }
  createClient(request) {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then((data2) => MsgCreateClientResponse.decode(new _m02.Reader(data2)));
  }
  updateClient(request) {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then((data2) => MsgUpdateClientResponse.decode(new _m02.Reader(data2)));
  }
  upgradeClient(request) {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then((data2) => MsgUpgradeClientResponse.decode(new _m02.Reader(data2)));
  }
  submitMisbehaviour(request) {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then((data2) => MsgSubmitMisbehaviourResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgCreateClient,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgSubmitMisbehaviour,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-7AG75TEV.js.map
