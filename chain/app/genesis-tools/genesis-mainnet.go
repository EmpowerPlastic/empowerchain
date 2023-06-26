package genesistools

import (
	"encoding/binary"
	"fmt"
	"github.com/cosmos/cosmos-sdk/codec"
	"strconv"
	"time"

	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	vestingtypes "github.com/cosmos/cosmos-sdk/x/auth/vesting/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypesv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	grouptypes "github.com/cosmos/cosmos-sdk/x/group"
	groupkeeper "github.com/cosmos/cosmos-sdk/x/group/keeper"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/cosmos/gogoproto/proto"
	icacontrollertypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types"
	icahosttypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/host/types"
	ibctransfertypes "github.com/cosmos/ibc-go/v7/modules/apps/transfer/types"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

const (
	genesisAmount           uint64 = 200_000_000 // $MPWR
	govModuleAccountAddress        = "empower10d07y265gmmuvt4z0w9aw880jnsr700jxwhwvd"
)

type accountType int

const (
	basicAccount accountType = iota
	groupPolicyAccount
	permaLockGroupPolicyAccount
	vestingGroupPolicyAccount5plus5
	vestingAccount0plus1
	vestingAccount1plus1
	vestingAccount2plus1
	vestingAccount3plus1
	vestingAccount4plus1
)

var leftToBeDistributed = []uint64{
	30,
}

type groupConfig struct {
	id                uint64
	admin             string
	memberAccountRefs []string
	metadata          string
}

type genesisAccountConfig struct {
	amount      float64
	accountType accountType
	address     string
	groupRef    string // Only needed for group policy accounts
	metadata    string // Only relevant for group policy accounts
}

var defaultGroupVotingTime = time.Hour * 336

var genesisAccountConfigs = map[string]*genesisAccountConfig{
	"P-1": {
		amount:      115,
		accountType: basicAccount,
		address:     "empower1fqsfh795c3cvvhkd6nd2036mzavrnchny0j3u3", // FINAL ADDRESS (G)
	},
	"P-2": {
		amount:      10,
		accountType: basicAccount,
		address:     "empower1p7fgpt73de0tvz6xav3sfugj8pjhgdq7utmg6h", // TODO: TMP ACCT - REPLACE WITH REAL ADDRESS WHEN WE HAVE IT
	},
	"P-3": {
		amount:      10,
		accountType: basicAccount,
		address:     "empower1zmz636u0fsjsslk36r57780w2p5dznxgea59en", // FINAL ADDRESS (J)
	},
	"P-4": {
		amount:      25,
		accountType: basicAccount,
		address:     "empower19reldm703kn8ada764r56cavka870xruafpe30", // FINAL ADDRESS (C)
	},
	"P-5": {
		amount:      10,
		accountType: basicAccount,
		address: "empower16jaagrs8kd46hndaq7t38g3eekcy3chu8rhcyz", // FINAL ADDRESS (EHW)
	},
	"A-1": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Empower tech deployment"}`,
		groupRef:    "G-1",
	},
	"A-2": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "EmpowerChain tech funding"}`,
		groupRef:    "G-2",
	},
	"A-3": {
		amount:      22_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Deposit app usage incentives"}`,
		groupRef:    "G-3",
	},
	"A-4": {
		amount:      6_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Plastic credit usage incentives"}`,
		groupRef:    "G-3",
	},
	"A-5": {
		amount:      20_000_000 - 7249984.367949, // TODO: Adjust for actual amount (minus genesis airdrop)
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Future airdrops, etc"}`,
		groupRef:    "G-3",
	},
	"A-6": {
		amount:      10_000_000,
		accountType: permaLockGroupPolicyAccount,
		metadata:    `{"name": "Permalock impact staking"}`,
		groupRef:    "G-4",
	},
	"A-7": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Grants"}`,
		groupRef:    "G-4",
	},
	"A-8": {
		amount:      36_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Community growth"}`,
		groupRef:    "G-4",
	},
	"A-9": {
		amount:      50_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Waste community user incentives"}`,
		groupRef:    "G-3",
	},
	"A-10": {
		amount:      15_000_000,
		accountType: vestingGroupPolicyAccount5plus5,
		metadata:    `{"name": "Strategic reserve"}`,
		groupRef:    "G-5",
	},
	"A-11": {
		amount:      14_999_800,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Empower team vesting"}`,
		groupRef:    "G-5",
	},
	"A-12": {
		amount:      2_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Global waste lottery"}`,
		groupRef:    "G-3",
	},
	"A-13": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Empower admin"}`,
		groupRef:    "G-5",
	},
	"A-14": {
		amount:      1_000_000 + 1_000_000 - 252305.385279, // TODO: Adjust for remaining tokens (minus testnet rewards)
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Testnet rewards"}`,
		groupRef:    "G-3",
	},
	"A-15": {
		amount:      2_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Bug and security bounties"}`,
		groupRef:    "G-3",
	},
	"A-16": {
		amount:      0,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Infrastructure & Interchain funding"}`,
		groupRef:    "G-2",
	},
	"A-17": {
		amount:      20_000_000,
		accountType: groupPolicyAccount,
		metadata:    `{"name": "Empower presale"}`,
		groupRef:    "G-5",
	},
}

// Make sure only setting P addresses as admin
var genesisGroupConfigs = map[string]*groupConfig{
	"G-1": {
		id:                0, // Gets set at runtime
		admin:             genesisAccountConfigs["P-1"].address,
		memberAccountRefs: []string{"P-1", "P-3", "P-5"}, // FINAL MEMBERS
		metadata:          `{"name": "EmpowerChain Tech deployment"}`,
	},
	"G-2": {
		id:                0, // Gets set at runtime
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2", "P-3", "P-4", "P-5"}, // FINAL MEMBERS
		metadata:          `{"name": "EmpowerChain Tech funding"}`,
	},
	"G-3": {
		id:                0, // Gets set at runtime
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2", "P-3", "P-4", "P-5"}, // FINAL MEMBERS
		metadata:          `{"name": "Usage incentives"}`,
	},
	"G-4": {
		id:                0, // Gets set at runtime
		admin:             govModuleAccountAddress,
		memberAccountRefs: []string{"P-1", "P-2", "P-3", "P-4", "P-5"}, // FINAL MEMBERS
		metadata:          `{"name": "EmpowerChain impact and growth"}`,
	},
	"G-5": {
		id:                0, // Gets set at runtime
		admin:             genesisAccountConfigs["P-1"].address,
		memberAccountRefs: []string{"P-1", "P-2", "P-3", "P-4", "P-5"}, // FINAL MEMBERS
		metadata:          `{"name": "Empower"}`,
	},
}

// MainnetGenesisState sets the genesis state for the mainnet
func MainnetGenesisState(genesisState *GenesisState, cdc codec.Codec) {
	addMainnetAirdropAndRewardsToGenesisAccountConfig()

	addGovModuleAccount(genesisState)
	addMainnetGroups(genesisState)
	addMainnetAccounts(genesisState)
	setMintParams(genesisState)
	disableIBC(genesisState)
	setWasmPermissions(genesisState)
	setDistributionParams(genesisState)
	setInitialGovParams(genesisState)
	setCrisisFee(genesisState)
	setStakingParams(genesisState)
	setSlashingParams(genesisState)
	setPlasticCreditParams(genesisState)

	SetSupply(genesisState)
	verifyGenesisAmount(genesisState, cdc)
	fmt.Println("Mainnet genesis state created")
}

func addGovModuleAccount(genesisState *GenesisState) {
	fmt.Println("Adding gov module account")
	govAccAddress := sdk.MustAccAddressFromBech32(govModuleAccountAddress)
	govBaseAccount := authtypes.NewBaseAccount(govAccAddress, nil, 0, 0)
	govModuleAccount := authtypes.NewModuleAccount(govBaseAccount, govtypes.ModuleName, authtypes.Burner)
	govModuleAccountAny, err := codectypes.NewAnyWithValue(govModuleAccount)
	if err != nil {
		panic(err)
	}
	genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, govModuleAccountAny)
}

func addMainnetGroups(genesisState *GenesisState) {
	fmt.Println("Adding mainnet groups")
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
					Metadata: "",
					AddedAt:  genesisState.GenesisTime,
				},
			})
		}

		genesisState.GroupGenesis.Groups = append(genesisState.GroupGenesis.Groups, &group)
		genesisState.GroupGenesis.GroupMembers = append(genesisState.GroupGenesis.GroupMembers, groupMembers...)
	}
}

func addMainnetAccounts(genesisState *GenesisState) {
	fmt.Println("Adding mainnet accounts")
	for _, accountConfig := range genesisAccountConfigs {
		amountInMicro := uint64(accountConfig.amount * 1000000)
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
		case vestingAccount0plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(0, 0, 9) // 9 days after genesis because soft launch and stuff
			endTime := startTime.AddDate(1, 0, 0)
			vestingAcct := vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = vestingAcct
		case vestingAccount1plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(1, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingAcct := vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = vestingAcct
		case vestingAccount2plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(2, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingAcct := vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = vestingAcct
		case vestingAccount4plus1:
			accAddress = sdk.MustAccAddressFromBech32(accountConfig.address)
			baseAccount := authtypes.NewBaseAccountWithAddress(accAddress)
			startTime := genesisState.GenesisTime.AddDate(4, 0, 0)
			endTime := startTime.AddDate(1, 0, 0)
			vestingAcct := vestingtypes.NewContinuousVestingAccount(baseAccount, amountInCoins, startTime.Unix(), endTime.Unix())
			account = vestingAcct
		default:
			panic("unknown account type")
		}

		if len(accAddress) == 0 {
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

func setMintParams(genesisState *GenesisState) {
	genesisState.MintGenesis.Minter.Inflation = sdk.ZeroDec() // Turn off rewards at first
	genesisState.MintGenesis.Params = minttypes.Params{
		MintDenom:           params.BaseCoinDenom,
		InflationRateChange: sdk.NewDecWithPrec(13, 2),
		InflationMax:        sdk.ZeroDec(),
		InflationMin:        sdk.ZeroDec(),
		GoalBonded:          sdk.NewDecWithPrec(67, 2),
		BlocksPerYear:       uint64(60 * 60 * 8766 / 5), // assuming 5-second block times, might need to be corrected in the future
	}
}

func disableIBC(genesisState *GenesisState) {
	// IBC off at first, until we get shit settled
	genesisState.IBCTransferGenesis.Params = ibctransfertypes.Params{
		SendEnabled:    false,
		ReceiveEnabled: false,
	}

	genesisState.ICAGenesis.HostGenesisState.Params = icahosttypes.Params{
		HostEnabled:   false,
		AllowMessages: []string{},
	}

	genesisState.ICAGenesis.ControllerGenesisState.Params = icacontrollertypes.Params{
		ControllerEnabled: false,
	}
}

func setWasmPermissions(genesisState *GenesisState) {
	genesisState.WasmGenesis.Params = wasmtypes.Params{
		InstantiateDefaultPermission: wasmtypes.AccessTypeEverybody,
		CodeUploadAccess: wasmtypes.AccessConfig{
			Permission: wasmtypes.AccessTypeAnyOfAddresses,
			Addresses: []string{
				genesisAccountConfigs["A-1"].address,
			},
		},
	}
}

func setDistributionParams(genesisState *GenesisState) {
	genesisState.DistrGenesis.Params = distrtypes.Params{
		CommunityTax:        sdk.MustNewDecFromStr("0.25"), // 25% community tax, as per constitution and block rewards setup
		WithdrawAddrEnabled: true,
	}
}

func setInitialGovParams(genesisState *GenesisState) {
	defaultPeriod := time.Hour * 24 * 2 // 2 days
	genesisState.GovGenesis.Params = &govtypesv1.Params{
		MinDeposit:                 sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(2000_000_000))), // 2000 $MPWR
		MaxDepositPeriod:           &defaultPeriod,
		VotingPeriod:               &defaultPeriod,                      // 2 days, just to start
		Quorum:                     sdk.NewDecWithPrec(334, 3).String(), // 33.4%
		Threshold:                  sdk.NewDecWithPrec(67, 2).String(),  // 67&
		VetoThreshold:              sdk.NewDecWithPrec(334, 3).String(), // 33.4%
		MinInitialDepositRatio:     sdk.OneDec().String(),               // All of it!
		BurnVoteQuorum:             false,
		BurnProposalDepositPrevote: true,
		BurnVoteVeto:               true,
	}
}

func setCrisisFee(genesisState *GenesisState) {
	genesisState.CrisisGenesis.ConstantFee = sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(100_000_000)) // 100 $MPWR
}

func setStakingParams(genesisState *GenesisState) {
	defaultUnbondingTime := time.Hour * 24 * 7 * 3 // 3 weeks
	genesisState.StakingGenesis.Params = stakingtypes.Params{
		UnbondingTime:     defaultUnbondingTime,
		MaxValidators:     50,
		MaxEntries:        7,
		HistoricalEntries: 10_000,
		BondDenom:         params.BaseCoinDenom,
		MinCommissionRate: sdk.ZeroDec(),
	}
}

func setSlashingParams(genesisState *GenesisState) {
	genesisState.SlashingGenesis.Params = slashingtypes.Params{
		SignedBlocksWindow:      10_000,
		MinSignedPerWindow:      sdk.NewDecWithPrec(5, 2), // 5%
		DowntimeJailDuration:    time.Minute * 10,
		SlashFractionDoubleSign: sdk.NewDecWithPrec(5, 2), // 5%
		SlashFractionDowntime:   sdk.NewDecWithPrec(1, 4), // 0.01%
	}
}

func setPlasticCreditParams(genesisState *GenesisState) {
	genesisState.PlasticcreditGenesis.Params = plasticcredit.Params{
		IssuerCreator:         genesisAccountConfigs["A-13"].address,
		CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(2000_000_000)),
	}
}

func verifyGenesisAmount(genesisState *GenesisState, cdc codec.Codec) {
	fmt.Println("Verifying genesis amount")
	genesisTargetAmountInMicro := genesisAmount * 1_000_000
	for _, left := range leftToBeDistributed {
		genesisTargetAmountInMicro -= left * 1_000_000
	}

	actualAmount := uint64(0)
	//liquidTokens := uint64(0)
	for _, balance := range genesisState.BankGenesis.Balances {
		found, coin := balance.Coins.Find(params.BaseCoinDenom)
		if !found {
			panic("empty balance in bank")
		}
		actualAmount += coin.Amount.Uint64()

		/*for _, accountAny := range genesisState.AuthGenesis.Accounts {
			var account authtypes.AccountI
			err := cdc.UnpackAny(accountAny, &account)
			if err != nil {
				panic(err)
			}


			if account.GetAddress().Equals(balance.GetAddress()) && accountAny.TypeUrl == "/cosmos.auth.v1beta1.BaseAccount" {
				if account.GetPubKey() != nil && account.GetPubKey().Type() == "ModuleCredential" {
				} else {
					liquidTokens += coin.Amount.Uint64()
				}

				break
			}
		}*/
	}

	diff := genesisTargetAmountInMicro - actualAmount
	if diff > 1_000_000 {
		fmt.Println("Diff:", diff)
		panic(fmt.Sprintf("actual amount %d != target amount %d", actualAmount, genesisTargetAmountInMicro))
	}
	fmt.Println("Actual amount:", actualAmount / 1_000_000, "MPWR")

	//fmt.Println("Liquid tokens:", liquidTokens / 1_000_000, "MPWR")
}
