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
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this["class"] = this["class"].bind(this);
    this.classes = this.classes.bind(this);
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "balance",
    value: function () {
      var _balance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "cosmos/nft/v1beta1/balance/".concat(params.owner, "/").concat(params.classId);
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
      function balance(_x) {
        return _balance.apply(this, arguments);
      }
      return balance;
    }() /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  }, {
    key: "owner",
    value: function () {
      var _owner = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/nft/v1beta1/owner/".concat(params.classId, "/").concat(params.id);
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
      function owner(_x2) {
        return _owner.apply(this, arguments);
      }
      return owner;
    }() /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  }, {
    key: "supply",
    value: function () {
      var _supply = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "cosmos/nft/v1beta1/supply/".concat(params.classId);
              _context3.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function supply(_x3) {
        return _supply.apply(this, arguments);
      }
      return supply;
    }()
    /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     ERC721Enumerable */
  }, {
    key: "nFTs",
    value: function () {
      var _nFTs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.classId) !== "undefined") {
                options.params.class_id = params.classId;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.owner) !== "undefined") {
                options.params.owner = params.owner;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/nft/v1beta1/nfts";
              _context4.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context4.abrupt("return", _context4.sent);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function nFTs(_x4) {
        return _nFTs.apply(this, arguments);
      }
      return nFTs;
    }() /* NFT queries an NFT based on its class and id. */
  }, {
    key: "nFT",
    value: function () {
      var _nFT = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "cosmos/nft/v1beta1/nfts/".concat(params.classId, "/").concat(params.id);
              _context5.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function nFT(_x5) {
        return _nFT.apply(this, arguments);
      }
      return nFT;
    }() /* Class queries an NFT class based on its id */
  }, {
    key: "class",
    value: function () {
      var _class2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmos/nft/v1beta1/classes/".concat(params.classId);
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
      function _class(_x6) {
        return _class2.apply(this, arguments);
      }
      return _class;
    }() /* Classes queries all NFT classes */
  }, {
    key: "classes",
    value: function () {
      var _classes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var params,
          options,
          endpoint,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/nft/v1beta1/classes";
              _context7.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context7.abrupt("return", _context7.sent);
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function classes() {
        return _classes.apply(this, arguments);
      }
      return classes;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;