import {
  Plan
} from "./chunk-WUOSB4IU.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/client/v1/client.js
var client_exports = {};
__export(client_exports, {
  ClientConsensusStates: () => ClientConsensusStates,
  ClientUpdateProposal: () => ClientUpdateProposal,
  ConsensusStateWithHeight: () => ConsensusStateWithHeight,
  Height: () => Height,
  IdentifiedClientState: () => IdentifiedClientState,
  Params: () => Params,
  UpgradeProposal: () => UpgradeProposal
});
var _m0 = __toESM(require_minimal());
function createBaseIdentifiedClientState() {
  return {
    clientId: "",
    clientState: void 0
  };
}
var IdentifiedClientState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
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
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.clientState !== void 0 && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId;
    const message = createBaseIdentifiedClientState();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    return message;
  }
};
function createBaseConsensusStateWithHeight() {
  return {
    height: void 0,
    consensusState: void 0
  };
}
var ConsensusStateWithHeight = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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
      height: isSet(object.height) ? Height.fromJSON(object.height) : void 0,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = message.height ? Height.toJSON(message.height) : void 0);
    message.consensusState !== void 0 && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    return message;
  }
};
function createBaseClientConsensusStates() {
  return {
    clientId: "",
    consensusStates: []
  };
}
var ClientConsensusStates = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
      consensusStates: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStates) ? object.consensusStates.map((e) => ConsensusStateWithHeight.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) => e ? ConsensusStateWithHeight.toJSON(e) : void 0);
    } else {
      obj.consensusStates = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$clientId2, _object$consensusStat;
    const message = createBaseClientConsensusStates();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.consensusStates = ((_object$consensusStat = object.consensusStates) === null || _object$consensusStat === void 0 ? void 0 : _object$consensusStat.map((e) => ConsensusStateWithHeight.fromPartial(e))) || [];
    return message;
  }
};
function createBaseClientUpdateProposal() {
  return {
    title: "",
    description: "",
    subjectClientId: "",
    substituteClientId: ""
  };
}
var ClientUpdateProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subjectClientId !== "") {
      writer.uint32(26).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(34).string(message.substituteClientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();
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
          message.subjectClientId = reader.string();
          break;
        case 4:
          message.substituteClientId = reader.string();
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
      subjectClientId: isSet(object.subjectClientId) ? String(object.subjectClientId) : "",
      substituteClientId: isSet(object.substituteClientId) ? String(object.substituteClientId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    message.subjectClientId !== void 0 && (obj.subjectClientId = message.subjectClientId);
    message.substituteClientId !== void 0 && (obj.substituteClientId = message.substituteClientId);
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$subjectClient, _object$substituteCli;
    const message = createBaseClientUpdateProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.subjectClientId = (_object$subjectClient = object.subjectClientId) !== null && _object$subjectClient !== void 0 ? _object$subjectClient : "";
    message.substituteClientId = (_object$substituteCli = object.substituteClientId) !== null && _object$substituteCli !== void 0 ? _object$substituteCli : "";
    return message;
  }
};
function createBaseUpgradeProposal() {
  return {
    title: "",
    description: "",
    plan: void 0,
    upgradedClientState: void 0
  };
}
var UpgradeProposal = {
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
    if (message.upgradedClientState !== void 0) {
      Any.encode(message.upgradedClientState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();
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
        case 4:
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
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : void 0,
      upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== void 0 && (obj.title = message.title);
    message.description !== void 0 && (obj.description = message.description);
    message.plan !== void 0 && (obj.plan = message.plan ? Plan.toJSON(message.plan) : void 0);
    message.upgradedClientState !== void 0 && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$title2, _object$description2;
    const message = createBaseUpgradeProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.plan = object.plan !== void 0 && object.plan !== null ? Plan.fromPartial(object.plan) : void 0;
    message.upgradedClientState = object.upgradedClientState !== void 0 && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : void 0;
    return message;
  }
};
function createBaseHeight() {
  return {
    revisionNumber: BigInt("0"),
    revisionHeight: BigInt("0")
  };
}
var Height = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.revisionNumber.toString()));
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.revisionHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.revisionHeight = BigInt(reader.uint64().toString());
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
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt("0"),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.revisionNumber !== void 0 && (obj.revisionNumber = (message.revisionNumber || BigInt("0")).toString());
    message.revisionHeight !== void 0 && (obj.revisionHeight = (message.revisionHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt("0");
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseParams() {
  return {
    allowedClients: []
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
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
      allowedClients: Array.isArray(object === null || object === void 0 ? void 0 : object.allowedClients) ? object.allowedClients.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.allowedClients) {
      obj.allowedClients = message.allowedClients.map((e) => e);
    } else {
      obj.allowedClients = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$allowedClient;
    const message = createBaseParams();
    message.allowedClients = ((_object$allowedClient = object.allowedClients) === null || _object$allowedClient === void 0 ? void 0 : _object$allowedClient.map((e) => e)) || [];
    return message;
  }
};

export {
  IdentifiedClientState,
  ConsensusStateWithHeight,
  ClientConsensusStates,
  Height,
  Params,
  client_exports
};
//# sourceMappingURL=chunk-2L6AETVN.js.map
