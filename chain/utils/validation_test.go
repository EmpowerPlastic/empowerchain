package utils

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
)

func TestIsBasicValidName(t *testing.T) {
	testCases := map[string]struct {
		name          string
		expectedError bool
		errorMessage  string
	}{
		"Happy path 1": {
			name:          "Perfectly valid name",
			expectedError: false,
		},
		"Happy path 2:": {
			name:          "also OK_78%$",
			expectedError: false,
		},
		"Happy path 3": {
			name:          "fx",
			expectedError: false,
		},
		"Happy path full length:": {
			name:          "This name is 64 characters long, which is the limit we have set!",
			expectedError: false,
		},
		"Too short name should fail": {
			name:          "f",
			expectedError: true,
			errorMessage:  "invalid name: name cannot start or end with a space and must be between 2 and 64 characters: invalid value",
		},
		"Too long name should fail": {
			name:          "This name is 65 characters long, which is above the limit we set!",
			expectedError: true,
			errorMessage:  "invalid name: name cannot start or end with a space and must be between 2 and 64 characters: invalid value",
		},
		"Starting with space should fail": {
			name:          " Starting with space should fail",
			expectedError: true,
			errorMessage:  "invalid name: name cannot start or end with a space and must be between 2 and 64 characters: invalid value",
		},
		"Ending with space should fail": {
			name:          "Ending with space should fail ",
			expectedError: true,
			errorMessage:  "invalid name: name cannot start or end with a space and must be between 2 and 64 characters: invalid value",
		},
		"Non-utf8 characters should fail": {
			name:          "This name has a non-utf8 character: \x80 and it should fail",
			expectedError: true,
			errorMessage:  "invalid name: name is not valid utf-8: invalid value",
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			if tc.expectedError {
				err := ValidBasicName(tc.name)
				require.Error(t, err)
				require.Equal(t, tc.errorMessage, err.Error())
				return
			}
			err := ValidBasicName(tc.name)
			require.NoError(t, err)
		})
	}
}

func TestIsValidDescription(t *testing.T) {
	testCases := map[string]struct {
		description   string
		expectedError bool
		errorMessage  string
	}{
		"Happy path 1": {
			description:   "Perfectly valid description",
			expectedError: false,
		},
		"Happy path 2:": {
			description:   "also OK_78%$",
			expectedError: false,
		},
		"Happy path empty string:": {
			description:   "",
			expectedError: false,
		},
		"Happy path full length:": {
			description:   sample.String(256),
			expectedError: false,
		},
		"Too long name should fail": {
			description:   sample.String(257),
			expectedError: true,
			errorMessage:  "invalid description: description must be between 1 and 256 characters: invalid value",
		},
		"Non-utf8 characters should fail": {
			description:   "This name has a non-utf8 character: \x80 and it should fail",
			expectedError: true,
			errorMessage:  "invalid description: description is not valid utf-8: invalid value",
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			if tc.expectedError {
				err := ValidDescription(tc.description)
				require.Error(t, err)
				require.Equal(t, tc.errorMessage, err.Error())
				return
			}
			err := ValidDescription(tc.description)
			require.NoError(t, err)
		})
	}
}
