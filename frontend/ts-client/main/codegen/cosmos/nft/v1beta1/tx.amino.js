"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgNFTSend",
    toAmino: function toAmino(_ref) {
      var classId = _ref.classId,
        id = _ref.id,
        sender = _ref.sender,
        receiver = _ref.receiver;
      return {
        class_id: classId,
        id: id,
        sender: sender,
        receiver: receiver
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var class_id = _ref2.class_id,
        id = _ref2.id,
        sender = _ref2.sender,
        receiver = _ref2.receiver;
      return {
        classId: class_id,
        id: id,
        sender: sender,
        receiver: receiver
      };
    }
  }
};
exports.AminoConverter = AminoConverter;