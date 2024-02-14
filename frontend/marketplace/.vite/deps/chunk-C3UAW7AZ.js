import {
  Plan
} from "./chunk-WUOSB4IU.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgCancelUpgrade: () => MsgCancelUpgrade,
  MsgCancelUpgradeResponse: () => MsgCancelUpgradeResponse,
  MsgSoftwareUpgrade: () => MsgSoftwareUpgrade,
  MsgSoftwareUpgradeResponse: () => MsgSoftwareUpgradeResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgSoftwareUpgrade() {
  return {
    authority: "",
    plan: void 0
  };
}
var MsgSoftwareUpgrade = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== void 0) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
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
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.plan !== void 0 && (obj.plan = message.plan ? Plan.toJSON(message.plan) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.plan = object.plan !== void 0 && object.plan !== null ? Plan.fromPartial(object.plan) : void 0;
    return message;
  }
};
function createBaseMsgSoftwareUpgradeResponse() {
  return {};
}
var MsgSoftwareUpgradeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  }
};
function createBaseMsgCancelUpgrade() {
  return {
    authority: ""
  };
}
var MsgCancelUpgrade = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object) {
    var _object$authority2;
    const message = createBaseMsgCancelUpgrade();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    return message;
  }
};
function createBaseMsgCancelUpgradeResponse() {
  return {};
}
var MsgCancelUpgradeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.softwareUpgrade = this.softwareUpgrade.bind(this);
    this.cancelUpgrade = this.cancelUpgrade.bind(this);
  }
  softwareUpgrade(request) {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
    return promise.then((data2) => MsgSoftwareUpgradeResponse.decode(new _m02.Reader(data2)));
  }
  cancelUpgrade(request) {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
    return promise.then((data2) => MsgCancelUpgradeResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgSoftwareUpgrade,
  MsgCancelUpgrade,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-C3UAW7AZ.js.map
