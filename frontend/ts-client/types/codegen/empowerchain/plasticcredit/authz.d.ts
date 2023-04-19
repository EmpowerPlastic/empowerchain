import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface TransferAuthorization {
    denom: string;
    maxCredits: Long;
}
export interface TransferAuthorizationSDKType {
    denom: string;
    max_credits: Long;
}
export declare const TransferAuthorization: {
    encode(message: TransferAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization;
    fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization;
};
