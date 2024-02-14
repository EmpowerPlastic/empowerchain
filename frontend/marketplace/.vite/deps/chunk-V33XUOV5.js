import {
  Any
} from "./chunk-5CF6M437.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/auth/v1beta1/auth.js
var auth_exports = {};
__export(auth_exports, {
  BaseAccount: () => BaseAccount,
  ModuleAccount: () => ModuleAccount,
  ModuleCredential: () => ModuleCredential,
  Params: () => Params
});
var _m0 = __toESM(require_minimal());
function createBaseBaseAccount() {
  return {
    address: "",
    pubKey: void 0,
    accountNumber: BigInt("0"),
    sequence: BigInt("0")
  };
}
var BaseAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== void 0) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.accountNumber.toString()));
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.sequence = BigInt(reader.uint64().toString());
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
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : void 0,
      accountNumber: isSet(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt("0"),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.pubKey !== void 0 && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : void 0);
    message.accountNumber !== void 0 && (obj.accountNumber = (message.accountNumber || BigInt("0")).toString());
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseBaseAccount();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? Any.fromPartial(object.pubKey) : void 0;
    message.accountNumber = object.accountNumber !== void 0 && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt("0");
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseModuleAccount() {
  return {
    baseAccount: void 0,
    name: "",
    permissions: []
  };
}
var ModuleAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseAccount !== void 0) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
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
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : void 0,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseAccount !== void 0 && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : void 0);
    message.name !== void 0 && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$permissions;
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== void 0 && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : void 0;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.permissions = ((_object$permissions = object.permissions) === null || _object$permissions === void 0 ? void 0 : _object$permissions.map((e) => e)) || [];
    return message;
  }
};
function createBaseModuleCredential() {
  return {
    moduleName: "",
    derivationKeys: []
  };
}
var ModuleCredential = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.derivationKeys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.derivationKeys.push(reader.bytes());
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
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      derivationKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.derivationKeys) ? object.derivationKeys.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.moduleName !== void 0 && (obj.moduleName = message.moduleName);
    if (message.derivationKeys) {
      obj.derivationKeys = message.derivationKeys.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.derivationKeys = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$moduleName, _object$derivationKey;
    const message = createBaseModuleCredential();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    message.derivationKeys = ((_object$derivationKey = object.derivationKeys) === null || _object$derivationKey === void 0 ? void 0 : _object$derivationKey.map((e) => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    maxMemoCharacters: BigInt("0"),
    txSigLimit: BigInt("0"),
    txSizeCostPerByte: BigInt("0"),
    sigVerifyCostEd25519: BigInt("0"),
    sigVerifyCostSecp256k1: BigInt("0")
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.maxMemoCharacters !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.maxMemoCharacters.toString()));
    }
    if (message.txSigLimit !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.txSigLimit.toString()));
    }
    if (message.txSizeCostPerByte !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.txSizeCostPerByte.toString()));
    }
    if (message.sigVerifyCostEd25519 !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.sigVerifyCostEd25519.toString()));
    }
    if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.sigVerifyCostSecp256k1.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.txSigLimit = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.txSizeCostPerByte = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.sigVerifyCostEd25519 = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = BigInt(reader.uint64().toString());
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
      maxMemoCharacters: isSet(object.maxMemoCharacters) ? BigInt(object.maxMemoCharacters.toString()) : BigInt("0"),
      txSigLimit: isSet(object.txSigLimit) ? BigInt(object.txSigLimit.toString()) : BigInt("0"),
      txSizeCostPerByte: isSet(object.txSizeCostPerByte) ? BigInt(object.txSizeCostPerByte.toString()) : BigInt("0"),
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519) ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt("0"),
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1) ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxMemoCharacters !== void 0 && (obj.maxMemoCharacters = (message.maxMemoCharacters || BigInt("0")).toString());
    message.txSigLimit !== void 0 && (obj.txSigLimit = (message.txSigLimit || BigInt("0")).toString());
    message.txSizeCostPerByte !== void 0 && (obj.txSizeCostPerByte = (message.txSizeCostPerByte || BigInt("0")).toString());
    message.sigVerifyCostEd25519 !== void 0 && (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || BigInt("0")).toString());
    message.sigVerifyCostSecp256k1 !== void 0 && (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.maxMemoCharacters = object.maxMemoCharacters !== void 0 && object.maxMemoCharacters !== null ? BigInt(object.maxMemoCharacters.toString()) : BigInt("0");
    message.txSigLimit = object.txSigLimit !== void 0 && object.txSigLimit !== null ? BigInt(object.txSigLimit.toString()) : BigInt("0");
    message.txSizeCostPerByte = object.txSizeCostPerByte !== void 0 && object.txSizeCostPerByte !== null ? BigInt(object.txSizeCostPerByte.toString()) : BigInt("0");
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== void 0 && object.sigVerifyCostEd25519 !== null ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt("0");
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== void 0 && object.sigVerifyCostSecp256k1 !== null ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt("0");
    return message;
  }
};

export {
  BaseAccount,
  Params,
  auth_exports
};
//# sourceMappingURL=chunk-V33XUOV5.js.map
