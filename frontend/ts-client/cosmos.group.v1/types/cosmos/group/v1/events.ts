/* eslint-disable */
import {
  ProposalExecutorResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
} from "../../../cosmos/group/v1/types";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.group.v1";

/** Since: cosmos-sdk 0.46 */

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: number;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: number;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: number;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: number;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: number;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: number;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: number;
  /** address is the account address of the group member. */
  address: string;
}

const baseEventCreateGroup: object = { groupId: 0 };

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: Writer = Writer.create()): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    return message;
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = { ...baseEventCreateGroup } as EventCreateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    return message;
  },
};

const baseEventUpdateGroup: object = { groupId: 0 };

export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: Writer = Writer.create()): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    return message;
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    return message;
  },
};

const baseEventCreateGroupPolicy: object = { address: "" };

export const EventCreateGroupPolicy = {
  encode(
    message: EventCreateGroupPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventCreateGroupPolicy>
  ): EventCreateGroupPolicy {
    const message = { ...baseEventCreateGroupPolicy } as EventCreateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseEventUpdateGroupPolicy: object = { address: "" };

export const EventUpdateGroupPolicy = {
  encode(
    message: EventUpdateGroupPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventUpdateGroupPolicy>
  ): EventUpdateGroupPolicy {
    const message = { ...baseEventUpdateGroupPolicy } as EventUpdateGroupPolicy;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseEventSubmitProposal: object = { proposalId: 0 };

export const EventSubmitProposal = {
  encode(
    message: EventSubmitProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = { ...baseEventSubmitProposal } as EventSubmitProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseEventWithdrawProposal: object = { proposalId: 0 };

export const EventWithdrawProposal = {
  encode(
    message: EventWithdrawProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventWithdrawProposal>
  ): EventWithdrawProposal {
    const message = { ...baseEventWithdrawProposal } as EventWithdrawProposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseEventVote: object = { proposalId: 0 };

export const EventVote = {
  encode(message: EventVote, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventVote } as EventVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    const message = { ...baseEventVote } as EventVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    return message;
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = { ...baseEventVote } as EventVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    return message;
  },
};

const baseEventExec: object = { proposalId: 0, result: 0, logs: "" };

export const EventExec = {
  encode(message: EventExec, writer: Writer = Writer.create()): Writer {
    if (message.proposalId !== 0) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExec } as EventExec;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    const message = { ...baseEventExec } as EventExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Number(object.proposalId);
    } else {
      message.proposalId = 0;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = proposalExecutorResultFromJSON(object.result);
    } else {
      message.result = 0;
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = String(object.logs);
    } else {
      message.logs = "";
    }
    return message;
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = { ...baseEventExec } as EventExec;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = 0;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = object.logs;
    } else {
      message.logs = "";
    }
    return message;
  },
};

const baseEventLeaveGroup: object = { groupId: 0, address: "" };

export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: Writer = Writer.create()): Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLeaveGroup {
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Number(object.groupId);
    } else {
      message.groupId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    const message = { ...baseEventLeaveGroup } as EventLeaveGroup;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId;
    } else {
      message.groupId = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
