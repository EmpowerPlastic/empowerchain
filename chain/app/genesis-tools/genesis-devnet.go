package genesistools

import (
	"encoding/base64"
	"log"
	"time"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"

	"github.com/EmpowerPlastic/empowerchain/app/params"
)

// DevnetGenesisState sets the genesis state for the devnet
func DevnetGenesisState(ctx client.Context, genesisState *GenesisState, pubKey cryptotypes.PubKey, consensusPubKey string) {
	// set distribution genesis state
	SetDistributionDevnet(genesisState, pubKey)

	// set staking genesis state
	SetStakingDevnet(genesisState, pubKey, consensusPubKey)

	// set slashing genesis state
	SetSlashingDevnet(genesisState, consensusPubKey)

	// set auth and bank genesis state
	SetAuthBankDevnet(ctx.Codec, genesisState, pubKey)
}

func SetAuthBankDevnet(cdc codec.Codec, genesisState *GenesisState, pubKey cryptotypes.PubKey) {
	// add validator account in auth and bank genesis state
	accAddress := sdk.AccAddress(pubKey.Address())
	AddGenesisBaseAccountAndBalance(cdc, genesisState, accAddress, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(1000000000000))))

	bondedPoolAddress := ""
	unbondedPoolAddress := ""

	// iterate current auth genesis state to find bonded and unbonded pool addresses
	for _, accountAny := range genesisState.AuthGenesis.Accounts {
		var account authtypes.AccountI
		err := cdc.UnpackAny(accountAny, &account)
		if err == nil {
			moduleAccount, isModuleAccount := account.(authtypes.ModuleAccountI)
			if isModuleAccount {
				// check if bonded and unbonded pool accounts are already present
				if moduleAccount.GetName() == stakingtypes.BondedPoolName {
					bondedPoolAddress = account.GetAddress().String()
				} else if moduleAccount.GetName() == stakingtypes.NotBondedPoolName {
					unbondedPoolAddress = account.GetAddress().String()
				}
			}
		}
	}
	// create new bonded token pool account if not found
	if bondedPoolAddress == "" {
		bondedPoolAccount := authtypes.NewEmptyModuleAccount(stakingtypes.BondedPoolName, authtypes.Burner, authtypes.Staking)
		bondedPoolAccountAny, err := codectypes.NewAnyWithValue(bondedPoolAccount)
		if err != nil {
			log.Panic(err)
		}
		genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, bondedPoolAccountAny)
		bondedPoolAddress = bondedPoolAccount.GetAddress().String()

		// add bonded pool balance in bank genesis state
		genesisState.BankGenesis.Balances = append(genesisState.BankGenesis.Balances, banktypes.Balance{
			Address: bondedPoolAddress,
			Coins:   sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(900000000000))),
		})
	} else {
		// update bonded pool balance in bank genesis state
		for i, balance := range genesisState.BankGenesis.Balances {
			if balance.Address == bondedPoolAddress {
				genesisState.BankGenesis.Balances[i].Coins = sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(900000000000)))
			}
		}
	}
	// create new unbonded token pool account if not found
	if unbondedPoolAddress == "" {
		unbondedPoolAccount := authtypes.NewEmptyModuleAccount(stakingtypes.NotBondedPoolName, authtypes.Burner, authtypes.Staking)
		unbondedPoolAccountAny, err := codectypes.NewAnyWithValue(unbondedPoolAccount)
		if err != nil {
			log.Panic(err)
		}
		genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, unbondedPoolAccountAny)
		unbondedPoolAddress = unbondedPoolAccount.GetAddress().String()

		// add unbonded pool balance in bank genesis state
		genesisState.BankGenesis.Balances = append(genesisState.BankGenesis.Balances, banktypes.Balance{
			Address: unbondedPoolAddress,
			Coins:   sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(0))),
		})
	} else {
		// update unbonded pool balance in bank genesis state
		for i, balance := range genesisState.BankGenesis.Balances {
			if balance.Address == unbondedPoolAddress {
				genesisState.BankGenesis.Balances[i].Coins = sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(0)))
			}
		}
	}
}

// SetDistributionDevnet sets the distribution genesis state for devnet.
func SetDistributionDevnet(genesisState *GenesisState, pubKey cryptotypes.PubKey) {
	valAddress := sdk.ValAddress(pubKey.Address()).String()
	consAddress := sdk.GetConsAddress(pubKey)
	accAddress := sdk.AccAddress(pubKey.Address()).String()

	genesisState.DistrGenesis.DelegatorStartingInfos = []distrtypes.DelegatorStartingInfoRecord{
		{
			DelegatorAddress: accAddress,
			ValidatorAddress: valAddress,
			StartingInfo: distrtypes.DelegatorStartingInfo{
				PreviousPeriod: 1,
				Height:         0,
				Stake:          sdk.NewDec(900000000000),
			},
		},
	}
	genesisState.DistrGenesis.OutstandingRewards = []distrtypes.ValidatorOutstandingRewardsRecord{
		{
			ValidatorAddress: valAddress,
		},
	}
	genesisState.DistrGenesis.Params = distrtypes.DefaultParams()
	genesisState.DistrGenesis.PreviousProposer = consAddress.String()
	genesisState.DistrGenesis.ValidatorAccumulatedCommissions = []distrtypes.ValidatorAccumulatedCommissionRecord{
		{
			ValidatorAddress: valAddress,
		},
	}
	genesisState.DistrGenesis.ValidatorCurrentRewards = []distrtypes.ValidatorCurrentRewardsRecord{
		{
			ValidatorAddress: valAddress,
			Rewards: distrtypes.ValidatorCurrentRewards{
				Period: 1,
			},
		},
	}
	genesisState.DistrGenesis.ValidatorHistoricalRewards = []distrtypes.ValidatorHistoricalRewardsRecord{
		{
			ValidatorAddress: valAddress,
			Rewards: distrtypes.ValidatorHistoricalRewards{
				ReferenceCount: 2,
			},
		},
	}
}

// SetStakingDevnet sets the staking genesis state for devnet
func SetStakingDevnet(genesisState *GenesisState, pubKey cryptotypes.PubKey, consensusPubKey string) {
	valAddress := sdk.ValAddress(pubKey.Address()).String()
	accAddress := sdk.AccAddress(pubKey.Address()).String()

	genesisState.StakingGenesis.Delegations = []stakingtypes.Delegation{
		{
			DelegatorAddress: accAddress,
			ValidatorAddress: valAddress,
			Shares:           sdk.NewDec(900000000000),
		},
	}
	genesisState.StakingGenesis.Exported = true
	genesisState.StakingGenesis.LastTotalPower = sdk.NewInt(900000)
	genesisState.StakingGenesis.LastValidatorPowers = []stakingtypes.LastValidatorPower{
		{
			Address: valAddress,
			Power:   900000,
		},
	}
	genesisState.StakingGenesis.Params = stakingtypes.Params{
		UnbondingTime:     time.Second * 300,
		MaxValidators:     1,
		MaxEntries:        7,
		BondDenom:         params.BaseCoinDenom,
		HistoricalEntries: 10000,
	}
	pubKeyEdBz, err := base64.StdEncoding.DecodeString(consensusPubKey)
	if err != nil {
		log.Panic(err)
	}
	pubKeyEd := ed25519.PubKey{
		Key: pubKeyEdBz,
	}
	pubKeyEdAny, err := codectypes.NewAnyWithValue(&pubKeyEd)
	if err != nil {
		log.Panic(err)
	}
	genesisState.StakingGenesis.Validators = []stakingtypes.Validator{
		{
			Commission: stakingtypes.Commission{
				UpdateTime: time.Now(),
				CommissionRates: stakingtypes.CommissionRates{
					Rate:          sdk.NewDecWithPrec(1, 1),
					MaxRate:       sdk.NewDecWithPrec(2, 1),
					MaxChangeRate: sdk.NewDecWithPrec(1, 2),
				},
			},
			ConsensusPubkey: pubKeyEdAny,
			DelegatorShares: sdk.NewDec(900000000000),
			Description: stakingtypes.Description{
				Moniker: "Empower Validator",
			},
			Jailed:            false,
			MinSelfDelegation: sdk.NewInt(1),
			OperatorAddress:   valAddress,
			Status:            stakingtypes.Bonded,
			Tokens:            sdk.NewInt(900000000000),
			UnbondingHeight:   0,
			UnbondingTime:     time.Time{},
		},
	}
}

// SetSlashingDevnet sets the slashing genesis state for devne
func SetSlashingDevnet(genesisState *GenesisState, consensusPubKey string) {
	pubKeyConsBz, err := base64.StdEncoding.DecodeString(consensusPubKey)
	if err != nil {
		log.Panic(err)
	}
	pubKeyCons := ed25519.PubKey{
		Key: pubKeyConsBz,
	}
	consAddress := sdk.GetConsAddress(&pubKeyCons)

	genesisState.SlashingGenesis.SigningInfos = []slashingtypes.SigningInfo{
		{
			Address: consAddress.String(),
			ValidatorSigningInfo: slashingtypes.ValidatorSigningInfo{
				StartHeight:         0,
				IndexOffset:         6,
				JailedUntil:         time.Time{},
				Tombstoned:          false,
				MissedBlocksCounter: 0,
				Address:             consAddress.String(),
			},
		},
	}
}
