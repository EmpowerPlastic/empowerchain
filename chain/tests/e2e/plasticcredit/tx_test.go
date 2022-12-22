package e2e_test

import (
	"fmt"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gogoproto/proto"
)

func (s *E2ETestSuite) TestCmdUpdateIssuer() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key("issuer")
	s.Require().NoError(err)
	newAdminKey, err := val.ClientCtx.Keyring.Key("issuerCreator")
	s.Require().NoError(err)
	newAdmin, err := newAdminKey.GetAddress()
	s.Require().NoError(err)

	notIssuerKey, err := val.ClientCtx.Keyring.Key("applicant")
	s.Require().NoError(err)

	testCases := []struct {
		name              string
		args              []string
		expectedErrOnSend bool
		expectedErrOnExec bool
		expectedErrMsg    string
		expectedState     proto.Message
	}{
		{
			"update name, description and admin",
			[]string{newAdmin.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "We fight for a clean planet",
				Admin:       newAdmin.String(),
			},
		},
		{
			"update non-existing issuer",
			[]string{newAdmin.String(), "2", "Plastic Nemesis Ltd", "How do we start?", fmt.Sprintf("--%s=%s", flags.FlagFrom, newAdminKey.Name)},
			false,
			true,
			"issuer not found",
			nil,
		},
		{
			"wrong singer",
			[]string{newAdmin.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, notIssuerKey.Name)},
			false,
			true,
			"",
			nil,
		},
		{
			"empty name",
			[]string{newAdmin.String(), "1", "", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, newAdminKey.Name)},
			true,
			false,
			"issuer name cannot be empty",
			nil,
		},
		{
			"empty description",
			[]string{newAdmin.String(), "1", "Empower Plastic", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, newAdminKey.Name)},
			false,
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "",
				Admin:       newAdmin.String(),
			},
		},
		{
			"invalid admin",
			[]string{"invalidaddress", "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, newAdminKey.Name)},
			true,
			false,
			"invalid admin address",
			nil,
		},
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
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
