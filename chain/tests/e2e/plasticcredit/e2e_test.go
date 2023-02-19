package e2e_test

import (
	"encoding/hex"
	"fmt"
	"testing"
	"time"

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
	issuerKeyName          = "issuer"
	issuerCreatorKeyName   = "issuerCreator"
	applicantKeyName       = "applicant"
	val1KeyName            = "node0"
	val2KeyName            = "node1"
	val3KeyName            = "node2"
	randomKeyName          = "randomKey"
	noCoinsIssuerAdminName = "nocoins"

	issuerAddress             = "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m"
	issuerCreatorAddress      = "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7"
	applicantAddress          = "empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn"
	randomAddress             = "empower15hxwswcmmkasaar65n3vkmp6skurvtas3xzl7s"
	noCoinsIssuerAdminAddress = "empower1xgsaene8aqfknmldemvl5q0mtgcgjv9svupqwu"
)

type E2ETestSuite struct {
	suite.Suite

	cfg                    network.Config
	network                *network.Network
	commonFlags            []string
	creditClassCreationFee sdk.Coin
}

func (s *E2ETestSuite) SetupSuite() {
	s.T().Log("setting up e2e test suite")

	if testing.Short() {
		s.T().Skip("skipping test in unit-tests mode.")
	}

	s.commonFlags = []string{
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(s.cfg.BondDenom, sdk.NewInt(10))).String()),
	}

	s.cfg.NumValidators = 3

	s.creditClassCreationFee = sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(50000))

	genesisState := s.cfg.GenesisState

	plasticcreditGenesisState := plasticcredit.DefaultGenesis()
	// use "stake" for testing fee
	plasticcreditGenesisState.Params.CreditClassCreationFee = s.creditClassCreationFee
	plasticcreditGenesisState.IdCounters = plasticcredit.IDCounters{
		NextIssuerId:    4,
		NextApplicantId: 4,
		NextProjectId:   11,
	}
	plasticcreditGenesisState.Issuers = []plasticcredit.Issuer{
		{
			Id:          1,
			Name:        "Empower",
			Description: "First Issuer",
			Admin:       issuerAddress,
		},
		{
			Id:          2,
			Name:        "Test Issuer",
			Description: "Purely for testing",
			Admin:       issuerAddress,
		},
		{
			Id:          3,
			Name:        "Test Issuer with no coins",
			Description: "Purely for testing",
			Admin:       noCoinsIssuerAdminAddress,
		},
	}
	plasticcreditGenesisState.Applicants = []plasticcredit.Applicant{
		{
			Id:          1,
			Name:        "Plastix Inc.",
			Description: "Grab that bottle",
			Admin:       applicantAddress,
		},
		{
			Id:          2,
			Name:        "Ocean plastic Inc.",
			Description: "Grab that net",
			Admin:       applicantAddress,
		},
		{
			Id:          3,
			Name:        "Sea plastic Inc.",
			Description: "collector",
			Admin:       applicantAddress,
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
	plasticcreditGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&plasticcreditGenesisState)
	s.Require().NoError(err)
	genesisState[plasticcredit.ModuleName] = plasticcreditGenesisStateBz

	var bankGenesis banktypes.GenesisState
	var authGenesis authtypes.GenesisState
	var govGenesis govtypesv1.GenesisState
	var distrGenesis distrtypes.GenesisState
	s.Require().NoError(s.cfg.Codec.UnmarshalJSON(genesisState[banktypes.ModuleName], &bankGenesis))
	s.Require().NoError(s.cfg.Codec.UnmarshalJSON(genesisState[authtypes.ModuleName], &authGenesis))
	s.Require().NoError(s.cfg.Codec.UnmarshalJSON(genesisState[govtypes.ModuleName], &govGenesis))

	balances := sdk.NewCoins(
		sdk.NewCoin(s.cfg.BondDenom, s.cfg.StakingTokens),
	)

	distrModuleAcct := authtypes.NewModuleAddress(distrtypes.ModuleName)
	communityPoolAmt := s.creditClassCreationFee

	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: issuerAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: issuerCreatorAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: applicantAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: randomAddress, Coins: balances})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: noCoinsIssuerAdminAddress, Coins: sdk.NewCoins(sdk.NewCoin(s.cfg.BondDenom, sdk.NewInt(10)))})
	bankGenesis.Balances = append(bankGenesis.Balances, banktypes.Balance{Address: distrModuleAcct.String(), Coins: sdk.NewCoins(communityPoolAmt)})

	var genAccounts authtypes.GenesisAccounts
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(issuerAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(issuerCreatorAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(applicantAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(randomAddress)))
	genAccounts = append(genAccounts, authtypes.NewBaseAccountWithAddress(sdk.MustAccAddressFromBech32(noCoinsIssuerAdminAddress)))
	accounts, err := authtypes.PackAccounts(genAccounts)
	s.Require().NoError(err)
	authGenesis.Accounts = append(authGenesis.Accounts, accounts...)

	*govGenesis.Params.VotingPeriod = 10 * time.Second

	// initialize community pool with small amount
	distrGenesis.FeePool.CommunityPool = sdk.NewDecCoins(sdk.NewDecCoinFromCoin(communityPoolAmt))

	bankGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&bankGenesis)
	s.Require().NoError(err)
	authGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&authGenesis)
	s.Require().NoError(err)
	govGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&govGenesis)
	s.Require().NoError(err)
	distrGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&distrGenesis)
	s.Require().NoError(err)

	genesisState[banktypes.ModuleName] = bankGenesisStateBz
	genesisState[authtypes.ModuleName] = authGenesisStateBz
	genesisState[govtypes.ModuleName] = govGenesisStateBz
	genesisState[distrtypes.ModuleName] = distrGenesisStateBz
	s.cfg.GenesisState = genesisState

	s.cfg.AppConstructor = app.NewAppConstructor()
	encodingConfig := params.MakeEncodingConfig(app.ModuleBasics)
	s.cfg.InterfaceRegistry = encodingConfig.InterfaceRegistry
	s.cfg.Codec = encodingConfig.Codec
	s.cfg.TxConfig = encodingConfig.TxConfig

	s.network, err = network.New(s.T(), s.T().TempDir(), s.cfg)
	s.Require().NoError(err)

	kb := s.network.Validators[0].ClientCtx.Keyring
	_, err = kb.NewAccount(
		issuerKeyName,
		"angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)
	_, err = kb.NewAccount(
		issuerCreatorKeyName,
		"clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		applicantKeyName,
		"banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		randomKeyName,
		"pony olive still divide actual surge amateur funny marriage lizard radio gift basket supply sense feature early hazard carry smooth garment cream fury afford",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		noCoinsIssuerAdminName,
		"venture strong firm clap primary sample record ahead spin inherit skull daughter cherry relief estate maid squeeze charge hair produce animal discover margin edit",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	// Import other validator keys to 1st validator keyring for easier voting
	validator2Key, err := s.network.Validators[1].ClientCtx.Keyring.ExportPrivKeyArmor("node1", "")
	s.Require().NoError(err)
	err = s.network.Validators[0].ClientCtx.Keyring.ImportPrivKey("node1", validator2Key, "")
	s.Require().NoError(err)
	validator3Key, err := s.network.Validators[2].ClientCtx.Keyring.ExportPrivKeyArmor("node2", "")
	s.Require().NoError(err)
	err = s.network.Validators[0].ClientCtx.Keyring.ImportPrivKey("node2", validator3Key, "")
	s.Require().NoError(err)

	s.Require().NoError(s.network.WaitForNextBlock())
}

func (s *E2ETestSuite) TearDownSuite() {
	s.T().Log("tearing down e2e test suite")
	s.network.Cleanup()
}

func (s *E2ETestSuite) UnpackTxResponseData(ctx client.Context, txJSONResponse []byte, txResponse codec.ProtoMarshaler) error {
	cliResponse, err := s.getCliResponse(ctx, txJSONResponse)
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

func (s *E2ETestSuite) getCliResponse(ctx client.Context, txJSONResponse []byte) (sdk.TxResponse, error) {
	var initialCliResponse sdk.TxResponse
	err := ctx.Codec.UnmarshalJSON(txJSONResponse, &initialCliResponse)
	if err != nil {
		return sdk.TxResponse{}, err
	}

	return clitestutil.GetTxResponse(s.network, ctx, initialCliResponse.TxHash)
}

func TestE2ETestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()
	cfg := network.DefaultConfig(app.NewTestNetworkFixture)
	suite.Run(t, &E2ETestSuite{cfg: cfg})
}
