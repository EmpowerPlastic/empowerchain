import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, toTimestamp, fromTimestamp, bytesFromBase64, fromJsonTimestamp, base64FromBytes } from "../../../../helpers";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValue[];
}
/** GetRequest is the Query/Get request type. */
export interface GetRequestSDKType {
  message_name: string;
  index: string;
  values: IndexValueSDKType[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: Any;
}
/** GetResponse is the Query/Get response type. */
export interface GetResponseSDKType {
  result?: AnySDKType;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_Prefix;
  /** range defines a range query. */
  range?: ListRequest_Range;
  /** pagination is the pagination request. */
  pagination?: PageRequest;
}
/** ListRequest is the Query/List request type. */
export interface ListRequestSDKType {
  message_name: string;
  index: string;
  prefix?: ListRequest_PrefixSDKType;
  range?: ListRequest_RangeSDKType;
  pagination?: PageRequestSDKType;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValue[];
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_PrefixSDKType {
  values: IndexValueSDKType[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValue[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValue[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_RangeSDKType {
  start: IndexValueSDKType[];
  end: IndexValueSDKType[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
  /** results are the results of the query. */
  results: Any[];
  /** pagination is the pagination response. */
  pagination?: PageResponse;
}
/** ListResponse is the Query/List response type. */
export interface ListResponseSDKType {
  results: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: bigint;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: bigint;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: Date;
  /** duration specifies a value for a duration index field. */
  duration?: Duration;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValueSDKType {
  uint?: bigint;
  int?: bigint;
  str?: string;
  bytes?: Uint8Array;
  enum?: string;
  bool?: boolean;
  timestamp?: Date;
  duration?: DurationSDKType;
}
function createBaseGetRequest(): GetRequest {
  return {
    messageName: "",
    index: "",
    values: []
  };
}
export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.messageName !== undefined && (obj.messageName = message.messageName);
    message.index !== undefined && (obj.index = message.index);
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GetRequest>): GetRequest {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetResponse(): GetResponse {
  return {
    result: undefined
  };
}
export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetResponse {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined
    };
  },
  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetResponse>): GetResponse {
    const message = createBaseGetResponse();
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  }
};
function createBaseListRequest(): ListRequest {
  return {
    messageName: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: undefined
  };
}
export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : undefined,
      range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.messageName !== undefined && (obj.messageName = message.messageName);
    message.index !== undefined && (obj.index = message.index);
    message.prefix !== undefined && (obj.prefix = message.prefix ? ListRequest_Prefix.toJSON(message.prefix) : undefined);
    message.range !== undefined && (obj.range = message.range ? ListRequest_Range.toJSON(message.range) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : undefined;
    message.range = object.range !== undefined && object.range !== null ? ListRequest_Range.fromPartial(object.range) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseListRequest_Prefix(): ListRequest_Prefix {
  return {
    values: []
  };
}
export const ListRequest_Prefix = {
  encode(message: ListRequest_Prefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Prefix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message: ListRequest_Prefix): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? IndexValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListRequest_Prefix>): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  }
};
function createBaseListRequest_Range(): ListRequest_Range {
  return {
    start: [],
    end: []
  };
}
export const ListRequest_Range = {
  encode(message: ListRequest_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.start) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Range {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest_Range {
    return {
      start: Array.isArray(object?.start) ? object.start.map((e: any) => IndexValue.fromJSON(e)) : [],
      end: Array.isArray(object?.end) ? object.end.map((e: any) => IndexValue.fromJSON(e)) : []
    };
  },
  toJSON(message: ListRequest_Range): unknown {
    const obj: any = {};
    if (message.start) {
      obj.start = message.start.map(e => e ? IndexValue.toJSON(e) : undefined);
    } else {
      obj.start = [];
    }
    if (message.end) {
      obj.end = message.end.map(e => e ? IndexValue.toJSON(e) : undefined);
    } else {
      obj.end = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListRequest_Range>): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map(e => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map(e => IndexValue.fromPartial(e)) || [];
    return message;
  }
};
function createBaseListResponse(): ListResponse {
  return {
    results: [],
    pagination: undefined
  };
}
export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseIndexValue(): IndexValue {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined
  };
}
export const IndexValue = {
  encode(message: IndexValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(Long.fromString(message.uint.toString()));
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(Long.fromString(message.int.toString()));
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IndexValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.int = BigInt(reader.int64().toString());
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IndexValue {
    return {
      uint: isSet(object.uint) ? BigInt(object.uint.toString()) : undefined,
      int: isSet(object.int) ? BigInt(object.int.toString()) : undefined,
      str: isSet(object.str) ? String(object.str) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      enum: isSet(object.enum) ? String(object.enum) : undefined,
      bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: IndexValue): unknown {
    const obj: any = {};
    message.uint !== undefined && (obj.uint = (message.uint || undefined).toString());
    message.int !== undefined && (obj.int = (message.int || undefined).toString());
    message.str !== undefined && (obj.str = message.str);
    message.bytes !== undefined && (obj.bytes = message.bytes !== undefined ? base64FromBytes(message.bytes) : undefined);
    message.enum !== undefined && (obj.enum = message.enum);
    message.bool !== undefined && (obj.bool = message.bool);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IndexValue>): IndexValue {
    const message = createBaseIndexValue();
    message.uint = object.uint !== undefined && object.uint !== null ? BigInt(object.uint.toString()) : undefined;
    message.int = object.int !== undefined && object.int !== null ? BigInt(object.int.toString()) : undefined;
    message.str = object.str ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.enum = object.enum ?? undefined;
    message.bool = object.bool ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};