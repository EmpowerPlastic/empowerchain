import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** OrderBy defines the sorting order */

export let OrderBy;
/** OrderBy defines the sorting order */
(function (OrderBy) {
  OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (OrderBy = {}));
export let OrderBySDKType;
(function (OrderBySDKType) {
  OrderBySDKType[OrderBySDKType["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBySDKType[OrderBySDKType["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBySDKType[OrderBySDKType["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBySDKType[OrderBySDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBySDKType || (OrderBySDKType = {}));
export function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */

export let BroadcastMode;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
(function (BroadcastMode) {
  BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (BroadcastMode = {}));
export let BroadcastModeSDKType;
(function (BroadcastModeSDKType) {
  BroadcastModeSDKType[BroadcastModeSDKType["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastModeSDKType[BroadcastModeSDKType["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastModeSDKType[BroadcastModeSDKType["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastModeSDKType[BroadcastModeSDKType["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastModeSDKType[BroadcastModeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastModeSDKType || (BroadcastModeSDKType = {}));
export function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0,
    page: Long.UZERO,
    limit: Long.UZERO
  };
}
export const GetTxsEventRequest = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (!message.page.isZero()) {
      writer.uint32(32).uint64(message.page);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
          break;
        case 4:
          message.page = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$events, _object$orderBy;
    const message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(e => e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderBy = (_object$orderBy = object.orderBy) !== null && _object$orderBy !== void 0 ? _object$orderBy : 0;
    message.page = object.page !== undefined && object.page !== null ? Long.fromValue(object.page) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }
};
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined,
    total: Long.UZERO
  };
}
export const GetTxsEventResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total.isZero()) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txs, _object$txResponses;
    const message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => Tx.fromPartial(e))) || [];
    message.txResponses = ((_object$txResponses = object.txResponses) === null || _object$txResponses === void 0 ? void 0 : _object$txResponses.map(e => TxResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }
};
function createBaseBroadcastTxRequest() {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txBytes, _object$mode;
    const message = createBaseBroadcastTxRequest();
    message.txBytes = (_object$txBytes = object.txBytes) !== null && _object$txBytes !== void 0 ? _object$txBytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseBroadcastTxResponse() {
  return {
    txResponse: undefined
  };
}
export const BroadcastTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
function createBaseSimulateRequest() {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txBytes2;
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txBytes = (_object$txBytes2 = object.txBytes) !== null && _object$txBytes2 !== void 0 ? _object$txBytes2 : new Uint8Array();
    return message;
  }
};
function createBaseSimulateResponse() {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
export const SimulateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseGetTxResponse() {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
export const GetTxResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsRequest() {
  return {
    height: Long.ZERO,
    pagination: undefined
  };
}
export const GetBlockWithTxsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
export const GetBlockWithTxsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txs2;
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(e => Tx.fromPartial(e))) || [];
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseTxDecodeRequest() {
  return {
    txBytes: new Uint8Array()
  };
}
export const TxDecodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txBytes3;
    const message = createBaseTxDecodeRequest();
    message.txBytes = (_object$txBytes3 = object.txBytes) !== null && _object$txBytes3 !== void 0 ? _object$txBytes3 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeResponse() {
  return {
    tx: undefined
  };
}
export const TxDecodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxEncodeRequest() {
  return {
    tx: undefined
  };
}
export const TxEncodeRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxEncodeResponse() {
  return {
    txBytes: new Uint8Array()
  };
}
export const TxEncodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$txBytes4;
    const message = createBaseTxEncodeResponse();
    message.txBytes = (_object$txBytes4 = object.txBytes) !== null && _object$txBytes4 !== void 0 ? _object$txBytes4 : new Uint8Array();
    return message;
  }
};
function createBaseTxEncodeAminoRequest() {
  return {
    aminoJson: ""
  };
}
export const TxEncodeAminoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$aminoJson;
    const message = createBaseTxEncodeAminoRequest();
    message.aminoJson = (_object$aminoJson = object.aminoJson) !== null && _object$aminoJson !== void 0 ? _object$aminoJson : "";
    return message;
  }
};
function createBaseTxEncodeAminoResponse() {
  return {
    aminoBinary: new Uint8Array()
  };
}
export const TxEncodeAminoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$aminoBinary;
    const message = createBaseTxEncodeAminoResponse();
    message.aminoBinary = (_object$aminoBinary = object.aminoBinary) !== null && _object$aminoBinary !== void 0 ? _object$aminoBinary : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoRequest() {
  return {
    aminoBinary: new Uint8Array()
  };
}
export const TxDecodeAminoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$aminoBinary2;
    const message = createBaseTxDecodeAminoRequest();
    message.aminoBinary = (_object$aminoBinary2 = object.aminoBinary) !== null && _object$aminoBinary2 !== void 0 ? _object$aminoBinary2 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoResponse() {
  return {
    aminoJson: ""
  };
}
export const TxDecodeAminoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$aminoJson2;
    const message = createBaseTxDecodeAminoResponse();
    message.aminoJson = (_object$aminoJson2 = object.aminoJson) !== null && _object$aminoJson2 !== void 0 ? _object$aminoJson2 : "";
    return message;
  }
};