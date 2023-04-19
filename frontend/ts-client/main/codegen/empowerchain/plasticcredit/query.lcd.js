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
var _helpers = require("../../helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuer = this.issuer.bind(this);
    this.applicants = this.applicants.bind(this);
    this.applicant = this.applicant.bind(this);
    this.creditClasses = this.creditClasses.bind(this);
    this.creditClass = this.creditClass.bind(this);
    this.projects = this.projects.bind(this);
    this.project = this.project.bind(this);
    this.creditCollection = this.creditCollection.bind(this);
    this.creditBalances = this.creditBalances.bind(this);
    this.creditBalance = this.creditBalance.bind(this);
  }
  /* Params */
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
              endpoint = "empowerchain/empowerchain/plasticcredit/params";
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
    }() /* Issuers */
  }, {
    key: "issuers",
    value: function () {
      var _issuers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
              endpoint = "empowerchain/empowerchain/plasticcredit/issuers";
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
      function issuers() {
        return _issuers.apply(this, arguments);
      }
      return issuers;
    }() /* Issuer */
  }, {
    key: "issuer",
    value: function () {
      var _issuer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/issuers/".concat(params.issuerId);
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
      function issuer(_x) {
        return _issuer.apply(this, arguments);
      }
      return issuer;
    }() /* Applicants */
  }, {
    key: "applicants",
    value: function () {
      var _applicants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var params,
          options,
          endpoint,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "empowerchain/empowerchain/plasticcredit/applicants";
              _context4.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function applicants() {
        return _applicants.apply(this, arguments);
      }
      return applicants;
    }() /* Applicant */
  }, {
    key: "applicant",
    value: function () {
      var _applicant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/applicants/".concat(params.applicantId);
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
      function applicant(_x2) {
        return _applicant.apply(this, arguments);
      }
      return applicant;
    }() /* CreditClasses */
  }, {
    key: "creditClasses",
    value: function () {
      var _creditClasses = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var params,
          options,
          endpoint,
          _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "empowerchain/empowerchain/plasticcredit/credit-classes";
              _context6.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context6.abrupt("return", _context6.sent);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function creditClasses() {
        return _creditClasses.apply(this, arguments);
      }
      return creditClasses;
    }() /* CreditClass */
  }, {
    key: "creditClass",
    value: function () {
      var _creditClass = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/credit-classes/".concat(params.creditClassAbbreviation);
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
      function creditClass(_x3) {
        return _creditClass.apply(this, arguments);
      }
      return creditClass;
    }() /* Projects */
  }, {
    key: "projects",
    value: function () {
      var _projects = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var params,
          options,
          endpoint,
          _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "empowerchain/empowerchain/plasticcredit/projects";
              _context8.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context8.abrupt("return", _context8.sent);
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function projects() {
        return _projects.apply(this, arguments);
      }
      return projects;
    }() /* Project */
  }, {
    key: "project",
    value: function () {
      var _project = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/projects/".concat(params.projectId);
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
      function project(_x4) {
        return _project.apply(this, arguments);
      }
      return project;
    }() /* CreditCollection */
  }, {
    key: "creditCollection",
    value: function () {
      var _creditCollection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/creditcollections/".concat(params.denom);
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
      function creditCollection(_x5) {
        return _creditCollection.apply(this, arguments);
      }
      return creditCollection;
    }() /* CreditBalances */
  }, {
    key: "creditBalances",
    value: function () {
      var _creditBalances = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        var params,
          options,
          endpoint,
          _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              params = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "empowerchain/empowerchain/plasticcredit/creditbalances";
              _context11.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context11.abrupt("return", _context11.sent);
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function creditBalances() {
        return _creditBalances.apply(this, arguments);
      }
      return creditBalances;
    }() /* CreditBalance */
  }, {
    key: "creditBalance",
    value: function () {
      var _creditBalance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              endpoint = "empowerchain/empowerchain/plasticcredit/creditbalances/".concat(params.owner, "/").concat(params.denom);
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
      function creditBalance(_x6) {
        return _creditBalance.apply(this, arguments);
      }
      return creditBalance;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;