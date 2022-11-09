package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		IdCounters: IdCounters{
			IssuerId:      uint64(DefaultIndex),
			CollectorId:   uint64(DefaultIndex),
			ProjectId:     uint64(DefaultIndex),
			CreditClassId: uint64(DefaultIndex),
		},
		IssuerList:                []Issuer{},
		CreditClassList:           []CreditClass{},
		ProjectList:               []Project{},
		CollectorList:             []Collector{},
		CreditBatchList:           []CreditBatch{},
		BatchDenomToCreditBalance: []BatchDenomToCreditBalance{},
		CreditDenomList:           []CreditDenom{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in issuer
	issuerIndexMap := make(map[string]struct{})

	for _, elem := range gs.IssuerList {
		index := string(IssuerKey(elem.IssuerId))
		if _, ok := issuerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for issuer")
		}
		issuerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in creditClass
	creditClassIndexMap := make(map[string]struct{})

	for _, elem := range gs.CreditClassList {
		index := string(CreditClassKey(elem.CreditClassId))
		if _, ok := creditClassIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for creditClass")
		}
		creditClassIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in project
	projectIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProjectList {
		index := string(ProjectKey(elem.ProjectId))
		if _, ok := projectIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for project")
		}
		projectIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in collector
	collectorIndexMap := make(map[string]struct{})

	for _, elem := range gs.CollectorList {
		index := string(CollectorKey(elem.CollectorId))
		if _, ok := collectorIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for collector")
		}
		collectorIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in creditBatch
	creditBatchIndexMap := make(map[string]struct{})

	for _, elem := range gs.CreditBatchList {
		index := string(CreditBatchKey(elem.BatchDenom))
		if _, ok := creditBatchIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for creditBatch")
		}
		creditBatchIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in creditBalance
	creditBalanceIndexMap := make(map[string]struct{})

	for _, creditBalances := range gs.BatchDenomToCreditBalance {
		for _, elem := range creditBalances.CreditBalances {
			index := string(CreditBalanceKey(elem.Owner))
			if _, ok := creditBalanceIndexMap[index]; ok {
				return fmt.Errorf("duplicated index for creditBalance")
			}
			creditBalanceIndexMap[index] = struct{}{}
		}
	}
	// Check for duplicated ID in creditDenom
	creditDenomMap := make(map[string]bool)
	creditDenomCount := gs.GetCreditDenomCount()
	creditDenomCounter := uint64(0)
	for _, elem := range gs.CreditDenomList {
		if _, ok := creditDenomMap[elem.BatchDenom]; ok {
			return fmt.Errorf("duplicated batchDenom for creditDenom")
		}
		creditDenomCounter++
		creditDenomMap[elem.BatchDenom] = true
	}
	if creditDenomCounter != creditDenomCount {
		return fmt.Errorf("creditDenomCount should be equal to number of denoms")
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
