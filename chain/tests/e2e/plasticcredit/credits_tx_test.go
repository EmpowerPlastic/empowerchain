package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdIssueCredits() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		projectID         string
		serialNumber      string
		issueCredits      string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     plasticcredit.CreditCollection
	}{
		"happy path (new collection)": {
			"1",
			"456",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
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
			"1",
			"123",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
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
			"15",
			"123",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			false,
			true,
			"project not found",
			plasticcredit.CreditCollection{},
		},
		"empty serial number": {
			"15",
			"",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			true,
			false,
			"invalid serial number",
			plasticcredit.CreditCollection{},
		},
		"issue zero credits": {
			"1",
			"123",
			"0",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			true,
			false,
			"invalid credit amount",
			plasticcredit.CreditCollection{},
		},
		"issue credits to unapproved project": {
			"6",
			"123",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
		"issue credits to rejected project": {
			"7",
			"123",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
		"issue credits to suspended project": {
			"8",
			"123",
			"1000",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			false,
			true,
			"project is not approved",
			plasticcredit.CreditCollection{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgIssueCreditsCmd()
			cliArgs := []string{tc.projectID, tc.serialNumber, tc.issueCredits, tc.fromFlagValue}
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(cliArgs, s.CommonFlags...))
			s.Require().NoError(s.Network.WaitForNextBlock())
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
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	applicantKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	applicant, err := applicantKey.GetAddress()
	s.Require().NoError(err)
	senderAddress := applicant.String()

	issueCmd := cli.MsgIssueCreditsCmd()
	issueOutput1, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, issueCmd, append([]string{"1", "TestCmdTransferCredits1", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)}, s.CommonFlags...))
	issueResponse1, err := s.GetCliResponse(val.ClientCtx, issueOutput1.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), issueResponse1.Code, issueResponse1.RawLog)

	issueOutput2, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, issueCmd, append([]string{"1", "TestCmdTransferCredits2", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)}, s.CommonFlags...))
	issueResponse2, err := s.GetCliResponse(val.ClientCtx, issueOutput2.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), issueResponse2.Code, issueResponse2.RawLog)

	testCases := map[string]struct {
		senderAddress                   string
		recipientAddress                string
		denom                           string
		transferCredits                 string
		retire                          string
		fromFlagValue                   string
		expectedSenderBalance           uint64
		expectedRecipientBalanceActive  uint64
		expectedRecipientBalanceRetired uint64
		expectedErrOnSend               bool
		expectedErrOnExec               bool
		expectedErrMsg                  string
	}{
		"happy path (no retire)": {
			senderAddress,
			"empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s",
			"EMP/TestCmdTransferCredits1",
			"100",
			"false",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			900,
			100,
			0,
			false,
			false,
			"",
		},
		"happy path (retire)": {
			senderAddress,
			"empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s",
			"EMP/TestCmdTransferCredits2",
			"200",
			"true",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			800,
			0,
			200,
			false,
			false,
			"",
		},
		"not enough sender balance": {
			senderAddress,
			"empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
			"EMP/TestCmdTransferCredits2",
			"10000",
			"false",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			900,
			100,
			0,
			false,
			true,
			"",
		},
		"non-existing denom": {
			senderAddress,
			"empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
			"EMP/DOES_NOT_EXIST",
			"100",
			"false",
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
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
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{tc.senderAddress, tc.recipientAddress, tc.denom, tc.transferCredits, tc.retire, tc.fromFlagValue}, s.CommonFlags...))
			s.Require().NoError(s.Network.WaitForNextBlock())
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

				cmdQueryBalance := cli.CmdQueryCreditBalance()
				querySenderBalanceResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{tc.senderAddress}, tc.denom))
				s.Require().NoError(err)
				var senderBalance plasticcredit.QueryCreditBalanceResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(querySenderBalanceResponse.Bytes(), &senderBalance))
				s.Require().Equal(tc.expectedSenderBalance, senderBalance.Balance.Balance.Active)

				queryRecipientBalanceResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{tc.recipientAddress}, tc.denom))
				s.Require().NoError(err)
				var recipientBalance plasticcredit.QueryCreditBalanceResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryRecipientBalanceResponse.Bytes(), &recipientBalance))
				s.Require().Equal(tc.expectedRecipientBalanceActive, recipientBalance.Balance.Balance.Active)
				cmdQueryCollection := cli.CmdQueryCreditCollection()
				queryCollectionResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryCollection, []string{tc.denom})
				s.Require().NoError(err)
				var collectionAfter plasticcredit.QueryCreditCollectionResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryCollectionResponse.Bytes(), &collectionAfter))
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdRetireCredits() {
	val := s.Network.Validators[0]
	applicantKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	applicant, err := applicantKey.GetAddress()
	s.Require().NoError(err)
	senderAddress := applicant.String()

	cmd := cli.MsgIssueCreditsCmd()
	_, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{"2", "00001", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)}, s.CommonFlags...))
	s.Require().NoError(err)
	s.Require().NoError(s.Network.WaitForNextBlock())

	testCases := map[string]struct {
		fromFlagValue          string
		denom                  string
		retireCredits          string
		expectedBalanceRetired uint64
		expectedErrOnSend      bool
		expectedErrOnExec      bool
		expectedErrMsg         string
	}{
		"happy path": {
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			"PCRD/00001",
			"100",
			100,
			false,
			false,
			"",
		},
		"not enough active balance": {
			fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			"EMP/777",
			"100",
			0,
			false,
			true,
			"",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgRetireCreditsCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{tc.denom, tc.retireCredits, tc.fromFlagValue}, s.CommonFlags...))
			s.Require().NoError(s.Network.WaitForNextBlock())
			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				_, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				cmdQueryBalance := cli.CmdQueryCreditBalance()
				querySenderBalanceResponse, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{senderAddress}, tc.denom))
				s.Require().NoError(err)
				var senderBalance plasticcredit.QueryCreditBalanceResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(querySenderBalanceResponse.Bytes(), &senderBalance))
				s.Require().Equal(tc.expectedBalanceRetired, senderBalance.Balance.Balance.Retired)
			}
		})
	}
}
