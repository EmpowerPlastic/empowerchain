package keeper

import (
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

var _ types.QueryServer = Keeper{}
