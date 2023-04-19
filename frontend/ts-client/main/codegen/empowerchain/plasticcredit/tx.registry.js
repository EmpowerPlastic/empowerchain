"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/empowerchain.plasticcredit.MsgUpdateParams", _tx.MsgUpdateParams], ["/empowerchain.plasticcredit.MsgCreateIssuer", _tx.MsgCreateIssuer], ["/empowerchain.plasticcredit.MsgUpdateIssuer", _tx.MsgUpdateIssuer], ["/empowerchain.plasticcredit.MsgCreateApplicant", _tx.MsgCreateApplicant], ["/empowerchain.plasticcredit.MsgUpdateApplicant", _tx.MsgUpdateApplicant], ["/empowerchain.plasticcredit.MsgCreateCreditClass", _tx.MsgCreateCreditClass], ["/empowerchain.plasticcredit.MsgUpdateCreditClass", _tx.MsgUpdateCreditClass], ["/empowerchain.plasticcredit.MsgCreateProject", _tx.MsgCreateProject], ["/empowerchain.plasticcredit.MsgUpdateProject", _tx.MsgUpdateProject], ["/empowerchain.plasticcredit.MsgApproveProject", _tx.MsgApproveProject], ["/empowerchain.plasticcredit.MsgRejectProject", _tx.MsgRejectProject], ["/empowerchain.plasticcredit.MsgSuspendProject", _tx.MsgSuspendProject], ["/empowerchain.plasticcredit.MsgIssueCredits", _tx.MsgIssueCredits], ["/empowerchain.plasticcredit.MsgTransferCredits", _tx.MsgTransferCredits], ["/empowerchain.plasticcredit.MsgRetireCredits", _tx.MsgRetireCredits]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: _tx.MsgUpdateParams.encode(value).finish()
      };
    },
    createIssuer: function createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: _tx.MsgCreateIssuer.encode(value).finish()
      };
    },
    updateIssuer: function updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: _tx.MsgUpdateIssuer.encode(value).finish()
      };
    },
    createApplicant: function createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: _tx.MsgCreateApplicant.encode(value).finish()
      };
    },
    updateApplicant: function updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: _tx.MsgUpdateApplicant.encode(value).finish()
      };
    },
    createCreditClass: function createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: _tx.MsgCreateCreditClass.encode(value).finish()
      };
    },
    updateCreditClass: function updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: _tx.MsgUpdateCreditClass.encode(value).finish()
      };
    },
    createProject: function createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: _tx.MsgCreateProject.encode(value).finish()
      };
    },
    updateProject: function updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: _tx.MsgUpdateProject.encode(value).finish()
      };
    },
    approveProject: function approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: _tx.MsgApproveProject.encode(value).finish()
      };
    },
    rejectProject: function rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: _tx.MsgRejectProject.encode(value).finish()
      };
    },
    suspendProject: function suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: _tx.MsgSuspendProject.encode(value).finish()
      };
    },
    issueCredits: function issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: _tx.MsgIssueCredits.encode(value).finish()
      };
    },
    transferCredits: function transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: _tx.MsgTransferCredits.encode(value).finish()
      };
    },
    retireCredits: function retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: _tx.MsgRetireCredits.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: value
      };
    },
    createIssuer: function createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: value
      };
    },
    updateIssuer: function updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: value
      };
    },
    createApplicant: function createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: value
      };
    },
    updateApplicant: function updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: value
      };
    },
    createCreditClass: function createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: value
      };
    },
    updateCreditClass: function updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: value
      };
    },
    createProject: function createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: value
      };
    },
    updateProject: function updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: value
      };
    },
    approveProject: function approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: value
      };
    },
    rejectProject: function rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: value
      };
    },
    suspendProject: function suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: value
      };
    },
    issueCredits: function issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: value
      };
    },
    transferCredits: function transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: value
      };
    },
    retireCredits: function retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: value
      };
    }
  },
  fromPartial: {
    updateParams: function updateParams(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateParams",
        value: _tx.MsgUpdateParams.fromPartial(value)
      };
    },
    createIssuer: function createIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateIssuer",
        value: _tx.MsgCreateIssuer.fromPartial(value)
      };
    },
    updateIssuer: function updateIssuer(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateIssuer",
        value: _tx.MsgUpdateIssuer.fromPartial(value)
      };
    },
    createApplicant: function createApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateApplicant",
        value: _tx.MsgCreateApplicant.fromPartial(value)
      };
    },
    updateApplicant: function updateApplicant(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateApplicant",
        value: _tx.MsgUpdateApplicant.fromPartial(value)
      };
    },
    createCreditClass: function createCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateCreditClass",
        value: _tx.MsgCreateCreditClass.fromPartial(value)
      };
    },
    updateCreditClass: function updateCreditClass(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
        value: _tx.MsgUpdateCreditClass.fromPartial(value)
      };
    },
    createProject: function createProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgCreateProject",
        value: _tx.MsgCreateProject.fromPartial(value)
      };
    },
    updateProject: function updateProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgUpdateProject",
        value: _tx.MsgUpdateProject.fromPartial(value)
      };
    },
    approveProject: function approveProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgApproveProject",
        value: _tx.MsgApproveProject.fromPartial(value)
      };
    },
    rejectProject: function rejectProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRejectProject",
        value: _tx.MsgRejectProject.fromPartial(value)
      };
    },
    suspendProject: function suspendProject(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgSuspendProject",
        value: _tx.MsgSuspendProject.fromPartial(value)
      };
    },
    issueCredits: function issueCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgIssueCredits",
        value: _tx.MsgIssueCredits.fromPartial(value)
      };
    },
    transferCredits: function transferCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgTransferCredits",
        value: _tx.MsgTransferCredits.fromPartial(value)
      };
    },
    retireCredits: function retireCredits(value) {
      return {
        typeUrl: "/empowerchain.plasticcredit.MsgRetireCredits",
        value: _tx.MsgRetireCredits.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;