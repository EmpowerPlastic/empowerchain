package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

type Querier struct {
	Keeper
}

var _ plasticcredit.QueryServer = Querier{}

func (k Querier) Params(goCtx context.Context, req *plasticcredit.QueryParamsRequest) (*plasticcredit.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	params := k.GetParams(ctx)

	return &plasticcredit.QueryParamsResponse{Params: params}, nil
}

func (k Querier) Issuers(goCtx context.Context, req *plasticcredit.QueryIssuersRequest) (*plasticcredit.QueryIssuersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	issuers, pageRes, err := k.GetIssuers(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryIssuersResponse{
		Issuers:    issuers,
		Pagination: pageRes,
	}, nil
}

func (k Querier) Issuer(goCtx context.Context, req *plasticcredit.QueryIssuerRequest) (*plasticcredit.QueryIssuerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	issuer, found := k.GetIssuer(ctx, req.IssuerId)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id: %d was not found", req.IssuerId)
	}

	return &plasticcredit.QueryIssuerResponse{
		Issuer: issuer,
	}, nil
}

func (k Querier) Applicants(goCtx context.Context, req *plasticcredit.QueryApplicantsRequest) (*plasticcredit.QueryApplicantsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	applicants, pageRes, err := k.GetApplicants(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryApplicantsResponse{
		Applicants: applicants,
		Pagination: pageRes,
	}, nil
}

func (k Querier) Applicant(goCtx context.Context, req *plasticcredit.QueryApplicantRequest) (*plasticcredit.QueryApplicantResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	applicant, found := k.GetApplicant(ctx, req.ApplicantId)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id: %d was not found", req.ApplicantId)
	}

	return &plasticcredit.QueryApplicantResponse{
		Applicant: applicant,
	}, nil
}

func (k Querier) CreditTypes(goCtx context.Context, req *plasticcredit.QueryCreditTypesRequest) (*plasticcredit.QueryCreditTypesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditTypes, pageRes, err := k.GetCreditTypes(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryCreditTypesResponse{
		CreditTypes: creditTypes,
		Pagination:  pageRes,
	}, nil
}

func (k Querier) CreditType(goCtx context.Context, req *plasticcredit.QueryCreditTypeRequest) (*plasticcredit.QueryCreditTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditType, found := k.GetCreditType(ctx, req.CreditTypeAbbreviation)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbreviation: %s was not found", req.CreditTypeAbbreviation)
	}

	return &plasticcredit.QueryCreditTypeResponse{
		CreditType: creditType,
	}, nil
}

func (k Querier) Projects(goCtx context.Context, req *plasticcredit.QueryProjectsRequest) (*plasticcredit.QueryProjectsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	projects, pageRes, err := k.GetProjects(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryProjectsResponse{
		Projects:   projects,
		Pagination: pageRes,
	}, nil
}

func (k Querier) Project(goCtx context.Context, req *plasticcredit.QueryProjectRequest) (*plasticcredit.QueryProjectResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	project, found := k.GetProject(ctx, req.ProjectId)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id: %d was not found", req.ProjectId)
	}

	return &plasticcredit.QueryProjectResponse{
		Project: project,
	}, nil
}

func (k Querier) CreditCollection(goCtx context.Context, req *plasticcredit.QueryCreditCollectionRequest) (*plasticcredit.QueryCreditCollectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditCollection, found := k.GetCreditCollection(ctx, req.Denom)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrCreditCollectionNotFound, "credit collection with denom %s nom found", req.Denom)
	}

	return &plasticcredit.QueryCreditCollectionResponse{
		CreditCollection: creditCollection,
	}, nil
}

func (k Querier) CreditBalances(goCtx context.Context, req *plasticcredit.QueryCreditBalancesRequest) (*plasticcredit.QueryCreditBalancesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditBalances, pageRes, err := k.GetCreditBalances(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryCreditBalancesResponse{
		CreditBalances: creditBalances,
		Pagination:     pageRes,
	}, nil
}

func (k Querier) CreditBalance(goCtx context.Context, req *plasticcredit.QueryCreditBalanceRequest) (*plasticcredit.QueryCreditBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	owner, err := sdk.AccAddressFromBech32(req.Owner)
	if err != nil {
		return &plasticcredit.QueryCreditBalanceResponse{}, err
	}
	creditBalance, found := k.GetCreditBalance(ctx, owner, req.Denom)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrCreditBalanceNotFound, "balance for address %s and denom %s not found", req.Owner, req.Denom)
	}

	return &plasticcredit.QueryCreditBalanceResponse{
		Balance: creditBalance,
	}, nil
}
