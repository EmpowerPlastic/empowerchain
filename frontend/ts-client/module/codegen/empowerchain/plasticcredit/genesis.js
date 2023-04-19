import { Params, IDCounters, Issuer, Applicant, CreditClass, Project, CreditCollection, CreditBalance } from "./types";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    params: undefined,
    idCounters: undefined,
    issuers: [],
    applicants: [],
    creditClasses: [],
    projects: [],
    creditCollections: [],
    creditBalances: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.idCounters !== undefined) {
      IDCounters.encode(message.idCounters, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.issuers) {
      Issuer.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.applicants) {
      Applicant.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.creditClasses) {
      CreditClass.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.projects) {
      Project.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.creditCollections) {
      CreditCollection.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.creditBalances) {
      CreditBalance.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
          message.creditClasses.push(CreditClass.decode(reader, reader.uint32()));
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
  fromPartial(object) {
    var _object$issuers, _object$applicants, _object$creditClasses, _object$projects, _object$creditCollect, _object$creditBalance;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.idCounters = object.idCounters !== undefined && object.idCounters !== null ? IDCounters.fromPartial(object.idCounters) : undefined;
    message.issuers = ((_object$issuers = object.issuers) === null || _object$issuers === void 0 ? void 0 : _object$issuers.map(e => Issuer.fromPartial(e))) || [];
    message.applicants = ((_object$applicants = object.applicants) === null || _object$applicants === void 0 ? void 0 : _object$applicants.map(e => Applicant.fromPartial(e))) || [];
    message.creditClasses = ((_object$creditClasses = object.creditClasses) === null || _object$creditClasses === void 0 ? void 0 : _object$creditClasses.map(e => CreditClass.fromPartial(e))) || [];
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(e => Project.fromPartial(e))) || [];
    message.creditCollections = ((_object$creditCollect = object.creditCollections) === null || _object$creditCollect === void 0 ? void 0 : _object$creditCollect.map(e => CreditCollection.fromPartial(e))) || [];
    message.creditBalances = ((_object$creditBalance = object.creditBalances) === null || _object$creditBalance === void 0 ? void 0 : _object$creditBalance.map(e => CreditBalance.fromPartial(e))) || [];
    return message;
  }
};