# State

The `plasticcredit` module keeps track of plastic credits issued, traded/transferred and retired on-chain. 

## Params

The plasticcredit module stores it's params in state with the prefix of 0x00, it can be updated with governance or the address with authority.

- Params: `0x00 | ProtocolBuffer(Params)`

## Issuer

An Issuer is an entity that is allowed to create Credit Classes and issue Credits under their own Classes.
They are the entity responsible for the data, quality and trust of the plastic credits they issue.

An issue consists of the following fields: `id`, `name`, `description`, `admin`, `accounts`, with `id` being the unique identifier for an issuer.

`name` and `description` is mainly for identifying and letting clients get information on issuers.

`admin` is the address of the administrative account that controls the issuer and can update information and `accounts`. 

`accounts` is a list of addresses that has the privilege to issue credits.

- Issuer: `0x01 | issuerID | -> ProtocolBuffer(Issuer)`

## Collector

## Credit Balance

## Credit Batch

## Credit Class

## Credit Denom

## ID Counters

## Project