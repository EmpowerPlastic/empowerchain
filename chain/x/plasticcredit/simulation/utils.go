package simulation

import (
	"context"
	"fmt"
	"github.com/cosmos/cosmos-sdk/types/query"
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

func getRandomIssuer(ctx context.Context, r *rand.Rand, querier keeper.Querier, ids plasticcredit.IDCounters) (plasticcredit.Issuer, error) {
	if ids.NextIssuerId == 0 || ids.NextIssuerId == 1 {
		return plasticcredit.Issuer{}, fmt.Errorf("no issuers found")
	}

	var issuerId int
	if ids.NextIssuerId == 2 {
		issuerId = 1
	} else {
		simtypes.RandIntBetween(r, 1, int(ids.NextIssuerId-1))
	}

	resp, err := querier.Issuer(ctx, &plasticcredit.QueryIssuerRequest{
		IssuerId: uint64(issuerId),
	})
	if err != nil {
		return plasticcredit.Issuer{}, err
	}

	return resp.Issuer, nil
}

func getRandomApplicant(ctx context.Context, r *rand.Rand, querier keeper.Querier, ids plasticcredit.IDCounters) (plasticcredit.Applicant, error) {
	if ids.NextApplicantId == 0 || ids.NextApplicantId == 1 {
		return plasticcredit.Applicant{}, fmt.Errorf("no applicants found")
	}

	var applicantId int
	if ids.NextApplicantId == 2 {
		applicantId = 1
	} else {
		simtypes.RandIntBetween(r, 1, int(ids.NextApplicantId-1))
	}

	resp, err := querier.Applicant(ctx, &plasticcredit.QueryApplicantRequest{
		ApplicantId: uint64(applicantId),
	})
	if err != nil {
		return plasticcredit.Applicant{}, err
	}

	return resp.Applicant, nil
}

func getRandomCreditClass(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.CreditClass, error) {
	resp, err := querier.CreditClasses(ctx, &plasticcredit.QueryCreditClassesRequest{
		// We max the return to 25 for now, since this lookup is potentially quite expensive
		// TODO: Get better indexes so we can look these up more directly
		Pagination: query.PageRequest{
			Limit:      25,
			CountTotal: false,
		},
	})
	if err != nil {
		return plasticcredit.CreditClass{}, err
	}

	if len(resp.CreditClasses) == 0 {
		return plasticcredit.CreditClass{}, fmt.Errorf("no credit classes found")
	}

	fmt.Println("Found credit classes: ", len(resp.CreditClasses))

	if len(resp.CreditClasses) == 1 {
		return resp.CreditClasses[0], nil
	}

	return resp.CreditClasses[simtypes.RandIntBetween(r, 0, len(resp.CreditClasses)-1)], nil
}

func getRandomProject(ctx context.Context, r *rand.Rand, querier keeper.Querier, ids plasticcredit.IDCounters) (plasticcredit.Project, error) {
	if ids.NextProjectId == 0 || ids.NextProjectId == 1 {
		return plasticcredit.Project{}, fmt.Errorf("no projects found")
	}

	var projectId int
	if ids.NextProjectId == 2 {
		projectId = 1
	} else {
		simtypes.RandIntBetween(r, 1, int(ids.NextProjectId-1))
	}

	resp, err := querier.Project(ctx, &plasticcredit.QueryProjectRequest{
		ProjectId: uint64(projectId),
	})
	if err != nil {
		return plasticcredit.Project{}, err
	}

	return resp.Project, nil
}

func getRandomCreditBalance(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.CreditBalance, error) {
	resp, err := querier.CreditBalances(ctx, &plasticcredit.QueryCreditBalancesRequest{
		// We max the return to 25 for now, since this lookup is potentially quite expensive
		// TODO: Get better indexes so we can look these up more directly
		Pagination: query.PageRequest{
			Limit:      25,
			CountTotal: false,
		},
	})
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}

	if len(resp.CreditBalances) == 0 {
		return plasticcredit.CreditBalance{}, fmt.Errorf("no credit balances found")
	}

	if len(resp.CreditBalances) == 1 {
		return resp.CreditBalances[0], nil
	}

	return resp.CreditBalances[simtypes.RandIntBetween(r, 0, len(resp.CreditBalances)-1)], nil
}
