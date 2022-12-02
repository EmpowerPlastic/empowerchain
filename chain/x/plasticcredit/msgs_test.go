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
			expectedError: sdkerrors.ErrInvalidAddress,
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
		"empty name not allowed": {
			msgUnderTest: &MsgCreateIssuer{
				Creator:     sample.AccAddress(),
				Name:        "",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"empty description allowed": {
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

func TestMsgIssueCreditsValidateBasic(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    1,
				SerialNumber: "123",
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: nil,
		},
		"invalid creator": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      "Empower",
				ProjectId:    1,
				SerialNumber: "123",
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"invalid project id": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				SerialNumber: "123",
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid serial number": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    1,
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid credit amount": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    1,
				SerialNumber: "123",
				CreditAmount: 0,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid data URI": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    1,
				SerialNumber: "123",
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid data hash": {
			msgUnderTest: &MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    1,
				SerialNumber: "123",
				CreditAmount: 10,
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "a b",
					},
				},
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
	}
	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.msgUnderTest.ValidateBasic()
			require.ErrorIs(t, err, tc.expectedError)
		})
	}
}

func TestMsgTransferCredits(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgTransferCredits{
				From:   sample.AccAddress(),
				To:     sample.AccAddress(),
				Denom:  "EMP/123",
				Amount: 100,
				Retire: false,
			},
			expectedError: nil,
		},
		"invalid from": {
			msgUnderTest: &MsgTransferCredits{
				From:   "Empower",
				To:     sample.AccAddress(),
				Denom:  "EMP/123",
				Amount: 100,
				Retire: false,
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"invalid to": {
			msgUnderTest: &MsgTransferCredits{
				From:   sample.AccAddress(),
				To:     "Empower",
				Denom:  "EMP/123",
				Amount: 100,
				Retire: false,
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"invalid denom": {
			msgUnderTest: &MsgTransferCredits{
				From:   sample.AccAddress(),
				To:     sample.AccAddress(),
				Denom:  "",
				Amount: 100,
				Retire: false,
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid amount": {
			msgUnderTest: &MsgTransferCredits{
				From:   sample.AccAddress(),
				To:     sample.AccAddress(),
				Denom:  "EMP/123",
				Amount: 0,
				Retire: false,
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
	}
	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.msgUnderTest.ValidateBasic()

			require.ErrorIs(t, err, tc.expectedError)
		})
	}
}

func TestMsgRetireCredits(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgRetireCredits{
				Owner:  sample.AccAddress(),
				Denom:  "EMP/123",
				Amount: 100,
			},
			expectedError: nil,
		},
		"invalid denom": {
			msgUnderTest: &MsgRetireCredits{
				Owner:  sample.AccAddress(),
				Denom:  "",
				Amount: 100,
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"invalid amount": {
			msgUnderTest: &MsgRetireCredits{
				Owner:  sample.AccAddress(),
				Denom:  "EMP/123",
				Amount: 0,
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
	}
	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.msgUnderTest.ValidateBasic()

			require.ErrorIs(t, err, tc.expectedError)
		})
	}
}

func TestMsgCreateApplicantValidateBasic(t *testing.T) {
	testCases := map[string]validateTest{
		"happy path": {
			msgUnderTest: &MsgCreateApplicant{
				Name:        "Empower",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: nil,
		},
		"invalid admin": {
			msgUnderTest: &MsgCreateApplicant{
				Name:        "Empower",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       "invalid",
			},
			expectedError: sdkerrors.ErrInvalidAddress,
		},
		"empty name not allowed": {
			msgUnderTest: &MsgCreateApplicant{
				Name:        "",
				Description: "Empower is the first and coolest plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			expectedError: sdkerrors.ErrInvalidRequest,
		},
		"empty description allowed": {
			msgUnderTest: &MsgCreateApplicant{
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
