import * as _m0 from "protobufjs/minimal";
export interface Permission {}
export interface PermissionSDKType {}
function createBasePermission(): Permission {
  return {};
}
export const Permission = {
  encode(_: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Permission {
    return {};
  },
  toJSON(_: Permission): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Permission>): Permission {
    const message = createBasePermission();
    return message;
  }
};