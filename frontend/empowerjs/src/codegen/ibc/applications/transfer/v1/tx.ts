import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../../helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** the tokens to be transferred */
  token?: Coin;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight?: Height;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
  /** optional memo */
  memo: string;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
  source_port: string;
  source_channel: string;
  token?: CoinSDKType;
  sender: string;
  receiver: string;
  timeout_height?: HeightSDKType;
  timeout_timestamp: bigint;
  memo: string;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
  /** sequence number of the transfer packet sent */
  sequence: bigint;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
  sequence: bigint;
}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: undefined,
    sender: "",
    receiver: "",
    timeoutHeight: undefined,
    timeoutTimestamp: BigInt("0"),
    memo: ""
  };
}
export const MsgTransfer = {
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(56).uint64(Long.fromString(message.timeoutTimestamp.toString()));
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = BigInt(reader.uint64().toString());
          break;
        case 8:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransfer {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0"),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },
  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt("0")).toString());
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },
  fromPartial(object: Partial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt("0");
    message.memo = object.memo ?? "";
    return message;
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {
    sequence: BigInt("0")
  };
}
export const MsgTransferResponse = {
  encode(message: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
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
  fromJSON(object: any): MsgTransferResponse {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message: MsgTransferResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};