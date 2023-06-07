# E2E tests

`e2e_test` package contains end to end tests for the chain. It uses Cosmos SDK's test `network` util to spin up local network consisting of multiple validators. Commands are executed directly on a validator node using CLI.

## Structure

```
.
├── module_name        # top level directory for module tests
│   ├── e2e_test.go    # Initial network and test suite configuration
│   ├── query_test.go  # Query/read-only test scenarios
│   ├── tx_test.go     # Test scenarios where transactions are executed
└── README.md
```

### PlasticCredit Module

PlasticCredit module testing suite is configured with a predefined genesis state that consists of 1 Issuer, 1 Applicant and 4 Projects (2 in Approved status, 1 in New status and the last one in Rejected status). Applicant's admin also holds pre-minted Plastic Credits `ETEST/123` and `PTEST/00001`. First validator of the chain (`s.network.Validators[0]`) has issuer's, applicant's and issuer creator's keys imported into it's keyring. You can access the keys using package-wide constants `issuerKey`, `issuerCreatorKey` and `applicantKey`. Example snippet of fetching issuer's key:

```go
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)
```

### Veryfing transaction response

`UnpackTxResponseData()` allows to decode transaction response object and compare it with expected value. Example usage:

```go
var submitProposalResponse govtypesv1.MsgSubmitProposalResponse
out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
UnpackTxResponseData(val.ClientCtx, out.Bytes(), &submitProposalResponse)
```