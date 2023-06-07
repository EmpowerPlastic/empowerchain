package e2e

import (
	"encoding/hex"
	"fmt"
	"testing"
	"time"

	"cosmossdk.io/errors"
	"cosmossdk.io/math"
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
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	genesistools "github.com/EmpowerPlastic/empowerchain/app/genesis-tools"
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
	DevAddress                = "empower1egyu4d0zn38cs7fsynf2zq6ckppe9ecn0eh5zh"
	SomeOtherRandomAddress    = "empower1skasndc8qy35zwymj62h4m6vl423vrf34de6xz"
)

var DefaultFee = sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(10))

type TestSuite struct {
	suite.Suite

	Config                network.Config
	Network               *network.Network
	CommonFlags           []string
	CreditTypeCreationFee sdk.Coin
	BeforeAllHook         func(suite *TestSuite)
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
	s.CreditTypeCreationFee = sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(50000))

	genesisStateRaw := s.Config.GenesisState

	e2eGenesisState := genesistools.GenesisState{}
	e2eGenesisState.PlasticcreditGenesis = plasticcredit.DefaultGenesis()
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisStateRaw[banktypes.ModuleName], &e2eGenesisState.BankGenesis))
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisStateRaw[authtypes.ModuleName], &e2eGenesisState.AuthGenesis))
	s.Require().NoError(s.Config.Codec.UnmarshalJSON(genesisStateRaw[govtypes.ModuleName], &e2eGenesisState.GovGenesis))

	AddGenesisE2ETestData(s.Config.Codec, &e2eGenesisState, s.Config.BondDenom, s.Config.StakingTokens, s.CreditTypeCreationFee)

	e2eGenesisState.PlasticcreditGenesis.Params.CreditTypeCreationFee = s.CreditTypeCreationFee
	*e2eGenesisState.GovGenesis.Params.VotingPeriod = 10 * time.Second

	// initialize community pool with small amount
	communityPoolAmt := s.CreditTypeCreationFee
	e2eGenesisState.DistrGenesis.FeePool.CommunityPool = sdk.NewDecCoins(sdk.NewDecCoinFromCoin(communityPoolAmt))

	distrModuleAcct := authtypes.NewModuleAddress(distrtypes.ModuleName)
	e2eGenesisState.BankGenesis.Balances = append(e2eGenesisState.BankGenesis.Balances, banktypes.Balance{Address: distrModuleAcct.String(), Coins: sdk.NewCoins(communityPoolAmt)})

	plasticcreditGenesisStateBz, err := s.Config.Codec.MarshalJSON(&e2eGenesisState.PlasticcreditGenesis)
	s.Require().NoError(err)
	bankGenesisStateBz, err := s.Config.Codec.MarshalJSON(&e2eGenesisState.BankGenesis)
	s.Require().NoError(err)
	authGenesisStateBz, err := s.Config.Codec.MarshalJSON(&e2eGenesisState.AuthGenesis)
	s.Require().NoError(err)
	govGenesisStateBz, err := s.Config.Codec.MarshalJSON(&e2eGenesisState.GovGenesis)
	s.Require().NoError(err)
	distrGenesisStateBz, err := s.Config.Codec.MarshalJSON(&e2eGenesisState.DistrGenesis)
	s.Require().NoError(err)

	genesisStateRaw[plasticcredit.ModuleName] = plasticcreditGenesisStateBz
	genesisStateRaw[banktypes.ModuleName] = bankGenesisStateBz
	genesisStateRaw[authtypes.ModuleName] = authGenesisStateBz
	genesisStateRaw[govtypes.ModuleName] = govGenesisStateBz
	genesisStateRaw[distrtypes.ModuleName] = distrGenesisStateBz
	s.Config.GenesisState = genesisStateRaw

	s.Config.AppConstructor = app.NewAppConstructor()
	encodingConfig := app.MakeEncodingConfig()
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

// AddGenesisE2ETestData adds e2e test data to the genesis state
func AddGenesisE2ETestData(cdc codec.Codec, genesisState *genesistools.GenesisState, bondDenom string, tokens math.Int, creditTypeCreationFee sdk.Coin) {
	currentNoOfIssuers := uint64(len(genesisState.PlasticcreditGenesis.Issuers))
	currentNoOfApplicants := uint64(len(genesisState.PlasticcreditGenesis.Applicants))
	currentNoOfCreditTypes := uint64(len(genesisState.PlasticcreditGenesis.CreditTypes))
	currentNoOfProjects := uint64(len(genesisState.PlasticcreditGenesis.Projects))

	genesisState.PlasticcreditGenesis.Issuers = append(genesisState.PlasticcreditGenesis.Issuers, []plasticcredit.Issuer{
		{
			Id:          currentNoOfIssuers + 1,
			Name:        "Empower",
			Description: "First Issuer",
			Admin:       IssuerAddress,
		},
		{
			Id:          currentNoOfIssuers + 2,
			Name:        "Test Issuer",
			Description: "Purely for testing",
			Admin:       IssuerAddress,
		},
		{
			Id:          currentNoOfIssuers + 3,
			Name:        "Test Issuer with no coins",
			Description: "Purely for testing",
			Admin:       NoCoinsIssuerAdminAddress,
		},
	}...)
	genesisState.PlasticcreditGenesis.Applicants = append(genesisState.PlasticcreditGenesis.Applicants, []plasticcredit.Applicant{
		{
			Id:          currentNoOfApplicants + 1,
			Name:        "Plastix Inc.",
			Description: "Grab that bottle",
			Admin:       ApplicantAddress,
		},
		{
			Id:          currentNoOfApplicants + 2,
			Name:        "Ocean plastic Inc.",
			Description: "Grab that net",
			Admin:       ApplicantAddress,
		},
		{
			Id:          currentNoOfApplicants + 3,
			Name:        "Sea plastic Inc.",
			Description: "collector",
			Admin:       ApplicantAddress,
		},
	}...)
	genesisState.PlasticcreditGenesis.CreditTypes = []plasticcredit.CreditType{
		{
			Abbreviation: "ETEST",
			IssuerId:     currentNoOfCreditTypes + 1,
			Name:         "Empower Plastic",
		},
		{
			Abbreviation: "PTEST",
			IssuerId:     currentNoOfCreditTypes + 2,
			Name:         "Plastic Credit",
		},
	}
	genesisState.PlasticcreditGenesis.Projects = append(genesisState.PlasticcreditGenesis.Projects, []plasticcredit.Project{
		{
			Id:                     currentNoOfProjects + 1,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "ETEST",
			Name:                   "Approved project",
			Status:                 plasticcredit.ProjectStatus_APPROVED,
		},
		{
			Id:                     currentNoOfProjects + 2,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Suspended project",
			Status:                 plasticcredit.ProjectStatus_SUSPENDED,
		},
		{
			Id:                     currentNoOfProjects + 3,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "ETEST",
			Name:                   "New project",
			Status:                 plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                     currentNoOfProjects + 4,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Rejected project",
			Status:                 plasticcredit.ProjectStatus_REJECTED,
		},
		{
			Id:                     currentNoOfProjects + 5,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Other New Project",
			Status:                 plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                     currentNoOfProjects + 6,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Another New Project",
			Status:                 plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                     currentNoOfProjects + 7,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Another Rejected Project",
			Status:                 plasticcredit.ProjectStatus_REJECTED,
		},
		{
			Id:                     currentNoOfProjects + 8,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "Another Suspended Project",
			Status:                 plasticcredit.ProjectStatus_SUSPENDED,
		},
		{
			Id:                     currentNoOfProjects + 9,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "PTEST",
			Name:                   "New Project to update",
			Status:                 plasticcredit.ProjectStatus_NEW,
		},
		{
			Id:                     currentNoOfProjects + 10,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "ETEST",
			Name:                   "Approved project 2",
			Status:                 plasticcredit.ProjectStatus_APPROVED,
		},
		{
			Id:                     currentNoOfProjects + 11,
			ApplicantId:            currentNoOfApplicants + 1,
			CreditTypeAbbreviation: "ETEST",
			Name:                   "Approved project to suspend",
			Status:                 plasticcredit.ProjectStatus_APPROVED,
		},
	}...)
	// check if credit collection exists in genesis state
	// if not, add it
	// if yes, add to the total amount
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+1, "ETEST/123", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/00001", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 5000})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_1", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_2", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_3", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_4", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_5", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_6", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})
	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/UPDATE_LISTING_7", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})

	genesistools.AddGenesisPlasticCreditBalance(cdc, genesisState, currentNoOfProjects+2, "PTEST/CANCEL_LISTING_1", genesisState.PlasticcreditGenesis.Applicants[currentNoOfApplicants].Admin, plasticcredit.CreditAmount{Active: 1000, Retired: 200})

	genesisState.PlasticcreditGenesis.IdCounters = plasticcredit.IDCounters{
		NextIssuerId:    uint64(len(genesisState.PlasticcreditGenesis.Issuers) + 1),
		NextApplicantId: uint64(len(genesisState.PlasticcreditGenesis.Applicants) + 1),
		NextProjectId:   uint64(len(genesisState.PlasticcreditGenesis.Projects) + 1),
	}

	balances := sdk.NewCoins(
		sdk.NewCoin(bondDenom, tokens),
	)

	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(IssuerAddress), balances)
	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(IssuerCreatorAddress), balances)
	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(ApplicantAddress), balances)
	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(RandomAddress), balances)
	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(ContractAdminAddress), balances)
	genesistools.AddGenesisBaseAccountAndBalance(cdc, genesisState, sdk.MustAccAddressFromBech32(NoCoinsIssuerAdminAddress), sdk.NewCoins(sdk.NewCoin(bondDenom, sdk.NewInt(10))))
}
