package keeper_test

import sdk "github.com/cosmos/cosmos-sdk/types"

func (s *TestSuite) TestHasAccess() {
	testCases := map[string]struct {
		account  string
		msgType  string
		expected bool
	}{
		"found": {
			account:  "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
			msgType:  "msgType1",
			expected: true,
		},
		"not found (wrong account)": {
			account:  "empower1vujkvs47zkrj97fh46a53yf2nty8hm9rqs64f4",
			msgType:  "msgType1",
			expected: false,
		},
		"not found (wrong msgType)": {
			account:  "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
			msgType:  "msgType11",
			expected: false,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			ctx := s.ctx
			addr, _ := sdk.AccAddressFromBech32("empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx")
			tcAddr, _ := sdk.AccAddressFromBech32(tc.account)
			permStore, _ := s.empowerApp.AccessControlKeeper.GetPermStore("mockmodule1")
			permStore.GrantAccess(ctx, addr, "msgType1")

			access := permStore.HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(tc.expected, access)
		})
	}
}

func (s *TestSuite) TestRevokeAccess() {
	testCases := map[string]struct {
		account string
		msgType string
	}{
		"revoke": {
			account: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
			msgType: "msgType1",
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			ctx := s.ctx
			addr, _ := sdk.AccAddressFromBech32("empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx")
			tcAddr, _ := sdk.AccAddressFromBech32(tc.account)
			permStore, _ := s.empowerApp.AccessControlKeeper.GetPermStore("mockmodule1")
			permStore.GrantAccess(ctx, addr, "msgType1")
			access := permStore.HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(true, access)
			permStore.RevokeAccess(ctx, tcAddr, tc.msgType)
			access = permStore.HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(false, access)
		})
	}
}
