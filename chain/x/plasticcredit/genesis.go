package plasticcredit

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Params: DefaultParams(),
		IdCounters: IDCounters{
			NextIssuerId:      DefaultIndex,
			NextApplicantId:   DefaultIndex,
			NextProjectId:     DefaultIndex,
			NextCreditClassId: DefaultIndex,
		},
		Issuers:           []Issuer{},
		CreditCollections: []*CreditCollection{},
		CreditBalances:    []*CreditBalance{},
		Applicants:        []Applicant{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := gs.Params.Validate(); err != nil {
		return err
	}

	if err := gs.IdCounters.Validate(); err != nil {
		return err
	}

	for _, issuer := range gs.Issuers {
		if err := issuer.Validate(); err != nil {
			return err
		}
	}

	for _, creditCollection := range gs.CreditCollections {
		if err := creditCollection.Validate(); err != nil {
			return err
		}
	}

	for _, creditBalance := range gs.CreditBalances {
		if err := creditBalance.Validate(); err != nil {
			return err
		}
	}
	for _, applicant := range gs.Applicants {
		if err := applicant.Validate(); err != nil {
			return err
		}
	}

	return nil
}
