package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

type Querier struct {
	Keeper
}

var _ certificates.QueryServer = Querier{}

func (q Querier) Params(goCtx context.Context, req *certificates.QueryParamsRequest) (*certificates.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	params := q.GetParams(ctx)

	return &certificates.QueryParamsResponse{Params: params}, nil
}

func (q Querier) Certificates(goCtx context.Context, req *certificates.QueryCertificatesRequest) (*certificates.QueryCertificatesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	certificatesByOwner, pageRes, err := q.GetAllCertificates(ctx, req.Pagination)
	if err != nil {
		return nil, err
	}

	return &certificates.QueryCertificatesResponse{
		Certificates: certificatesByOwner,
		Pagination:   pageRes,
	}, nil
}

func (q Querier) AllCertificatesByUser(goCtx context.Context, req *certificates.QueryAllCertificatesByUserRequest) (*certificates.QueryAllCertificatesByUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	certificatesByOwner, pageRes, err := q.GetAllCertificatesByOwner(ctx, sdk.AccAddress(req.Owner), req.Pagination)
	if err != nil {
		return nil, err
	}

	return &certificates.QueryAllCertificatesByUserResponse{
		Certificates: certificatesByOwner,
		Pagination:   pageRes,
	}, nil
}

func (q Querier) Certificate(goCtx context.Context, req *certificates.QueryCertificateRequest) (*certificates.QueryCertificateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	certificate, found := q.GetCertificate(ctx, req.Owner, req.Id)
	if !found {
		return nil, errors.Wrapf(certificates.ErrCertificateNotFound, "certificate for address %s not found", req.Owner)
	}

	return &certificates.QueryCertificateResponse{
		Certificate: certificate,
	}, nil
}
