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
	"github.com/cosmos/gogoproto/proto"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateIssuer() {
	val := s.network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(issuerCreatorKeyName)
	s.Require().NoError(err)
	validatorKey, err := val.ClientCtx.Keyring.Key(val1KeyName)
	s.Require().NoError(err)
	validator2Key, err := val.ClientCtx.Keyring.Key(val2KeyName)
	s.Require().NoError(err)
	validator3Key, err := val.ClientCtx.Keyring.Key(val3KeyName)
	s.Require().NoError(err)
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
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
			cmd := govcli.NewCmdSubmitProposal()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
				s.Require().NoError(err)
				cmd = govcli.NewCmdVote()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validatorKey.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator2Key.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator3Key.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))

				// Wait for the proposal voting period to end
				time.Sleep(10 * time.Second)

				var propResponse govtypesv1.Proposal
				cmd = govcli.GetCmdQueryProposal()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(submitProposalResponse.ProposalId), fmt.Sprintf("--%s=%s", "output", "json")})
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &propResponse))
				s.Require().Equal(govtypesv1.ProposalStatus_PROPOSAL_STATUS_PASSED, propResponse.Status)
				cmd = cli.CmdQueryIssuers()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{})
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

func (s *E2ETestSuite) TestCmdUpdateIssuer() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	newAdmin := sample.AccAddress()
	s.Require().NoError(err)

	notIssuerKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     proto.Message
	}{
		"update name, description": {
			[]string{issuer.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "We fight for a clean planet",
				Admin:       issuer.String(),
			},
		},

		"update non-existing issuer": {
			[]string{issuer.String(), "51", "Plastic Nemesis Ltd", "How do we start?", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"issuer not found",
			nil,
		},

		"wrong singer": {
			[]string{issuer.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, notIssuerKey.Name)},
			false,
			true,
			"",
			nil,
		},

		"empty name": {
			[]string{issuer.String(), "1", "", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"issuer name cannot be empty",
			nil,
		},

		"empty description": {
			[]string{issuer.String(), "1", "Empower Plastic", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "",
				Admin:       issuer.String(),
			},
		},

		"invalid admin": {
			[]string{"invalidaddress", "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"invalid admin address",
			nil,
		},
		"change admin": {
			[]string{newAdmin, "2", "Test Issuer", "Purely for testing", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          2,
				Name:        "Test Issuer",
				Description: "Purely for testing",
				Admin:       newAdmin,
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateIssuerCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				cmd = cli.CmdQueryIssuer()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[1]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryIssuerResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Issuer)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateIssuerCreator() {
	val := s.network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(issuerCreatorKeyName)
	s.Require().NoError(err)
	validatorKey, err := val.ClientCtx.Keyring.Key(val1KeyName)
	s.Require().NoError(err)
	validator2Key, err := val.ClientCtx.Keyring.Key(val2KeyName)
	s.Require().NoError(err)
	validator3Key, err := val.ClientCtx.Keyring.Key(val3KeyName)
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
				IssuerCreator: "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
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
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
				s.Require().NoError(err)
				cmd = govcli.NewCmdVote()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validatorKey.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator2Key.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{fmt.Sprint(submitProposalResponse.ProposalId), "yes", fmt.Sprintf("--%s=%s", flags.FlagFrom, validator3Key.Name)}, s.commonFlags...))
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))

				// Wait for the proposal voting period to end
				time.Sleep(10 * time.Second)

				var propResponse govtypesv1.Proposal
				cmd = govcli.GetCmdQueryProposal()
				out, _ = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(submitProposalResponse.ProposalId), fmt.Sprintf("--%s=%s", "output", "json")})
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &propResponse))
				s.Require().Equal(govtypesv1.ProposalStatus_PROPOSAL_STATUS_PASSED, propResponse.Status)
				cmd = cli.CmdQueryParams()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{})
				s.Require().NoError(err)
				var resp plasticcredit.QueryParamsResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, resp.Params)
			}
		})
	}
}
