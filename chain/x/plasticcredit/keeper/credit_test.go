package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestCreateCreditDenom() {
	testCases := map[string]struct {
		creditClassAbbreviation string
		serialNumber            string
		expectedValue           string
		err                     error
	}{
		"happy path": {
			creditClassAbbreviation: "PCRD",
			serialNumber:            "123",
			expectedValue:           "PCRD/123",
			err:                     nil,
		},
		"empty abbrev": {
			creditClassAbbreviation: "",
			serialNumber:            "123",
			err:                     utils.ErrInvalidValue,
		},
		"empty serial number": {
			creditClassAbbreviation: "PCRD",
			serialNumber:            "",
			err:                     utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			denom, err := keeper.CreateCreditDenom(tc.creditClassAbbreviation, tc.serialNumber)
			s.Require().ErrorIs(tc.err, err)
			if tc.err == nil {
				s.Require().Equal(tc.expectedValue, denom)
			}
		})
	}
}
