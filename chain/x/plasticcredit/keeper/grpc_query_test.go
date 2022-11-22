package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (s *TestSuite) TestParamsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	params := types.DefaultParams()
	k.SetParams(s.ctx, params)

	wctx := sdk.WrapSDKContext(s.ctx)
	response, err := k.Params(wctx, &types.QueryParamsRequest{})
	s.Require().NoError(err)
	s.Require().Equal(&types.QueryParamsResponse{Params: params}, response)
}
