import {
  Timestamp
} from "./chunk-NOD7AVEV.js";
import {
  base64FromBytes,
  bytesFromBase64,
  fromJsonTimestamp,
  fromTimestamp,
  import_long,
  isSet,
  require_minimal,
  toTimestamp
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/crypto/proof.js
var proof_exports = {};
__export(proof_exports, {
  DominoOp: () => DominoOp,
  Proof: () => Proof,
  ProofOp: () => ProofOp,
  ProofOps: () => ProofOps,
  ValueOp: () => ValueOp
});
var _m0 = __toESM(require_minimal());
function createBaseProof() {
  return {
    total: BigInt("0"),
    index: BigInt("0"),
    leafHash: new Uint8Array(),
    aunts: []
  };
}
var Proof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.total.toString()));
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.index.toString()));
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = BigInt(reader.int64().toString());
          break;
        case 2:
          message.index = BigInt(reader.int64().toString());
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
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
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt("0"),
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt("0"),
      leafHash: isSet(object.leafHash) ? bytesFromBase64(object.leafHash) : new Uint8Array(),
      aunts: Array.isArray(object === null || object === void 0 ? void 0 : object.aunts) ? object.aunts.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.total !== void 0 && (obj.total = (message.total || BigInt("0")).toString());
    message.index !== void 0 && (obj.index = (message.index || BigInt("0")).toString());
    message.leafHash !== void 0 && (obj.leafHash = base64FromBytes(message.leafHash !== void 0 ? message.leafHash : new Uint8Array()));
    if (message.aunts) {
      obj.aunts = message.aunts.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$leafHash, _object$aunts;
    const message = createBaseProof();
    message.total = object.total !== void 0 && object.total !== null ? BigInt(object.total.toString()) : BigInt("0");
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt("0");
    message.leafHash = (_object$leafHash = object.leafHash) !== null && _object$leafHash !== void 0 ? _object$leafHash : new Uint8Array();
    message.aunts = ((_object$aunts = object.aunts) === null || _object$aunts === void 0 ? void 0 : _object$aunts.map((e) => e)) || [];
    return message;
  }
};
function createBaseValueOp() {
  return {
    key: new Uint8Array(),
    proof: void 0
  };
}
var ValueOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== void 0) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValueOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
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
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.proof !== void 0 && (obj.proof = message.proof ? Proof.toJSON(message.proof) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBaseValueOp();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? Proof.fromPartial(object.proof) : void 0;
    return message;
  }
};
function createBaseDominoOp() {
  return {
    key: "",
    input: "",
    output: ""
  };
}
var DominoOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
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
      key: isSet(object.key) ? String(object.key) : "",
      input: isSet(object.input) ? String(object.input) : "",
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.input !== void 0 && (obj.input = message.input);
    message.output !== void 0 && (obj.output = message.output);
    return obj;
  },
  fromPartial(object) {
    var _object$key2, _object$input, _object$output;
    const message = createBaseDominoOp();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.input = (_object$input = object.input) !== null && _object$input !== void 0 ? _object$input : "";
    message.output = (_object$output = object.output) !== null && _object$output !== void 0 ? _object$output : "";
    return message;
  }
};
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
var ProofOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
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
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = message.type);
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$key3, _object$data;
    const message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
function createBaseProofOps() {
  return {
    ops: []
  };
}
var ProofOps = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.ops) {
      ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
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
      ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map((e) => ProofOp.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => e ? ProofOp.toJSON(e) : void 0);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$ops;
    const message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map((e) => ProofOp.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/version/types.js
var types_exports = {};
__export(types_exports, {
  App: () => App,
  Consensus: () => Consensus
});
var _m02 = __toESM(require_minimal());
function createBaseApp() {
  return {
    protocol: BigInt("0"),
    software: ""
  };
}
var App = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.protocol.toString()));
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.software = reader.string();
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
      protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt("0"),
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.protocol !== void 0 && (obj.protocol = (message.protocol || BigInt("0")).toString());
    message.software !== void 0 && (obj.software = message.software);
    return obj;
  },
  fromPartial(object) {
    var _object$software;
    const message = createBaseApp();
    message.protocol = object.protocol !== void 0 && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt("0");
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }
};
function createBaseConsensus() {
  return {
    block: BigInt("0"),
    app: BigInt("0")
  };
}
var Consensus = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.block.toString()));
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.app.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.app = BigInt(reader.uint64().toString());
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
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt("0"),
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.block !== void 0 && (obj.block = (message.block || BigInt("0")).toString());
    message.app !== void 0 && (obj.app = (message.app || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseConsensus();
    message.block = object.block !== void 0 && object.block !== null ? BigInt(object.block.toString()) : BigInt("0");
    message.app = object.app !== void 0 && object.app !== null ? BigInt(object.app.toString()) : BigInt("0");
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/crypto/keys.js
var keys_exports = {};
__export(keys_exports, {
  PublicKey: () => PublicKey
});
var _m03 = __toESM(require_minimal());
function createBasePublicKey() {
  return {
    ed25519: void 0,
    secp256k1: void 0
  };
}
var PublicKey = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.ed25519 !== void 0) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== void 0) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
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
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : void 0,
      secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.ed25519 !== void 0 && (obj.ed25519 = message.ed25519 !== void 0 ? base64FromBytes(message.ed25519) : void 0);
    message.secp256k1 !== void 0 && (obj.secp256k1 = message.secp256k1 !== void 0 ? base64FromBytes(message.secp256k1) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$ed, _object$secp256k;
    const message = createBasePublicKey();
    message.ed25519 = (_object$ed = object.ed25519) !== null && _object$ed !== void 0 ? _object$ed : void 0;
    message.secp256k1 = (_object$secp256k = object.secp256k1) !== null && _object$secp256k !== void 0 ? _object$secp256k : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/types/validator.js
var validator_exports = {};
__export(validator_exports, {
  SimpleValidator: () => SimpleValidator,
  Validator: () => Validator,
  ValidatorSet: () => ValidatorSet
});
var _m04 = __toESM(require_minimal());
function createBaseValidatorSet() {
  return {
    validators: [],
    proposer: void 0,
    totalVotingPower: BigInt("0")
  };
}
var ValidatorSet = {
  encode(message, writer = _m04.Writer.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== void 0) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.totalVotingPower.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = BigInt(reader.int64().toString());
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
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : void 0,
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : void 0);
    } else {
      obj.validators = [];
    }
    message.proposer !== void 0 && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : void 0);
    message.totalVotingPower !== void 0 && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseValidatorSet();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map((e) => Validator.fromPartial(e))) || [];
    message.proposer = object.proposer !== void 0 && object.proposer !== null ? Validator.fromPartial(object.proposer) : void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    return message;
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    pubKey: void 0,
    votingPower: BigInt("0"),
    proposerPriority: BigInt("0")
  };
}
var Validator = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.votingPower.toString()));
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.proposerPriority.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = BigInt(reader.int64().toString());
          break;
        case 4:
          message.proposerPriority = BigInt(reader.int64().toString());
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
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : void 0,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt("0"),
      proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = base64FromBytes(message.address !== void 0 ? message.address : new Uint8Array()));
    message.pubKey !== void 0 && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : void 0);
    message.votingPower !== void 0 && (obj.votingPower = (message.votingPower || BigInt("0")).toString());
    message.proposerPriority !== void 0 && (obj.proposerPriority = (message.proposerPriority || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt("0");
    message.proposerPriority = object.proposerPriority !== void 0 && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt("0");
    return message;
  }
};
function createBaseSimpleValidator() {
  return {
    pubKey: void 0,
    votingPower: BigInt("0")
  };
}
var SimpleValidator = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.votingPower.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = BigInt(reader.int64().toString());
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
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : void 0,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.pubKey !== void 0 && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : void 0);
    message.votingPower !== void 0 && (obj.votingPower = (message.votingPower || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSimpleValidator();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt("0");
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/types/types.js
var types_exports2 = {};
__export(types_exports2, {
  BlockID: () => BlockID,
  BlockIDFlag: () => BlockIDFlag,
  BlockIDFlagSDKType: () => BlockIDFlagSDKType,
  BlockMeta: () => BlockMeta,
  Commit: () => Commit,
  CommitSig: () => CommitSig,
  Data: () => Data,
  Header: () => Header,
  LightBlock: () => LightBlock,
  Part: () => Part,
  PartSetHeader: () => PartSetHeader,
  Proposal: () => Proposal,
  SignedHeader: () => SignedHeader,
  SignedMsgType: () => SignedMsgType,
  SignedMsgTypeSDKType: () => SignedMsgTypeSDKType,
  TxProof: () => TxProof,
  Vote: () => Vote,
  blockIDFlagFromJSON: () => blockIDFlagFromJSON,
  blockIDFlagToJSON: () => blockIDFlagToJSON,
  signedMsgTypeFromJSON: () => signedMsgTypeFromJSON,
  signedMsgTypeToJSON: () => signedMsgTypeToJSON
});
var _m05 = __toESM(require_minimal());
var BlockIDFlag = function(BlockIDFlag2) {
  BlockIDFlag2[BlockIDFlag2["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag2[BlockIDFlag2["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag2[BlockIDFlag2["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag2[BlockIDFlag2["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag2[BlockIDFlag2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BlockIDFlag2;
}({});
var BlockIDFlagSDKType = BlockIDFlag;
function blockIDFlagFromJSON(object) {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
function blockIDFlagToJSON(object) {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";
    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";
    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";
    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";
    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var SignedMsgType = function(SignedMsgType2) {
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType2[SignedMsgType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignedMsgType2;
}({});
var SignedMsgTypeSDKType = SignedMsgType;
function signedMsgTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
function signedMsgTypeToJSON(object) {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBasePartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
var PartSetHeader = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
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
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.total !== void 0 && (obj.total = Math.round(message.total));
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$total, _object$hash;
    const message = createBasePartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
function createBasePart() {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: void 0
  };
}
var Part = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== void 0) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
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
      index: isSet(object.index) ? Number(object.index) : 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== void 0 && (obj.index = Math.round(message.index));
    message.bytes !== void 0 && (obj.bytes = base64FromBytes(message.bytes !== void 0 ? message.bytes : new Uint8Array()));
    message.proof !== void 0 && (obj.proof = message.proof ? Proof.toJSON(message.proof) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$bytes;
    const message = createBasePart();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.bytes = (_object$bytes = object.bytes) !== null && _object$bytes !== void 0 ? _object$bytes : new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? Proof.fromPartial(object.proof) : void 0;
    return message;
  }
};
function createBaseBlockID() {
  return {
    hash: new Uint8Array(),
    partSetHeader: void 0
  };
}
var BlockID = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== void 0) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? PartSetHeader.fromJSON(object.partSetHeader) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    message.partSetHeader !== void 0 && (obj.partSetHeader = message.partSetHeader ? PartSetHeader.toJSON(message.partSetHeader) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$hash2;
    const message = createBaseBlockID();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.partSetHeader = object.partSetHeader !== void 0 && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : void 0;
    return message;
  }
};
function createBaseHeader() {
  return {
    version: void 0,
    chainId: "",
    height: BigInt("0"),
    time: void 0,
    lastBlockId: void 0,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var Header = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.version !== void 0) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.time !== void 0) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== void 0) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = BigInt(reader.int64().toString());
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.bytes();
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
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : void 0,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : void 0,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : void 0,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.version !== void 0 && (obj.version = message.version ? Consensus.toJSON(message.version) : void 0);
    message.chainId !== void 0 && (obj.chainId = message.chainId);
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== void 0 && (obj.time = message.time.toISOString());
    message.lastBlockId !== void 0 && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : void 0);
    message.lastCommitHash !== void 0 && (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== void 0 ? message.lastCommitHash : new Uint8Array()));
    message.dataHash !== void 0 && (obj.dataHash = base64FromBytes(message.dataHash !== void 0 ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== void 0 && (obj.validatorsHash = base64FromBytes(message.validatorsHash !== void 0 ? message.validatorsHash : new Uint8Array()));
    message.nextValidatorsHash !== void 0 && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== void 0 ? message.nextValidatorsHash : new Uint8Array()));
    message.consensusHash !== void 0 && (obj.consensusHash = base64FromBytes(message.consensusHash !== void 0 ? message.consensusHash : new Uint8Array()));
    message.appHash !== void 0 && (obj.appHash = base64FromBytes(message.appHash !== void 0 ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== void 0 && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== void 0 ? message.lastResultsHash : new Uint8Array()));
    message.evidenceHash !== void 0 && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== void 0 ? message.evidenceHash : new Uint8Array()));
    message.proposerAddress !== void 0 && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== void 0 ? message.proposerAddress : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$chainId, _object$time, _object$lastCommitHas, _object$dataHash, _object$validatorsHas, _object$nextValidator, _object$consensusHash, _object$appHash, _object$lastResultsHa, _object$evidenceHash, _object$proposerAddre;
    const message = createBaseHeader();
    message.version = object.version !== void 0 && object.version !== null ? Consensus.fromPartial(object.version) : void 0;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : void 0;
    message.lastBlockId = object.lastBlockId !== void 0 && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : void 0;
    message.lastCommitHash = (_object$lastCommitHas = object.lastCommitHash) !== null && _object$lastCommitHas !== void 0 ? _object$lastCommitHas : new Uint8Array();
    message.dataHash = (_object$dataHash = object.dataHash) !== null && _object$dataHash !== void 0 ? _object$dataHash : new Uint8Array();
    message.validatorsHash = (_object$validatorsHas = object.validatorsHash) !== null && _object$validatorsHas !== void 0 ? _object$validatorsHas : new Uint8Array();
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    message.consensusHash = (_object$consensusHash = object.consensusHash) !== null && _object$consensusHash !== void 0 ? _object$consensusHash : new Uint8Array();
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    message.lastResultsHash = (_object$lastResultsHa = object.lastResultsHash) !== null && _object$lastResultsHa !== void 0 ? _object$lastResultsHa : new Uint8Array();
    message.evidenceHash = (_object$evidenceHash = object.evidenceHash) !== null && _object$evidenceHash !== void 0 ? _object$evidenceHash : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre = object.proposerAddress) !== null && _object$proposerAddre !== void 0 ? _object$proposerAddre : new Uint8Array();
    return message;
  }
};
function createBaseData() {
  return {
    txs: []
  };
}
var Data = {
  encode(message, writer = _m05.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txs;
    const message = createBaseData();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map((e) => e)) || [];
    return message;
  }
};
function createBaseVote() {
  return {
    type: 0,
    height: BigInt("0"),
    round: 0,
    blockId: void 0,
    timestamp: void 0,
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array()
  };
}
var Vote = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = BigInt(reader.int64().toString());
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAddress = reader.bytes();
          break;
        case 7:
          message.validatorIndex = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== void 0 && (obj.round = Math.round(message.round));
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    message.validatorAddress !== void 0 && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== void 0 ? message.validatorAddress : new Uint8Array()));
    message.validatorIndex !== void 0 && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== void 0 && (obj.signature = base64FromBytes(message.signature !== void 0 ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$round, _object$timestamp, _object$validatorAddr, _object$validatorInde, _object$signature;
    const message = createBaseVote();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : void 0;
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : new Uint8Array();
    message.validatorIndex = (_object$validatorInde = object.validatorIndex) !== null && _object$validatorInde !== void 0 ? _object$validatorInde : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  }
};
function createBaseCommit() {
  return {
    height: BigInt("0"),
    round: 0,
    blockId: void 0,
    signatures: []
  };
}
var Commit = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => CommitSig.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== void 0 && (obj.round = Math.round(message.round));
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? CommitSig.toJSON(e) : void 0);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$round2, _object$signatures;
    const message = createBaseCommit();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map((e) => CommitSig.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommitSig() {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: void 0,
    signature: new Uint8Array()
  };
}
var CommitSig = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
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
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockIdFlag !== void 0 && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== void 0 && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== void 0 ? message.validatorAddress : new Uint8Array()));
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== void 0 && (obj.signature = base64FromBytes(message.signature !== void 0 ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$blockIdFlag, _object$validatorAddr2, _object$timestamp2, _object$signature2;
    const message = createBaseCommitSig();
    message.blockIdFlag = (_object$blockIdFlag = object.blockIdFlag) !== null && _object$blockIdFlag !== void 0 ? _object$blockIdFlag : 0;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : new Uint8Array();
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : void 0;
    message.signature = (_object$signature2 = object.signature) !== null && _object$signature2 !== void 0 ? _object$signature2 : new Uint8Array();
    return message;
  }
};
function createBaseProposal() {
  return {
    type: 0,
    height: BigInt("0"),
    round: 0,
    polRound: 0,
    blockId: void 0,
    timestamp: void 0,
    signature: new Uint8Array()
  };
}
var Proposal = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = BigInt(reader.int64().toString());
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.polRound = reader.int32();
          break;
        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.signature = reader.bytes();
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
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      round: isSet(object.round) ? Number(object.round) : 0,
      polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : void 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.round !== void 0 && (obj.round = Math.round(message.round));
    message.polRound !== void 0 && (obj.polRound = Math.round(message.polRound));
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== void 0 && (obj.signature = base64FromBytes(message.signature !== void 0 ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$type2, _object$round3, _object$polRound, _object$timestamp3, _object$signature3;
    const message = createBaseProposal();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.polRound = (_object$polRound = object.polRound) !== null && _object$polRound !== void 0 ? _object$polRound : 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.timestamp = (_object$timestamp3 = object.timestamp) !== null && _object$timestamp3 !== void 0 ? _object$timestamp3 : void 0;
    message.signature = (_object$signature3 = object.signature) !== null && _object$signature3 !== void 0 ? _object$signature3 : new Uint8Array();
    return message;
  }
};
function createBaseSignedHeader() {
  return {
    header: void 0,
    commit: void 0
  };
}
var SignedHeader = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
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
      header: isSet(object.header) ? Header.fromJSON(object.header) : void 0,
      commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.header !== void 0 && (obj.header = message.header ? Header.toJSON(message.header) : void 0);
    message.commit !== void 0 && (obj.commit = message.commit ? Commit.toJSON(message.commit) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSignedHeader();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? Commit.fromPartial(object.commit) : void 0;
    return message;
  }
};
function createBaseLightBlock() {
  return {
    signedHeader: void 0,
    validatorSet: void 0
  };
}
var LightBlock = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.signedHeader !== void 0) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== void 0) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
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
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : void 0,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.signedHeader !== void 0 && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : void 0);
    message.validatorSet !== void 0 && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseLightBlock();
    message.signedHeader = object.signedHeader !== void 0 && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : void 0;
    message.validatorSet = object.validatorSet !== void 0 && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : void 0;
    return message;
  }
};
function createBaseBlockMeta() {
  return {
    blockId: void 0,
    blockSize: BigInt("0"),
    header: void 0,
    numTxs: BigInt("0")
  };
}
var BlockMeta = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockSize !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.blockSize.toString()));
    }
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.numTxs !== BigInt(0)) {
      writer.uint32(32).int64(import_long.default.fromString(message.numTxs.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockSize = BigInt(reader.int64().toString());
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.numTxs = BigInt(reader.int64().toString());
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
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      blockSize: isSet(object.blockSize) ? BigInt(object.blockSize.toString()) : BigInt("0"),
      header: isSet(object.header) ? Header.fromJSON(object.header) : void 0,
      numTxs: isSet(object.numTxs) ? BigInt(object.numTxs.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.blockSize !== void 0 && (obj.blockSize = (message.blockSize || BigInt("0")).toString());
    message.header !== void 0 && (obj.header = message.header ? Header.toJSON(message.header) : void 0);
    message.numTxs !== void 0 && (obj.numTxs = (message.numTxs || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBlockMeta();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.blockSize = object.blockSize !== void 0 && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt("0");
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.numTxs = object.numTxs !== void 0 && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt("0");
    return message;
  }
};
function createBaseTxProof() {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: void 0
  };
}
var TxProof = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== void 0) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
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
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.rootHash !== void 0 && (obj.rootHash = base64FromBytes(message.rootHash !== void 0 ? message.rootHash : new Uint8Array()));
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.proof !== void 0 && (obj.proof = message.proof ? Proof.toJSON(message.proof) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$rootHash, _object$data;
    const message = createBaseTxProof();
    message.rootHash = (_object$rootHash = object.rootHash) !== null && _object$rootHash !== void 0 ? _object$rootHash : new Uint8Array();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? Proof.fromPartial(object.proof) : void 0;
    return message;
  }
};

export {
  ProofOps,
  proof_exports,
  Consensus,
  types_exports,
  PublicKey,
  keys_exports,
  ValidatorSet,
  Validator,
  validator_exports,
  BlockID,
  Header,
  Data,
  Vote,
  Commit,
  SignedHeader,
  LightBlock,
  types_exports2
};
//# sourceMappingURL=chunk-OOMJJQEG.js.map
