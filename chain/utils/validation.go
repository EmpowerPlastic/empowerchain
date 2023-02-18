package utils

import (
	"regexp"
	"unicode/utf8"
)

var (
	// Matches the regex for a valid name, which is:
	// - 2-64 characters long
	// - does not start or end with a space
	basicNameValidation = regexp.MustCompile(`^\S.{0,62}\S$`)

	// Matches the regex for a valid description, which is:
	// - up to 256 characters
	descriptionValidation = regexp.MustCompile(`^.{1,256}$`)
)

// IsBasicValidName checks the basicNameValidation
func IsBasicValidName(name string) bool {
	return basicNameValidation.MatchString(name) && utf8.ValidString(name)
}

// IsValidDescription checks descriptionValidation.
func IsValidDescription(description string) bool {
	if description == "" {
		return true // empty desc is valid
	}
	return descriptionValidation.MatchString(description) && utf8.ValidString(description)
}
