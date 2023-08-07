package cli

import (
	"fmt"
	"time"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/authz"
	authzcli "github.com/cosmos/cosmos-sdk/x/authz/client/cli"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

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
	cmd.AddCommand(MsgCreateCreditTypeCmd())
	cmd.AddCommand(MsgUpdateCreditTypeCmd())
	cmd.AddCommand(MsgCreateProjectCmd())
	cmd.AddCommand(MsgUpdateProjectCmd())
	cmd.AddCommand(MsgApproveProjectCmd())
	cmd.AddCommand(MsgRejectProjectCmd())
	cmd.AddCommand(MsgSuspendProjectCmd())
	cmd.AddCommand(MsgIssueCreditsCmd())
	cmd.AddCommand(MsgTransferCreditsCmd())
	cmd.AddCommand(MsgRetireCreditsCmd())
	cmd.AddCommand(MsgUpdateIssuerCmd())
	cmd.AddCommand(MsgUpdateApplicantCmd())
	cmd.AddCommand(MsgGrantTransferAuthorizationCmd())

	return cmd
}

func MsgCreateApplicantCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-applicant [name] [description]",
		Short: "Create new applicant.",
		Long: `Create new applicant.
`,
		Args: cobra.MinimumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			admin := clientCtx.GetFromAddress()
			name := args[0]
			var desc string
			if len(args) > 1 {
				desc = args[1]
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
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			updater := clientCtx.GetFromAddress()

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
				Updater:     updater.String(),
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
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			updater := clientCtx.GetFromAddress()

			admin := args[0]
			issuerID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			name := args[2]
			desc := args[3]

			msg := plasticcredit.MsgUpdateIssuer{
				Updater:     updater.String(),
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

func MsgCreateCreditTypeCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-credit-type [abbreviation] [issuer-id] [name]",
		Short: "Create a new credit type.",
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

			msg := plasticcredit.MsgCreateCreditType{
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

func MsgUpdateCreditTypeCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-credit-type [abbreviation] [name]",
		Short: "Update an existing credit type name.",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			updater := clientCtx.GetFromAddress()
			abbreviation := args[0]
			if err != nil {
				return err
			}
			name := args[1]

			msg := plasticcredit.MsgUpdateCreditType{
				Updater:      updater.String(),
				Abbreviation: abbreviation,
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
		Use:   "create-project [applicant-id] [credit-type-abbreviation] [name]",
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
			creditTypeAbbreviation := args[1]
			name := args[2]

			msg := plasticcredit.MsgCreateProject{
				Creator:                creator.String(),
				ApplicantId:            applicantID,
				CreditTypeAbbreviation: creditTypeAbbreviation,
				Name:                   name,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgUpdateProjectCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-project [project-id] [name]",
		Short: "Update project",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			updater := clientCtx.GetFromAddress()
			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			name := args[1]

			msg := plasticcredit.MsgUpdateProject{
				Updater:   updater.String(),
				ProjectId: projectID,
				Name:      name,
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
		Short: "Approve a project for the credit-type they are associated with.",
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

func MsgRejectProjectCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "reject-project [project-id]",
		Short: "Reject a project for the credit-type they are associated with.",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			rejector := clientCtx.GetFromAddress()
			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			msg := plasticcredit.MsgRejectProject{
				Rejector:  rejector.String(),
				ProjectId: projectID,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgSuspendProjectCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "suspend-project [project-id]",
		Short: "Suspend an approved project.",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			updater := clientCtx.GetFromAddress()
			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			msg := plasticcredit.MsgSuspendProject{
				Updater:   updater.String(),
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
		Use:   "issue-credits [project-id] [serial-number] [amount] [metadata_uri_1, metadata_uri_2, ...]",
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

			msg := plasticcredit.MsgIssueCredits{
				Creator:      creator.String(),
				ProjectId:    projectID,
				SerialNumber: serialNumber,
				CreditAmount: creditAmount,
				MetadataUris: args[3:],
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgTransferCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer [sender] [receiver] [denom] [amount] [retire?] [retiring_entity_name?] [retiring_entity_additional_data?]",
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
			retiringEntityName := ""
			if len(args) > 5 && args[5] != "" {
				retiringEntityName = args[5]
			}
			retiringEntitiyAdditionalData := ""
			if len(args) > 6 && args[6] != "" {
				retiringEntitiyAdditionalData = args[6]
			}
			msg := plasticcredit.MsgTransferCredits{
				From:                         from.String(),
				To:                           to,
				Denom:                        denom,
				Amount:                       amount,
				Retire:                       retire,
				RetiringEntityName:           retiringEntityName,
				RetiringEntityAdditionalData: retiringEntitiyAdditionalData,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgRetireCreditsCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "retire [denom] [amount] [retiring_entity_name] [retiring_entity_additional_data?]",
		Short: "Retire credits",
		Args:  cobra.ExactArgs(4),
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
			retiringEntitiyAdditionalData := ""
			if len(args) > 3 && args[3] != "" {
				retiringEntitiyAdditionalData = args[3]
			}
			msg := plasticcredit.MsgRetireCredits{
				Owner:                        owner.String(),
				Denom:                        denom,
				Amount:                       amount,
				RetiringEntityName:           args[2],
				RetiringEntityAdditionalData: retiringEntitiyAdditionalData,
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func MsgGrantTransferAuthorizationCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "grant-transfer-authz [grantee] [denom] [max_credits] --from [granter] ",
		Short: "Grant transfer authorization",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			granter := clientCtx.GetFromAddress()
			grantee, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}
			denom := args[1]
			maxCredits, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			authorization := &plasticcredit.TransferAuthorization{
				Denom:      denom,
				MaxCredits: maxCredits,
			}

			var expire *time.Time
			expiration, err := cmd.Flags().GetInt64(authzcli.FlagExpiration)
			if err != nil {
				return err
			}
			if expiration != 0 {
				e := time.Unix(expiration, 0)
				expire = &e
			}

			msg, err := authz.NewMsgGrant(granter, grantee, authorization, expire)
			if err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.Flags().Int64(authzcli.FlagExpiration, 0, "Expire time as Unix timestamp. Set zero (0) for no expiry. Default is 0.")

	return cmd
}
