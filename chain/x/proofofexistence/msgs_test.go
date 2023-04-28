package proofofexistence

import (
	"encoding/hex"
	"testing"

	"github.com/cometbft/cometbft/crypto"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
)

const testData = "This is just some random test data to be hashed. 42."

func TestMsgCreateProof_ValidateBasic(t *testing.T) {
	hash := crypto.Sha256([]byte(testData))
	sha256hex := hex.EncodeToString(hash)

	tests := map[string]struct {
		name string
		msg  MsgCreateProof
		err  error
	}{
		"valid address and valid hash": {
			msg: MsgCreateProof{
				Creator: sample.AccAddress(),
				Hash:    sha256hex,
			},
		},
		"invalid address": {
			msg: MsgCreateProof{
				Creator: "invalid_address",
				Hash:    sha256hex,
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid hex": {
			msg: MsgCreateProof{
				Creator: sample.AccAddress(),
				Hash:    "this is not hex!",
			},
			err: ErrInvalidProof,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
