package v2

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	clientkeeper "github.com/cosmos/ibc-go/v7/modules/core/02-client/keeper"
	"github.com/cosmos/ibc-go/v7/modules/core/exported"
)

const (
	UpgradeName = "v2"
)

func CreateV2UpgradeHandler(
	moduleManager module.Manager,
	configurator module.Configurator,
	clientKeeper clientkeeper.Keeper,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
		ctx.Logger().Info("Starting upgrade to v2...")

		addLocalhostIBCClient(ctx, clientKeeper)

		vm, err := moduleManager.RunMigrations(ctx, configurator, vm)
		if err != nil {
			return vm, err
		}

		ctx.Logger().Info("Upgrade to v2 complete")
		return vm, err
	}
}

// addLocalhostIBCClient explicitly updates the IBC 02-client params, adding the localhost client type
// Read more here: https://github.com/cosmos/ibc-go/blob/v7.2.0/docs/migrations/v7-to-v7_1.md
func addLocalhostIBCClient(ctx sdk.Context, k clientkeeper.Keeper) {
	ctx.Logger().Info("Adding localhost IBC client for ibc-go v7.0 to v7.1 migration...")
	params := k.GetParams(ctx)
	params.AllowedClients = append(params.AllowedClients, exported.Localhost)
	k.SetParams(ctx, params)
}
