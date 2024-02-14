import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  fromJsonTimestamp,
  fromTimestamp,
  import_long,
  isSet,
  require_minimal,
  toTimestamp
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/upgrade/v1beta1/upgrade.js
var upgrade_exports = {};
__export(upgrade_exports, {
  CancelSoftwareUpgradeProposal: () => CancelSoftwareUpgradeProposal,
  ModuleVersion: () => ModuleVersion,
  Plan: () => Plan,
  SoftwareUpgradeProposal: () => SoftwareUpgradeProposal
});
var _m0 = __toESM(require_minimal());
function createBasePlan() {
  return {
    name: "",
    time: void 0,
    height: BigInt("0"),
    info: "",
    upgradedClientState: void 0
  };
}
var Plan = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.upgradedClientState !== void 0) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = BigInt(reader.int64().toString());
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      info: isSet(object.info) ? String(object.info) : "",
      upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.info !== void 0 && (obj.info = message.info);
    message.upgradedClientState !== void 0 && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$time, _object$info;
    const message = createBasePlan();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.upgradedClientState = object.upgradedClientState !== void 0 && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : void 0;
    return message;
  }
};
function createBaseSoftwareUpgradeProposal() {
  return {
    title: "",
    description: "",
    plan: void 0
  };
}
var SoftwareUpgradeProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== void 0) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    message.plan !== void 0 && (obj.plan = message.plan ? Plan.toJSON(message.plan) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description;
    const message = createBaseSoftwareUpgradeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.plan = object.plan !== void 0 && object.plan !== null ? Plan.fromPartial(object.plan) : void 0;
    return message;
  }
};
function createBaseCancelSoftwareUpgradeProposal() {
  return {
    title: "",
    description: ""
  };
}
var CancelSoftwareUpgradeProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCancelSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    return obj;
  },
  fromPartial(object) {
    var _object$title2, _object$description2;
    const message = createBaseCancelSoftwareUpgradeProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    return message;
  }
};
function createBaseModuleVersion() {
  return {
    name: "",
    version: BigInt("0")
  };
}
var ModuleVersion = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.version.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = BigInt(reader.uint64().toString());
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
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== void 0 && (obj.name = message.name);
    message.version !== void 0 && (obj.version = (message.version || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$name2;
    const message = createBaseModuleVersion();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt("0");
    return message;
  }
};

export {
  Plan,
  ModuleVersion,
  upgrade_exports
};
//# sourceMappingURL=chunk-WUOSB4IU.js.map
