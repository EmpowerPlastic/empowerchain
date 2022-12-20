package e2e_test

import (
	"testing"

	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	servertypes "github.com/cosmos/cosmos-sdk/server/types"
	"github.com/cosmos/cosmos-sdk/simapp"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	dbm "github.com/tendermint/tm-db"
)

func NewAppConstructor() network.AppConstructor {
	return func(val network.Validator) servertypes.Application {
		return app.New(
			val.Ctx.Logger, dbm.NewMemDB(), nil, true, make(map[int64]bool), val.Ctx.Config.RootDir, 0,
			params.MakeEncodingConfig(app.ModuleBasics),
			simapp.EmptyAppOptions{},
			// baseapp.SetPruning(pruningtypes.NewPruningOptionsFromString(val.AppConfig.Pruning)),
			// baseapp.SetMinGasPrices(val.AppConfig.MinGasPrices),
		)
	}
}

type E2ETestSuite struct {
	suite.Suite

	cfg     network.Config
	network *network.Network
}

func NewE2ETestSuite(cfg network.Config) *E2ETestSuite {
	return &E2ETestSuite{cfg: cfg}
}

func (s *E2ETestSuite) SetupSuite() {
	s.T().Log("setting up e2e test suite")

	if testing.Short() {
		s.T().Skip("skipping test in unit-tests mode.")
	}
	s.cfg.Mnemonics = []string{
		// empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7
		"clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion",
		// empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m
		"angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice",
		// empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn
		"banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass",
	}
	s.cfg.NumValidators = 3

	genesisState := s.cfg.GenesisState

	plasticcreditGenesisState := plasticcredit.DefaultGenesis()
	plasticcreditGenesisState.Params.IssuerCreator = "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7"

	plasticcreditGenesisStateBz, err := s.cfg.Codec.MarshalJSON(&plasticcreditGenesisState)
	s.Require().NoError(err)
	genesisState[plasticcredit.ModuleName] = plasticcreditGenesisStateBz
	s.cfg.GenesisState = genesisState

	s.cfg.AppConstructor = NewAppConstructor()

	s.network, err = network.New(s.T(), s.T().TempDir(), s.cfg)
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

func (s *E2ETestSuite) TestGetParams() {
	val := s.network.Validators[0]
	testCases := []struct {
		name      string
		args      []string
		expectErr bool
	}{
		{
			"happy case",
			[]string{},
			false,
		},
	}
	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			cmd := cli.CmdQueryParams()
			clientCtx := val.ClientCtx
			out, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, tc.args)
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				var result plasticcredit.QueryParamsResponse
				s.Require().NoError(clientCtx.Codec.UnmarshalJSON(out.Bytes(), &result))
				s.Require().Equal("empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7", result.Params.IssuerCreator)
			}
		})
	}
}
