import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../helpers";
export enum CertificateType {
  CREDIT_RETIREMENT = 0,
  UNRECOGNIZED = -1,
}
export const CertificateTypeSDKType = CertificateType;
export function certificateTypeFromJSON(object: any): CertificateType {
  switch (object) {
    case 0:
    case "CREDIT_RETIREMENT":
      return CertificateType.CREDIT_RETIREMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateType.UNRECOGNIZED;
  }
}
export function certificateTypeToJSON(object: CertificateType): string {
  switch (object) {
    case CertificateType.CREDIT_RETIREMENT:
      return "CREDIT_RETIREMENT";
    case CertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the module. */
export interface Params {
  allowedIssuers: string[];
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  allowed_issuers: string[];
}
export interface Certificate {
  id: bigint;
  type: CertificateType;
  owner: string;
  issuer: string;
  additionalData: AdditionalData[];
}
export interface CertificateSDKType {
  id: bigint;
  type: CertificateType;
  owner: string;
  issuer: string;
  additional_data: AdditionalDataSDKType[];
}
export interface AdditionalData {
  key: string;
  value: string;
}
export interface AdditionalDataSDKType {
  key: string;
  value: string;
}
export interface IDCounters {
  nextCertificateId: bigint;
}
export interface IDCountersSDKType {
  next_certificate_id: bigint;
}
function createBaseParams(): Params {
  return {
    allowedIssuers: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedIssuers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedIssuers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      allowedIssuers: Array.isArray(object?.allowedIssuers) ? object.allowedIssuers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.allowedIssuers) {
      obj.allowedIssuers = message.allowedIssuers.map(e => e);
    } else {
      obj.allowedIssuers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedIssuers = object.allowedIssuers?.map(e => e) || [];
    return message;
  }
};
function createBaseCertificate(): Certificate {
  return {
    id: BigInt("0"),
    type: 0,
    owner: "",
    issuer: "",
    additionalData: []
  };
}
export const Certificate = {
  encode(message: Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.id.toString()));
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    for (const v of message.additionalData) {
      AdditionalData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
          message.additionalData.push(AdditionalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Certificate {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      type: isSet(object.type) ? certificateTypeFromJSON(object.type) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      additionalData: Array.isArray(object?.additionalData) ? object.additionalData.map((e: any) => AdditionalData.fromJSON(e)) : []
    };
  },
  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt("0")).toString());
    message.type !== undefined && (obj.type = certificateTypeToJSON(message.type));
    message.owner !== undefined && (obj.owner = message.owner);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.additionalData) {
      obj.additionalData = message.additionalData.map(e => e ? AdditionalData.toJSON(e) : undefined);
    } else {
      obj.additionalData = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.type = object.type ?? 0;
    message.owner = object.owner ?? "";
    message.issuer = object.issuer ?? "";
    message.additionalData = object.additionalData?.map(e => AdditionalData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAdditionalData(): AdditionalData {
  return {
    key: "",
    value: ""
  };
}
export const AdditionalData = {
  encode(message: AdditionalData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AdditionalData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdditionalData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AdditionalData {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: AdditionalData): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<AdditionalData>): AdditionalData {
    const message = createBaseAdditionalData();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseIDCounters(): IDCounters {
  return {
    nextCertificateId: BigInt("0")
  };
}
export const IDCounters = {
  encode(message: IDCounters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextCertificateId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.nextCertificateId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IDCounters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextCertificateId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IDCounters {
    return {
      nextCertificateId: isSet(object.nextCertificateId) ? BigInt(object.nextCertificateId.toString()) : BigInt("0")
    };
  },
  toJSON(message: IDCounters): unknown {
    const obj: any = {};
    message.nextCertificateId !== undefined && (obj.nextCertificateId = (message.nextCertificateId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<IDCounters>): IDCounters {
    const message = createBaseIDCounters();
    message.nextCertificateId = object.nextCertificateId !== undefined && object.nextCertificateId !== null ? BigInt(object.nextCertificateId.toString()) : BigInt("0");
    return message;
  }
};