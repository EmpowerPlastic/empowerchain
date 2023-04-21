package cli

import (
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        certificates.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", certificates.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(MsgCreateCertificateCmd())
	return cmd
}

func MsgCreateCertificateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-certificate [certificate-type] [certificate-owner] [certificate-issuer] [map of certificate attributes]",
		Short: "create a new certificate",
		Args:  cobra.MinimumNArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			certificateType := getKeysByValue(certificates.CertificateType_name, args[0])
			certificateOwner := args[1]
			certificateIssuer := args[2]
			data := map[string]string{}
			err := json.Unmarshal([]byte(args[3]), &data)
			if err != nil {
				return err
			}

			msg := certificates.MsgCreateCertificate{
				Type:   certificates.CertificateType(certificateType),
				Owner:  certificateOwner,
				Issuer: certificateIssuer,
				Data:   data,
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}
	flags.AddTxFlagsToCmd(cmd)
	return cmd
}

func getKeysByValue(m map[int32]string, value string) int32 {
	for k, v := range m {
		if value == v {
			return k
		}
	}
	return 0
}
