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
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "accounts",
    value: function accounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
      return promise.then(function (data) {
        return _query.QueryAccountsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "account",
    value: function account(request) {
      var data = _query.QueryAccountRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
      return promise.then(function (data) {
        return _query.QueryAccountResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "accountAddressByID",
    value: function accountAddressByID(request) {
      var data = _query.QueryAccountAddressByIDRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
      return promise.then(function (data) {
        return _query.QueryAccountAddressByIDResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "moduleAccounts",
    value: function moduleAccounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryModuleAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
      return promise.then(function (data) {
        return _query.QueryModuleAccountsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "moduleAccountByName",
    value: function moduleAccountByName(request) {
      var data = _query.QueryModuleAccountByNameRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
      return promise.then(function (data) {
        return _query.QueryModuleAccountByNameResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "bech32Prefix",
    value: function bech32Prefix() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.Bech32PrefixRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
      return promise.then(function (data) {
        return _query.Bech32PrefixResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addressBytesToString",
    value: function addressBytesToString(request) {
      var data = _query.AddressBytesToStringRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
      return promise.then(function (data) {
        return _query.AddressBytesToStringResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "addressStringToBytes",
    value: function addressStringToBytes(request) {
      var data = _query.AddressStringToBytesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
      return promise.then(function (data) {
        return _query.AddressStringToBytesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "accountInfo",
    value: function accountInfo(request) {
      var data = _query.QueryAccountInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
      return promise.then(function (data) {
        return _query.QueryAccountInfoResponse.decode(new _m0.Reader(data));
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
    accounts: function accounts(request) {
      return queryService.accounts(request);
    },
    account: function account(request) {
      return queryService.account(request);
    },
    accountAddressByID: function accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    moduleAccounts: function moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName: function moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix: function bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString: function addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes: function addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo: function accountInfo(request) {
      return queryService.accountInfo(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;