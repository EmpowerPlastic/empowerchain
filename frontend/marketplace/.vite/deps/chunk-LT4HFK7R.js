import {
  PacketId
} from "./chunk-3SYTEMXM.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/fee.js
var fee_exports = {};
__export(fee_exports, {
  Fee: () => Fee,
  IdentifiedPacketFees: () => IdentifiedPacketFees,
  PacketFee: () => PacketFee,
  PacketFees: () => PacketFees
});
var _m0 = __toESM(require_minimal());
function createBaseFee() {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
var Fee = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.recvFee) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
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
      recvFee: Array.isArray(object === null || object === void 0 ? void 0 : object.recvFee) ? object.recvFee.map((e) => Coin.fromJSON(e)) : [],
      ackFee: Array.isArray(object === null || object === void 0 ? void 0 : object.ackFee) ? object.ackFee.map((e) => Coin.fromJSON(e)) : [],
      timeoutFee: Array.isArray(object === null || object === void 0 ? void 0 : object.timeoutFee) ? object.timeoutFee.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$recvFee, _object$ackFee, _object$timeoutFee;
    const message = createBaseFee();
    message.recvFee = ((_object$recvFee = object.recvFee) === null || _object$recvFee === void 0 ? void 0 : _object$recvFee.map((e) => Coin.fromPartial(e))) || [];
    message.ackFee = ((_object$ackFee = object.ackFee) === null || _object$ackFee === void 0 ? void 0 : _object$ackFee.map((e) => Coin.fromPartial(e))) || [];
    message.timeoutFee = ((_object$timeoutFee = object.timeoutFee) === null || _object$timeoutFee === void 0 ? void 0 : _object$timeoutFee.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBasePacketFee() {
  return {
    fee: void 0,
    refundAddress: "",
    relayers: []
  };
}
var PacketFee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fee !== void 0) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        case 3:
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
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers) ? object.relayers.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.fee !== void 0 && (obj.fee = message.fee ? Fee.toJSON(message.fee) : void 0);
    message.refundAddress !== void 0 && (obj.refundAddress = message.refundAddress);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$refundAddress, _object$relayers;
    const message = createBasePacketFee();
    message.fee = object.fee !== void 0 && object.fee !== null ? Fee.fromPartial(object.fee) : void 0;
    message.refundAddress = (_object$refundAddress = object.refundAddress) !== null && _object$refundAddress !== void 0 ? _object$refundAddress : "";
    message.relayers = ((_object$relayers = object.relayers) === null || _object$relayers === void 0 ? void 0 : _object$relayers.map((e) => e)) || [];
    return message;
  }
};
function createBasePacketFees() {
  return {
    packetFees: []
  };
}
var PacketFees = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
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
      packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => PacketFee.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) => e ? PacketFee.toJSON(e) : void 0);
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$packetFees;
    const message = createBasePacketFees();
    message.packetFees = ((_object$packetFees = object.packetFees) === null || _object$packetFees === void 0 ? void 0 : _object$packetFees.map((e) => PacketFee.fromPartial(e))) || [];
    return message;
  }
};
function createBaseIdentifiedPacketFees() {
  return {
    packetId: void 0,
    packetFees: []
  };
}
var IdentifiedPacketFees = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
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
      packetFees: Array.isArray(object === null || object === void 0 ? void 0 : object.packetFees) ? object.packetFees.map((e) => PacketFee.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) => e ? PacketFee.toJSON(e) : void 0);
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$packetFees2;
    const message = createBaseIdentifiedPacketFees();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    message.packetFees = ((_object$packetFees2 = object.packetFees) === null || _object$packetFees2 === void 0 ? void 0 : _object$packetFees2.map((e) => PacketFee.fromPartial(e))) || [];
    return message;
  }
};

export {
  Fee,
  PacketFee,
  IdentifiedPacketFees,
  fee_exports
};
//# sourceMappingURL=chunk-LT4HFK7R.js.map
