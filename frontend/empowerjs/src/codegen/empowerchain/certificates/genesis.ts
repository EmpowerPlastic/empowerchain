import { Params, ParamsSDKType, Certificate, CertificateSDKType, IDCounters, IDCountersSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the certificates module's genesis state. */
export interface GenesisState {
  params?: Params;
  certificates: Certificate[];
  idCounters?: IDCounters;
}
/** GenesisState defines the certificates module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  certificates: CertificateSDKType[];
  id_counters?: IDCountersSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    certificates: [],
    idCounters: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.certificates) {
      Certificate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.idCounters !== undefined) {
      IDCounters.encode(message.idCounters, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.certificates.push(Certificate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.idCounters = IDCounters.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => Certificate.fromJSON(e)) : [],
      idCounters: isSet(object.idCounters) ? IDCounters.fromJSON(object.idCounters) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? Certificate.toJSON(e) : undefined);
    } else {
      obj.certificates = [];
    }
    message.idCounters !== undefined && (obj.idCounters = message.idCounters ? IDCounters.toJSON(message.idCounters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.certificates = object.certificates?.map(e => Certificate.fromPartial(e)) || [];
    message.idCounters = object.idCounters !== undefined && object.idCounters !== null ? IDCounters.fromPartial(object.idCounters) : undefined;
    return message;
  }
};