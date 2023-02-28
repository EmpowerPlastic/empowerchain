package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateApplicant() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)

	testCases := map[string]struct {
		applicantName     string
		applicantDesc     string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrMsg    string
		expectedState     plasticcredit.Applicant
	}{
		"create new applicant": {
			applicantName:     "Empower2",
			applicantDesc:     "Description",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrMsg:    "",
			expectedState: plasticcredit.Applicant{
				Name:        "Empower2",
				Description: "Description",
				Admin:       issuer.String(),
			},
		},
		"empty name": {
			applicantName:     "",
			applicantDesc:     "Grab that bottle",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrMsg:    "invalid request",
			expectedState:     plasticcredit.Applicant{},
		},
		"empty description": {
			applicantName:     "Empower244",
			applicantDesc:     "",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrMsg:    "",
			expectedState: plasticcredit.Applicant{
				Name:        "Empower244",
				Description: "",
				Admin:       issuer.String(),
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateApplicantCmd()
			out, _ := clitestutil.ExecTestCLICmd(
				val.ClientCtx, cmd, append([]string{tc.applicantName, tc.applicantDesc, tc.fromFlagValue}, s.CommonFlags...),
			)
			s.Require().NoError(s.Network.WaitForNextBlock())
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

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
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	issuerAddress, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	randomKey, err := val.ClientCtx.Keyring.Key(e2e.RandomKeyName)
	s.Require().NoError(err)
	applicantKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		issuerAddr        string
		applicantID       string
		updatedTitle      string
		updatedDesc       string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Applicant
	}{
		"update name, description": {
			issuerAddr:        issuerAddress.String(),
			applicantID:       "2",
			updatedTitle:      "Plastix Updated Inc.",
			updatedDesc:       "We fight for a clean planet",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Applicant{
				Id:          2,
				Name:        "Plastix Updated Inc.",
				Description: "We fight for a clean planet",
				Admin:       issuerAddress.String(),
			},
		},
		"update non-existing applicant": {
			issuerAddr:        issuerAddress.String(),
			applicantID:       "17",
			updatedTitle:      "Plastix Inc.",
			updatedDesc:       "Grab that bottle",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "applicant not found",
			expectedState:     nil,
		},

		"wrong signer": {
			issuerAddr:        issuerAddress.String(),
			applicantID:       "3",
			updatedTitle:      "Plastix Inc.",
			updatedDesc:       "Grab that bottle",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, randomKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "",
			expectedState:     nil,
		},
		"empty name": {
			issuerAddr:        issuerAddress.String(),
			applicantID:       "3",
			updatedTitle:      "",
			updatedDesc:       "Grab that bottle",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "applicant name cannot be empty",
			expectedState:     nil,
		},

		"invalid admin": {
			issuerAddr:        "invalidaddress",
			applicantID:       "3",
			updatedTitle:      "Plastix Inc.",
			updatedDesc:       "Grab that bottle",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "invalid admin address",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateApplicantCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(
				[]string{tc.issuerAddr, tc.applicantID, tc.updatedTitle, tc.updatedDesc, tc.fromFlagValue}, s.CommonFlags...),
			)
			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				queryCmd := cli.CmdQueryApplicant()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.applicantID})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Applicant)
			}
		})
	}
}
