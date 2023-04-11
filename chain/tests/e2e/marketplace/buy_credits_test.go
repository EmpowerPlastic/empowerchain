package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestBuyCreditsWithoutFeeSplit() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)
	buyerKey, err := val.ClientCtx.Keyring.Key(e2e.RandomKeyName)
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

	// Create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "5", "price_per_credit": {"denom": "%s", "amount": "1500000"}}}`, sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	creditOwnerBalanceBefore := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceBefore := s.GetBankBalance(e2e.RandomAddress, sdk.DefaultBondDenom)
	buyerCreditBalanceBefore := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")

	// Buy some credits
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"buy_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_buy": 2}}`, creditOwnerAddress.String()),
		fmt.Sprintf("--amount=%s%s", "3000000", sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, buyerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances after the transaction
	creditOwnerBalanceAfter := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceAfter := s.GetBankBalance(e2e.RandomAddress, sdk.DefaultBondDenom)

	// Check that the coin balances are correct
	s.Require().Equal(creditOwnerBalanceBefore+3000000, creditOwnerBalanceAfter)
	s.Require().Equal(buyerBalanceBefore-3000000-e2e.DefaultFee.Amount.Uint64(), buyerBalanceAfter)

	// Check that the credits were transferred
	buyerCreditBalance := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  buyerCreditBalanceBefore.Active + 2,
		Retired: buyerCreditBalanceBefore.Retired,
	}, buyerCreditBalance)
	contractCreditBalance := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  3,
		Retired: 0,
	}, contractCreditBalance)
}

func (s *E2ETestSuite) TestBuyCreditsWithFeeSplit() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0.005",
		Shares: []MarketplaceFeeShare{
			{
				Address:    e2e.DevAddress,
				Percentage: "0.7",
			},
			{
				Address:    e2e.SomeOtherRandomAddress,
				Percentage: "0.3",
			},
		},
	})
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	creditOwnerAddress, err := creditOwnerKey.GetAddress()
	s.Require().NoError(err)
	buyerKey, err := val.ClientCtx.Keyring.Key(e2e.RandomKeyName)
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

	// Create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "5", "price_per_credit": {"denom": "%s", "amount": "1500000"}}}`, sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	creditOwnerBalanceBefore := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceBefore := s.GetBankBalance(e2e.RandomAddress, sdk.DefaultBondDenom)
	devBalanceBefore := s.GetBankBalance(e2e.DevAddress, sdk.DefaultBondDenom)
	someOtherRandomBalanceBefore := s.GetBankBalance(e2e.SomeOtherRandomAddress, sdk.DefaultBondDenom)
	buyerCreditBalanceBefore := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")

	// Buy some credits
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"buy_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_buy": 2}}`, creditOwnerAddress.String()),
		fmt.Sprintf("--amount=%s%s", "3000000", sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, buyerKey.Name),
		fmt.Sprintf("--%s=%s", flags.FlagGas, "300000"),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances after the transaction
	creditOwnerBalanceAfter := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceAfter := s.GetBankBalance(e2e.RandomAddress, sdk.DefaultBondDenom)
	devBalanceAfter := s.GetBankBalance(e2e.DevAddress, sdk.DefaultBondDenom)
	someOtherRandomBalanceAfter := s.GetBankBalance(e2e.SomeOtherRandomAddress, sdk.DefaultBondDenom)

	// Check that the coin balances are correct
	s.Require().Equal(creditOwnerBalanceBefore+2985000, creditOwnerBalanceAfter)
	s.Require().Equal(buyerBalanceBefore-3000000-e2e.DefaultFee.Amount.Uint64(), buyerBalanceAfter)
	s.Require().Equal(devBalanceBefore+10500, devBalanceAfter)
	s.Require().Equal(someOtherRandomBalanceBefore+4500, someOtherRandomBalanceAfter)

	// Check that the credits were transferred
	buyerCreditBalance := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  buyerCreditBalanceBefore.Active + 2,
		Retired: buyerCreditBalanceBefore.Retired,
	}, buyerCreditBalance)
	contractCreditBalance := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  3,
		Retired: 0,
	}, contractCreditBalance)
}
