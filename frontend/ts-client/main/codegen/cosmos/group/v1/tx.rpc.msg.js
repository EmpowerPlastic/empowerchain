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
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "createGroup",
    value: function createGroup(request) {
      var data = _tx.MsgCreateGroup.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
      return promise.then(function (data) {
        return _tx.MsgCreateGroupResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupMembers",
    value: function updateGroupMembers(request) {
      var data = _tx.MsgUpdateGroupMembers.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupAdmin",
    value: function updateGroupAdmin(request) {
      var data = _tx.MsgUpdateGroupAdmin.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupMetadata",
    value: function updateGroupMetadata(request) {
      var data = _tx.MsgUpdateGroupMetadata.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createGroupPolicy",
    value: function createGroupPolicy(request) {
      var data = _tx.MsgCreateGroupPolicy.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
      return promise.then(function (data) {
        return _tx.MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "createGroupWithPolicy",
    value: function createGroupWithPolicy(request) {
      var data = _tx.MsgCreateGroupWithPolicy.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
      return promise.then(function (data) {
        return _tx.MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupPolicyAdmin",
    value: function updateGroupPolicyAdmin(request) {
      var data = _tx.MsgUpdateGroupPolicyAdmin.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupPolicyDecisionPolicy",
    value: function updateGroupPolicyDecisionPolicy(request) {
      var data = _tx.MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "updateGroupPolicyMetadata",
    value: function updateGroupPolicyMetadata(request) {
      var data = _tx.MsgUpdateGroupPolicyMetadata.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
      return promise.then(function (data) {
        return _tx.MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "submitProposal",
    value: function submitProposal(request) {
      var data = _tx.MsgSubmitProposal.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
      return promise.then(function (data) {
        return _tx.MsgSubmitProposalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "withdrawProposal",
    value: function withdrawProposal(request) {
      var data = _tx.MsgWithdrawProposal.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawProposalResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "vote",
    value: function vote(request) {
      var data = _tx.MsgVote.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
      return promise.then(function (data) {
        return _tx.MsgVoteResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "exec",
    value: function exec(request) {
      var data = _tx.MsgExec.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
      return promise.then(function (data) {
        return _tx.MsgExecResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "leaveGroup",
    value: function leaveGroup(request) {
      var data = _tx.MsgLeaveGroup.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
      return promise.then(function (data) {
        return _tx.MsgLeaveGroupResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;