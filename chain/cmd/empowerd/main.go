package main

import (
	"os"

	"github.com/cosmos/cosmos-sdk/server"
	"github.com/empowerchain/empowerchain/app"
	"github.com/empowerchain/empowerchain/app/params"
	"github.com/empowerchain/empowerchain/cmd/empowerd/cmd"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	params.SetAddressPrefixes()
	params.RegisterDenoms()

	rootCmd, _ := cmd.NewRootCmd()

	if err := svrcmd.Execute(rootCmd, "", app.DefaultNodeHome); err != nil {
		switch e := err.(type) {
		case server.ErrorCode:
			os.Exit(e.Code)

		default:
			os.Exit(1)
		}
	}
}
