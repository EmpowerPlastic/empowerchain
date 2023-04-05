package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCancelListing() {
	val := s.Network.Validators[0]
	// Instantiate marketplace contract
	marketplaceAddress := s.instantiateMarketplace()
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)

	testCases := map[string]struct {
		denom                        string
		expectedCreatorCreditBalance uint64
		expectedErr                  bool
	}{
		"happy path": {
			denom:                        "PTEST/UPDATE_LISTING_1",
			expectedCreatorCreditBalance: 1000,
			expectedErr:                  false,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			// Grant transfer permissions to the marketplace contract
			grantTransferCmd := cli.MsgGrantTransferAuthorizationCmd()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, grantTransferCmd, append([]string{
				marketplaceAddress,
				tc.denom,
				"100000",
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			s.Require().NoError(err, out.String())
			cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
			s.Require().NoError(err)
			s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

			// Create the listing
			executeContractCmd := wasmcli.ExecuteContractCmd()
			out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
				marketplaceAddress,
				fmt.Sprintf(`{"create_listing": {"denom": "%s", "number_of_credits": "100", "price_per_credit": {"denom": "umpwr", "amount": "10"}}}`, tc.denom),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			s.Require().NoError(err, out.String())
			cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
			s.Require().NoError(err)
			s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

			// Cancel the listing
			out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
				marketplaceAddress,
				fmt.Sprintf(`{"cancel_listing": {"denom": "%s"}}`, tc.denom),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			s.Require().NoError(err, out.String())
			cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
			s.Require().NoError(err)
			if tc.expectedErr {
				s.Require().NotEqual(uint32(0), cliResponse.Code, cliResponse.RawLog)
			} else {
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				// Check that the credit balances
				creditOwnerBalanceAfter := s.GetCreditBalance(e2e.ApplicantAddress, tc.denom)
				s.Require().Equal(tc.expectedCreatorCreditBalance, creditOwnerBalanceAfter.Active)

				// Check the cancelled listing is removed
				queryCmd := wasmcli.GetCmdGetContractState()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{"smart", marketplaceAddress, fmt.Sprintf(`{"listing": {"owner": "%s", "denom": "%s"}}`, creditOwnerAddress.String(), tc.denom)})
				s.Require().ErrorIs(err, ErrListingNotFound, out.String())
			}
		})
	}
}
