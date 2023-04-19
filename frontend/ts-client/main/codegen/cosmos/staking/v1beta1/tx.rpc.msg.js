"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _tx = require("./tx");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "createValidator",
    value: function createValidator(request) {
      var data = _tx.MsgCreateValidator.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
      return promise.then(function (data) {
        return _tx.MsgCreateValidatorResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "editValidator",
    value: function editValidator(request) {
      var data = _tx.MsgEditValidator.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
      return promise.then(function (data) {
        return _tx.MsgEditValidatorResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "delegate",
    value: function delegate(request) {
      var data = _tx.MsgDelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
      return promise.then(function (data) {
        return _tx.MsgDelegateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "beginRedelegate",
    value: function beginRedelegate(request) {
      var data = _tx.MsgBeginRedelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
      return promise.then(function (data) {
        return _tx.MsgBeginRedelegateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "undelegate",
    value: function undelegate(request) {
      var data = _tx.MsgUndelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
      return promise.then(function (data) {
        return _tx.MsgUndelegateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "cancelUnbondingDelegation",
    value: function cancelUnbondingDelegation(request) {
      var data = _tx.MsgCancelUnbondingDelegation.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
      return promise.then(function (data) {
        return _tx.MsgCancelUnbondingDelegationResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateParams",
    value: function updateParams(request) {
      var data = _tx.MsgUpdateParams.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UpdateParams", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;