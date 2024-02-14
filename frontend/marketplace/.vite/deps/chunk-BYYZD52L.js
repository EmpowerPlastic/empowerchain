import {
  import_long,
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/empowerchain/certificates/types.js
var types_exports = {};
__export(types_exports, {
  AdditionalData: () => AdditionalData,
  Certificate: () => Certificate,
  CertificateType: () => CertificateType,
  CertificateTypeSDKType: () => CertificateTypeSDKType,
  IDCounters: () => IDCounters,
  Params: () => Params,
  certificateTypeFromJSON: () => certificateTypeFromJSON,
  certificateTypeToJSON: () => certificateTypeToJSON
});
var _m0 = __toESM(require_minimal());
var CertificateType = function(CertificateType2) {
  CertificateType2[CertificateType2["CREDIT_RETIREMENT"] = 0] = "CREDIT_RETIREMENT";
  CertificateType2[CertificateType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return CertificateType2;
}({});
var CertificateTypeSDKType = CertificateType;
function certificateTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CREDIT_RETIREMENT":
      return CertificateType.CREDIT_RETIREMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateType.UNRECOGNIZED;
  }
}
function certificateTypeToJSON(object) {
  switch (object) {
    case CertificateType.CREDIT_RETIREMENT:
      return "CREDIT_RETIREMENT";
    case CertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseParams() {
  return {
    allowedIssuers: []
  };
}
var Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.allowedIssuers) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedIssuers.push(reader.string());
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
      allowedIssuers: Array.isArray(object === null || object === void 0 ? void 0 : object.allowedIssuers) ? object.allowedIssuers.map((e) => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.allowedIssuers) {
      obj.allowedIssuers = message.allowedIssuers.map((e) => e);
    } else {
      obj.allowedIssuers = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$allowedIssuer;
    const message = createBaseParams();
    message.allowedIssuers = ((_object$allowedIssuer = object.allowedIssuers) === null || _object$allowedIssuer === void 0 ? void 0 : _object$allowedIssuer.map((e) => e)) || [];
    return message;
  }
};
function createBaseCertificate() {
  return {
    id: BigInt("0"),
    type: 0,
    owner: "",
    issuer: "",
    additionalData: []
  };
}
var Certificate = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.id.toString()));
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    for (const v of message.additionalData) {
      AdditionalData.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.type = reader.int32();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt("0"),
      type: isSet(object.type) ? certificateTypeFromJSON(object.type) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      additionalData: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalData) ? object.additionalData.map((e) => AdditionalData.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = (message.id || BigInt("0")).toString());
    message.type !== void 0 && (obj.type = certificateTypeToJSON(message.type));
    message.owner !== void 0 && (obj.owner = message.owner);
    message.issuer !== void 0 && (obj.issuer = message.issuer);
    if (message.additionalData) {
      obj.additionalData = message.additionalData.map((e) => e ? AdditionalData.toJSON(e) : void 0);
    } else {
      obj.additionalData = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$type, _object$owner, _object$issuer, _object$additionalDat;
    const message = createBaseCertificate();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt("0");
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.issuer = (_object$issuer = object.issuer) !== null && _object$issuer !== void 0 ? _object$issuer : "";
    message.additionalData = ((_object$additionalDat = object.additionalData) === null || _object$additionalDat === void 0 ? void 0 : _object$additionalDat.map((e) => AdditionalData.fromPartial(e))) || [];
    return message;
  }
};
function createBaseAdditionalData() {
  return {
    key: "",
    value: ""
  };
}
var AdditionalData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAdditionalData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== void 0 && (obj.key = message.key);
    message.value !== void 0 && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$value;
    const message = createBaseAdditionalData();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
function createBaseIDCounters() {
  return {
    nextCertificateId: BigInt("0")
  };
}
var IDCounters = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.nextCertificateId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.nextCertificateId.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIDCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextCertificateId = BigInt(reader.uint64().toString());
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
      nextCertificateId: isSet(object.nextCertificateId) ? BigInt(object.nextCertificateId.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.nextCertificateId !== void 0 && (obj.nextCertificateId = (message.nextCertificateId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseIDCounters();
    message.nextCertificateId = object.nextCertificateId !== void 0 && object.nextCertificateId !== null ? BigInt(object.nextCertificateId.toString()) : BigInt("0");
    return message;
  }
};

export {
  certificateTypeFromJSON,
  certificateTypeToJSON,
  Params,
  Certificate,
  AdditionalData,
  IDCounters,
  types_exports
};
//# sourceMappingURL=chunk-BYYZD52L.js.map
