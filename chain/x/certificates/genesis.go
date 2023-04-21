package certificates

import (
	"cosmossdk.io/errors"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() GenesisState {
	return GenesisState{
		Params:       DefaultParams(),
		Certificates: []Certificate{},
		IdCounters: IDCounters{
			NextCertificateId: DefaultIndex,
		},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	mapCertificates := make(map[uint64]Certificate)
	for _, certificate := range gs.Certificates {
		if err := certificate.Validate(); err != nil {
			return err
		}

		if _, exists := mapCertificates[certificate.Id]; exists {
			return errors.Wrapf(ErrCertificateDuplicate, "duplicate certificate with id %d was found", certificate.Id)
		}
		mapCertificates[certificate.Id] = certificate
	}

	if err := gs.IdCounters.Validate(); err != nil {
		return err
	}
	if _, exists := mapCertificates[gs.IdCounters.NextCertificateId]; exists {
		return errors.Wrapf(utils.ErrInvalidValue, "next_certificate_id %d is already taken", gs.IdCounters.NextCertificateId)
	}

	return nil
}
