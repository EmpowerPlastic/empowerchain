package cli

import (
	"strconv"

	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateProject() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-project [credit-class-id] [collector-id] [name] [project-data]",
		Short: "Broadcast message createProject",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCreditClassId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCollectorId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argName := args[2]
			argProjectData := new(types.ProvenData)
			err = json.Unmarshal([]byte(args[3]), argProjectData)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateProject(
				clientCtx.GetFromAddress().String(),
				argCreditClassId,
				argCollectorId,
				argName,
				argProjectData,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
