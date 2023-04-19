"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = void 0;
var _upgrade = require("./upgrade");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseQueryCurrentPlanRequest() {
  return {};
}
var QueryCurrentPlanRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentPlanRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryCurrentPlanRequest();
    return message;
  }
};
exports.QueryCurrentPlanRequest = QueryCurrentPlanRequest;
function createBaseQueryCurrentPlanResponse() {
  return {
    plan: undefined
  };
}
var QueryCurrentPlanResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.plan !== undefined) {
      _upgrade.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = _upgrade.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? _upgrade.Plan.fromPartial(object.plan) : undefined;
    return message;
  }
};
exports.QueryCurrentPlanResponse = QueryCurrentPlanResponse;
function createBaseQueryAppliedPlanRequest() {
  return {
    name: ""
  };
}
var QueryAppliedPlanRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name;
    var message = createBaseQueryAppliedPlanRequest();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  }
};
exports.QueryAppliedPlanRequest = QueryAppliedPlanRequest;
function createBaseQueryAppliedPlanResponse() {
  return {
    height: _helpers.Long.ZERO
  };
}
var QueryAppliedPlanResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.QueryAppliedPlanResponse = QueryAppliedPlanResponse;
function createBaseQueryUpgradedConsensusStateRequest() {
  return {
    lastHeight: _helpers.Long.ZERO
  };
}
var QueryUpgradedConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? _helpers.Long.fromValue(object.lastHeight) : _helpers.Long.ZERO;
    return message;
  }
};
exports.QueryUpgradedConsensusStateRequest = QueryUpgradedConsensusStateRequest;
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}
var QueryUpgradedConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$upgradedConse;
    var message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = (_object$upgradedConse = object.upgradedConsensusState) !== null && _object$upgradedConse !== void 0 ? _object$upgradedConse : new Uint8Array();
    return message;
  }
};
exports.QueryUpgradedConsensusStateResponse = QueryUpgradedConsensusStateResponse;
function createBaseQueryModuleVersionsRequest() {
  return {
    moduleName: ""
  };
}
var QueryModuleVersionsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moduleName;
    var message = createBaseQueryModuleVersionsRequest();
    message.moduleName = (_object$moduleName = object.moduleName) !== null && _object$moduleName !== void 0 ? _object$moduleName : "";
    return message;
  }
};
exports.QueryModuleVersionsRequest = QueryModuleVersionsRequest;
function createBaseQueryModuleVersionsResponse() {
  return {
    moduleVersions: []
  };
}
var QueryModuleVersionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.moduleVersions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _upgrade.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(_upgrade.ModuleVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moduleVersion;
    var message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = ((_object$moduleVersion = object.moduleVersions) === null || _object$moduleVersion === void 0 ? void 0 : _object$moduleVersion.map(function (e) {
      return _upgrade.ModuleVersion.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryModuleVersionsResponse = QueryModuleVersionsResponse;
function createBaseQueryAuthorityRequest() {
  return {};
}
var QueryAuthorityRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAuthorityRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryAuthorityRequest();
    return message;
  }
};
exports.QueryAuthorityRequest = QueryAuthorityRequest;
function createBaseQueryAuthorityResponse() {
  return {
    address: ""
  };
}
var QueryAuthorityResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAuthorityResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseQueryAuthorityResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.QueryAuthorityResponse = QueryAuthorityResponse;