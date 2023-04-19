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
    this.updateParams = this.updateParams.bind(this);
    this.createIssuer = this.createIssuer.bind(this);
    this.updateIssuer = this.updateIssuer.bind(this);
    this.createApplicant = this.createApplicant.bind(this);
    this.updateApplicant = this.updateApplicant.bind(this);
    this.createCreditClass = this.createCreditClass.bind(this);
    this.updateCreditClass = this.updateCreditClass.bind(this);
    this.createProject = this.createProject.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.approveProject = this.approveProject.bind(this);
    this.rejectProject = this.rejectProject.bind(this);
    this.suspendProject = this.suspendProject.bind(this);
    this.issueCredits = this.issueCredits.bind(this);
    this.transferCredits = this.transferCredits.bind(this);
    this.retireCredits = this.retireCredits.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "updateParams",
    value: function updateParams(request) {
      var data = _tx.MsgUpdateParams.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateParams", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createIssuer",
    value: function createIssuer(request) {
      var data = _tx.MsgCreateIssuer.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateIssuer", data);
      return promise.then(function (data) {
        return _tx.MsgCreateIssuerResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateIssuer",
    value: function updateIssuer(request) {
      var data = _tx.MsgUpdateIssuer.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateIssuer", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateIssuerResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createApplicant",
    value: function createApplicant(request) {
      var data = _tx.MsgCreateApplicant.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateApplicant", data);
      return promise.then(function (data) {
        return _tx.MsgCreateApplicantResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateApplicant",
    value: function updateApplicant(request) {
      var data = _tx.MsgUpdateApplicant.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateApplicant", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateApplicantResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createCreditClass",
    value: function createCreditClass(request) {
      var data = _tx.MsgCreateCreditClass.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateCreditClass", data);
      return promise.then(function (data) {
        return _tx.MsgCreateCreditClassResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateCreditClass",
    value: function updateCreditClass(request) {
      var data = _tx.MsgUpdateCreditClass.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateCreditClass", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateCreditClassResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createProject",
    value: function createProject(request) {
      var data = _tx.MsgCreateProject.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "CreateProject", data);
      return promise.then(function (data) {
        return _tx.MsgCreateProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateProject",
    value: function updateProject(request) {
      var data = _tx.MsgUpdateProject.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "UpdateProject", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "approveProject",
    value: function approveProject(request) {
      var data = _tx.MsgApproveProject.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "ApproveProject", data);
      return promise.then(function (data) {
        return _tx.MsgApproveProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "rejectProject",
    value: function rejectProject(request) {
      var data = _tx.MsgRejectProject.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RejectProject", data);
      return promise.then(function (data) {
        return _tx.MsgRejectProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "suspendProject",
    value: function suspendProject(request) {
      var data = _tx.MsgSuspendProject.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "SuspendProject", data);
      return promise.then(function (data) {
        return _tx.MsgSuspendProjectResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "issueCredits",
    value: function issueCredits(request) {
      var data = _tx.MsgIssueCredits.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "IssueCredits", data);
      return promise.then(function (data) {
        return _tx.MsgIssueCreditsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "transferCredits",
    value: function transferCredits(request) {
      var data = _tx.MsgTransferCredits.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "TransferCredits", data);
      return promise.then(function (data) {
        return _tx.MsgTransferCreditsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "retireCredits",
    value: function retireCredits(request) {
      var data = _tx.MsgRetireCredits.encode(request).finish();
      var promise = this.rpc.request("empowerchain.plasticcredit.Msg", "RetireCredits", data);
      return promise.then(function (data) {
        return _tx.MsgRetireCreditsResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;