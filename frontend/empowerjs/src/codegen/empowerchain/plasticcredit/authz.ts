import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
export interface TransferAuthorization {
  denom: string;
  maxCredits: bigint;
}
export interface TransferAuthorizationSDKType {
  denom: string;
  max_credits: bigint;
}
function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    denom: "",
    maxCredits: BigInt("0")
  };
}
export const TransferAuthorization = {
  encode(message: TransferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.maxCredits !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.maxCredits.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.maxCredits = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferAuthorization {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      maxCredits: isSet(object.maxCredits) ? BigInt(object.maxCredits.toString()) : BigInt("0")
    };
  },
  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.maxCredits !== undefined && (obj.maxCredits = (message.maxCredits || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.denom = object.denom ?? "";
    message.maxCredits = object.maxCredits !== undefined && object.maxCredits !== null ? BigInt(object.maxCredits.toString()) : BigInt("0");
    return message;
  }
};