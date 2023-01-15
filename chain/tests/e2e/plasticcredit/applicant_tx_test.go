package e2e_test

import (
	"fmt"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (s *E2ETestSuite) TestCmdCreateApplicant() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrMsg    string
		expectedState     plasticcredit.Applicant
	}{
		"create new applicant": {
			[]string{"Empower2", "Description", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			"",
			plasticcredit.Applicant{
				Name:        "Empower2",
				Description: "Description",
				Admin:       issuer.String(),
			},
		},
		"empty name": {
			[]string{"", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			"invalid request",
			plasticcredit.Applicant{},
		},
		"empty description": {
			[]string{"Empower244", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			"",
			plasticcredit.Applicant{
				Name:        "Empower244",
				Description: "",
				Admin:       issuer.String(),
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateApplicantCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				var createApplicantResp plasticcredit.MsgCreateApplicantResponse
				err = UnpackTxResponseData(val.ClientCtx, out.Bytes(), &createApplicantResp)
				s.Require().NoError(err)
				cmd = cli.CmdQueryApplicant()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(createApplicantResp.ApplicantId)})
				s.Require().NoError(err)
				var resp plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState.Name, resp.Applicant.Name)
				s.Require().Equal(tc.expectedState.Description, resp.Applicant.Description)
				s.Require().Equal(tc.expectedState.Admin, resp.Applicant.Admin)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateApplicant() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)

	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Applicant
	}{

		"update name, description": {
			[]string{issuer.String(), "2", "Plastix Updated Inc.", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Applicant{
				Id:          2,
				Name:        "Plastix Updated Inc.",
				Description: "We fight for a clean planet",
				Admin:       issuer.String(),
			},
		},
		"update non-existing applicant": {
			[]string{issuer.String(), "17", "Plastix Inc.", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"applicant not found",
			nil,
		},

		"wrong singer": {
			[]string{issuer.String(), "3", "Plastix Inc.", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			true,
			"",
			nil,
		},
		"empty name": {
			[]string{issuer.String(), "3", "", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"applicant name cannot be empty",
			nil,
		},

		"invalid admin": {
			[]string{"invalidaddress", "3", "Plastix Inc.", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"invalid admin address",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateApplicantCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryApplicant()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[1]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Applicant)
			}
		})
	}
}
