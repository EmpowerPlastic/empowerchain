package plasticcredit

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

/*
 * The error codes are 4 digits
 * Error codes start with the entity they are about (these correspond to the prefix byte from keys.go)
 * 0: Params
 * 1: IDCounters
 * 2: Issuer
 * 3: Applicant
 * 4: CreditClass
 * 5: Project
 * 6: CreditCollection
 * 7: CreditBalance
 *
 * The numbers after the entity count from 1 by default, but:
 * If the error has a close correspondence in http error codes, use that (e.g. 2404 <- Issuer Not Found)
 */

// x/plasticcredit module sentinel errors
var (
	ErrNotIssuer       = errors.Register(ModuleName, 2001, "address is not an issuer")
	ErrNotFoundIssuer  = errors.Register(ModuleName, 2404, "issuer not found")
	ErrDuplicateIssuer = errors.Register(ModuleName, 2409, "duplicate issuer detected")

	ErrNotFoundApplicant  = errors.Register(ModuleName, 3404, "applicant not found")
	ErrDuplicateApplicant = errors.Register(ModuleName, 3409, "duplicate applicant detected")

	ErrCreditClassAbbreviationTaken = errors.Register(ModuleName, 4001, "credit class abbreviation already in use")
	ErrNotFoundCreditClass          = errors.Register(ModuleName, 4404, "credit class not found")
	ErrDuplicateCreditClass         = errors.Register(ModuleName, 4409, "duplicate credit class detected")

	ErrProjectNotApproved = errors.Register(ModuleName, 5001, "project is not approved")
	ErrNotFoundProject    = errors.Register(ModuleName, 5404, "project not found")
	ErrDuplicateProject   = errors.Register(ModuleName, 5409, "duplicate project detected")

	ErrNotFoundCreditCollection  = errors.Register(ModuleName, 6404, "credit collection not found")
	ErrDuplicateCreditCollection = errors.Register(ModuleName, 6409, "duplicate credit collection detected")

	ErrNotEnoughCredits       = errors.Register(ModuleName, 7001, "not enough credits")
	ErrNotEnoughActiveCredits = errors.Register(ModuleName, 7002, "not enough active credits")
	ErrNotFoundCreditBalance  = errors.Register(ModuleName, 7404, "credit balance not found")
	ErrDuplicateCreditBalance = errors.Register(ModuleName, 7409, "duplicate credit balance detected")
)
