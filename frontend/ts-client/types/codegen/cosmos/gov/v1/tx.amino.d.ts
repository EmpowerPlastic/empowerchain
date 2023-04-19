import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams } from "./tx";
export interface AminoMsgSubmitProposal extends AminoMsg {
    type: "cosmos-sdk/v1/MsgSubmitProposal";
    value: {
        messages: {
            type_url: string;
            value: Uint8Array;
        }[];
        initial_deposit: {
            denom: string;
            amount: string;
        }[];
        proposer: string;
        metadata: string;
        title: string;
        summary: string;
    };
}
export interface AminoMsgExecLegacyContent extends AminoMsg {
    type: "cosmos-sdk/v1/MsgExecLegacyContent";
    value: {
        content: {
            type_url: string;
            value: Uint8Array;
        };
        authority: string;
    };
}
export interface AminoMsgVote extends AminoMsg {
    type: "cosmos-sdk/v1/MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        option: number;
        metadata: string;
    };
}
export interface AminoMsgVoteWeighted extends AminoMsg {
    type: "cosmos-sdk/v1/MsgVoteWeighted";
    value: {
        proposal_id: string;
        voter: string;
        options: {
            option: number;
            weight: string;
        }[];
        metadata: string;
    };
}
export interface AminoMsgDeposit extends AminoMsg {
    type: "cosmos-sdk/v1/MsgDeposit";
    value: {
        proposal_id: string;
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "cosmos-sdk/x/gov/v1/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            min_deposit: {
                denom: string;
                amount: string;
            }[];
            max_deposit_period: {
                seconds: string;
                nanos: number;
            };
            voting_period: {
                seconds: string;
                nanos: number;
            };
            quorum: string;
            threshold: string;
            veto_threshold: string;
            min_initial_deposit_ratio: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary }: MsgSubmitProposal) => AminoMsgSubmitProposal["value"];
        fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary }: AminoMsgSubmitProposal["value"]) => MsgSubmitProposal;
    };
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: string;
        toAmino: ({ content, authority }: MsgExecLegacyContent) => AminoMsgExecLegacyContent["value"];
        fromAmino: ({ content, authority }: AminoMsgExecLegacyContent["value"]) => MsgExecLegacyContent;
    };
    "/cosmos.gov.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata }: MsgVote) => AminoMsgVote["value"];
        fromAmino: ({ proposal_id, voter, option, metadata }: AminoMsgVote["value"]) => MsgVote;
    };
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options, metadata }: MsgVoteWeighted) => AminoMsgVoteWeighted["value"];
        fromAmino: ({ proposal_id, voter, options, metadata }: AminoMsgVoteWeighted["value"]) => MsgVoteWeighted;
    };
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ proposal_id, depositor, amount }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/cosmos.gov.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};
