package genesistools

import (
	"encoding/binary"
	"fmt"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/cosmos/cosmos-sdk/client"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	vestingtypes "github.com/cosmos/cosmos-sdk/x/auth/vesting/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	grouptypes "github.com/cosmos/cosmos-sdk/x/group"
	groupkeeper "github.com/cosmos/cosmos-sdk/x/group/keeper"
	"github.com/cosmos/gogoproto/proto"
	"strconv"
	"time"
)

const (
	genesisAmount uint64 = 200_000_000 // $MPWR
	govModuleAccountAddress = "empower10d07y265gmmuvt4z0w9aw880jnsr700jxwhwvd" // TODO: Should we not hardcode this, or is it fine?
)

type accountType int

const (
	basicAccount accountType = iota
	groupPolicyAccount
	permaLockGroupPolicyAccount
	vestingGroupPolicyAccount5plus5
	vestingAccount1plus1
	vestingAccount2plus1
	vestingAccount4plus1
)

type groupConfig struct {
	id                uint64
	admin             string
	memberAccountRefs []string
	metadata          string
}

type genesisAccountConfig struct {
	amount      uint64
	accountType accountType
	address     string
	groupRef    string // Only needed for group policy accounts
	metadata    string // Only relevant for group policy accounts
}

var defaultGroupVotingTime = time.Hour * 336

// IF I NEED SOME MORE MAGIC: https://github.com/crescent-network/genesis-wrapper/blob/main/cmd/wrapper/cmd/genaccounts.go

var genesisAccountConfigs = map[string]*genesisAccountConfig{
	"P-1": {
		amount:      3,
		accountType: basicAccount,
		address:     "empower1fqsfh795c3cvvhkd6nd2036mzavrnchny0j3u3", // FINAL ADDRESS
	},
	"P-2": {
		amount:      3,
		accountType: basicAccount,
		address:     "empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"P-3": {
		amount:      3,
		accountType: basicAccount,
		address: "empower1zarf8u5g7ztkary6hvtrgsvzydme47dldh957r", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"A-1": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata: "Tech deployment",
		groupRef: "G-1",
	},
	"A-2": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata: "Tech funding",
		groupRef: "G-2",
	},
	"A-3": {
		amount:      22_000_000,
		accountType: groupPolicyAccount,
		metadata: "Deposit app usage incentives",
		groupRef: "G-3",
	},
	"A-4": {
		amount:      6_000_000,
		accountType: groupPolicyAccount,
		metadata: "Plastic credit usage incentives",
		groupRef: "G-3",
	},
	"A-5": {
		amount:      20_000_000,
		accountType: groupPolicyAccount,
		metadata: "Future airdrops, etc",
		groupRef: "G-3",
	},
	"A-6": {
		amount:      10_000_000,
		accountType: permaLockGroupPolicyAccount,
		metadata: "Permalock impact staking",
		groupRef: "G-4",
	},
	"A-7": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata: "Grants",
		groupRef: "G-4",
	},
	"A-8": {
		amount:      40_000_000 + 18_004_001, // TODO: The + part is the left-over from pp, update as it changes
		accountType: groupPolicyAccount,
		metadata: "Community growth",
		groupRef: "G-4",
	},
	"A-9": {
		amount:      50_000_000,
		accountType: groupPolicyAccount,
		metadata: "Empower Platform user incentives",
		groupRef: "G-5",
	},
	"A-10": {
		amount:      15_000_000,
		accountType: vestingGroupPolicyAccount5plus5,
		metadata: "Strategic reserve",
		groupRef: "G-5",
	},
	"A-11": {
		amount:      15_000_000,
		accountType: groupPolicyAccount,
		metadata: "Empower team vesting",
		groupRef: "G-5",
	},
	"A-12": {
		amount:      2_000_000,
		accountType: groupPolicyAccount,
		metadata: "Global waste lottery",
		groupRef: "G-3",
	},
	"A-13": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata: "Empower admin",
		groupRef: "G-5",
	},
	"B-1": {
		amount:      1_500_000,
		accountType: vestingAccount1plus1,
		address:     "empower1vznalsh2nksqwf2jcnf53qdn8k5mpqzd008fpq", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-2": {
		amount: 6250,
		accountType: vestingAccount1plus1,
		address: "empower12qjmcrqvh7cpr2a9fkmxdzpp4hfxjvgpwf46hr", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-3": {
		amount: 31_250,
		accountType: vestingAccount1plus1,
		address: "empower16j4xwle2jq7vsumj6l7qqsmkwkpx3n597gkw2w", // FINAL ADDRESS
	},
	"B-4": {
		amount: 44_100,
		accountType: vestingAccount1plus1,
		address: "empower12znl5wmw4246d8k6vxsyel6ujjtmxtmhu2kre7", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-5": {
		amount: 20_000,
		accountType: vestingAccount2plus1,
		address: "empower1nz805zqx3zp37psk2slwmzus877vr74qnczlgx", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-6": {
		amount: 20_000,
		accountType: vestingAccount4plus1,
		address: "empower1vv347qn3tmmjjkqzwpwfmtavz4y0lumtwuckq6", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-7": {
		amount: 53_571,
		accountType: vestingAccount4plus1,
		address: "empower14s52c5g66m0x93veef7x9v5dt0ecyxg8cjh8dc", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-8": {
		amount: 147_059,
		accountType: vestingAccount2plus1,
		address: "empower1vtgdhn3n0qc8ht48ztp07c8wjffh4s7rt92xka", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-9": {
		amount: 14_706,
		accountType: vestingAccount2plus1,
		address: "empower1l0za7lzkltjzhlnl9j09z8lacth8dwgknxn9u6", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-10": {
		amount: 10_000,
		accountType: vestingAccount2plus1,
		address: "empower1cdqxk90gthpr6fjyv0amxujsg3qwq86lz34vp7", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-11": {
		amount: 12_500,
		accountType: vestingAccount1plus1,
		address: "empower19ruusnhhjw8qqt0yuhl9xplfta54e4s8mn9uj2", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-12": {
		amount: 29_412,
		accountType: vestingAccount2plus1,
		address: "empower1ymuw3f9v45lg2dfkspmelal5qeam02a3ct8trh", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-13": {
		amount: 12_500,
		accountType: vestingAccount1plus1,
		address: "empower183q74xczj0lhdvgukd40fqeanvlykcptfduupt", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-14": {
		amount: 53_571,
		accountType: vestingAccount4plus1,
		address: "empower10phczzl6suv6q02hgsx9jnhy7jjwudgxp6qrd6", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"B-15": {
		amount: 41_071,
		accountType: vestingAccount4plus1,
		address: "empower198r36k3ze8q6nlyn5laudzjtens8xvar76cr28", // TODO: REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
}

// Make sure only setting P addresses as admin
var genesisGroupConfigs = map[string]*groupConfig{
	"G-1": {
		id:                0, // Will be set later
		admin:             genesisAccountConfigs["P-1"].address,
		memberAccountRefs: []string{"P-1", "P-2"}, // TODO: Update later with real members
		metadata:          "EmpowerChain Tech deployment",
	},
	"G-2": {
		id:                0, // Will be set later
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2"}, // TODO: Update later with real members
		metadata:          "EmpowerChain Tech funding",
	},
	"G-3": {
		id:                0, // Will be set later
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2"}, // TODO: Update later with real members
		metadata:          "Usage incentives",
	},
	"G-4": {
		id:                0, // Will be set later
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2"}, // TODO: Update later with real members
		metadata:          "EmpowerChain impact and growth",
	},
	"G-5": {
		id:                0, // Will be set later
		admin:             genesisAccountConfigs["P-1"].address,
		memberAccountRefs: []string{"P-1", "P-2"}, // TODO: Update later with real members
		metadata:          "Empower",
	},
}

// MainnetGenesisState sets the genesis state for the mainnet
func MainnetGenesisState(ctx client.Context, genesisState *GenesisState) {
	addGovModuleAccount(genesisState)
	addMainnetGroups(genesisState)
	addMainnetAccounts(genesisState)
	verifyGenesisAmount(genesisState)

	// TODO: DISABLE IBC
	// TODO: DISABLE REWARDS
	// TODO: COSMWASM PERMISSIONS
}

func verifyGenesisAmount(genesisState *GenesisState) {
	genesisTargetAmountInMicro := genesisAmount * 1_000_000
	actualAmount := uint64(0)
	for _, balance := range genesisState.BankGenesis.Balances {
		found, coin := balance.Coins.Find(params.BaseCoinDenom)
		if !found {
			panic("empty balance in bank")
		}
		actualAmount += coin.Amount.Uint64()
	}
	if actualAmount != genesisTargetAmountInMicro {
		panic(fmt.Sprintf("actual amount %d != target amount %d", actualAmount, genesisTargetAmountInMicro))
	}
}

func addMainnetAccounts(genesisState *GenesisState) {
	for _, accountConfig := range genesisAccountConfigs {
		amountInMicro := accountConfig.amount * 1000000
		amountInCoins := sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewIntFromUint64(amountInMicro)))

		var account proto.Message
		var accAddress sdk.AccAddress
		switch accountConfig.accountType {
		case basicAccount:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			account = authtypes.NewBaseAccountWithAddress(accAddress)
		case groupPolicyAccount:
			genesisState.GroupGenesis.GroupPolicySeq++
			// Just to do it exactly like in the group module
			derivationKey := make([]byte, 8)
			binary.BigEndian.PutUint64(derivationKey, genesisState.GroupGenesis.GroupPolicySeq)
			pubKey, err := authtypes.NewModuleCredential(grouptypes.ModuleName, []byte{groupkeeper.GroupPolicyTablePrefix}, derivationKey)
			if err != nil {
				panic(err)
			}
			baseAccount, err := authtypes.NewBaseAccountWithPubKey(pubKey)
			if err != nil {
				panic(err)
			}
			accAddress = baseAccount.GetAddress()
			accountConfig.address = accAddress.String()
			account = baseAccount

			decisionPolicy := grouptypes.NewPercentageDecisionPolicy("0.51", defaultGroupVotingTime, 0)
			groupCfg := genesisGroupConfigs[accountConfig.groupRef]
			if groupCfg.id == 0 {
				panic(fmt.Sprintf("Group %s missing id", accountConfig.groupRef))
			}
			groupPolicy, err := grouptypes.NewGroupPolicyInfo(accAddress, groupCfg.id, sdk.MustAccAddressFromBech32(groupCfg.admin), accountConfig.metadata, 1, decisionPolicy, genesisState.GenesisTime)
			if err != nil {
				panic(err)
			}
			genesisState.GroupGenesis.GroupPolicies = append(genesisState.GroupGenesis.GroupPolicies, &groupPolicy)
		case permaLockGroupPolicyAccount:
			genesisState.GroupGenesis.GroupPolicySeq++
			// Just to do it exactly like in the group module
			derivationKey := make([]byte, 8)
			binary.BigEndian.PutUint64(derivationKey, genesisState.GroupGenesis.GroupPolicySeq)
			pubKey, err := authtypes.NewModuleCredential(grouptypes.ModuleName, []byte{groupkeeper.GroupPolicyTablePrefix}, derivationKey)
			if err != nil {
				panic(err)
			}
			baseAccount, err := authtypes.NewBaseAccountWithPubKey(pubKey)
			if err != nil {
				panic(err)
			}
			accAddress = baseAccount.GetAddress()
			accountConfig.address = accAddress.String()
			account = vestingtypes.NewPermanentLockedAccount(baseAccount, amountInCoins)

			decisionPolicy := grouptypes.NewPercentageDecisionPolicy("0.5", defaultGroupVotingTime, 0)
			groupCfg := genesisGroupConfigs[accountConfig.groupRef]
			if groupCfg.id == 0 {
				panic(fmt.Sprintf("Group %s missing id", accountConfig.groupRef))
			}
			groupPolicy, err := grouptypes.NewGroupPolicyInfo(accAddress, groupCfg.id, sdk.MustAccAddressFromBech32(groupCfg.admin), accountConfig.metadata, 1, decisionPolicy, genesisState.GenesisTime)
			if err != nil {
				panic(err)
			}
			genesisState.GroupGenesis.GroupPolicies = append(genesisState.GroupGenesis.GroupPolicies, &groupPolicy)
		case vestingGroupPolicyAccount5plus5:
			genesisState.GroupGenesis.GroupPolicySeq++
			// Just to do it exactly like in the group module
			derivationKey := make([]byte, 8)
			binary.BigEndian.PutUint64(derivationKey, genesisState.GroupGenesis.GroupPolicySeq)
			pubKey, err := authtypes.NewModuleCredential(grouptypes.ModuleName, []byte{groupkeeper.GroupPolicyTablePrefix}, derivationKey)
			if err != nil {
				panic(err)
			}
			baseAccount, err := authtypes.NewBaseAccountWithPubKey(pubKey)
			if err != nil {
				panic(err)
			}
			accAddress = baseAccount.GetAddress()
			accountConfig.address = accAddress.String()
			startTime := genesisState.GenesisTime.AddDate(5, 0, 0)
			endTime := startTime.AddDate(5, 0, 0)
			account = vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())

			decisionPolicy := grouptypes.NewPercentageDecisionPolicy("0.5", defaultGroupVotingTime, 0)
			groupCfg := genesisGroupConfigs[accountConfig.groupRef]
			if groupCfg.id == 0 {
				panic(fmt.Sprintf("Group %s missing id", accountConfig.groupRef))
			}
			groupPolicy, err := grouptypes.NewGroupPolicyInfo(accAddress, groupCfg.id, sdk.MustAccAddressFromBech32(groupCfg.admin), accountConfig.metadata, 1, decisionPolicy, genesisState.GenesisTime)
			if err != nil {
				panic(err)
			}
			genesisState.GroupGenesis.GroupPolicies = append(genesisState.GroupGenesis.GroupPolicies, &groupPolicy)
		case vestingAccount1plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(1, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = baseAccount
		case vestingAccount2plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(2, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = baseAccount
		case vestingAccount4plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(4, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = baseAccount
		default:
			panic("unknown account type")
		}

		if accAddress == nil || len(accAddress) == 0 {
			panic(fmt.Sprintf("acc address missing for %v", accountConfig))
		}

		accountAny, err := codectypes.NewAnyWithValue(account)
		if err != nil {
			panic(err)
		}
		genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, accountAny)

		// add account balance in bank genesis state
		if amountInMicro > 0 { // I guess not point in making a bank thingy if no tokens
			genesisState.BankGenesis.Balances = append(genesisState.BankGenesis.Balances, banktypes.Balance{
				Address: accAddress.String(),
				Coins:   amountInCoins,
			})
		}

	}
}

func addMainnetGroups(genesisState *GenesisState) {
	for _, groupCfg := range genesisGroupConfigs {
		genesisState.GroupGenesis.GroupSeq++
		groupCfg.id = genesisState.GroupGenesis.GroupSeq
		group := grouptypes.GroupInfo{
			Id:          groupCfg.id,
			Admin:       groupCfg.admin,
			Metadata:    groupCfg.metadata,
			Version:     1,
			TotalWeight: strconv.Itoa(len(groupCfg.memberAccountRefs)),
			CreatedAt:   genesisState.GenesisTime,
		}

		var groupMembers []*grouptypes.GroupMember
		for _, memberAccountRef := range groupCfg.memberAccountRefs {
			groupMembers = append(groupMembers, &grouptypes.GroupMember{
				GroupId: group.Id,
				Member: &grouptypes.Member{
					Address:  genesisAccountConfigs[memberAccountRef].address,
					Weight:   "1",
					Metadata: "", // TODO: Maybe add metadata for these members, so it is clear on-chain what is going on?
					AddedAt:  genesisState.GenesisTime,
				},
			})
		}

		genesisState.GroupGenesis.Groups = append(genesisState.GroupGenesis.Groups, &group)
		genesisState.GroupGenesis.GroupMembers = append(genesisState.GroupGenesis.GroupMembers, groupMembers...)
	}
}

func addGovModuleAccount(genesisState *GenesisState) {
	govAccAddress := sdk.MustAccAddressFromBech32(govModuleAccountAddress)
	govBaseAccount := authtypes.NewBaseAccount(govAccAddress, nil, 0, 0)
	govModuleAccount := authtypes.NewModuleAccount(govBaseAccount, govtypes.ModuleName, authtypes.Burner)
	govModuleAccountAny, err := codectypes.NewAnyWithValue(govModuleAccount)
	if err != nil {
		panic(err)
	}
	genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, govModuleAccountAny)
}
