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
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  /* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "accounts",
    value: function () {
      var _accounts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var params,
          options,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/auth/v1beta1/accounts";
              _context.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context.abrupt("return", _context.sent);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function accounts() {
        return _accounts.apply(this, arguments);
      }
      return accounts;
    }() /* Account returns account details based on address. */
  }, {
    key: "account",
    value: function () {
      var _account = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/auth/v1beta1/accounts/".concat(params.address);
              _context2.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function account(_x) {
        return _account.apply(this, arguments);
      }
      return account;
    }()
    /* AccountAddressByID returns account address based on account number.
    
     Since: cosmos-sdk 0.46.2 */
  }, {
    key: "accountAddressByID",
    value: function () {
      var _accountAddressByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.accountId) !== "undefined") {
                options.params.account_id = params.accountId;
              }
              endpoint = "cosmos/auth/v1beta1/address_by_id/".concat(params.id);
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
      function accountAddressByID(_x2) {
        return _accountAddressByID.apply(this, arguments);
      }
      return accountAddressByID;
    }() /* Params queries all parameters. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _params,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              endpoint = "cosmos/auth/v1beta1/params";
              _context4.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context4.abrupt("return", _context4.sent);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }()
    /* ModuleAccounts returns all the existing module accounts.
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "moduleAccounts",
    value: function () {
      var _moduleAccounts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _params,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              endpoint = "cosmos/auth/v1beta1/module_accounts";
              _context5.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context5.abrupt("return", _context5.sent);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function moduleAccounts() {
        return _moduleAccounts.apply(this, arguments);
      }
      return moduleAccounts;
    }() /* ModuleAccountByName returns the module account info by module name */
  }, {
    key: "moduleAccountByName",
    value: function () {
      var _moduleAccountByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmos/auth/v1beta1/module_accounts/".concat(params.name);
              _context6.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context6.abrupt("return", _context6.sent);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function moduleAccountByName(_x3) {
        return _moduleAccountByName.apply(this, arguments);
      }
      return moduleAccountByName;
    }()
    /* Bech32Prefix queries bech32Prefix
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "bech32Prefix",
    value: function () {
      var _bech32Prefix = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _params,
          endpoint,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              endpoint = "cosmos/auth/v1beta1/bech32";
              _context7.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context7.abrupt("return", _context7.sent);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function bech32Prefix() {
        return _bech32Prefix.apply(this, arguments);
      }
      return bech32Prefix;
    }()
    /* AddressBytesToString converts Account Address bytes to string
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "addressBytesToString",
    value: function () {
      var _addressBytesToString = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              endpoint = "cosmos/auth/v1beta1/bech32/".concat(params.addressBytes);
              _context8.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context8.abrupt("return", _context8.sent);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function addressBytesToString(_x4) {
        return _addressBytesToString.apply(this, arguments);
      }
      return addressBytesToString;
    }()
    /* AddressStringToBytes converts Address string to bytes
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "addressStringToBytes",
    value: function () {
      var _addressStringToBytes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "cosmos/auth/v1beta1/bech32/".concat(params.addressString);
              _context9.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context9.abrupt("return", _context9.sent);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function addressStringToBytes(_x5) {
        return _addressStringToBytes.apply(this, arguments);
      }
      return addressStringToBytes;
    }()
    /* AccountInfo queries account info which is common to all account types.
    
     Since: cosmos-sdk 0.47 */
  }, {
    key: "accountInfo",
    value: function () {
      var _accountInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              endpoint = "cosmos/auth/v1beta1/account_info/".concat(params.address);
              _context10.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context10.abrupt("return", _context10.sent);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function accountInfo(_x6) {
        return _accountInfo.apply(this, arguments);
      }
      return accountInfo;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;