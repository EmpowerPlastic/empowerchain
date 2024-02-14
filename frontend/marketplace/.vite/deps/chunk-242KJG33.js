import {
  Deposit,
  DepositParams,
  Params,
  Proposal,
  TallyParams,
  TallyResult,
  Vote,
  VotingParams,
  proposalStatusFromJSON,
  proposalStatusToJSON
} from "./chunk-CFHQPDQ2.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m02 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1/query.js
var query_exports = {};
__export(query_exports, {
  QueryDepositRequest: () => QueryDepositRequest,
  QueryDepositResponse: () => QueryDepositResponse,
  QueryDepositsRequest: () => QueryDepositsRequest,
  QueryDepositsResponse: () => QueryDepositsResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryProposalRequest: () => QueryProposalRequest,
  QueryProposalResponse: () => QueryProposalResponse,
  QueryProposalsRequest: () => QueryProposalsRequest,
  QueryProposalsResponse: () => QueryProposalsResponse,
  QueryTallyResultRequest: () => QueryTallyResultRequest,
  QueryTallyResultResponse: () => QueryTallyResultResponse,
  QueryVoteRequest: () => QueryVoteRequest,
  QueryVoteResponse: () => QueryVoteResponse,
  QueryVotesRequest: () => QueryVotesRequest,
  QueryVotesResponse: () => QueryVotesResponse
});
var _m0 = __toESM(require_minimal());
function createBaseQueryProposalRequest() {
  return {
    proposalId: BigInt("0")
  };
}
var QueryProposalRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: void 0
  };
}
var QueryProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposal !== void 0) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposal !== void 0 && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== void 0 && object.proposal !== null ? Proposal.fromPartial(object.proposal) : void 0;
    return message;
  }
};
function createBaseQueryProposalsRequest() {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: void 0
  };
}
var QueryProposalsRequest = {
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
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      proposalStatus: isSet(object.proposalStatus) ? proposalStatusFromJSON(object.proposalStatus) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalStatus !== void 0 && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== void 0 && (obj.voter = message.voter);
    message.depositor !== void 0 && (obj.depositor = message.depositor);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proposalStatu, _object$voter, _object$depositor;
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = (_object$proposalStatu = object.proposalStatus) !== null && _object$proposalStatu !== void 0 ? _object$proposalStatu : 0;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryProposalsResponse() {
  return {
    proposals: [],
    pagination: void 0
  };
}
var QueryProposalsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : void 0);
    } else {
      obj.proposals = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$proposals;
    const message = createBaseQueryProposalsResponse();
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map((e) => Proposal.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVoteRequest() {
  return {
    proposalId: BigInt("0"),
    voter: ""
  };
}
var QueryVoteRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object) {
    var _object$voter2;
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    return message;
  }
};
function createBaseQueryVoteResponse() {
  return {
    vote: void 0
  };
}
var QueryVoteResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.vote !== void 0) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.vote !== void 0 && (obj.vote = message.vote ? Vote.toJSON(message.vote) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== void 0 && object.vote !== null ? Vote.fromPartial(object.vote) : void 0;
    return message;
  }
};
function createBaseQueryVotesRequest() {
  return {
    proposalId: BigInt("0"),
    pagination: void 0
  };
}
var QueryVotesRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryVotesResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
var QueryVotesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : void 0);
    } else {
      obj.votes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$votes;
    const message = createBaseQueryVotesResponse();
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map((e) => Vote.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryParamsRequest() {
  return {
    paramsType: ""
  };
}
var QueryParamsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      paramsType: isSet(object.paramsType) ? String(object.paramsType) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.paramsType !== void 0 && (obj.paramsType = message.paramsType);
    return obj;
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
    votingParams: void 0,
    depositParams: void 0,
    tallyParams: void 0,
    params: void 0
  };
}
var QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.votingParams !== void 0) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== void 0) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== void 0) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : void 0,
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : void 0,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : void 0,
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.votingParams !== void 0 && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : void 0);
    message.depositParams !== void 0 && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : void 0);
    message.tallyParams !== void 0 && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : void 0);
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== void 0 && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : void 0;
    message.depositParams = object.depositParams !== void 0 && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : void 0;
    message.tallyParams = object.tallyParams !== void 0 && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : void 0;
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseQueryDepositRequest() {
  return {
    proposalId: BigInt("0"),
    depositor: ""
  };
}
var QueryDepositRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.depositor !== void 0 && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object) {
    var _object$depositor2;
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.depositor = (_object$depositor2 = object.depositor) !== null && _object$depositor2 !== void 0 ? _object$depositor2 : "";
    return message;
  }
};
function createBaseQueryDepositResponse() {
  return {
    deposit: void 0
  };
}
var QueryDepositResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deposit !== void 0) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.deposit !== void 0 && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? Deposit.fromPartial(object.deposit) : void 0;
    return message;
  }
};
function createBaseQueryDepositsRequest() {
  return {
    proposalId: BigInt("0"),
    pagination: void 0
  };
}
var QueryDepositsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryDepositsResponse() {
  return {
    deposits: [],
    pagination: void 0
  };
}
var QueryDepositsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.deposits) {
      Deposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map((e) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? Deposit.toJSON(e) : void 0);
    } else {
      obj.deposits = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$deposits;
    const message = createBaseQueryDepositsResponse();
    message.deposits = ((_object$deposits = object.deposits) === null || _object$deposits === void 0 ? void 0 : _object$deposits.map((e) => Deposit.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: BigInt("0")
  };
}
var QueryTallyResultRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: void 0
  };
}
var QueryTallyResultResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.tally !== void 0) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tally !== void 0 && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== void 0 && object.tally !== null ? TallyResult.fromPartial(object.tally) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
    return promise.then((data2) => QueryProposalResponse.decode(new _m02.Reader(data2)));
  }
  proposals(request) {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
    return promise.then((data2) => QueryProposalsResponse.decode(new _m02.Reader(data2)));
  }
  vote(request) {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
    return promise.then((data2) => QueryVoteResponse.decode(new _m02.Reader(data2)));
  }
  votes(request) {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
    return promise.then((data2) => QueryVotesResponse.decode(new _m02.Reader(data2)));
  }
  params(request) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new _m02.Reader(data2)));
  }
  deposit(request) {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
    return promise.then((data2) => QueryDepositResponse.decode(new _m02.Reader(data2)));
  }
  deposits(request) {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
    return promise.then((data2) => QueryDepositsResponse.decode(new _m02.Reader(data2)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
    return promise.then((data2) => QueryTallyResultResponse.decode(new _m02.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request) {
      return queryService.proposal(request);
    },
    proposals(request) {
      return queryService.proposals(request);
    },
    vote(request) {
      return queryService.vote(request);
    },
    votes(request) {
      return queryService.votes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    deposit(request) {
      return queryService.deposit(request);
    },
    deposits(request) {
      return queryService.deposits(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
    }
  };
};

export {
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-242KJG33.js.map
