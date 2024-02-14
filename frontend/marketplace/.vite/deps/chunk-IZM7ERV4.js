import {
  Any
} from "./chunk-5CF6M437.js";
import {
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgSubmitEvidence: () => MsgSubmitEvidence,
  MsgSubmitEvidenceResponse: () => MsgSubmitEvidenceResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgSubmitEvidence() {
  return {
    submitter: "",
    evidence: void 0
  };
}
var MsgSubmitEvidence = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== void 0) {
      Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = Any.decode(reader, reader.uint32());
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
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.submitter !== void 0 && (obj.submitter = message.submitter);
    message.evidence !== void 0 && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$submitter;
    const message = createBaseMsgSubmitEvidence();
    message.submitter = (_object$submitter = object.submitter) !== null && _object$submitter !== void 0 ? _object$submitter : "";
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? Any.fromPartial(object.evidence) : void 0;
    return message;
  }
};
function createBaseMsgSubmitEvidenceResponse() {
  return {
    hash: new Uint8Array()
  };
}
var MsgSubmitEvidenceResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
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
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.hash !== void 0 && (obj.hash = base64FromBytes(message.hash !== void 0 ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/evidence/v1beta1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }
  submitEvidence(request) {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then((data2) => MsgSubmitEvidenceResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgSubmitEvidence,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-IZM7ERV4.js.map
