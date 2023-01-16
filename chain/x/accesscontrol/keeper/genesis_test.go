package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol"
)

func (s *TestSuite) TestGenesis() {
	testCases := map[string]struct {
		genesis  accesscontrol.GenesisState
		expErr   bool
		expPanic bool
	}{
		"default genesis": {
			genesis:  *accesscontrol.DefaultGenesis(),
			expErr:   false,
			expPanic: false,
		},
		"proper genesis": {
			genesis: accesscontrol.GenesisState{
				PermStores: []accesscontrol.ModulePermStore{
					{
						ModuleName: "mockmodule1",
						Accesses: []accesscontrol.Access{
							{
								Address: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
								MsgType: "msgType11",
							},
							{
								Address: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
								MsgType: "msgType12",
							},
							{
								Address: "empower1vujkvs47zkrj97fh46a53yf2nty8hm9rqs64f4",
								MsgType: "msgType12",
							},
						},
					},
					{
						ModuleName: "mockmodule2",
						Accesses: []accesscontrol.Access{
							{
								Address: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
								MsgType: "msgType21",
							},
							{
								Address: "empower1vujkvs47zkrj97fh46a53yf2nty8hm9rqs64f4",
								MsgType: "msgType21",
							},
						},
					},
				},
			},
			expErr:   false,
			expPanic: false,
		},
		"wrong address": {
			genesis: accesscontrol.GenesisState{
				PermStores: []accesscontrol.ModulePermStore{
					{
						ModuleName: "mockmodule1",
						Accesses: []accesscontrol.Access{
							{
								Address: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcry",
								MsgType: "msgType11",
							},
						},
					},
				},
			},
			expErr:   true,
			expPanic: false,
		},
		"module store not registered": {
			genesis: accesscontrol.GenesisState{
				PermStores: []accesscontrol.ModulePermStore{
					{
						ModuleName: "mockmodule3",
						Accesses: []accesscontrol.Access{
							{
								Address: "empower1euf0uzgegfvyvwy6935pm82er5q3zkj5yytcrx",
								MsgType: "msgType11",
							},
						},
					},
				},
			},
			expErr:   false,
			expPanic: true,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			err := tc.genesis.Validate()
			if tc.expErr {
				s.Require().Error(err)
				return
			}
			if tc.expPanic {
				defer func() {
					r := recover()
					s.Require().NotEqual(nil, r)
				}()
			}
			err = s.empowerApp.AccessControlKeeper.InitGenesis(s.ctx, tc.genesis)
			s.Require().NoError(err)

			export, err := s.empowerApp.AccessControlKeeper.ExportGenesis(s.ctx)
			s.Require().NoError(err)
			for _, expectedStore := range tc.genesis.PermStores {
				var storeFound bool
				for _, givenStore := range export.PermStores {
					if expectedStore.ModuleName == givenStore.ModuleName {
						s.Require().ElementsMatch(expectedStore.Accesses, givenStore.Accesses)
						storeFound = true
					}
				}
				s.Require().True(storeFound)
			}
		})
	}
}
