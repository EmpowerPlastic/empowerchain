import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** EventCreateProof is an event emitted when a new proof has been created */
export interface EventCreateProof {
    hash: string;
    creator: string;
}
/** EventCreateProof is an event emitted when a new proof has been created */
export interface EventCreateProofSDKType {
    hash: string;
    creator: string;
}
export declare const EventCreateProof: {
    encode(message: EventCreateProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProof;
    fromPartial(object: DeepPartial<EventCreateProof>): EventCreateProof;
};
