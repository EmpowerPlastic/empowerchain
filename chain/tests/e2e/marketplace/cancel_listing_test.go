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
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)

	// Grant transfer permissions to the marketplace contract
	grantTransferCmd := cli.MsgGrantTransferAuthorizationCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, grantTransferCmd, append([]string{
		marketplaceAddress,
		"PTEST/CANCEL_LISTING_1",
		"100000",
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)
	creditOwnerBalanceBefore := s.GetCreditBalance(creditOwnerAddress.String(), "PTEST/00001")
	// Create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"create_listing": {"denom": "%s", "number_of_credits": "100", "price_per_credit": {"denom": "umpwr", "amount": "10"}}}`, "PTEST/CANCEL_LISTING_1"),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)
	// Cancel the listing
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"cancel_listing": {"denom": "%s"}}`, "PTEST/CANCEL_LISTING_1"),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Check the cancelled listing is removed
	queryCmd := wasmcli.GetCmdGetContractState()
	_, err = clitestutil.ExecTestCLICmd(
		val.ClientCtx,
		queryCmd,
		[]string{
			"smart", marketplaceAddress, fmt.Sprintf(`{"listing": {"owner": "%s", "denom": "%s"}}`, creditOwnerAddress.String(), "PTEST/CANCEL_LISTING_1"),
		},
	)
	s.Require().Error(err, ErrListingNotFound)

	// Check that the credit balances
	creditOwnerBalanceAfter := s.GetCreditBalance(creditOwnerAddress.String(), "PTEST/00001")
	s.Require().Equal(creditOwnerBalanceBefore.Active, creditOwnerBalanceAfter.Active)
}
