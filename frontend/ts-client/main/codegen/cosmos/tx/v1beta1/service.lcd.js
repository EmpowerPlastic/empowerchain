"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("../../../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.getTx = this.getTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }
  /* GetTx fetches a tx by hash. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "getTx",
    value: function () {
      var _getTx = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "cosmos/tx/v1beta1/txs/".concat(params.hash);
              _context.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getTx(_x) {
        return _getTx.apply(this, arguments);
      }
      return getTx;
    }() /* GetTxsEvent fetches txs by event. */
  }, {
    key: "getTxsEvent",
    value: function () {
      var _getTxsEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.events) !== "undefined") {
                options.params.events = params.events;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.orderBy) !== "undefined") {
                options.params.order_by = params.orderBy;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.page) !== "undefined") {
                options.params.page = params.page;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.limit) !== "undefined") {
                options.params.limit = params.limit;
              }
              endpoint = "cosmos/tx/v1beta1/txs";
              _context2.next = 9;
              return this.req.get(endpoint, options);
            case 9:
              return _context2.abrupt("return", _context2.sent);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getTxsEvent(_x2) {
        return _getTxsEvent.apply(this, arguments);
      }
      return getTxsEvent;
    }()
    /* GetBlockWithTxs fetches a block with decoded txs.
    
     Since: cosmos-sdk 0.45.2 */
  }, {
    key: "getBlockWithTxs",
    value: function () {
      var _getBlockWithTxs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/tx/v1beta1/txs/block/".concat(params.height);
              _context3.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getBlockWithTxs(_x3) {
        return _getBlockWithTxs.apply(this, arguments);
      }
      return getBlockWithTxs;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;