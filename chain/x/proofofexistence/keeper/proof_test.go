package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/proofofexistence"
)

func (s *TestSuite) TestCreateNewProof() {
	testCases := map[string]struct {
		hash          string
		creator       sdk.AccAddress
		expectedError error
		precondition  func(*TestSuite)
	}{
		"happy path": {
			hash:    "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
			creator: s.addrs[0],
		},
		"empty hash": {
			creator:       s.addrs[0],
			expectedError: proofofexistence.ErrInvalidProof,
		},
		"invalid hex hash": {
			hash:          "invalid",
			creator:       s.addrs[0],
			expectedError: proofofexistence.ErrInvalidProof,
		},
		"invalid hash (hex, but not sha256hex)": {
			hash:          "4d4f544845524655434b4552",
			creator:       s.addrs[0],
			expectedError: proofofexistence.ErrInvalidProof,
		},
		"duplicate hash": {
			hash:    "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
			creator: s.addrs[0],
			precondition: func(s *TestSuite) {
				err := s.empowerApp.ProofofexistenceKeeper.CreateNewProof(s.ctx, "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781", s.addrs[0])
				s.Require().NoError(err)
			},
			expectedError: proofofexistence.ErrHashExists,
		},
		"missing creator": {
			hash:          "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
			expectedError: proofofexistence.ErrInvalidCreator,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			if tc.precondition != nil {
				tc.precondition(s)
			}

			ctx := s.ctx
			proofOfExistenceKeeper := s.empowerApp.ProofofexistenceKeeper

			err := proofOfExistenceKeeper.CreateNewProof(ctx, tc.hash, tc.creator)
			if tc.expectedError != nil {
				s.Require().ErrorIs(err, tc.expectedError)
				return
			}

			s.Require().NoError(err)
		})
	}
}

func (s *TestSuite) TestGetProof() {
	testHash := "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781"
	testCases := map[string]struct {
		hashToGet     string
		expectedError error
	}{
		"happy path": {
			hashToGet:     testHash,
			expectedError: nil,
		},
		"not found": {
			hashToGet:     "ffb5ff85bf44c95908f7965d9d379a378ab93bc3e9c14eb99c9980e3c41ae270",
			expectedError: proofofexistence.ErrProofNotFound,
		},
		"invalid hash": {
			hashToGet:     "invalid",
			expectedError: proofofexistence.ErrInvalidProof,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			ctx := s.ctx
			proofOfExistenceKeeper := s.empowerApp.ProofofexistenceKeeper
			err := proofOfExistenceKeeper.CreateNewProof(ctx, testHash, s.addrs[0])
			s.Require().NoError(err)

			proof, err := proofOfExistenceKeeper.GetProof(ctx, tc.hashToGet)
			if tc.expectedError != nil {
				s.Require().ErrorIs(err, tc.expectedError)
				return
			}

			s.Require().NoError(err)
			s.Require().Equal(s.addrs[0].String(), proof.Creator)
		})
	}
}
