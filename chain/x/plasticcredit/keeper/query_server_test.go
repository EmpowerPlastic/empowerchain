package keeper_test

import (
	"fmt"
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestParamsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	ms := keeper.NewMsgServerImpl(k)
	goCtx := sdk.WrapSDKContext(s.ctx)

	updatedParams := plasticcredit.DefaultParams()
	updatedParams.CreditTypeCreationFee = sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(rand.Int63()))
	_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
		Authority: k.Authority(),
		Params:    updatedParams,
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	response, err := querier.Params(goCtx, &plasticcredit.QueryParamsRequest{})
	s.Require().NoError(err)
	s.Require().Equal(&plasticcredit.QueryParamsResponse{Params: updatedParams}, response)
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
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.Issuers, 10)
}

func (s *TestSuite) TestApplicantsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.Applicants(goCtx, &plasticcredit.QueryApplicantsRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.Applicants, 0)

	ms := keeper.NewMsgServerImpl(k)
	baseName := "Empower"
	description := "Something description."
	admin := sample.AccAddress()
	for i := 0; i < 11; i++ {
		id := i + 1
		createMsg := plasticcredit.MsgCreateApplicant{
			Name:        fmt.Sprintf("%s%d", baseName, id),
			Description: description,
			Admin:       admin,
		}
		_, err = ms.CreateApplicant(goCtx, &createMsg)
		s.Require().NoError(err)
	}

	resp2, err := querier.Applicants(goCtx, &plasticcredit.QueryApplicantsRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp2.Applicants, 11)

	for i, applicant := range resp2.Applicants {
		id := i + 1
		s.Require().Equal(uint64(id), applicant.Id)
		expectedName := fmt.Sprintf("%s%d", baseName, id)
		s.Require().Equal(expectedName, applicant.Name)
		s.Require().Equal(description, applicant.Description)
		s.Require().Equal(admin, applicant.Admin)
	}

	resp3, err := querier.Applicants(goCtx, &plasticcredit.QueryApplicantsRequest{
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.Applicants, 10)
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

func (s *TestSuite) TestCreditTypeQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	s.fundAccount(issuerAdmin, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(10e12))))
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)
	creditTypeAbbreviation := "CRDT"

	querier := keeper.Querier{Keeper: k}
	_, err = querier.CreditType(goCtx, &plasticcredit.QueryCreditTypeRequest{
		CreditTypeAbbreviation: creditTypeAbbreviation,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditTypeNotFound)

	createMsg := plasticcredit.MsgCreateCreditType{
		Creator:      issuerAdmin,
		Abbreviation: creditTypeAbbreviation,
		IssuerId:     1,
		Name:         "Empower Plastic Credits",
	}
	_, err = ms.CreateCreditType(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.CreditType(goCtx, &plasticcredit.QueryCreditTypeRequest{
		CreditTypeAbbreviation: creditTypeAbbreviation,
	})

	s.Require().NoError(err)
	s.Require().Equal(createMsg.Abbreviation, resp.CreditType.Abbreviation)
	s.Require().Equal(createMsg.IssuerId, resp.CreditType.IssuerId)
	s.Require().Equal(createMsg.Name, resp.CreditType.Name)
}

func (s *TestSuite) TestCreditTypesQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	s.fundAccount(issuerAdmin, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(10e12))))

	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.CreditTypes(goCtx, &plasticcredit.QueryCreditTypesRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.CreditTypes, 0)

	var expectedCreditTypes []plasticcredit.CreditType
	for i := 0; i < 11; i++ {
		abbreviation := fmt.Sprintf("ABC%d", i)
		name := fmt.Sprintf("Empower Credits (%s)", abbreviation)

		createMsg := plasticcredit.MsgCreateCreditType{
			Creator:      issuerAdmin,
			Abbreviation: abbreviation,
			IssuerId:     1,
			Name:         name,
		}
		_, err = ms.CreateCreditType(goCtx, &createMsg)
		s.Require().NoError(err)

		expectedCreditTypes = append(expectedCreditTypes, plasticcredit.CreditType{
			Abbreviation: createMsg.Abbreviation,
			IssuerId:     createMsg.IssuerId,
			Name:         createMsg.Name,
		})
	}

	resp2, err := querier.CreditTypes(goCtx, &plasticcredit.QueryCreditTypesRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp2.CreditTypes, 11)

	s.Require().ElementsMatch(expectedCreditTypes, resp2.CreditTypes)

	resp3, err := querier.CreditTypes(goCtx, &plasticcredit.QueryCreditTypesRequest{
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.CreditTypes, 10)
}

func (s *TestSuite) TestProjectsQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	// fund the issuerAdmin account for fee
	s.fundAccount(issuerAdmin, sdk.NewCoins(sdk.NormalizeCoin(sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(10e6)))))
	applicantAdmin := sample.AccAddress()
	creditTypeAbbreviation := "DRP"
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)
	_, err = ms.CreateCreditType(goCtx, &plasticcredit.MsgCreateCreditType{
		Creator:      issuerAdmin,
		Abbreviation: creditTypeAbbreviation,
		IssuerId:     1,
		Name:         "Empower Plastic Credits",
	})
	s.Require().NoError(err)
	_, err = ms.CreateApplicant(goCtx, &plasticcredit.MsgCreateApplicant{
		Admin:       applicantAdmin,
		Name:        "Empower",
		Description: "Something",
	})
	s.Require().NoError(err)

	querier := keeper.Querier{Keeper: k}
	resp, err := querier.Projects(goCtx, &plasticcredit.QueryProjectsRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp.Projects, 0)

	var expectedProjects []plasticcredit.Project
	for i := 0; i < 11; i++ {
		abbreviation := fmt.Sprintf("ABC%d", i)
		name := fmt.Sprintf("Empower Project (%s)", abbreviation)

		createMsg := plasticcredit.MsgCreateProject{
			Creator:                applicantAdmin,
			ApplicantId:            1,
			Name:                   name,
			CreditTypeAbbreviation: creditTypeAbbreviation,
		}
		_, err = ms.CreateProject(goCtx, &createMsg)
		s.Require().NoError(err)

		expectedProjects = append(expectedProjects, plasticcredit.Project{
			Id:                     uint64(i + 1),
			ApplicantId:            createMsg.ApplicantId,
			CreditTypeAbbreviation: creditTypeAbbreviation,
			Name:                   createMsg.Name,
			Status:                 plasticcredit.ProjectStatus_NEW,
		})
	}

	resp2, err := querier.Projects(goCtx, &plasticcredit.QueryProjectsRequest{})
	s.Require().NoError(err)
	s.Require().Len(resp2.Projects, 11)

	s.Require().ElementsMatch(expectedProjects, resp2.Projects)

	resp3, err := querier.Projects(goCtx, &plasticcredit.QueryProjectsRequest{
		Pagination: query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	})
	s.Require().NoError(err)
	s.Require().Len(resp3.Projects, 10)
}

func (s *TestSuite) TestProjectQuery() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	issuerAdmin := sample.AccAddress()
	s.fundAccount(issuerAdmin, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(10e12))))
	applicantAdmin := sample.AccAddress()
	creditTypeAbbreviation := "PTEST"

	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "Something",
		Admin:       issuerAdmin,
	})
	s.Require().NoError(err)
	_, err = ms.CreateCreditType(goCtx, &plasticcredit.MsgCreateCreditType{
		Creator:      issuerAdmin,
		Abbreviation: creditTypeAbbreviation,
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
	s.Require().ErrorIs(err, plasticcredit.ErrProjectNotFound)

	createMsg := plasticcredit.MsgCreateProject{
		Creator:                applicantAdmin,
		ApplicantId:            1,
		CreditTypeAbbreviation: creditTypeAbbreviation,
		Name:                   "Project 420x",
	}
	_, err = ms.CreateProject(goCtx, &createMsg)
	s.Require().NoError(err)

	resp, err := querier.Project(goCtx, &plasticcredit.QueryProjectRequest{
		ProjectId: 1,
	})

	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.Project.Id)
	s.Require().Equal(createMsg.ApplicantId, resp.Project.ApplicantId)
	s.Require().Equal(createMsg.CreditTypeAbbreviation, resp.Project.CreditTypeAbbreviation)
	s.Require().Equal(createMsg.Name, resp.Project.Name)
	s.Require().Equal(plasticcredit.ProjectStatus_NEW, resp.Project.Status)
}

func (s *TestSuite) TestCreditCollectionQuery() {
	s.PopulateWithSamples()

	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	querier := keeper.Querier{Keeper: k}

	_, err := querier.CreditCollection(goCtx, &plasticcredit.QueryCreditCollectionRequest{
		Denom: "notexists",
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditCollectionNotFound)

	resp, err := querier.CreditCollection(goCtx, &plasticcredit.QueryCreditCollectionRequest{
		Denom: s.sampleCreditDenom,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleCreditDenom, resp.CreditCollection.Denom)
}

func (s *TestSuite) TestCreditBalanceQuery() {
	s.PopulateWithSamples()

	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	querier := keeper.Querier{Keeper: k}
	sampleOwner := sample.AccAddress()

	_, err := querier.CreditBalance(goCtx, &plasticcredit.QueryCreditBalanceRequest{
		Denom: "notexists",
		Owner: sampleOwner,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditBalanceNotFound)

	// Also not found even if the denom exists, but the "owner" doesn't have any balance
	_, err = querier.CreditBalance(goCtx, &plasticcredit.QueryCreditBalanceRequest{
		Denom: s.sampleCreditDenom,
		Owner: sampleOwner,
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditBalanceNotFound)

	// Now let's create a balance
	ms := keeper.NewMsgServerImpl(k)
	_, err = ms.TransferCredits(goCtx, &plasticcredit.MsgTransferCredits{
		From:   s.sampleApplicantAdmin,
		To:     sampleOwner,
		Denom:  s.sampleCreditDenom,
		Amount: 1337,
		Retire: false,
	})
	s.Require().NoError(err)

	resp, err := querier.CreditBalance(goCtx, &plasticcredit.QueryCreditBalanceRequest{
		Denom: s.sampleCreditDenom,
		Owner: sampleOwner,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleCreditDenom, resp.Balance.Denom)
	s.Require().Equal(sampleOwner, resp.Balance.Owner)
	s.Require().Equal(uint64(1337), resp.Balance.Balance.Active)
	s.Require().Equal(uint64(0), resp.Balance.Balance.Retired)
}

func (s *TestSuite) TestCreditBalancesQuery() {
	s.PopulateWithSamples()

	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	querier := keeper.Querier{Keeper: k}

	resp1, err := querier.CreditBalances(goCtx, &plasticcredit.QueryCreditBalancesRequest{})
	s.Require().NoError(err)
	s.Require().Equal(1, len(resp1.CreditBalances))

	// Now, let's transfer some credits to other accounts, so we get a bunch of balances to query
	ms := keeper.NewMsgServerImpl(k)
	for i := 0; i < 11; i++ {
		recipient := sample.AccAddress()
		_, err = ms.TransferCredits(goCtx, &plasticcredit.MsgTransferCredits{
			From:   s.sampleApplicantAdmin,
			To:     recipient,
			Denom:  s.sampleCreditDenom,
			Amount: 1337,
			Retire: false,
		})
		s.Require().NoError(err)
	}

	resp2, err := querier.CreditBalances(goCtx, &plasticcredit.QueryCreditBalancesRequest{})
	s.Require().NoError(err)
	s.Require().Equal(12, len(resp2.CreditBalances))

	// Now, let's query with pagination
	resp3, err := querier.CreditBalances(goCtx, &plasticcredit.QueryCreditBalancesRequest{
		Pagination: query.PageRequest{
			Limit:  5,
			Offset: 0,
		},
	})
	s.Require().NoError(err)
	s.Require().Equal(5, len(resp3.CreditBalances))
}
