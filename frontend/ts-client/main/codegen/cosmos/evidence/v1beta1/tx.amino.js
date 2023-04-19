"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
    aminoType: "cosmos-sdk/MsgSubmitEvidence",
    toAmino: function toAmino(_ref) {
      var submitter = _ref.submitter,
        evidence = _ref.evidence;
      return {
        submitter: submitter,
        evidence: {
          type_url: evidence.typeUrl,
          value: evidence.value
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var submitter = _ref2.submitter,
        evidence = _ref2.evidence;
      return {
        submitter: submitter,
        evidence: {
          typeUrl: evidence.type_url,
          value: evidence.value
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;