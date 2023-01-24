package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol"
)

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
			err := s.k[0].GrantAccess(ctx, addr, "msgType1")
			s.Require().NoError(err)

			events := s.ctx.EventManager().ABCIEvents()
			access := s.k[0].HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(tc.expected, access)
			if tc.expected == true {
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventAccessGranted, ok := parsedEvent.(*accesscontrol.EventAccessGranted)
				s.Require().True(ok)
				s.Require().Equal(&accesscontrol.EventAccessGranted{
					ModuleName: "mockmodule1",
					Account:    tc.account,
					MsgType:    tc.msgType,
				}, eventAccessGranted)
			}
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
			err := s.k[0].GrantAccess(ctx, addr, "msgType1")
			s.Require().NoError(err)
			access := s.k[0].HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(true, access)
			err = s.k[0].RevokeAccess(ctx, tcAddr, tc.msgType)
			s.Require().NoError(err)
			access = s.k[0].HasAccess(ctx, tcAddr, tc.msgType)
			s.Require().Equal(false, access)
			events := s.ctx.EventManager().ABCIEvents()
			s.Require().Len(events, 2)
			parsedEvent, err := sdk.ParseTypedEvent(events[1])
			s.Require().NoError(err)
			EventAccessRevoked, ok := parsedEvent.(*accesscontrol.EventAccessRevoked)
			s.Require().True(ok)
			s.Require().Equal(&accesscontrol.EventAccessRevoked{
				ModuleName: "mockmodule1",
				Account:    tc.account,
				MsgType:    tc.msgType,
			}, EventAccessRevoked)
		})
	}
}
