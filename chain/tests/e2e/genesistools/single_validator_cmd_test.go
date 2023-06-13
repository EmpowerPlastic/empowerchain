package e2e_test

import (
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/app"
	preparegenesis "github.com/EmpowerPlastic/empowerchain/cmd/empowerd/cmd/prepare-genesis"
)

func (s *E2ETestSuite) TestCreateDevnetGenesis() {
	val := s.Network.Validators[0]
	testCases := map[string]struct {
		pathToGenesisFile string
		keyName           string
		publicValKey      string
		expectErr         bool
		expectedPanic     bool
		err               string
	}{
		"generate devnet genesis successfully": {
			pathToGenesisFile: val.Dir + "/simd/config/genesis.json",
			keyName:           "node0",
			publicValKey:      "1dGwzfPmDwneX2qievD3CMVXzEupNOjEBZkwqpTbXqY=",
			expectErr:         false,
			expectedPanic:     false,
			err:               "",
		},
		"generate devnet genesis with invalid pathToGenesisFile": {
			pathToGenesisFile: val.Dir + "/invalid/config/genesis.json",
			keyName:           "node0",
			publicValKey:      "1dGwzfPmDwneX2qievD3CMVXzEupNOjEBZkwqpTbXqY=",
			expectErr:         true,
			expectedPanic:     false,
			err:               "does not exist",
		},
		"generate devnet genesis with invalid keyName": {
			pathToGenesisFile: val.Dir + "/simd/config/genesis.json",
			keyName:           "invalid",
			publicValKey:      "1dGwzfPmDwneX2qievD3CMVXzEupNOjEBZkwqpTbXqY=",
			expectErr:         true,
			expectedPanic:     false,
			err:               "key not found",
		},
		"generate devnet genesis with invalid publicValKey": {
			pathToGenesisFile: val.Dir + "/simd/config/genesis.json",
			keyName:           "node0",
			publicValKey:      "invalid",
			expectErr:         false,
			expectedPanic:     true,
			err:               "invalid bech32 string",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			if tc.expectedPanic {
				s.Require().PanicsWithValue("illegal base64 data at input byte 4", func() {
					cmd := preparegenesis.SingleValidatorCmd(app.DefaultNodeHome, app.ModuleBasics)
					clientCtx := val.ClientCtx
					_, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, []string{tc.pathToGenesisFile, tc.keyName, tc.publicValKey})
					s.Require().NoError(err)
				})
				return
			}
			cmd := preparegenesis.SingleValidatorCmd(app.DefaultNodeHome, app.ModuleBasics)
			clientCtx := val.ClientCtx
			_, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, []string{tc.pathToGenesisFile, tc.keyName, tc.publicValKey})
			if tc.expectErr {
				s.Require().Error(err)
				s.Require().Contains(err.Error(), tc.err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}
