package params

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	HumanCoinDenom = "mpwr"
	BaseCoinDenom  = "umpwr"
	CoinExponent   = 6

	DefaultBondDenom = BaseCoinDenom

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
}

// RegisterDenoms registers token denoms.
func RegisterDenoms() {
	err := sdk.RegisterDenom(HumanCoinDenom, sdk.OneDec())
	if err != nil {
		panic(err)
	}
	err = sdk.RegisterDenom(BaseCoinDenom, sdk.NewDecWithPrec(1, CoinExponent))
	if err != nil {
		panic(err)
	}
}
