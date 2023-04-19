package certificates_test

import (
	"testing"

	"github.com/EmpowerPlastic/empowerchain/testutil/nullify"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	validIssuer := sample.AccAddress()
	testCases := []struct {
		name string
		gen  certificates.GenesisState
		err  bool
	}{
		{
			name: "default is valid",
			gen:  certificates.DefaultGenesis(),
		},
		{
			name: "invalid params",
			gen: certificates.GenesisState{
				Params: certificates.Params{},
			},
			err: true,
		},
		{
			name: "valid genesis with certificate",
			gen: certificates.GenesisState{
				Params: certificates.Params{
					AllowedIssuer: []string{validIssuer},
				},
				IdCounters: certificates.IDCounters{
					NextCertificateId: 1,
				},
				Certificates: []certificates.Certificate{
					{
						Id:     1,
						Owner:  sample.AccAddress(),
						Type:   0,
						Issuer: validIssuer,
					},
				},
			},
			err: false,
		},
		{
			name: "invalid certificate type",
			gen: certificates.GenesisState{
				Params: certificates.Params{
					AllowedIssuer: []string{validIssuer},
				},
				IdCounters: certificates.IDCounters{
					NextCertificateId: 1,
				},
				Certificates: []certificates.Certificate{
					{
						Id:     1,
						Owner:  sample.AccAddress(),
						Type:   100,
						Issuer: validIssuer,
					},
				},
			},
			err: true,
		},
	}

	for _, tc := range testCases {
		tc := tc

		t.Run(tc.name, func(t *testing.T) {
			err := tc.gen.Validate()
			if tc.err {
				require.Error(t, err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
