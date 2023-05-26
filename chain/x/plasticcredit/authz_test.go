package plasticcredit

import (
	"testing"

	dbm "github.com/cometbft/cometbft-db"
	"github.com/cometbft/cometbft/libs/log"
	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	"github.com/cosmos/cosmos-sdk/store"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/authz"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
)

func TestTransferAuthorization_MsgTypeURL(t *testing.T) {
	authorization := TransferAuthorization{
		Denom:      "PTEST",
		MaxCredits: 42,
	}
	require.Equal(t, authorization.MsgTypeURL(), "/empowerchain.plasticcredit.MsgTransferCredits")
}

func TestTransferAuthorization_ValidateBasic(t *testing.T) {
	testCases := map[string]struct {
		authorization TransferAuthorization
		err           error
	}{
		"happy path": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1_000_000_000,
			},
			err: nil,
		},
		"invalid denom": {
			authorization: TransferAuthorization{
				Denom:      "",
				MaxCredits: 1337,
			},
			err: utils.ErrInvalidValue,
		},
		"invalid number of credits": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 0,
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.authorization.ValidateBasic()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestTransferAuthorization_Accept(t *testing.T) {
	fromAddr := sample.AccAddress()
	toAddr := sample.AccAddress()

	testCases := map[string]struct {
		authorization    TransferAuthorization
		expectedResponse authz.AcceptResponse
		msg              sdk.Msg
		err              error
	}{
		"happy path with no remaining allowance": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1000,
			},
			expectedResponse: authz.AcceptResponse{
				Accept:  true,
				Delete:  true,
				Updated: nil,
			},
			msg: &MsgTransferCredits{
				From:   fromAddr,
				To:     toAddr,
				Denom:  "PTEST",
				Amount: 1000,
				Retire: false,
			},
			err: nil,
		},
		"happy path with remaining allowance": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1000,
			},
			expectedResponse: authz.AcceptResponse{
				Accept: true,
				Delete: false,
				Updated: &TransferAuthorization{
					Denom:      "PTEST",
					MaxCredits: 958,
				},
			},
			msg: &MsgTransferCredits{
				From:   fromAddr,
				To:     toAddr,
				Denom:  "PTEST",
				Amount: 42,
				Retire: false,
			},
			err: nil,
		},
		"invalid msg type": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1000,
			},
			expectedResponse: authz.AcceptResponse{},
			msg: &banktypes.MsgSend{
				FromAddress: fromAddr,
				ToAddress:   toAddr,
				Amount: []sdk.Coin{{
					Denom:  "PTEST",
					Amount: sdk.NewInt(1000),
				}},
			},
			err: sdkerrors.ErrInvalidType,
		},
		"not enough allowance": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1000,
			},
			expectedResponse: authz.AcceptResponse{},
			msg: &MsgTransferCredits{
				From:   fromAddr,
				To:     toAddr,
				Denom:  "PTEST",
				Amount: 1001,
				Retire: false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"wrong denom": {
			authorization: TransferAuthorization{
				Denom:      "PTEST",
				MaxCredits: 1001,
			},
			expectedResponse: authz.AcceptResponse{},
			msg: &MsgTransferCredits{
				From:   fromAddr,
				To:     toAddr,
				Denom:  "VRP",
				Amount: 1001,
				Retire: false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			ctx := CreateTestContext(t)
			resp, err := tc.authorization.Accept(ctx, tc.msg)

			require.ErrorIs(t, err, tc.err)
			require.Equal(t, tc.expectedResponse, resp)
		})
	}
}

// TODO: Change to just use `testutil.DefaultContextWithDB` (which this is a copy of) after upgrading to 0.47
func CreateTestContext(t *testing.T) sdk.Context {
	db := dbm.NewMemDB()
	cms := store.NewCommitMultiStore(db)
	cms.MountStoreWithDB(sdk.NewKVStoreKey(StoreKey), storetypes.StoreTypeIAVL, db)
	cms.MountStoreWithDB(sdk.NewTransientStoreKey("transient_test"), storetypes.StoreTypeTransient, db)
	err := cms.LoadLatestVersion()
	assert.NoError(t, err)

	return sdk.NewContext(cms, tmproto.Header{}, false, log.NewNopLogger())
}
