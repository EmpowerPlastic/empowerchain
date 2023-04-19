package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (s *TestSuite) TestCreateCertificateKey() {
	testCases := map[string]struct {
		owner         sdk.AccAddress
		id            uint64
		expectedValue []byte
		err           error
	}{
		"happy path": {
			owner:         sdk.AccAddress("test"),
			id:            123,
			expectedValue: []byte{0},
			err:           nil,
		},
		"empty owner": {
			owner: sdk.AccAddress(""),
			id:    123,
			err:   utils.ErrInvalidValue,
		},
		"empty id": {
			owner: sdk.AccAddress("test"),
			id:    0,
			err:   utils.ErrInvalidValue,
		},
	}
	for owner, tc := range testCases {
		s.Run(owner, func() {
			key, err := certificates.CreateCertificateKey(tc.owner, tc.id)
			s.Require().ErrorIs(tc.err, err)
			if tc.err == nil {
				s.Require().Equal(tc.expectedValue, key)
			}
		})
	}

}
