package utils

import (
	"testing"

	"github.com/stretchr/testify/require"
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
		"Happy path full length:": {
			name:           "This name is 64 characters long, which is the limit we have set!",
			expectedResult: true,
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
			description:    "aylPbqP5OKRLHZvvt8gMZ1r0D02cJkf4mq7PLY8xOFq1bAQPEHvtH3AY4MqHTnfMHPWgHvhOYpmkndMyRqBvkeDZJjMOPMKtiekk6IaYWLTwHaEXC6723LFtjfCCfMN8LaUxWtsSGSWkyn17LKE3QXZLJ6gGDZe9JKAqsGOhQBF1LN5o9pO3E6hMe7ALBIUMdxSpnElqYzDsqBu4u5eAcswBowKwcSWnYI9U1iXQQjQvXsr3PJoBP83oL5Km1RZv",
			expectedResult: true,
		},
		"Too long name should fail": {
			description:    "aylPbqP5OKRLHZvvt8gMZ1r0D02cJkf4mq7PLY8xOFq1bAQPEHvtH3AY4MqHTnfMHPWgHvhOYpmkndMyRqBvkeDZJjMOPMKtiekk6IaYWLTwHaEXC6723LFtjfCCfMN8LaUxWtsSGSWkyn17LKE3QXZLJ6gGDZe9JKAqsGOhQBF1LN5o9pO3E6hMe7ALBIUMdxSpnElqYzDsqBu4u5eAcswBowKwcSWnYI9U1iXQQjQvXsr3PJoBP83oL5Km1RZv+",
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
