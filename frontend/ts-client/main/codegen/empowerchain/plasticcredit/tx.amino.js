"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../helpers");
var AminoConverter = {
  "/empowerchain.plasticcredit.MsgUpdateParams": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateParams",
    toAmino: function toAmino(_ref) {
      var authority = _ref.authority,
        params = _ref.params;
      return {
        authority: authority,
        params: {
          issuer_creator: params.issuerCreator,
          credit_class_creation_fee: {
            denom: params.creditClassCreationFee.denom,
            amount: _helpers.Long.fromValue(params.creditClassCreationFee.amount).toString()
          }
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var authority = _ref2.authority,
        params = _ref2.params;
      return {
        authority: authority,
        params: {
          issuerCreator: params.issuer_creator,
          creditClassCreationFee: {
            denom: params.credit_class_creation_fee.denom,
            amount: params.credit_class_creation_fee.amount
          }
        }
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateIssuer": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateIssuer",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        name = _ref3.name,
        description = _ref3.description,
        admin = _ref3.admin;
      return {
        creator: creator,
        name: name,
        description: description,
        admin: admin
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        name = _ref4.name,
        description = _ref4.description,
        admin = _ref4.admin;
      return {
        creator: creator,
        name: name,
        description: description,
        admin: admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateIssuer": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateIssuer",
    toAmino: function toAmino(_ref5) {
      var updater = _ref5.updater,
        issuerId = _ref5.issuerId,
        name = _ref5.name,
        description = _ref5.description,
        admin = _ref5.admin;
      return {
        updater: updater,
        issuer_id: issuerId.toString(),
        name: name,
        description: description,
        admin: admin
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var updater = _ref6.updater,
        issuer_id = _ref6.issuer_id,
        name = _ref6.name,
        description = _ref6.description,
        admin = _ref6.admin;
      return {
        updater: updater,
        issuerId: _helpers.Long.fromString(issuer_id),
        name: name,
        description: description,
        admin: admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateApplicant": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateApplicant",
    toAmino: function toAmino(_ref7) {
      var name = _ref7.name,
        description = _ref7.description,
        admin = _ref7.admin;
      return {
        name: name,
        description: description,
        admin: admin
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var name = _ref8.name,
        description = _ref8.description,
        admin = _ref8.admin;
      return {
        name: name,
        description: description,
        admin: admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateApplicant": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateApplicant",
    toAmino: function toAmino(_ref9) {
      var updater = _ref9.updater,
        applicantId = _ref9.applicantId,
        name = _ref9.name,
        description = _ref9.description,
        admin = _ref9.admin;
      return {
        updater: updater,
        applicant_id: applicantId.toString(),
        name: name,
        description: description,
        admin: admin
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var updater = _ref10.updater,
        applicant_id = _ref10.applicant_id,
        name = _ref10.name,
        description = _ref10.description,
        admin = _ref10.admin;
      return {
        updater: updater,
        applicantId: _helpers.Long.fromString(applicant_id),
        name: name,
        description: description,
        admin: admin
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateCreditClass": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateCreditClass",
    toAmino: function toAmino(_ref11) {
      var creator = _ref11.creator,
        abbreviation = _ref11.abbreviation,
        issuerId = _ref11.issuerId,
        name = _ref11.name;
      return {
        creator: creator,
        abbreviation: abbreviation,
        issuer_id: issuerId.toString(),
        name: name
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var creator = _ref12.creator,
        abbreviation = _ref12.abbreviation,
        issuer_id = _ref12.issuer_id,
        name = _ref12.name;
      return {
        creator: creator,
        abbreviation: abbreviation,
        issuerId: _helpers.Long.fromString(issuer_id),
        name: name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateCreditClass": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateCreditClass",
    toAmino: function toAmino(_ref13) {
      var updater = _ref13.updater,
        abbreviation = _ref13.abbreviation,
        name = _ref13.name;
      return {
        updater: updater,
        abbreviation: abbreviation,
        name: name
      };
    },
    fromAmino: function fromAmino(_ref14) {
      var updater = _ref14.updater,
        abbreviation = _ref14.abbreviation,
        name = _ref14.name;
      return {
        updater: updater,
        abbreviation: abbreviation,
        name: name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgCreateProject": {
    aminoType: "/empowerchain.plasticcredit.MsgCreateProject",
    toAmino: function toAmino(_ref15) {
      var creator = _ref15.creator,
        applicantId = _ref15.applicantId,
        creditClassAbbreviation = _ref15.creditClassAbbreviation,
        name = _ref15.name;
      return {
        creator: creator,
        applicant_id: applicantId.toString(),
        credit_class_abbreviation: creditClassAbbreviation,
        name: name
      };
    },
    fromAmino: function fromAmino(_ref16) {
      var creator = _ref16.creator,
        applicant_id = _ref16.applicant_id,
        credit_class_abbreviation = _ref16.credit_class_abbreviation,
        name = _ref16.name;
      return {
        creator: creator,
        applicantId: _helpers.Long.fromString(applicant_id),
        creditClassAbbreviation: credit_class_abbreviation,
        name: name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgUpdateProject": {
    aminoType: "/empowerchain.plasticcredit.MsgUpdateProject",
    toAmino: function toAmino(_ref17) {
      var updater = _ref17.updater,
        projectId = _ref17.projectId,
        name = _ref17.name;
      return {
        updater: updater,
        project_id: projectId.toString(),
        name: name
      };
    },
    fromAmino: function fromAmino(_ref18) {
      var updater = _ref18.updater,
        project_id = _ref18.project_id,
        name = _ref18.name;
      return {
        updater: updater,
        projectId: _helpers.Long.fromString(project_id),
        name: name
      };
    }
  },
  "/empowerchain.plasticcredit.MsgApproveProject": {
    aminoType: "/empowerchain.plasticcredit.MsgApproveProject",
    toAmino: function toAmino(_ref19) {
      var approver = _ref19.approver,
        projectId = _ref19.projectId;
      return {
        approver: approver,
        project_id: projectId.toString()
      };
    },
    fromAmino: function fromAmino(_ref20) {
      var approver = _ref20.approver,
        project_id = _ref20.project_id;
      return {
        approver: approver,
        projectId: _helpers.Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgRejectProject": {
    aminoType: "/empowerchain.plasticcredit.MsgRejectProject",
    toAmino: function toAmino(_ref21) {
      var rejector = _ref21.rejector,
        projectId = _ref21.projectId;
      return {
        rejector: rejector,
        project_id: projectId.toString()
      };
    },
    fromAmino: function fromAmino(_ref22) {
      var rejector = _ref22.rejector,
        project_id = _ref22.project_id;
      return {
        rejector: rejector,
        projectId: _helpers.Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgSuspendProject": {
    aminoType: "/empowerchain.plasticcredit.MsgSuspendProject",
    toAmino: function toAmino(_ref23) {
      var updater = _ref23.updater,
        projectId = _ref23.projectId;
      return {
        updater: updater,
        project_id: projectId.toString()
      };
    },
    fromAmino: function fromAmino(_ref24) {
      var updater = _ref24.updater,
        project_id = _ref24.project_id;
      return {
        updater: updater,
        projectId: _helpers.Long.fromString(project_id)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgIssueCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgIssueCredits",
    toAmino: function toAmino(_ref25) {
      var creator = _ref25.creator,
        projectId = _ref25.projectId,
        serialNumber = _ref25.serialNumber,
        creditAmount = _ref25.creditAmount;
      return {
        creator: creator,
        project_id: projectId.toString(),
        serial_number: serialNumber,
        credit_amount: creditAmount.toString()
      };
    },
    fromAmino: function fromAmino(_ref26) {
      var creator = _ref26.creator,
        project_id = _ref26.project_id,
        serial_number = _ref26.serial_number,
        credit_amount = _ref26.credit_amount;
      return {
        creator: creator,
        projectId: _helpers.Long.fromString(project_id),
        serialNumber: serial_number,
        creditAmount: _helpers.Long.fromString(credit_amount)
      };
    }
  },
  "/empowerchain.plasticcredit.MsgTransferCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgTransferCredits",
    toAmino: function toAmino(_ref27) {
      var from = _ref27.from,
        to = _ref27.to,
        denom = _ref27.denom,
        amount = _ref27.amount,
        retire = _ref27.retire;
      return {
        from: from,
        to: to,
        denom: denom,
        amount: amount.toString(),
        retire: retire
      };
    },
    fromAmino: function fromAmino(_ref28) {
      var from = _ref28.from,
        to = _ref28.to,
        denom = _ref28.denom,
        amount = _ref28.amount,
        retire = _ref28.retire;
      return {
        from: from,
        to: to,
        denom: denom,
        amount: _helpers.Long.fromString(amount),
        retire: retire
      };
    }
  },
  "/empowerchain.plasticcredit.MsgRetireCredits": {
    aminoType: "/empowerchain.plasticcredit.MsgRetireCredits",
    toAmino: function toAmino(_ref29) {
      var owner = _ref29.owner,
        denom = _ref29.denom,
        amount = _ref29.amount;
      return {
        owner: owner,
        denom: denom,
        amount: amount.toString()
      };
    },
    fromAmino: function fromAmino(_ref30) {
      var owner = _ref30.owner,
        denom = _ref30.denom,
        amount = _ref30.amount;
      return {
        owner: owner,
        denom: denom,
        amount: _helpers.Long.fromString(amount)
      };
    }
  }
};
exports.AminoConverter = AminoConverter;