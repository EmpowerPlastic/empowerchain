package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	distrcli "github.com/cosmos/cosmos-sdk/x/distribution/client/cli"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateCreditClass() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	noCoinsKey, err := val.ClientCtx.Keyring.Key(noCoinsIssuerAdminName)
	s.Require().NoError(err)

	queryCmd := distrcli.GetCmdQueryCommunityPool()
	queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprintf("--%s=%s", flags.FlagOutput, "json")})
	s.Require().NoError(err)
	var queryPoolResponse distrtypes.QueryCommunityPoolResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryPoolResponse))
	initialCommunityPool := queryPoolResponse.GetPool()

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     plasticcredit.CreditClass
	}{
		"create new credit class": {
			[]string{"PCRD2", "1", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			plasticcredit.CreditClass{
				Abbreviation: "PCRD2",
				Name:         "Test",
				IssuerId:     1,
			},
		},
		"invalid funds to cover fee": {
			[]string{"PCRD3", "3", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, noCoinsKey.Name)},
			false,
			true,
			"insufficient fee",
			plasticcredit.CreditClass{},
		},
		"non-existent issuer": {
			[]string{"PCRD2", "5", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"issuer not found",
			plasticcredit.CreditClass{},
		},
		"empty abbreviation": {
			[]string{"", "1", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"abbreviation cannot be empty: invalid request",
			plasticcredit.CreditClass{},
		},
		"empty name": {
			[]string{"PCRD6", "1", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"credit class name cannot be empty: invalid request",
			plasticcredit.CreditClass{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateCreditClassCmd()
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

				queryCmd = cli.CmdQueryCreditClass()
				queryOutput, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprint(tc.expectedState.Abbreviation)})
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
				feeDiff := diff.AmountOf(s.creditClassCreationFee.Denom)
				delta := feeDiff.Sub(sdk.NewDecFromInt(s.creditClassCreationFee.Amount))
				epsilon, err := sdk.NewDecFromStr("0.00000000001") // include error tolerance
				s.Require().NoError(err)
				s.Require().True(delta.LTE(epsilon))
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateCreditClass() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.CreditClass
	}{
		"update name": {
			[]string{"EMP", "Updated Empower Plastic Credits via CLI", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.CreditClass{
				Abbreviation: "EMP",
				IssuerId:     1,
				Name:         "Updated Empower Plastic Credits via CLI",
			},
		},
		"unauthorized": {
			[]string{"EMP", "Updated Empower Plastic Credits via CLI", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"empty name": {
			[]string{"EMP", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"credit class name cannot be empty",
			nil,
		},
		"empty abbreviation": {
			[]string{"", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"abbreviation cannot be empty: invalid request",
			nil,
		},
		"non-existing abbreviation": {
			[]string{"JJJ", "Test", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"credit class not found",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateCreditClassCmd()
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

				queryCmd := cli.CmdQueryCreditClass()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryCreditClassResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.CreditClass)
			}
		})
	}
}
