package proofofexistence

import fmt "fmt"

// DefaultGenesisState - Return a default genesis state
func DefaultGenesisState() *GenesisState {
	return &GenesisState{
		ProofList: []Proof{},
	}
}

// Validate performs basic genesis state validation returning an error upon failure
func (gs GenesisState) Validate() error {
	// Check for duplicated index in proof
	hashMap := make(map[string]struct{})

	for _, proof := range gs.ProofList {
		if _, exists := hashMap[proof.Hash]; exists {
			return fmt.Errorf("duplicated hash found")
		}
		hashMap[proof.Hash] = struct{}{}

		if err := validateGenesisProof(proof); err != nil {
			return err
		}
	}

	return nil
}

func validateGenesisProof(proof Proof) error {
	if proof.Hash == "" {
		return fmt.Errorf("hash cannot be empty")
	}

	if proof.Metadata == nil {
		return fmt.Errorf("metadata cannot be empty")
	}

	if proof.Metadata.Creator == "" {
		return fmt.Errorf("metadata.creator cannot be empty")
	}

	return nil
}
