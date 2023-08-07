package e2e_test

import (
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/app"
	preparegenesis "github.com/EmpowerPlastic/empowerchain/cmd/empowerd/cmd/prepare-genesis"
)

func (s *E2ETestSuite) TestCreateMainnetGenesis() {
	val := s.Network.Validators[0]
	testCases := map[string]struct {
		chainID     string
		genesisTime string
		filePath    string
		expectErr   bool
		err         string
	}{
		"generate mainnet genesis successfully": {
			chainID:     "empowerchain-e2e-1",
			genesisTime: "2021-01-01T00:00:00Z",
			filePath:    val.Dir + "/simd/config/genesis.json.generated",
			expectErr:   false,
			err:         "",
		},
		"generate mainnet genesis with empty chainID": {
			chainID:     "",
			genesisTime: "2021-01-01T00:00:00Z",
			expectErr:   true,
			err:         "genesis doc must include non-empty chain_id",
		},
		"generate mainnet genesis with invalid genesisTime": {
			chainID:     "empowerchain-e2e-1",
			genesisTime: "2021-01-01T00:00:00",
			expectErr:   true,
			err:         "cannot parse",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := preparegenesis.MainnetCmd(app.DefaultNodeHome, app.ModuleBasics)
			clientCtx := val.ClientCtx
			params := []string{tc.chainID, tc.genesisTime}
			if tc.filePath != "" {
				params = append(params, tc.filePath)
			}
			_, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, params)
			if tc.expectErr {
				s.Require().Error(err)
				s.Require().Contains(err.Error(), tc.err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}
