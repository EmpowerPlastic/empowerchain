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
 * 4: CreditType
 * 5: Project
 * 6: CreditCollection
 * 7: CreditBalance
 *
 * The numbers after the entity count from 1 by default, but:
 * If the error has a close correspondence in http error codes, use that (e.g. 2404 <- Issuer Not Found)
 * Error Name should follow format Err[Object][Reason], where Object is the entity name
 */

// x/plasticcredit module sentinel errors
var (
	ErrIssuerNotAllowed = errors.Register(ModuleName, 2001, "address is not an issuer")
	ErrIssuerNotFound   = errors.Register(ModuleName, 2404, "issuer not found")
	ErrIssuerDuplicate  = errors.Register(ModuleName, 2409, "duplicate issuer detected")

	ErrApplicantNotFound  = errors.Register(ModuleName, 3404, "applicant not found")
	ErrApplicantDuplicate = errors.Register(ModuleName, 3409, "duplicate applicant detected")

	ErrCreditTypeAbbreviationTaken = errors.Register(ModuleName, 4001, "credit type abbreviation already in use")
	ErrCreditTypeNotFound          = errors.Register(ModuleName, 4404, "credit type not found")
	ErrCreditTypeDuplicate         = errors.Register(ModuleName, 4409, "duplicate credit type detected")

	ErrProjectNotApproved    = errors.Register(ModuleName, 5001, "project is not approved")
	ErrProjectNotNew         = errors.Register(ModuleName, 5002, "project is approved / rejected")
	ErrProjectNotSuspendable = errors.Register(ModuleName, 5003, "project not suspendable")
	ErrProjectNotFound       = errors.Register(ModuleName, 5404, "project not found")
	ErrProjectDuplicate      = errors.Register(ModuleName, 5409, "duplicate project detected")

	ErrCreditCollectionNotFound  = errors.Register(ModuleName, 6404, "credit collection not found")
	ErrCreditCollectionDuplicate = errors.Register(ModuleName, 6409, "duplicate credit collection detected")

	ErrCreditsNotEnough        = errors.Register(ModuleName, 7001, "not enough credits")
	ErrActiveCreditsNotEnough  = errors.Register(ModuleName, 7002, "not enough active credits")
	ErrSameSenderAndRecipient  = errors.Register(ModuleName, 7003, "sender and recipient are the same")
	ErrFailedCreateCertificate = errors.Register(ModuleName, 7004, "failed to create certificate")
	ErrCreditBalanceNotFound   = errors.Register(ModuleName, 7404, "credit balance not found")
	ErrCreditBalanceDuplicate  = errors.Register(ModuleName, 7409, "duplicate credit balance detected")
)
