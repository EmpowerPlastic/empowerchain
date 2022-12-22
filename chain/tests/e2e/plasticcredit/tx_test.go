package e2e_test

import (
	"fmt"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/client/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/cosmos/gogoproto/proto"
)

func (s *E2ETestSuite) TestCmdUpdateIssuer() {
	val := s.network.Validators[0]
	issuerKey, err := val.ClientCtx.Keyring.Key("issuer")
	s.Require().NoError(err)
	// issuer, err := issuerKey.GetAddress()
	s.Require().NoError(err)
	newAdmin := sample.AccAddress()

	// notIssuerKey, _, err := val.ClientCtx.Keyring.NewMnemonic("notIssuer", keyring.English, sdk.FullFundraiserPath, keyring.DefaultBIP39Passphrase, hd.Secp256k1)
	s.Require().NoError(err)

	testCases := []struct {
		name           string
		args           []string
		expectedErr    bool
		expectedErrMsg string
		expectedState  proto.Message
	}{
		{
			"update name, description and admin",
			[]string{newAdmin, "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
			false,
			"",
			&plasticcredit.Issuer{
				Id:          1,
				Name:        "Empower Plastic",
				Description: "We fight for a clean planet",
				Admin:       newAdmin,
			},
		},
		// {
		// 	"update non-existing issuer",
		// 	[]string{issuer.String(), "2", "Plastic Nemesis Ltd", "How do we start?", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
		// 	true,
		// 	"issuer not found",
		// 	nil,
		// },
		// {
		// 	"wrong singer",
		// 	[]string{issuer.String(), "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, notIssuerKey.Name)},
		// 	true,
		// 	"",
		// 	nil,
		// },
		// {
		// 	"empty name",
		// 	[]string{issuer.String(), "1", "", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
		// 	true,
		// 	"name is empty",
		// 	nil,
		// },
		// {
		// 	"empty description",
		// 	[]string{issuer.String(), "1", "Empower Plastic", "", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
		// 	false,
		// 	"",
		// 	&plasticcredit.Issuer{
		// 		Id:          1,
		// 		Name:        "Empower Plastic",
		// 		Description: "",
		// 		Admin:       issuer.String(),
		// 	},
		// },
		// {
		// 	"invalid admin",
		// 	[]string{"invalidaddress", "1", "Empower Plastic", "We fight for a clean planet", fmt.Sprintf("--%s=%s", flags.FlagFrom, issuerKey.Name)},
		// 	true,
		// 	"admin is empty",
		// 	nil,
		// },
	}
	for _, tc := range testCases {
		s.Run(tc.name, func() {
			cmd := cli.MsgUpdateIssuerCmd()
			out, err := clitestutil.ExecTestCLICmd(val.ClientCtx, cmd, append(tc.args, s.commonFlags...))

			if tc.expectedErr {
				s.Require().Contains(out.String(), tc.expectedErrMsg)
			} else {
				s.Require().NoError(err)
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
