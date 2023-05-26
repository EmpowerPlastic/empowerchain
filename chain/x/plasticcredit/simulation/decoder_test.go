package simulation_test

import (
	"fmt"
	"testing"

	"github.com/cosmos/cosmos-sdk/types/kv"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/simulation"
)

func TestNewDecodeStore(t *testing.T) {
	cdc := app.MakeEncodingConfig().Codec
	decodeStore := simulation.NewDecodeStore(cdc)

	idCounters := plasticcredit.IDCounters{
		NextIssuerId:    1,
		NextApplicantId: 69,
		NextProjectId:   42,
	}
	issuer := plasticcredit.Issuer{
		Id:          1,
		Name:        "test issuer",
		Description: "test issuer description",
		Admin:       "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
	}
	applicant := plasticcredit.Applicant{
		Id:          1,
		Name:        "test applicant",
		Description: "test applicant description",
		Admin:       "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
	}
	creditType := plasticcredit.CreditType{
		Abbreviation: "PTEST",
		IssuerId:     1,
		Name:         "test credit type",
	}
	project := plasticcredit.Project{
		Id:                     1,
		ApplicantId:            1,
		CreditTypeAbbreviation: "PTEST",
		Name:                   "test project",
		Status:                 plasticcredit.ProjectStatus_NEW,
	}
	creditCollection := plasticcredit.CreditCollection{
		Denom:     "PTEST",
		ProjectId: 1,
		TotalAmount: plasticcredit.CreditAmount{
			Active:  12,
			Retired: 3,
		},
	}
	creditBalance := plasticcredit.CreditBalance{
		Owner: "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
		Denom: "PTEST",
		Balance: plasticcredit.CreditAmount{
			Active:  3,
			Retired: 2,
		},
	}

	testCases := map[string]struct {
		kvPair        kv.Pair // we use the same kv pair as both a and b
		expectErr     bool
		expectedValue string
	}{
		"id counters": {
			kvPair: kv.Pair{
				Key:   plasticcredit.IDCountersKey,
				Value: cdc.MustMarshal(&idCounters),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", idCounters, idCounters),
		},
		"issuer": {
			kvPair: kv.Pair{
				Key:   plasticcredit.IssuerKey,
				Value: cdc.MustMarshal(&issuer),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", issuer, issuer),
		},
		"applicant": {
			kvPair: kv.Pair{
				Key:   plasticcredit.ApplicantKey,
				Value: cdc.MustMarshal(&applicant),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", applicant, applicant),
		},
		"credit type": {
			kvPair: kv.Pair{
				Key:   plasticcredit.CreditTypeKey,
				Value: cdc.MustMarshal(&creditType),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", creditType, creditType),
		},
		"project": {
			kvPair: kv.Pair{
				Key:   plasticcredit.ProjectKey,
				Value: cdc.MustMarshal(&project),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", project, project),
		},
		"credit collection": {
			kvPair: kv.Pair{
				Key:   plasticcredit.CreditCollectionKey,
				Value: cdc.MustMarshal(&creditCollection),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", creditCollection, creditCollection),
		},
		"credit balance": {
			kvPair: kv.Pair{
				Key:   plasticcredit.CreditBalanceKey,
				Value: cdc.MustMarshal(&creditBalance),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", creditBalance, creditBalance),
		},
		"empty": {
			kvPair:        kv.Pair{},
			expectErr:     true,
			expectedValue: "",
		},
		"non-existent key": {
			kvPair: kv.Pair{
				Key:   []byte("non-existent key"),
				Value: cdc.MustMarshal(&idCounters),
			},
			expectErr:     true,
			expectedValue: "",
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			if tc.expectErr {
				require.Panics(t, func() { decodeStore(tc.kvPair, tc.kvPair) })
			} else {
				require.Equal(t, tc.expectedValue, decodeStore(tc.kvPair, tc.kvPair))
			}
		})
	}
}
