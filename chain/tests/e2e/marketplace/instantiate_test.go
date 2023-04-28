package marketplace_test

import (
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"text/template"

	wasmcli "github.com/CosmWasm/wasmd/x/wasm/client/cli"
	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"

	_ "embed"
)

type MarketplaceInstantiateMessage struct {
	Admin         string                `json:"admin"`
	FeePercentage string                `json:"fee_percentage"`
	Shares        []MarketplaceFeeShare `json:"shares"`
}

type MarketplaceFeeShare struct {
	Address    string `json:"address"`
	Percentage string `json:"percentage"`
}

func (s *E2ETestSuite) TestInstantiate() {
	s.instantiateMarketplace(MarketplaceInstantiateMessage{
		Admin:         e2e.ContractAdminAddress,
		FeePercentage: "0",
		Shares:        []MarketplaceFeeShare{},
	})
}

func (s *E2ETestSuite) instantiateMarketplace(marketplaceInstantiateMsg MarketplaceInstantiateMessage) string {
	val := s.Network.Validators[0]
	instantiateCmd := wasmcli.InstantiateContractCmd()

	instantiateMessage, err := json.Marshal(marketplaceInstantiateMsg)
	s.Require().NoError(err)
	out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, instantiateCmd, append([]string{
		"1",
		string(instantiateMessage),
		"--label=marketplace",
		fmt.Sprintf("--admin=%s", e2e.ContractAdminAddress),
		fmt.Sprintf("--%s=%s", flags.FlagFrom, e2e.ContractAdminAddress),
	}, s.CommonFlags...))
	s.Require().NoError(err)
	cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
	s.Require().NoError(err)
	s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

	var instantiateResponse wasmtypes.MsgInstantiateContractResponse
	err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &instantiateResponse)
	s.Require().NoError(err)
	s.Require().NotEmpty(instantiateResponse.Address)

	return instantiateResponse.Address
}

func (s *E2ETestSuite) TestUploadByProposal() {
	tempDir, err := os.MkdirTemp("", "store-code-proposal")
	s.Require().NoError(err)
	defer os.RemoveAll(tempDir)

	// Read in file, encode to base64, and gzip
	contractBytes, err := os.ReadFile(wasmFilePath)
	s.Require().NoError(err)
	contractAsGzip, err := gzipEncode(contractBytes)
	contractAsBase64 := base64.StdEncoding.EncodeToString(contractAsGzip)
	s.Require().NoError(err)

	tmpl, err := template.New("store-code-proposal").Parse(storeCodeProposalTmpl)
	s.Require().NoError(err)
	proposalFile, err := os.CreateTemp(tempDir, "store-code-proposal.json")
	s.Require().NoError(err)
	err = tmpl.Execute(proposalFile, ProposalTmplValues{WASMByteCode: contractAsBase64})
	s.Require().NoError(err)

	s.MakeSuccessfulProposal(proposalFile.Name(), fmt.Sprintf("--%s=%s", flags.FlagGas, "100000000"))
}

func gzipEncode(data []byte) ([]byte, error) {
	var buffer bytes.Buffer
	gz := gzip.NewWriter(&buffer)

	if _, err := gz.Write(data); err != nil {
		return nil, err
	}
	if err := gz.Close(); err != nil {
		return nil, err
	}

	return buffer.Bytes(), nil
}
