package simulation

import (
	"fmt"
	"math/rand"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

const (
	IssuerCreatorKey     = "issuer-creator"
	IssuerCreatorFeeKey  = "issuer-creator-fee"
	IssuersKey           = "issuers"
	ApplicantsKey        = "applicants"
	CreditClassesKey     = "credit-classes"
	ProjectsKey          = "projects"
	CreditCollectionsKey = "credit-collections"
	CreditBalancesKey    = "credit-balances"
)

// RandomizedGenState generates a random GenesisState for plasticcredit
func RandomizedGenState(simState *module.SimulationState) {
	var issuerCreator string
	simState.AppParams.GetOrGenerate(
		simState.Cdc, IssuerCreatorKey, &issuerCreator, simState.Rand,
		func(r *rand.Rand) { issuerCreator = generateIssuerCreator(r, simState.Accounts) },
	)

	var issuerCreatorFee int
	simState.AppParams.GetOrGenerate(
		simState.Cdc, IssuerCreatorFeeKey, &issuerCreatorFee, simState.Rand,
		func(r *rand.Rand) { issuerCreatorFee = simtypes.RandIntBetween(r, 1, 10000) },
	)

	params := plasticcredit.NewParams(issuerCreator, sdk.NewCoin(simState.BondDenom, math.NewInt(int64(issuerCreatorFee))))

	var issuers []plasticcredit.Issuer
	simState.AppParams.GetOrGenerate(
		simState.Cdc, IssuersKey, &issuers, simState.Rand,
		func(r *rand.Rand) { issuers = generateIssuers(r, simState.Accounts) },
	)

	var applicants []plasticcredit.Applicant
	simState.AppParams.GetOrGenerate(
		simState.Cdc, ApplicantsKey, &applicants, simState.Rand,
		func(r *rand.Rand) { applicants = generateApplicants(r, simState.Accounts) },
	)

	var creditClasses []plasticcredit.CreditClass
	simState.AppParams.GetOrGenerate(
		simState.Cdc, CreditClassesKey, &creditClasses, simState.Rand,
		func(r *rand.Rand) { creditClasses = generateCreditClasses(r, issuers) },
	)

	var projects []plasticcredit.Project
	simState.AppParams.GetOrGenerate(
		simState.Cdc, ProjectsKey, &projects, simState.Rand,
		func(r *rand.Rand) { projects = generateProjects(r, applicants, creditClasses) },
	)

	var creditCollections []plasticcredit.CreditCollection
	simState.AppParams.GetOrGenerate(
		simState.Cdc, CreditCollectionsKey, &creditCollections, simState.Rand,
		func(r *rand.Rand) { creditCollections = generateCreditCollections(r, projects) },
	)

	var creditBalances []plasticcredit.CreditBalance
	simState.AppParams.GetOrGenerate(
		simState.Cdc, CreditBalancesKey, &creditBalances, simState.Rand,
		func(r *rand.Rand) { creditBalances = generateCreditBalances(r, simState.Accounts, creditCollections) },
	)

	plasticcreditGenesis := plasticcredit.GenesisState{
		Params: params,
		IdCounters: plasticcredit.IDCounters{
			NextIssuerId:    uint64(len(issuers) + 1),
			NextApplicantId: uint64(len(applicants) + 1),
			NextProjectId:   uint64(len(projects) + 1),
		},
		Issuers:           issuers,
		Applicants:        applicants,
		CreditClasses:     creditClasses,
		Projects:          projects,
		CreditCollections: creditCollections,
		CreditBalances:    creditBalances,
	}

	fmt.Println("Number of issuers: ", len(issuers))
	fmt.Println("Number of applicants: ", len(applicants))
	fmt.Println("Number of credit classes: ", len(creditClasses))
	fmt.Println("Number of projects: ", len(projects))
	fmt.Println("Number of credit collections: ", len(creditCollections))
	fmt.Println("Number of credit balances: ", len(creditBalances))

	if err := plasticcreditGenesis.Validate(); err != nil {
		panic(err)
	}

	simState.GenState[plasticcredit.ModuleName] = simState.Cdc.MustMarshalJSON(&plasticcreditGenesis)
}

func generateIssuerCreator(r *rand.Rand, accounts []simtypes.Account) string {
	isGovernanceControlled := simtypes.RandIntBetween(r, 1, 10) == 1 // 10% chance
	if isGovernanceControlled {
		return ""
	}

	acc, _ := simtypes.RandomAcc(r, accounts)
	return acc.Address.String()
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

func generateApplicants(r *rand.Rand, accounts []simtypes.Account) []plasticcredit.Applicant {
	var applicants []plasticcredit.Applicant
	numApplicants := simtypes.RandIntBetween(r, 1, Min(500, len(accounts)))
	for i := 0; i < numApplicants; i++ {
		acc, _ := simtypes.RandomAcc(r, accounts)
		applicants = append(applicants, plasticcredit.Applicant{
			Id:          uint64(i + 1),
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       acc.Address.String(),
		})
	}

	return applicants
}

func generateCreditClasses(r *rand.Rand, issuers []plasticcredit.Issuer) []plasticcredit.CreditClass {
	var creditClasses []plasticcredit.CreditClass
	usedAbbreviations := make(map[string]bool)

	for i := 0; i < len(issuers); i++ {
		numberOfCreditClasses := simtypes.RandIntBetween(r, 1, 3)

		for j := 0; j < numberOfCreditClasses; j++ {
			var abbreviation string
			for {
				abbreviation = createRandomAbbreviation(r)
				if _, ok := usedAbbreviations[abbreviation]; !ok {
					usedAbbreviations[abbreviation] = true
					break
				}
			}

			creditClasses = append(creditClasses, plasticcredit.CreditClass{
				Abbreviation: abbreviation,
				IssuerId:     issuers[i].Id,
				Name:         createRandomName(r),
			})
		}
	}

	return creditClasses
}

func generateProjects(r *rand.Rand, applicants []plasticcredit.Applicant, creditClasses []plasticcredit.CreditClass) []plasticcredit.Project {
	var projects []plasticcredit.Project

	if len(applicants) == 0 || len(creditClasses) == 0 {
		return projects
	}

	nextProjectID := 1
	for i := 0; i < len(applicants); i++ {
		numberOfProjectsForApplicant := simtypes.RandIntBetween(r, 1, 3)

		for j := 0; j < numberOfProjectsForApplicant; j++ {
			creditClass := creditClasses[simtypes.RandIntBetween(r, 0, len(creditClasses))]

			projects = append(projects, plasticcredit.Project{
				Id:                      uint64(nextProjectID),
				ApplicantId:             applicants[i].Id,
				CreditClassAbbreviation: creditClass.Abbreviation,
				Name:                    createRandomName(r),
				Status:                  plasticcredit.ProjectStatus(simtypes.RandIntBetween(r, 0, 3)),
			})

			nextProjectID++
		}
	}

	return projects
}

func generateCreditCollections(r *rand.Rand, projects []plasticcredit.Project) []plasticcredit.CreditCollection {
	var creditCollections []plasticcredit.CreditCollection
	usedDenom := make(map[string]bool)

	for i := 0; i < len(projects); i++ {
		numberOfCollectionsForProject := simtypes.RandIntBetween(r, 0, 5)
		for j := 0; j < numberOfCollectionsForProject; j++ {

			var denom string
			for {
				serialNumber := createRandomSerialNumber(r)
				denom, _ = keeper.CreateCreditDenom(projects[i].CreditClassAbbreviation, serialNumber)
				if _, ok := usedDenom[denom]; !ok {
					usedDenom[denom] = true
					break
				}
			}

			active := uint64(simtypes.RandIntBetween(r, 1, 1000000))
			retired := uint64(simtypes.RandIntBetween(r, 1, 1000000))
			// 10% chance for all to be active
			if simtypes.RandIntBetween(r, 1, 10) == 1 {
				retired = 0
			}

			// 10% chance for all to be retired (if not all active)
			if retired != 0 && simtypes.RandIntBetween(r, 1, 10) == 1 {
				active = 0
			}

			creditCollections = append(creditCollections, plasticcredit.CreditCollection{
				Denom:     denom,
				ProjectId: projects[i].Id,
				TotalAmount: plasticcredit.CreditAmount{
					Active:  active,
					Retired: retired,
				},
			})
		}
	}

	return creditCollections
}

func generateCreditBalances(r *rand.Rand, accounts []simtypes.Account, creditCollections []plasticcredit.CreditCollection) []plasticcredit.CreditBalance {
	var creditBalances []plasticcredit.CreditBalance

	for _, creditCollection := range creditCollections {
		activeLeft := creditCollection.TotalAmount.Active
		retiredLeft := creditCollection.TotalAmount.Retired
		numberOfAccounts := simtypes.RandIntBetween(r, 1, Min(500, len(accounts)))
		// 10% chance for all to be on one account
		if simtypes.RandIntBetween(r, 1, 10) == 1 {
			numberOfAccounts = 1
		}

		var usedAccounts []simtypes.Account
		for i := 0; i < numberOfAccounts; i++ {
			acc := getUnusedAccount(r, accounts, usedAccounts)
			usedAccounts = append(usedAccounts, acc)
			var active, retired uint64
			// On the last account, give the rest of the credits
			if i == numberOfAccounts-1 {
				active = activeLeft
				retired = retiredLeft
			} else {
				active = uint64(safeRandIntBetween(r, 0, int(activeLeft)))
				retired = uint64(safeRandIntBetween(r, 0, int(retiredLeft)))
			}

			creditBalances = append(creditBalances, plasticcredit.CreditBalance{
				Owner: acc.Address.String(),
				Denom: creditCollection.Denom,
				Balance: plasticcredit.CreditAmount{
					Active:  active,
					Retired: retired,
				},
			})

			activeLeft -= active
			retiredLeft -= retired
		}
	}

	return creditBalances
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
