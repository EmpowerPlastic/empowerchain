package keeper_test

import (
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestCreateProof(t *testing.T) {
	msgServer, _, ctx := setupMsgServer(t)
	_, err := msgServer.CreateProof(ctx, &types.MsgCreateProof{
		Reporter: "empower10m8qakrveaxvcr5085c73de30ff5umdem2ua5u",
		Hash:     "cZiMTY4IA7pFGfCyhkwTMcFKGJC/hpTiUTeRd7/ttcM=",
	})
	require.NoError(t, err)
}
