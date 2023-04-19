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
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "grants",
    value: function () {
      var _grants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.granter) !== "undefined") {
                options.params.granter = params.granter;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.grantee) !== "undefined") {
                options.params.grantee = params.grantee;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.msgTypeUrl) !== "undefined") {
                options.params.msg_type_url = params.msgTypeUrl;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/authz/v1beta1/grants";
              _context.next = 8;
              return this.req.get(endpoint, options);
            case 8:
              return _context.abrupt("return", _context.sent);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function grants(_x) {
        return _grants.apply(this, arguments);
      }
      return grants;
    }()
    /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "granterGrants",
    value: function () {
      var _granterGrants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/authz/v1beta1/grants/granter/".concat(params.granter);
              _context2.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function granterGrants(_x2) {
        return _granterGrants.apply(this, arguments);
      }
      return granterGrants;
    }()
    /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "granteeGrants",
    value: function () {
      var _granteeGrants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
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
              endpoint = "cosmos/authz/v1beta1/grants/grantee/".concat(params.grantee);
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
      function granteeGrants(_x3) {
        return _granteeGrants.apply(this, arguments);
      }
      return granteeGrants;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;