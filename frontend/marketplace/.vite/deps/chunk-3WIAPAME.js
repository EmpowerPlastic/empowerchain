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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/types.js
var types_exports = {};
__export(types_exports, {
  AbsoluteTxPosition: () => AbsoluteTxPosition,
  AccessConfig: () => AccessConfig,
  AccessType: () => AccessType,
  AccessTypeParam: () => AccessTypeParam,
  AccessTypeSDKType: () => AccessTypeSDKType,
  CodeInfo: () => CodeInfo,
  ContractCodeHistoryEntry: () => ContractCodeHistoryEntry,
  ContractCodeHistoryOperationType: () => ContractCodeHistoryOperationType,
  ContractCodeHistoryOperationTypeSDKType: () => ContractCodeHistoryOperationTypeSDKType,
  ContractInfo: () => ContractInfo,
  Model: () => Model,
  Params: () => Params,
  accessTypeFromJSON: () => accessTypeFromJSON,
  accessTypeToJSON: () => accessTypeToJSON,
  contractCodeHistoryOperationTypeFromJSON: () => contractCodeHistoryOperationTypeFromJSON,
  contractCodeHistoryOperationTypeToJSON: () => contractCodeHistoryOperationTypeToJSON
});
var _m0 = __toESM(require_minimal());
var AccessType = function(AccessType2) {
  AccessType2[AccessType2["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  AccessType2[AccessType2["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  AccessType2[AccessType2["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
  AccessType2[AccessType2["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessType2[AccessType2["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
  AccessType2[AccessType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AccessType2;
}({});
var AccessTypeSDKType = AccessType;
function accessTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case 4:
    case "ACCESS_TYPE_ANY_OF_ADDRESSES":
      return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
function accessTypeToJSON(object) {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return "ACCESS_TYPE_ANY_OF_ADDRESSES";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
var ContractCodeHistoryOperationType = function(ContractCodeHistoryOperationType2) {
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ContractCodeHistoryOperationType2;
}({});
var ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
function contractCodeHistoryOperationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
function contractCodeHistoryOperationTypeToJSON(object) {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case ContractCodeHistoryOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseAccessTypeParam() {
  return {
    value: 0
  };
}
var AccessTypeParam = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
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
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== void 0 && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },
  fromPartial(object) {
    var _object$value;
    const message = createBaseAccessTypeParam();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : 0;
    return message;
  }
};
function createBaseAccessConfig() {
  return {
    permission: 0,
    address: "",
    addresses: []
  };
}
var AccessConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.addresses.push(reader.string());
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
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.permission !== void 0 && (obj.permission = accessTypeToJSON(message.permission));
    message.address !== void 0 && (obj.address = message.address);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$permission, _object$address, _object$addresses;
    const message = createBaseAccessConfig();
    message.permission = (_object$permission = object.permission) !== null && _object$permission !== void 0 ? _object$permission : 0;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map((e) => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    codeUploadAccess: void 0,
    instantiateDefaultPermission: 0
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeUploadAccess !== void 0) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
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
          message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateDefaultPermission = reader.int32();
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
      codeUploadAccess: isSet(object.codeUploadAccess) ? AccessConfig.fromJSON(object.codeUploadAccess) : void 0,
      instantiateDefaultPermission: isSet(object.instantiateDefaultPermission) ? accessTypeFromJSON(object.instantiateDefaultPermission) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeUploadAccess !== void 0 && (obj.codeUploadAccess = message.codeUploadAccess ? AccessConfig.toJSON(message.codeUploadAccess) : void 0);
    message.instantiateDefaultPermission !== void 0 && (obj.instantiateDefaultPermission = accessTypeToJSON(message.instantiateDefaultPermission));
    return obj;
  },
  fromPartial(object) {
    var _object$instantiateDe;
    const message = createBaseParams();
    message.codeUploadAccess = object.codeUploadAccess !== void 0 && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : void 0;
    message.instantiateDefaultPermission = (_object$instantiateDe = object.instantiateDefaultPermission) !== null && _object$instantiateDe !== void 0 ? _object$instantiateDe : 0;
    return message;
  }
};
function createBaseCodeInfo() {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    instantiateConfig: void 0
  };
}
var CodeInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== void 0) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 5:
          message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
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
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiateConfig: isSet(object.instantiateConfig) ? AccessConfig.fromJSON(object.instantiateConfig) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeHash !== void 0 && (obj.codeHash = base64FromBytes(message.codeHash !== void 0 ? message.codeHash : new Uint8Array()));
    message.creator !== void 0 && (obj.creator = message.creator);
    message.instantiateConfig !== void 0 && (obj.instantiateConfig = message.instantiateConfig ? AccessConfig.toJSON(message.instantiateConfig) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$codeHash, _object$creator;
    const message = createBaseCodeInfo();
    message.codeHash = (_object$codeHash = object.codeHash) !== null && _object$codeHash !== void 0 ? _object$codeHash : new Uint8Array();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.instantiateConfig = object.instantiateConfig !== void 0 && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : void 0;
    return message;
  }
};
function createBaseContractInfo() {
  return {
    codeId: BigInt("0"),
    creator: "",
    admin: "",
    label: "",
    created: void 0,
    ibcPortId: "",
    extension: void 0
  };
}
var ContractInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== void 0) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    if (message.extension !== void 0) {
      Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcPortId = reader.string();
          break;
        case 7:
          message.extension = Any.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : void 0,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.creator !== void 0 && (obj.creator = message.creator);
    message.admin !== void 0 && (obj.admin = message.admin);
    message.label !== void 0 && (obj.label = message.label);
    message.created !== void 0 && (obj.created = message.created ? AbsoluteTxPosition.toJSON(message.created) : void 0);
    message.ibcPortId !== void 0 && (obj.ibcPortId = message.ibcPortId);
    message.extension !== void 0 && (obj.extension = message.extension ? Any.toJSON(message.extension) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$creator2, _object$admin, _object$label, _object$ibcPortId;
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.created = object.created !== void 0 && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : void 0;
    message.ibcPortId = (_object$ibcPortId = object.ibcPortId) !== null && _object$ibcPortId !== void 0 ? _object$ibcPortId : "";
    message.extension = object.extension !== void 0 && object.extension !== null ? Any.fromPartial(object.extension) : void 0;
    return message;
  }
};
function createBaseContractCodeHistoryEntry() {
  return {
    operation: 0,
    codeId: BigInt("0"),
    updated: void 0,
    msg: new Uint8Array()
  };
}
var ContractCodeHistoryEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.updated !== void 0) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32();
          break;
        case 2:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 4:
          message.msg = reader.bytes();
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
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : 0,
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : void 0,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.operation !== void 0 && (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.updated !== void 0 && (obj.updated = message.updated ? AbsoluteTxPosition.toJSON(message.updated) : void 0);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$operation, _object$msg;
    const message = createBaseContractCodeHistoryEntry();
    message.operation = (_object$operation = object.operation) !== null && _object$operation !== void 0 ? _object$operation : 0;
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.updated = object.updated !== void 0 && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : void 0;
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    return message;
  }
};
function createBaseAbsoluteTxPosition() {
  return {
    blockHeight: BigInt("0"),
    txIndex: BigInt("0")
  };
}
var AbsoluteTxPosition = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.blockHeight.toString()));
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.txIndex.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.txIndex = BigInt(reader.uint64().toString());
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
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt("0"),
      txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.blockHeight !== void 0 && (obj.blockHeight = (message.blockHeight || BigInt("0")).toString());
    message.txIndex !== void 0 && (obj.txIndex = (message.txIndex || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt("0");
    message.txIndex = object.txIndex !== void 0 && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt("0");
    return message;
  }
};
function createBaseModel() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var Model = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
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
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = base64FromBytes(message.key !== void 0 ? message.key : new Uint8Array()));
    message.value !== void 0 && (obj.value = base64FromBytes(message.value !== void 0 ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$value2;
    const message = createBaseModel();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    return message;
  }
};

export {
  accessTypeFromJSON,
  AccessConfig,
  Params,
  CodeInfo,
  ContractInfo,
  ContractCodeHistoryEntry,
  Model,
  types_exports
};
//# sourceMappingURL=chunk-3WIAPAME.js.map
