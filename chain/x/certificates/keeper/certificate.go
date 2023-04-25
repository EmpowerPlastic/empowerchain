package keeper

import (
	"cosmossdk.io/errors"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"golang.org/x/exp/slices"
)

func (k Keeper) GetCertificate(ctx sdk.Context, owner sdk.AccAddress, id uint64) (certificates.Certificate, bool) {
	store := k.getCertificatesStore(ctx, owner)

	key, err := certificates.CreateCertificateKey(owner, id)
	if err != nil {
		return certificates.Certificate{}, false
	}
	bz := store.Get(key)
	if len(bz) == 0 {
		return certificates.Certificate{}, false
	}
	var certificate certificates.Certificate
	k.cdc.MustUnmarshal(bz, &certificate)

	return certificate, true
}

func (k Keeper) GetAllCertificatesByOwner(ctx sdk.Context, owner sdk.AccAddress, pageReq query.PageRequest) ([]certificates.Certificate, query.PageResponse, error) {
	store := k.getCertificatesStore(ctx, owner)

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
	store := k.getCertificatesStore(ctx, nil)

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

func (k Keeper) getCertificatesStore(ctx sdk.Context, owner []byte) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	return prefix.NewStore(store, certificates.CertificateKey)
}

func (k Keeper) createCertificate(ctx sdk.Context, certificateType certificates.CertificateType, owner string, issuer string) (uint64, error) {
	params := k.GetParams(ctx)
	if len(params.AllowedIssuer) > 0 {
		if !slices.Contains(params.AllowedIssuer, issuer) {
			return 0, errors.Wrapf(sdkerrors.ErrUnauthorized, "invalid issuer %s", issuer)
		}
	}

	idc := k.GetIDCounters(ctx)
	nextID := idc.NextCertificateId
	certificate := certificates.Certificate{
		Id:     nextID,
		Type:   certificateType,
		Owner:  owner,
		Issuer: issuer,
	}
	if err := k.setCertificate(ctx, certificate); err != nil {
		return 0, err
	}
	idc.NextCertificateId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	return nextID, ctx.EventManager().EmitTypedEvent(&certificates.EventCreateCertificate{
		CertificateId:   certificate.Id,
		CertificateType: certificate.Type.String(),
		Owner:           certificate.Owner,
		Issuer:          certificate.Issuer,
	})
}

func (k Keeper) setCertificate(ctx sdk.Context, certificate certificates.Certificate) error {
	err := certificate.Validate()
	if err != nil {
		return err
	}
	store := k.getCertificatesStore(ctx, []byte(certificate.Owner))

	b, err := k.cdc.Marshal(&certificate)
	if err != nil {
		return err
	}
	owner, err := sdk.AccAddressFromBech32(certificate.Owner)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	key, _ := certificates.CreateCertificateKey(owner, certificate.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) iterateCertificates(ctx sdk.Context, handler func(certificate certificates.Certificate)) {
	store := k.getCertificatesStore(ctx, nil)

	iterator := sdk.KVStorePrefixIterator(store, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var certificate certificates.Certificate
		k.cdc.MustUnmarshal(iterator.Value(), &certificate)
		handler(certificate)
	}
}
