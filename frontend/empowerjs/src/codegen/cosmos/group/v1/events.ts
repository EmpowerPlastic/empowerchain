import { ProposalExecutorResult, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
  group_id: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
  group_id: bigint;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
  address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
  proposal_id: bigint;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
  proposal_id: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
  proposal_id: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
  proposal_id: bigint;
  result: ProposalExecutorResult;
  logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** address is the account address of the group member. */
  address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
  group_id: bigint;
  address: string;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt("0")
  };
}
export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.groupId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateGroup {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0")
    };
  },
  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt("0")
  };
}
export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.groupId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroup {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0")
    };
  },
  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: ""
  };
}
export const EventCreateGroupPolicy = {
  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
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
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: ""
  };
}
export const EventUpdateGroupPolicy = {
  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
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
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: BigInt("0")
  };
}
export const EventSubmitProposal = {
  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSubmitProposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: BigInt("0")
  };
}
export const EventWithdrawProposal = {
  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt("0")
  };
}
export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt("0"),
    result: 0,
    logs: ""
  };
}
export const EventExec = {
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.result = (reader.int32() as any);
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
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0,
      logs: isSet(object.logs) ? String(object.logs) : ""
    };
  },
  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },
  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  }
};
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: BigInt("0"),
    address: ""
  };
}
export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.groupId.toString()));
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = BigInt(reader.uint64().toString());
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
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt("0"),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt("0")).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt("0");
    message.address = object.address ?? "";
    return message;
  }
};