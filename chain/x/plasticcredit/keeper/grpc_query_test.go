package keeper_test

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestParamsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	ms := keeper.NewMsgServerImpl(k)
	goCtx := sdk.WrapSDKContext(s.ctx)

	params := plasticcredit.DefaultParams()
	_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
		Authority: k.Authority(),
		Params:    plasticcredit.Params{},
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	response, err := querier.Params(goCtx, &plasticcredit.QueryParamsRequest{})
	s.Require().NoError(err)
	s.Require().Equal(&plasticcredit.QueryParamsResponse{Params: params}, response)
}

func (s *TestSuite) TestIssuerQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	_, err := querier.Issuer(goCtx, &plasticcredit.QueryIssuerRequest{
		IssuerId: 1,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrIssuerNotFound)

	ms := keeper.NewMsgServerImpl(k)
	createMsg := plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Seomthing",
		Admin:       sample.AccAddress(),
	}
	_, err = ms.CreateIssuer(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.Issuer(goCtx, &plasticcredit.QueryIssuerRequest{
		IssuerId: 1,
	})

	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.Issuer.Id)
	s.Require().Equal(createMsg.Name, resp.Issuer.Name)
	s.Require().Equal(createMsg.Description, resp.Issuer.Description)
	s.Require().Equal(createMsg.Admin, resp.Issuer.Admin)
}

func (s *TestSuite) TestIssuersQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.Issuers(goCtx, &plasticcredit.QueryIssuersRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.Issuers, 0)

	ms := keeper.NewMsgServerImpl(k)
	creator := k.Authority()
	baseName := "Empower"
	description := "Something description."
	admin := sample.AccAddress()
	for i := 0; i < 11; i++ {
		id := i + 1
		createMsg := plasticcredit.MsgCreateIssuer{
			Creator:     creator,
			Name:        fmt.Sprintf("%s%d", baseName, id),
			Description: description,
			Admin:       admin,
		}
		_, err = ms.CreateIssuer(goCtx, &createMsg)
		s.Require().NoError(err)
	}

	resp2, err := querier.Issuers(goCtx, &plasticcredit.QueryIssuersRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp2.Issuers, 11)

	for i, issuer := range resp2.Issuers {
		id := i + 1
		s.Require().Equal(uint64(id), issuer.Id)
		expectedName := fmt.Sprintf("%s%d", baseName, id)
		s.Require().Equal(expectedName, issuer.Name)
		s.Require().Equal(description, issuer.Description)
		s.Require().Equal(admin, issuer.Admin)
	}

	resp3, err := querier.Issuers(goCtx, &plasticcredit.QueryIssuersRequest{
		Pagination: &query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.Issuers, 10)
}

func (s *TestSuite) TestApplicantQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	_, err := querier.Applicant(goCtx, &plasticcredit.QueryApplicantRequest{
		ApplicantId: 1,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrApplicantNotFound)

	ms := keeper.NewMsgServerImpl(k)
	createMsg := plasticcredit.MsgCreateApplicant{
		Name:        "Empower",
		Description: "Seomthing",
		Admin:       sample.AccAddress(),
	}
	_, err = ms.CreateApplicant(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.Applicant(goCtx, &plasticcredit.QueryApplicantRequest{
		ApplicantId: 1,
	})
	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.Applicant.Id)
	s.Require().Equal(createMsg.Name, resp.Applicant.Name)
	s.Require().Equal(createMsg.Description, resp.Applicant.Description)
	s.Require().Equal(createMsg.Admin, resp.Applicant.Admin)
}

// TODO credit balance, credit collection queries
