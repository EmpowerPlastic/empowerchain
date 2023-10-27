import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: bigint;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
  channel: string;
  timeout_height: bigint;
  timeout_timestamp: bigint;
  data: Uint8Array;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponse {
  /** Sequence number of the IBC packet sent */
  sequence: bigint;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponseSDKType {
  sequence: bigint;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
  channel: string;
}
function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeoutHeight: BigInt("0"),
    timeoutTimestamp: BigInt("0"),
    data: new Uint8Array()
  };
}
export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(32).uint64(Long.fromString(message.timeoutHeight.toString()));
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(40).uint64(Long.fromString(message.timeoutTimestamp.toString()));
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeoutHeight = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.timeoutTimestamp = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? BigInt(object.timeoutHeight.toString()) : BigInt("0"),
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0"),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || BigInt("0")).toString());
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt("0")).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<MsgIBCSend>): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt("0");
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0");
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseMsgIBCSendResponse(): MsgIBCSendResponse {
  return {
    sequence: BigInt("0")
  };
}
export const MsgIBCSendResponse = {
  encode(message: MsgIBCSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCSendResponse {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message: MsgIBCSendResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIBCSendResponse>): MsgIBCSendResponse {
    const message = createBaseMsgIBCSendResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: ""
  };
}
export const MsgIBCCloseChannel = {
  encode(message: MsgIBCCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCCloseChannel {
    return {
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial(object: Partial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  }
};