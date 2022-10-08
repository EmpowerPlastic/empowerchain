/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import {
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Proposal,
  Vote,
} from "../../../cosmos/group/v1/types";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: number;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  groupPolicySeq: number;
  /** group_policies is the list of group policies info. */
  groupPolicies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: number;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}

const baseGenesisState: object = {
  groupSeq: 0,
  groupPolicySeq: 0,
  proposalSeq: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.groupSeq !== 0) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupPolicySeq !== 0) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposalSeq !== 0) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(
            GroupMember.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.groupPolicySeq = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.groupPolicies.push(
            GroupPolicyInfo.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.proposalSeq = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = Number(object.groupSeq);
    } else {
      message.groupSeq = 0;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromJSON(e));
      }
    }
    if (object.groupPolicySeq !== undefined && object.groupPolicySeq !== null) {
      message.groupPolicySeq = Number(object.groupPolicySeq);
    } else {
      message.groupPolicySeq = 0;
    }
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromJSON(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = Number(object.proposalSeq);
    } else {
      message.proposalSeq = 0;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined && (obj.groupSeq = message.groupSeq);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map((e) =>
        e ? GroupMember.toJSON(e) : undefined
      );
    } else {
      obj.groupMembers = [];
    }
    message.groupPolicySeq !== undefined &&
      (obj.groupPolicySeq = message.groupPolicySeq);
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) =>
        e ? GroupPolicyInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupPolicies = [];
    }
    message.proposalSeq !== undefined &&
      (obj.proposalSeq = message.proposalSeq);
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupPolicies = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = object.groupSeq;
    } else {
      message.groupSeq = 0;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromPartial(e));
      }
    }
    if (object.groupPolicySeq !== undefined && object.groupPolicySeq !== null) {
      message.groupPolicySeq = object.groupPolicySeq;
    } else {
      message.groupPolicySeq = 0;
    }
    if (object.groupPolicies !== undefined && object.groupPolicies !== null) {
      for (const e of object.groupPolicies) {
        message.groupPolicies.push(GroupPolicyInfo.fromPartial(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = object.proposalSeq;
    } else {
      message.proposalSeq = 0;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
