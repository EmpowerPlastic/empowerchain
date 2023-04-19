import * as _m0 from "protobufjs/minimal";
/** StorageType */

export let StorageType;
/** StorageType */
(function (StorageType) {
  StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType || (StorageType = {}));
export let StorageTypeSDKType;
(function (StorageTypeSDKType) {
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageTypeSDKType[StorageTypeSDKType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageTypeSDKType[StorageTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageTypeSDKType || (StorageTypeSDKType = {}));
export function storageTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object) {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */

function createBaseModuleSchemaDescriptor() {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}
export const ModuleSchemaDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$schemaFile, _object$prefix;
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = ((_object$schemaFile = object.schemaFile) === null || _object$schemaFile === void 0 ? void 0 : _object$schemaFile.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e))) || [];
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
  return {
    id: 0,
    protoFileName: "",
    storageType: 0
  };
}
export const ModuleSchemaDescriptor_FileEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }
    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.protoFileName = reader.string();
          break;
        case 3:
          message.storageType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$id, _object$protoFileName, _object$storageType;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    message.protoFileName = (_object$protoFileName = object.protoFileName) !== null && _object$protoFileName !== void 0 ? _object$protoFileName : "";
    message.storageType = (_object$storageType = object.storageType) !== null && _object$storageType !== void 0 ? _object$storageType : 0;
    return message;
  }
};