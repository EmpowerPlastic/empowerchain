/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";

export const protobufPackage = "cosmos.vesting.v1beta1";

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: number;
  delayed: boolean;
}

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}

/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponse {}

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccount {
  fromAddress: string;
  toAddress: string;
  startTime: number;
  vestingPeriods: Period[];
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponse {}

const baseMsgCreateVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  endTime: 0,
  delayed: false,
};

export const MsgCreateVestingAccount = {
  encode(
    message: MsgCreateVestingAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== 0) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime);
    } else {
      message.endTime = 0;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = Boolean(object.delayed);
    } else {
      message.delayed = false;
    }
    return message;
  },

  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVestingAccount>
  ): MsgCreateVestingAccount {
    const message = {
      ...baseMsgCreateVestingAccount,
    } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime;
    } else {
      message.endTime = 0;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = object.delayed;
    } else {
      message.delayed = false;
    }
    return message;
  },
};

const baseMsgCreateVestingAccountResponse: object = {};

export const MsgCreateVestingAccountResponse = {
  encode(
    _: MsgCreateVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
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

  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateVestingAccountResponse>
  ): MsgCreateVestingAccountResponse {
    const message = {
      ...baseMsgCreateVestingAccountResponse,
    } as MsgCreateVestingAccountResponse;
    return message;
  },
};

const baseMsgCreatePermanentLockedAccount: object = {
  fromAddress: "",
  toAddress: "",
};

export const MsgCreatePermanentLockedAccount = {
  encode(
    message: MsgCreatePermanentLockedAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePermanentLockedAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePermanentLockedAccount {
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreatePermanentLockedAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePermanentLockedAccount>
  ): MsgCreatePermanentLockedAccount {
    const message = {
      ...baseMsgCreatePermanentLockedAccount,
    } as MsgCreatePermanentLockedAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreatePermanentLockedAccountResponse: object = {};

export const MsgCreatePermanentLockedAccountResponse = {
  encode(
    _: MsgCreatePermanentLockedAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
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

  fromJSON(_: any): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePermanentLockedAccountResponse>
  ): MsgCreatePermanentLockedAccountResponse {
    const message = {
      ...baseMsgCreatePermanentLockedAccountResponse,
    } as MsgCreatePermanentLockedAccountResponse;
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  startTime: 0,
};

export const MsgCreatePeriodicVestingAccount = {
  encode(
    message: MsgCreatePeriodicVestingAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== 0) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime);
    } else {
      message.startTime = 0;
    }
    if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
      for (const e of object.vestingPeriods) {
        message.vestingPeriods.push(Period.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = message.startTime);
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) =>
        e ? Period.toJSON(e) : undefined
      );
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePeriodicVestingAccount>
  ): MsgCreatePeriodicVestingAccount {
    const message = {
      ...baseMsgCreatePeriodicVestingAccount,
    } as MsgCreatePeriodicVestingAccount;
    message.vestingPeriods = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = 0;
    }
    if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
      for (const e of object.vestingPeriods) {
        message.vestingPeriods.push(Period.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreatePeriodicVestingAccountResponse: object = {};

export const MsgCreatePeriodicVestingAccountResponse = {
  encode(
    _: MsgCreatePeriodicVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
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

  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },

  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePeriodicVestingAccountResponse>
  ): MsgCreatePeriodicVestingAccountResponse {
    const message = {
      ...baseMsgCreatePeriodicVestingAccountResponse,
    } as MsgCreatePeriodicVestingAccountResponse;
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePermanentLockedAccount(
    request: MsgCreatePermanentLockedAccount
  ): Promise<MsgCreatePermanentLockedAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   *
   * Since: cosmos-sdk 0.46
   */
  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount
  ): Promise<MsgCreatePeriodicVestingAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateVestingAccount(
    request: MsgCreateVestingAccount
  ): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreateVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateVestingAccountResponse.decode(new Reader(data))
    );
  }

  CreatePermanentLockedAccount(
    request: MsgCreatePermanentLockedAccount
  ): Promise<MsgCreatePermanentLockedAccountResponse> {
    const data = MsgCreatePermanentLockedAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreatePermanentLockedAccount",
      data
    );
    return promise.then((data) =>
      MsgCreatePermanentLockedAccountResponse.decode(new Reader(data))
    );
  }

  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount
  ): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.vesting.v1beta1.Msg",
      "CreatePeriodicVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgCreatePeriodicVestingAccountResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
