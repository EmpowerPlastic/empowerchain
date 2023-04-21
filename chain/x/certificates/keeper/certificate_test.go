package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
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
			expectedValue: []byte{0x4, 0x74, 0x65, 0x73, 0x74, 0x7b, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0},
			err:           nil,
		},
		"empty owner": {
			owner: sdk.AccAddress(""),
			id:    123,
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
