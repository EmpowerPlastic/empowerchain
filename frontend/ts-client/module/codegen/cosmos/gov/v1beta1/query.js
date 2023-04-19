import { Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

function createBaseQueryProposalRequest() {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryProposalRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
function createBaseQueryProposalsRequest() {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$proposalStatu, _object$voter, _object$depositor;
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = (_object$proposalStatu = object.proposalStatus) !== null && _object$proposalStatu !== void 0 ? _object$proposalStatu : 0;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryProposalsResponse() {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$proposals;
    const message = createBaseQueryProposalsResponse();
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(e => Proposal.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVoteRequest() {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}
export const QueryVoteRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$voter2;
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    return message;
  }
};
function createBaseQueryVoteResponse() {
  return {
    vote: undefined
  };
}
export const QueryVoteResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }
};
function createBaseQueryVotesRequest() {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryVotesResponse() {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$votes;
    const message = createBaseQueryVotesResponse();
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {
    paramsType: ""
  };
}
export const QueryParamsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$paramsType;
    const message = createBaseQueryParamsRequest();
    message.paramsType = (_object$paramsType = object.paramsType) !== null && _object$paramsType !== void 0 ? _object$paramsType : "";
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  }
};
function createBaseQueryDepositRequest() {
  return {
    proposalId: Long.UZERO,
    depositor: ""
  };
}
export const QueryDepositRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$depositor2;
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = (_object$depositor2 = object.depositor) !== null && _object$depositor2 !== void 0 ? _object$depositor2 : "";
    return message;
  }
};
function createBaseQueryDepositResponse() {
  return {
    deposit: undefined
  };
}
export const QueryDepositResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  }
};
function createBaseQueryDepositsRequest() {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDepositsResponse() {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.deposits) {
      Deposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$deposits;
    const message = createBaseQueryDepositsResponse();
    message.deposits = ((_object$deposits = object.deposits) === null || _object$deposits === void 0 ? void 0 : _object$deposits.map(e => Deposit.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: Long.UZERO
  };
}
export const QueryTallyResultRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  }
};