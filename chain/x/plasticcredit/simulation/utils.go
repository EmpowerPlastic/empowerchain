package simulation

import (
	"context"
	"fmt"
	"math/rand"

	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func createUniqueRandomAbbreviation(ctx context.Context, r *rand.Rand, querier keeper.Querier) string {
	for { // Loop until we find a unique abbreviation
		abbreviation := createRandomAbbreviation(r)

		// Check if abbreviation is unique
		resp, _ := querier.CreditClass(ctx, &plasticcredit.QueryCreditClassRequest{
			CreditClassAbbreviation: abbreviation,
		})
		if resp == nil {
			return abbreviation
		}
	}
}

func createRandomAbbreviation(r *rand.Rand) string {
	// Start with a letter
	abbreviation := string(rune(simtypes.RandIntBetween(r, 65, 90)))

	length := simtypes.RandIntBetween(r, 2, 5)
	for i := 0; i < length-1; i++ {
		isNumber := simtypes.RandIntBetween(r, 0, 10) == 1
		if isNumber {
			abbreviation += fmt.Sprint(simtypes.RandIntBetween(r, 0, 9))
		} else {
			abbreviation += string(rune(simtypes.RandIntBetween(r, 65, 90)))
		}
	}

	return abbreviation
}

func createUniqueRandomSerialNumber(ctx context.Context, r *rand.Rand, querier keeper.Querier, abbreviation string) string {
	for { // Loop until we find a unique serial number
		serialNumber := createRandomSerialNumber(r)

		denom, err := keeper.CreateCreditDenom(abbreviation, serialNumber)
		if err != nil {
			panic(err) // Should never happen
		}
		// Check if serial number is unique
		resp, _ := querier.CreditCollection(ctx, &plasticcredit.QueryCreditCollectionRequest{
			Denom: denom,
		})
		if resp == nil {
			return serialNumber
		}
	}
}

func createRandomSerialNumber(r *rand.Rand) string {
	return simtypes.RandStringOfLength(r, simtypes.RandIntBetween(r, 1, 256))
}

func createRandomName(r *rand.Rand) string {
	return simtypes.RandStringOfLength(r, simtypes.RandIntBetween(r, 2, 64))
}

func createRandomDescription(r *rand.Rand) string {
	return simtypes.RandStringOfLength(r, simtypes.RandIntBetween(r, 2, 256))
}

func getRandomIssuer(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.Issuer, error) {
	resp, err := querier.Issuers(ctx, &plasticcredit.QueryIssuersRequest{})
	if err != nil {
		return plasticcredit.Issuer{}, err
	}

	if len(resp.Issuers) == 0 {
		return plasticcredit.Issuer{}, fmt.Errorf("no issuers found")
	}

	return resp.Issuers[simtypes.RandIntBetween(r, 0, len(resp.Issuers)-1)], nil
}

func getRandomApplicant(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.Applicant, error) {
	resp, err := querier.Applicants(ctx, &plasticcredit.QueryApplicantsRequest{})
	if err != nil {
		return plasticcredit.Applicant{}, err
	}

	if len(resp.Applicants) == 0 {
		return plasticcredit.Applicant{}, fmt.Errorf("no applicants found")
	}

	return resp.Applicants[simtypes.RandIntBetween(r, 0, len(resp.Applicants)-1)], nil
}

func getRandomCreditClass(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.CreditClass, error) {
	resp, err := querier.CreditClasses(ctx, &plasticcredit.QueryCreditClassesRequest{})
	if err != nil {
		return plasticcredit.CreditClass{}, err
	}

	if len(resp.CreditClasses) == 0 {
		return plasticcredit.CreditClass{}, fmt.Errorf("no credit classes found")
	}

	return resp.CreditClasses[simtypes.RandIntBetween(r, 0, len(resp.CreditClasses)-1)], nil
}

func getRandomProject(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.Project, error) {
	resp, err := querier.Projects(ctx, &plasticcredit.QueryProjectsRequest{})
	if err != nil {
		return plasticcredit.Project{}, err
	}

	if len(resp.Projects) == 0 {
		return plasticcredit.Project{}, fmt.Errorf("no projects found")
	}

	return resp.Projects[simtypes.RandIntBetween(r, 0, len(resp.Projects)-1)], nil
}

func getRandomCreditBalance(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.CreditBalance, error) {
	resp, err := querier.CreditBalances(ctx, &plasticcredit.QueryCreditBalancesRequest{})
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}

	if len(resp.CreditBalances) == 0 {
		return plasticcredit.CreditBalance{}, fmt.Errorf("no credit balances found")
	}

	return resp.CreditBalances[simtypes.RandIntBetween(r, 0, len(resp.CreditBalances)-1)], nil
}