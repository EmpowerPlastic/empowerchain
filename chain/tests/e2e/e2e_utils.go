package e2e

import (
	"fmt"
	"time"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	govcli "github.com/cosmos/cosmos-sdk/x/gov/client/cli"
	govtypesv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
)

// MakeSuccessfulProposal creates a proposal, votes yes on it, and waits for it to pass
// If the process fails at any point, the calling test will fail
func (s *TestSuite) MakeSuccessfulProposal(pathToProposalJSON string) {
	val := s.Network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(IssuerCreatorKeyName)
	s.Require().NoError(err)
	validatorKey, err := val.ClientCtx.Keyring.Key(Val1KeyName)
	s.Require().NoError(err)
	validator2Key, err := val.ClientCtx.Keyring.Key(Val2KeyName)
	s.Require().NoError(err)
	validator3Key, err := val.ClientCtx.Keyring.Key(Val3KeyName)
	s.Require().NoError(err)

	submitCmd := govcli.NewCmdSubmitProposal()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, submitCmd, append([]string{
		pathToProposalJSON,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err)
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	var submitProposalResponse govtypesv1.MsgSubmitProposalResponse
	err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
	s.Require().NoError(err)

	var txResponse sdk.TxResponse
	voteCmd := govcli.NewCmdVote()
	out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, voteCmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validatorKey.Name)}, s.CommonFlags...))
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
	out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, voteCmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator2Key.Name)}, s.CommonFlags...))
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
	out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, voteCmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator3Key.Name)}, s.CommonFlags...))
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))

	// Wait for the proposal voting period to end
	time.Sleep(10 * time.Second)

	var propResponse govtypesv1.Proposal
	queryCmd := govcli.GetCmdQueryProposal()
	out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprint(submitProposalResponse.ProposalId), fmt.Sprintf("--%s=%s", "output", "json")})
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &propResponse))
	s.Require().Equal(govtypesv1.ProposalStatus_PROPOSAL_STATUS_PASSED, propResponse.Status)
}
