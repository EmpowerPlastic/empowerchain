package marketplace_test

import (
	"fmt"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	sdk "github.com/cosmos/cosmos-sdk/types"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestBuyCredits() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace()
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	buyerKey, err := val.ClientCtx.Keyring.Key(e2e.RandomKeyName)
	s.Require().NoError(err)

	grantCmd := cli.MsgGrantTransferAuthorizationCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, grantCmd, append([]string{
		marketplaceAddress,
		"PCRD/00001",
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
		fmt.Sprintf(`{"create_listing": {"denom": "PCRD/00001", "number_of_credits": "5", "price_per_credit": {"denom": "%s", "amount": "1500000"}}}`, sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	creditOwnerBalanceBefore := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceBefore := s.GetBankBalance(e2e.RandomAddress, sdk.DefaultBondDenom)

	// Buy some credits
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		`{"buy_credits": {"listing_id": 1, "number_of_credits_to_buy": 2}}`,
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
	buyerCreditBalance := s.GetCreditBalance(e2e.RandomAddress, "PCRD/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active: 2,
		Retired: 0,
	}, buyerCreditBalance)
	contractCreditBalance := s.GetCreditBalance(marketplaceAddress, "PCRD/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active: 3,
		Retired: 0,
	}, contractCreditBalance)
}
