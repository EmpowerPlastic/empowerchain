package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateIssuer{}, "plasticcredit/CreateIssuer", nil)
	cdc.RegisterConcrete(&MsgCreateCollector{}, "plasticcredit/CreateCollector", nil)
	cdc.RegisterConcrete(&MsgCreateProject{}, "plasticcredit/CreateProject", nil)
	cdc.RegisterConcrete(&MsgCreateCreditClass{}, "plasticcredit/CreateCreditClass", nil)
	cdc.RegisterConcrete(&MsgIssueCredits{}, "plasticcredit/IssueCredits", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateIssuer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCollector{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProject{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCreditClass{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgIssueCredits{},
	)

	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
