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
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  /* Validators queries all validators that match the given status.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "validators",
    value: function () {
      var _validators = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.status) !== "undefined") {
                options.params.status = params.status;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/validators";
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
      function validators(_x) {
        return _validators.apply(this, arguments);
      }
      return validators;
    }() /* Validator queries validator info for given validator address. */
  }, {
    key: "validator",
    value: function () {
      var _validator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/staking/v1beta1/validators/".concat(params.validatorAddr);
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
      function validator(_x2) {
        return _validator.apply(this, arguments);
      }
      return validator;
    }()
    /* ValidatorDelegations queries delegate info for given validator.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "validatorDelegations",
    value: function () {
      var _validatorDelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
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
              endpoint = "cosmos/staking/v1beta1/validators/".concat(params.validatorAddr, "/delegations");
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
      function validatorDelegations(_x3) {
        return _validatorDelegations.apply(this, arguments);
      }
      return validatorDelegations;
    }()
    /* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "validatorUnbondingDelegations",
    value: function () {
      var _validatorUnbondingDelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/validators/".concat(params.validatorAddr, "/unbonding_delegations");
              _context4.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context4.abrupt("return", _context4.sent);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function validatorUnbondingDelegations(_x4) {
        return _validatorUnbondingDelegations.apply(this, arguments);
      }
      return validatorUnbondingDelegations;
    }() /* Delegation queries delegate info for given validator delegator pair. */
  }, {
    key: "delegation",
    value: function () {
      var _delegation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "cosmos/staking/v1beta1/validators/".concat(params.validatorAddr, "/delegations/").concat(params.delegatorAddr);
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
      function delegation(_x5) {
        return _delegation.apply(this, arguments);
      }
      return delegation;
    }()
    /* UnbondingDelegation queries unbonding info for given validator delegator
     pair. */
  }, {
    key: "unbondingDelegation",
    value: function () {
      var _unbondingDelegation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              endpoint = "cosmos/staking/v1beta1/validators/".concat(params.validatorAddr, "/delegations/").concat(params.delegatorAddr, "/unbonding_delegation");
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
      function unbondingDelegation(_x6) {
        return _unbondingDelegation.apply(this, arguments);
      }
      return unbondingDelegation;
    }()
    /* DelegatorDelegations queries all delegations of a given delegator address.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "delegatorDelegations",
    value: function () {
      var _delegatorDelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/delegations/".concat(params.delegatorAddr);
              _context7.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context7.abrupt("return", _context7.sent);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function delegatorDelegations(_x7) {
        return _delegatorDelegations.apply(this, arguments);
      }
      return delegatorDelegations;
    }()
    /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
     delegator address.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "delegatorUnbondingDelegations",
    value: function () {
      var _delegatorUnbondingDelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/delegators/".concat(params.delegatorAddr, "/unbonding_delegations");
              _context8.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context8.abrupt("return", _context8.sent);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function delegatorUnbondingDelegations(_x8) {
        return _delegatorUnbondingDelegations.apply(this, arguments);
      }
      return delegatorUnbondingDelegations;
    }()
    /* Redelegations queries redelegations of given address.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "redelegations",
    value: function () {
      var _redelegations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.srcValidatorAddr) !== "undefined") {
                options.params.src_validator_addr = params.srcValidatorAddr;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.dstValidatorAddr) !== "undefined") {
                options.params.dst_validator_addr = params.dstValidatorAddr;
              }
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/delegators/".concat(params.delegatorAddr, "/redelegations");
              _context9.next = 7;
              return this.req.get(endpoint, options);
            case 7:
              return _context9.abrupt("return", _context9.sent);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function redelegations(_x9) {
        return _redelegations.apply(this, arguments);
      }
      return redelegations;
    }()
    /* DelegatorValidators queries all validators info for given delegator
     address.
    
     When called from another module, this query might consume a high amount of
     gas if the pagination field is incorrectly set. */
  }, {
    key: "delegatorValidators",
    value: function () {
      var _delegatorValidators = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "cosmos/staking/v1beta1/delegators/".concat(params.delegatorAddr, "/validators");
              _context10.next = 5;
              return this.req.get(endpoint, options);
            case 5:
              return _context10.abrupt("return", _context10.sent);
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function delegatorValidators(_x10) {
        return _delegatorValidators.apply(this, arguments);
      }
      return delegatorValidators;
    }()
    /* DelegatorValidator queries validator info for given delegator validator
     pair. */
  }, {
    key: "delegatorValidator",
    value: function () {
      var _delegatorValidator = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              endpoint = "cosmos/staking/v1beta1/delegators/".concat(params.delegatorAddr, "/validators/").concat(params.validatorAddr);
              _context11.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context11.abrupt("return", _context11.sent);
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function delegatorValidator(_x11) {
        return _delegatorValidator.apply(this, arguments);
      }
      return delegatorValidator;
    }() /* HistoricalInfo queries the historical info for given height. */
  }, {
    key: "historicalInfo",
    value: function () {
      var _historicalInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              endpoint = "cosmos/staking/v1beta1/historical_info/".concat(params.height);
              _context12.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context12.abrupt("return", _context12.sent);
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function historicalInfo(_x12) {
        return _historicalInfo.apply(this, arguments);
      }
      return historicalInfo;
    }() /* Pool queries the pool info. */
  }, {
    key: "pool",
    value: function () {
      var _pool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        var _params,
          endpoint,
          _args13 = arguments;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _params = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
              endpoint = "cosmos/staking/v1beta1/pool";
              _context13.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context13.abrupt("return", _context13.sent);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function pool() {
        return _pool.apply(this, arguments);
      }
      return pool;
    }() /* Parameters queries the staking parameters. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        var _params,
          endpoint,
          _args14 = arguments;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _params = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
              endpoint = "cosmos/staking/v1beta1/params";
              _context14.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context14.abrupt("return", _context14.sent);
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;