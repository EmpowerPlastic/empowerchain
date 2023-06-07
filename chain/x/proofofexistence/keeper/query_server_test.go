package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

func (s *TestSuite) TestProofQuery() {
	k := s.empowerApp.ProofofexistenceKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	testHash := "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781"
	testCreator := sample.AccAddress()

	_, err := k.Proof(goCtx, &proofofexistence.QueryProofRequest{Hash: testHash})
	s.Require().ErrorIs(err, proofofexistence.ErrProofNotFound)

	err = k.CreateNewProof(s.ctx, testHash, sdk.MustAccAddressFromBech32(testCreator))
	s.Require().NoError(err)

	resp, err := k.Proof(goCtx, &proofofexistence.QueryProofRequest{Hash: testHash})
	s.Require().NoError(err)
	s.Require().Equal(proofofexistence.ProofMetadata{
		Timestamp: s.ctx.BlockTime(),
		Creator:   testCreator,
	}, resp.Metadata)
}
