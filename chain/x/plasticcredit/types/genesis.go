package types

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Params: DefaultParams(),
		IdCounters: IDCounters{
			NextIssuerId:      DefaultIndex,
			NextCollectorId:   DefaultIndex,
			NextProjectId:     DefaultIndex,
			NextCreditClassId: DefaultIndex,
		},
		Issuers: []Issuer{},
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

	return nil
}
