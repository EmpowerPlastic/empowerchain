package params

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	humanCoinUnit = "mpwr"
	baseCoinUnit  = "umpwr"
	coinExponent  = 6

	DefaultBondDenom = baseCoinUnit

	Bech32AccountPrefix = "empower"
)

func SetAddressPrefixes() {
	accountPubKeyPrefix := Bech32AccountPrefix + "pub"
	validatorAddressPrefix := Bech32AccountPrefix + "valoper"
	validatorPubKeyPrefix := Bech32AccountPrefix + "valoperpub"
	consNodeAddressPrefix := Bech32AccountPrefix + "valcons"
	consNodePubKeyPrefix := Bech32AccountPrefix + "valconspub"

	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(Bech32AccountPrefix, accountPubKeyPrefix)
	config.SetBech32PrefixForValidator(validatorAddressPrefix, validatorPubKeyPrefix)
	config.SetBech32PrefixForConsensusNode(consNodeAddressPrefix, consNodePubKeyPrefix)
	config.Seal()
}

// RegisterDenoms registers token denoms.
func RegisterDenoms() {
	err := sdk.RegisterDenom(humanCoinUnit, sdk.OneDec())
	if err != nil {
		panic(err)
	}
	err = sdk.RegisterDenom(baseCoinUnit, sdk.NewDecWithPrec(1, coinExponent))
	if err != nil {
		panic(err)
	}
}
