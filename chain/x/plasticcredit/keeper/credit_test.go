package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestCreateCreditDenom() {
	testCases := map[string]struct {
		creditTypeAbbreviation string
		serialNumber           string
		expectedValue          string
		err                    error
	}{
		"happy path": {
			creditTypeAbbreviation: "PTEST",
			serialNumber:           "123",
			expectedValue:          "PTEST/123",
			err:                    nil,
		},
		"empty abbrev": {
			creditTypeAbbreviation: "",
			serialNumber:           "123",
			err:                    utils.ErrInvalidValue,
		},
		"empty serial number": {
			creditTypeAbbreviation: "PTEST",
			serialNumber:           "",
			err:                    utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			denom, err := keeper.CreateCreditDenom(tc.creditTypeAbbreviation, tc.serialNumber)
			s.Require().ErrorIs(tc.err, err)
			if tc.err == nil {
				s.Require().Equal(tc.expectedValue, denom)
			}
		})
	}
}
