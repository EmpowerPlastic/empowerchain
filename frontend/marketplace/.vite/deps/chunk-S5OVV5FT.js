import {
  isSet,
  require_minimal
} from "./chunk-YTDFOCYR.js";
import {
  __export,
  __toESM
} from "./chunk-I7XXR53E.js";

// node_modules/@empower-plastic/empowerjs/module/codegen/cosmos/base/v1beta1/coin.js
var coin_exports = {};
__export(coin_exports, {
  Coin: () => Coin,
  DecCoin: () => DecCoin,
  DecProto: () => DecProto,
  IntProto: () => IntProto
});
var _m0 = __toESM(require_minimal());
function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}
var Coin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    message.amount !== void 0 && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object) {
    var _object$denom, _object$amount;
    const message = createBaseCoin();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = (_object$amount = object.amount) !== null && _object$amount !== void 0 ? _object$amount : "";
    return message;
  }
};
function createBaseDecCoin() {
  return {
    denom: "",
    amount: ""
  };
}
var DecCoin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== void 0 && (obj.denom = message.denom);
    message.amount !== void 0 && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object) {
    var _object$denom2, _object$amount2;
    const message = createBaseDecCoin();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    return message;
  }
};
function createBaseIntProto() {
  return {
    int: ""
  };
}
var IntProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIntProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      int: isSet(object.int) ? String(object.int) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.int !== void 0 && (obj.int = message.int);
    return obj;
  },
  fromPartial(object) {
    var _object$int;
    const message = createBaseIntProto();
    message.int = (_object$int = object.int) !== null && _object$int !== void 0 ? _object$int : "";
    return message;
  }
};
function createBaseDecProto() {
  return {
    dec: ""
  };
}
var DecProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      dec: isSet(object.dec) ? String(object.dec) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.dec !== void 0 && (obj.dec = message.dec);
    return obj;
  },
  fromPartial(object) {
    var _object$dec;
    const message = createBaseDecProto();
    message.dec = (_object$dec = object.dec) !== null && _object$dec !== void 0 ? _object$dec : "";
    return message;
  }
};

export {
  Coin,
  DecCoin,
  coin_exports
};
//# sourceMappingURL=chunk-S5OVV5FT.js.map
