package e2e_test

import (
	"fmt"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (s *E2ETestSuite) TestCmdIssueCreditClass() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrMsg    string
		expectedState     plasticcredit.CreditCollection
	}{
		"happy path (new collection)": {
			[]string{"1", "456", "1000", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
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
			"",
			plasticcredit.CreditCollection{
				ProjectId: 1,
				Denom:     "EMP/123",
				TotalAmount: plasticcredit.CreditAmount{
					Active: 2000,
				},
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgIssueCreditsCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				var issueCreditsResp plasticcredit.MsgIssueCreditsResponse
				err = UnpackTxResponseData(val.ClientCtx, out.Bytes(), &issueCreditsResp)
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
