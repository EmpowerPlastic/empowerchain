"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
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
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "issuers",
    value: function issuers() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryIssuersRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuers", data);
      return promise.then(function (data) {
        return _query.QueryIssuersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "issuer",
    value: function issuer(request) {
      var data = _query.QueryIssuerRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Issuer", data);
      return promise.then(function (data) {
        return _query.QueryIssuerResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "applicants",
    value: function applicants() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryApplicantsRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicants", data);
      return promise.then(function (data) {
        return _query.QueryApplicantsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "applicant",
    value: function applicant(request) {
      var data = _query.QueryApplicantRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Applicant", data);
      return promise.then(function (data) {
        return _query.QueryApplicantResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "creditClasses",
    value: function creditClasses() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryCreditClassesRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClasses", data);
      return promise.then(function (data) {
        return _query.QueryCreditClassesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "creditClass",
    value: function creditClass(request) {
      var data = _query.QueryCreditClassRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditClass", data);
      return promise.then(function (data) {
        return _query.QueryCreditClassResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "projects",
    value: function projects() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryProjectsRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Projects", data);
      return promise.then(function (data) {
        return _query.QueryProjectsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "project",
    value: function project(request) {
      var data = _query.QueryProjectRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "Project", data);
      return promise.then(function (data) {
        return _query.QueryProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "creditCollection",
    value: function creditCollection(request) {
      var data = _query.QueryCreditCollectionRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditCollection", data);
      return promise.then(function (data) {
        return _query.QueryCreditCollectionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "creditBalances",
    value: function creditBalances() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryCreditBalancesRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalances", data);
      return promise.then(function (data) {
        return _query.QueryCreditBalancesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "creditBalance",
    value: function creditBalance(request) {
      var data = _query.QueryCreditBalanceRequest.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Query", "CreditBalance", data);
      return promise.then(function (data) {
        return _query.QueryCreditBalanceResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    params: function params(request) {
      return queryService.params(request);
    },
    issuers: function issuers(request) {
      return queryService.issuers(request);
    },
    issuer: function issuer(request) {
      return queryService.issuer(request);
    },
    applicants: function applicants(request) {
      return queryService.applicants(request);
    },
    applicant: function applicant(request) {
      return queryService.applicant(request);
    },
    creditClasses: function creditClasses(request) {
      return queryService.creditClasses(request);
    },
    creditClass: function creditClass(request) {
      return queryService.creditClass(request);
    },
    projects: function projects(request) {
      return queryService.projects(request);
    },
    project: function project(request) {
      return queryService.project(request);
    },
    creditCollection: function creditCollection(request) {
      return queryService.creditCollection(request);
    },
    creditBalances: function creditBalances(request) {
      return queryService.creditBalances(request);
    },
    creditBalance: function creditBalance(request) {
      return queryService.creditBalance(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;