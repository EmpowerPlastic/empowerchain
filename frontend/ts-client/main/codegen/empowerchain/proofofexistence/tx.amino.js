"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/empowerchain.proofofexistence.MsgCreateProof": {
    aminoType: "/empowerchain.proofofexistence.MsgCreateProof",
    toAmino: function toAmino(_ref) {
      var creator = _ref.creator,
        hash = _ref.hash;
      return {
        creator: creator,
        hash: hash
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var creator = _ref2.creator,
        hash = _ref2.hash;
      return {
        creator: creator,
        hash: hash
      };
    }
  }
};
exports.AminoConverter = AminoConverter;