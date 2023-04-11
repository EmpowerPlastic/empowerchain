import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
export interface TransferAuthorization {
  denom: string;
  maxCredits: Long;
}
export interface TransferAuthorizationSDKType {
  denom: string;
  max_credits: Long;
}

function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    denom: "",
    maxCredits: Long.UZERO
  };
}

export const TransferAuthorization = {
  encode(message: TransferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (!message.maxCredits.isZero()) {
      writer.uint32(16).uint64(message.maxCredits);
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
          message.maxCredits = (reader.uint64() as Long);
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
      maxCredits: isSet(object.maxCredits) ? Long.fromValue(object.maxCredits) : Long.UZERO
    };
  },

  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.maxCredits !== undefined && (obj.maxCredits = (message.maxCredits || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.denom = object.denom ?? "";
    message.maxCredits = object.maxCredits !== undefined && object.maxCredits !== null ? Long.fromValue(object.maxCredits) : Long.UZERO;
    return message;
  }

};