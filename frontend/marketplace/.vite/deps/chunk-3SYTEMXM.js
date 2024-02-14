import {
  Height
} from "./chunk-2L6AETVN.js";
import {
  base64FromBytes,
  bytesFromBase64,
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/channel/v1/channel.js
var channel_exports = {};
__export(channel_exports, {
  Acknowledgement: () => Acknowledgement,
  Channel: () => Channel,
  Counterparty: () => Counterparty,
  IdentifiedChannel: () => IdentifiedChannel,
  Order: () => Order,
  OrderSDKType: () => OrderSDKType,
  Packet: () => Packet,
  PacketId: () => PacketId,
  PacketState: () => PacketState,
  State: () => State,
  StateSDKType: () => StateSDKType,
  orderFromJSON: () => orderFromJSON,
  orderToJSON: () => orderToJSON,
  stateFromJSON: () => stateFromJSON,
  stateToJSON: () => stateToJSON
});
var _m0 = __toESM(require_minimal());
var State = function(State2) {
  State2[State2["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State2[State2["STATE_INIT"] = 1] = "STATE_INIT";
  State2[State2["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State2[State2["STATE_OPEN"] = 3] = "STATE_OPEN";
  State2[State2["STATE_CLOSED"] = 4] = "STATE_CLOSED";
  State2[State2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State2;
}({});
var StateSDKType = State;
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.STATE_CLOSED:
      return "STATE_CLOSED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var Order = function(Order2) {
  Order2[Order2["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
  Order2[Order2["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
  Order2[Order2["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
  Order2[Order2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Order2;
}({});
var OrderSDKType = Order;
function orderFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;
    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;
    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}
function orderToJSON(object) {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";
    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";
    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";
    case Order.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: void 0,
    connectionHops: [],
    version: ""
  };
}
var Channel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
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
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      connectionHops: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.state !== void 0 && (obj.state = stateToJSON(message.state));
    message.ordering !== void 0 && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map((e) => e);
    } else {
      obj.connectionHops = [];
    }
    message.version !== void 0 && (obj.version = message.version);
    return obj;
  },
  fromPartial(object) {
    var _object$state, _object$ordering, _object$connectionHop, _object$version;
    const message = createBaseChannel();
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.ordering = (_object$ordering = object.ordering) !== null && _object$ordering !== void 0 ? _object$ordering : 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.connectionHops = ((_object$connectionHop = object.connectionHops) === null || _object$connectionHop === void 0 ? void 0 : _object$connectionHop.map((e) => e)) || [];
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    return message;
  }
};
function createBaseIdentifiedChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: void 0,
    connectionHops: [],
    version: "",
    portId: "",
    channelId: ""
  };
}
var IdentifiedChannel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.portId = reader.string();
          break;
        case 7:
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
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      connectionHops: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionHops) ? object.connectionHops.map((e) => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.state !== void 0 && (obj.state = stateToJSON(message.state));
    message.ordering !== void 0 && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map((e) => e);
    } else {
      obj.connectionHops = [];
    }
    message.version !== void 0 && (obj.version = message.version);
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$state2, _object$ordering2, _object$connectionHop2, _object$version2, _object$portId, _object$channelId;
    const message = createBaseIdentifiedChannel();
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.ordering = (_object$ordering2 = object.ordering) !== null && _object$ordering2 !== void 0 ? _object$ordering2 : 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.connectionHops = ((_object$connectionHop2 = object.connectionHops) === null || _object$connectionHop2 === void 0 ? void 0 : _object$connectionHop2.map((e) => e)) || [];
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
function createBaseCounterparty() {
  return {
    portId: "",
    channelId: ""
  };
}
var Counterparty = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object) {
    var _object$portId2, _object$channelId2;
    const message = createBaseCounterparty();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    return message;
  }
};
function createBasePacket() {
  return {
    sequence: BigInt("0"),
    sourcePort: "",
    sourceChannel: "",
    destinationPort: "",
    destinationChannel: "",
    data: new Uint8Array(),
    timeoutHeight: void 0,
    timeoutTimestamp: BigInt("0")
  };
}
var Packet = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.destinationPort !== "") {
      writer.uint32(34).string(message.destinationPort);
    }
    if (message.destinationChannel !== "") {
      writer.uint32(42).string(message.destinationChannel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeoutHeight !== void 0) {
      Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(64).uint64(import_long.default.fromString(message.timeoutTimestamp.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.sourcePort = reader.string();
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.destinationPort = reader.string();
          break;
        case 5:
          message.destinationChannel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeoutTimestamp = BigInt(reader.uint64().toString());
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0"),
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      destinationPort: isSet(object.destinationPort) ? String(object.destinationPort) : "",
      destinationChannel: isSet(object.destinationChannel) ? String(object.destinationChannel) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : void 0,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    message.sourcePort !== void 0 && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== void 0 && (obj.sourceChannel = message.sourceChannel);
    message.destinationPort !== void 0 && (obj.destinationPort = message.destinationPort);
    message.destinationChannel !== void 0 && (obj.destinationChannel = message.destinationChannel);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.timeoutHeight !== void 0 && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : void 0);
    message.timeoutTimestamp !== void 0 && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$sourcePort, _object$sourceChannel, _object$destinationPo, _object$destinationCh, _object$data;
    const message = createBasePacket();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    message.sourcePort = (_object$sourcePort = object.sourcePort) !== null && _object$sourcePort !== void 0 ? _object$sourcePort : "";
    message.sourceChannel = (_object$sourceChannel = object.sourceChannel) !== null && _object$sourceChannel !== void 0 ? _object$sourceChannel : "";
    message.destinationPort = (_object$destinationPo = object.destinationPort) !== null && _object$destinationPo !== void 0 ? _object$destinationPo : "";
    message.destinationChannel = (_object$destinationCh = object.destinationChannel) !== null && _object$destinationCh !== void 0 ? _object$destinationCh : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : void 0;
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0");
    return message;
  }
};
function createBasePacketState() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt("0"),
    data: new Uint8Array()
  };
}
var PacketState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketState();
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
          message.sequence = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.data = reader.bytes();
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
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0"),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$portId3, _object$channelId3, _object$data2;
    const message = createBasePacketState();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBasePacketId() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt("0")
  };
}
var PacketId = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketId();
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
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId4, _object$channelId4;
    const message = createBasePacketId();
    message.portId = (_object$portId4 = object.portId) !== null && _object$portId4 !== void 0 ? _object$portId4 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseAcknowledgement() {
  return {
    result: void 0,
    error: void 0
  };
}
var Acknowledgement = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.result !== void 0) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== void 0) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
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
      result: isSet(object.result) ? bytesFromBase64(object.result) : void 0,
      error: isSet(object.error) ? String(object.error) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.result !== void 0 && (obj.result = message.result !== void 0 ? base64FromBytes(message.result) : void 0);
    message.error !== void 0 && (obj.error = message.error);
    return obj;
  },
  fromPartial(object) {
    var _object$result, _object$error;
    const message = createBaseAcknowledgement();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : void 0;
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : void 0;
    return message;
  }
};

export {
  stateFromJSON,
  orderFromJSON,
  Channel,
  IdentifiedChannel,
  Packet,
  PacketState,
  PacketId,
  channel_exports
};
//# sourceMappingURL=chunk-3SYTEMXM.js.map
