package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        plasticcredit.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", plasticcredit.ModuleName),
		Aliases:                    []string{"pc"},
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(MsgCreateApplicantCmd())
	cmd.AddCommand(MsgCreateCreditClassCmd())
	cmd.AddCommand(MsgCreateProjectCmd())
	cmd.AddCommand(MsgApproveProjectCmd())
	cmd.AddCommand(MsgIssueCreditsCmd())
	cmd.AddCommand(MsgTransferCreditsCmd())
	cmd.AddCommand(MsgRetireCreditsCmd())
	cmd.AddCommand(MsgUpdateIssuerCmd())
	cmd.AddCommand(MsgUpdateApplicantCmd())

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

func MsgUpdateApplicantCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-applicant [admin_key_or_address] [applicant ID] [name] [description]",
		Short: "Update existing applicant.",
		Long: `Update existing applicant.
'--from' flag is expected to provide the updater, as it could be different from admin.
`,
		Args: cobra.MinimumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			updater, err := cmd.Flags().GetString(flags.FlagFrom)
			if err != nil {
				return err
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			admin := args[0]
			applicantID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			name := args[2]
			var desc string
			if len(args) > 2 {
				desc = args[3]
			}

			msg := plasticcredit.MsgUpdateApplicant{
				ApplicantId: applicantID,
				Name:        name,
				Description: desc,
				Admin:       admin,
				Updater:     updater,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgUpdateIssuerCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-issuer [admin_key_or_address] [issuer-id] [name] [description] ",
		Short: "Update existing Issuer.",
		Long: `Update existing Issuer.
'--from' flag is expected to provide the updater, as it could be different from admin.
`,
		Args: cobra.MinimumNArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			updater, err := cmd.Flags().GetString(flags.FlagFrom)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			admin := args[0]
			issuerID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			name := args[2]
			desc := args[3]

			msg := plasticcredit.MsgUpdateIssuer{
				Updater:     updater,
				IssuerId:    issuerID,
				Name:        name,
				Description: desc,
				Admin:       admin,
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

func MsgCreateProjectCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-project [applicant-id] [credit-class-abbreviation] [name]",
		Short: "Create project",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			creator := clientCtx.GetFromAddress()
			applicantID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			creditClassAbbreviation := args[1]
			name := args[2]

			msg := plasticcredit.MsgCreateProject{
				Creator:                 creator.String(),
				ApplicantId:             applicantID,
				CreditClassAbbreviation: creditClassAbbreviation,
				Name:                    name,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgApproveProjectCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "approve-project [project-id]",
		Short: "Approve a project for the credit-class they are associated with.",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			approver := clientCtx.GetFromAddress()
			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			msg := plasticcredit.MsgApproveProject{
				Approver:  approver.String(),
				ProjectId: projectID,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgIssueCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-credits [project-id] [serial-number] [amount]",
		Short: "Issue credits.",
		Long:  `Issue credits.`,
		Args:  cobra.ExactArgs(3),
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

			msg := plasticcredit.MsgIssueCredits{
				Creator:      creator.String(),
				ProjectId:    projectID,
				SerialNumber: serialNumber,
				CreditAmount: creditAmount,
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
			if err := cmd.Flags().Set(flags.FlagFrom, args[0]); err != nil {
				return err
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			from := clientCtx.GetFromAddress()
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
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			owner := clientCtx.GetFromAddress()
			denom := args[0]
			amount, err := cast.ToUint64E(args[1])
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
