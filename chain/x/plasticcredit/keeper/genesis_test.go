package keeper_test

import (
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (s *TestSuite) TestGenesis() {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
	}

	err := s.empowerApp.PlasticcreditKeeper.InitGenesis(s.ctx, genesisState)
	s.Require().NoError(err)

	export, err := s.empowerApp.PlasticcreditKeeper.ExportGenesis(s.ctx)
	s.Require().NoError(err)
	_ = export
}
