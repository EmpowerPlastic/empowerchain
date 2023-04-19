package certificates

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

/*
 * The error codes are 4 digits
 * Error codes start with the entity they are about (these correspond to the prefix byte from keys.go)
 * 0: Params
 * 9: Certificate
 *
 * The numbers after the entity count from 1 by default, but:
 * If the error has a close correspondence in http error codes, use that (e.g. 2404 <- Issuer Not Found)
 * Error Name should follow format Err[Object][Reason], where Object is the entity name
 */

// x/certificates module sentinel errors
var (
	ErrCertificateNotAllowed = errors.Register(ModuleName, 9001, "address is not an issuer")
	ErrCertificateNotFound   = errors.Register(ModuleName, 9404, "certificate not found")
	ErrCertificateDuplicate  = errors.Register(ModuleName, 9409, "duplicate certificate detected")
)
