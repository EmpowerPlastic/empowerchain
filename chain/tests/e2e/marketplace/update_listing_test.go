package marketplace_test

import (
	"fmt"
	"os"
	"testing"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestUpdateListing() {
	val := s.Network.Validators[0]
	// Instantiate marketplace contract
	marketplaceAddress := s.instantiateMarketplace()
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)

	testCases := map[string]struct {
		denom                        string
		numberOfCredits              uint64
		pricePerCredit               uint64
		createNewListing             bool
		expectedCreatorCreditBalance uint64
		expectedPricePerCredit       uint64
		expectedErr                  bool
		expectedErrMsg               string
	}{
		"happy path (increase credit amount)": {
			denom:                        "PTEST/UPDATE_LISTING_1",
			numberOfCredits:              150,
			pricePerCredit:               10,
			createNewListing:             true,
			expectedCreatorCreditBalance: 850,
			expectedPricePerCredit:       10,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (decrease credit amount)": {
			denom:                        "PTEST/UPDATE_LISTING_2",
			numberOfCredits:              50,
			pricePerCredit:               10,
			createNewListing:             true,
			expectedCreatorCreditBalance: 950,
			expectedPricePerCredit:       10,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (increase price per credit)": {
			denom:                        "PTEST/UPDATE_LISTING_3",
			numberOfCredits:              100,
			pricePerCredit:               20,
			createNewListing:             true,
			expectedCreatorCreditBalance: 900,
			expectedPricePerCredit:       20,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (decrease price per credit)": {
			denom:                        "PTEST/UPDATE_LISTING_4",
			numberOfCredits:              100,
			pricePerCredit:               5,
			createNewListing:             true,
			expectedCreatorCreditBalance: 900,
			expectedPricePerCredit:       5,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"listing does not exist": {
			denom:                        "PTEST/UPDATE_LISTING_5",
			numberOfCredits:              1000,
			pricePerCredit:               10,
			createNewListing:             false,
			expectedCreatorCreditBalance: 0,
			expectedPricePerCredit:       0,
			expectedErr:                  true,
			expectedErrMsg:               "listing not found",
		},
		"number of credits is zero": {
			denom:                        "PTEST/UPDATE_LISTING_6",
			numberOfCredits:              0,
			pricePerCredit:               10,
			createNewListing:             true,
			expectedCreatorCreditBalance: 0,
			expectedPricePerCredit:       0,
			expectedErr:                  true,
			expectedErrMsg:               "listing needs to have more than zero credits listed",
		},
		"price per credit is zero": {
			denom:                        "PTEST/UPDATE_LISTING_7",
			numberOfCredits:              1000,
			pricePerCredit:               0,
			createNewListing:             true,
			expectedCreatorCreditBalance: 0,
			expectedPricePerCredit:       0,
			expectedErr:                  true,
			expectedErrMsg:               "listing needs to have a price per credit",
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
			if tc.createNewListing {
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
					marketplaceAddress,
					fmt.Sprintf(`{"create_listing": {"denom": "%s", "number_of_credits": "100", "price_per_credit": {"denom": "umpwr", "amount": "10"}}}`, tc.denom),
					fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
				}, s.CommonFlags...))
				s.Require().NoError(err, out.String())
				cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)
			}

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
				s.Require().Contains(cliResponse.RawLog, tc.expectedErrMsg)
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

func TestE2ETestSuite(t *testing.T) {
	// Check if wasm file exists before running tests
	if _, err := os.Stat(wasmFilePath); os.IsNotExist(err) {
		t.Fatalf("Wasm file not found at %s", wasmFilePath)
	}

	params.SetAddressPrefixes()
	params.RegisterDenoms()
	cfg := network.DefaultConfig(app.NewTestNetworkFixture)
	suite.Run(t, &E2ETestSuite{
		TestSuite: e2e.TestSuite{
			Config:        cfg,
			BeforeAllHook: uploadContractBeforeAll,
		},
	})
}
