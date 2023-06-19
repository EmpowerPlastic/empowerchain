package e2e_test

import (
	"fmt"
	"path/filepath"
	"time"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	govcli "github.com/cosmos/cosmos-sdk/x/gov/client/cli"
	govtypesv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateIssuer() {
	val := s.Network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerCreatorKeyName)
	s.Require().NoError(err)
	validatorKey, err := val.ClientCtx.Keyring.Key(e2e.Val1KeyName)
	s.Require().NoError(err)
	validator2Key, err := val.ClientCtx.Keyring.Key(e2e.Val2KeyName)
	s.Require().NoError(err)
	validator3Key, err := val.ClientCtx.Keyring.Key(e2e.Val3KeyName)
	s.Require().NoError(err)
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)

	currentDir, err := filepath.Abs("./")
	s.Require().NoError(err)
	proposalsDir := currentDir + "/testdata"

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrMsg    string
		expectedState     plasticcredit.Issuer
	}{
		"happy path": {
			[]string{proposalsDir + "/proposal_create_issuer_valid.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			false,
			"",
			plasticcredit.Issuer{
				Name:        "Created Issuer",
				Description: "Fresh Issuer",
				Admin:       issuer.String(),
			},
		},
		"empty name": {
			[]string{proposalsDir + "/proposal_create_issuer_empty_name.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			true,
			"issuer name cannot be empty",
			plasticcredit.Issuer{},
		},
		"invalid admin address": {
			[]string{proposalsDir + "/proposal_create_issuer_invalid_admin.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			true,
			"invalid admin address",
			plasticcredit.Issuer{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			var txResponse sdk.TxResponse
			var submitProposalResponse govtypesv1.MsgSubmitProposalResponse
			submitCmd := govcli.NewCmdSubmitProposal()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, submitCmd, append(tc.args, s.CommonFlags...))

			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
				s.Require().NoError(err)
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
				queryCmd = cli.CmdQueryIssuers()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprintf("--%s=json", flags.FlagOutput)})
				s.Require().NoError(err)
				var resp plasticcredit.QueryIssuersResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState.Name, resp.Issuers[len(resp.Issuers)-1].Name)
				s.Require().Equal(tc.expectedState.Description, resp.Issuers[len(resp.Issuers)-1].Description)
				s.Require().Equal(tc.expectedState.Admin, resp.Issuers[len(resp.Issuers)-1].Admin)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateIssuerCreator() {
	val := s.Network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerCreatorKeyName)
	s.Require().NoError(err)
	validatorKey, err := val.ClientCtx.Keyring.Key(e2e.Val1KeyName)
	s.Require().NoError(err)
	validator2Key, err := val.ClientCtx.Keyring.Key(e2e.Val2KeyName)
	s.Require().NoError(err)
	validator3Key, err := val.ClientCtx.Keyring.Key(e2e.Val3KeyName)
	s.Require().NoError(err)

	currentDir, err := filepath.Abs("./")
	s.Require().NoError(err)
	proposalsDir := currentDir + "/testdata"

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrMsg    string
		expectedState     plasticcredit.Params
	}{
		"happy path": {
			[]string{proposalsDir + "/proposal_update_issuer_creator_valid.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			false,
			"",
			plasticcredit.Params{
				IssuerCreator:         "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
				CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(69e6)),
			},
		},
		"happy path with human denom coin": {
			[]string{proposalsDir + "/proposal_update_issuer_creator_valid_with_human_denom.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			false,
			"",
			plasticcredit.Params{
				IssuerCreator:         "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
				CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(42e6)),
			},
		},
		"invalid issuer creator address": {
			[]string{proposalsDir + "/proposal_update_issuer_creator_invalid_address.json", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerCreatorKey.Name)},
			true,
			"invalid issuer creator address",
			plasticcredit.Params{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			var txResponse sdk.TxResponse
			var submitProposalResponse govtypesv1.MsgSubmitProposalResponse
			cmd := govcli.NewCmdSubmitProposal()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.CommonFlags...))

			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
				s.Require().NoError(err)
				cmd = govcli.NewCmdVote()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validatorKey.Name)}, s.CommonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator2Key.Name)}, s.CommonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator3Key.Name)}, s.CommonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))

				// Wait for the proposal voting period to end
				time.Sleep(10 * time.Second)

				var propResponse govtypesv1.Proposal
				cmd = govcli.GetCmdQueryProposal()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(submitProposalResponse.ProposalId), fmt.Sprintf("--%s=%s", "output", "json")})
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &propResponse))
				s.Require().Equal(govtypesv1.ProposalStatus_PROPOSAL_STATUS_PASSED, propResponse.Status)
				cmd = cli.CmdQueryParams()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprintf("--%s=%s", "output", "json")})
				s.Require().NoError(err)
				var resp plasticcredit.QueryParamsResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, resp.Params)
			}
		})
	}
}
