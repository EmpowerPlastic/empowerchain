package genesistools

import (
	"encoding/json"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"os"
)

// Used for airdrops and testnet rewards
type GenesisAccount struct {
	Address string  `json:"address"`
	Tokens  float64 `json:"tokens"`
}

func addMainnetAirdropAndRewardsToGenesisAccountConfig() {
	airdropAccounts := readGenesisAccountsFromJsonFile("accounts-airdrop.json")
	testnetRewardAccounts := readGenesisAccountsFromJsonFile("accounts-testnet-rewards.json")

	addressTokensMap := make(map[string]float64)

	// Go through the first array
	totalAirdropTokens := 0.0
	for _, account := range airdropAccounts {
		addressTokensMap[account.Address] += account.Tokens
		totalAirdropTokens += account.Tokens
	}
	fmt.Printf("Total airdrop tokens: %f\n", totalAirdropTokens)

	// Go through the second array
	totalTestnetRewardTokens := 0.0
	for _, account := range testnetRewardAccounts {
		addressTokensMap[account.Address] += account.Tokens
		totalTestnetRewardTokens += account.Tokens
	}
	fmt.Printf("Total testnet reward tokens: %f\n", totalTestnetRewardTokens)

	totalTokens := 0.0
	totalAddreesses := 0
	for address, tokens := range addressTokensMap {
		_, err := sdk.AccAddressFromBech32(address)
		if err != nil {
			panic(err)
		}

		totalAddreesses++

		genesisAccountConfigs[address] = &genesisAccountConfig{
			amount:      tokens,
			accountType: vestingAccount0plus1,
			address:     address,
		}

		totalTokens += tokens
	}

	fmt.Printf("Total addresses: %d\n", totalAddreesses)
	fmt.Printf("Total airdrop and reward tokens: %f\n", totalTokens)

}

func readGenesisAccountsFromJsonFile(filename string) []GenesisAccount {
	file, err := os.Open(fmt.Sprintf("app/genesis-tools/%s", filename))
	if err != nil {
		panic(err)
	}
	defer file.Close()

	var accounts []GenesisAccount
	dec := json.NewDecoder(file)
	if err := dec.Decode(&accounts); err != nil {
		fmt.Println("Error decoding JSON:", err)
		panic(err)
	}

	return accounts
}
