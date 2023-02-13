package utils

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
)

func TestIsBasicValidName(t *testing.T) {
	testCases := map[string]struct {
		name           string
		expectedResult bool
	}{
		"Happy path 1": {
			name:           "Perfectly valid name",
			expectedResult: true,
		},
		"Happy path 2:": {
			name:           "also OK_78%$",
			expectedResult: true,
		},
		"Happy path 3": {
			name:           "fx",
			expectedResult: true,
		},
		"Happy path full length:": {
			name:           "This name is 64 characters long, which is the limit we have set!",
			expectedResult: true,
		},
		"Too short name should fail": {
			name:           "f",
			expectedResult: false,
		},
		"Too long name should fail": {
			name:           "This name is 65 characters long, which is above the limit we set!",
			expectedResult: false,
		},
		"Starting with space should fail": {
			name:           " Starting with space should fail",
			expectedResult: false,
		},
		"Ending with space should fail": {
			name:           "Ending with space should fail ",
			expectedResult: false,
		},
		"Non-utf8 characters should fail": {
			name:           "This name has a non-utf8 character: \x80 and it should fail",
			expectedResult: false,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			result := IsBasicValidName(tc.name)
			require.Equal(t, tc.expectedResult, result)
		})
	}
}

func TestIsValidDescription(t *testing.T) {
	testCases := map[string]struct {
		description    string
		expectedResult bool
	}{
		"Happy path 1": {
			description:    "Perfectly valid description",
			expectedResult: true,
		},
		"Happy path 2:": {
			description:    "also OK_78%$",
			expectedResult: true,
		},
		"Happy path empty string:": {
			description:    "",
			expectedResult: true,
		},
		"Happy path full length:": {
			description:    sample.String(256),
			expectedResult: true,
		},
		"Too long name should fail": {
			description:    sample.String(257),
			expectedResult: false,
		},
		"Non-utf8 characters should fail": {
			description:    "This name has a non-utf8 character: \x80 and it should fail",
			expectedResult: false,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			result := IsValidDescription(tc.description)
			require.Equal(t, tc.expectedResult, result)
		})
	}
}
