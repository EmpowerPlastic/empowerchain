package proofofexistence

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestValidateGenesis(t *testing.T) {
	testCases := map[string]struct {
		genesisState GenesisState
		expErr       bool
	}{
		"valid default genesis state": {
			genesisState: *DefaultGenesisState(),
			expErr:       false,
		},
		"valid custom genesis state": {
			genesisState: GenesisState{
				ProofList: []Proof{
					{
						Hash: "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
					{
						Hash: "ffb5ff85bf44c95908f7965d9d379a378ab93bc3e9c14eb99c9980e3c41ae270",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "empower1vujkvs47zkrj97fh46a53yf2nty8hm9rqs64f4",
						},
					},
				},
			},
			expErr: false,
		},
		"duplicate proof": {
			genesisState: GenesisState{
				ProofList: []Proof{
					{
						Hash: "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
					{
						Hash: "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "empower1vujkvs47zkrj97fh46a53yf2nty8hm9rqs64f4",
						},
					},
				},
			},
			expErr: true,
		},
		"empty hash": {
			genesisState: GenesisState{
				ProofList: []Proof{
					{
						Hash: "",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
						},
					},
				},
			},
			expErr: true,
		},
		"empty metadata": {
			genesisState: GenesisState{
				ProofList: []Proof{
					{
						Hash:     "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: nil,
					},
				},
			},
			expErr: true,
		},
		"empty creator": {
			genesisState: GenesisState{
				ProofList: []Proof{
					{
						Hash: "2feca43664769f70935eb2495eb0e7436b0ea0c7ccfddc0d6f029d8a33b09781",
						Metadata: &ProofMetadata{
							Timestamp: time.Now(),
							Creator:   "",
						},
					},
				},
			},
			expErr: true,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.genesisState.Validate()

			if tc.expErr {
				require.Error(t, err)
				return
			}

			require.NoError(t, err)
		})
	}
}
