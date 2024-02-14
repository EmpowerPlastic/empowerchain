import {
  IdentifiedPacketFees
} from "./chunk-LT4HFK7R.js";
import {
  PacketId
} from "./chunk-3SYTEMXM.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  PageRequest
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  import_long,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryCounterpartyPayeeRequest: () => QueryCounterpartyPayeeRequest,
  QueryCounterpartyPayeeResponse: () => QueryCounterpartyPayeeResponse,
  QueryFeeEnabledChannelRequest: () => QueryFeeEnabledChannelRequest,
  QueryFeeEnabledChannelResponse: () => QueryFeeEnabledChannelResponse,
  QueryFeeEnabledChannelsRequest: () => QueryFeeEnabledChannelsRequest,
  QueryFeeEnabledChannelsResponse: () => QueryFeeEnabledChannelsResponse,
  QueryIncentivizedPacketRequest: () => QueryIncentivizedPacketRequest,
  QueryIncentivizedPacketResponse: () => QueryIncentivizedPacketResponse,
  QueryIncentivizedPacketsForChannelRequest: () => QueryIncentivizedPacketsForChannelRequest,
  QueryIncentivizedPacketsForChannelResponse: () => QueryIncentivizedPacketsForChannelResponse,
  QueryIncentivizedPacketsRequest: () => QueryIncentivizedPacketsRequest,
  QueryIncentivizedPacketsResponse: () => QueryIncentivizedPacketsResponse,
  QueryPayeeRequest: () => QueryPayeeRequest,
  QueryPayeeResponse: () => QueryPayeeResponse,
  QueryTotalAckFeesRequest: () => QueryTotalAckFeesRequest,
  QueryTotalAckFeesResponse: () => QueryTotalAckFeesResponse,
  QueryTotalRecvFeesRequest: () => QueryTotalRecvFeesRequest,
  QueryTotalRecvFeesResponse: () => QueryTotalRecvFeesResponse,
  QueryTotalTimeoutFeesRequest: () => QueryTotalTimeoutFeesRequest,
  QueryTotalTimeoutFeesResponse: () => QueryTotalTimeoutFeesResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/genesis.js
var genesis_exports = {};
__export(genesis_exports, {
  FeeEnabledChannel: () => FeeEnabledChannel,
  ForwardRelayerAddress: () => ForwardRelayerAddress,
  GenesisState: () => GenesisState,
  RegisteredCounterpartyPayee: () => RegisteredCounterpartyPayee,
  RegisteredPayee: () => RegisteredPayee
});
var _m0 = __toESM(require_minimal());
function createBaseGenesisState() {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: []
  };
}
var GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
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
      identifiedFees: Array.isArray(object === null || object === void 0 ? void 0 : object.identifiedFees) ? object.identifiedFees.map((e) => IdentifiedPacketFees.fromJSON(e)) : [],
      feeEnabledChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.feeEnabledChannels) ? object.feeEnabledChannels.map((e) => FeeEnabledChannel.fromJSON(e)) : [],
      registeredPayees: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredPayees) ? object.registeredPayees.map((e) => RegisteredPayee.fromJSON(e)) : [],
      registeredCounterpartyPayees: Array.isArray(object === null || object === void 0 ? void 0 : object.registeredCounterpartyPayees) ? object.registeredCounterpartyPayees.map((e) => RegisteredCounterpartyPayee.fromJSON(e)) : [],
      forwardRelayers: Array.isArray(object === null || object === void 0 ? void 0 : object.forwardRelayers) ? object.forwardRelayers.map((e) => ForwardRelayerAddress.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map((e) => e ? IdentifiedPacketFees.toJSON(e) : void 0);
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => e ? FeeEnabledChannel.toJSON(e) : void 0);
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map((e) => e ? RegisteredPayee.toJSON(e) : void 0);
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map((e) => e ? RegisteredCounterpartyPayee.toJSON(e) : void 0);
    } else {
      obj.registeredCounterpartyPayees = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map((e) => e ? ForwardRelayerAddress.toJSON(e) : void 0);
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$identifiedFee, _object$feeEnabledCha, _object$registeredPay, _object$registeredCou, _object$forwardRelaye;
    const message = createBaseGenesisState();
    message.identifiedFees = ((_object$identifiedFee = object.identifiedFees) === null || _object$identifiedFee === void 0 ? void 0 : _object$identifiedFee.map((e) => IdentifiedPacketFees.fromPartial(e))) || [];
    message.feeEnabledChannels = ((_object$feeEnabledCha = object.feeEnabledChannels) === null || _object$feeEnabledCha === void 0 ? void 0 : _object$feeEnabledCha.map((e) => FeeEnabledChannel.fromPartial(e))) || [];
    message.registeredPayees = ((_object$registeredPay = object.registeredPayees) === null || _object$registeredPay === void 0 ? void 0 : _object$registeredPay.map((e) => RegisteredPayee.fromPartial(e))) || [];
    message.registeredCounterpartyPayees = ((_object$registeredCou = object.registeredCounterpartyPayees) === null || _object$registeredCou === void 0 ? void 0 : _object$registeredCou.map((e) => RegisteredCounterpartyPayee.fromPartial(e))) || [];
    message.forwardRelayers = ((_object$forwardRelaye = object.forwardRelayers) === null || _object$forwardRelaye === void 0 ? void 0 : _object$forwardRelaye.map((e) => ForwardRelayerAddress.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFeeEnabledChannel() {
  return {
    portId: "",
    channelId: ""
  };
}
var FeeEnabledChannel = {
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
    const message = createBaseFeeEnabledChannel();
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
    var _object$portId, _object$channelId;
    const message = createBaseFeeEnabledChannel();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
function createBaseRegisteredPayee() {
  return {
    channelId: "",
    relayer: "",
    payee: ""
  };
}
var RegisteredPayee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
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
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    message.payee !== void 0 && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId2, _object$relayer, _object$payee;
    const message = createBaseRegisteredPayee();
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    message.relayer = (_object$relayer = object.relayer) !== null && _object$relayer !== void 0 ? _object$relayer : "";
    message.payee = (_object$payee = object.payee) !== null && _object$payee !== void 0 ? _object$payee : "";
    return message;
  }
};
function createBaseRegisteredCounterpartyPayee() {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
var RegisteredCounterpartyPayee = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
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
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    message.counterpartyPayee !== void 0 && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId3, _object$relayer2, _object$counterpartyP;
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.relayer = (_object$relayer2 = object.relayer) !== null && _object$relayer2 !== void 0 ? _object$relayer2 : "";
    message.counterpartyPayee = (_object$counterpartyP = object.counterpartyPayee) !== null && _object$counterpartyP !== void 0 ? _object$counterpartyP : "";
    return message;
  }
};
function createBaseForwardRelayerAddress() {
  return {
    address: "",
    packetId: void 0
  };
}
var ForwardRelayerAddress = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
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
      address: isSet(object.address) ? String(object.address) : "",
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseForwardRelayerAddress();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryIncentivizedPacketsRequest() {
  return {
    pagination: void 0,
    queryHeight: BigInt("0")
  };
}
var QueryIncentivizedPacketsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.queryHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = BigInt(reader.uint64().toString());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0,
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    message.queryHeight !== void 0 && (obj.queryHeight = (message.queryHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.queryHeight = object.queryHeight !== void 0 && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryIncentivizedPacketsResponse() {
  return {
    incentivizedPackets: []
  };
}
var QueryIncentivizedPacketsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
      incentivizedPackets: Array.isArray(object === null || object === void 0 ? void 0 : object.incentivizedPackets) ? object.incentivizedPackets.map((e) => IdentifiedPacketFees.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => e ? IdentifiedPacketFees.toJSON(e) : void 0);
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$incentivizedP;
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = ((_object$incentivizedP = object.incentivizedPackets) === null || _object$incentivizedP === void 0 ? void 0 : _object$incentivizedP.map((e) => IdentifiedPacketFees.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryIncentivizedPacketRequest() {
  return {
    packetId: void 0,
    queryHeight: BigInt("0")
  };
}
var QueryIncentivizedPacketRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.queryHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = BigInt(reader.uint64().toString());
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
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    message.queryHeight !== void 0 && (obj.queryHeight = (message.queryHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    message.queryHeight = object.queryHeight !== void 0 && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryIncentivizedPacketResponse() {
  return {
    incentivizedPacket: void 0
  };
}
var QueryIncentivizedPacketResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.incentivizedPacket !== void 0) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
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
      incentivizedPacket: isSet(object.incentivizedPacket) ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.incentivizedPacket !== void 0 && (obj.incentivizedPacket = message.incentivizedPacket ? IdentifiedPacketFees.toJSON(message.incentivizedPacket) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = object.incentivizedPacket !== void 0 && object.incentivizedPacket !== null ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket) : void 0;
    return message;
  }
};
function createBaseQueryIncentivizedPacketsForChannelRequest() {
  return {
    pagination: void 0,
    portId: "",
    channelId: "",
    queryHeight: BigInt("0")
  };
}
var QueryIncentivizedPacketsForChannelRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.queryHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = BigInt(reader.uint64().toString());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    message.portId !== void 0 && (obj.portId = message.portId);
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.queryHeight !== void 0 && (obj.queryHeight = (message.queryHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$portId, _object$channelId;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    message.queryHeight = object.queryHeight !== void 0 && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryIncentivizedPacketsForChannelResponse() {
  return {
    incentivizedPackets: []
  };
}
var QueryIncentivizedPacketsForChannelResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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
      incentivizedPackets: Array.isArray(object === null || object === void 0 ? void 0 : object.incentivizedPackets) ? object.incentivizedPackets.map((e) => IdentifiedPacketFees.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => e ? IdentifiedPacketFees.toJSON(e) : void 0);
    } else {
      obj.incentivizedPackets = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$incentivizedP2;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = ((_object$incentivizedP2 = object.incentivizedPackets) === null || _object$incentivizedP2 === void 0 ? void 0 : _object$incentivizedP2.map((e) => IdentifiedPacketFees.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryTotalRecvFeesRequest() {
  return {
    packetId: void 0
  };
}
var QueryTotalRecvFeesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
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
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalRecvFeesRequest();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    return message;
  }
};
function createBaseQueryTotalRecvFeesResponse() {
  return {
    recvFees: []
  };
}
var QueryTotalRecvFeesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.recvFees) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
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
      recvFees: Array.isArray(object === null || object === void 0 ? void 0 : object.recvFees) ? object.recvFees.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.recvFees = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$recvFees;
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = ((_object$recvFees = object.recvFees) === null || _object$recvFees === void 0 ? void 0 : _object$recvFees.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryTotalAckFeesRequest() {
  return {
    packetId: void 0
  };
}
var QueryTotalAckFeesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
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
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalAckFeesRequest();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    return message;
  }
};
function createBaseQueryTotalAckFeesResponse() {
  return {
    ackFees: []
  };
}
var QueryTotalAckFeesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.ackFees) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
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
      ackFees: Array.isArray(object === null || object === void 0 ? void 0 : object.ackFees) ? object.ackFees.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.ackFees = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$ackFees;
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = ((_object$ackFees = object.ackFees) === null || _object$ackFees === void 0 ? void 0 : _object$ackFees.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryTotalTimeoutFeesRequest() {
  return {
    packetId: void 0
  };
}
var QueryTotalTimeoutFeesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
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
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.packetId !== void 0 && (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    return message;
  }
};
function createBaseQueryTotalTimeoutFeesResponse() {
  return {
    timeoutFees: []
  };
}
var QueryTotalTimeoutFeesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.timeoutFees) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
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
      timeoutFees: Array.isArray(object === null || object === void 0 ? void 0 : object.timeoutFees) ? object.timeoutFees.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$timeoutFees;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = ((_object$timeoutFees = object.timeoutFees) === null || _object$timeoutFees === void 0 ? void 0 : _object$timeoutFees.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryPayeeRequest() {
  return {
    channelId: "",
    relayer: ""
  };
}
var QueryPayeeRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId2, _object$relayer;
    const message = createBaseQueryPayeeRequest();
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    message.relayer = (_object$relayer = object.relayer) !== null && _object$relayer !== void 0 ? _object$relayer : "";
    return message;
  }
};
function createBaseQueryPayeeResponse() {
  return {
    payeeAddress: ""
  };
}
var QueryPayeeResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
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
      payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.payeeAddress !== void 0 && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$payeeAddress;
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = (_object$payeeAddress = object.payeeAddress) !== null && _object$payeeAddress !== void 0 ? _object$payeeAddress : "";
    return message;
  }
};
function createBaseQueryCounterpartyPayeeRequest() {
  return {
    channelId: "",
    relayer: ""
  };
}
var QueryCounterpartyPayeeRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
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
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.channelId !== void 0 && (obj.channelId = message.channelId);
    message.relayer !== void 0 && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial(object) {
    var _object$channelId3, _object$relayer2;
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.relayer = (_object$relayer2 = object.relayer) !== null && _object$relayer2 !== void 0 ? _object$relayer2 : "";
    return message;
  }
};
function createBaseQueryCounterpartyPayeeResponse() {
  return {
    counterpartyPayee: ""
  };
}
var QueryCounterpartyPayeeResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.counterpartyPayee !== void 0 && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object) {
    var _object$counterpartyP;
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = (_object$counterpartyP = object.counterpartyPayee) !== null && _object$counterpartyP !== void 0 ? _object$counterpartyP : "";
    return message;
  }
};
function createBaseQueryFeeEnabledChannelsRequest() {
  return {
    pagination: void 0,
    queryHeight: BigInt("0")
  };
}
var QueryFeeEnabledChannelsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.queryHeight.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = BigInt(reader.uint64().toString());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0,
      queryHeight: isSet(object.queryHeight) ? BigInt(object.queryHeight.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    message.queryHeight !== void 0 && (obj.queryHeight = (message.queryHeight || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.queryHeight = object.queryHeight !== void 0 && object.queryHeight !== null ? BigInt(object.queryHeight.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryFeeEnabledChannelsResponse() {
  return {
    feeEnabledChannels: []
  };
}
var QueryFeeEnabledChannelsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
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
      feeEnabledChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.feeEnabledChannels) ? object.feeEnabledChannels.map((e) => FeeEnabledChannel.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => e ? FeeEnabledChannel.toJSON(e) : void 0);
    } else {
      obj.feeEnabledChannels = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$feeEnabledCha;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = ((_object$feeEnabledCha = object.feeEnabledChannels) === null || _object$feeEnabledCha === void 0 ? void 0 : _object$feeEnabledCha.map((e) => FeeEnabledChannel.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryFeeEnabledChannelRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
var QueryFeeEnabledChannelRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
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
    var _object$portId2, _object$channelId4;
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    return message;
  }
};
function createBaseQueryFeeEnabledChannelResponse() {
  return {
    feeEnabled: false
  };
}
var QueryFeeEnabledChannelResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
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
      feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.feeEnabled !== void 0 && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial(object) {
    var _object$feeEnabled;
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = (_object$feeEnabled = object.feeEnabled) !== null && _object$feeEnabled !== void 0 ? _object$feeEnabled : false;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/applications/fee/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  incentivizedPackets(request) {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then((data2) => QueryIncentivizedPacketsResponse.decode(new _m03.Reader(data2)));
  }
  incentivizedPacket(request) {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then((data2) => QueryIncentivizedPacketResponse.decode(new _m03.Reader(data2)));
  }
  incentivizedPacketsForChannel(request) {
    const data = QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then((data2) => QueryIncentivizedPacketsForChannelResponse.decode(new _m03.Reader(data2)));
  }
  totalRecvFees(request) {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then((data2) => QueryTotalRecvFeesResponse.decode(new _m03.Reader(data2)));
  }
  totalAckFees(request) {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then((data2) => QueryTotalAckFeesResponse.decode(new _m03.Reader(data2)));
  }
  totalTimeoutFees(request) {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then((data2) => QueryTotalTimeoutFeesResponse.decode(new _m03.Reader(data2)));
  }
  payee(request) {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then((data2) => QueryPayeeResponse.decode(new _m03.Reader(data2)));
  }
  counterpartyPayee(request) {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then((data2) => QueryCounterpartyPayeeResponse.decode(new _m03.Reader(data2)));
  }
  feeEnabledChannels(request) {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then((data2) => QueryFeeEnabledChannelsResponse.decode(new _m03.Reader(data2)));
  }
  feeEnabledChannel(request) {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then((data2) => QueryFeeEnabledChannelResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentivizedPackets(request) {
      return queryService.incentivizedPackets(request);
    },
    incentivizedPacket(request) {
      return queryService.incentivizedPacket(request);
    },
    incentivizedPacketsForChannel(request) {
      return queryService.incentivizedPacketsForChannel(request);
    },
    totalRecvFees(request) {
      return queryService.totalRecvFees(request);
    },
    totalAckFees(request) {
      return queryService.totalAckFees(request);
    },
    totalTimeoutFees(request) {
      return queryService.totalTimeoutFees(request);
    },
    payee(request) {
      return queryService.payee(request);
    },
    counterpartyPayee(request) {
      return queryService.counterpartyPayee(request);
    },
    feeEnabledChannels(request) {
      return queryService.feeEnabledChannels(request);
    },
    feeEnabledChannel(request) {
      return queryService.feeEnabledChannel(request);
    }
  };
};

export {
  genesis_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-SDEZEJWK.js.map
