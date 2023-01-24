package keeper

import (
	"context"

	"cosmossdk.io/errors"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
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

func (k Querier) CreditClasses(goCtx context.Context, req *plasticcredit.QueryCreditClassesRequest) (*plasticcredit.QueryCreditClassesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditClasses, pageRes, err := k.GetCreditClasses(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryCreditClassesResponse{
		CreditClasses: creditClasses,
		Pagination:    pageRes,
	}, nil
}

func (k Querier) CreditClass(goCtx context.Context, req *plasticcredit.QueryCreditClassRequest) (*plasticcredit.QueryCreditClassResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	creditClass, found := k.GetCreditClass(ctx, req.CreditClassAbbreviation)
	if !found {
		return nil, errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with abbreviation: %s was not found", req.CreditClassAbbreviation)
	}

	return &plasticcredit.QueryCreditClassResponse{
		CreditClass: creditClass,
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
