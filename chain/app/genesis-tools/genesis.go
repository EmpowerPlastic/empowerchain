package genesistools

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"github.com/cosmos/cosmos-sdk/x/authz"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	crisistypes "github.com/cosmos/cosmos-sdk/x/crisis/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	evidencetypes "github.com/cosmos/cosmos-sdk/x/evidence/types"
	feegranttypes "github.com/cosmos/cosmos-sdk/x/feegrant"
	genutiltypes "github.com/cosmos/cosmos-sdk/x/genutil/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypesv1 "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	grouptypes "github.com/cosmos/cosmos-sdk/x/group"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	icagenesis "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/genesis/types"
	icatypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/types"
	ibctransfertypes "github.com/cosmos/ibc-go/v7/modules/apps/transfer/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

// SetSupply calculates and sets the total supply from the balances in the bank genesis state.
func SetSupply(genesisState *GenesisState) {
	supply := sdk.NewCoins()
	for _, account := range genesisState.BankGenesis.Balances {
		supply = supply.Add(account.Coins...)
	}
	genesisState.BankGenesis.Supply = supply
}

// AddGenesisBaseAccountAndBalance adds a base account to the genesis state if it does not exist.
func AddGenesisBaseAccountAndBalance(cdc codec.Codec, genesisState *GenesisState, accAddress sdk.AccAddress, coins sdk.Coins) {
	// check if account is already present
	var accountFound bool
	for _, accountAny := range genesisState.AuthGenesis.Accounts {
		var account authtypes.AccountI
		err := cdc.UnpackAny(accountAny, &account)
		if err == nil {
			baseAccount, isBaseAccount := account.(*authtypes.BaseAccount)
			if isBaseAccount {
				if baseAccount.GetAddress().String() == accAddress.String() {
					accountFound = true
					// update account balance in bank genesis state
					for i, balance := range genesisState.BankGenesis.Balances {
						if balance.Address == accAddress.String() {
							genesisState.BankGenesis.Balances[i].Coins = balance.Coins.Add(coins...)
							break
						}
					}
					break
				}
			}
		}
	}
	if !accountFound {
		// create new account if not found
		account := authtypes.NewBaseAccountWithAddress(accAddress)
		accountAny, err := codectypes.NewAnyWithValue(account)
		if err != nil {
			log.Panic(err)
		}
		genesisState.AuthGenesis.Accounts = append(genesisState.AuthGenesis.Accounts, accountAny)

		// add account balance in bank genesis state
		genesisState.BankGenesis.Balances = append(genesisState.BankGenesis.Balances, banktypes.Balance{
			Address: accAddress.String(),
			Coins:   coins,
		})
	}
}

// AddGenesisPlasticCreditBalance adds a plastic credit balance to the genesis state.
func AddGenesisPlasticCreditBalance(cdc codec.Codec, genesisState *GenesisState, projectID uint64, denom string, owner string, amount plasticcredit.CreditAmount) {
	// check if credit collection is already present
	collectionFound := false
	for i, creditCollection := range genesisState.PlasticcreditGenesis.CreditCollections {
		if creditCollection.Denom == denom {
			// if credit collection is already present, update the total amount
			genesisState.PlasticcreditGenesis.CreditCollections[i].TotalAmount.Active += amount.Active
			genesisState.PlasticcreditGenesis.CreditCollections[i].TotalAmount.Retired += amount.Retired
			collectionFound = true
			break
		}
	}
	// if credit collection is not present, add it
	if !collectionFound {
		genesisState.PlasticcreditGenesis.CreditCollections = append(genesisState.PlasticcreditGenesis.CreditCollections, []plasticcredit.CreditCollection{
			{
				Denom:     denom,
				ProjectId: projectID,
				TotalAmount: plasticcredit.CreditAmount{
					Active:  amount.Active,
					Retired: amount.Retired,
				},
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
		}...)
	}
	// if credit balance is already present, update the amount
	balanceFound := false
	for i, creditBalance := range genesisState.PlasticcreditGenesis.CreditBalances {
		if creditBalance.Denom == denom && creditBalance.Owner == owner {
			genesisState.PlasticcreditGenesis.CreditBalances[i].Balance.Active += amount.Active
			genesisState.PlasticcreditGenesis.CreditBalances[i].Balance.Retired += amount.Retired
			balanceFound = true
			break
		}
	}
	if !balanceFound {
		genesisState.PlasticcreditGenesis.CreditBalances = append(genesisState.PlasticcreditGenesis.CreditBalances, []plasticcredit.CreditBalance{
			{
				Owner: owner,
				Denom: denom,
				Balance: plasticcredit.CreditAmount{
					Active:  amount.Active,
					Retired: amount.Retired,
				},
			},
		}...)
	}
}

// UnmarshalGenesis unmarshals the raw application genesis state and sets the
// corresponding values in the provided GenesisState.
func UnmarshalGenesis(clientCtx client.Context, genesisState *GenesisState, appState map[string]json.RawMessage) {
	cdc := clientCtx.Codec
	genesisState.AuthGenesis = authtypes.GetGenesisStateFromAppState(cdc, appState)
	cdc.MustUnmarshalJSON(appState[authz.ModuleName], &genesisState.AuthzGenesis)
	genesisState.BankGenesis = *banktypes.GetGenesisStateFromAppState(cdc, appState)
	cdc.MustUnmarshalJSON(appState[capabilitytypes.ModuleName], &genesisState.CapabilityGenesis)
	cdc.MustUnmarshalJSON(appState[crisistypes.ModuleName], &genesisState.CrisisGenesis)
	cdc.MustUnmarshalJSON(appState[distrtypes.ModuleName], &genesisState.DistrGenesis)
	cdc.MustUnmarshalJSON(appState[evidencetypes.ModuleName], &genesisState.EvidenceGenesis)
	cdc.MustUnmarshalJSON(appState[feegranttypes.ModuleName], &genesisState.FeegrantGenesis)
	genesisState.GenutilGenesis = *genutiltypes.GetGenesisStateFromAppState(cdc, appState)
	cdc.MustUnmarshalJSON(appState[govtypes.ModuleName], &genesisState.GovGenesis)
	cdc.MustUnmarshalJSON(appState[grouptypes.ModuleName], &genesisState.GroupGenesis)
	cdc.MustUnmarshalJSON(appState[ibctransfertypes.ModuleName], &genesisState.IBCTransferGenesis)
	cdc.MustUnmarshalJSON(appState[icatypes.ModuleName], &genesisState.ICAGenesis)
	cdc.MustUnmarshalJSON(appState[minttypes.ModuleName], &genesisState.MintGenesis)
	cdc.MustUnmarshalJSON(appState[slashingtypes.ModuleName], &genesisState.SlashingGenesis)
	genesisState.StakingGenesis = *stakingtypes.GetGenesisStateFromAppState(cdc, appState)
	cdc.MustUnmarshalJSON(appState[plasticcredit.ModuleName], &genesisState.PlasticcreditGenesis)
	cdc.MustUnmarshalJSON(appState[wasmtypes.ModuleName], &genesisState.WasmGenesis)
}

// MarshalGenesis marshals the provided GenesisState into a map of module name to
// corresponding raw genesis state.
func MarshalGenesis(clientCtx client.Context, genesisState *GenesisState, appState map[string]json.RawMessage) map[string]json.RawMessage {
	cdc := clientCtx.Codec

	authGenStateBz, err := cdc.MarshalJSON(&genesisState.AuthGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal auth genesis state: %w", err), err)
	}
	appState[authtypes.ModuleName] = authGenStateBz

	authzGenStateBz, err := cdc.MarshalJSON(&genesisState.AuthzGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal authz genesis state: %w", err), err)
	}
	appState[authz.ModuleName] = authzGenStateBz

	bankGenStateBz, err := cdc.MarshalJSON(&genesisState.BankGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal bank genesis state: %w", err), err)
	}
	appState[banktypes.ModuleName] = bankGenStateBz

	capabilityGenStateBz, err := cdc.MarshalJSON(&genesisState.CapabilityGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal capability genesis state: %w", err), err)
	}
	appState[capabilitytypes.ModuleName] = capabilityGenStateBz

	crisisGenStateBz, err := cdc.MarshalJSON(&genesisState.CrisisGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal crisis genesis state: %w", err), err)
	}
	appState[crisistypes.ModuleName] = crisisGenStateBz

	distrGenStateBz, err := cdc.MarshalJSON(&genesisState.DistrGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal distr genesis state: %w", err), err)
	}
	appState[distrtypes.ModuleName] = distrGenStateBz

	evidenceGenStateBz, err := cdc.MarshalJSON(&genesisState.EvidenceGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal evidence genesis state: %w", err), err)
	}
	appState[evidencetypes.ModuleName] = evidenceGenStateBz

	feegrantGenStateBz, err := cdc.MarshalJSON(&genesisState.FeegrantGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal feegrant genesis state: %w", err), err)
	}
	appState[feegranttypes.ModuleName] = feegrantGenStateBz

	genutilGenStateBz, err := cdc.MarshalJSON(&genesisState.GenutilGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal genutil genesis state: %w", err), err)
	}
	appState[genutiltypes.ModuleName] = genutilGenStateBz

	govGenStateBz, err := cdc.MarshalJSON(&genesisState.GovGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal gov genesis state: %w", err), err)
	}
	appState[govtypes.ModuleName] = govGenStateBz

	groupGenStateBz, err := cdc.MarshalJSON(&genesisState.GroupGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal group genesis state: %w", err), err)
	}
	appState[grouptypes.ModuleName] = groupGenStateBz

	ibcTransferGenesisBz, err := cdc.MarshalJSON(&genesisState.IBCTransferGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal ibc transfer genesis state: %w", err), err)
	}
	appState[ibctransfertypes.ModuleName] = ibcTransferGenesisBz

	IcaGenesisBz, err := cdc.MarshalJSON(&genesisState.ICAGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal ica genesis state: %w", err), err)
	}
	appState[icatypes.ModuleName] = IcaGenesisBz

	mintGenStateBz, err := cdc.MarshalJSON(&genesisState.MintGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal mint genesis state: %w", err), err)
	}
	appState[minttypes.ModuleName] = mintGenStateBz

	slashingGenStateBz, err := cdc.MarshalJSON(&genesisState.SlashingGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal slashing genesis state: %w", err), err)
	}
	appState[slashingtypes.ModuleName] = slashingGenStateBz

	stakingGenStateBz, err := cdc.MarshalJSON(&genesisState.StakingGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal staking genesis state: %w", err), err)
	}
	appState[stakingtypes.ModuleName] = stakingGenStateBz

	plasticcreditGenStateBz, err := cdc.MarshalJSON(&genesisState.PlasticcreditGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal plasticcredit genesis state: %w", err), err)
	}
	appState[plasticcredit.ModuleName] = plasticcreditGenStateBz

	wasmGenStateBz, err := cdc.MarshalJSON(&genesisState.WasmGenesis)
	if err != nil {
		log.Panic(fmt.Errorf("failed to marshal wasm genesis state: %w", err), err)
	}
	appState[wasmtypes.ModuleName] = wasmGenStateBz

	return appState
}

// GenesisState defines the application state that is initialized at genesis.
type GenesisState struct {
	GenesisTime time.Time
	ChainID     string

	AuthGenesis             authtypes.GenesisState
	AuthzGenesis            authz.GenesisState
	BankGenesis             banktypes.GenesisState
	CapabilityGenesis       capabilitytypes.GenesisState
	CrisisGenesis           crisistypes.GenesisState
	DistrGenesis            distrtypes.GenesisState
	EvidenceGenesis         evidencetypes.GenesisState
	FeegrantGenesis         feegranttypes.GenesisState
	GenutilGenesis          genutiltypes.GenesisState
	GovGenesis              govtypesv1.GenesisState
	GroupGenesis            grouptypes.GenesisState
	IBCTransferGenesis      ibctransfertypes.GenesisState
	ICAGenesis              icagenesis.GenesisState
	MintGenesis             minttypes.GenesisState
	SlashingGenesis         slashingtypes.GenesisState
	StakingGenesis          stakingtypes.GenesisState
	PlasticcreditGenesis    plasticcredit.GenesisState
	ProofofexistenceGenesis proofofexistence.GenesisState
	WasmGenesis             wasmtypes.GenesisState
}

func GetModuleAccount(cdc codec.Codec, genesisState *GenesisState, moduleAccountName string) (authtypes.ModuleAccountI, bool) {
	for _, accountAny := range genesisState.AuthGenesis.Accounts {
		var account authtypes.AccountI
		err := cdc.UnpackAny(accountAny, &account)
		if err == nil {
			moduleAccount, isModuleAccount := account.(authtypes.ModuleAccountI)
			if isModuleAccount {
				if moduleAccount.GetName() == moduleAccountName {
					return moduleAccount, true
				}
			}
		}
	}
	return nil, false
}

func GetBalanceOfAddress(genesisState *GenesisState, address string, denom string) (sdk.Coin, bool) {
	for _, balance := range genesisState.BankGenesis.Balances {
		if balance.Address == address {
			for _, coin := range balance.Coins {
				if coin.Denom == denom {
					return coin, true
				}
			}
		}
	}

	return sdk.Coin{}, false
}
