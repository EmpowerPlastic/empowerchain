import {
  base64FromBytes,
  bytesFromBase64,
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/ics23/v1/proofs.js
var proofs_exports = {};
__export(proofs_exports, {
  BatchEntry: () => BatchEntry,
  BatchProof: () => BatchProof,
  CommitmentProof: () => CommitmentProof,
  CompressedBatchEntry: () => CompressedBatchEntry,
  CompressedBatchProof: () => CompressedBatchProof,
  CompressedExistenceProof: () => CompressedExistenceProof,
  CompressedNonExistenceProof: () => CompressedNonExistenceProof,
  ExistenceProof: () => ExistenceProof,
  HashOp: () => HashOp,
  HashOpSDKType: () => HashOpSDKType,
  InnerOp: () => InnerOp,
  InnerSpec: () => InnerSpec,
  LeafOp: () => LeafOp,
  LengthOp: () => LengthOp,
  LengthOpSDKType: () => LengthOpSDKType,
  NonExistenceProof: () => NonExistenceProof,
  ProofSpec: () => ProofSpec,
  hashOpFromJSON: () => hashOpFromJSON,
  hashOpToJSON: () => hashOpToJSON,
  lengthOpFromJSON: () => lengthOpFromJSON,
  lengthOpToJSON: () => lengthOpToJSON
});
var _m0 = __toESM(require_minimal());
var HashOp = function(HashOp2) {
  HashOp2[HashOp2["NO_HASH"] = 0] = "NO_HASH";
  HashOp2[HashOp2["SHA256"] = 1] = "SHA256";
  HashOp2[HashOp2["SHA512"] = 2] = "SHA512";
  HashOp2[HashOp2["KECCAK"] = 3] = "KECCAK";
  HashOp2[HashOp2["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp2[HashOp2["BITCOIN"] = 5] = "BITCOIN";
  HashOp2[HashOp2["SHA512_256"] = 6] = "SHA512_256";
  HashOp2[HashOp2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return HashOp2;
}({});
var HashOpSDKType = HashOp;
function hashOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_HASH":
      return HashOp.NO_HASH;
    case 1:
    case "SHA256":
      return HashOp.SHA256;
    case 2:
    case "SHA512":
      return HashOp.SHA512;
    case 3:
    case "KECCAK":
      return HashOp.KECCAK;
    case 4:
    case "RIPEMD160":
      return HashOp.RIPEMD160;
    case 5:
    case "BITCOIN":
      return HashOp.BITCOIN;
    case 6:
    case "SHA512_256":
      return HashOp.SHA512_256;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HashOp.UNRECOGNIZED;
  }
}
function hashOpToJSON(object) {
  switch (object) {
    case HashOp.NO_HASH:
      return "NO_HASH";
    case HashOp.SHA256:
      return "SHA256";
    case HashOp.SHA512:
      return "SHA512";
    case HashOp.KECCAK:
      return "KECCAK";
    case HashOp.RIPEMD160:
      return "RIPEMD160";
    case HashOp.BITCOIN:
      return "BITCOIN";
    case HashOp.SHA512_256:
      return "SHA512_256";
    case HashOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var LengthOp = function(LengthOp2) {
  LengthOp2[LengthOp2["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp2[LengthOp2["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp2[LengthOp2["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp2[LengthOp2["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp2[LengthOp2["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp2[LengthOp2["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp2[LengthOp2["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp2[LengthOp2["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp2[LengthOp2["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOp2[LengthOp2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LengthOp2;
}({});
var LengthOpSDKType = LengthOp;
function lengthOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return LengthOp.NO_PREFIX;
    case 1:
    case "VAR_PROTO":
      return LengthOp.VAR_PROTO;
    case 2:
    case "VAR_RLP":
      return LengthOp.VAR_RLP;
    case 3:
    case "FIXED32_BIG":
      return LengthOp.FIXED32_BIG;
    case 4:
    case "FIXED32_LITTLE":
      return LengthOp.FIXED32_LITTLE;
    case 5:
    case "FIXED64_BIG":
      return LengthOp.FIXED64_BIG;
    case 6:
    case "FIXED64_LITTLE":
      return LengthOp.FIXED64_LITTLE;
    case 7:
    case "REQUIRE_32_BYTES":
      return LengthOp.REQUIRE_32_BYTES;
    case 8:
    case "REQUIRE_64_BYTES":
      return LengthOp.REQUIRE_64_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LengthOp.UNRECOGNIZED;
  }
}
function lengthOpToJSON(object) {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return "NO_PREFIX";
    case LengthOp.VAR_PROTO:
      return "VAR_PROTO";
    case LengthOp.VAR_RLP:
      return "VAR_RLP";
    case LengthOp.FIXED32_BIG:
      return "FIXED32_BIG";
    case LengthOp.FIXED32_LITTLE:
      return "FIXED32_LITTLE";
    case LengthOp.FIXED64_BIG:
      return "FIXED64_BIG";
    case LengthOp.FIXED64_LITTLE:
      return "FIXED64_LITTLE";
    case LengthOp.REQUIRE_32_BYTES:
      return "REQUIRE_32_BYTES";
    case LengthOp.REQUIRE_64_BYTES:
      return "REQUIRE_64_BYTES";
    case LengthOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: void 0,
    path: []
  };
}
var ExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== void 0) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
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
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : void 0,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => InnerOp.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.value !== void 0 && (obj.value = base64FromBytes(message.value !== void 0 ? message.value : new Uint8Array()));
    message.leaf !== void 0 && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : void 0);
    if (message.path) {
      obj.path = message.path.map((e) => e ? InnerOp.toJSON(e) : void 0);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$value, _object$path;
    const message = createBaseExistenceProof();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    message.leaf = object.leaf !== void 0 && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : void 0;
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map((e) => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: void 0,
    right: void 0
  };
}
var NonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== void 0) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== void 0) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
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
      left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : void 0,
      right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.left !== void 0 && (obj.left = message.left ? ExistenceProof.toJSON(message.left) : void 0);
    message.right !== void 0 && (obj.right = message.right ? ExistenceProof.toJSON(message.right) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBaseNonExistenceProof();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.left = object.left !== void 0 && object.left !== null ? ExistenceProof.fromPartial(object.left) : void 0;
    message.right = object.right !== void 0 && object.right !== null ? ExistenceProof.fromPartial(object.right) : void 0;
    return message;
  }
};
function createBaseCommitmentProof() {
  return {
    exist: void 0,
    nonexist: void 0,
    batch: void 0,
    compressed: void 0
  };
}
var CommitmentProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== void 0) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== void 0) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== void 0) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
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
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : void 0,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : void 0,
      batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : void 0,
      compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.exist !== void 0 && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : void 0);
    message.nonexist !== void 0 && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : void 0);
    message.batch !== void 0 && (obj.batch = message.batch ? BatchProof.toJSON(message.batch) : void 0);
    message.compressed !== void 0 && (obj.compressed = message.compressed ? CompressedBatchProof.toJSON(message.compressed) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== void 0 && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : void 0;
    message.batch = object.batch !== void 0 && object.batch !== null ? BatchProof.fromPartial(object.batch) : void 0;
    message.compressed = object.compressed !== void 0 && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : void 0;
    return message;
  }
};
function createBaseLeafOp() {
  return {
    hash: 0,
    prehashKey: 0,
    prehashValue: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
var LeafOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }
    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prehashKey = reader.int32();
          break;
        case 3:
          message.prehashValue = reader.int32();
          break;
        case 4:
          message.length = reader.int32();
          break;
        case 5:
          message.prefix = reader.bytes();
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
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prehashKey: isSet(object.prehashKey) ? hashOpFromJSON(object.prehashKey) : 0,
      prehashValue: isSet(object.prehashValue) ? hashOpFromJSON(object.prehashValue) : 0,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = hashOpToJSON(message.hash));
    message.prehashKey !== void 0 && (obj.prehashKey = hashOpToJSON(message.prehashKey));
    message.prehashValue !== void 0 && (obj.prehashValue = hashOpToJSON(message.prehashValue));
    message.length !== void 0 && (obj.length = lengthOpToJSON(message.length));
    message.prefix !== void 0 && (obj.prefix = base64FromBytes(message.prefix !== void 0 ? message.prefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$hash, _object$prehashKey, _object$prehashValue, _object$length, _object$prefix;
    const message = createBaseLeafOp();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : 0;
    message.prehashKey = (_object$prehashKey = object.prehashKey) !== null && _object$prehashKey !== void 0 ? _object$prehashKey : 0;
    message.prehashValue = (_object$prehashValue = object.prehashValue) !== null && _object$prehashValue !== void 0 ? _object$prehashValue : 0;
    message.length = (_object$length = object.length) !== null && _object$length !== void 0 ? _object$length : 0;
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
function createBaseInnerOp() {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
var InnerOp = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.suffix = reader.bytes();
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
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = hashOpToJSON(message.hash));
    message.prefix !== void 0 && (obj.prefix = base64FromBytes(message.prefix !== void 0 ? message.prefix : new Uint8Array()));
    message.suffix !== void 0 && (obj.suffix = base64FromBytes(message.suffix !== void 0 ? message.suffix : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$hash2, _object$prefix2, _object$suffix;
    const message = createBaseInnerOp();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : 0;
    message.prefix = (_object$prefix2 = object.prefix) !== null && _object$prefix2 !== void 0 ? _object$prefix2 : new Uint8Array();
    message.suffix = (_object$suffix = object.suffix) !== null && _object$suffix !== void 0 ? _object$suffix : new Uint8Array();
    return message;
  }
};
function createBaseProofSpec() {
  return {
    leafSpec: void 0,
    innerSpec: void 0,
    maxDepth: 0,
    minDepth: 0,
    prehashKeyBeforeComparison: false
  };
}
var ProofSpec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.leafSpec !== void 0) {
      LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.innerSpec !== void 0) {
      InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxDepth !== 0) {
      writer.uint32(24).int32(message.maxDepth);
    }
    if (message.minDepth !== 0) {
      writer.uint32(32).int32(message.minDepth);
    }
    if (message.prehashKeyBeforeComparison === true) {
      writer.uint32(40).bool(message.prehashKeyBeforeComparison);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leafSpec = LeafOp.decode(reader, reader.uint32());
          break;
        case 2:
          message.innerSpec = InnerSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxDepth = reader.int32();
          break;
        case 4:
          message.minDepth = reader.int32();
          break;
        case 5:
          message.prehashKeyBeforeComparison = reader.bool();
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
      leafSpec: isSet(object.leafSpec) ? LeafOp.fromJSON(object.leafSpec) : void 0,
      innerSpec: isSet(object.innerSpec) ? InnerSpec.fromJSON(object.innerSpec) : void 0,
      maxDepth: isSet(object.maxDepth) ? Number(object.maxDepth) : 0,
      minDepth: isSet(object.minDepth) ? Number(object.minDepth) : 0,
      prehashKeyBeforeComparison: isSet(object.prehashKeyBeforeComparison) ? Boolean(object.prehashKeyBeforeComparison) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.leafSpec !== void 0 && (obj.leafSpec = message.leafSpec ? LeafOp.toJSON(message.leafSpec) : void 0);
    message.innerSpec !== void 0 && (obj.innerSpec = message.innerSpec ? InnerSpec.toJSON(message.innerSpec) : void 0);
    message.maxDepth !== void 0 && (obj.maxDepth = Math.round(message.maxDepth));
    message.minDepth !== void 0 && (obj.minDepth = Math.round(message.minDepth));
    message.prehashKeyBeforeComparison !== void 0 && (obj.prehashKeyBeforeComparison = message.prehashKeyBeforeComparison);
    return obj;
  },
  fromPartial(object) {
    var _object$maxDepth, _object$minDepth, _object$prehashKeyBef;
    const message = createBaseProofSpec();
    message.leafSpec = object.leafSpec !== void 0 && object.leafSpec !== null ? LeafOp.fromPartial(object.leafSpec) : void 0;
    message.innerSpec = object.innerSpec !== void 0 && object.innerSpec !== null ? InnerSpec.fromPartial(object.innerSpec) : void 0;
    message.maxDepth = (_object$maxDepth = object.maxDepth) !== null && _object$maxDepth !== void 0 ? _object$maxDepth : 0;
    message.minDepth = (_object$minDepth = object.minDepth) !== null && _object$minDepth !== void 0 ? _object$minDepth : 0;
    message.prehashKeyBeforeComparison = (_object$prehashKeyBef = object.prehashKeyBeforeComparison) !== null && _object$prehashKeyBef !== void 0 ? _object$prehashKeyBef : false;
    return message;
  }
};
function createBaseInnerSpec() {
  return {
    childOrder: [],
    childSize: 0,
    minPrefixLength: 0,
    maxPrefixLength: 0,
    emptyChild: new Uint8Array(),
    hash: 0
  };
}
var InnerSpec = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.childOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.childSize !== 0) {
      writer.uint32(16).int32(message.childSize);
    }
    if (message.minPrefixLength !== 0) {
      writer.uint32(24).int32(message.minPrefixLength);
    }
    if (message.maxPrefixLength !== 0) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }
    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }
          break;
        case 2:
          message.childSize = reader.int32();
          break;
        case 3:
          message.minPrefixLength = reader.int32();
          break;
        case 4:
          message.maxPrefixLength = reader.int32();
          break;
        case 5:
          message.emptyChild = reader.bytes();
          break;
        case 6:
          message.hash = reader.int32();
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
      childOrder: Array.isArray(object === null || object === void 0 ? void 0 : object.childOrder) ? object.childOrder.map((e) => Number(e)) : [],
      childSize: isSet(object.childSize) ? Number(object.childSize) : 0,
      minPrefixLength: isSet(object.minPrefixLength) ? Number(object.minPrefixLength) : 0,
      maxPrefixLength: isSet(object.maxPrefixLength) ? Number(object.maxPrefixLength) : 0,
      emptyChild: isSet(object.emptyChild) ? bytesFromBase64(object.emptyChild) : new Uint8Array(),
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.childOrder) {
      obj.childOrder = message.childOrder.map((e) => Math.round(e));
    } else {
      obj.childOrder = [];
    }
    message.childSize !== void 0 && (obj.childSize = Math.round(message.childSize));
    message.minPrefixLength !== void 0 && (obj.minPrefixLength = Math.round(message.minPrefixLength));
    message.maxPrefixLength !== void 0 && (obj.maxPrefixLength = Math.round(message.maxPrefixLength));
    message.emptyChild !== void 0 && (obj.emptyChild = base64FromBytes(message.emptyChild !== void 0 ? message.emptyChild : new Uint8Array()));
    message.hash !== void 0 && (obj.hash = hashOpToJSON(message.hash));
    return obj;
  },
  fromPartial(object) {
    var _object$childOrder, _object$childSize, _object$minPrefixLeng, _object$maxPrefixLeng, _object$emptyChild, _object$hash3;
    const message = createBaseInnerSpec();
    message.childOrder = ((_object$childOrder = object.childOrder) === null || _object$childOrder === void 0 ? void 0 : _object$childOrder.map((e) => e)) || [];
    message.childSize = (_object$childSize = object.childSize) !== null && _object$childSize !== void 0 ? _object$childSize : 0;
    message.minPrefixLength = (_object$minPrefixLeng = object.minPrefixLength) !== null && _object$minPrefixLeng !== void 0 ? _object$minPrefixLeng : 0;
    message.maxPrefixLength = (_object$maxPrefixLeng = object.maxPrefixLength) !== null && _object$maxPrefixLeng !== void 0 ? _object$maxPrefixLeng : 0;
    message.emptyChild = (_object$emptyChild = object.emptyChild) !== null && _object$emptyChild !== void 0 ? _object$emptyChild : new Uint8Array();
    message.hash = (_object$hash3 = object.hash) !== null && _object$hash3 !== void 0 ? _object$hash3 : 0;
    return message;
  }
};
function createBaseBatchProof() {
  return {
    entries: []
  };
}
var BatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => BatchEntry.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? BatchEntry.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$entries;
    const message = createBaseBatchProof();
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map((e) => BatchEntry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBatchEntry() {
  return {
    exist: void 0,
    nonexist: void 0
  };
}
var BatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== void 0) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
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
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : void 0,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.exist !== void 0 && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : void 0);
    message.nonexist !== void 0 && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== void 0 && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : void 0;
    return message;
  }
};
function createBaseCompressedBatchProof() {
  return {
    entries: [],
    lookupInners: []
  };
}
var CompressedBatchProof = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookupInners) {
      InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => CompressedBatchEntry.fromJSON(e)) : [],
      lookupInners: Array.isArray(object === null || object === void 0 ? void 0 : object.lookupInners) ? object.lookupInners.map((e) => InnerOp.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CompressedBatchEntry.toJSON(e) : void 0);
    } else {
      obj.entries = [];
    }
    if (message.lookupInners) {
      obj.lookupInners = message.lookupInners.map((e) => e ? InnerOp.toJSON(e) : void 0);
    } else {
      obj.lookupInners = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$entries2, _object$lookupInners;
    const message = createBaseCompressedBatchProof();
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map((e) => CompressedBatchEntry.fromPartial(e))) || [];
    message.lookupInners = ((_object$lookupInners = object.lookupInners) === null || _object$lookupInners === void 0 ? void 0 : _object$lookupInners.map((e) => InnerOp.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCompressedBatchEntry() {
  return {
    exist: void 0,
    nonexist: void 0
  };
}
var CompressedBatchEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.exist !== void 0) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
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
      exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : void 0,
      nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.exist !== void 0 && (obj.exist = message.exist ? CompressedExistenceProof.toJSON(message.exist) : void 0);
    message.nonexist !== void 0 && (obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toJSON(message.nonexist) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== void 0 && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : void 0;
    return message;
  }
};
function createBaseCompressedExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: void 0,
    path: []
  };
}
var CompressedExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== void 0) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
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
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : void 0,
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => Number(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.value !== void 0 && (obj.value = base64FromBytes(message.value !== void 0 ? message.value : new Uint8Array()));
    message.leaf !== void 0 && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : void 0);
    if (message.path) {
      obj.path = message.path.map((e) => Math.round(e));
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$key3, _object$value2, _object$path2;
    const message = createBaseCompressedExistenceProof();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.leaf = object.leaf !== void 0 && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : void 0;
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map((e) => e)) || [];
    return message;
  }
};
function createBaseCompressedNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: void 0,
    right: void 0
  };
}
var CompressedNonExistenceProof = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== void 0) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== void 0) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
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
      left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : void 0,
      right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.left !== void 0 && (obj.left = message.left ? CompressedExistenceProof.toJSON(message.left) : void 0);
    message.right !== void 0 && (obj.right = message.right ? CompressedExistenceProof.toJSON(message.right) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$key4;
    const message = createBaseCompressedNonExistenceProof();
    message.key = (_object$key4 = object.key) !== null && _object$key4 !== void 0 ? _object$key4 : new Uint8Array();
    message.left = object.left !== void 0 && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : void 0;
    message.right = object.right !== void 0 && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/commitment/v1/commitment.js
var commitment_exports = {};
__export(commitment_exports, {
  MerklePath: () => MerklePath,
  MerklePrefix: () => MerklePrefix,
  MerkleProof: () => MerkleProof,
  MerkleRoot: () => MerkleRoot
});
var _m02 = __toESM(require_minimal());
function createBaseMerkleRoot() {
  return {
    hash: new Uint8Array()
  };
}
var MerkleRoot = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseMerkleRoot();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
function createBaseMerklePrefix() {
  return {
    keyPrefix: new Uint8Array()
  };
}
var MerklePrefix = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
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
      keyPrefix: isSet(object.keyPrefix) ? bytesFromBase64(object.keyPrefix) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.keyPrefix !== void 0 && (obj.keyPrefix = base64FromBytes(message.keyPrefix !== void 0 ? message.keyPrefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$keyPrefix;
    const message = createBaseMerklePrefix();
    message.keyPrefix = (_object$keyPrefix = object.keyPrefix) !== null && _object$keyPrefix !== void 0 ? _object$keyPrefix : new Uint8Array();
    return message;
  }
};
function createBaseMerklePath() {
  return {
    keyPath: []
  };
}
var MerklePath = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
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
      keyPath: Array.isArray(object === null || object === void 0 ? void 0 : object.keyPath) ? object.keyPath.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map((e) => e);
    } else {
      obj.keyPath = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$keyPath;
    const message = createBaseMerklePath();
    message.keyPath = ((_object$keyPath = object.keyPath) === null || _object$keyPath === void 0 ? void 0 : _object$keyPath.map((e) => e)) || [];
    return message;
  }
};
function createBaseMerkleProof() {
  return {
    proofs: []
  };
}
var MerkleProof = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.proofs) {
      CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
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
      proofs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofs) ? object.proofs.map((e) => CommitmentProof.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => e ? CommitmentProof.toJSON(e) : void 0);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$proofs;
    const message = createBaseMerkleProof();
    message.proofs = ((_object$proofs = object.proofs) === null || _object$proofs === void 0 ? void 0 : _object$proofs.map((e) => CommitmentProof.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/ibc/core/connection/v1/connection.js
var connection_exports = {};
__export(connection_exports, {
  ClientPaths: () => ClientPaths,
  ConnectionEnd: () => ConnectionEnd,
  ConnectionPaths: () => ConnectionPaths,
  Counterparty: () => Counterparty,
  IdentifiedConnection: () => IdentifiedConnection,
  Params: () => Params,
  State: () => State,
  StateSDKType: () => StateSDKType,
  Version: () => Version,
  stateFromJSON: () => stateFromJSON,
  stateToJSON: () => stateToJSON
});
var _m03 = __toESM(require_minimal());
var State = function(State2) {
  State2[State2["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State2[State2["STATE_INIT"] = 1] = "STATE_INIT";
  State2[State2["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State2[State2["STATE_OPEN"] = 3] = "STATE_OPEN";
  State2[State2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State2;
}({});
var StateSDKType = State;
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseConnectionEnd() {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: void 0,
    delayPeriod: BigInt("0")
  };
}
var ConnectionEnd = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.delayPeriod.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32();
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = BigInt(reader.uint64().toString());
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map((e) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : void 0);
    } else {
      obj.versions = [];
    }
    message.state !== void 0 && (obj.state = stateToJSON(message.state));
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    message.delayPeriod !== void 0 && (obj.delayPeriod = (message.delayPeriod || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$clientId, _object$versions, _object$state;
    const message = createBaseConnectionEnd();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.versions = ((_object$versions = object.versions) === null || _object$versions === void 0 ? void 0 : _object$versions.map((e) => Version.fromPartial(e))) || [];
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    return message;
  }
};
function createBaseIdentifiedConnection() {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: void 0,
    delayPeriod: BigInt("0")
  };
}
var IdentifiedConnection = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(48).uint64(import_long.default.fromString(message.delayPeriod.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32();
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = BigInt(reader.uint64().toString());
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
      id: isSet(object.id) ? String(object.id) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map((e) => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : void 0,
      delayPeriod: isSet(object.delayPeriod) ? BigInt(object.delayPeriod.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = message.id);
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toJSON(e) : void 0);
    } else {
      obj.versions = [];
    }
    message.state !== void 0 && (obj.state = stateToJSON(message.state));
    message.counterparty !== void 0 && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : void 0);
    message.delayPeriod !== void 0 && (obj.delayPeriod = (message.delayPeriod || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$id, _object$clientId2, _object$versions2, _object$state2;
    const message = createBaseIdentifiedConnection();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.versions = ((_object$versions2 = object.versions) === null || _object$versions2 === void 0 ? void 0 : _object$versions2.map((e) => Version.fromPartial(e))) || [];
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    return message;
  }
};
function createBaseCounterparty() {
  return {
    clientId: "",
    connectionId: "",
    prefix: void 0
  };
}
var Counterparty = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== void 0) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    message.connectionId !== void 0 && (obj.connectionId = message.connectionId);
    message.prefix !== void 0 && (obj.prefix = message.prefix ? MerklePrefix.toJSON(message.prefix) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$clientId3, _object$connectionId;
    const message = createBaseCounterparty();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.prefix = object.prefix !== void 0 && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : void 0;
    return message;
  }
};
function createBaseClientPaths() {
  return {
    paths: []
  };
}
var ClientPaths = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.paths) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
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
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$paths;
    const message = createBaseClientPaths();
    message.paths = ((_object$paths = object.paths) === null || _object$paths === void 0 ? void 0 : _object$paths.map((e) => e)) || [];
    return message;
  }
};
function createBaseConnectionPaths() {
  return {
    clientId: "",
    paths: []
  };
}
var ConnectionPaths = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.clientId !== void 0 && (obj.clientId = message.clientId);
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$clientId4, _object$paths2;
    const message = createBaseConnectionPaths();
    message.clientId = (_object$clientId4 = object.clientId) !== null && _object$clientId4 !== void 0 ? _object$clientId4 : "";
    message.paths = ((_object$paths2 = object.paths) === null || _object$paths2 === void 0 ? void 0 : _object$paths2.map((e) => e)) || [];
    return message;
  }
};
function createBaseVersion() {
  return {
    identifier: "",
    features: []
  };
}
var Version = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
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
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.identifier !== void 0 && (obj.identifier = message.identifier);
    if (message.features) {
      obj.features = message.features.map((e) => e);
    } else {
      obj.features = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$identifier, _object$features;
    const message = createBaseVersion();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.features = ((_object$features = object.features) === null || _object$features === void 0 ? void 0 : _object$features.map((e) => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    maxExpectedTimePerBlock: BigInt("0")
  };
}
var Params = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.maxExpectedTimePerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.maxExpectedTimePerBlock.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExpectedTimePerBlock = BigInt(reader.uint64().toString());
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
      maxExpectedTimePerBlock: isSet(object.maxExpectedTimePerBlock) ? BigInt(object.maxExpectedTimePerBlock.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxExpectedTimePerBlock !== void 0 && (obj.maxExpectedTimePerBlock = (message.maxExpectedTimePerBlock || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.maxExpectedTimePerBlock = object.maxExpectedTimePerBlock !== void 0 && object.maxExpectedTimePerBlock !== null ? BigInt(object.maxExpectedTimePerBlock.toString()) : BigInt("0");
    return message;
  }
};

export {
  ProofSpec,
  proofs_exports,
  MerkleRoot,
  commitment_exports,
  ConnectionEnd,
  IdentifiedConnection,
  Counterparty,
  ConnectionPaths,
  Version,
  Params,
  connection_exports
};
//# sourceMappingURL=chunk-IBRIQSA5.js.map
