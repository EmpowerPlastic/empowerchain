import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** Module is the config object of the capability module. */
export interface Module {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   */
  sealKeeper: boolean;
}
/** Module is the config object of the capability module. */
export interface ModuleSDKType {
  seal_keeper: boolean;
}
function createBaseModule(): Module {
  return {
    sealKeeper: false
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sealKeeper === true) {
      writer.uint32(8).bool(message.sealKeeper);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sealKeeper = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      sealKeeper: isSet(object.sealKeeper) ? Boolean(object.sealKeeper) : false
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.sealKeeper !== undefined && (obj.sealKeeper = message.sealKeeper);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.sealKeeper = object.sealKeeper ?? false;
    return message;
  }
};