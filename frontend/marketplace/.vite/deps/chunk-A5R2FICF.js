import {
  Event
} from "./chunk-KDGHQXW3.js";
import {
  Block
} from "./chunk-K2MBWG3Y.js";
import {
  BlockID
} from "./chunk-OOMJJQEG.js";
import {
  Any
} from "./chunk-5CF6M437.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
import {
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/service.rpc.Service.js
var service_rpc_Service_exports = {};
__export(service_rpc_Service_exports, {
  ServiceClientImpl: () => ServiceClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m06 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/service.js
var service_exports = {};
__export(service_exports, {
  BroadcastMode: () => BroadcastMode,
  BroadcastModeSDKType: () => BroadcastModeSDKType,
  BroadcastTxRequest: () => BroadcastTxRequest,
  BroadcastTxResponse: () => BroadcastTxResponse,
  GetBlockWithTxsRequest: () => GetBlockWithTxsRequest,
  GetBlockWithTxsResponse: () => GetBlockWithTxsResponse,
  GetTxRequest: () => GetTxRequest,
  GetTxResponse: () => GetTxResponse,
  GetTxsEventRequest: () => GetTxsEventRequest,
  GetTxsEventResponse: () => GetTxsEventResponse,
  OrderBy: () => OrderBy,
  OrderBySDKType: () => OrderBySDKType,
  SimulateRequest: () => SimulateRequest,
  SimulateResponse: () => SimulateResponse,
  TxDecodeAminoRequest: () => TxDecodeAminoRequest,
  TxDecodeAminoResponse: () => TxDecodeAminoResponse,
  TxDecodeRequest: () => TxDecodeRequest,
  TxDecodeResponse: () => TxDecodeResponse,
  TxEncodeAminoRequest: () => TxEncodeAminoRequest,
  TxEncodeAminoResponse: () => TxEncodeAminoResponse,
  TxEncodeRequest: () => TxEncodeRequest,
  TxEncodeResponse: () => TxEncodeResponse,
  broadcastModeFromJSON: () => broadcastModeFromJSON,
  broadcastModeToJSON: () => broadcastModeToJSON,
  orderByFromJSON: () => orderByFromJSON,
  orderByToJSON: () => orderByToJSON
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  AuthInfo: () => AuthInfo,
  AuxSignerData: () => AuxSignerData,
  Fee: () => Fee,
  ModeInfo: () => ModeInfo,
  ModeInfo_Multi: () => ModeInfo_Multi,
  ModeInfo_Single: () => ModeInfo_Single,
  SignDoc: () => SignDoc,
  SignDocDirectAux: () => SignDocDirectAux,
  SignerInfo: () => SignerInfo,
  Tip: () => Tip,
  Tx: () => Tx,
  TxBody: () => TxBody,
  TxRaw: () => TxRaw
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/signing/v1beta1/signing.js
var signing_exports = {};
__export(signing_exports, {
  SignMode: () => SignMode,
  SignModeSDKType: () => SignModeSDKType,
  SignatureDescriptor: () => SignatureDescriptor,
  SignatureDescriptor_Data: () => SignatureDescriptor_Data,
  SignatureDescriptor_Data_Multi: () => SignatureDescriptor_Data_Multi,
  SignatureDescriptor_Data_Single: () => SignatureDescriptor_Data_Single,
  SignatureDescriptors: () => SignatureDescriptors,
  signModeFromJSON: () => signModeFromJSON,
  signModeToJSON: () => signModeToJSON
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/crypto/multisig/v1beta1/multisig.js
var _m0 = __toESM(require_minimal());
function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}
var CompactBitArray = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;
        case 2:
          message.elems = reader.bytes();
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
      extraBitsStored: isSet(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.extraBitsStored !== void 0 && (obj.extraBitsStored = Math.round(message.extraBitsStored));
    message.elems !== void 0 && (obj.elems = base64FromBytes(message.elems !== void 0 ? message.elems : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$extraBitsStor, _object$elems;
    const message = createBaseCompactBitArray();
    message.extraBitsStored = (_object$extraBitsStor = object.extraBitsStored) !== null && _object$extraBitsStor !== void 0 ? _object$extraBitsStor : 0;
    message.elems = (_object$elems = object.elems) !== null && _object$elems !== void 0 ? _object$elems : new Uint8Array();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/signing/v1beta1/signing.js
var _m02 = __toESM(require_minimal());
var SignMode = function(SignMode2) {
  SignMode2[SignMode2["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  SignMode2[SignMode2["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  SignMode2[SignMode2["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  SignMode2[SignMode2["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
  SignMode2[SignMode2["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignMode2[SignMode2["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
  SignMode2[SignMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignMode2;
}({});
var SignModeSDKType = SignMode;
function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;
    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    case 191:
    case "SIGN_MODE_EIP_191":
      return SignMode.SIGN_MODE_EIP_191;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
function signModeToJSON(object) {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";
    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";
    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";
    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";
    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case SignMode.SIGN_MODE_EIP_191:
      return "SIGN_MODE_EIP_191";
    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseSignatureDescriptors() {
  return {
    signatures: []
  };
}
var SignatureDescriptors = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
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
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => SignatureDescriptor.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignatureDescriptor.toJSON(e) : void 0);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$signatures;
    const message = createBaseSignatureDescriptors();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map((e) => SignatureDescriptor.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSignatureDescriptor() {
  return {
    publicKey: void 0,
    data: void 0,
    sequence: BigInt("0")
  };
}
var SignatureDescriptor = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.publicKey !== void 0) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;
        case 3:
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
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : void 0,
      data: isSet(object.data) ? SignatureDescriptor_Data.fromJSON(object.data) : void 0,
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.publicKey !== void 0 && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : void 0);
    message.data !== void 0 && (obj.data = message.data ? SignatureDescriptor_Data.toJSON(message.data) : void 0);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? Any.fromPartial(object.publicKey) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : void 0;
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseSignatureDescriptor_Data() {
  return {
    single: void 0,
    multi: void 0
  };
}
var SignatureDescriptor_Data = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.single !== void 0) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== void 0) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
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
      single: isSet(object.single) ? SignatureDescriptor_Data_Single.fromJSON(object.single) : void 0,
      multi: isSet(object.multi) ? SignatureDescriptor_Data_Multi.fromJSON(object.multi) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.single !== void 0 && (obj.single = message.single ? SignatureDescriptor_Data_Single.toJSON(message.single) : void 0);
    message.multi !== void 0 && (obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toJSON(message.multi) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== void 0 && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : void 0;
    message.multi = object.multi !== void 0 && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : void 0;
    return message;
  }
};
function createBaseSignatureDescriptor_Data_Single() {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}
var SignatureDescriptor_Data_Single = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;
        case 2:
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
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.mode !== void 0 && (obj.mode = signModeToJSON(message.mode));
    message.signature !== void 0 && (obj.signature = base64FromBytes(message.signature !== void 0 ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$mode, _object$signature;
    const message = createBaseSignatureDescriptor_Data_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  }
};
function createBaseSignatureDescriptor_Data_Multi() {
  return {
    bitarray: void 0,
    signatures: []
  };
}
var SignatureDescriptor_Data_Multi = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.bitarray !== void 0) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
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
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : void 0,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => SignatureDescriptor_Data.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.bitarray !== void 0 && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : void 0);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignatureDescriptor_Data.toJSON(e) : void 0);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$signatures2;
    const message = createBaseSignatureDescriptor_Data_Multi();
    message.bitarray = object.bitarray !== void 0 && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : void 0;
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map((e) => SignatureDescriptor_Data.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/tx.js
var _m03 = __toESM(require_minimal());
function createBaseTx() {
  return {
    body: void 0,
    authInfo: void 0,
    signatures: []
  };
}
var Tx = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.body !== void 0) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.authInfo !== void 0) {
      AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.authInfo = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      body: isSet(object.body) ? TxBody.fromJSON(object.body) : void 0,
      authInfo: isSet(object.authInfo) ? AuthInfo.fromJSON(object.authInfo) : void 0,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.body !== void 0 && (obj.body = message.body ? TxBody.toJSON(message.body) : void 0);
    message.authInfo !== void 0 && (obj.authInfo = message.authInfo ? AuthInfo.toJSON(message.authInfo) : void 0);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$signatures;
    const message = createBaseTx();
    message.body = object.body !== void 0 && object.body !== null ? TxBody.fromPartial(object.body) : void 0;
    message.authInfo = object.authInfo !== void 0 && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : void 0;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map((e) => e)) || [];
    return message;
  }
};
function createBaseTxRaw() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}
var TxRaw = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
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
      bodyBytes: isSet(object.bodyBytes) ? bytesFromBase64(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet(object.authInfoBytes) ? bytesFromBase64(object.authInfoBytes) : new Uint8Array(),
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.bodyBytes !== void 0 && (obj.bodyBytes = base64FromBytes(message.bodyBytes !== void 0 ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== void 0 && (obj.authInfoBytes = base64FromBytes(message.authInfoBytes !== void 0 ? message.authInfoBytes : new Uint8Array()));
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== void 0 ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$bodyBytes, _object$authInfoBytes, _object$signatures2;
    const message = createBaseTxRaw();
    message.bodyBytes = (_object$bodyBytes = object.bodyBytes) !== null && _object$bodyBytes !== void 0 ? _object$bodyBytes : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes = object.authInfoBytes) !== null && _object$authInfoBytes !== void 0 ? _object$authInfoBytes : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map((e) => e)) || [];
    return message;
  }
};
function createBaseSignDoc() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: BigInt("0")
  };
}
var SignDoc = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.accountNumber.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = BigInt(reader.uint64().toString());
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
      bodyBytes: isSet(object.bodyBytes) ? bytesFromBase64(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: isSet(object.authInfoBytes) ? bytesFromBase64(object.authInfoBytes) : new Uint8Array(),
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      accountNumber: isSet(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.bodyBytes !== void 0 && (obj.bodyBytes = base64FromBytes(message.bodyBytes !== void 0 ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== void 0 && (obj.authInfoBytes = base64FromBytes(message.authInfoBytes !== void 0 ? message.authInfoBytes : new Uint8Array()));
    message.chainId !== void 0 && (obj.chainId = message.chainId);
    message.accountNumber !== void 0 && (obj.accountNumber = (message.accountNumber || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$bodyBytes2, _object$authInfoBytes2, _object$chainId;
    const message = createBaseSignDoc();
    message.bodyBytes = (_object$bodyBytes2 = object.bodyBytes) !== null && _object$bodyBytes2 !== void 0 ? _object$bodyBytes2 : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes2 = object.authInfoBytes) !== null && _object$authInfoBytes2 !== void 0 ? _object$authInfoBytes2 : new Uint8Array();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.accountNumber = object.accountNumber !== void 0 && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt("0");
    return message;
  }
};
function createBaseSignDocDirectAux() {
  return {
    bodyBytes: new Uint8Array(),
    publicKey: void 0,
    chainId: "",
    accountNumber: BigInt("0"),
    sequence: BigInt("0"),
    tip: void 0
  };
}
var SignDocDirectAux = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.publicKey !== void 0) {
      Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.accountNumber.toString()));
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    if (message.tip !== void 0) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.sequence = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
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
      bodyBytes: isSet(object.bodyBytes) ? bytesFromBase64(object.bodyBytes) : new Uint8Array(),
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : void 0,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      accountNumber: isSet(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt("0"),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0"),
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.bodyBytes !== void 0 && (obj.bodyBytes = base64FromBytes(message.bodyBytes !== void 0 ? message.bodyBytes : new Uint8Array()));
    message.publicKey !== void 0 && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : void 0);
    message.chainId !== void 0 && (obj.chainId = message.chainId);
    message.accountNumber !== void 0 && (obj.accountNumber = (message.accountNumber || BigInt("0")).toString());
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    message.tip !== void 0 && (obj.tip = message.tip ? Tip.toJSON(message.tip) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$bodyBytes3, _object$chainId2;
    const message = createBaseSignDocDirectAux();
    message.bodyBytes = (_object$bodyBytes3 = object.bodyBytes) !== null && _object$bodyBytes3 !== void 0 ? _object$bodyBytes3 : new Uint8Array();
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? Any.fromPartial(object.publicKey) : void 0;
    message.chainId = (_object$chainId2 = object.chainId) !== null && _object$chainId2 !== void 0 ? _object$chainId2 : "";
    message.accountNumber = object.accountNumber !== void 0 && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt("0");
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    message.tip = object.tip !== void 0 && object.tip !== null ? Tip.fromPartial(object.tip) : void 0;
    return message;
  }
};
function createBaseTxBody() {
  return {
    messages: [],
    memo: "",
    timeoutHeight: BigInt("0"),
    extensionOptions: [],
    nonCriticalExtensionOptions: []
  };
}
var TxBody = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.timeoutHeight.toString()));
    }
    for (const v of message.extensionOptions) {
      Any.encode(v, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.nonCriticalExtensionOptions) {
      Any.encode(v, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeoutHeight = BigInt(reader.uint64().toString());
          break;
        case 1023:
          message.extensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? BigInt(object.timeoutHeight.toString()) : BigInt("0"),
      extensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensionOptions) ? object.extensionOptions.map((e) => Any.fromJSON(e)) : [],
      nonCriticalExtensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.nonCriticalExtensionOptions) ? object.nonCriticalExtensionOptions.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.messages = [];
    }
    message.memo !== void 0 && (obj.memo = message.memo);
    message.timeoutHeight !== void 0 && (obj.timeoutHeight = (message.timeoutHeight || BigInt("0")).toString());
    if (message.extensionOptions) {
      obj.extensionOptions = message.extensionOptions.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.extensionOptions = [];
    }
    if (message.nonCriticalExtensionOptions) {
      obj.nonCriticalExtensionOptions = message.nonCriticalExtensionOptions.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.nonCriticalExtensionOptions = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$messages, _object$memo, _object$extensionOpti, _object$nonCriticalEx;
    const message = createBaseTxBody();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map((e) => Any.fromPartial(e))) || [];
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt("0");
    message.extensionOptions = ((_object$extensionOpti = object.extensionOptions) === null || _object$extensionOpti === void 0 ? void 0 : _object$extensionOpti.map((e) => Any.fromPartial(e))) || [];
    message.nonCriticalExtensionOptions = ((_object$nonCriticalEx = object.nonCriticalExtensionOptions) === null || _object$nonCriticalEx === void 0 ? void 0 : _object$nonCriticalEx.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAuthInfo() {
  return {
    signerInfos: [],
    fee: void 0,
    tip: void 0
  };
}
var AuthInfo = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.signerInfos) {
      SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== void 0) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== void 0) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
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
      signerInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signerInfos) ? object.signerInfos.map((e) => SignerInfo.fromJSON(e)) : [],
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : void 0,
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map((e) => e ? SignerInfo.toJSON(e) : void 0);
    } else {
      obj.signerInfos = [];
    }
    message.fee !== void 0 && (obj.fee = message.fee ? Fee.toJSON(message.fee) : void 0);
    message.tip !== void 0 && (obj.tip = message.tip ? Tip.toJSON(message.tip) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$signerInfos;
    const message = createBaseAuthInfo();
    message.signerInfos = ((_object$signerInfos = object.signerInfos) === null || _object$signerInfos === void 0 ? void 0 : _object$signerInfos.map((e) => SignerInfo.fromPartial(e))) || [];
    message.fee = object.fee !== void 0 && object.fee !== null ? Fee.fromPartial(object.fee) : void 0;
    message.tip = object.tip !== void 0 && object.tip !== null ? Tip.fromPartial(object.tip) : void 0;
    return message;
  }
};
function createBaseSignerInfo() {
  return {
    publicKey: void 0,
    modeInfo: void 0,
    sequence: BigInt("0")
  };
}
var SignerInfo = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.publicKey !== void 0) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.modeInfo !== void 0) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.sequence.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
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
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : void 0,
      modeInfo: isSet(object.modeInfo) ? ModeInfo.fromJSON(object.modeInfo) : void 0,
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.publicKey !== void 0 && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : void 0);
    message.modeInfo !== void 0 && (obj.modeInfo = message.modeInfo ? ModeInfo.toJSON(message.modeInfo) : void 0);
    message.sequence !== void 0 && (obj.sequence = (message.sequence || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? Any.fromPartial(object.publicKey) : void 0;
    message.modeInfo = object.modeInfo !== void 0 && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : void 0;
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt("0");
    return message;
  }
};
function createBaseModeInfo() {
  return {
    single: void 0,
    multi: void 0
  };
}
var ModeInfo = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.single !== void 0) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== void 0) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
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
      single: isSet(object.single) ? ModeInfo_Single.fromJSON(object.single) : void 0,
      multi: isSet(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.single !== void 0 && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : void 0);
    message.multi !== void 0 && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseModeInfo();
    message.single = object.single !== void 0 && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : void 0;
    message.multi = object.multi !== void 0 && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : void 0;
    return message;
  }
};
function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}
var ModeInfo_Single = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
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
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.mode !== void 0 && (obj.mode = signModeToJSON(message.mode));
    return obj;
  },
  fromPartial(object) {
    var _object$mode;
    const message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseModeInfo_Multi() {
  return {
    bitarray: void 0,
    modeInfos: []
  };
}
var ModeInfo_Multi = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.bitarray !== void 0) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modeInfos) {
      ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
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
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : void 0,
      modeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.modeInfos) ? object.modeInfos.map((e) => ModeInfo.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.bitarray !== void 0 && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : void 0);
    if (message.modeInfos) {
      obj.modeInfos = message.modeInfos.map((e) => e ? ModeInfo.toJSON(e) : void 0);
    } else {
      obj.modeInfos = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$modeInfos;
    const message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== void 0 && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : void 0;
    message.modeInfos = ((_object$modeInfos = object.modeInfos) === null || _object$modeInfos === void 0 ? void 0 : _object$modeInfos.map((e) => ModeInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFee() {
  return {
    amount: [],
    gasLimit: BigInt("0"),
    payer: "",
    granter: ""
  };
}
var Fee = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.gasLimit.toString()));
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gasLimit = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
      gasLimit: isSet(object.gasLimit) ? BigInt(object.gasLimit.toString()) : BigInt("0"),
      payer: isSet(object.payer) ? String(object.payer) : "",
      granter: isSet(object.granter) ? String(object.granter) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    message.gasLimit !== void 0 && (obj.gasLimit = (message.gasLimit || BigInt("0")).toString());
    message.payer !== void 0 && (obj.payer = message.payer);
    message.granter !== void 0 && (obj.granter = message.granter);
    return obj;
  },
  fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;
    const message = createBaseFee();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map((e) => Coin.fromPartial(e))) || [];
    message.gasLimit = object.gasLimit !== void 0 && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt("0");
    message.payer = (_object$payer = object.payer) !== null && _object$payer !== void 0 ? _object$payer : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    return message;
  }
};
function createBaseTip() {
  return {
    amount: [],
    tipper: ""
  };
}
var Tip = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
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
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
      tipper: isSet(object.tipper) ? String(object.tipper) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.amount = [];
    }
    message.tipper !== void 0 && (obj.tipper = message.tipper);
    return obj;
  },
  fromPartial(object) {
    var _object$amount2, _object$tipper;
    const message = createBaseTip();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map((e) => Coin.fromPartial(e))) || [];
    message.tipper = (_object$tipper = object.tipper) !== null && _object$tipper !== void 0 ? _object$tipper : "";
    return message;
  }
};
function createBaseAuxSignerData() {
  return {
    address: "",
    signDoc: void 0,
    mode: 0,
    sig: new Uint8Array()
  };
}
var AuxSignerData = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signDoc !== void 0) {
      SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : new _m03.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32();
          break;
        case 4:
          message.sig = reader.bytes();
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
      signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : void 0,
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.signDoc !== void 0 && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : void 0);
    message.mode !== void 0 && (obj.mode = signModeToJSON(message.mode));
    message.sig !== void 0 && (obj.sig = base64FromBytes(message.sig !== void 0 ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$mode2, _object$sig;
    const message = createBaseAuxSignerData();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.signDoc = object.signDoc !== void 0 && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : void 0;
    message.mode = (_object$mode2 = object.mode) !== null && _object$mode2 !== void 0 ? _object$mode2 : 0;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/abci/v1beta1/abci.js
var abci_exports = {};
__export(abci_exports, {
  ABCIMessageLog: () => ABCIMessageLog,
  Attribute: () => Attribute,
  GasInfo: () => GasInfo,
  MsgData: () => MsgData,
  Result: () => Result,
  SearchTxsResult: () => SearchTxsResult,
  SimulationResponse: () => SimulationResponse,
  StringEvent: () => StringEvent,
  TxMsgData: () => TxMsgData,
  TxResponse: () => TxResponse
});
var _m04 = __toESM(require_minimal());
function createBaseTxResponse() {
  return {
    height: BigInt("0"),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt("0"),
    gasUsed: BigInt("0"),
    tx: void 0,
    timestamp: "",
    events: []
  };
}
var TxResponse = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(import_long.default.fromString(message.gasWanted.toString()));
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(import_long.default.fromString(message.gasUsed.toString()));
    }
    if (message.tx !== void 0) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = BigInt(reader.int64().toString());
          break;
        case 10:
          message.gasUsed = BigInt(reader.int64().toString());
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
      logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map((e) => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt("0"),
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt("0"),
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : void 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.txhash !== void 0 && (obj.txhash = message.txhash);
    message.codespace !== void 0 && (obj.codespace = message.codespace);
    message.code !== void 0 && (obj.code = Math.round(message.code));
    message.data !== void 0 && (obj.data = message.data);
    message.rawLog !== void 0 && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? ABCIMessageLog.toJSON(e) : void 0);
    } else {
      obj.logs = [];
    }
    message.info !== void 0 && (obj.info = message.info);
    message.gasWanted !== void 0 && (obj.gasWanted = (message.gasWanted || BigInt("0")).toString());
    message.gasUsed !== void 0 && (obj.gasUsed = (message.gasUsed || BigInt("0")).toString());
    message.tx !== void 0 && (obj.tx = message.tx ? Any.toJSON(message.tx) : void 0);
    message.timestamp !== void 0 && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txhash, _object$codespace, _object$code, _object$data, _object$rawLog, _object$logs, _object$info, _object$timestamp, _object$events;
    const message = createBaseTxResponse();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.txhash = (_object$txhash = object.txhash) !== null && _object$txhash !== void 0 ? _object$txhash : "";
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : "";
    message.rawLog = (_object$rawLog = object.rawLog) !== null && _object$rawLog !== void 0 ? _object$rawLog : "";
    message.logs = ((_object$logs = object.logs) === null || _object$logs === void 0 ? void 0 : _object$logs.map((e) => ABCIMessageLog.fromPartial(e))) || [];
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt("0");
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt("0");
    message.tx = object.tx !== void 0 && object.tx !== null ? Any.fromPartial(object.tx) : void 0;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : "";
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map((e) => Event.fromPartial(e))) || [];
    return message;
  }
};
function createBaseABCIMessageLog() {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
var ABCIMessageLog = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
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
      msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => StringEvent.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.msgIndex !== void 0 && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== void 0 && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) => e ? StringEvent.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$msgIndex, _object$log, _object$events2;
    const message = createBaseABCIMessageLog();
    message.msgIndex = (_object$msgIndex = object.msgIndex) !== null && _object$msgIndex !== void 0 ? _object$msgIndex : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map((e) => StringEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
var StringEvent = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map((e) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.type !== void 0 && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : void 0);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$attributes;
    const message = createBaseStringEvent();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map((e) => Attribute.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
var Attribute = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
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
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$value;
    const message = createBaseAttribute();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
function createBaseGasInfo() {
  return {
    gasWanted: BigInt("0"),
    gasUsed: BigInt("0")
  };
}
var GasInfo = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.gasWanted.toString()));
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.gasUsed.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.gasUsed = BigInt(reader.uint64().toString());
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
      gasWanted: isSet(object.gasWanted) ? BigInt(object.gasWanted.toString()) : BigInt("0"),
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasWanted !== void 0 && (obj.gasWanted = (message.gasWanted || BigInt("0")).toString());
    message.gasUsed !== void 0 && (obj.gasUsed = (message.gasUsed || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGasInfo();
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt("0");
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt("0");
    return message;
  }
};
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: [],
    msgResponses: []
  };
}
var Result = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    message.log !== void 0 && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : void 0);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$data2, _object$log2, _object$events3, _object$msgResponses;
    const message = createBaseResult();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map((e) => Event.fromPartial(e))) || [];
    message.msgResponses = ((_object$msgResponses = object.msgResponses) === null || _object$msgResponses === void 0 ? void 0 : _object$msgResponses.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSimulationResponse() {
  return {
    gasInfo: void 0,
    result: void 0
  };
}
var SimulationResponse = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.gasInfo !== void 0) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== void 0) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
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
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : void 0,
      result: isSet(object.result) ? Result.fromJSON(object.result) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasInfo !== void 0 && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : void 0);
    message.result !== void 0 && (obj.result = message.result ? Result.toJSON(message.result) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSimulationResponse();
    message.gasInfo = object.gasInfo !== void 0 && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : void 0;
    message.result = object.result !== void 0 && object.result !== null ? Result.fromPartial(object.result) : void 0;
    return message;
  }
};
function createBaseMsgData() {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
var MsgData = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
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
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.msgType !== void 0 && (obj.msgType = message.msgType);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$msgType, _object$data3;
    const message = createBaseMsgData();
    message.msgType = (_object$msgType = object.msgType) !== null && _object$msgType !== void 0 ? _object$msgType : "";
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseTxMsgData() {
  return {
    data: [],
    msgResponses: []
  };
}
var TxMsgData = {
  encode(message, writer = _m04.Writer.create()) {
    for (const v of message.data) {
      MsgData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
      data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => MsgData.fromJSON(e)) : [],
      msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map((e) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? MsgData.toJSON(e) : void 0);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : void 0);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$data4, _object$msgResponses2;
    const message = createBaseTxMsgData();
    message.data = ((_object$data4 = object.data) === null || _object$data4 === void 0 ? void 0 : _object$data4.map((e) => MsgData.fromPartial(e))) || [];
    message.msgResponses = ((_object$msgResponses2 = object.msgResponses) === null || _object$msgResponses2 === void 0 ? void 0 : _object$msgResponses2.map((e) => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSearchTxsResult() {
  return {
    totalCount: BigInt("0"),
    count: BigInt("0"),
    pageNumber: BigInt("0"),
    pageTotal: BigInt("0"),
    limit: BigInt("0"),
    txs: []
  };
}
var SearchTxsResult = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.totalCount.toString()));
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.count.toString()));
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.pageNumber.toString()));
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.pageTotal.toString()));
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.limit.toString()));
    }
    for (const v of message.txs) {
      TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : new _m04.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.count = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.pageNumber = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.pageTotal = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.limit = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
      totalCount: isSet(object.totalCount) ? BigInt(object.totalCount.toString()) : BigInt("0"),
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt("0"),
      pageNumber: isSet(object.pageNumber) ? BigInt(object.pageNumber.toString()) : BigInt("0"),
      pageTotal: isSet(object.pageTotal) ? BigInt(object.pageTotal.toString()) : BigInt("0"),
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt("0"),
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => TxResponse.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.totalCount !== void 0 && (obj.totalCount = (message.totalCount || BigInt("0")).toString());
    message.count !== void 0 && (obj.count = (message.count || BigInt("0")).toString());
    message.pageNumber !== void 0 && (obj.pageNumber = (message.pageNumber || BigInt("0")).toString());
    message.pageTotal !== void 0 && (obj.pageTotal = (message.pageTotal || BigInt("0")).toString());
    message.limit !== void 0 && (obj.limit = (message.limit || BigInt("0")).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? TxResponse.toJSON(e) : void 0);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$txs;
    const message = createBaseSearchTxsResult();
    message.totalCount = object.totalCount !== void 0 && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt("0");
    message.count = object.count !== void 0 && object.count !== null ? BigInt(object.count.toString()) : BigInt("0");
    message.pageNumber = object.pageNumber !== void 0 && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt("0");
    message.pageTotal = object.pageTotal !== void 0 && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt("0");
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt("0");
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map((e) => TxResponse.fromPartial(e))) || [];
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/service.js
var _m05 = __toESM(require_minimal());
var OrderBy = function(OrderBy2) {
  OrderBy2[OrderBy2["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy2[OrderBy2["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy2[OrderBy2["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy2[OrderBy2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy2;
}({});
var OrderBySDKType = OrderBy;
function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var BroadcastMode = function(BroadcastMode2) {
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode2[BroadcastMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode2;
}({});
var BroadcastModeSDKType = BroadcastMode;
function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: void 0,
    orderBy: 0,
    page: BigInt("0"),
    limit: BigInt("0")
  };
}
var GetTxsEventRequest = {
  encode(message, writer = _m05.Writer.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (message.page !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.page.toString()));
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(import_long.default.fromString(message.limit.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
          break;
        case 4:
          message.page = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.limit = BigInt(reader.uint64().toString());
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0,
      orderBy: isSet(object.orderBy) ? orderByFromJSON(object.orderBy) : 0,
      page: isSet(object.page) ? BigInt(object.page.toString()) : BigInt("0"),
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.events) {
      obj.events = message.events.map((e) => e);
    } else {
      obj.events = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    message.orderBy !== void 0 && (obj.orderBy = orderByToJSON(message.orderBy));
    message.page !== void 0 && (obj.page = (message.page || BigInt("0")).toString());
    message.limit !== void 0 && (obj.limit = (message.limit || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$events, _object$orderBy;
    const message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map((e) => e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.orderBy = (_object$orderBy = object.orderBy) !== null && _object$orderBy !== void 0 ? _object$orderBy : 0;
    message.page = object.page !== void 0 && object.page !== null ? BigInt(object.page.toString()) : BigInt("0");
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt("0");
    return message;
  }
};
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    txResponses: [],
    pagination: void 0,
    total: BigInt("0")
  };
}
var GetTxsEventResponse = {
  encode(message, writer = _m05.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(32).uint64(import_long.default.fromString(message.total.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = BigInt(reader.uint64().toString());
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
      txResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.txResponses) ? object.txResponses.map((e) => TxResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0,
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? Tx.toJSON(e) : void 0);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map((e) => e ? TxResponse.toJSON(e) : void 0);
    } else {
      obj.txResponses = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    message.total !== void 0 && (obj.total = (message.total || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$txs, _object$txResponses;
    const message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map((e) => Tx.fromPartial(e))) || [];
    message.txResponses = ((_object$txResponses = object.txResponses) === null || _object$txResponses === void 0 ? void 0 : _object$txResponses.map((e) => TxResponse.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    message.total = object.total !== void 0 && object.total !== null ? BigInt(object.total.toString()) : BigInt("0");
    return message;
  }
};
function createBaseBroadcastTxRequest() {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
var BroadcastTxRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
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
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(),
      mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.txBytes !== void 0 && (obj.txBytes = base64FromBytes(message.txBytes !== void 0 ? message.txBytes : new Uint8Array()));
    message.mode !== void 0 && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes, _object$mode;
    const message = createBaseBroadcastTxRequest();
    message.txBytes = (_object$txBytes = object.txBytes) !== null && _object$txBytes !== void 0 ? _object$txBytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
function createBaseBroadcastTxResponse() {
  return {
    txResponse: void 0
  };
}
var BroadcastTxResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.txResponse !== void 0) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
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
      txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.txResponse !== void 0 && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  }
};
function createBaseSimulateRequest() {
  return {
    tx: void 0,
    txBytes: new Uint8Array()
  };
}
var SimulateRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : void 0,
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = message.tx ? Tx.toJSON(message.tx) : void 0);
    message.txBytes !== void 0 && (obj.txBytes = base64FromBytes(message.txBytes !== void 0 ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes2;
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    message.txBytes = (_object$txBytes2 = object.txBytes) !== null && _object$txBytes2 !== void 0 ? _object$txBytes2 : new Uint8Array();
    return message;
  }
};
function createBaseSimulateResponse() {
  return {
    gasInfo: void 0,
    result: void 0
  };
}
var SimulateResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.gasInfo !== void 0) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== void 0) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
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
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : void 0,
      result: isSet(object.result) ? Result.fromJSON(object.result) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.gasInfo !== void 0 && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : void 0);
    message.result !== void 0 && (obj.result = message.result ? Result.toJSON(message.result) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== void 0 && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : void 0;
    message.result = object.result !== void 0 && object.result !== null ? Result.fromPartial(object.result) : void 0;
    return message;
  }
};
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
var GetTxRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
function createBaseGetTxResponse() {
  return {
    tx: void 0,
    txResponse: void 0
  };
}
var GetTxResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== void 0) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : void 0,
      txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = message.tx ? Tx.toJSON(message.tx) : void 0);
    message.txResponse !== void 0 && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  }
};
function createBaseGetBlockWithTxsRequest() {
  return {
    height: BigInt("0"),
    pagination: void 0
  };
}
var GetBlockWithTxsRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(import_long.default.fromString(message.height.toString()));
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== void 0 && (obj.height = (message.height || BigInt("0")).toString());
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt("0");
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    blockId: void 0,
    block: void 0,
    pagination: void 0
  };
}
var GetBlockWithTxsResponse = {
  encode(message, writer = _m05.Writer.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : void 0,
      block: isSet(object.block) ? Block.fromJSON(object.block) : void 0,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? Tx.toJSON(e) : void 0);
    } else {
      obj.txs = [];
    }
    message.blockId !== void 0 && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : void 0);
    message.block !== void 0 && (obj.block = message.block ? Block.toJSON(message.block) : void 0);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$txs2;
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map((e) => Tx.fromPartial(e))) || [];
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block.fromPartial(object.block) : void 0;
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseTxDecodeRequest() {
  return {
    txBytes: new Uint8Array()
  };
}
var TxDecodeRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
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
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.txBytes !== void 0 && (obj.txBytes = base64FromBytes(message.txBytes !== void 0 ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes3;
    const message = createBaseTxDecodeRequest();
    message.txBytes = (_object$txBytes3 = object.txBytes) !== null && _object$txBytes3 !== void 0 ? _object$txBytes3 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeResponse() {
  return {
    tx: void 0
  };
}
var TxDecodeResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = message.tx ? Tx.toJSON(message.tx) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    return message;
  }
};
function createBaseTxEncodeRequest() {
  return {
    tx: void 0
  };
}
var TxEncodeRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
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
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.tx !== void 0 && (obj.tx = message.tx ? Tx.toJSON(message.tx) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    return message;
  }
};
function createBaseTxEncodeResponse() {
  return {
    txBytes: new Uint8Array()
  };
}
var TxEncodeResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
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
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.txBytes !== void 0 && (obj.txBytes = base64FromBytes(message.txBytes !== void 0 ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$txBytes4;
    const message = createBaseTxEncodeResponse();
    message.txBytes = (_object$txBytes4 = object.txBytes) !== null && _object$txBytes4 !== void 0 ? _object$txBytes4 : new Uint8Array();
    return message;
  }
};
function createBaseTxEncodeAminoRequest() {
  return {
    aminoJson: ""
  };
}
var TxEncodeAminoRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
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
      aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.aminoJson !== void 0 && (obj.aminoJson = message.aminoJson);
    return obj;
  },
  fromPartial(object) {
    var _object$aminoJson;
    const message = createBaseTxEncodeAminoRequest();
    message.aminoJson = (_object$aminoJson = object.aminoJson) !== null && _object$aminoJson !== void 0 ? _object$aminoJson : "";
    return message;
  }
};
function createBaseTxEncodeAminoResponse() {
  return {
    aminoBinary: new Uint8Array()
  };
}
var TxEncodeAminoResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
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
      aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.aminoBinary !== void 0 && (obj.aminoBinary = base64FromBytes(message.aminoBinary !== void 0 ? message.aminoBinary : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$aminoBinary;
    const message = createBaseTxEncodeAminoResponse();
    message.aminoBinary = (_object$aminoBinary = object.aminoBinary) !== null && _object$aminoBinary !== void 0 ? _object$aminoBinary : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoRequest() {
  return {
    aminoBinary: new Uint8Array()
  };
}
var TxDecodeAminoRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
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
      aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.aminoBinary !== void 0 && (obj.aminoBinary = base64FromBytes(message.aminoBinary !== void 0 ? message.aminoBinary : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$aminoBinary2;
    const message = createBaseTxDecodeAminoRequest();
    message.aminoBinary = (_object$aminoBinary2 = object.aminoBinary) !== null && _object$aminoBinary2 !== void 0 ? _object$aminoBinary2 : new Uint8Array();
    return message;
  }
};
function createBaseTxDecodeAminoResponse() {
  return {
    aminoJson: ""
  };
}
var TxDecodeAminoResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : new _m05.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
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
      aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.aminoJson !== void 0 && (obj.aminoJson = message.aminoJson);
    return obj;
  },
  fromPartial(object) {
    var _object$aminoJson2;
    const message = createBaseTxDecodeAminoResponse();
    message.aminoJson = (_object$aminoJson2 = object.aminoJson) !== null && _object$aminoJson2 !== void 0 ? _object$aminoJson2 : "";
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/tx/v1beta1/service.rpc.Service.js
var ServiceClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    this.txDecode = this.txDecode.bind(this);
    this.txEncode = this.txEncode.bind(this);
    this.txEncodeAmino = this.txEncodeAmino.bind(this);
    this.txDecodeAmino = this.txDecodeAmino.bind(this);
  }
  simulate(request) {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then((data2) => SimulateResponse.decode(new _m06.Reader(data2)));
  }
  getTx(request) {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then((data2) => GetTxResponse.decode(new _m06.Reader(data2)));
  }
  broadcastTx(request) {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then((data2) => BroadcastTxResponse.decode(new _m06.Reader(data2)));
  }
  getTxsEvent(request) {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then((data2) => GetTxsEventResponse.decode(new _m06.Reader(data2)));
  }
  getBlockWithTxs(request) {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then((data2) => GetBlockWithTxsResponse.decode(new _m06.Reader(data2)));
  }
  txDecode(request) {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then((data2) => TxDecodeResponse.decode(new _m06.Reader(data2)));
  }
  txEncode(request) {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then((data2) => TxEncodeResponse.decode(new _m06.Reader(data2)));
  }
  txEncodeAmino(request) {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then((data2) => TxEncodeAminoResponse.decode(new _m06.Reader(data2)));
  }
  txDecodeAmino(request) {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then((data2) => TxDecodeAminoResponse.decode(new _m06.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request) {
      return queryService.simulate(request);
    },
    getTx(request) {
      return queryService.getTx(request);
    },
    broadcastTx(request) {
      return queryService.broadcastTx(request);
    },
    getTxsEvent(request) {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs(request) {
      return queryService.getBlockWithTxs(request);
    },
    txDecode(request) {
      return queryService.txDecode(request);
    },
    txEncode(request) {
      return queryService.txEncode(request);
    },
    txEncodeAmino(request) {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino(request) {
      return queryService.txDecodeAmino(request);
    }
  };
};

export {
  abci_exports,
  signing_exports,
  tx_exports,
  service_exports,
  ServiceClientImpl,
  createRpcQueryExtension,
  service_rpc_Service_exports
};
//# sourceMappingURL=chunk-A5R2FICF.js.map
