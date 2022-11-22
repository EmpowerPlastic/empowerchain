package keeper_test

import (
	"github.com/cosmos/btcutil/bech32"
	sdk "github.com/cosmos/cosmos-sdk/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/empowerchain/empowerchain/app"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (s *TestSuite) TestUpdateParams() {
	testCases := map[string]struct {
		msg func(*app.EmpowerApp) *types.MsgUpdateParams
		err error
	}{
		"happy path": {
			msg: func(empowerApp *app.EmpowerApp) *types.MsgUpdateParams {
				return &types.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: types.Params{
						IssuerCreator: sample.AccAddress(),
					},
				}
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: func(empowerApp *app.EmpowerApp) *types.MsgUpdateParams {
				return &types.MsgUpdateParams{
					Authority: s.addrs[0].String(), // Just a random address, should not have access!
					Params:    types.Params{},
				}
			},
			err: govtypes.ErrInvalidSigner,
		},
		"invalid params": {
			msg: func(empowerApp *app.EmpowerApp) *types.MsgUpdateParams {
				return &types.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: types.Params{
						IssuerCreator: "invalid",
					},
				}
			},
			err: bech32.ErrInvalidLength(7),
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(s.empowerApp.PlasticcreditKeeper)
			_, err := ms.UpdateParams(goCtx, tc.msg(s.empowerApp))
			if tc.err != nil {
				s.Require().ErrorIs(err, tc.err)
				return
			}

			s.Require().NoError(err)
		})
	}
}
