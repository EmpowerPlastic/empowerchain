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
	store := k.getCertificatesStore(ctx)

	key, _ := certificates.CreateCertificateKey(owner, id)
	bz := store.Get(key)
	if bz == nil {
		return certificates.Certificate{}, false
	}
	var certificate certificates.Certificate
	k.cdc.MustUnmarshal(bz, &certificate)

	return certificate, true
}

func (k Keeper) GetAllCertificatesByOwner(ctx sdk.Context, owner sdk.AccAddress, pageReq query.PageRequest) ([]certificates.Certificate, query.PageResponse, error) {
	store := k.getCertificatesStore(ctx)

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

func (k Keeper) getCertificatesStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	certificatesStore := prefix.NewStore(store, certificates.CertificateKey)

	return certificatesStore
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
	store := k.getCertificatesStore(ctx)

	key, _ := certificates.CreateCertificateKey(sdk.AccAddress(certificate.Owner), certificate.Id)
	bz, err := k.cdc.Marshal(&certificate)
	if err != nil {
		return err
	}

	store.Set(key, bz)

	return nil
}

func (k Keeper) iterateCertificates(ctx sdk.Context, handler func(certificate certificates.Certificate)) {
	store := k.getCertificatesStore(ctx)

	iterator := sdk.KVStorePrefixIterator(store, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var certificate certificates.Certificate
		k.cdc.MustUnmarshal(iterator.Value(), &certificate)
		handler(certificate)
	}
}
