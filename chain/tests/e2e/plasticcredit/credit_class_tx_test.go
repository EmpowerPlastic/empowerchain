package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	distrcli "github.com/cosmos/cosmos-sdk/x/distribution/client/cli"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateCreditClass() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	noCoinsKey, err := val.ClientCtx.Keyring.Key(e2e.NoCoinsIssuerAdminKeyName)
	s.Require().NoError(err)

	queryCmd := distrcli.GetCmdQueryCommunityPool()
	queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprintf("--%s=%s", flags.FlagOutput, "json")})
	s.Require().NoError(err)
	var queryPoolResponse distrtypes.QueryCommunityPoolResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryPoolResponse))
	initialCommunityPool := queryPoolResponse.GetPool()

	testCases := map[string]struct {
		abbreviation      string
		issuerID          string
		name              string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     plasticcredit.CreditClass
	}{
		"create new credit class": {
			abbreviation:      "PTEST2",
			issuerID:          "1",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: plasticcredit.CreditClass{
				Abbreviation: "PTEST2",
				Name:         "Test",
				IssuerId:     1,
			},
		},
		"invalid funds to cover fee": {
			abbreviation:      "PTEST3",
			issuerID:          "3",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, noCoinsKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "insufficient fee",
			expectedState:     plasticcredit.CreditClass{},
		},
		"non-existent issuer": {
			abbreviation:      "PTEST2",
			issuerID:          "5",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "issuer not found",
			expectedState:     plasticcredit.CreditClass{},
		},
		"empty abbreviation": {
			abbreviation:      "",
			issuerID:          "1",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "abbreviation cannot be empty: invalid request",
			expectedState:     plasticcredit.CreditClass{},
		},
		"empty name": {
			abbreviation:      "PTEST6",
			issuerID:          "1",
			name:              "",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "credit class name cannot be empty: invalid request",
			expectedState:     plasticcredit.CreditClass{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateCreditClassCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(
				[]string{tc.abbreviation, tc.issuerID, tc.name, tc.fromFlagValue}, s.CommonFlags...,
			))

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

				queryCmd = cli.CmdQueryCreditClass()
				queryOutput, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.expectedState.Abbreviation})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryCreditClassResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState.Name, queryResponse.CreditClass.Name)
				s.Require().Equal(tc.expectedState.IssuerId, queryResponse.CreditClass.IssuerId)

				// verify community pool has increased by fee amount
				queryCmd = distrcli.GetCmdQueryCommunityPool()
				queryOutput, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprintf("--%s=%s", flags.FlagOutput, "json")})
				s.Require().NoError(err)
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryPoolResponse))
				communityPool := queryPoolResponse.GetPool()

				// calculate community pool is within error tolerance
				diff := communityPool.Sub(initialCommunityPool)
				feeDiff := diff.AmountOf(s.CreditClassCreationFee.Denom)
				delta := feeDiff.Sub(sdk.NewDecFromInt(s.CreditClassCreationFee.Amount))
				epsilon, err := sdk.NewDecFromStr("0.00000000001") // include error tolerance
				s.Require().NoError(err)
				s.Require().True(delta.LTE(epsilon))
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateCreditClass() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		abbreviation      string
		name              string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.CreditClass
	}{
		"update name": {
			abbreviation:      "EMP",
			name:              "Updated Empower Plastic Credits via CLI",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.CreditClass{
				Abbreviation: "EMP",
				IssuerId:     1,
				Name:         "Updated Empower Plastic Credits via CLI",
			},
		},
		"unauthorized": {
			abbreviation:      "EMP",
			name:              "Updated Empower Plastic Credits via CLI",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"empty name": {
			abbreviation:      "EMP",
			name:              "",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "credit class name cannot be empty",
			expectedState:     nil,
		},
		"empty abbreviation": {
			abbreviation:      "",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "abbreviation cannot be empty: invalid request",
			expectedState:     nil,
		},
		"non-existing abbreviation": {
			abbreviation:      "JJJ",
			name:              "Test",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "credit class not found",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateCreditClassCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{
				tc.abbreviation,
				tc.name,
				tc.fromFlagValue,
			}, s.CommonFlags...))

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

				queryCmd := cli.CmdQueryCreditClass()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.abbreviation})
				s.Require().NoError(err)
				var resp plasticcredit.QueryCreditClassResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.CreditClass)
			}
		})
	}
}
