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
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  /* Evidence queries evidence based on evidence hash. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "evidence",
    value: function () {
      var _evidence = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.evidenceHash) !== "undefined") {
                options.params.evidence_hash = params.evidenceHash;
              }
              endpoint = "cosmos/evidence/v1beta1/evidence/".concat(params.hash);
              _context.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function evidence(_x) {
        return _evidence.apply(this, arguments);
      }
      return evidence;
    }() /* AllEvidence queries all evidence. */
  }, {
    key: "allEvidence",
    value: function () {
      var _allEvidence = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var params,
          options,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/evidence/v1beta1/evidence";
              _context2.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context2.abrupt("return", _context2.sent);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function allEvidence() {
        return _allEvidence.apply(this, arguments);
      }
      return allEvidence;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;