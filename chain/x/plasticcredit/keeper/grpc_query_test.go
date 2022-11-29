package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestParamsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	ms := keeper.NewMsgServerImpl(k)
	goCtx := sdk.WrapSDKContext(s.ctx)

	params := plasticcredit.DefaultParams()
	_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
		Authority: k.Authority(),
		Params:    plasticcredit.Params{},
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	response, err := querier.Params(goCtx, &plasticcredit.QueryParamsRequest{})
	s.Require().NoError(err)
	s.Require().Equal(&plasticcredit.QueryParamsResponse{Params: params}, response)
}
