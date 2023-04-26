package keeper_test

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
)

type MockInvariantKeeper struct {
	idCounters  certificates.IDCounters
	certificate certificates.Certificate
}

func (k MockInvariantKeeper) GetIDCounters(ctx sdk.Context) (idc certificates.IDCounters) {
	return k.idCounters
}

func (k MockInvariantKeeper) GetCertificate(ctx sdk.Context, owner string, id uint64) (certificate certificates.Certificate, found bool) {
	if k.certificate.Id == id {
		return k.certificate, true
	}
	return certificates.Certificate{}, false
}

func (s *TestSuite) TestIDCountersInvariant() {
	testCases := map[string]struct {
		idCounters    certificates.IDCounters
		certificate   certificates.Certificate
		expBroken     bool
		messageBroken string
	}{
		"happy path": {
			idCounters: certificates.IDCounters{
				NextCertificateId: 2,
			},
			certificate: certificates.Certificate{
				Id: 1,
			},
			expBroken:     false,
			messageBroken: "invalid id counters: none",
		},
		"invalid certificate id": {
			idCounters: certificates.IDCounters{
				NextCertificateId: 2,
			},
			certificate: certificates.Certificate{
				Id: 2,
			},
			expBroken:     true,
			messageBroken: "invalid id counters: certificate id",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			k := MockInvariantKeeper{idCounters: tc.idCounters, certificate: tc.certificate}
			invariant := keeper.IDCountersInvariant(k)
			message, broken := invariant(s.ctx)
			s.Require().True(strings.Contains(message, tc.messageBroken))
			s.Require().Equal(tc.expBroken, broken)
		})
	}
}
