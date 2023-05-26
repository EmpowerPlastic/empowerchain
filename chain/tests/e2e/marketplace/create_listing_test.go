package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCreateListing() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)

	grantCmd := cli.MsgGrantTransferAuthorizationCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, grantCmd, append([]string{
		marketplaceAddress,
		"PTEST/00001",
		"10",
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Query balance before creating the listing
	// Not bothering to query the marketplace balance because it will be zero anyway (it was just created, after all)
	creditOwnerBalanceBefore := s.GetCreditBalance(e2e.ApplicantAddress, "PTEST/00001")

	// Create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "5", "price_per_credit": {"denom": "umpwr", "amount": "1"}}}`,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Query balances after creating the listing
	contractBalanceAfter := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
	creditOwnerBalanceAfter := s.GetCreditBalance(e2e.ApplicantAddress, "PTEST/00001")

	// Check that the contract balance increased by 5 credits
	s.Require().Equal(uint64(5), contractBalanceAfter.Active)
	// Check that the credit owner balance decreased by 5 credits
	s.Require().Equal(creditOwnerBalanceBefore.Active-5, creditOwnerBalanceAfter.Active)
}

func (s *E2ETestSuite) TestCreateListingWithFailingTransferMessage() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)

	// Try to create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "1", "price_per_credit": {"denom": "umpwr", "amount": "1"}}}`,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().NotEqual(uint32(0), cliResponse.Code)
	s.Require().Contains(cliResponse.RawLog, "empowerchain.plasticcredit.MsgTransferCredits: authorization not found")

	// Now, let's grant a few credits
	grantCmd := cli.MsgGrantTransferAuthorizationCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, grantCmd, append([]string{
		marketplaceAddress,
		"PTEST/00001",
		"2",
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Now, let's try to create the listing again, and more than was actually granted; it ought to fail!
	executeContractCmd = wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "3", "price_per_credit": {"denom": "umpwr", "amount": "1"}}}`,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().NotEqual(uint32(0), cliResponse.Code)
	s.Require().Contains(cliResponse.RawLog, "not enough allowance left, wanted 3, had 2")
}
