package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence/keeper"
)

func (s *TestSuite) TestCreateProof() {
	testCases := map[string]struct {
		msg proofofexistence.MsgCreateProof
		err error
	}{
		"happy path": {
			msg: proofofexistence.MsgCreateProof{
				Creator: sample.AccAddress(),
				Hash:    "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
			},
			err: nil,
		},
		"invalid creator": {
			msg: proofofexistence.MsgCreateProof{
				Creator: "invalid",
				Hash:    "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
			},
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			k := s.empowerApp.ProofofexistenceKeeper
			ms := keeper.NewMsgServerImpl(k)
			goCtx := sdk.WrapSDKContext(s.ctx)

			_, err := ms.CreateProof(goCtx, &tc.msg)

			s.Require().ErrorIs(err, tc.err)
		})
	}
}
