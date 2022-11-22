package keeper

import (
	"github.com/empowerchain/empowerchain/x/accesscontrol/types"
)

type Querier struct {
	Keeper
}

var _ types.QueryServer = Querier{}
