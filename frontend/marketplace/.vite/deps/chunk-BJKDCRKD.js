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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/crisis/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/crisis/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse,
  MsgVerifyInvariant: () => MsgVerifyInvariant,
  MsgVerifyInvariantResponse: () => MsgVerifyInvariantResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}
var MsgVerifyInvariant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariantModuleName: isSet(object.invariantModuleName) ? String(object.invariantModuleName) : "",
      invariantRoute: isSet(object.invariantRoute) ? String(object.invariantRoute) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.invariantModuleName !== void 0 && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== void 0 && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial(object) {
    var _object$sender, _object$invariantModu, _object$invariantRout;
    const message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.invariantModuleName = (_object$invariantModu = object.invariantModuleName) !== null && _object$invariantModu !== void 0 ? _object$invariantModu : "";
    message.invariantRoute = (_object$invariantRout = object.invariantRoute) !== null && _object$invariantRout !== void 0 ? _object$invariantRout : "";
    return message;
  }
};
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
var MsgVerifyInvariantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    constantFee: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.constantFee !== void 0) {
      Coin.encode(message.constantFee, writer.uint32(18).fork()).ldelim();
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
          message.constantFee = Coin.decode(reader, reader.uint32());
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
      constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.constantFee !== void 0 && (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.constantFee = object.constantFee !== void 0 && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : void 0;
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/crisis/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.verifyInvariant = this.verifyInvariant.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  verifyInvariant(request) {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then((data2) => MsgVerifyInvariantResponse.decode(new _m02.Reader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgVerifyInvariant,
  MsgUpdateParams,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-BJKDCRKD.js.map
