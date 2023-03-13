package e2e_test

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"

	"github.com/EmpowerPlastic/empowerchain/tests/e2e"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
)

func (s *E2ETestSuite) TestCmdCreateProject() {
	val := s.Network.Validators[0]
	applicantKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	notApplicantKey, _ := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	testCases := map[string]struct {
		applicantID       string
		creditClass       string
		projectName       string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"create project": {
			applicantID:       "1",
			creditClass:       "ETEST",
			projectName:       "My new Project",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      11,
				ApplicantId:             1,
				CreditClassAbbreviation: "ETEST",
				Name:                    "My new Project",
				Status:                  plasticcredit.ProjectStatus_NEW,
			},
		},
		"admin does not have authorization for applicant": {
			applicantID:       "1",
			creditClass:       "ETEST",
			projectName:       "My new Project",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notApplicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"empty name": {
			applicantID:       "1",
			creditClass:       "ETEST",
			projectName:       "",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "project name cannot be empty",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgCreateProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(
				[]string{
					tc.applicantID,
					tc.creditClass,
					tc.projectName,
					tc.fromFlagValue,
				}, s.CommonFlags...),
			)

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

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
	val := s.Network.Validators[0]

	applicantKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	notApplicantKey, _ := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)

	testCases := map[string]struct {
		projectID         string
		updateName        string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"update project": {
			projectID:         "9",
			updateName:        "My Updated Project",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      9,
				ApplicantId:             1,
				CreditClassAbbreviation: "PTEST",
				Name:                    "My Updated Project",
				Status:                  plasticcredit.ProjectStatus_NEW,
			},
		},
		"update non-existing project": {
			projectID:         "65",
			updateName:        "My Updated Project",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not found",
			expectedState:     nil,
		},
		"invalid applicant": {
			projectID:         "1",
			updateName:        "My Updated Project",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notApplicantKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"empty name": {
			projectID:         "1",
			updateName:        "",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, applicantKey.Name),
			expectedErrOnSend: true,
			expectedErrOnExec: false,
			expectedErrMsg:    "project name cannot be empty",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgUpdateProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(
				[]string{tc.projectID, tc.updateName, tc.fromFlagValue},
				s.CommonFlags...),
			)

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.projectID})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdApproveProject() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	testCases := map[string]struct {
		projectID         string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"approve new project": {
			projectID:         "3",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      3,
				ApplicantId:             1,
				CreditClassAbbreviation: "ETEST",
				Name:                    "New project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
		"approve suspended project": {
			projectID:         "2",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      2,
				ApplicantId:             1,
				CreditClassAbbreviation: "PTEST",
				Name:                    "Suspended project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
		"approve non-existing project": {
			projectID:         "62",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not found",
			expectedState:     nil,
		},
		"invalid admin": {
			projectID:         "9",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"project already approved": {
			projectID:         "1",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project is approved / rejected",
			expectedState:     nil,
		},
		"approving rejected project": {
			projectID:         "4",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "project is approved / rejected",
			expectedState: &plasticcredit.Project{
				Id:                      4,
				ApplicantId:             1,
				CreditClassAbbreviation: "PTEST",
				Name:                    "Rejected project",
				Status:                  plasticcredit.ProjectStatus_APPROVED,
			},
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgApproveProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{tc.projectID, tc.fromFlagValue}, s.CommonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.projectID})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdRejectProject() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	testCases := map[string]struct {
		projectID         string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"reject project": {
			projectID:         "5",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      5,
				ApplicantId:             1,
				CreditClassAbbreviation: "PTEST",
				Name:                    "Other New Project",
				Status:                  plasticcredit.ProjectStatus_REJECTED,
			},
		},
		"invalid admin": {
			projectID:         "6",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"reject non-existing project": {
			projectID:         "62",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not found",
			expectedState:     nil,
		},
		"project already approved": {
			projectID:         "1",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project is approved / rejected",
			expectedState:     nil,
		},
		"project already rejected": {
			projectID:         "7",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project is approved / rejected",
			expectedState:     nil,
		},
		"project already suspended": {
			projectID:         "8",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project is approved / rejected",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgRejectProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{tc.projectID, tc.fromFlagValue}, s.CommonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				s.Require().NoError(s.Network.WaitForNextBlock())
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.projectID})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}

func (s *E2ETestSuite) TestCmdSuspendProject() {
	val := s.Network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key(e2e.IssuerKeyName)
	s.Require().NoError(err)
	notAdminKey, err := val.ClientCtx.Keyring.Key(e2e.ApplicantKeyName)
	s.Require().NoError(err)
	testCases := map[string]struct {
		projectID         string
		fromFlagValue     string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     *plasticcredit.Project
	}{
		"suspend approved project": {
			projectID:         "11",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: false,
			expectedErrMsg:    "",
			expectedState: &plasticcredit.Project{
				Id:                      11,
				ApplicantId:             1,
				CreditClassAbbreviation: "ETEST",
				Name:                    "Approved project to suspend",
				Status:                  plasticcredit.ProjectStatus_SUSPENDED,
			},
		},
		"invalid admin": {
			projectID:         "10",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, notAdminKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "unauthorized",
			expectedState:     nil,
		},
		"suspending non-existing project": {
			projectID:         "62",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not found",
			expectedState:     nil,
		},
		"project already rejected": {
			projectID:         "5",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not suspendable",
			expectedState:     nil,
		},
		"project already suspended": {
			projectID:         "8",
			fromFlagValue:     fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name),
			expectedErrOnSend: false,
			expectedErrOnExec: true,
			expectedErrMsg:    "project not suspendable",
			expectedState:     nil,
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			cmd := cli.MsgSuspendProjectCmd()
			out, _ := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append([]string{tc.projectID, tc.fromFlagValue}, s.CommonFlags...))

			switch {
			case tc.expectedErrOnSend:
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			case tc.expectedErrOnExec:
				txResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().NotEqual(uint32(0), txResponse.Code)
				s.Require().Contains(txResponse.RawLog, tc.expectedErrMsg)
			default:
				cliResponse, err := s.GetCliResponse(val.ClientCtx, out.Bytes())
				s.Require().NoError(err)
				s.Require().Equal(uint32(0), cliResponse.Code, cliResponse.RawLog)

				queryCmd := cli.CmdQueryProject()
				queryOutput, err := clitestutil.ExecTestCLICmd(val.ClientCtx, queryCmd, []string{tc.projectID})
				s.Require().NoError(err)
				var queryResponse plasticcredit.QueryProjectResponse
				s.Require().NoError(val.ClientCtx.Codec.UnmarshalJSON(queryOutput.Bytes(), &queryResponse))
				s.Require().Equal(tc.expectedState, &queryResponse.Project)
			}
		})
	}
}
