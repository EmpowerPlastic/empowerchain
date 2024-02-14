import {
  AccessConfig,
  Params
} from "./chunk-3WIAPAME.js";
import {
  Coin
} from "./chunk-S5OVV5FT.js";
import {
  base64FromBytes,
  bytesFromBase64,
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/tx.rpc.msg.js
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
var _m02 = __toESM(require_minimal());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/tx.js
var tx_exports = {};
__export(tx_exports, {
  MsgClearAdmin: () => MsgClearAdmin,
  MsgClearAdminResponse: () => MsgClearAdminResponse,
  MsgExecuteContract: () => MsgExecuteContract,
  MsgExecuteContractResponse: () => MsgExecuteContractResponse,
  MsgInstantiateContract: () => MsgInstantiateContract,
  MsgInstantiateContract2: () => MsgInstantiateContract2,
  MsgInstantiateContract2Response: () => MsgInstantiateContract2Response,
  MsgInstantiateContractResponse: () => MsgInstantiateContractResponse,
  MsgMigrateContract: () => MsgMigrateContract,
  MsgMigrateContractResponse: () => MsgMigrateContractResponse,
  MsgPinCodes: () => MsgPinCodes,
  MsgPinCodesResponse: () => MsgPinCodesResponse,
  MsgStoreAndInstantiateContract: () => MsgStoreAndInstantiateContract,
  MsgStoreAndInstantiateContractResponse: () => MsgStoreAndInstantiateContractResponse,
  MsgStoreCode: () => MsgStoreCode,
  MsgStoreCodeResponse: () => MsgStoreCodeResponse,
  MsgSudoContract: () => MsgSudoContract,
  MsgSudoContractResponse: () => MsgSudoContractResponse,
  MsgUnpinCodes: () => MsgUnpinCodes,
  MsgUnpinCodesResponse: () => MsgUnpinCodesResponse,
  MsgUpdateAdmin: () => MsgUpdateAdmin,
  MsgUpdateAdminResponse: () => MsgUpdateAdminResponse,
  MsgUpdateInstantiateConfig: () => MsgUpdateInstantiateConfig,
  MsgUpdateInstantiateConfigResponse: () => MsgUpdateInstantiateConfigResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
var _m0 = __toESM(require_minimal());
function createBaseMsgStoreCode() {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0
  };
}
var MsgStoreCode = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.wasmByteCode !== void 0 && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== void 0 ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== void 0 && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$sender, _object$wasmByteCode;
    const message = createBaseMsgStoreCode();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.wasmByteCode = (_object$wasmByteCode = object.wasmByteCode) !== null && _object$wasmByteCode !== void 0 ? _object$wasmByteCode : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  }
};
function createBaseMsgStoreCodeResponse() {
  return {
    codeId: BigInt("0"),
    checksum: new Uint8Array()
  };
}
var MsgStoreCodeResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.checksum = reader.bytes();
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.checksum !== void 0 && (obj.checksum = base64FromBytes(message.checksum !== void 0 ? message.checksum : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$checksum;
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.checksum = (_object$checksum = object.checksum) !== null && _object$checksum !== void 0 ? _object$checksum : new Uint8Array();
    return message;
  }
};
function createBaseMsgInstantiateContract() {
  return {
    sender: "",
    admin: "",
    codeId: BigInt("0"),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var MsgInstantiateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.admin !== void 0 && (obj.admin = message.admin);
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.label !== void 0 && (obj.label = message.label);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$sender2, _object$admin, _object$label, _object$msg, _object$funds;
    const message = createBaseMsgInstantiateContract();
    message.sender = (_object$sender2 = object.sender) !== null && _object$sender2 !== void 0 ? _object$sender2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    message.funds = ((_object$funds = object.funds) === null || _object$funds === void 0 ? void 0 : _object$funds.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgInstantiateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$data;
    const message = createBaseMsgInstantiateContractResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
function createBaseMsgInstantiateContract2() {
  return {
    sender: "",
    admin: "",
    codeId: BigInt("0"),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
var MsgInstantiateContract2 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(64).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
          message.fixMsg = reader.bool();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.admin !== void 0 && (obj.admin = message.admin);
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.label !== void 0 && (obj.label = message.label);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.funds = [];
    }
    message.salt !== void 0 && (obj.salt = base64FromBytes(message.salt !== void 0 ? message.salt : new Uint8Array()));
    message.fixMsg !== void 0 && (obj.fixMsg = message.fixMsg);
    return obj;
  },
  fromPartial(object) {
    var _object$sender3, _object$admin2, _object$label2, _object$msg2, _object$funds2, _object$salt, _object$fixMsg;
    const message = createBaseMsgInstantiateContract2();
    message.sender = (_object$sender3 = object.sender) !== null && _object$sender3 !== void 0 ? _object$sender3 : "";
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.label = (_object$label2 = object.label) !== null && _object$label2 !== void 0 ? _object$label2 : "";
    message.msg = (_object$msg2 = object.msg) !== null && _object$msg2 !== void 0 ? _object$msg2 : new Uint8Array();
    message.funds = ((_object$funds2 = object.funds) === null || _object$funds2 === void 0 ? void 0 : _object$funds2.map((e) => Coin.fromPartial(e))) || [];
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    message.fixMsg = (_object$fixMsg = object.fixMsg) !== null && _object$fixMsg !== void 0 ? _object$fixMsg : false;
    return message;
  }
};
function createBaseMsgInstantiateContract2Response() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgInstantiateContract2Response = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address2, _object$data2;
    const message = createBaseMsgInstantiateContract2Response();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    return message;
  }
};
function createBaseMsgExecuteContract() {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
var MsgExecuteContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.contract !== void 0 && (obj.contract = message.contract);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$sender4, _object$contract, _object$msg3, _object$funds3;
    const message = createBaseMsgExecuteContract();
    message.sender = (_object$sender4 = object.sender) !== null && _object$sender4 !== void 0 ? _object$sender4 : "";
    message.contract = (_object$contract = object.contract) !== null && _object$contract !== void 0 ? _object$contract : "";
    message.msg = (_object$msg3 = object.msg) !== null && _object$msg3 !== void 0 ? _object$msg3 : new Uint8Array();
    message.funds = ((_object$funds3 = object.funds) === null || _object$funds3 === void 0 ? void 0 : _object$funds3.map((e) => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgExecuteContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgExecuteContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data3;
    const message = createBaseMsgExecuteContractResponse();
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    return message;
  }
};
function createBaseMsgMigrateContract() {
  return {
    sender: "",
    contract: "",
    codeId: BigInt("0"),
    msg: new Uint8Array()
  };
}
var MsgMigrateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 4:
          message.msg = reader.bytes();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.contract !== void 0 && (obj.contract = message.contract);
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$sender5, _object$contract2, _object$msg4;
    const message = createBaseMsgMigrateContract();
    message.sender = (_object$sender5 = object.sender) !== null && _object$sender5 !== void 0 ? _object$sender5 : "";
    message.contract = (_object$contract2 = object.contract) !== null && _object$contract2 !== void 0 ? _object$contract2 : "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.msg = (_object$msg4 = object.msg) !== null && _object$msg4 !== void 0 ? _object$msg4 : new Uint8Array();
    return message;
  }
};
function createBaseMsgMigrateContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgMigrateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data4;
    const message = createBaseMsgMigrateContractResponse();
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    return message;
  }
};
function createBaseMsgUpdateAdmin() {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}
var MsgUpdateAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.newAdmin !== void 0 && (obj.newAdmin = message.newAdmin);
    message.contract !== void 0 && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object) {
    var _object$sender6, _object$newAdmin, _object$contract3;
    const message = createBaseMsgUpdateAdmin();
    message.sender = (_object$sender6 = object.sender) !== null && _object$sender6 !== void 0 ? _object$sender6 : "";
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    message.contract = (_object$contract3 = object.contract) !== null && _object$contract3 !== void 0 ? _object$contract3 : "";
    return message;
  }
};
function createBaseMsgUpdateAdminResponse() {
  return {};
}
var MsgUpdateAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  }
};
function createBaseMsgClearAdmin() {
  return {
    sender: "",
    contract: ""
  };
}
var MsgClearAdmin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.contract !== void 0 && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object) {
    var _object$sender7, _object$contract4;
    const message = createBaseMsgClearAdmin();
    message.sender = (_object$sender7 = object.sender) !== null && _object$sender7 !== void 0 ? _object$sender7 : "";
    message.contract = (_object$contract4 = object.contract) !== null && _object$contract4 !== void 0 ? _object$contract4 : "";
    return message;
  }
};
function createBaseMsgClearAdminResponse() {
  return {};
}
var MsgClearAdminResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
    const message = createBaseMsgClearAdminResponse();
    return message;
  }
};
function createBaseMsgUpdateInstantiateConfig() {
  return {
    sender: "",
    codeId: BigInt("0"),
    newInstantiatePermission: void 0
  };
}
var MsgUpdateInstantiateConfig = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(import_long.default.fromString(message.codeId.toString()));
    }
    if (message.newInstantiatePermission !== void 0) {
      AccessConfig.encode(message.newInstantiatePermission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = BigInt(reader.uint64().toString());
          break;
        case 3:
          message.newInstantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt("0"),
      newInstantiatePermission: isSet(object.newInstantiatePermission) ? AccessConfig.fromJSON(object.newInstantiatePermission) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.sender !== void 0 && (obj.sender = message.sender);
    message.codeId !== void 0 && (obj.codeId = (message.codeId || BigInt("0")).toString());
    message.newInstantiatePermission !== void 0 && (obj.newInstantiatePermission = message.newInstantiatePermission ? AccessConfig.toJSON(message.newInstantiatePermission) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$sender8;
    const message = createBaseMsgUpdateInstantiateConfig();
    message.sender = (_object$sender8 = object.sender) !== null && _object$sender8 !== void 0 ? _object$sender8 : "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt("0");
    message.newInstantiatePermission = object.newInstantiatePermission !== void 0 && object.newInstantiatePermission !== null ? AccessConfig.fromPartial(object.newInstantiatePermission) : void 0;
    return message;
  }
};
function createBaseMsgUpdateInstantiateConfigResponse() {
  return {};
}
var MsgUpdateInstantiateConfigResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfigResponse();
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
    const message = createBaseMsgUpdateInstantiateConfigResponse();
    return message;
  }
};
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
function createBaseMsgSudoContract() {
  return {
    authority: "",
    contract: "",
    msg: new Uint8Array()
  };
}
var MsgSudoContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
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
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.contract !== void 0 && (obj.contract = message.contract);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$authority2, _object$contract5, _object$msg5;
    const message = createBaseMsgSudoContract();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    message.contract = (_object$contract5 = object.contract) !== null && _object$contract5 !== void 0 ? _object$contract5 : "";
    message.msg = (_object$msg5 = object.msg) !== null && _object$msg5 !== void 0 ? _object$msg5 : new Uint8Array();
    return message;
  }
};
function createBaseMsgSudoContractResponse() {
  return {
    data: new Uint8Array()
  };
}
var MsgSudoContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$data5;
    const message = createBaseMsgSudoContractResponse();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    return message;
  }
};
function createBaseMsgPinCodes() {
  return {
    authority: "",
    codeIds: []
  };
}
var MsgPinCodes = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.codeIds.push(BigInt(reader.uint64().toString()));
          }
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
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$authority3, _object$codeIds;
    const message = createBaseMsgPinCodes();
    message.authority = (_object$authority3 = object.authority) !== null && _object$authority3 !== void 0 ? _object$authority3 : "";
    message.codeIds = ((_object$codeIds = object.codeIds) === null || _object$codeIds === void 0 ? void 0 : _object$codeIds.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseMsgPinCodesResponse() {
  return {};
}
var MsgPinCodesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodesResponse();
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
    const message = createBaseMsgPinCodesResponse();
    return message;
  }
};
function createBaseMsgUnpinCodes() {
  return {
    authority: "",
    codeIds: []
  };
}
var MsgUnpinCodes = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(import_long.default.fromString(v.toString()));
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.codeIds.push(BigInt(reader.uint64().toString()));
          }
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
      codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map((e) => BigInt(e.toString())) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || BigInt("0")).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$authority4, _object$codeIds2;
    const message = createBaseMsgUnpinCodes();
    message.authority = (_object$authority4 = object.authority) !== null && _object$authority4 !== void 0 ? _object$authority4 : "";
    message.codeIds = ((_object$codeIds2 = object.codeIds) === null || _object$codeIds2 === void 0 ? void 0 : _object$codeIds2.map((e) => BigInt(e.toString()))) || [];
    return message;
  }
};
function createBaseMsgUnpinCodesResponse() {
  return {};
}
var MsgUnpinCodesResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodesResponse();
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
    const message = createBaseMsgUnpinCodesResponse();
    return message;
  }
};
function createBaseMsgStoreAndInstantiateContract() {
  return {
    authority: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
var MsgStoreAndInstantiateContract = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(40).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(66).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(74).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(90).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(98).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.wasmByteCode = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.unpinCode = reader.bool();
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.msg = reader.bytes();
          break;
        case 9:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.builder = reader.string();
          break;
        case 12:
          message.codeHash = reader.bytes();
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
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : void 0,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== void 0 && (obj.authority = message.authority);
    message.wasmByteCode !== void 0 && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== void 0 ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== void 0 && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : void 0);
    message.unpinCode !== void 0 && (obj.unpinCode = message.unpinCode);
    message.admin !== void 0 && (obj.admin = message.admin);
    message.label !== void 0 && (obj.label = message.label);
    message.msg !== void 0 && (obj.msg = base64FromBytes(message.msg !== void 0 ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : void 0);
    } else {
      obj.funds = [];
    }
    message.source !== void 0 && (obj.source = message.source);
    message.builder !== void 0 && (obj.builder = message.builder);
    message.codeHash !== void 0 && (obj.codeHash = base64FromBytes(message.codeHash !== void 0 ? message.codeHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$authority5, _object$wasmByteCode2, _object$unpinCode, _object$admin3, _object$label3, _object$msg6, _object$funds4, _object$source, _object$builder, _object$codeHash;
    const message = createBaseMsgStoreAndInstantiateContract();
    message.authority = (_object$authority5 = object.authority) !== null && _object$authority5 !== void 0 ? _object$authority5 : "";
    message.wasmByteCode = (_object$wasmByteCode2 = object.wasmByteCode) !== null && _object$wasmByteCode2 !== void 0 ? _object$wasmByteCode2 : new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    message.unpinCode = (_object$unpinCode = object.unpinCode) !== null && _object$unpinCode !== void 0 ? _object$unpinCode : false;
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.label = (_object$label3 = object.label) !== null && _object$label3 !== void 0 ? _object$label3 : "";
    message.msg = (_object$msg6 = object.msg) !== null && _object$msg6 !== void 0 ? _object$msg6 : new Uint8Array();
    message.funds = ((_object$funds4 = object.funds) === null || _object$funds4 === void 0 ? void 0 : _object$funds4.map((e) => Coin.fromPartial(e))) || [];
    message.source = (_object$source = object.source) !== null && _object$source !== void 0 ? _object$source : "";
    message.builder = (_object$builder = object.builder) !== null && _object$builder !== void 0 ? _object$builder : "";
    message.codeHash = (_object$codeHash = object.codeHash) !== null && _object$codeHash !== void 0 ? _object$codeHash : new Uint8Array();
    return message;
  }
};
function createBaseMsgStoreAndInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
var MsgStoreAndInstantiateContractResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== void 0 && (obj.address = message.address);
    message.data !== void 0 && (obj.data = base64FromBytes(message.data !== void 0 ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$address3, _object$data6;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.data = (_object$data6 = object.data) !== null && _object$data6 !== void 0 ? _object$data6 : new Uint8Array();
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmwasm/wasm/v1/tx.rpc.msg.js
var MsgClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.instantiateContract2 = this.instantiateContract2.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
    this.updateInstantiateConfig = this.updateInstantiateConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.sudoContract = this.sudoContract.bind(this);
    this.pinCodes = this.pinCodes.bind(this);
    this.unpinCodes = this.unpinCodes.bind(this);
    this.storeAndInstantiateContract = this.storeAndInstantiateContract.bind(this);
  }
  storeCode(request) {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data2) => MsgStoreCodeResponse.decode(new _m02.Reader(data2)));
  }
  instantiateContract(request) {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then((data2) => MsgInstantiateContractResponse.decode(new _m02.Reader(data2)));
  }
  instantiateContract2(request) {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
    return promise.then((data2) => MsgInstantiateContract2Response.decode(new _m02.Reader(data2)));
  }
  executeContract(request) {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then((data2) => MsgExecuteContractResponse.decode(new _m02.Reader(data2)));
  }
  migrateContract(request) {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data2) => MsgMigrateContractResponse.decode(new _m02.Reader(data2)));
  }
  updateAdmin(request) {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then((data2) => MsgUpdateAdminResponse.decode(new _m02.Reader(data2)));
  }
  clearAdmin(request) {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then((data2) => MsgClearAdminResponse.decode(new _m02.Reader(data2)));
  }
  updateInstantiateConfig(request) {
    const data = MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
    return promise.then((data2) => MsgUpdateInstantiateConfigResponse.decode(new _m02.Reader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new _m02.Reader(data2)));
  }
  sudoContract(request) {
    const data = MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
    return promise.then((data2) => MsgSudoContractResponse.decode(new _m02.Reader(data2)));
  }
  pinCodes(request) {
    const data = MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
    return promise.then((data2) => MsgPinCodesResponse.decode(new _m02.Reader(data2)));
  }
  unpinCodes(request) {
    const data = MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
    return promise.then((data2) => MsgUnpinCodesResponse.decode(new _m02.Reader(data2)));
  }
  storeAndInstantiateContract(request) {
    const data = MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
    return promise.then((data2) => MsgStoreAndInstantiateContractResponse.decode(new _m02.Reader(data2)));
  }
};

export {
  MsgStoreCode,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateAdmin,
  MsgClearAdmin,
  MsgUpdateInstantiateConfig,
  MsgUpdateParams,
  MsgSudoContract,
  MsgPinCodes,
  MsgUnpinCodes,
  MsgStoreAndInstantiateContract,
  tx_exports,
  MsgClientImpl,
  tx_rpc_msg_exports
};
//# sourceMappingURL=chunk-V7NAUS23.js.map
