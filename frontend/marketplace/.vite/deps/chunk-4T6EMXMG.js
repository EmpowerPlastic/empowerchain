import {
  WeightedVoteOption,
  voteOptionFromJSON,
  voteOptionToJSON
} from "./chunk-B3OJ4FZV.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgDeposit: () => MsgDeposit,
  MsgDepositResponse: () => MsgDepositResponse,
  MsgSubmitProposal: () => MsgSubmitProposal,
  MsgSubmitProposalResponse: () => MsgSubmitProposalResponse,
  MsgVote: () => MsgVote,
  MsgVoteResponse: () => MsgVoteResponse,
  MsgVoteWeighted: () => MsgVoteWeighted,
  MsgVoteWeightedResponse: () => MsgVoteWeightedResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgSubmitProposal() {
  return {
    content: void 0,
    initialDeposit: [],
    proposer: ""
  };
}
var MsgSubmitProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.content !== void 0) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
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
      content: isSet(object.content) ? Any.fromJSON(object.content) : void 0,
      initialDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.initialDeposit) ? object.initialDeposit.map((e) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.content !== void 0 && (obj.content = message.content ? Any.toJSON(message.content) : void 0);
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== void 0 && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial(object) {
    var _object$initialDeposi, _object$proposer;
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== void 0 && object.content !== null ? Any.fromPartial(object.content) : void 0;
    message.initialDeposit = ((_object$initialDeposi = object.initialDeposit) === null || _object$initialDeposi === void 0 ? void 0 : _object$initialDeposi.map((e) => Coin.fromPartial(e))) || [];
    message.proposer = (_object$proposer = object.proposer) !== null && _object$proposer !== void 0 ? _object$proposer : "";
    return message;
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt("0")
  };
}
var MsgSubmitProposalResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt("0"),
    voter: "",
    option: 0
  };
}
var MsgVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
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
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    message.option !== void 0 && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
  fromPartial(object) {
    var _object$voter, _object$option;
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    return message;
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
var MsgVoteResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgVoteResponse();
    return message;
  }
};
function createBaseMsgVoteWeighted() {
  return {
    proposalId: BigInt("0"),
    voter: "",
    options: []
  };
}
var MsgVoteWeighted = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
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
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== void 0 && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toJSON(e) : void 0);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$voter2, _object$options;
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map((e) => WeightedVoteOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgVoteWeightedResponse() {
  return {};
}
var MsgVoteWeightedResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  }
};
function createBaseMsgDeposit() {
  return {
    proposalId: BigInt("0"),
    depositor: "",
    amount: []
  };
}
var MsgDeposit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.proposalId.toString()));
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== void 0 && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.depositor !== void 0 && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$depositor, _object$amount;
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgDepositResponse() {
  return {};
}
var MsgDepositResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgDepositResponse();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/gov/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
  }
  submitProposal(request) {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
    return promise.then((data2) => MsgSubmitProposalResponse.decode(new _m02.Reader(data2)));
  }
  vote(request) {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
    return promise.then((data2) => MsgVoteResponse.decode(new _m02.Reader(data2)));
  }
  voteWeighted(request) {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
    return promise.then((data2) => MsgVoteWeightedResponse.decode(new _m02.Reader(data2)));
  }
  deposit(request) {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
    return promise.then((data2) => MsgDepositResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
  MsgDeposit,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-4T6EMXMG.js.map
