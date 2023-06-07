package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

func (s *TestSuite) TestGenesis() {
	genesisState := certificates.GenesisState{
		Params: certificates.Params{
			AllowedIssuers: []string{s.sampleIssuerAdmin},
		},
		IdCounters: certificates.IDCounters{
			NextCertificateId: 2,
		},
		Certificates: []certificates.Certificate{
			{
				Id:     1,
				Owner:  s.sampleOwner,
				Type:   s.sampleCertificationType,
				Issuer: s.sampleIssuerAdmin,
			},
		},
	}

	err := s.empowerApp.CertificateKeeper.InitGenesis(s.ctx, &genesisState)
	s.Require().NoError(err)

	k := s.empowerApp.CertificateKeeper

	fetchedParams := k.GetParams(s.ctx)
	s.Require().Equal(genesisState.Params, fetchedParams)

	idCounter := k.GetIDCounters(s.ctx)
	s.Require().Equal(genesisState.IdCounters, idCounter)

	for _, certificate := range genesisState.Certificates {
		actualCertificate, found := k.GetCertificate(s.ctx, certificate.Owner, certificate.Id)
		s.Require().True(found)
		s.Require().Equal(certificate, actualCertificate)
	}

	export := s.empowerApp.CertificateKeeper.ExportGenesis(s.ctx)

	s.Require().Equal(genesisState.Params, export.Params)

	s.Require().Equal(genesisState.IdCounters, export.IdCounters)

	s.Require().Equal(len(genesisState.Certificates), len(export.Certificates))
	for i, certificate := range genesisState.Certificates {
		actualCertificate := export.Certificates[i]
		s.Require().Equal(certificate, actualCertificate)
	}
}
