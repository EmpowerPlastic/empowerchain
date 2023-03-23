package simulation

import (
	"fmt"
	"math/rand"

	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

const (
	IssuersKey = "issuers"
)

// RandomizedGenState generates a random GenesisState for plasticcredit
func RandomizedGenState(simState *module.SimulationState) {

	var issuers []plasticcredit.Issuer
	simState.AppParams.GetOrGenerate(
		simState.Cdc, IssuersKey, &issuers, simState.Rand,
		func(r *rand.Rand) { issuers = generateIssuers(r, simState.Accounts) },
	)

	plasticcreditGenesis := plasticcredit.GenesisState{
		Issuers: issuers,
	}

	fmt.Println("Number of issuers: ", len(issuers))

	if err := plasticcreditGenesis.Validate(); err != nil {
		panic(err)
	}

	simState.GenState[plasticcredit.ModuleName] = simState.Cdc.MustMarshalJSON(&plasticcreditGenesis)
}

func generateIssuers(r *rand.Rand, accounts []simtypes.Account) []plasticcredit.Issuer {
	var issuers []plasticcredit.Issuer

	numIssuers := simtypes.RandIntBetween(r, 1, Min(20, len(accounts)))
	for i := 0; i < numIssuers; i++ {
		acc, _ := simtypes.RandomAcc(r, accounts)
		issuers = append(issuers, plasticcredit.Issuer{
			Id:          uint64(i + 1),
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       acc.Address.String(),
		})
	}

	return issuers
}

func Min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func getUnusedAccount(r *rand.Rand, accounts []simtypes.Account, usedAccounts []simtypes.Account) simtypes.Account {
	for {
		acc, _ := simtypes.RandomAcc(r, accounts)
		_, found := simtypes.FindAccount(usedAccounts, acc.Address)
		if !found {
			return acc
		}
	}
}
