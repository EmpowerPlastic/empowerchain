package e2e

import (
	"encoding/hex"
	"fmt"
	"testing"
	"time"

	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypesv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

const (
	IssuerKeyName             = "issuer"
	IssuerCreatorKeyName      = "issuerCreator"
	ApplicantKeyName          = "applicant"
	RandomKeyName             = "randomKey"
	ContractAdminKeyName      = "contractAdmin"
	NoCoinsIssuerAdminKeyName = "nocoins"
	Val1KeyName               = "node0"
	Val2KeyName               = "node1"
	Val3KeyName               = "node2"

	IssuerAddress             = "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m"
	IssuerCreatorAddress      = "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7"
	ApplicantAddress          = "empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn"
	RandomAddress             = "empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s"
	ContractAdminAddress      = "empower1reurz37gn2sk3vgr3fupcultkagzverqczer0l"
	NoCoinsIssuerAdminAddress = "empower1xgsaene8aqfknmldemvl5q0mtgcgjv9svupqwu"
)

var DefaultFee = sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(10))

type TestSuite struct {
	suite.Suite

	Config                 network.Config
	Network                *network.Network
	CommonFlags            []string
	CreditClassCreationFee sdk.Coin
	BeforeAllHook          func(suite *TestSuite)
}

func (s *TestSuite) SetupSuite() {
	s.T().Log("setting up e2e test suite")

	if testing.Short() {
		s.T().Skip("skipping test in unit-tests mode.")
	}

	s.CommonFlags = []string{
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=%s", flags.FlagOutput, "json"),
		fmt.Sprintf("--%s=%s", flags.FlagFees, DefaultFee.String()),
	}

	s.Config.NumValidators = 3
	s.CreditClassCreationFee = sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(50000))

	genesisState := s.Config.GenesisState

	plasticcreditGenesisState := plasticcredit.DefaultGenesis()
	// use "stake" for testing fee
	plasticcreditGenesisState.Params.CreditClassCreationFee = s.CreditClassCreationFee
	plasticcreditGenesisState.Issuers = []plasticcredit.Issuer{
		{
			Id:          1,
			Name:        "Empower",
			Description: "First Issuer",
			Admin:       IssuerAddress,
		},
		{
			Id:          2,
			Name:        "Test Issuer",
			Description: "Purely for testing",
			Admin:       IssuerAddress,
		},
		{
			Id:          3,
			Name:        "Test Issuer with no coins",
			Description: "Purely for testing",
			Admin:       NoCoinsIssuerAdminAddress,
		},
	}
	plasticcreditGenesisState.Applicants = []plasticcredit.Applicant{
		{
			Id:          1,
			Name:        "Plastix Inc.",
			Description: "Grab that bottle",
			Admin:       ApplicantAddress,
		},
		{
			Id:          2,
			Name:        "Ocean plastic Inc.",
			Description: "Grab that net",
			Admin:       ApplicantAddress,
		},
		{
			Id:          3,
			Name:        "Sea plastic Inc.",
			Description: "collector",
			Admin:       ApplicantAddress,
		},
	}
	plasticcreditGenesisState.CreditClasses = []plasticcredit.CreditClass{
		{
			Abbreviation: "EMP",
			IssuerId:     1,
			Name:         "Empower Plastic",
		},
		{
			Abbreviation: "PCRD",
			IssuerId:     2,
			Name:         "Plastic Credit",
		},
	}
	plasticcreditGenesisState.Projects = []plasticcredit.Project{
		{
			Id:                      1,
			ApplicantId:             1,
			CreditClassAbbreviation: "EMP",
			Name:                    "Approved project",
			Status:                  plasticcredit.ProjectStatus_APPROVED,
		},
		{
			Id:                      2,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Suspended project",
			Status:                  plasticcredit.ProjectStatus_SUSPENDED,
		},
		{
			Id:                      3,
			ApplicantId:             1,
			CreditClassAbbreviation: "EMP",
			Name:                    "New project",
			Status:                  plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                      4,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Rejected project",
			Status:                  plasticcredit.ProjectStatus_REJECTED,
		},
		{
			Id:                      5,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Other New Project",
			Status:                  plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                      6,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Another New Project",
			Status:                  plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                      7,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Another Rejected Project",
			Status:                  plasticcredit.ProjectStatus_REJECTED,
		},
		{
			Id:                      8,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "Another Suspended Project",
			Status:                  plasticcredit.ProjectStatus_SUSPENDED,
		},
		{
			Id:                      9,
			ApplicantId:             1,
			CreditClassAbbreviation: "PCRD",
			Name:                    "New Project to update",
			Status:                  plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                      10,
			ApplicantId:             1,
			CreditClassAbbreviation: "EMP",
			Name:                    "Approved project 2",
			Status:                  plasticcredit.ProjectStatus_APPROVED,
		},
		{
			Id:                      11,
			ApplicantId:             1,
			CreditClassAbbreviation: "EMP",
			Name:                    "Approved project to suspend",
			Status:                  plasticcredit.ProjectStatus_APPROVED,
		},
	}
	plasticcreditGenesisState.CreditCollections = []plasticcredit.CreditCollection{
		{
			Denom:     "EMP/123",
			ProjectId: 1,
			TotalAmount: plasticcredit.CreditAmount{
				Active:  1000,
				Retired: 200,
			},
		},
		{
			Denom:     "PCRD/00001",
			ProjectId: 2,
			TotalAmount: plasticcredit.CreditAmount{
				Active:  5000,
				Retired: 0,
			},
		},
	}
	plasticcreditGenesisState.CreditBalances = []plasticcredit.CreditBalance{
		{
			Owner: plasticcreditGenesisState.Applicants[0].Admin,
			Denom: "EMP/123",
			Balance: plasticcredit.CreditAmount{
				Active:  1000,
				Retired: 200,
			},
		},
		{
			Owner: plasticcreditGenesisState.Applicants[0].Admin,
			Denom: "PCRD/00001",
			Balance: plasticcredit.CreditAmount{
				Active:  5000,
				Retired: 0,
			},
		},
	}
	plasticcreditGenesisState.IdCounters = plasticcredit.IDCounters{
		NextIssuerId:    uint64(len(plasticcreditGenesisState.Issuers) + 1),
		NextApplicantId: uint64(len(plasticcreditGenesisState.Applicants) + 1),
		NextProjectId:   uint64(len(plasticcreditGenesisState.Projects) + 1),
	}
	plasticcreditGenesisStateBz, err := s.Config.Codec.MarshalJSON(&plasticcreditGenesisState)
	s.Require().NoError(err)
	genesisState[plasticcredit.ModuleName] = plasticcreditGenesisStateBz

	var bankGenesis banktypes.GenesisState
	var authGenesis authtypes.GenesisState
	var govGenesis govtypesv1.GenesisState
	var distrGenesis distrtypes.GenesisState
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisState[banktypes.ModuleName], &bankGenesis))
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisState[authtypes.ModuleName], &authGenesis))
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisState[govtypes.ModuleName], &govGenesis))

	balances := sdk.NewCoins(
		sdk.NewCoin(s.Config.BondDenom, s.Config.StakingTokens),
	)

	distrModuleAcct := authtypes.NewModuleAddress(distrtypes.ModuleName)
	communityPoolAmt := s.CreditClassCreationFee

	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: IssuerAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: IssuerCreatorAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: ApplicantAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: RandomAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: ContractAdminAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: NoCoinsIssuerAdminAddress, Coins: sdk.NewCoins(sdk.NewCoin(s.Config.BondDenom, sdk.NewInt(10)))})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: distrModuleAcct.String(), Coins: sdk.NewCoins(communityPoolAmt)})

	var genAccounts authtypes.GenesisAccounts
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(IssuerAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(IssuerCreatorAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(ApplicantAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(RandomAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(ContractAdminAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(NoCoinsIssuerAdminAddress)))
	accounts, err := authtypes.PackAccounts(genAccounts)
	s.Require().NoError(err)
	authGenesis.Accounts = append(authGenesis.Accounts, accounts...)

	*govGenesis.Params.VotingPeriod = 10 * time.Second

	// initialize community pool with small amount
	distrGenesis.FeePool.CommunityPool = sdk.NewDecCoins(sdk.NewDecCoinFromCoin(communityPoolAmt))

	bankGenesisStateBz, err := s.Config.Codec.MarshalJSON(&bankGenesis)
	s.Require().NoError(err)
	authGenesisStateBz, err := s.Config.Codec.MarshalJSON(&authGenesis)
	s.Require().NoError(err)
	govGenesisStateBz, err := s.Config.Codec.MarshalJSON(&govGenesis)
	s.Require().NoError(err)
	distrGenesisStateBz, err := s.Config.Codec.MarshalJSON(&distrGenesis)
	s.Require().NoError(err)

	genesisState[banktypes.ModuleName] = bankGenesisStateBz
	genesisState[authtypes.ModuleName] = authGenesisStateBz
	genesisState[govtypes.ModuleName] = govGenesisStateBz
	genesisState[distrtypes.ModuleName] = distrGenesisStateBz
	s.Config.GenesisState = genesisState

	s.Config.AppConstructor = app.NewAppConstructor()
	encodingConfig := params.MakeEncodingConfig(app.ModuleBasics)
	s.Config.InterfaceRegistry = encodingConfig.InterfaceRegistry
	s.Config.Codec = encodingConfig.Codec
	s.Config.TxConfig = encodingConfig.TxConfig

	s.Network, err = network.New(s.T(), s.T().TempDir(), s.Config)
	s.Require().NoError(err)

	kb := s.Network.Validators[0].ClientCtx.Keyring
	_, err = kb.NewAccount(
		IssuerKeyName,
		"angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		IssuerCreatorKeyName,
		"clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		ApplicantKeyName,
		"banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		RandomKeyName,
		"pony olive still divide actual surge amateur funny marriage lizard radio gift basket supply sense feature early hazard carry smooth garment cream fury afford",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		ContractAdminKeyName,
		"verb vintage acquire turn opera surge coconut resemble pond salt sugar engage eager girl cram charge shove genre hurry park tone narrow damp novel",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		NoCoinsIssuerAdminKeyName,
		"venture strong firm clap primary sample record ahead spin inherit skull daughter cherry relief estate maid squeeze charge hair produce animal discover margin edit",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	// Import other validator keys to 1st validator keyring for easier voting
	validator2Key, err := s.Network.Validators[1].ClientCtx.Keyring.ExportPrivKeyArmor("node1", "")
	s.Require().NoError(err)
	err = s.Network.Validators[0].ClientCtx.Keyring.ImportPrivKey("node1", validator2Key, "")
	s.Require().NoError(err)
	validator3Key, err := s.Network.Validators[2].ClientCtx.Keyring.ExportPrivKeyArmor("node2", "")
	s.Require().NoError(err)
	err = s.Network.Validators[0].ClientCtx.Keyring.ImportPrivKey("node2", validator3Key, "")
	s.Require().NoError(err)

	s.Require().NoError(s.Network.WaitForNextBlock())

	if s.BeforeAllHook != nil {
		s.BeforeAllHook(s)
	}
}

func (s *TestSuite) TearDownSuite() {
	s.T().Log("tearing down e2e test suite")
	s.Network.Cleanup()
}

func (s *TestSuite) UnpackTxResponseData(ctx client.Context, txJSONResponse []byte, txResponse codec.ProtoMarshaler) error {
	cliResponse, err := s.GetCliResponse(ctx, txJSONResponse)
	if err != nil {
		return err
	}

	respMsgDataHex, err := hex.DecodeString(cliResponse.Data)
	if err != nil {
		return err
	}

	var msgData sdk.TxMsgData
	err = ctx.Codec.Unmarshal(respMsgDataHex, &msgData)
	if err != nil {
		return err
	}

	err = ctx.Codec.Unmarshal(msgData.MsgResponses[0].Value, txResponse)
	if err != nil {
		return err
	}

	return nil
}

func (s *TestSuite) GetCliResponse(ctx client.Context, txJSONResponse []byte) (sdk.TxResponse, error) {
	var initialCliResponse sdk.TxResponse
	err := ctx.Codec.UnmarshalJSON(txJSONResponse, &initialCliResponse)
	if err != nil {
		return sdk.TxResponse{}, errors.Wrapf(err, "can't unmarshal cli response: %s", string(txJSONResponse))
	}

	if initialCliResponse.Code != 0 {
		return sdk.TxResponse{}, fmt.Errorf("can't get cli response for tx that failed with code %d: %s", initialCliResponse.Code, initialCliResponse.RawLog)
	}

	resp, err := clitestutil.GetTxResponse(s.Network, ctx, initialCliResponse.TxHash)
	if err != nil {
		return sdk.TxResponse{}, errors.Wrapf(err, "can't get cli response for tx response: %s, (%s)", string(txJSONResponse), initialCliResponse.RawLog)
	}

	return resp, nil
}
