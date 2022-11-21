package keeper_test

import (
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (s *TestSuite) TestGetParams() {
	k := s.empowerApp.PlasticcreditKeeper
	params := types.DefaultParams()
	k.SetParams(s.ctx, params)

	s.Require().EqualValues(params, k.GetParams(s.ctx))
	s.Require().EqualValues(params.CreateissuerAllowlist, k.CreateissuerAllowlist(s.ctx))
}
