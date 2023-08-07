package utils

import (
	"regexp"
	"strings"
	"unicode/utf8"

	"cosmossdk.io/errors"
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

// ValidBasicName checks the basicNameValidation
func ValidBasicName(name string) error {
	var messages []string
	if !utf8.ValidString(name) {
		messages = append(messages, "name is not valid utf-8")
	}
	if !basicNameValidation.MatchString(name) {
		messages = append(messages, "name cannot start or end with a space and must be between 2 and 64 characters")
	}
	if len(messages) > 0 {
		return errors.Wrapf(ErrInvalidValue, "invalid name: %s", strings.Join(messages, "\n"))
	}
	return nil
}

// ValidDescription checks descriptionValidation.
func ValidDescription(description string) error {
	if description == "" {
		return nil
	}
	var messages []string
	if !utf8.ValidString(description) {
		messages = append(messages, "description is not valid utf-8")
	}
	if !descriptionValidation.MatchString(description) {
		messages = append(messages, "description must be between 1 and 256 characters")
	}
	if len(messages) > 0 {
		return errors.Wrapf(ErrInvalidValue, "invalid description: %s", strings.Join(messages, "\n"))
	}
	return nil
}
