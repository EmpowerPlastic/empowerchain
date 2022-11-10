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

func CmdIssueCredits() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-credits [issuer-id] [recipient] [credit_batch_issuance]",
		Short: "Broadcast message issueCredits",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIssuerId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argRecipient := args[1]
			argCreditBatchIssuance := new(types.CreditBatchIssuance)
			err = json.Unmarshal([]byte(args[2]), argCreditBatchIssuance)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgIssueCredits(
				clientCtx.GetFromAddress().String(),
				argIssuerId,
				argRecipient,
				argCreditBatchIssuance,
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
