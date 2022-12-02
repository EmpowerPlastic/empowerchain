package cli

import (
	"context"
	"fmt"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client/flags"

	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group plasticcredit queries under a subcommand
	cmd := &cobra.Command{
		Use:                        plasticcredit.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", plasticcredit.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdQueryIssuer())
	cmd.AddCommand(CmdQueryIssuers())
	cmd.AddCommand(CmdQueryApplicant())
	cmd.AddCommand(CmdQueryCreditCollection())
	cmd.AddCommand(CmdQueryCreditBalance())

	return cmd
}

func CmdQueryParams() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "params",
		Short: "shows the parameters of the module",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

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
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			issuerID, err := strconv.ParseUint(args[0], 10, 64)
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
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := plasticcredit.NewQueryClient(clientCtx)
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			res, err := queryClient.Issuers(context.Background(), &plasticcredit.QueryIssuersRequest{
				Pagination: pageReq,
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
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := plasticcredit.NewQueryClient(clientCtx)

			applicantID, err := strconv.ParseUint(args[0], 10, 64)
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

func CmdQueryCreditCollection() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "credit-collection [denom]",
		Short: "Query credit collection by it's denom",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
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
			clientCtx := client.GetClientContextFromCmd(cmd)
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
