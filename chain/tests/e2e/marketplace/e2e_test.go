package marketplace_test

import (
	"fmt"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

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
