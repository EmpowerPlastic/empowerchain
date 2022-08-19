package main

import (
	"github.com/empowerchain/empowerchain/app/params"
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/empowerchain/empowerchain/app"
	"github.com/ignite/cli/ignite/pkg/cosmoscmd"
)

func main() {
	params.SetAddressPrefixes()

	rootCmd, _ := cosmoscmd.NewRootCmd(
		app.Name,
		app.AccountAddressPrefix,
		app.DefaultNodeHome,
		app.Name,
		app.ModuleBasics,
		app.New,
		// this line is used by starport scaffolding # root/arguments
	)
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
