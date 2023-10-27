package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/gogoproto/proto"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdQueryParams() {
	val := s.Network.Validators[0]
	issuerCreator := ""
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
			out, err := clitestutil.ExecTestCLICmd(clientCtx, cmd, append(tc.args, fmt.Sprintf("--%s=json", flags.FlagOutput)))
			s.Require().NoError(err)
			var result plasticcredit.QueryParamsResponse
			s.Require().NoError(clientCtx.Codec.UnmarshalJSON(out.Bytes(), &result))
			s.Require().Equal(issuerCreator, result.Params.IssuerCreator)
		})
	}
}

func (s *E2ETestSuite) TestCmdQueryIssuer() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
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
			[]string{"51"},
			true,
			"issuer not found",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.CmdQueryIssuer()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, fmt.Sprintf("--%s=json", flags.FlagOutput)))

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

func (s *E2ETestSuite) TestCmdQueryProject() {
	val := s.Network.Validators[0]
	testCases := map[string]struct {
		args           []string
		expectedErr    bool
		expectedErrMsg string
		expectedResp   proto.Message
	}{
		"query existing project": {
			[]string{"1"},
			false,
			"",
			&plasticcredit.QueryProjectResponse{
				Project: plasticcredit.Project{
					Id:                     1,
					ApplicantId:            1,
					CreditTypeAbbreviation: "ETEST",
					Name:                   "Approved project",
					Status:                 plasticcredit.ProjectStatus_APPROVED,
				},
			},
		},

		"query non-existing project": {
			[]string{"35"},
			true,
			"project not found",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.CmdQueryProject()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, fmt.Sprintf("--%s=json", flags.FlagOutput)))

			if tc.expectedErr {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedResp, &resp)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdQueryApplicant() {
	val := s.Network.Validators[0]
	testCases := map[string]struct {
		args           []string
		expectedErr    bool
		expectedErrMsg string
		expectedResp   proto.Message
	}{
		"query existing applicant": {
			[]string{"1"},
			false,
			"",
			&plasticcredit.QueryApplicantResponse{
				Applicant: plasticcredit.Applicant{
					Id:          1,
					Name:        "Plastix Inc.",
					Description: "Grab that bottle",
					Admin:       "empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn",
				},
			},
		},

		"query non-existing applicant": {
			[]string{"35"},
			true,
			"applicant not found",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.CmdQueryApplicant()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, fmt.Sprintf("--%s=json", flags.FlagOutput)))

			if tc.expectedErr {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				s.Require().NoError(err)
				var resp plasticcredit.QueryApplicantResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedResp, &resp)
			}
		})
	}
}
