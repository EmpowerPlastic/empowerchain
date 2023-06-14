package cli

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group plasticcredit queries under a subcommand
	cmd := &cobra.Command{
		Use:                        plasticcredit.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", plasticcredit.ModuleName),
		Aliases:                    []string{"pc"},
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdQueryIssuer())
	cmd.AddCommand(CmdQueryIssuers())
	cmd.AddCommand(CmdQueryApplicant())
	cmd.AddCommand(CmdQueryCreditType())
	cmd.AddCommand(CmdQueryCreditTypes())
	cmd.AddCommand(CmdQueryCreditCollection())
	cmd.AddCommand(CmdQueryCreditBalance())
	cmd.AddCommand(CmdQueryProject())
	return cmd
}

func CmdQueryParams() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "params",
		Short: "shows the parameters of the module",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			res, err := queryClient.Params(context.Background(), &plasticcredit.QueryParamsRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryIssuer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issuer [issuer-id]",
		Short: "query for an issuer by its [issuer-id]",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			issuerID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			res, err := queryClient.Issuer(context.Background(), &plasticcredit.QueryIssuerRequest{
				IssuerId: issuerID,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryIssuers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issuers",
		Short: "query all issuers",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := queryClient.Issuers(context.Background(), &plasticcredit.QueryIssuersRequest{
				Pagination: *pageReq,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryApplicant() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "applicant [applicant-id]",
		Short: "query for an applicant by its [applicant-id]",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			applicantID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			res, err := queryClient.Applicant(context.Background(), &plasticcredit.QueryApplicantRequest{
				ApplicantId: applicantID,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCreditType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "credit-type [abbreviation]",
		Short: "query for a credit type by its [abbreviation]",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			abbreviation := args[0]

			res, err := queryClient.CreditType(context.Background(), &plasticcredit.QueryCreditTypeRequest{
				CreditTypeAbbreviation: abbreviation,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCreditTypes() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "credit-types",
		Short: "query all credit types",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := queryClient.CreditTypes(context.Background(), &plasticcredit.QueryCreditTypesRequest{
				Pagination: *pageReq,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCreditCollection() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "credit-collection [denom]",
		Short: "Query credit collection by it's denom",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			denom := args[0]

			res, err := queryClient.CreditCollection(context.Background(), &plasticcredit.QueryCreditCollectionRequest{
				Denom: denom,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCreditBalance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "credit-balance [address] [denom]",
		Short: "Query credit balance by address and denom",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			owner := args[0]
			denom := args[1]

			res, err := queryClient.CreditBalance(context.Background(), &plasticcredit.QueryCreditBalanceRequest{
				Owner: owner,
				Denom: denom,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryProject() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "project [project-id]",
		Short: "Query project by project-id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			projectID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			res, err := queryClient.Project(context.Background(), &plasticcredit.QueryProjectRequest{
				ProjectId: projectID,
			})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
