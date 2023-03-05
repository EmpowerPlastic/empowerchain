package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCreateListing() {
	val := s.Network.Validators[0]
	marketplaceAddress := s.instantiateMarketplace()
	creditOwnerKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
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

	// Query balance before creating the listing
	// Not bothering to query the marketplace balance because it will be zero anyway (it was just created, after all)
	cmdQueryBalance := cli.CmdQueryCreditBalance()
	queryCreditOwnerBalanceBeforeResp, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{e2e.ApplicantAddress}, "PCRD/00001"))
	s.Require().NoError(err)
	var creditOwnerBalanceBefore plasticcredit.QueryCreditBalanceResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryCreditOwnerBalanceBeforeResp.Bytes(), &creditOwnerBalanceBefore))

	// Create the listing
	executeContractCmd := wasmcli.ExecuteContractCmd()
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		`{"create_listing": {"denom": "PCRD/00001", "number_of_credits": "5", "price_per_credit": {"denom": "umpwr", "amount": "1"}}}`,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, creditOwnerKey.Name),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Query balances after creating the listing
	queryContractBalanceAfterResp, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{marketplaceAddress}, "PCRD/00001"))
	s.Require().NoError(err)
	var contractBalanceAfter plasticcredit.QueryCreditBalanceResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryContractBalanceAfterResp.Bytes(), &contractBalanceAfter))

	queryCreditOwnerBalanceAfterResp, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmdQueryBalance, append([]string{e2e.ApplicantAddress}, "PCRD/00001"))
	s.Require().NoError(err)
	var creditOwnerBalanceAfter plasticcredit.QueryCreditBalanceResponse
	s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryCreditOwnerBalanceAfterResp.Bytes(), &creditOwnerBalanceAfter))

	// Check that the contract balance increased by 5 credits
	s.Require().Equal(uint64(5), contractBalanceAfter.Balance.Balance.Active)
	// Check that the credit owner balance decreased by 5 credits
	s.Require().Equal(creditOwnerBalanceBefore.Balance.Balance.Active-5, creditOwnerBalanceAfter.Balance.Balance.Active)
}
