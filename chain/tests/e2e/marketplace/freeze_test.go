package marketplace_test

import (
	"fmt"
	"time"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestFreezeCredits() {
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
	buyerAddress, err := buyerKey.GetAddress()
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
		fmt.Sprintf(`{"create_listing": {"denom": "PTEST/00001", "number_of_credits": "5", "price_per_credit": {"denom": "%s", "amount": "1500000"}, "operator": "%s"}}`, sdk.DefaultBondDenom, e2e.OperatorAddress),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	buyerCreditBalanceBefore := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")

	// Freeze credits
	timeoutUnixTimestamp := time.Now().Unix() + 1000 // 1000 seconds into the future
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"freeze_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_freeze": 5, "buyer": "%s", "timeout_unix_timestamp": %d}}`, creditOwnerAddress, buyerAddress, timeoutUnixTimestamp),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Check that no credits were transferred
	buyerCreditBalance := s.GetCreditBalance(e2e.RandomAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  buyerCreditBalanceBefore.Active,
		Retired: buyerCreditBalanceBefore.Retired,
	}, buyerCreditBalance)
	contractCreditBalance := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  5,
		Retired: 0,
	}, contractCreditBalance)
}
