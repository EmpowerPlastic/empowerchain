"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empowerchain = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _107 = _interopRequireWildcard(require("./accesscontrol/events"));
var _108 = _interopRequireWildcard(require("./accesscontrol/genesis"));
var _109 = _interopRequireWildcard(require("./accesscontrol/permission"));
var _110 = _interopRequireWildcard(require("./plasticcredit/authz"));
var _111 = _interopRequireWildcard(require("./plasticcredit/events"));
var _112 = _interopRequireWildcard(require("./plasticcredit/genesis"));
var _113 = _interopRequireWildcard(require("./plasticcredit/query"));
var _114 = _interopRequireWildcard(require("./plasticcredit/tx"));
var _115 = _interopRequireWildcard(require("./plasticcredit/types"));
var _116 = _interopRequireWildcard(require("./proofofexistence/events"));
var _117 = _interopRequireWildcard(require("./proofofexistence/genesis"));
var _118 = _interopRequireWildcard(require("./proofofexistence/query"));
var _119 = _interopRequireWildcard(require("./proofofexistence/tx"));
var _120 = _interopRequireWildcard(require("./proofofexistence/types"));
var _232 = _interopRequireWildcard(require("./plasticcredit/tx.amino"));
var _233 = _interopRequireWildcard(require("./proofofexistence/tx.amino"));
var _234 = _interopRequireWildcard(require("./plasticcredit/tx.registry"));
var _235 = _interopRequireWildcard(require("./proofofexistence/tx.registry"));
var _236 = _interopRequireWildcard(require("./plasticcredit/query.lcd"));
var _237 = _interopRequireWildcard(require("./proofofexistence/query.lcd"));
var _238 = _interopRequireWildcard(require("./plasticcredit/query.rpc.Query"));
var _239 = _interopRequireWildcard(require("./proofofexistence/query.rpc.Query"));
var _240 = _interopRequireWildcard(require("./plasticcredit/tx.rpc.msg"));
var _241 = _interopRequireWildcard(require("./proofofexistence/tx.rpc.msg"));
var _245 = _interopRequireWildcard(require("./lcd"));
var _246 = _interopRequireWildcard(require("./rpc.query"));
var _247 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var empowerchain;
exports.empowerchain = empowerchain;
(function (_empowerchain) {
  var accesscontrol = _empowerchain.accesscontrol = _objectSpread(_objectSpread(_objectSpread({}, _107), _108), _109);
  var plasticcredit = _empowerchain.plasticcredit = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _110), _111), _112), _113), _114), _115), _232), _234), _236), _238), _240);
  var proofofexistence = _empowerchain.proofofexistence = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _116), _117), _118), _119), _120), _233), _235), _237), _239), _241);
  var ClientFactory = _empowerchain.ClientFactory = _objectSpread(_objectSpread(_objectSpread({}, _245), _246), _247);
})(empowerchain || (exports.empowerchain = empowerchain = {}));