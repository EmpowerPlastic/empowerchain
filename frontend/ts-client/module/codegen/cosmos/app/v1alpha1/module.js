import * as _m0 from "protobufjs/minimal";
function createBaseModuleDescriptor() {
  return {
    goImport: "",
    usePackage: [],
    canMigrateFrom: []
  };
}
export const ModuleDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.goImport !== "") {
      writer.uint32(10).string(message.goImport);
    }
    for (const v of message.usePackage) {
      PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.canMigrateFrom) {
      MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.goImport = reader.string();
          break;
        case 2:
          message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
          break;
        case 3:
          message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$goImport, _object$usePackage, _object$canMigrateFro;
    const message = createBaseModuleDescriptor();
    message.goImport = (_object$goImport = object.goImport) !== null && _object$goImport !== void 0 ? _object$goImport : "";
    message.usePackage = ((_object$usePackage = object.usePackage) === null || _object$usePackage === void 0 ? void 0 : _object$usePackage.map(e => PackageReference.fromPartial(e))) || [];
    message.canMigrateFrom = ((_object$canMigrateFro = object.canMigrateFrom) === null || _object$canMigrateFro === void 0 ? void 0 : _object$canMigrateFro.map(e => MigrateFromInfo.fromPartial(e))) || [];
    return message;
  }
};
function createBasePackageReference() {
  return {
    name: "",
    revision: 0
  };
}
export const PackageReference = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.revision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$name, _object$revision;
    const message = createBasePackageReference();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.revision = (_object$revision = object.revision) !== null && _object$revision !== void 0 ? _object$revision : 0;
    return message;
  }
};
function createBaseMigrateFromInfo() {
  return {
    module: ""
  };
}
export const MigrateFromInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateFromInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$module;
    const message = createBaseMigrateFromInfo();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    return message;
  }
};