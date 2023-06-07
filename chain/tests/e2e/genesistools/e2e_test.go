package e2e_test

import (
	"testing"

	"github.com/cosmos/cosmos-sdk/testutil/network"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
)

type E2ETestSuite struct {
	e2e.TestSuite
}

func TestE2ETestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()
	cfg := network.DefaultConfig(app.NewTestNetworkFixture)
	suite.Run(t, &E2ETestSuite{
		TestSuite: e2e.TestSuite{
			Config: cfg,
		},
	})
}
