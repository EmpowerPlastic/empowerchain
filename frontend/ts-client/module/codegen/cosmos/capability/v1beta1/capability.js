import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */

function createBaseCapability() {
  return {
    index: Long.UZERO
  };
}
export const Capability = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  }
};
function createBaseOwner() {
  return {
    module: "",
    name: ""
  };
}
export const Owner = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$module, _object$name;
    const message = createBaseOwner();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
function createBaseCapabilityOwners() {
  return {
    owners: []
  };
}
export const CapabilityOwners = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.owners) {
      Owner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owners;
    const message = createBaseCapabilityOwners();
    message.owners = ((_object$owners = object.owners) === null || _object$owners === void 0 ? void 0 : _object$owners.map(e => Owner.fromPartial(e))) || [];
    return message;
  }
};