package e2e_test

import (
	"fmt"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gogoproto/proto"
)

func (s *E2ETestSuite) TestCmdUpdateIssuer() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	newAdmin := sample.AccAddress()
	s.Require().NoError(err)

	notIssuerKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     proto.Message
	}{

		"update name, description": {
			[]string{issuer.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "We fight for a clean planet",
				Admin:       issuer.String(),
			},
		},

		"update non-existing issuer": {
			[]string{issuer.String(), "3", "Plastic Nemesis Ltd", "How do we start?", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"issuer not found",
			nil,
		},

		"wrong singer": {
			[]string{issuer.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, notIssuerKey.Name)},
			false,
			true,
			"",
			nil,
		},

		"empty name": {
			[]string{issuer.String(), "1", "", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"issuer name cannot be empty",
			nil,
		},

		"empty description": {
			[]string{issuer.String(), "1", "Empower Plastic", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "",
				Admin:       issuer.String(),
			},
		},

		"invalid admin": {
			[]string{"invalidaddress", "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"invalid admin address",
			nil,
		},
		"change admin": {
			[]string{newAdmin, "2", "Test Issuer", "Purely for testing", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          2,
				Name:        "Test Issuer",
				Description: "Purely for testing",
				Admin:       newAdmin,
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateIssuerCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryIssuer()
				out, err = clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[1]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryIssuerResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Issuer)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdCreateProject() {
	val := s.network.Validators[0]
	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)
	notApplicantKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{

		"create project": {
			[]string{"1", "EMP", "My new Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      7,
				ApplicantId:             1,
				CreditClassAbbreviation: "EMP",
				Name:                    "My new Project",
				Status:                  plasticcredit.ProjectStatus_NEW,
			},
		},
		"admin does not have authorization for applicant": {
			[]string{"1", "EMP", "My new Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, notApplicantKey.Name)},
			true,
			false,
			"unauthorized",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryProject()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{fmt.Sprint(tc.expectedState.Id)})
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateProject() {
	val := s.network.Validators[0]

	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)
	notApplicantKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{

		"update project": {
			[]string{"3", "My Updated Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      3,
				ApplicantId:             1,
				CreditClassAbbreviation: "EMP",
				Name:                    "My Updated Project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
		"update non-existing project": {
			[]string{"65", "My Updated Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			true,
			"project not found",
			nil,
		},
		"invalid applicant": {
			[]string{"1", "My Updated Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, notApplicantKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"empty name": {
			[]string{"1", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			true,
			false,
			"project name cannot be empty",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryProject()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdApproveProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{

		"approve project": {
			[]string{"3", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      3,
				ApplicantId:             1,
				CreditClassAbbreviation: "EMP",
				Name:                    "New project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
		"approve suspended project": {
			[]string{"2", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      2,
				ApplicantId:             1,
				CreditClassAbbreviation: "PCRD",
				Name:                    "Suspended project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
		"approve non-existing project": {
			[]string{"62", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project not found",
			nil,
		},
		"invalid admin": {
			[]string{"4", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"project already approved": {
			[]string{"1", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"project is approved / rejected",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgApproveProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryProject()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdRejectProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"reject project": {
			[]string{"5", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      5,
				ApplicantId:             1,
				CreditClassAbbreviation: "PCRD",
				Name:                    "Other New Project",
				Status:                  plasticcredit.ProjectStatus_REJECTED,
			},
		},
		"invalid admin": {
			[]string{"6", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"reject non-existing project": {
			[]string{"62", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project not found",
			nil,
		},
		"project already approved": {
			[]string{"1", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"project is approved / rejected",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgRejectProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryProject()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdSuspendProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKey)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKey)
	s.Require().NoError(err)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"suspend project": {
			[]string{"1", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      1,
				ApplicantId:             1,
				CreditClassAbbreviation: "EMP",
				Name:                    "Approved project",
				Status:                  plasticcredit.ProjectStatus_SUSPENDED,
			},
		},
		"invalid admin": {
			[]string{"3", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"suspending non-existing project": {
			[]string{"62", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project not found",
			nil,
		},
		"project already rejected": {
			[]string{"5", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			true,
			false,
			"project not suspendable",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgSuspendProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))
			if tc.expectedErrOnSend {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else if tc.expectedErrOnExec {
				var txResponse sdk.TxResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &txResponse))
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			} else {
				cmd = cli.CmdQueryProject()
				out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var resp plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				s.Require().Equal(tc.expectedState, &resp.Project)
			}
		})
	}
}
