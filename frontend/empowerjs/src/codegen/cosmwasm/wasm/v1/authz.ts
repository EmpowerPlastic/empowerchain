import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
  /** Grants for contract executions */
  grants: ContractGrant[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
  grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
  /** Grants for contract migrations */
  grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
  grants: ContractGrantSDKType[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: Any;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: Any;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
  contract: string;
  limit?: AnySDKType;
  filter?: AnySDKType;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
  /** Remaining number that is decremented on each execution */
  remaining: bigint;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
  remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
  amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
  /** Remaining number that is decremented on each execution */
  callsRemaining: bigint;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
  calls_remaining: bigint;
  amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
  /** Messages is the list of unique keys */
  keys: string[];
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
  keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
  messages: Uint8Array[];
}
function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return {
    grants: []
  };
}
export const ContractExecutionAuthorization = {
  encode(message: ContractExecutionAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractExecutionAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },
  toJSON(message: ContractExecutionAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  }
};
function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return {
    grants: []
  };
}
export const ContractMigrationAuthorization = {
  encode(message: ContractMigrationAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractMigrationAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromJSON(e)) : []
    };
  },
  toJSON(message: ContractMigrationAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  }
};
function createBaseContractGrant(): ContractGrant {
  return {
    contract: "",
    limit: undefined,
    filter: undefined
  };
}
export const ContractGrant = {
  encode(message: ContractGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.filter = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractGrant {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
      filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined
    };
  },
  toJSON(message: ContractGrant): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.limit !== undefined && (obj.limit = message.limit ? Any.toJSON(message.limit) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? Any.toJSON(message.filter) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ContractGrant>): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Any.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? Any.fromPartial(object.filter) : undefined;
    return message;
  }
};
function createBaseMaxCallsLimit(): MaxCallsLimit {
  return {
    remaining: BigInt("0")
  };
}
export const MaxCallsLimit = {
  encode(message: MaxCallsLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remaining !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.remaining.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MaxCallsLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxCallsLimit {
    return {
      remaining: isSet(object.remaining) ? BigInt(object.remaining.toString()) : BigInt("0")
    };
  },
  toJSON(message: MaxCallsLimit): unknown {
    const obj: any = {};
    message.remaining !== undefined && (obj.remaining = (message.remaining || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt("0");
    return message;
  }
};
function createBaseMaxFundsLimit(): MaxFundsLimit {
  return {
    amounts: []
  };
}
export const MaxFundsLimit = {
  encode(message: MaxFundsLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MaxFundsLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MaxFundsLimit): unknown {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCombinedLimit(): CombinedLimit {
  return {
    callsRemaining: BigInt("0"),
    amounts: []
  };
}
export const CombinedLimit = {
  encode(message: CombinedLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callsRemaining !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.callsRemaining.toString()));
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CombinedLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CombinedLimit {
    return {
      callsRemaining: isSet(object.callsRemaining) ? BigInt(object.callsRemaining.toString()) : BigInt("0"),
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: CombinedLimit): unknown {
    const obj: any = {};
    message.callsRemaining !== undefined && (obj.callsRemaining = (message.callsRemaining || BigInt("0")).toString());
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CombinedLimit>): CombinedLimit {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt("0");
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {};
}
export const AllowAllMessagesFilter = {
  encode(_: AllowAllMessagesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowAllMessagesFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllowAllMessagesFilter {
    return {};
  },
  toJSON(_: AllowAllMessagesFilter): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  }
};
function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return {
    keys: []
  };
}
export const AcceptedMessageKeysFilter = {
  encode(message: AcceptedMessageKeysFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessageKeysFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AcceptedMessageKeysFilter): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  }
};
function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return {
    messages: []
  };
}
export const AcceptedMessagesFilter = {
  encode(message: AcceptedMessagesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessagesFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: AcceptedMessagesFilter): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map(e => e) || [];
    return message;
  }
};