package simulation

import (
	"fmt"
	"math/rand"

	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

const (
	ProofsKey = "proofs"
)

// RandomizedGenState generates a random GenesisState for proofofexistence
func RandomizedGenState(simState *module.SimulationState) {
	var proofs []proofofexistence.Proof
	simState.AppParams.GetOrGenerate(
		simState.Cdc, ProofsKey, &proofs, simState.Rand,
		func(r *rand.Rand) { proofs = generateProofs(r, simState.Accounts) },
	)

	proofofexistenceGenesis := proofofexistence.GenesisState{
		ProofList: proofs,
	}

	fmt.Println("Number of proofs: ", len(proofs))

	if err := proofofexistenceGenesis.Validate(); err != nil {
		panic(err)
	}

	simState.GenState[proofofexistence.ModuleName] = simState.Cdc.MustMarshalJSON(&proofofexistenceGenesis)
}

func generateProofs(r *rand.Rand, creators []simtypes.Account) []proofofexistence.Proof {
	var proofs []proofofexistence.Proof

	numProofs := simtypes.RandIntBetween(r, 1, 100_000)
	for i := 0; i < numProofs; i++ {
		creator, _ := simtypes.RandomAcc(r, creators)
		proofs = append(proofs, proofofexistence.Proof{
			Hash: createRandom32ByteString(r),
			Metadata: &proofofexistence.ProofMetadata{
				Timestamp: createRandomTime(r),
				Creator:   creator.Address.String(),
			},
		})
	}

	return proofs
}
