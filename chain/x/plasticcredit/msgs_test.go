package plasticcredit

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/stretchr/testify/require"
)

type validateTest struct {
	msgUnderTest  sdk.Msg
	expectedError error
}

func TestMsgUpdateParamsValidateBasic(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgUpdateParams{
				Authority: sample.AccAddress(),
				Params: Params{
					IssuerCreator: sample.AccAddress(),
				},
			},
			expectedError: nil,
		},
		"invalid authority": {
			msgUnderTest: &MsgUpdateParams{
				Authority: "invalid",
				Params: Params{
					IssuerCreator: sample.AccAddress(),
				},
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"invalid params": {
			msgUnderTest: &MsgUpdateParams{
				Authority: sample.AccAddress(),
				Params: Params{
					IssuerCreator: "invalid",
				},
			},
			expectedError: ErrInvalidParams,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.msgUnderTest.ValidateBasic()

			require.ErrorIs(t, err, tc.expectedError)
		})
	}
}

func TestMsgCreateIssuerValidateBasic(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     sample.AccAddress(),
				Name:        "Empower",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: nil,
		},
		"invalid creator": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     "invalid",
				Name:        "Empower",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"invalid admin": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     sample.AccAddress(),
				Name:        "Empower",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       "invalid",
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"empty name - not allowed": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     sample.AccAddress(),
				Name:        "",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: ErrInvalidIssuerName,
		},
		"empty description - allowed": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     sample.AccAddress(),
				Name:        "Empower",
				Description: "",
				Admin:       sample.AccAddress(),
			},
			expectedError: nil,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.msgUnderTest.ValidateBasic()

			require.ErrorIs(t, err, tc.expectedError)
		})
	}
}
