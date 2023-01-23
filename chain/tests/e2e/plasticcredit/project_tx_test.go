package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateProject() {
	val := s.network.Validators[0]
	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)
	notApplicantKey, _ := val.ClientCtx.Keyring.Key(issuerKeyName)
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
				Id:                      11,
				ApplicantId:             1,
				CreditClassAbbreviation: "EMP",
				Name:                    "My new Project",
				Status:                  plasticcredit.ProjectStatus_NEW,
			},
		},
		"admin does not have authorization for applicant": {
			[]string{"1", "EMP", "My new Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, notApplicantKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"empty name": {
			[]string{"1", "EMP", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			true,
			false,
			"project name cannot be empty",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				var createProjectResp plasticcredit.MsgCreateProjectResponse
				err = s.UnpackTxResponseData(val.ClientCtx, out.Bytes(), &createProjectResp)
				s.Require().NoError(err)
				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{fmt.Sprint(createProjectResp.ProjectId)})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState.Name, queryResponse.Project.Name)
				s.Require().Equal(tc.expectedState.ApplicantId, queryResponse.Project.ApplicantId)
				s.Require().Equal(tc.expectedState.Status, queryResponse.Project.Status)
				s.Require().Equal(tc.expectedState.CreditClassAbbreviation, queryResponse.Project.CreditClassAbbreviation)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdUpdateProject() {
	val := s.network.Validators[0]

	applicantKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)
	notApplicantKey, _ := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"update project": {
			[]string{"9", "My Updated Project", fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Project{
				Id:                      9,
				ApplicantId:             1,
				CreditClassAbbreviation: "PCRD",
				Name:                    "My Updated Project",
				Status:                  plasticcredit.ProjectStatus_NEW,
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

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdApproveProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"approve new project": {
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
			[]string{"9", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
			false,
			true,
			"unauthorized",
			nil,
		},
		"project already approved": {
			[]string{"1", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is approved / rejected",
			nil,
		},
		"approving rejected project": {
			[]string{"4", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"project is approved / rejected",
			&plasticcredit.Project{
				Id:                      4,
				ApplicantId:             1,
				CreditClassAbbreviation: "PCRD",
				Name:                    "Rejected project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgApproveProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdRejectProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
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
			false,
			true,
			"project is approved / rejected",
			nil,
		},
		"project already rejected": {
			[]string{"7", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is approved / rejected",
			nil,
		},
		"project already suspended": {
			[]string{"8", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project is approved / rejected",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgRejectProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdSuspendProject() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(issuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(applicantKeyName)
	s.Require().NoError(err)
	testCases := map[string]struct {
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"suspend approved project": {
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
			[]string{"10", fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name)},
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
			false,
			true,
			"project not suspendable",
			nil,
		},
		"project already suspended": {
			[]string{"8", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			true,
			"project not suspendable",
			nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgSuspendProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.getCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.args[0]})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}
