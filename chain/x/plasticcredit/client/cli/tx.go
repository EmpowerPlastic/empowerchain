package cli

import (
	"encoding/json"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        plasticcredit.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", plasticcredit.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(MsgCreateApplicantCmd())
	cmd.AddCommand(MsgIssueCreditsCmd())
	cmd.AddCommand(MsgTransferCreditsCmd())
	cmd.AddCommand(MsgRetireCreditsCmd())

	return cmd
}

func MsgIssueCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-credits [project-id] [denom-suffix] [amount] [credit-data...]",
		Short: "Issue credits.",
		Long:  `Issue credits.`,
		Args:  cobra.MinimumNArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress()
			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			denomSuffix := args[1]
			creditAmount := new(plasticcredit.CreditBalance)
			err = json.Unmarshal([]byte(args[2]), creditAmount)
			if err != nil {
				return err
			}
			var creditData []*plasticcredit.ProvenData
			for i := 3; i < len(args); i++ {
				data := new(plasticcredit.ProvenData)
				err = json.Unmarshal([]byte(args[i]), data)
				if err != nil {
					return err
				}
				creditData = append(creditData, data)
			}

			msg := plasticcredit.MsgIssueCredits{
				Creator:      creator.String(),
				ProjectId:    projectID,
				DenomSuffix:  denomSuffix,
				CreditAmount: creditAmount,
				CreditData:   creditData,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgTransferCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer [receiver] [denom] [amount] [retire?]",
		Short: "Transfer credits",
		Long:  `Transfer credits from one address to another. Retire is optional and is set to false by default`,
		Args:  cobra.MinimumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			from := clientCtx.GetFromAddress()
			to := args[0]
			denom := args[1]
			amount, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			retire, err := cast.ToBoolE(args[3])
			if err != nil {
				retire = false
			}

			msg := plasticcredit.MsgTransferCredits{
				From:   from.String(),
				To:     to,
				Denom:  denom,
				Amount: amount,
				Retire: retire,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgRetireCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "retire [denom] [amount]",
		Short: "Retire credits",
		Long:  `Retire credits`,
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			owner := clientCtx.GetFromAddress()
			denom := args[0]
			amount, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			msg := plasticcredit.MsgRetireCredits{
				Owner:  owner.String(),
				Denom:  denom,
				Amount: amount,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgCreateApplicantCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-applicant [admin_key_or_address] [name] [description]",
		Short: "Create new applicant.",
		Long: `Create new applicant.
Note, the '--from' flag is ignored as it is implied from [admin_key_or_address].
`,
		Args: cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			if err := cmd.Flags().Set(flags.FlagFrom, args[0]); err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			admin := clientCtx.GetFromAddress()
			name := args[1]
			var desc string
			if len(args) > 2 {
				desc = args[2]
			}

			msg := plasticcredit.MsgCreateApplicant{
				Name:        name,
				Description: desc,
				Admin:       admin.String(),
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
