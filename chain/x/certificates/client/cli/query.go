package cli

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group certificates queries under a subcommand
	cmd := &cobra.Command{
		Use:                        certificates.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", certificates.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdQueryCertificate())
	cmd.AddCommand(CmdQueryCertificates())
	cmd.AddCommand(CmdQueryCertificatesByOwner())

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

			queryClient := certificates.NewQueryClient(clientCtx)

			res, err := queryClient.Params(context.Background(), &certificates.QueryParamsRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCertificate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "certificate [owner-address] [certificate-id]",
		Short: "query for an certificate by its [owner-address] and [certificate-id]",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := certificates.NewQueryClient(clientCtx)

			certificateID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			res, err := queryClient.Certificate(
				context.Background(),
				&certificates.QueryCertificateRequest{
					Id:    certificateID,
					Owner: args[0],
				},
			)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdQueryCertificates() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "certificates",
		Short: "query for all certificates",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := certificates.NewQueryClient(clientCtx)
			res, err := queryClient.Certificates(
				context.Background(),
				&certificates.QueryCertificatesRequest{},
			)
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func CmdQueryCertificatesByOwner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "certificates-by-owner [owner-address]",
		Short: "query for all certificates of an owner by its [owner-address]",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := certificates.NewQueryClient(clientCtx)

			res, err := queryClient.AllCertificatesByUser(
				context.Background(),
				&certificates.QueryAllCertificatesByUserRequest{
					Owner: args[0],
				},
			)
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
