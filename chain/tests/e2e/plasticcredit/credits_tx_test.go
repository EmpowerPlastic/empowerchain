package e2e_test

import (
	"fmt"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
)

func (s *E2ETestSuite) TestCmdIssueCredits() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     plasticcredit.CreditCollection
	}{
		"happy path (new collection)": {
			[]string{"1", "456", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			plasticcredit.CreditCollection{
				ProjectId: 1,
				Denom:     "EMP/456",
				TotalAmount: plasticcredit.CreditAmount{
					Active: 1000,
				},
			},
		},
		"happy path (existing collection)": {
			[]string{"1", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			plasticcredit.CreditCollection{
				ProjectId: 1,
				Denom:     "EMP/123",
				TotalAmount: plasticcredit.CreditAmount{
					Active: 2000,
				},
			},
		},
		"unexisting project": {
			[]string{"15", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project not found",
			plasticcredit.CreditCollection{},
		},
		"empty serial number": {
			[]string{"15", "", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"invalid serial number",
			plasticcredit.CreditCollection{},
		},
		"issue zero credits": {
			[]string{"1", "123", "0", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"invalid credit amount",
			plasticcredit.CreditCollection{},
		},
		"issue credits to unapproved project": {
			[]string{"6", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
		"issue credits to rejected project": {
			[]string{"7", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
		"issue credits to suspended project": {
			[]string{"8", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgIssueCreditsCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				s.Require().NoError(s.network.WaitForNextBlock())
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				var issueCreditsResp plasticcredit.MsgIssueCreditsResponse
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &issueCreditsResp)
				s.Require().NoError(err)
				cmd = cli.CmdQueryCreditCollection()
				queryCollectionResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(issueCreditsResp.Collection.Denom)})
				s.Require().NoError(err)
				var resp plasticcredit.QueryCreditCollectionResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryCollectionResponse.Bytes(), &resp))
				s.Require().Equal(tc.expectedState.TotalAmount.Active, resp.CreditCollection.TotalAmount.Active)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdTransferCredits() {
	val := s.network.Validators[0]
	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)
	applicant, err := applicantKey.GetAddress()
	s.Require().NoError(err)
	senderAddress := applicant.String()

	cmd := cli.MsgIssueCreditsCmd()
	_, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{"1", "456", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)}, s.commonFlags...))
	s.Require().NoError(err)

	_, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{"1", "123", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)}, s.commonFlags...))
	s.Require().NoError(err)

	testCases := map[string]struct {
		args                            []string
		expectedSenderBalance           uint64
		expectedRecipientBalanceActive  uint64
		expectedRecipientBalanceRetired uint64
		expectedErrOnSend               bool
		expectedErrOnExec               bool
		expectedErrMsg                  string
	}{
		"happy path (no retire)": {
			[]string{senderAddress, "empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s", "EMP/123", "100", "false", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			1900,
			100,
			0,
			false,
			false,
			"",
		},
		"happy path (existing collection)": {
			[]string{senderAddress, "empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s", "EMP/456", "100", "false", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			900,
			100,
			0,
			false,
			false,
			"",
		},
		"not enough sender balance": {
			[]string{senderAddress, "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7", "EMP/456", "10000", "false", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			900,
			100,
			0,
			false,
			true,
			"",
		},
		"non-existing denom": {
			[]string{senderAddress, "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7", "EMP/100", "100", "false", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			900,
			100,
			0,
			false,
			true,
			"credit balance not found",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgTransferCreditsCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				s.Require().NoError(s.network.WaitForNextBlock())
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				s.Require().NoError(s.network.WaitForNextBlock())
				_, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)

				cmdQueryBalance := cli.CmdQueryCreditBalance()
				querySenderBalanceResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{tc.args[0]}, tc.args[2]))
				s.Require().NoError(err)
				var senderBalance plasticcredit.QueryCreditBalanceResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(querySenderBalanceResponse.Bytes(), &senderBalance))
				s.Require().Equal(tc.expectedSenderBalance, senderBalance.Balance.Balance.Active)

				queryRecipientBalanceResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{tc.args[1]}, tc.args[2]))
				s.Require().NoError(err)
				var recipientBalance plasticcredit.QueryCreditBalanceResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryRecipientBalanceResponse.Bytes(), &recipientBalance))
				s.Require().Equal(tc.expectedRecipientBalanceActive, recipientBalance.Balance.Balance.Active)
				cmdQueryCollection := cli.CmdQueryCreditCollection()
				queryCollectionResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryCollection, []string{tc.args[2]})
				s.Require().NoError(err)
				var collectionAfter plasticcredit.QueryCreditCollectionResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryCollectionResponse.Bytes(), &collectionAfter))
			}
		})
	}
}
