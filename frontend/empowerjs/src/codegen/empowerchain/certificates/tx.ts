import { Params, ParamsSDKType, CertificateType, AdditionalData, AdditionalDataSDKType, certificateTypeFromJSON, certificateTypeToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
export interface MsgUpdateParams {
  authority: string;
  /**
   * params defines the x/certificates parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgCreateCertificate {
  issuer: string;
  type: CertificateType;
  owner: string;
  additionalData: AdditionalData[];
}
export interface MsgCreateCertificateSDKType {
  issuer: string;
  type: CertificateType;
  owner: string;
  additional_data: AdditionalDataSDKType[];
}
export interface MsgCreateCertificateResponse {
  certificateId: bigint;
}
export interface MsgCreateCertificateResponseSDKType {
  certificate_id: bigint;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    issuer: "",
    type: 0,
    owner: "",
    additionalData: []
  };
}
export const MsgCreateCertificate = {
  encode(message: MsgCreateCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    for (const v of message.additionalData) {
      AdditionalData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.additionalData.push(AdditionalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateCertificate {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      type: isSet(object.type) ? certificateTypeFromJSON(object.type) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      additionalData: Array.isArray(object?.additionalData) ? object.additionalData.map((e: any) => AdditionalData.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.type !== undefined && (obj.type = certificateTypeToJSON(message.type));
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.additionalData) {
      obj.additionalData = message.additionalData.map(e => e ? AdditionalData.toJSON(e) : undefined);
    } else {
      obj.additionalData = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.issuer = object.issuer ?? "";
    message.type = object.type ?? 0;
    message.owner = object.owner ?? "";
    message.additionalData = object.additionalData?.map(e => AdditionalData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {
    certificateId: BigInt("0")
  };
}
export const MsgCreateCertificateResponse = {
  encode(message: MsgCreateCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.certificateId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateCertificateResponse {
    return {
      certificateId: isSet(object.certificateId) ? BigInt(object.certificateId.toString()) : BigInt("0")
    };
  },
  toJSON(message: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    message.certificateId !== undefined && (obj.certificateId = (message.certificateId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    message.certificateId = object.certificateId !== undefined && object.certificateId !== null ? BigInt(object.certificateId.toString()) : BigInt("0");
    return message;
  }
};