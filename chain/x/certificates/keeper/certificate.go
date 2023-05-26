package keeper

import (
	"encoding/json"

	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"golang.org/x/exp/slices"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

func (k Keeper) GetCertificate(ctx sdk.Context, owner string, id uint64) (certificates.Certificate, bool) {
	accAddress := sdk.AccAddress(owner)
	store := k.getCertificatesStoreByOwner(ctx, accAddress)
	key := certificates.CreateKeyFromUint64(id)
	bz := store.Get(key)
	if len(bz) == 0 {
		return certificates.Certificate{}, false
	}
	var certificate certificates.Certificate
	k.cdc.MustUnmarshal(bz, &certificate)

	return certificate, true
}

func (k Keeper) GetAllCertificatesByOwner(ctx sdk.Context, owner sdk.AccAddress, pageReq query.PageRequest) ([]certificates.Certificate, query.PageResponse, error) {
	store := k.getCertificatesStoreByOwner(ctx, owner)

	var allCertificates []certificates.Certificate
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var certificate certificates.Certificate
		if err := k.cdc.Unmarshal(value, &certificate); err != nil {
			return err
		}
		allCertificates = append(allCertificates, certificate)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return allCertificates, *pageRes, nil
}

func (k Keeper) GetAllCertificates(ctx sdk.Context, pageReq query.PageRequest) ([]certificates.Certificate, query.PageResponse, error) {
	store := k.getCertificateStore(ctx)

	var allCertificates []certificates.Certificate
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var certificate certificates.Certificate
		if err := k.cdc.Unmarshal(value, &certificate); err != nil {
			return err
		}
		allCertificates = append(allCertificates, certificate)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return allCertificates, *pageRes, nil
}

func (k Keeper) getCertificatesStoreByOwner(ctx sdk.Context, owner []byte) storetypes.KVStore {
	certificateStore := k.getCertificateStore(ctx)
	return prefix.NewStore(certificateStore, owner)
}

func (k Keeper) getCertificateStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	return prefix.NewStore(store, certificates.CertificateKey)
}

func (k Keeper) createCertificate(ctx sdk.Context, req *certificates.MsgCreateCertificate) (uint64, error) {
	params := k.GetParams(ctx)
	if len(params.AllowedIssuers) > 0 {
		if !slices.Contains(params.AllowedIssuers, req.Issuer) {
			return 0, errors.Wrapf(sdkerrors.ErrUnauthorized, "issuer %s not in list of allowed issuers", req.Issuer)
		}
	}
	return k.CreateCertificateSkipAllowedIssuers(ctx, req)
}

func (k Keeper) CreateCertificateSkipAllowedIssuers(ctx sdk.Context, req *certificates.MsgCreateCertificate) (uint64, error) {
	idc := k.GetIDCounters(ctx)
	nextID := idc.NextCertificateId
	certificate := certificates.Certificate{
		Id:             nextID,
		Type:           req.Type,
		Owner:          req.Owner,
		Issuer:         req.Issuer,
		AdditionalData: req.AdditionalData,
	}
	if err := k.setCertificate(ctx, certificate); err != nil {
		return 0, err
	}
	idc.NextCertificateId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	jsonData, err := json.Marshal(certificate.AdditionalData)
	if err != nil {
		return 0, err
	}

	return nextID, ctx.EventManager().EmitTypedEvent(&certificates.EventCreateCertificate{
		CertificateId:   certificate.Id,
		CertificateType: certificate.Type.String(),
		Owner:           certificate.Owner,
		Issuer:          certificate.Issuer,
		AdditionalData:  string(jsonData),
	})
}

func (k Keeper) setCertificate(ctx sdk.Context, certificate certificates.Certificate) error {
	err := certificate.Validate()
	if err != nil {
		return err
	}
	store := k.getCertificatesStoreByOwner(ctx, sdk.AccAddress(certificate.Owner))

	b, err := k.cdc.Marshal(&certificate)
	if err != nil {
		return err
	}
	key := certificates.CreateKeyFromUint64(certificate.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) iterateCertificates(ctx sdk.Context, handler func(certificate certificates.Certificate)) {
	store := k.getCertificateStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var certificate certificates.Certificate
		k.cdc.MustUnmarshal(iterator.Value(), &certificate)
		handler(certificate)
	}
}
