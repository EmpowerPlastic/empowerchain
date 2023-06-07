package keeper_test

import (
	"testing"
	"time"

	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	tmtime "github.com/cometbft/cometbft/types/time"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

type TestSuite struct {
	suite.Suite

	empowerApp *app.EmpowerApp
	ctx        sdk.Context
	addrs      []sdk.AccAddress
}

func (s *TestSuite) SetupTest() {
	empowerApp := app.Setup(s.T(), false)
	ctx := empowerApp.BaseApp.NewContext(false, tmproto.Header{})
	ctx = ctx.WithBlockHeader(tmproto.Header{Time: tmtime.Now()})

	//TODO:
	/*queryHelper := baseapp.NewQueryServerTestHelper(ctx, app.InterfaceRegistry())
	nft.RegisterQueryServer(queryHelper, app.NFTKeeper)
	queryClient := nft.NewQueryClient(queryHelper)*/

	s.empowerApp = empowerApp
	s.ctx = ctx
	s.addrs = app.CreateRandomAccounts(1)
}

func TestTestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()
	suite.Run(t, new(TestSuite))
}

func (s *TestSuite) TestGenesis() {
	testCases := map[string]struct {
		genesis proofofexistence.GenesisState
		expErr  bool
	}{
		"default genesis": {
			genesis: *proofofexistence.DefaultGenesisState(),
			expErr:  false,
		},
		"custom genesis": {
			genesis: proofofexistence.GenesisState{
				ProofList: []proofofexistence.Proof{
					{
						Hash: "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: &proofofexistence.ProofMetadata{
							Timestamp: time.UnixMilli(42).UTC(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
					{
						Hash: "ffb5ff85bf44c95908f7965d9d379a378ab93bc3e9c14eb99c9980e3c41ae270",
						Metadata: &proofofexistence.ProofMetadata{
							Timestamp: time.UnixMilli(123).UTC(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
					{
						Hash: "84ae5dfc89d073f7bc8dd48d64adeae462e01b020f9765f2531dfc70e9724cf2",
						Metadata: &proofofexistence.ProofMetadata{
							Timestamp: time.UnixMilli(124).UTC(),
							Creator:   "empower1jzds0k6d04zu52paldgzlav7dtvd2lflx6rmar",
						},
					},
				},
			},
			expErr: false,
		},
		"invalid genesis": {
			genesis: proofofexistence.GenesisState{
				ProofList: []proofofexistence.Proof{
					{
						Hash: "invalidhash",
						Metadata: &proofofexistence.ProofMetadata{
							Timestamp: time.Now().UTC(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
				},
			},
			expErr: true,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			err := s.empowerApp.ProofofexistenceKeeper.InitGenesis(s.ctx, tc.genesis)
			if tc.expErr {
				s.Require().Error(err)
				return
			}
			s.Require().NoError(err)

			export, err := s.empowerApp.ProofofexistenceKeeper.ExportGenesis(s.ctx)
			s.Require().NoError(err)
			s.Require().Equal(len(tc.genesis.ProofList), len(export.ProofList))
			for _, expected := range tc.genesis.ProofList {
				for _, potential := range export.ProofList {
					if potential.Hash == expected.Hash {
						s.Require().Equal(expected.Hash, potential.Hash)
						s.Require().Equal(expected.Metadata.Creator, potential.Metadata.Creator)
						s.Require().Equal(expected.Metadata.Timestamp, potential.Metadata.Timestamp)
						break
					}
				}
			}
		})
	}
}
