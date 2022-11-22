package types

var (
	ParamsKey = []byte{0x00}
	IssuerKey = []byte{0x01}
)

const (
	// ModuleName defines the module name
	ModuleName = "plasticcredit"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_plasticcredit"
)
