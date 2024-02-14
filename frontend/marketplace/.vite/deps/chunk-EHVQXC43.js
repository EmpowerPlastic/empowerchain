import {
  Duration
} from "./chunk-J33TOWTN.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/tendermint/types/params.js
var params_exports = {};
__export(params_exports, {
  BlockParams: () => BlockParams,
  ConsensusParams: () => ConsensusParams,
  EvidenceParams: () => EvidenceParams,
  HashedParams: () => HashedParams,
  ValidatorParams: () => ValidatorParams,
  VersionParams: () => VersionParams
});
var _m0 = __toESM(require_minimal());
function createBaseConsensusParams() {
  return {
    block: void 0,
    evidence: void 0,
    validator: void 0,
    version: void 0
  };
}
var ConsensusParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block !== void 0) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== void 0) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== void 0) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
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
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : void 0,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : void 0,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : void 0,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.block !== void 0 && (obj.block = message.block ? BlockParams.toJSON(message.block) : void 0);
    message.evidence !== void 0 && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : void 0);
    message.validator !== void 0 && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : void 0);
    message.version !== void 0 && (obj.version = message.version ? VersionParams.toJSON(message.version) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseConsensusParams();
    message.block = object.block !== void 0 && object.block !== null ? BlockParams.fromPartial(object.block) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : void 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : void 0;
    message.version = object.version !== void 0 && object.version !== null ? VersionParams.fromPartial(object.version) : void 0;
    return message;
  }
};
function createBaseBlockParams() {
  return {
    maxBytes: BigInt("0"),
    maxGas: BigInt("0")
  };
}
var BlockParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.maxBytes.toString()));
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.maxGas.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = BigInt(reader.int64().toString());
          break;
        case 2:
          message.maxGas = BigInt(reader.int64().toString());
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
      maxBytes: isSet(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt("0"),
      maxGas: isSet(object.maxGas) ? BigInt(object.maxGas.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxBytes !== void 0 && (obj.maxBytes = (message.maxBytes || BigInt("0")).toString());
    message.maxGas !== void 0 && (obj.maxGas = (message.maxGas || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== void 0 && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt("0");
    message.maxGas = object.maxGas !== void 0 && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt("0");
    return message;
  }
};
function createBaseEvidenceParams() {
  return {
    maxAgeNumBlocks: BigInt("0"),
    maxAgeDuration: void 0,
    maxBytes: BigInt("0")
  };
}
var EvidenceParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.maxAgeNumBlocks !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.maxAgeNumBlocks.toString()));
    }
    if (message.maxAgeDuration !== void 0) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(24).int64(import_long.default.fromString(message.maxBytes.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = BigInt(reader.int64().toString());
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = BigInt(reader.int64().toString());
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
      maxAgeNumBlocks: isSet(object.maxAgeNumBlocks) ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt("0"),
      maxAgeDuration: isSet(object.maxAgeDuration) ? Duration.fromJSON(object.maxAgeDuration) : void 0,
      maxBytes: isSet(object.maxBytes) ? BigInt(object.maxBytes.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxAgeNumBlocks !== void 0 && (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || BigInt("0")).toString());
    message.maxAgeDuration !== void 0 && (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : void 0);
    message.maxBytes !== void 0 && (obj.maxBytes = (message.maxBytes || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== void 0 && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt("0");
    message.maxAgeDuration = object.maxAgeDuration !== void 0 && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : void 0;
    message.maxBytes = object.maxBytes !== void 0 && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt("0");
    return message;
  }
};
function createBaseValidatorParams() {
  return {
    pubKeyTypes: []
  };
}
var ValidatorParams = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
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
      pubKeyTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.pubKeyTypes) ? object.pubKeyTypes.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.pubKeyTypes) {
      obj.pubKeyTypes = message.pubKeyTypes.map((e) => e);
    } else {
      obj.pubKeyTypes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$pubKeyTypes;
    const message = createBaseValidatorParams();
    message.pubKeyTypes = ((_object$pubKeyTypes = object.pubKeyTypes) === null || _object$pubKeyTypes === void 0 ? void 0 : _object$pubKeyTypes.map((e) => e)) || [];
    return message;
  }
};
function createBaseVersionParams() {
  return {
    app: BigInt("0")
  };
}
var VersionParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.app !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.app.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.app !== void 0 && (obj.app = (message.app || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseVersionParams();
    message.app = object.app !== void 0 && object.app !== null ? BigInt(object.app.toString()) : BigInt("0");
    return message;
  }
};
function createBaseHashedParams() {
  return {
    blockMaxBytes: BigInt("0"),
    blockMaxGas: BigInt("0")
  };
}
var HashedParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.blockMaxBytes !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.blockMaxBytes.toString()));
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(16).int64(import_long.default.fromString(message.blockMaxGas.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = BigInt(reader.int64().toString());
          break;
        case 2:
          message.blockMaxGas = BigInt(reader.int64().toString());
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
      blockMaxBytes: isSet(object.blockMaxBytes) ? BigInt(object.blockMaxBytes.toString()) : BigInt("0"),
      blockMaxGas: isSet(object.blockMaxGas) ? BigInt(object.blockMaxGas.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockMaxBytes !== void 0 && (obj.blockMaxBytes = (message.blockMaxBytes || BigInt("0")).toString());
    message.blockMaxGas !== void 0 && (obj.blockMaxGas = (message.blockMaxGas || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== void 0 && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt("0");
    message.blockMaxGas = object.blockMaxGas !== void 0 && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt("0");
    return message;
  }
};

export {
  ConsensusParams,
  BlockParams,
  EvidenceParams,
  ValidatorParams,
  params_exports
};
//# sourceMappingURL=chunk-EHVQXC43.js.map
