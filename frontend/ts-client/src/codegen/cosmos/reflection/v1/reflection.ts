import { FileDescriptorProto, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */

export interface FileDescriptorsRequest {}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */

export interface FileDescriptorsRequestSDKType {}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */

export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */

export interface FileDescriptorsResponseSDKType {
  /** files is the file descriptors. */
  files: FileDescriptorProtoSDKType[];
}

function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}

export const FileDescriptorsRequest = {
  encode(_: FileDescriptorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsRequest {
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

  fromJSON(_: any): FileDescriptorsRequest {
    return {};
  },

  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  }

};

function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return {
    files: []
  };
}

export const FileDescriptorsResponse = {
  encode(message: FileDescriptorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsResponse {
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

  fromJSON(object: any): FileDescriptorsResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => FileDescriptorProto.fromJSON(e)) : []
    };
  },

  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};

    if (message.files) {
      obj.files = message.files.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }

    return obj;
  },

  fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  }

};