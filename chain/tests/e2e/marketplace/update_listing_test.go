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
	marketplaceAddress := s.instantiateMarketplace()
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)

	// Grant transfer permissions to the marketplace contract
	grantTransferCmd := cli.MsgGrantTransferAuthorizationCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, grantTransferCmd, append([]string{
		marketplaceAddress,
		"PTEST/00001",
		"100000",
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	testCases := map[string]struct {
		listingID                    uint64
		numberOfCredits              uint64
		pricePerCredit               uint64
		expectedCreatorCreditBalance uint64
		expectedErr                  bool
		expectedErrMsg               string
	}{
		"happy path (increase credit amount)": {
			listingID:                    1,
			numberOfCredits:              1000,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 1000,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (decrease credit amount)": {
			listingID:                    1,
			numberOfCredits:              500,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 500,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (increase price per credit)": {
			listingID:                    1,
			numberOfCredits:              500,
			pricePerCredit:               20,
			expectedCreatorCreditBalance: 500,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"happy path (decrease price per credit)": {
			listingID:                    1,
			numberOfCredits:              500,
			pricePerCredit:               5,
			expectedCreatorCreditBalance: 500,
			expectedErr:                  false,
			expectedErrMsg:               "",
		},
		"listing does not exist": {
			listingID:                    2,
			numberOfCredits:              1000,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 0,
			expectedErr:                  true,
			expectedErrMsg:               "listing does not exist",
		},
		"number of credits is zero": {
			listingID:                    1,
			numberOfCredits:              0,
			pricePerCredit:               10,
			expectedCreatorCreditBalance: 0,
			expectedErr:                  true,
			expectedErrMsg:               "number of credits must be greater than zero",
		},
		"price per credit is zero": {
			listingID:                    1,
			numberOfCredits:              1000,
			pricePerCredit:               0,
			expectedCreatorCreditBalance: 0,
			expectedErr:                  true,
			expectedErrMsg:               "price per credit must be greater than zero",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {

			// Create the listing
			executeContractCmd := wasmcli.ExecuteContractCmd()
			out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
				marketplaceAddress,
				`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "600", "price_per_credit": {"denom": "umpwr", "amount": "10"}}}`,
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			s.Require().NoError(err, out.String())
			cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
			s.Require().NoError(err)
			s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

			// Update the listing
			out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
				marketplaceAddress,
				fmt.Sprintf(`{"update_listing": {"listing_id": "%d", "number_of_credits": "%d", "price_per_credit": {"denom": "umpwr", "amount": "%d"}}}`, tc.listingID, tc.numberOfCredits, tc.pricePerCredit),
				fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
			}, s.CommonFlags...))
			if tc.expectedErr {
				s.Require().Error(err, out.String())
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				s.Require().NoError(err, out.String())
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				// Check that the credit balances were updated
				contractBalanceAfter := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
				creditOwnerBalanceAfter := s.GetCreditBalance(e2e.ApplicantAddress, "PTEST/00001")
				s.Require().Equal(tc.expectedCreatorCreditBalance, creditOwnerBalanceAfter.Active)
				s.Require().Equal(tc.numberOfCredits, contractBalanceAfter.Active)

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
