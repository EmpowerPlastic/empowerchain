import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
function createBaseFileDescriptorsRequest() {
  return {};
}
export const FileDescriptorsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
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
  fromPartial(_) {
    const message = createBaseFileDescriptorsRequest();
    return message;
  }
};
function createBaseFileDescriptorsResponse() {
  return {
    files: []
  };
}
export const FileDescriptorsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.files) {
      FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$files;
    const message = createBaseFileDescriptorsResponse();
    message.files = ((_object$files = object.files) === null || _object$files === void 0 ? void 0 : _object$files.map(e => FileDescriptorProto.fromPartial(e))) || [];
    return message;
  }
};