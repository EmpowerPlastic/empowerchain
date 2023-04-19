import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfoRequest() {
  return {
    consAddress: ""
  };
}
export const QuerySigningInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$consAddress;
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = (_object$consAddress = object.consAddress) !== null && _object$consAddress !== void 0 ? _object$consAddress : "";
    return message;
  }
};
function createBaseQuerySigningInfoResponse() {
  return {
    valSigningInfo: undefined
  };
}
export const QuerySigningInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfosRequest() {
  return {
    pagination: undefined
  };
}
export const QuerySigningInfosRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQuerySigningInfosResponse() {
  return {
    info: [],
    pagination: undefined
  };
}
export const QuerySigningInfosResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$info;
    const message = createBaseQuerySigningInfosResponse();
    message.info = ((_object$info = object.info) === null || _object$info === void 0 ? void 0 : _object$info.map(e => ValidatorSigningInfo.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};