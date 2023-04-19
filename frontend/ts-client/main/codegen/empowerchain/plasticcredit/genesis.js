"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _types = require("./types");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenesisState() {
  return {
    params: undefined,
    idCounters: undefined,
    issuers: [],
    applicants: [],
    creditClasses: [],
    projects: [],
    creditCollections: [],
    creditBalances: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _types.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.idCounters !== undefined) {
      _types.IDCounters.encode(message.idCounters, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.issuers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.Issuer.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.applicants),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _types.Applicant.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.creditClasses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _types.CreditClass.encode(_v2, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.projects),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _types.Project.encode(_v3, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.creditCollections),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        _types.CreditCollection.encode(_v4, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.creditBalances),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v5 = _step6.value;
        _types.CreditBalance.encode(_v5, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _types.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.idCounters = _types.IDCounters.decode(reader, reader.uint32());
          break;
        case 3:
          message.issuers.push(_types.Issuer.decode(reader, reader.uint32()));
          break;
        case 4:
          message.applicants.push(_types.Applicant.decode(reader, reader.uint32()));
          break;
        case 5:
          message.creditClasses.push(_types.CreditClass.decode(reader, reader.uint32()));
          break;
        case 6:
          message.projects.push(_types.Project.decode(reader, reader.uint32()));
          break;
        case 7:
          message.creditCollections.push(_types.CreditCollection.decode(reader, reader.uint32()));
          break;
        case 8:
          message.creditBalances.push(_types.CreditBalance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$issuers, _object$applicants, _object$creditClasses, _object$projects, _object$creditCollect, _object$creditBalance;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _types.Params.fromPartial(object.params) : undefined;
    message.idCounters = object.idCounters !== undefined && object.idCounters !== null ? _types.IDCounters.fromPartial(object.idCounters) : undefined;
    message.issuers = ((_object$issuers = object.issuers) === null || _object$issuers === void 0 ? void 0 : _object$issuers.map(function (e) {
      return _types.Issuer.fromPartial(e);
    })) || [];
    message.applicants = ((_object$applicants = object.applicants) === null || _object$applicants === void 0 ? void 0 : _object$applicants.map(function (e) {
      return _types.Applicant.fromPartial(e);
    })) || [];
    message.creditClasses = ((_object$creditClasses = object.creditClasses) === null || _object$creditClasses === void 0 ? void 0 : _object$creditClasses.map(function (e) {
      return _types.CreditClass.fromPartial(e);
    })) || [];
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(function (e) {
      return _types.Project.fromPartial(e);
    })) || [];
    message.creditCollections = ((_object$creditCollect = object.creditCollections) === null || _object$creditCollect === void 0 ? void 0 : _object$creditCollect.map(function (e) {
      return _types.CreditCollection.fromPartial(e);
    })) || [];
    message.creditBalances = ((_object$creditBalance = object.creditBalances) === null || _object$creditBalance === void 0 ? void 0 : _object$creditBalance.map(function (e) {
      return _types.CreditBalance.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;