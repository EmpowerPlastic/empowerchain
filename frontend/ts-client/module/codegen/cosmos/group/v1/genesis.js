import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the group module's genesis state. */

function createBaseGenesisState() {
  return {
    groupSeq: Long.UZERO,
    groups: [],
    groupMembers: [],
    groupPolicySeq: Long.UZERO,
    groupPolicies: [],
    proposalSeq: Long.UZERO,
    proposals: [],
    votes: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupPolicySeq.isZero()) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(66).fork()).ldelim();
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
          message.groupSeq = reader.uint64();
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = reader.uint64();
          break;
        case 5:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = reader.uint64();
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$groups, _object$groupMembers, _object$groupPolicies, _object$proposals, _object$votes;
    const message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? Long.fromValue(object.groupSeq) : Long.UZERO;
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map(e => GroupInfo.fromPartial(e))) || [];
    message.groupMembers = ((_object$groupMembers = object.groupMembers) === null || _object$groupMembers === void 0 ? void 0 : _object$groupMembers.map(e => GroupMember.fromPartial(e))) || [];
    message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? Long.fromValue(object.groupPolicySeq) : Long.UZERO;
    message.groupPolicies = ((_object$groupPolicies = object.groupPolicies) === null || _object$groupPolicies === void 0 ? void 0 : _object$groupPolicies.map(e => GroupPolicyInfo.fromPartial(e))) || [];
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? Long.fromValue(object.proposalSeq) : Long.UZERO;
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(e => Proposal.fromPartial(e))) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    return message;
  }
};