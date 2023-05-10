import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** EventAccessGranted is an event emitted when access is granted to a given message for a given address */
export interface EventAccessGranted {
  moduleName: string;
  account: string;
  msgType: string;
}
/** EventAccessGranted is an event emitted when access is granted to a given message for a given address */
export interface EventAccessGrantedSDKType {
  module_name: string;
  account: string;
  msg_type: string;
}
/** EventAccessRevoked is an event emitted when access is revoked to a given message for a given address */
export interface EventAccessRevoked {
  moduleName: string;
  account: string;
  msgType: string;
}
/** EventAccessRevoked is an event emitted when access is revoked to a given message for a given address */
export interface EventAccessRevokedSDKType {
  module_name: string;
  account: string;
  msg_type: string;
}
function createBaseEventAccessGranted(): EventAccessGranted {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
export const EventAccessGranted = {
  encode(message: EventAccessGranted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventAccessGranted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccessGranted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAccessGranted {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      account: isSet(object.account) ? String(object.account) : "",
      msgType: isSet(object.msgType) ? String(object.msgType) : ""
    };
  },
  toJSON(message: EventAccessGranted): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.account !== undefined && (obj.account = message.account);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },
  fromPartial(object: Partial<EventAccessGranted>): EventAccessGranted {
    const message = createBaseEventAccessGranted();
    message.moduleName = object.moduleName ?? "";
    message.account = object.account ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  }
};
function createBaseEventAccessRevoked(): EventAccessRevoked {
  return {
    moduleName: "",
    account: "",
    msgType: ""
  };
}
export const EventAccessRevoked = {
  encode(message: EventAccessRevoked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventAccessRevoked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccessRevoked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAccessRevoked {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      account: isSet(object.account) ? String(object.account) : "",
      msgType: isSet(object.msgType) ? String(object.msgType) : ""
    };
  },
  toJSON(message: EventAccessRevoked): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.account !== undefined && (obj.account = message.account);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },
  fromPartial(object: Partial<EventAccessRevoked>): EventAccessRevoked {
    const message = createBaseEventAccessRevoked();
    message.moduleName = object.moduleName ?? "";
    message.account = object.account ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  }
};