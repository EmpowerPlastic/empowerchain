import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** EventCreateProof is an event emitted when a new proof has been created */
export interface EventCreateProof {
  hash: string;
  creator: string;
}
/** EventCreateProof is an event emitted when a new proof has been created */
export interface EventCreateProofSDKType {
  hash: string;
  creator: string;
}
function createBaseEventCreateProof(): EventCreateProof {
  return {
    hash: "",
    creator: ""
  };
}
export const EventCreateProof = {
  encode(message: EventCreateProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateProof {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: EventCreateProof): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<EventCreateProof>): EventCreateProof {
    const message = createBaseEventCreateProof();
    message.hash = object.hash ?? "";
    message.creator = object.creator ?? "";
    return message;
  }
};