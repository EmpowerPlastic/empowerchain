import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial, Long } from "../../../helpers";
/** VoteOption enumerates the valid vote options for a given proposal. */

export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   */
  VOTE_OPTION_UNSPECIFIED = 0,

  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,

  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,

  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,

  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
/** VoteOption enumerates the valid vote options for a given proposal. */

export enum VoteOptionSDKType {
  /**
   * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   */
  VOTE_OPTION_UNSPECIFIED = 0,

  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,

  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,

  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,

  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;

    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;

    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;

    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;

    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";

    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";

    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";

    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";

    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";

    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus defines proposal statuses. */

export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,

  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,

  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,

  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,

  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,

  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
  UNRECOGNIZED = -1,
}
/** ProposalStatus defines proposal statuses. */

export enum ProposalStatusSDKType {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,

  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,

  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,

  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,

  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,

  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
  UNRECOGNIZED = -1,
}
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;

    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;

    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;

    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;

    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;

    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";

    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";

    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";

    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";

    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";

    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";

    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalExecutorResult defines types of proposal executor results. */

export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,

  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,

  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,

  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
/** ProposalExecutorResult defines types of proposal executor results. */

export enum ProposalExecutorResultSDKType {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,

  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,

  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,

  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;

    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;

    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;

    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
export function proposalExecutorResultToJSON(object: ProposalExecutorResult): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";

    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */

export interface Member {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */

  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */

  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */

  addedAt?: Date;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */

export interface MemberSDKType {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */

  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */

  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */

  added_at?: Date;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */

export interface MemberRequest {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */

  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */

  metadata: string;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */

export interface MemberRequestSDKType {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */

  weight: string;
  /** metadata is any arbitrary metadata attached to the member. */

  metadata: string;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

export interface ThresholdDecisionPolicy {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /** windows defines the different windows for voting and execution. */

  windows?: DecisionPolicyWindows;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

export interface ThresholdDecisionPolicySDKType {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /** windows defines the different windows for voting and execution. */

  windows?: DecisionPolicyWindowsSDKType;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

export interface PercentageDecisionPolicy {
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;
  /** windows defines the different windows for voting and execution. */

  windows?: DecisionPolicyWindows;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */

export interface PercentageDecisionPolicySDKType {
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;
  /** windows defines the different windows for voting and execution. */

  windows?: DecisionPolicyWindowsSDKType;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */

export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  votingPeriod?: Duration;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   * 
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */

  minExecutionPeriod?: Duration;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */

export interface DecisionPolicyWindowsSDKType {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  voting_period?: DurationSDKType;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   * 
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */

  min_execution_period?: DurationSDKType;
}
/** GroupInfo represents the high-level on-chain information for a group. */

export interface GroupInfo {
  /** id is the unique ID of the group. */
  id: Long;
  /** admin is the account address of the group's admin. */

  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */

  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */

  version: Long;
  /** total_weight is the sum of the group members' weights. */

  totalWeight: string;
  /** created_at is a timestamp specifying when a group was created. */

  createdAt?: Date;
}
/** GroupInfo represents the high-level on-chain information for a group. */

export interface GroupInfoSDKType {
  /** id is the unique ID of the group. */
  id: Long;
  /** admin is the account address of the group's admin. */

  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */

  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */

  version: Long;
  /** total_weight is the sum of the group members' weights. */

  total_weight: string;
  /** created_at is a timestamp specifying when a group was created. */

  created_at?: Date;
}
/** GroupMember represents the relationship between a group and a member. */

export interface GroupMember {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** member is the member data. */

  member?: Member;
}
/** GroupMember represents the relationship between a group and a member. */

export interface GroupMemberSDKType {
  /** group_id is the unique ID of the group. */
  group_id: Long;
  /** member is the member data. */

  member?: MemberSDKType;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */

export interface GroupPolicyInfo {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */

  groupId: Long;
  /** admin is the account address of the group admin. */

  admin: string;
  /** metadata is any arbitrary metadata attached to the group policy. */

  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */

  version: Long;
  /** decision_policy specifies the group policy's decision policy. */

  decisionPolicy?: Any;
  /** created_at is a timestamp specifying when a group policy was created. */

  createdAt?: Date;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */

export interface GroupPolicyInfoSDKType {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */

  group_id: Long;
  /** admin is the account address of the group admin. */

  admin: string;
  /** metadata is any arbitrary metadata attached to the group policy. */

  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */

  version: Long;
  /** decision_policy specifies the group policy's decision policy. */

  decision_policy?: AnySDKType;
  /** created_at is a timestamp specifying when a group policy was created. */

  created_at?: Date;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */

export interface Proposal {
  /** id is the unique id of the proposal. */
  id: Long;
  /** group_policy_address is the account address of group policy. */

  groupPolicyAddress: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
  /** proposers are the account addresses of the proposers. */

  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */

  submitTime?: Date;
  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */

  groupVersion: Long;
  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */

  groupPolicyVersion: Long;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */

  status: ProposalStatus;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */

  finalTallyResult?: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */

  votingPeriodEnd?: Date;
  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */

  executorResult: ProposalExecutorResult;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */

  messages: Any[];
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */

export interface ProposalSDKType {
  /** id is the unique id of the proposal. */
  id: Long;
  /** group_policy_address is the account address of group policy. */

  group_policy_address: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
  /** proposers are the account addresses of the proposers. */

  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */

  submit_time?: Date;
  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */

  group_version: Long;
  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */

  group_policy_version: Long;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */

  status: ProposalStatusSDKType;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */

  final_tally_result?: TallyResultSDKType;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */

  voting_period_end?: Date;
  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */

  executor_result: ProposalExecutorResultSDKType;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */

  messages: AnySDKType[];
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
}
/** TallyResult represents the sum of weighted votes for each vote option. */

export interface TallyResult {
  /** yes_count is the weighted sum of yes votes. */
  yesCount: string;
  /** abstain_count is the weighted sum of abstainers. */

  abstainCount: string;
  /** no_count is the weighted sum of no votes. */

  noCount: string;
  /** no_with_veto_count is the weighted sum of veto. */

  noWithVetoCount: string;
}
/** TallyResult represents the sum of weighted votes for each vote option. */

export interface TallyResultSDKType {
  /** yes_count is the weighted sum of yes votes. */
  yes_count: string;
  /** abstain_count is the weighted sum of abstainers. */

  abstain_count: string;
  /** no_count is the weighted sum of no votes. */

  no_count: string;
  /** no_with_veto_count is the weighted sum of veto. */

  no_with_veto_count: string;
}
/** Vote represents a vote for a proposal. */

export interface Vote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the account address of the voter. */

  voter: string;
  /** option is the voter's choice on the proposal. */

  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */

  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */

  submitTime?: Date;
}
/** Vote represents a vote for a proposal. */

export interface VoteSDKType {
  /** proposal is the unique ID of the proposal. */
  proposal_id: Long;
  /** voter is the account address of the voter. */

  voter: string;
  /** option is the voter's choice on the proposal. */

  option: VoteOptionSDKType;
  /** metadata is any arbitrary metadata attached to the vote. */

  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */

  submit_time?: Date;
}

function createBaseMember(): Member {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: undefined
  };
}

export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.addedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.addedAt), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.addedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt = object.addedAt ?? undefined;
    return message;
  }

};

function createBaseMemberRequest(): MemberRequest {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}

export const MemberRequest = {
  encode(message: MemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MemberRequest>): MemberRequest {
    const message = createBaseMemberRequest();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  }

};

function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return {
    threshold: "",
    windows: undefined
  };
}

export const ThresholdDecisionPolicy = {
  encode(message: ThresholdDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }

    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;

        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }

};

function createBasePercentageDecisionPolicy(): PercentageDecisionPolicy {
  return {
    percentage: "",
    windows: undefined
  };
}

export const PercentageDecisionPolicy = {
  encode(message: PercentageDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }

    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PercentageDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;

        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PercentageDecisionPolicy>): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }

};

function createBaseDecisionPolicyWindows(): DecisionPolicyWindows {
  return {
    votingPeriod: undefined,
    minExecutionPeriod: undefined
  };
}

export const DecisionPolicyWindows = {
  encode(message: DecisionPolicyWindows, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }

    if (message.minExecutionPeriod !== undefined) {
      Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionPolicyWindows {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DecisionPolicyWindows>): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? Duration.fromPartial(object.minExecutionPeriod) : undefined;
    return message;
  }

};

function createBaseGroupInfo(): GroupInfo {
  return {
    id: Long.UZERO,
    admin: "",
    metadata: "",
    version: Long.UZERO,
    totalWeight: "",
    createdAt: undefined
  };
}

export const GroupInfo = {
  encode(message: GroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (!message.version.isZero()) {
      writer.uint32(32).uint64(message.version);
    }

    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.version = (reader.uint64() as Long);
          break;

        case 5:
          message.totalWeight = reader.string();
          break;

        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GroupInfo>): GroupInfo {
    const message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.totalWeight = object.totalWeight ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  }

};

function createBaseGroupMember(): GroupMember {
  return {
    groupId: Long.UZERO,
    member: undefined
  };
}

export const GroupMember = {
  encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  }

};

function createBaseGroupPolicyInfo(): GroupPolicyInfo {
  return {
    address: "",
    groupId: Long.UZERO,
    admin: "",
    metadata: "",
    version: Long.UZERO,
    decisionPolicy: undefined,
    createdAt: undefined
  };
}

export const GroupPolicyInfo = {
  encode(message: GroupPolicyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.admin = reader.string();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.version = (reader.uint64() as Long);
          break;

        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;

        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GroupPolicyInfo>): GroupPolicyInfo {
    const message = createBaseGroupPolicyInfo();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  }

};

function createBaseProposal(): Proposal {
  return {
    id: Long.UZERO,
    groupPolicyAddress: "",
    metadata: "",
    proposers: [],
    submitTime: undefined,
    groupVersion: Long.UZERO,
    groupPolicyVersion: Long.UZERO,
    status: 0,
    finalTallyResult: undefined,
    votingPeriodEnd: undefined,
    executorResult: 0,
    messages: [],
    title: "",
    summary: ""
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }

    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }

    if (!message.groupVersion.isZero()) {
      writer.uint32(48).uint64(message.groupVersion);
    }

    if (!message.groupPolicyVersion.isZero()) {
      writer.uint32(56).uint64(message.groupPolicyVersion);
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(74).fork()).ldelim();
    }

    if (message.votingPeriodEnd !== undefined) {
      Timestamp.encode(toTimestamp(message.votingPeriodEnd), writer.uint32(82).fork()).ldelim();
    }

    if (message.executorResult !== 0) {
      writer.uint32(88).int32(message.executorResult);
    }

    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }

    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.proposers.push(reader.string());
          break;

        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.groupVersion = (reader.uint64() as Long);
          break;

        case 7:
          message.groupPolicyVersion = (reader.uint64() as Long);
          break;

        case 8:
          message.status = (reader.int32() as any);
          break;

        case 9:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;

        case 10:
          message.votingPeriodEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 11:
          message.executorResult = (reader.int32() as any);
          break;

        case 12:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 13:
          message.title = reader.string();
          break;

        case 14:
          message.summary = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.submitTime = object.submitTime ?? undefined;
    message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? Long.fromValue(object.groupVersion) : Long.UZERO;
    message.groupPolicyVersion = object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null ? Long.fromValue(object.groupPolicyVersion) : Long.UZERO;
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.votingPeriodEnd = object.votingPeriodEnd ?? undefined;
    message.executorResult = object.executorResult ?? 0;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  }

};

function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}

export const TallyResult = {
  encode(message: TallyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }

    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }

    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }

    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;

        case 2:
          message.abstainCount = reader.string();
          break;

        case 3:
          message.noCount = reader.string();
          break;

        case 4:
          message.noWithVetoCount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  }

};

function createBaseVote(): Vote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    submitTime: undefined
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = (reader.int32() as any);
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime = object.submitTime ?? undefined;
    return message;
  }

};