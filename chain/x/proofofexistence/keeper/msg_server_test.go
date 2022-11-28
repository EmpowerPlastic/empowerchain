package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/proofofexistence"
	"github.com/empowerchain/empowerchain/x/proofofexistence/keeper"
)

func (s *TestSuite) TestCreateProof() {
	k := s.empowerApp.ProofofexistenceKeeper
	ms := keeper.NewMsgServerImpl(k)
	goCtx := sdk.WrapSDKContext(s.ctx)

	_, err := ms.CreateProof(goCtx, &proofofexistence.MsgCreateProof{
		Hash:    "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
		Creator: s.addrs[0].String(),
	})
	s.Require().NoError(err)
}
