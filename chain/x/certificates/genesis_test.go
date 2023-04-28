package certificates_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

func TestGenesisState_Validate(t *testing.T) {
	validIssuer := sample.AccAddress()
	testCases := map[string]struct {
		genState certificates.GenesisState
		err      error
	}{
		"default is valid": {
			genState: certificates.DefaultGenesis(),
			err:      nil,
		},
		"invalid params": {
			genState: certificates.GenesisState{
				Params: certificates.Params{},
			},
			err: utils.ErrInvalidValue,
		},
		"valid genesis with certificate": {
			genState: certificates.GenesisState{
				Params: certificates.Params{
					AllowedIssuer: []string{validIssuer},
				},
				IdCounters: certificates.IDCounters{
					NextCertificateId: 10,
				},
				Certificates: []certificates.Certificate{
					{
						Id:     5,
						Owner:  sample.AccAddress(),
						Type:   0,
						Issuer: validIssuer,
					},
				},
			},
			err: nil,
		},
		"invalid certificate type": {
			genState: certificates.GenesisState{
				Params: certificates.Params{
					AllowedIssuer: []string{validIssuer},
				},
				IdCounters: certificates.IDCounters{
					NextCertificateId: 5,
				},
				Certificates: []certificates.Certificate{
					{
						Id:     4,
						Owner:  sample.AccAddress(),
						Type:   100,
						Issuer: validIssuer,
					},
				},
			},
			err: utils.ErrInvalidValue,
		},
	}
	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.genState.Validate()
			require.ErrorIs(t, err, tc.err)
		})
	}
}
