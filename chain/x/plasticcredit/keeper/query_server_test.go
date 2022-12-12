package keeper_test

import (
	"fmt"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
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
	s.Require().ErrorIs(err, plasticcredit.ErrNotFoundIssuer)

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
		Pagination: query.PageRequest{
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
	s.Require().ErrorIs(err, plasticcredit.ErrNotFoundApplicant)

	ms := keeper.NewMsgServerImpl(k)
	createMsg := plasticcredit.MsgCreateApplicant{
		Name:        "Empower",
		Description: "Something",
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

func (s *TestSuite) TestCreditClassQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)
	creditClassAbbreviation := "PCRD"

	querier := keeper.Querier{Keeper: k}
	_, err = querier.CreditClass(goCtx, &plasticcredit.QueryCreditClassRequest{
		CreditClassAbbreviation: creditClassAbbreviation,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrNotFoundCreditClass)

	createMsg := plasticcredit.MsgCreateCreditClass{
		Creator:      issuerAdmin,
		Abbreviation: creditClassAbbreviation,
		IssuerId:     1,
		Name:         "Empower Plastic Credits",
	}
	_, err = ms.CreateCreditClass(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.CreditClass(goCtx, &plasticcredit.QueryCreditClassRequest{
		CreditClassAbbreviation: creditClassAbbreviation,
	})

	s.Require().NoError(err)
	s.Require().Equal(createMsg.Abbreviation, resp.CreditClass.Abbreviation)
	s.Require().Equal(createMsg.IssuerId, resp.CreditClass.IssuerId)
	s.Require().Equal(createMsg.Name, resp.CreditClass.Name)
}

func (s *TestSuite) TestCreditClassesQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.CreditClasses(goCtx, &plasticcredit.QueryCreditClassesRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.CreditClasses, 0)

	var expectedCreditClasses []plasticcredit.CreditClass
	for i := 0; i < 11; i++ {
		abbreviation := fmt.Sprintf("PCRD%d", i)
		name := fmt.Sprintf("Empower Credits (%s)", abbreviation)

		createMsg := plasticcredit.MsgCreateCreditClass{
			Creator:      issuerAdmin,
			Abbreviation: abbreviation,
			IssuerId:     1,
			Name:         name,
		}
		_, err = ms.CreateCreditClass(goCtx, &createMsg)
		s.Require().NoError(err)

		expectedCreditClasses = append(expectedCreditClasses, plasticcredit.CreditClass{
			Abbreviation: createMsg.Abbreviation,
			IssuerId:     createMsg.IssuerId,
			Name:         createMsg.Name,
		})
	}

	resp2, err := querier.CreditClasses(goCtx, &plasticcredit.QueryCreditClassesRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp2.CreditClasses, 11)

	s.Require().ElementsMatch(expectedCreditClasses, resp2.CreditClasses)

	resp3, err := querier.CreditClasses(goCtx, &plasticcredit.QueryCreditClassesRequest{
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.CreditClasses, 10)
}

func (s *TestSuite) TestProjectQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	applicantAdmin := sample.AccAddress()
	creditClassAbbreviation := "PCRD"
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)
	_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
		Creator:      issuerAdmin,
		Abbreviation: creditClassAbbreviation,
		IssuerId:     1,
		Name:         "Empower Plastic Credits",
	})
	s.Require().NoError(err)
	_, err = ms.CreateApplicant(goCtx, &plasticcredit.MsgCreateApplicant{
		Name:        "Collector co",
		Description: "smthsmth",
		Admin:       applicantAdmin,
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	_, err = querier.Project(goCtx, &plasticcredit.QueryProjectRequest{
		ProjectId: 1,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrNotFoundProject)

	createMsg := plasticcredit.MsgCreateProject{
		Creator:                 applicantAdmin,
		ApplicantId:             1,
		CreditClassAbbreviation: creditClassAbbreviation,
		Name:                    "Project 420x",
	}
	_, err = ms.CreateProject(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.Project(goCtx, &plasticcredit.QueryProjectRequest{
		ProjectId: 1,
	})

	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.Project.Id)
	s.Require().Equal(createMsg.ApplicantId, resp.Project.ApplicantId)
	s.Require().Equal(createMsg.CreditClassAbbreviation, resp.Project.CreditClassAbbreviation)
	s.Require().Equal(createMsg.Name, resp.Project.Name)
	s.Require().Equal(plasticcredit.ProjectStatus_NEW, resp.Project.Status)
}

// TODO credit balance, credit collection queries
