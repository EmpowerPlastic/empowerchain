package plasticcredit

import (
	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() GenesisState {
	return GenesisState{
		Params: DefaultParams(),
		IdCounters: IDCounters{
			NextIssuerId:    DefaultIndex,
			NextApplicantId: DefaultIndex,
			NextProjectId:   DefaultIndex,
		},
		Issuers:           []Issuer{},
		Applicants:        []Applicant{},
		CreditTypes:       []CreditType{},
		Projects:          []Project{},
		CreditCollections: []CreditCollection{},
		CreditBalances:    []CreditBalance{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	creditTypes := make(map[string]CreditType)
	issuers := make(map[uint64]Issuer)
	applicants := make(map[uint64]Applicant)
	projects := make(map[uint64]Project)
	creditCollections := make(map[string]CreditCollection)
	creditBalances := make(map[string]CreditBalance)

	if err := gs.Params.Validate(); err != nil {
		return err
	}

	for _, issuer := range gs.Issuers {
		if err := issuer.Validate(); err != nil {
			return err
		}

		if _, exists := issuers[issuer.Id]; exists {
			return errors.Wrapf(ErrIssuerDuplicate, "duplicate issuer with id %d was found", issuer.Id)
		}
		issuers[issuer.Id] = issuer
	}

	for _, applicant := range gs.Applicants {
		if err := applicant.Validate(); err != nil {
			return err
		}

		if _, exists := applicants[applicant.Id]; exists {
			return errors.Wrapf(ErrApplicantDuplicate, "duplicate applicant with id %d was found", applicant.Id)
		}
		applicants[applicant.Id] = applicant
	}

	for _, creditType := range gs.CreditTypes {
		if err := creditType.Validate(); err != nil {
			return err
		}

		if _, exists := issuers[creditType.IssuerId]; !exists {
			return errors.Wrapf(ErrIssuerNotFound, "credit type with abbreviation %s had issuer_id %d that was not found", creditType.Abbreviation, creditType.IssuerId)
		}

		if _, exists := creditTypes[creditType.Abbreviation]; exists {
			return errors.Wrapf(ErrCreditTypeDuplicate, "duplicate credit type with abbreviation %s was found", creditType.Abbreviation)
		}
		creditTypes[creditType.Abbreviation] = creditType
	}

	for _, project := range gs.Projects {
		if err := project.Validate(); err != nil {
			return err
		}

		if _, exists := applicants[project.ApplicantId]; !exists {
			return errors.Wrapf(ErrApplicantNotFound, "project with id %d had applicant_id %d that was not found", project.Id, project.ApplicantId)
		}

		if _, exists := creditTypes[project.CreditTypeAbbreviation]; !exists {
			return errors.Wrapf(ErrCreditTypeNotFound, "project with id %d had credit type abbreviation %s that was not found", project.Id, project.CreditTypeAbbreviation)
		}

		if _, exists := projects[project.Id]; exists {
			return errors.Wrapf(ErrProjectDuplicate, "duplicate project with id %d was found", project.Id)
		}
		projects[project.Id] = project
	}

	for _, creditCollection := range gs.CreditCollections {
		if err := creditCollection.Validate(); err != nil {
			return err
		}

		if _, exists := projects[creditCollection.ProjectId]; !exists {
			return errors.Wrapf(ErrProjectNotFound, "credit collection with denom %s had project_id %d that was not found", creditCollection.Denom, creditCollection.ProjectId)
		}

		if _, exists := creditCollections[creditCollection.Denom]; exists {
			return errors.Wrapf(ErrCreditCollectionDuplicate, "duplicate credit collection with denom %s was found", creditCollection.Denom)
		}
		creditCollections[creditCollection.Denom] = creditCollection
	}

	for _, creditBalance := range gs.CreditBalances {
		if err := creditBalance.Validate(); err != nil {
			return err
		}

		if _, exists := creditCollections[creditBalance.Denom]; !exists {
			return errors.Wrapf(ErrCreditCollectionNotFound, "credit balance with owner %s and denom %s had credit collection that was not found with that denom", creditBalance.Owner, creditBalance.Denom)
		}

		ownerAddr := sdk.MustAccAddressFromBech32(creditBalance.Owner)
		key := string(CreateCreditBalanceKey(ownerAddr, creditBalance.Denom))
		if _, exists := creditBalances[key]; exists {
			return errors.Wrapf(ErrCreditBalanceDuplicate, "duplicate credit balance with owner %s and denom %s was found", creditBalance.Owner, creditBalance.Denom)
		}
		creditBalances[key] = creditBalance
	}

	if err := gs.IdCounters.Validate(); err != nil {
		return err
	}
	if _, exists := issuers[gs.IdCounters.NextIssuerId]; exists {
		return errors.Wrapf(utils.ErrInvalidValue, "next_issuer_id %d is already taken", gs.IdCounters.NextIssuerId)
	}
	if _, exists := applicants[gs.IdCounters.NextApplicantId]; exists {
		return errors.Wrapf(utils.ErrInvalidValue, "next_applicant_id %d is already taken", gs.IdCounters.NextApplicantId)
	}
	if _, exists := projects[gs.IdCounters.NextProjectId]; exists {
		return errors.Wrapf(utils.ErrInvalidValue, "next_project_id %d is already taken", gs.IdCounters.NextProjectId)
	}

	return nil
}
