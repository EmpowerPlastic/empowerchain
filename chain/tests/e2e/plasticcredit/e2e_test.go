package e2e_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	servertypes "github.com/cosmos/cosmos-sdk/server/types"
	"github.com/cosmos/cosmos-sdk/simapp"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	sdk "github.com/cosmos/cosmos-sdk/types"
	dbm "github.com/tendermint/tm-db"
)

func NewAppConstructor() network.AppConstructor {
	return func(val network.Validator) servertypes.Application {
		return app.New(
			val.Ctx.Logger, dbm.NewMemDB(), nil, true, make(map[int64]bool), val.Ctx.Config.RootDir, 0,
			params.MakeEncodingConfig(app.ModuleBasics),
			simapp.EmptyAppOptions{},
		)
	}
}

type E2ETestSuite struct {
	suite.Suite

	cfg         network.Config
	network     *network.Network
	commonFlags []string
}

func NewE2ETestSuite(cfg network.Config) *E2ETestSuite {
	return &E2ETestSuite{cfg: cfg}
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

	genesisState := s.cfg.GenesisState

	plasticcreditGenesisState := plasticcredit.DefaultGenesis()
	plasticcreditGenesisState.Params.IssuerCreator = "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7"
	plasticcreditGenesisState.IdCounters = plasticcredit.IDCounters{
		NextIssuerId:    2,
		NextApplicantId: 2,
		NextProjectId:   4,
	}
	plasticcreditGenesisState.Issuers = []plasticcredit.Issuer{
		{
			Id:          1,
			Name:        "Empower",
			Description: "First Issuer",
			Admin:       "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m",
		},
	}
	plasticcreditGenesisState.Applicants = []plasticcredit.Applicant{
		{
			Id:          1,
			Name:        "Plastix Inc.",
			Description: "Grab that bottle",
			Admin:       "empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn",
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
			Name:                    "Also approved project",
			Status:                  plasticcredit.ProjectStatus_APPROVED,
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
	s.cfg.GenesisState = genesisState

	s.cfg.AppConstructor = NewAppConstructor()

	s.network, err = network.New(s.T(), s.T().TempDir(), s.cfg)
	s.Require().NoError(err)

	kb := s.network.Validators[0].ClientCtx.Keyring
	_, err = kb.NewAccount(
		"issuer",
		"angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)
	_, err = kb.NewAccount(
		"issuerCreator",
		"clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	_, err = kb.NewAccount(
		"applicant",
		"banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass",
		keyring.DefaultBIP39Passphrase,
		sdk.FullFundraiserPath,
		hd.Secp256k1,
	)
	s.Require().NoError(err)

	s.Require().NoError(s.network.WaitForNextBlock())

}

func (s *E2ETestSuite) TearDownSuite() {
	s.T().Log("tearing down e2e test suite")
	s.network.Cleanup()
}

func TestE2ETestSuite(t *testing.T) {
	cfg := network.DefaultConfig()
	params.SetAddressPrefixes()
	params.RegisterDenoms()
	suite.Run(t, NewE2ETestSuite(cfg))
}
