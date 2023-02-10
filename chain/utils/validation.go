package utils

import (
	"regexp"
	"unicode/utf8"
)

// Matches the regex for a valid name, which is:
// - 2-64 characters long
// - does not start or end with a space
var basicNameValidation = regexp.MustCompile(`^\S.{0,62}\S$`)

// IsBasicValidName checks the basicNameValidation
func IsBasicValidName(name string) bool {
	return basicNameValidation.MatchString(name) && utf8.ValidString(name)
}
