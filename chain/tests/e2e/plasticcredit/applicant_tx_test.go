package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateApplicant() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
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
				s.Require().NoError(s.network.WaitForNextBlock())
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				var createApplicantResp plasticcredit.MsgCreateApplicantResponse
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &createApplicantResp)
				s.Require().NoError(err)
				queryCmd := cli.CmdQueryApplicant()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprint(createApplicantResp.ApplicantId)})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState.Name, queryResponse.Applicant.Name)
				s.Require().Equal(tc.expectedState.Description, queryResponse.Applicant.Description)
				s.Require().Equal(tc.expectedState.Admin, queryResponse.Applicant.Admin)

			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateApplicant() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	issuerAddress, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	randomKey, err := val.ClientCtx.Keyring.Key(randomKeyName)
	s.Require().NoError(err)
	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Applicant
	}{
		"update name, description": {
			[]string{issuerAddress.String(), "2", "Plastix Updated Inc.", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Applicant{
				Id:          2,
				Name:        "Plastix Updated Inc.",
				Description: "We fight for a clean planet",
				Admin:       issuerAddress.String(),
			},
		},
		"update non-existing applicant": {
			[]string{issuerAddress.String(), "17", "Plastix Inc.", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"applicant not found",
			nil,
		},

		"wrong signer": {
			[]string{issuerAddress.String(), "3", "Plastix Inc.", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, randomKey.Name)},
			false,
			true,
			"",
			nil,
		},
		"empty name": {
			[]string{issuerAddress.String(), "3", "", "Grab that bottle", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
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

				queryCmd := cli.CmdQueryApplicant()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[1]})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Applicant)
			}
		})
	}
}
