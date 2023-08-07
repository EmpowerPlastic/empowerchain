import { Params, ParamsSDKType, IDCounters, IDCountersSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditType, CreditTypeSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the plasticcredit module's genesis state. */
export interface GenesisState {
  params?: Params;
  idCounters?: IDCounters;
  issuers: Issuer[];
  applicants: Applicant[];
  creditTypes: CreditType[];
  projects: Project[];
  creditCollections: CreditCollection[];
  creditBalances: CreditBalance[];
}
/** GenesisState defines the plasticcredit module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  id_counters?: IDCountersSDKType;
  issuers: IssuerSDKType[];
  applicants: ApplicantSDKType[];
  credit_types: CreditTypeSDKType[];
  projects: ProjectSDKType[];
  credit_collections: CreditCollectionSDKType[];
  credit_balances: CreditBalanceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    idCounters: undefined,
    issuers: [],
    applicants: [],
    creditTypes: [],
    projects: [],
    creditCollections: [],
    creditBalances: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.idCounters !== undefined) {
      IDCounters.encode(message.idCounters, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.applicants) {
      Applicant.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.creditCollections) {
      CreditCollection.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.creditBalances) {
      CreditBalance.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.idCounters = IDCounters.decode(reader, reader.uint32());
          break;
        case 3:
          message.issuers.push(Issuer.decode(reader, reader.uint32()));
          break;
        case 4:
          message.applicants.push(Applicant.decode(reader, reader.uint32()));
          break;
        case 5:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;
        case 6:
          message.projects.push(Project.decode(reader, reader.uint32()));
          break;
        case 7:
          message.creditCollections.push(CreditCollection.decode(reader, reader.uint32()));
          break;
        case 8:
          message.creditBalances.push(CreditBalance.decode(reader, reader.uint32()));
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
      idCounters: isSet(object.idCounters) ? IDCounters.fromJSON(object.idCounters) : undefined,
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : [],
      applicants: Array.isArray(object?.applicants) ? object.applicants.map((e: any) => Applicant.fromJSON(e)) : [],
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : [],
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => Project.fromJSON(e)) : [],
      creditCollections: Array.isArray(object?.creditCollections) ? object.creditCollections.map((e: any) => CreditCollection.fromJSON(e)) : [],
      creditBalances: Array.isArray(object?.creditBalances) ? object.creditBalances.map((e: any) => CreditBalance.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.idCounters !== undefined && (obj.idCounters = message.idCounters ? IDCounters.toJSON(message.idCounters) : undefined);
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e ? Issuer.toJSON(e) : undefined);
    } else {
      obj.issuers = [];
    }
    if (message.applicants) {
      obj.applicants = message.applicants.map(e => e ? Applicant.toJSON(e) : undefined);
    } else {
      obj.applicants = [];
    }
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? Project.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }
    if (message.creditCollections) {
      obj.creditCollections = message.creditCollections.map(e => e ? CreditCollection.toJSON(e) : undefined);
    } else {
      obj.creditCollections = [];
    }
    if (message.creditBalances) {
      obj.creditBalances = message.creditBalances.map(e => e ? CreditBalance.toJSON(e) : undefined);
    } else {
      obj.creditBalances = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.idCounters = object.idCounters !== undefined && object.idCounters !== null ? IDCounters.fromPartial(object.idCounters) : undefined;
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    message.applicants = object.applicants?.map(e => Applicant.fromPartial(e)) || [];
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.creditCollections = object.creditCollections?.map(e => CreditCollection.fromPartial(e)) || [];
    message.creditBalances = object.creditBalances?.map(e => CreditBalance.fromPartial(e)) || [];
    return message;
  }
};