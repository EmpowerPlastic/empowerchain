import { Params, Metadata, SendEnabled } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denomMetadata: [],
    sendEnabled: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supply) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.denomMetadata) {
      Metadata.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$balances, _object$supply, _object$denomMetadata, _object$sendEnabled;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.balances = ((_object$balances = object.balances) === null || _object$balances === void 0 ? void 0 : _object$balances.map(e => Balance.fromPartial(e))) || [];
    message.supply = ((_object$supply = object.supply) === null || _object$supply === void 0 ? void 0 : _object$supply.map(e => Coin.fromPartial(e))) || [];
    message.denomMetadata = ((_object$denomMetadata = object.denomMetadata) === null || _object$denomMetadata === void 0 ? void 0 : _object$denomMetadata.map(e => Metadata.fromPartial(e))) || [];
    message.sendEnabled = ((_object$sendEnabled = object.sendEnabled) === null || _object$sendEnabled === void 0 ? void 0 : _object$sendEnabled.map(e => SendEnabled.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBalance() {
  return {
    address: "",
    coins: []
  };
}
export const Balance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address, _object$coins;
    const message = createBaseBalance();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};