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
    this.params = this.params.bind(this);
    this.validatorDistributionInfo = this.validatorDistributionInfo.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  /* Params queries params of the distribution module. */
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
              endpoint = "cosmos/distribution/v1beta1/params";
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
    }() /* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  }, {
    key: "validatorDistributionInfo",
    value: function () {
      var _validatorDistributionInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/validators/".concat(params.validatorAddress);
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
      function validatorDistributionInfo(_x) {
        return _validatorDistributionInfo.apply(this, arguments);
      }
      return validatorDistributionInfo;
    }() /* ValidatorOutstandingRewards queries rewards of a validator address. */
  }, {
    key: "validatorOutstandingRewards",
    value: function () {
      var _validatorOutstandingRewards = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/validators/".concat(params.validatorAddress, "/outstanding_rewards");
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
      function validatorOutstandingRewards(_x2) {
        return _validatorOutstandingRewards.apply(this, arguments);
      }
      return validatorOutstandingRewards;
    }() /* ValidatorCommission queries accumulated commission for a validator. */
  }, {
    key: "validatorCommission",
    value: function () {
      var _validatorCommission = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/validators/".concat(params.validatorAddress, "/commission");
              _context4.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function validatorCommission(_x3) {
        return _validatorCommission.apply(this, arguments);
      }
      return validatorCommission;
    }() /* ValidatorSlashes queries slash events of a validator. */
  }, {
    key: "validatorSlashes",
    value: function () {
      var _validatorSlashes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.startingHeight) !== "undefined") {
                options.params.starting_height = params.startingHeight;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.endingHeight) !== "undefined") {
                options.params.ending_height = params.endingHeight;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/distribution/v1beta1/validators/".concat(params.validatorAddress, "/slashes");
              _context5.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context5.abrupt("return", _context5.sent);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function validatorSlashes(_x4) {
        return _validatorSlashes.apply(this, arguments);
      }
      return validatorSlashes;
    }() /* DelegationRewards queries the total rewards accrued by a delegation. */
  }, {
    key: "delegationRewards",
    value: function () {
      var _delegationRewards = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/delegators/".concat(params.delegatorAddress, "/rewards/").concat(params.validatorAddress);
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
      function delegationRewards(_x5) {
        return _delegationRewards.apply(this, arguments);
      }
      return delegationRewards;
    }()
    /* DelegationTotalRewards queries the total rewards accrued by a each
     validator. */
  }, {
    key: "delegationTotalRewards",
    value: function () {
      var _delegationTotalRewards = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/delegators/".concat(params.delegatorAddress, "/rewards");
              _context7.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context7.abrupt("return", _context7.sent);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function delegationTotalRewards(_x6) {
        return _delegationTotalRewards.apply(this, arguments);
      }
      return delegationTotalRewards;
    }() /* DelegatorValidators queries the validators of a delegator. */
  }, {
    key: "delegatorValidators",
    value: function () {
      var _delegatorValidators = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/delegators/".concat(params.delegatorAddress, "/validators");
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
      function delegatorValidators(_x7) {
        return _delegatorValidators.apply(this, arguments);
      }
      return delegatorValidators;
    }() /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  }, {
    key: "delegatorWithdrawAddress",
    value: function () {
      var _delegatorWithdrawAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "cosmos/distribution/v1beta1/delegators/".concat(params.delegatorAddress, "/withdraw_address");
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
      function delegatorWithdrawAddress(_x8) {
        return _delegatorWithdrawAddress.apply(this, arguments);
      }
      return delegatorWithdrawAddress;
    }() /* CommunityPool queries the community pool coins. */
  }, {
    key: "communityPool",
    value: function () {
      var _communityPool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var _params,
          endpoint,
          _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _params = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
              endpoint = "cosmos/distribution/v1beta1/community_pool";
              _context10.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context10.abrupt("return", _context10.sent);
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function communityPool() {
        return _communityPool.apply(this, arguments);
      }
      return communityPool;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;