package marketplace_test

import (
	"fmt"
	"time"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cometbft/cometbft/crypto/secp256k1"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestFreezeReleaseCreditsWithoutFeeSplit() {
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
	randomPrivKey := secp256k1.GenPrivKeySecp256k1([]byte("random string 0"))
	randomPubKey := randomPrivKey.PubKey()
	randomBuyerAddress := sdk.AccAddress(randomPubKey.Address().Bytes())

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

	// Freeze credits
	timeoutUnixTimestamp := time.Now().Unix() + 1000 // 1000 seconds into the future
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"freeze_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_freeze": 5, "buyer": "%s", "timeout_unix_timestamp": %d}}`, creditOwnerAddress, randomBuyerAddress, timeoutUnixTimestamp),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	buyerCreditBalanceBefore := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")

	// Release freeze
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"release_frozen_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_release": 2, "buyer": "%s", "retire": false}}`, creditOwnerAddress, randomBuyerAddress),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Check that the credits were transferred
	buyerCreditBalance := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")
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

func (s *E2ETestSuite) TestFreezeReleaseCreditsWithFeeShare() {
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
	randomPrivKey := secp256k1.GenPrivKeySecp256k1([]byte("random string 1"))
	randomPubKey := randomPrivKey.PubKey()
	randomBuyerAddress := sdk.AccAddress(randomPubKey.Address().Bytes())

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

	// Freeze credits
	timeoutUnixTimestamp := time.Now().Unix() + 1000 // 1000 seconds into the future
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"freeze_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_freeze": 5, "buyer": "%s", "timeout_unix_timestamp": %d}}`, creditOwnerAddress, randomBuyerAddress, timeoutUnixTimestamp),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	operatorBalanceBefore := s.GetBankBalance(e2e.OperatorAddress, sdk.DefaultBondDenom)
	creditOwnerBalanceBefore := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceBefore := s.GetBankBalance(randomBuyerAddress.String(), sdk.DefaultBondDenom)
	devBalanceBefore := s.GetBankBalance(e2e.DevAddress, sdk.DefaultBondDenom)
	someOtherRandomBalanceBefore := s.GetBankBalance(e2e.SomeOtherRandomAddress, sdk.DefaultBondDenom)
	buyerCreditBalanceBefore := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")

	// Release freeze
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"release_frozen_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_release": 2, "buyer": "%s", "retire": false}}`, creditOwnerAddress, randomBuyerAddress),
		fmt.Sprintf("--amount=%s%s", "15000", sdk.DefaultBondDenom),
		fmt.Sprintf("--%s=%s", flags.FlagGas, "300000"),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances after the transaction
	operatorBalanceAfter := s.GetBankBalance(e2e.OperatorAddress, sdk.DefaultBondDenom)
	creditOwnerBalanceAfter := s.GetBankBalance(e2e.ApplicantAddress, sdk.DefaultBondDenom)
	buyerBalanceAfter := s.GetBankBalance(randomBuyerAddress.String(), sdk.DefaultBondDenom)
	devBalanceAfter := s.GetBankBalance(e2e.DevAddress, sdk.DefaultBondDenom)
	someOtherRandomBalanceAfter := s.GetBankBalance(e2e.SomeOtherRandomAddress, sdk.DefaultBondDenom)

	// Check that the coin balances are correct
	s.Require().Equal(operatorBalanceBefore-15000-e2e.DefaultFee.Amount.Uint64(), operatorBalanceAfter)
	s.Require().Equal(creditOwnerBalanceBefore, creditOwnerBalanceAfter) // Payment is happening off-chain in this scenario
	s.Require().Equal(buyerBalanceBefore, buyerBalanceAfter)             // Payment is happening off-chain in this scenario
	s.Require().Equal(devBalanceBefore+10500, devBalanceAfter)
	s.Require().Equal(someOtherRandomBalanceBefore+4500, someOtherRandomBalanceAfter)

	// Check that the credits were transferred
	buyerCreditBalance := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")
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

func (s *E2ETestSuite) TestFreezeReleaseCreditsWithRetire() {
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
	randomPrivKey := secp256k1.GenPrivKeySecp256k1([]byte("random string 2"))
	randomPubKey := randomPrivKey.PubKey()
	randomBuyerAddress := sdk.AccAddress(randomPubKey.Address().Bytes())

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

	// Freeze credits
	timeoutUnixTimestamp := time.Now().Unix() + 1000 // 1000 seconds into the future
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"freeze_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_freeze": 5, "buyer": "%s", "timeout_unix_timestamp": %d}}`, creditOwnerAddress, randomBuyerAddress, timeoutUnixTimestamp),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Get balances before the transaction
	buyerCreditBalanceBefore := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")

	// Release freeze
	out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, executeContractCmd, append([]string{
		marketplaceAddress,
		fmt.Sprintf(`{"release_frozen_credits": {"owner": "%s", "denom": "PTEST/00001", "number_of_credits_to_release": 2, "buyer": "%s", "retire": true, "retiring_entity_name": "test_retire_name", "retiring_entity_additional_data": "test_retire_data"}}`, creditOwnerAddress, randomBuyerAddress),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.OperatorKeyName),
	}, s.CommonFlags...))
	s.Require().NoError(err, out.String())
	cliResponse, err = s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	// Check that the credits were transferred
	buyerCreditBalance := s.GetCreditBalance(randomBuyerAddress.String(), "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  buyerCreditBalanceBefore.Active,
		Retired: buyerCreditBalanceBefore.Retired + 2,
	}, buyerCreditBalance)
	contractCreditBalance := s.GetCreditBalance(marketplaceAddress, "PTEST/00001")
	s.Require().Equal(plasticcredit.CreditAmount{
		Active:  3,
		Retired: 0,
	}, contractCreditBalance)

	// Check that the certificate was created
	certs := s.GetCertificates(randomBuyerAddress.String())
	s.Require().Len(certs, 1)
	s.Require().Equal(certs[0].Owner, randomBuyerAddress.String())
	s.Require().Equal(certs[0].Type, certificates.CertificateType_CREDIT_RETIREMENT)
	s.Require().Equal(certs[0].Issuer, e2e.IssuerAddress)
	s.Require().Equal(certs[0].AdditionalData[0].Key, "denom")
	s.Require().Equal(certs[0].AdditionalData[0].Value, "PTEST/00001")
	s.Require().Equal(certs[0].AdditionalData[1].Key, "amount")
	s.Require().Equal(certs[0].AdditionalData[1].Value, "2")
	s.Require().Equal(certs[0].AdditionalData[2].Key, "retiring_entity_address")
	s.Require().Equal(certs[0].AdditionalData[2].Value, randomBuyerAddress.String())
	s.Require().Equal(certs[0].AdditionalData[3].Key, "retiring_entity_name")
	s.Require().Equal(certs[0].AdditionalData[3].Value, "test_retire_name")
	s.Require().Equal(certs[0].AdditionalData[4].Key, "retiring_entity_additional_data")
	s.Require().Equal(certs[0].AdditionalData[4].Value, "test_retire_data")
}
