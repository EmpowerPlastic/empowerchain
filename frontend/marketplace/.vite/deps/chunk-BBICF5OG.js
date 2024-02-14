import {
  BlockParams,
  EvidenceParams,
  ValidatorParams
} from "./chunk-EHVQXC43.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/consensus/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/consensus/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    block: void 0,
    evidence: void 0,
    validator: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.block !== void 0) {
      BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.validator !== void 0) {
      ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
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
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
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
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : void 0,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : void 0,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.block !== void 0 && (obj.block = message.block ? BlockParams.toJSON(message.block) : void 0);
    message.evidence !== void 0 && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : void 0);
    message.validator !== void 0 && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.block = object.block !== void 0 && object.block !== null ? BlockParams.fromPartial(object.block) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : void 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : void 0;
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/consensus/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.consensus.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgUpdateParams,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-BBICF5OG.js.map
