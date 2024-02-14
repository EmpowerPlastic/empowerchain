import {
  Any
} from "./chunk-5CF6M437.js";
import {
  PageRequest,
  PageResponse
} from "./chunk-PJKHK357.js";
import {
  require_build8 as require_build
} from "./chunk-2STNDH4F.js";
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

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/nft/v1beta1/query.rpc.Query.js
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
var _m03 = __toESM(require_minimal());
var import_stargate = __toESM(require_build());

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/nft/v1beta1/query.js
var query_exports = {};
__export(query_exports, {
  QueryBalanceRequest: () => QueryBalanceRequest,
  QueryBalanceResponse: () => QueryBalanceResponse,
  QueryClassRequest: () => QueryClassRequest,
  QueryClassResponse: () => QueryClassResponse,
  QueryClassesRequest: () => QueryClassesRequest,
  QueryClassesResponse: () => QueryClassesResponse,
  QueryNFTRequest: () => QueryNFTRequest,
  QueryNFTResponse: () => QueryNFTResponse,
  QueryNFTsRequest: () => QueryNFTsRequest,
  QueryNFTsResponse: () => QueryNFTsResponse,
  QueryOwnerRequest: () => QueryOwnerRequest,
  QueryOwnerResponse: () => QueryOwnerResponse,
  QuerySupplyRequest: () => QuerySupplyRequest,
  QuerySupplyResponse: () => QuerySupplyResponse
});

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/nft/v1beta1/nft.js
var nft_exports = {};
__export(nft_exports, {
  Class: () => Class,
  NFT: () => NFT
});
var _m0 = __toESM(require_minimal());
function createBaseClass() {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: void 0
  };
}
var Class = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== void 0) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== void 0 && (obj.id = message.id);
    message.name !== void 0 && (obj.name = message.name);
    message.symbol !== void 0 && (obj.symbol = message.symbol);
    message.description !== void 0 && (obj.description = message.description);
    message.uri !== void 0 && (obj.uri = message.uri);
    message.uriHash !== void 0 && (obj.uriHash = message.uriHash);
    message.data !== void 0 && (obj.data = message.data ? Any.toJSON(message.data) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$id, _object$name, _object$symbol, _object$description, _object$uri, _object$uriHash;
    const message = createBaseClass();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) !== null && _object$symbol !== void 0 ? _object$symbol : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.uriHash = (_object$uriHash = object.uriHash) !== null && _object$uriHash !== void 0 ? _object$uriHash : "";
    message.data = object.data !== void 0 && object.data !== null ? Any.fromPartial(object.data) : void 0;
    return message;
  }
};
function createBaseNFT() {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: void 0
  };
}
var NFT = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== void 0) {
      Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = Any.decode(reader, reader.uint32());
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    message.id !== void 0 && (obj.id = message.id);
    message.uri !== void 0 && (obj.uri = message.uri);
    message.uriHash !== void 0 && (obj.uriHash = message.uriHash);
    message.data !== void 0 && (obj.data = message.data ? Any.toJSON(message.data) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$classId, _object$id2, _object$uri2, _object$uriHash2;
    const message = createBaseNFT();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    message.uri = (_object$uri2 = object.uri) !== null && _object$uri2 !== void 0 ? _object$uri2 : "";
    message.uriHash = (_object$uriHash2 = object.uriHash) !== null && _object$uriHash2 !== void 0 ? _object$uriHash2 : "";
    message.data = object.data !== void 0 && object.data !== null ? Any.fromPartial(object.data) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/nft/v1beta1/query.js
var _m02 = __toESM(require_minimal());
function createBaseQueryBalanceRequest() {
  return {
    classId: "",
    owner: ""
  };
}
var QueryBalanceRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    message.owner !== void 0 && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object) {
    var _object$classId, _object$owner;
    const message = createBaseQueryBalanceRequest();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  }
};
function createBaseQueryBalanceResponse() {
  return {
    amount: BigInt("0")
  };
}
var QueryBalanceResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.amount.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = BigInt(reader.uint64().toString());
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
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.amount !== void 0 && (obj.amount = (message.amount || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryOwnerRequest() {
  return {
    classId: "",
    id: ""
  };
}
var QueryOwnerRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    message.id !== void 0 && (obj.id = message.id);
    return obj;
  },
  fromPartial(object) {
    var _object$classId2, _object$id;
    const message = createBaseQueryOwnerRequest();
    message.classId = (_object$classId2 = object.classId) !== null && _object$classId2 !== void 0 ? _object$classId2 : "";
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  }
};
function createBaseQueryOwnerResponse() {
  return {
    owner: ""
  };
}
var QueryOwnerResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== void 0 && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object) {
    var _object$owner2;
    const message = createBaseQueryOwnerResponse();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  }
};
function createBaseQuerySupplyRequest() {
  return {
    classId: ""
  };
}
var QuerySupplyRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object) {
    var _object$classId3;
    const message = createBaseQuerySupplyRequest();
    message.classId = (_object$classId3 = object.classId) !== null && _object$classId3 !== void 0 ? _object$classId3 : "";
    return message;
  }
};
function createBaseQuerySupplyResponse() {
  return {
    amount: BigInt("0")
  };
}
var QuerySupplyResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(import_long.default.fromString(message.amount.toString()));
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = BigInt(reader.uint64().toString());
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
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt("0")
    };
  },
  toJSON(message) {
    const obj = {};
    message.amount !== void 0 && (obj.amount = (message.amount || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt("0");
    return message;
  }
};
function createBaseQueryNFTsRequest() {
  return {
    classId: "",
    owner: "",
    pagination: void 0
  };
}
var QueryNFTsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    message.owner !== void 0 && (obj.owner = message.owner);
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$classId4, _object$owner3;
    const message = createBaseQueryNFTsRequest();
    message.classId = (_object$classId4 = object.classId) !== null && _object$classId4 !== void 0 ? _object$classId4 : "";
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryNFTsResponse() {
  return {
    nfts: [],
    pagination: void 0
  };
}
var QueryNFTsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.nfts) {
      NFT.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map((e) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? NFT.toJSON(e) : void 0);
    } else {
      obj.nfts = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$nfts;
    const message = createBaseQueryNFTsResponse();
    message.nfts = ((_object$nfts = object.nfts) === null || _object$nfts === void 0 ? void 0 : _object$nfts.map((e) => NFT.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryNFTRequest() {
  return {
    classId: "",
    id: ""
  };
}
var QueryNFTRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    message.id !== void 0 && (obj.id = message.id);
    return obj;
  },
  fromPartial(object) {
    var _object$classId5, _object$id2;
    const message = createBaseQueryNFTRequest();
    message.classId = (_object$classId5 = object.classId) !== null && _object$classId5 !== void 0 ? _object$classId5 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    return message;
  }
};
function createBaseQueryNFTResponse() {
  return {
    nft: void 0
  };
}
var QueryNFTResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.nft !== void 0) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
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
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.nft !== void 0 && (obj.nft = message.nft ? NFT.toJSON(message.nft) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== void 0 && object.nft !== null ? NFT.fromPartial(object.nft) : void 0;
    return message;
  }
};
function createBaseQueryClassRequest() {
  return {
    classId: ""
  };
}
var QueryClassRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.classId !== void 0 && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object) {
    var _object$classId6;
    const message = createBaseQueryClassRequest();
    message.classId = (_object$classId6 = object.classId) !== null && _object$classId6 !== void 0 ? _object$classId6 : "";
    return message;
  }
};
function createBaseQueryClassResponse() {
  return {
    class: void 0
  };
}
var QueryClassResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.class !== void 0) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
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
      class: isSet(object.class) ? Class.fromJSON(object.class) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.class !== void 0 && (obj.class = message.class ? Class.toJSON(message.class) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== void 0 && object.class !== null ? Class.fromPartial(object.class) : void 0;
    return message;
  }
};
function createBaseQueryClassesRequest() {
  return {
    pagination: void 0
  };
}
var QueryClassesRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  }
};
function createBaseQueryClassesResponse() {
  return {
    classes: [],
    pagination: void 0
  };
}
var QueryClassesResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.classes) {
      Class.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : new _m02.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map((e) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? Class.toJSON(e) : void 0);
    } else {
      obj.classes = [];
    }
    message.pagination !== void 0 && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : void 0);
    return obj;
  },
  fromPartial(object) {
    var _object$classes;
    const message = createBaseQueryClassesResponse();
    message.classes = ((_object$classes = object.classes) === null || _object$classes === void 0 ? void 0 : _object$classes.map((e) => Class.fromPartial(e))) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  }
};

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/nft/v1beta1/query.rpc.Query.js
var QueryClientImpl = class {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  balance(request) {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then((data2) => QueryBalanceResponse.decode(new _m03.Reader(data2)));
  }
  owner(request) {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then((data2) => QueryOwnerResponse.decode(new _m03.Reader(data2)));
  }
  supply(request) {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then((data2) => QuerySupplyResponse.decode(new _m03.Reader(data2)));
  }
  nFTs(request) {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then((data2) => QueryNFTsResponse.decode(new _m03.Reader(data2)));
  }
  nFT(request) {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then((data2) => QueryNFTResponse.decode(new _m03.Reader(data2)));
  }
  class(request) {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then((data2) => QueryClassResponse.decode(new _m03.Reader(data2)));
  }
  classes(request = {
    pagination: void 0
  }) {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then((data2) => QueryClassesResponse.decode(new _m03.Reader(data2)));
  }
};
var createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    owner(request) {
      return queryService.owner(request);
    },
    supply(request) {
      return queryService.supply(request);
    },
    nFTs(request) {
      return queryService.nFTs(request);
    },
    nFT(request) {
      return queryService.nFT(request);
    },
    class(request) {
      return queryService.class(request);
    },
    classes(request) {
      return queryService.classes(request);
    }
  };
};

export {
  Class,
  NFT,
  nft_exports,
  query_exports,
  QueryClientImpl,
  createRpcQueryExtension,
  query_rpc_Query_exports
};
//# sourceMappingURL=chunk-3W5YYHOY.js.map
