import {
  AdditionalData,
  Params,
  certificateTypeFromJSON,
  certificateTypeToJSON
} from "./chunk-BYYZD52L.js";
import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  _defineProperty
} from "./chunk-65WSFKMD.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgCreateCertificate: () => MsgCreateCertificate,
  MsgCreateCertificateResponse: () => MsgCreateCertificateResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: void 0
  };
}
var MsgUpdateParams = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.params !== void 0 && (obj.params = message.params ? Params.toJSON(message.params) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgUpdateParams();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
var MsgUpdateParamsResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgCreateCertificate() {
  return {
    issuer: "",
    type: 0,
    owner: "",
    additionalData: []
  };
}
var MsgCreateCertificate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    for (const v of message.additionalData) {
      AdditionalData.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.type = reader.int32();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.additionalData.push(AdditionalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      type: isSet(object.type) ? certificateTypeFromJSON(object.type) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      additionalData: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalData) ? object.additionalData.map((e) => AdditionalData.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.issuer !== void 0 && (obj.issuer = message.issuer);
    message.type !== void 0 && (obj.type = certificateTypeToJSON(message.type));
    message.owner !== void 0 && (obj.owner = message.owner);
    if (message.additionalData) {
      obj.additionalData = message.additionalData.map((e) => e ? AdditionalData.toJSON(e) : void 0);
    } else {
      obj.additionalData = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$issuer, _object$type, _object$owner, _object$additionalDat;
    const message = createBaseMsgCreateCertificate();
    message.issuer = (_object$issuer = object.issuer) !== null && _object$issuer !== void 0 ? _object$issuer : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.additionalData = ((_object$additionalDat = object.additionalData) === null || _object$additionalDat === void 0 ? void 0 : _object$additionalDat.map((e) => AdditionalData.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgCreateCertificateResponse() {
  return {
    certificateId: BigInt("0")
  };
}
var MsgCreateCertificateResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.certificateId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.certificateId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificateId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      certificateId: isSet(object.certificateId) ? BigInt(object.certificateId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.certificateId !== void 0 && (obj.certificateId = (message.certificateId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateCertificateResponse();
    message.certificateId = object.certificateId !== void 0 && object.certificateId !== null ? BigInt(object.certificateId.toString()) : BigInt("0");
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createCertificate = this.createCertificate.bind(this);
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
  createCertificate(request) {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Msg", "CreateCertificate", data);
    return promise.then((data2) => MsgCreateCertificateResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgUpdateParams,
  MsgCreateCertificate,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-6WCII5A6.js.map
