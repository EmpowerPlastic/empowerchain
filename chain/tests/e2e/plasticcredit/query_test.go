package e2e_test

import (
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/gogoproto/proto"
)

func (s *E2ETestSuite) TestCmdQueryParams() {
	val := s.network.Validators[0]
	issuerCreatorKey, err := val.ClientCtx.Keyring.Key(issuerCreatorKey)
	s.Require().NoError(err)
	issuerCreator, err := issuerCreatorKey.GetAddress()
	s.Require().NoError(err)
	testCases := map[string]struct {
		args []string
	}{
		"happy case": {
			[]string{},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.CmdQueryParams()
			clientCtx := val.ClientCtx
			out, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, tc.args)
			s.Require().NoError(err)
			var result plasticcredit.QueryParamsResponse
			s.Require().NoError(clientCtx.Codec.UnmarshalJSON(out.Bytes(), &result))
			s.Require().Equal(issuerCreator.String(), result.Params.IssuerCreator)
		})
	}
}

func (s *E2ETestSuite) TestCmdQueryIssuer() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	testCases := map[string]struct {
		args           []string
		expectedErr    bool
		expectedErrMsg string
		expectedResp   proto.Message
	}{

		"query existing issuer": {
			[]string{"1"},
			false,
			"",
			&plasticcredit.QueryIssuerResponse{
				Issuer: plasticcredit.Issuer{
					Id:          1,
					Name:        "Empower",
					Description: "First Issuer",
					Admin:       issuer.String(),
				},
			},
		},

		"query non-existing issuer": {
			[]string{"2"},
			true,
			"issuer not found",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.CmdQueryIssuer()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, tc.args)

			if tc.expectedErr {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				s.Require().NoError(err)
				var resp plasticcredit.QueryIssuerResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedResp, &resp)
			}
		})
	}
}
