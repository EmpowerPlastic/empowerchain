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

func CmdCreateCreditClass() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-credit-class [issuer-id] [denom] [credit-class-data]",
		Short: "Broadcast message createCreditClass",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIssuerId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argDenom := args[1]
			argCreditClassData := new(types.ProvenData)
			err = json.Unmarshal([]byte(args[2]), argCreditClassData)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreditClass(
				clientCtx.GetFromAddress().String(),
				argIssuerId,
				argDenom,
				argCreditClassData,
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
