package marketplace_test

import (
	"fmt"
	"os"
	"testing"

	"cosmossdk.io/errors"
	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/cosmos-sdk/testutil/network"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/tests/e2e"

	_ "embed"
)

//go:embed testdata/store_code_proposal.json.tmpl
var storeCodeProposalTmpl string

type ProposalTmplValues struct {
	WASMByteCode string
}

const wasmFilePath = "../../../../cosmwasm/artifacts/plastic_credit_marketplace.wasm"

type E2ETestSuite struct {
	e2e.TestSuite
}

var ErrListingNotFound = errors.Register("plastic_credit_marketplace", 100, "rpc error: code = Unknown desc = plastic_credit_marketplace::state::Listing not found: query wasm contract failed: unknown request")

// uploadContractBeforeAll uploads the marketplace contract before all tests
// because of this, we have the code id 1 set already and can use it in other tests
func uploadContractBeforeAll(s *e2e.TestSuite) {
	val := s.Network.Validators[0]
	storeCodeCmd := wasmcli.StoreCodeCmd()
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, storeCodeCmd, append([]string{
		wasmFilePath,
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.ContractAdminAddress),
		fmt.Sprintf("--%s=%s", flags.FlagGas, "5000000"),
	}, s.CommonFlags...))
	s.Require().NoError(err)
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)
}

func TestE2ETestSuite(t *testing.T) {
	// Check if wasm file exists before running tests
	if _, err := os.Stat(wasmFilePath); os.IsNotExist(err) {
		t.Fatalf("Wasm file not found at %s", wasmFilePath)
	}

	params.SetAddressPrefixes()
	params.RegisterDenoms()
	cfg := network.DefaultConfig(app.NewTestNetworkFixture)
	suite.Run(t, &E2ETestSuite{
		TestSuite: e2e.TestSuite{
			Config:        cfg,
			BeforeAllHook: uploadContractBeforeAll,
		},
	})
}
