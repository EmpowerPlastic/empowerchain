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
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }
  /* Params returns the total set of minting parameters. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "cosmos/mint/v1beta1/params";
              _context.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context.abrupt("return", _context.sent);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }() /* Inflation returns the current minting inflation value. */
  }, {
    key: "inflation",
    value: function () {
      var _inflation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _params,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              endpoint = "cosmos/mint/v1beta1/inflation";
              _context2.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context2.abrupt("return", _context2.sent);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function inflation() {
        return _inflation.apply(this, arguments);
      }
      return inflation;
    }() /* AnnualProvisions current minting annual provisions value. */
  }, {
    key: "annualProvisions",
    value: function () {
      var _annualProvisions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "cosmos/mint/v1beta1/annual_provisions";
              _context3.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context3.abrupt("return", _context3.sent);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function annualProvisions() {
        return _annualProvisions.apply(this, arguments);
      }
      return annualProvisions;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;