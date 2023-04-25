package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

func (s *TestSuite) TestCreateCertificateKey() {
	s.Run(string(sdk.AccAddress("test")), func() {
		key, _ := certificates.CreateCertificateKey(sdk.AccAddress("test"), 123)
		s.Require().Equal([]byte{0x4, 0x74, 0x65, 0x73, 0x74, 0x7b, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0}, key)
	})
}
