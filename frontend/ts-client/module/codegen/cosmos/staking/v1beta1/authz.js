import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */

export let AuthorizationType;
/**
 * AuthorizationType defines the type of staking module authorization type
 * 
 * Since: cosmos-sdk 0.43
 */
(function (AuthorizationType) {
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (AuthorizationType = {}));
export let AuthorizationTypeSDKType;
(function (AuthorizationTypeSDKType) {
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
  AuthorizationTypeSDKType[AuthorizationTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationTypeSDKType || (AuthorizationTypeSDKType = {}));
export function authorizationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
    case 1:
    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
    case 2:
    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
    case 3:
    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
export function authorizationTypeToJSON(object) {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";
    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";
    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";
    case AuthorizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseStakeAuthorization() {
  return {
    maxTokens: undefined,
    allowList: undefined,
    denyList: undefined,
    authorizationType: 0
  };
}
export const StakeAuthorization = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.maxTokens !== undefined) {
      Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowList !== undefined) {
      StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
    }
    if (message.denyList !== undefined) {
      StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
    }
    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokens = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 3:
          message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorizationType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$authorization;
    const message = createBaseStakeAuthorization();
    message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? Coin.fromPartial(object.maxTokens) : undefined;
    message.allowList = object.allowList !== undefined && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
    message.denyList = object.denyList !== undefined && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
    message.authorizationType = (_object$authorization = object.authorizationType) !== null && _object$authorization !== void 0 ? _object$authorization : 0;
    return message;
  }
};
function createBaseStakeAuthorization_Validators() {
  return {
    address: []
  };
}
export const StakeAuthorization_Validators = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.address) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseStakeAuthorization_Validators();
    message.address = ((_object$address = object.address) === null || _object$address === void 0 ? void 0 : _object$address.map(e => e)) || [];
    return message;
  }
};