package simulation

import (
	"context"
	"fmt"
	"math/rand"

	"github.com/cosmos/cosmos-sdk/types/query"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func createUniqueRandomAbbreviation(ctx context.Context, r *rand.Rand, querier keeper.Querier) string {
	for { // Loop until we find a unique abbreviation
		abbreviation := createRandomAbbreviation(r)

		// Check if abbreviation is unique
		resp, _ := querier.CreditType(ctx, &plasticcredit.QueryCreditTypeRequest{
			CreditTypeAbbreviation: abbreviation,
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

func createRandomMetadataURI(r *rand.Rand) string {
	return simtypes.RandStringOfLength(r, simtypes.RandIntBetween(r, 1, 256))
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

	issuerID := safeRandIntBetween(r, 1, int(ids.NextIssuerId-1))

	resp, err := querier.Issuer(ctx, &plasticcredit.QueryIssuerRequest{
		IssuerId: uint64(issuerID),
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

	applicantID := safeRandIntBetween(r, 1, int(ids.NextApplicantId-1))
	resp, err := querier.Applicant(ctx, &plasticcredit.QueryApplicantRequest{
		ApplicantId: uint64(applicantID),
	})
	if err != nil {
		return plasticcredit.Applicant{}, err
	}

	return resp.Applicant, nil
}

func getRandomCreditType(ctx context.Context, r *rand.Rand, querier keeper.Querier) (plasticcredit.CreditType, error) {
	resp, err := querier.CreditTypes(ctx, &plasticcredit.QueryCreditTypesRequest{
		// We max the return to 25 for now, since this lookup is potentially quite expensive
		// TODO: Get better indexes so we can look these up more directly
		Pagination: query.PageRequest{
			Limit:      25,
			CountTotal: false,
		},
	})
	if err != nil {
		return plasticcredit.CreditType{}, err
	}

	if len(resp.CreditTypes) == 0 {
		return plasticcredit.CreditType{}, fmt.Errorf("no credit types found")
	}

	return resp.CreditTypes[safeRandIntBetween(r, 0, len(resp.CreditTypes)-1)], nil
}

func getRandomProject(ctx context.Context, r *rand.Rand, querier keeper.Querier, ids plasticcredit.IDCounters) (plasticcredit.Project, error) {
	if ids.NextProjectId == 0 || ids.NextProjectId == 1 {
		return plasticcredit.Project{}, fmt.Errorf("no projects found")
	}

	projectID := safeRandIntBetween(r, 1, int(ids.NextProjectId-1))
	resp, err := querier.Project(ctx, &plasticcredit.QueryProjectRequest{
		ProjectId: uint64(projectID),
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

	return resp.CreditBalances[safeRandIntBetween(r, 0, len(resp.CreditBalances)-1)], nil
}

// safeRandIntBetween returns a random int between min and max
// If max is less than or equal to min, it will return min
// This is to make this kind of code safe:
// resp.GetCreditTypes[safeRandIntBetween(r, 0, len(resp.GetCreditTypes)-1)]
func safeRandIntBetween(r *rand.Rand, min, max int) int {
	if min >= max {
		return min
	}

	return simtypes.RandIntBetween(r, min, max)
}
