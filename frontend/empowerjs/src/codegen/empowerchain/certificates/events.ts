import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
/** EventCreateCertificate is an event emitted when a new certificate is created */
export interface EventCreateCertificate {
  certificateId: bigint;
  issuer: string;
  owner: string;
  certificateType: string;
  additionalData: string;
}
/** EventCreateCertificate is an event emitted when a new certificate is created */
export interface EventCreateCertificateSDKType {
  certificate_id: bigint;
  issuer: string;
  owner: string;
  certificate_type: string;
  additional_data: string;
}
function createBaseEventCreateCertificate(): EventCreateCertificate {
  return {
    certificateId: BigInt("0"),
    issuer: "",
    owner: "",
    certificateType: "",
    additionalData: ""
  };
}
export const EventCreateCertificate = {
  encode(message: EventCreateCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.certificateId.toString()));
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.certificateType !== "") {
      writer.uint32(34).string(message.certificateType);
    }
    if (message.additionalData !== "") {
      writer.uint32(42).string(message.additionalData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.certificateType = reader.string();
          break;
        case 5:
          message.additionalData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateCertificate {
    return {
      certificateId: isSet(object.certificateId) ? BigInt(object.certificateId.toString()) : BigInt("0"),
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      certificateType: isSet(object.certificateType) ? String(object.certificateType) : "",
      additionalData: isSet(object.additionalData) ? String(object.additionalData) : ""
    };
  },
  toJSON(message: EventCreateCertificate): unknown {
    const obj: any = {};
    message.certificateId !== undefined && (obj.certificateId = (message.certificateId || BigInt("0")).toString());
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.owner !== undefined && (obj.owner = message.owner);
    message.certificateType !== undefined && (obj.certificateType = message.certificateType);
    message.additionalData !== undefined && (obj.additionalData = message.additionalData);
    return obj;
  },
  fromPartial(object: Partial<EventCreateCertificate>): EventCreateCertificate {
    const message = createBaseEventCreateCertificate();
    message.certificateId = object.certificateId !== undefined && object.certificateId !== null ? BigInt(object.certificateId.toString()) : BigInt("0");
    message.issuer = object.issuer ?? "";
    message.owner = object.owner ?? "";
    message.certificateType = object.certificateType ?? "";
    message.additionalData = object.additionalData ?? "";
    return message;
  }
};