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
	cmd.AddCommand(MsgCreateCreditClassCmd())
	cmd.AddCommand(MsgIssueCreditsCmd())
	cmd.AddCommand(MsgTransferCreditsCmd())
	cmd.AddCommand(MsgRetireCreditsCmd())

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

func MsgCreateCreditClassCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-credit-class [abbreviation] [issuer-id] [name]",
		Short: "Create a new credit class.",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress()
			abbreviation := args[0]
			issuerID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			name := args[2]

			msg := plasticcredit.MsgCreateCreditClass{
				Creator:      creator.String(),
				Abbreviation: abbreviation,
				IssuerId:     issuerID,
				Name:         name,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgIssueCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-credits [project-id] [serial-number] [amount] [credit-data...]",
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
			serialNumber := args[1]
			creditAmount, err := cast.ToUint64E(args[2])
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
				SerialNumber: serialNumber,
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
		Use:   "transfer [sender] [receiver] [denom] [amount] [retire?]",
		Short: "Transfer credits",
		Long:  `Transfer credits from one address to another. Retire is optional and is set to false by default`,
		Args:  cobra.MinimumNArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			from := args[0]
			to := args[1]
			denom := args[2]
			amount, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			retire, err := cast.ToBoolE(args[4])
			if err != nil {
				retire = false
			}

			msg := plasticcredit.MsgTransferCredits{
				From:   from,
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
