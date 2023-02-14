import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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

  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.denom = object.denom ?? "";
    message.maxCredits = object.maxCredits !== undefined && object.maxCredits !== null ? Long.fromValue(object.maxCredits) : Long.UZERO;
    return message;
  }

};