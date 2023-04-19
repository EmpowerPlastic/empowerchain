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
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "grants",
    value: function grants(request) {
      var data = _query.QueryGrantsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
      return promise.then(function (data) {
        return _query.QueryGrantsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "granterGrants",
    value: function granterGrants(request) {
      var data = _query.QueryGranterGrantsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
      return promise.then(function (data) {
        return _query.QueryGranterGrantsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "granteeGrants",
    value: function granteeGrants(request) {
      var data = _query.QueryGranteeGrantsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
      return promise.then(function (data) {
        return _query.QueryGranteeGrantsResponse.decode(new _m0.Reader(data));
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
    grants: function grants(request) {
      return queryService.grants(request);
    },
    granterGrants: function granterGrants(request) {
      return queryService.granterGrants(request);
    },
    granteeGrants: function granteeGrants(request) {
      return queryService.granteeGrants(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;