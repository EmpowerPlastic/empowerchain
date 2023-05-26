package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestUpdateListing() {
	val := s.Network.Validators[0]
	// Instantiate marketplace contract
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)

	testCases := map[string]struct {
		denom                        string
		numberOfCredits              uint64
		pricePerCredit               uint64
		expectedCreatorCreditBalance uint64
		expectedPricePerCredit       uint64
		expectedErr                  bool
	}{
		"happy path (increase credit amount)": {
			denom:                        "PTEST/UPDATE_LISTING_1",
			numberOfCredits:              150,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 850,
			expectedPricePerCredit:       10,
			expectedErr:                  false,
		},
		"happy path (decrease credit amount)": {
			denom:                        "PTEST/UPDATE_LISTING_2",
			numberOfCredits:              50,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 950,
			expectedPricePerCredit:       10,
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

			// Update the listing
			out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
				marketplaceAddress,
				fmt.Sprintf(`{"update_listing": {"denom": "%s", "number_of_credits": "%d", "price_per_credit": {"denom": "umpwr", "amount": "%d"}}}`, tc.denom, tc.numberOfCredits, tc.pricePerCredit),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			s.Require().NoError(err, out.String())
			cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
			s.Require().NoError(err)
			if tc.expectedErr {
				s.Require().NotEqual(uint32(0), cliResponse.Code, cliResponse.RawLog)
			} else {
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				// Check that the credit balances were updated
				contractBalanceAfter := s.GetCreditBalance(marketplaceAddress, tc.denom)
				creditOwnerBalanceAfter := s.GetCreditBalance(e2e.ApplicantAddress, tc.denom)
				s.Require().Equal(tc.expectedCreatorCreditBalance, creditOwnerBalanceAfter.Active)
				s.Require().Equal(tc.numberOfCredits, contractBalanceAfter.Active)

				// Check price per credit
				queryCmd := wasmcli.GetCmdGetContractState()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{"smart", marketplaceAddress, fmt.Sprintf(`{"listing": {"owner": "%s", "denom": "%s"}}`, creditOwnerAddress.String(), tc.denom)})
				s.Require().NoError(err, out.String())
				s.Require().Contains(out.String(), fmt.Sprintf(`amount: "%d"`, tc.expectedPricePerCredit))

			}
		})
	}
}
