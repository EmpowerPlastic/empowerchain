package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
)

func (s *TestSuite) TestParamsQuery() {
	k := s.empowerApp.CertificateKeeper
	ms := keeper.NewMsgServerImpl(k)
	goCtx := sdk.WrapSDKContext(s.ctx)

	updatedParams := certificates.DefaultParams()
	_, err := ms.UpdateParams(goCtx, &certificates.MsgUpdateParams{
		Authority: k.Authority(),
		Params:    updatedParams,
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	response, err := querier.Params(goCtx, &certificates.QueryParamsRequest{})
	s.Require().NoError(err)
	s.Require().Equal(&certificates.QueryParamsResponse{Params: updatedParams}, response)
}

func (s *TestSuite) TestCertificateQuery() {
	k := s.empowerApp.CertificateKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	_, err := querier.Certificate(goCtx, &certificates.QueryCertificateRequest{
		Id:    1,
		Owner: s.sampleOwner,
	})
	s.Require().ErrorIs(err, certificates.ErrCertificateNotFound)

	ms := keeper.NewMsgServerImpl(k)
	createMsg := certificates.MsgCreateCertificate{
		Owner:  s.sampleOwner,
		Issuer: s.sampleIssuerAdmin,
		Type:   s.sampleCertificationType,
		Data:   s.sampleCertificationData,
	}
	createdCert, err := ms.CreateCertificate(goCtx, &createMsg)
	s.Require().Equal(uint64(1), createdCert.CertificateId)
	s.Require().NoError(err)

	resp, err := querier.Certificate(goCtx, &certificates.QueryCertificateRequest{
		Id:    1,
		Owner: s.sampleOwner,
	})

	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.Certificate.Id)
	s.Require().Equal(createMsg.Type, resp.Certificate.Type)
	s.Require().Equal(createMsg.Owner, resp.Certificate.Owner)
	s.Require().Equal(createMsg.Issuer, resp.Certificate.Issuer)
}

func (s *TestSuite) TestCertificatesQuery() {
	k := s.empowerApp.CertificateKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.AllCertificatesByUser(goCtx, &certificates.QueryAllCertificatesByUserRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.Certificates, 0)

	ms := keeper.NewMsgServerImpl(k)
	for i := 0; i < 11; i++ {
		createMsg := certificates.MsgCreateCertificate{
			Owner:  s.sampleOwner,
			Issuer: s.sampleIssuerAdmin,
			Type:   s.sampleCertificationType,
			Data:   s.sampleCertificationData,
		}
		_, err = ms.CreateCertificate(goCtx, &createMsg)
		s.Require().NoError(err)
	}

	resp2, err := querier.AllCertificatesByUser(goCtx, &certificates.QueryAllCertificatesByUserRequest{
		Owner: s.sampleOwner,
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  11,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp2.Certificates, 11)

	for i, certificate := range resp2.Certificates {
		id := i + 1
		s.Require().Equal(uint64(id), certificate.Id)
		s.Require().Equal(s.sampleCertificationType, certificate.Type)
	}
}
