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
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  /* CurrentPlan queries the current upgrade plan. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "currentPlan",
    value: function () {
      var _currentPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _params,
          endpoint,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              endpoint = "cosmos/upgrade/v1beta1/current_plan";
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
      function currentPlan() {
        return _currentPlan.apply(this, arguments);
      }
      return currentPlan;
    }() /* AppliedPlan queries a previously applied upgrade plan by its name. */
  }, {
    key: "appliedPlan",
    value: function () {
      var _appliedPlan = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              endpoint = "cosmos/upgrade/v1beta1/applied_plan/".concat(params.name);
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
      function appliedPlan(_x) {
        return _appliedPlan.apply(this, arguments);
      }
      return appliedPlan;
    }()
    /* UpgradedConsensusState queries the consensus state that will serve
     as a trusted kernel for the next version of this chain. It will only be
     stored at the last height of this chain.
     UpgradedConsensusState RPC not supported with legacy querier
     This rpc is deprecated now that IBC has its own replacement
     (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
  }, {
    key: "upgradedConsensusState",
    value: function () {
      var _upgradedConsensusState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "cosmos/upgrade/v1beta1/upgraded_consensus_state/".concat(params.lastHeight);
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
      function upgradedConsensusState(_x2) {
        return _upgradedConsensusState.apply(this, arguments);
      }
      return upgradedConsensusState;
    }()
    /* ModuleVersions queries the list of module versions from state.
    
     Since: cosmos-sdk 0.43 */
  }, {
    key: "moduleVersions",
    value: function () {
      var _moduleVersions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params) {
        var options, endpoint;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.moduleName) !== "undefined") {
                options.params.module_name = params.moduleName;
              }
              endpoint = "cosmos/upgrade/v1beta1/module_versions";
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
      function moduleVersions(_x3) {
        return _moduleVersions.apply(this, arguments);
      }
      return moduleVersions;
    }()
    /* Returns the account with authority to conduct upgrades
    
     Since: cosmos-sdk 0.46 */
  }, {
    key: "authority",
    value: function () {
      var _authority = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _params,
          endpoint,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              endpoint = "cosmos/upgrade/v1beta1/authority";
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
      function authority() {
        return _authority.apply(this, arguments);
      }
      return authority;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;