import { Params, ParamsSDKType, IDCounters, IDCountersSDKType, Issuer, IssuerSDKType, Applicant, ApplicantSDKType, CreditClass, CreditClassSDKType, Project, ProjectSDKType, CreditCollection, CreditCollectionSDKType, CreditBalance, CreditBalanceSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the plasticcredit module's genesis state. */
export interface GenesisState {
    params?: Params;
    idCounters?: IDCounters;
    issuers: Issuer[];
    applicants: Applicant[];
    creditClasses: CreditClass[];
    projects: Project[];
    creditCollections: CreditCollection[];
    creditBalances: CreditBalance[];
}
/** GenesisState defines the plasticcredit module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    id_counters?: IDCountersSDKType;
    issuers: IssuerSDKType[];
    applicants: ApplicantSDKType[];
    credit_classes: CreditClassSDKType[];
    projects: ProjectSDKType[];
    credit_collections: CreditCollectionSDKType[];
    credit_balances: CreditBalanceSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
